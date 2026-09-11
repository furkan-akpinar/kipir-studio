import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import BriefCalendar, { dateKey, readableDate } from './BriefCalendar';

type Fields = 'name' | 'email' | 'kind' | 'city' | 'date' | 'idea';
type Values = Record<Fields, string>;
const groups: Fields[][] = [['kind', 'idea'], ['city', 'date'], ['name', 'email']];
const kinds = ['Festival / müzik', 'Pop-up deneyimi', 'Ürün lansmanı', 'Yaratıcı buluşma', 'Henüz adını koymadık'];
const steps = ['FİKRİN', 'BULUŞMA', 'SEN'];
const titles = ['NE KIPIRDIYOR?', 'NEREDE BULUŞALIM?', 'SENİ TANIYALIM.'];
const validate = (values: Values, fields: Fields[]) => {
  const errors: Partial<Record<Fields, string>> = {};
  if (fields.includes('kind') && !values.kind) errors.kind = 'Aklındaki buluşmayı seç.';
  if (fields.includes('idea') && values.idea.trim().length < 20) errors.idea = 'Fikrini en az 20 karakterle anlat.';
  if (fields.includes('city') && values.city.trim().length < 2) errors.city = 'Buluşmak istediğin şehri yaz.';
  if (fields.includes('date') && values.date && values.date < dateKey(new Date())) errors.date = 'Bugün veya sonrasındaki bir tarihi seç.';
  if (fields.includes('name') && values.name.trim().length < 2) errors.name = 'Adını en az 2 karakterle yaz.';
  if (fields.includes('email') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Geçerli bir e-posta adresi yaz.';
  return errors;
};

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const [step, setStep] = useState(0), [ready, setReady] = useState(false);
  const [values, setValues] = useState<Values>({ name: '', email: '', kind: '', city: '', date: '', idea: '' });
  const [errors, setErrors] = useState<Partial<Record<Fields, string>>>({});
  const update = (field: Fields, value: string) => { setValues(current => ({ ...current, [field]: value })); setErrors(current => ({ ...current, [field]: undefined })); setReady(false); };
  const focusHeading = () => requestAnimationFrame(() => {
    heading.current?.focus({ preventScroll: true });
    form.current?.scrollIntoView({ block: 'start', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  });
  const navigate = (target: number) => { setStep(target); setReady(false); setErrors({}); focusHeading(); };
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = validate(values, step === 2 ? groups.flat() : groups[step]); setErrors(next);
    const first = Object.keys(next)[0] as Fields | undefined;
    if (first) {
      setStep(groups.findIndex(group => group.includes(first)));
      requestAnimationFrame(() => document.getElementById(`brief-${first}`)?.focus());
    } else if (step < 2) navigate(step + 1);
    else { setReady(true); focusHeading(); }
  };
  const fieldProps = (field: Fields) => ({ name: field, id: `brief-${field}`, value: values[field], 'aria-invalid': !!errors[field], 'aria-describedby': errors[field] ? `brief-${field}-error` : undefined });
  const error = (field: Fields) => errors[field] ? <span className="brief-error" id={`brief-${field}-error`}>{errors[field]}</span> : null;
  return <form ref={form} className="creative-brief" noValidate onSubmit={submit} aria-labelledby="brief-title">
    <div className="brief-rail"><span className="brief-ticket-label">BİR FİKRİM VAR ↗</span><div className="brief-progress" aria-label="Form aşamaları">{steps.map((label, index) => <button key={label} type="button" disabled={index > step} aria-current={index === step ? 'step' : undefined} onClick={() => navigate(index)}><span>{index < step ? '✓' : `0${index + 1}`}</span>{label}</button>)}</div></div>
    <div className="brief-main"><div className="brief-title-row"><h3 id="brief-title" ref={heading} tabIndex={-1}>{ready ? 'FİKRİN HAZIR!' : titles[step]}</h3><span className="brief-page-count">{ready ? '✓' : `0${step + 1} / 03`}</span></div>
      {ready ? <div className="brief-review"><p className="brief-review-intro">İlk kıvılcımı yakaladık.</p><dl><div><dt>Fikir</dt><dd>{values.kind}</dd></div><div><dt>Buluşma</dt><dd>{values.city} · {values.date ? readableDate(values.date) : 'Tarih birlikte netleşir'}</dd></div><div><dt>Sen</dt><dd>{values.name} · {values.email}</dd></div><div className="brief-review-idea"><dt>Aklındaki</dt><dd>{values.idea}</dd></div></dl><p role="status" className="brief-review-status">Bilgilerin hazır. Bu önizlemede gönderim kapalı; mesajın gönderilmedi.</p><button className="brief-next" type="button" onClick={() => navigate(0)}>Fikrimi düzenle <span>↗</span></button></div> : <>
        <div className="brief-fields" key={step}>
          {step === 0 && <><fieldset className="brief-kind" id="brief-kind" tabIndex={-1} aria-invalid={!!errors.kind} aria-describedby={errors.kind ? 'brief-kind-error' : undefined}><legend>Nasıl bir buluşma hayal ediyorsun?</legend><div className="brief-kind-options">{kinds.map(label => <label className="brief-kind-option" key={label}><input type="radio" name="kind" value={label} checked={values.kind === label} onChange={() => update('kind', label)}/><span>{label}</span>{values.kind === label && <i aria-hidden="true">✓</i>}</label>)}</div>{error('kind')}</fieldset><div className="brief-field brief-idea"><label htmlFor="brief-idea">Biraz fikrinden bahset.</label><textarea {...fieldProps('idea')} onChange={event => update('idea', event.target.value)} placeholder="Ya şöyle bir şey yapsak…" required rows={3} minLength={20} maxLength={3000}/><div className="brief-field-meta">{error('idea')}<span>{values.idea.length} / 3000</span></div></div></>}
          {step === 1 && <><div className="brief-field"><label htmlFor="brief-city">Hangi şehirde?</label><input {...fieldProps('city')} onChange={event => update('city', event.target.value)} autoComplete="address-level2" placeholder="Buluşma noktamız…" required maxLength={100}/>{error('city')}</div><fieldset className="brief-date" id="brief-date" tabIndex={-1} aria-invalid={!!errors.date}><legend>Aklındaki tarih <span>İsteğe bağlı</span></legend><BriefCalendar value={values.date} onChange={value => update('date', value)}/>{error('date')}</fieldset></>}
          {step === 2 && <><p className="brief-greeting">Fikrinle tanıştık. Sıra sende.</p><div className="brief-field"><label htmlFor="brief-name">Sana nasıl seslenelim?</label><input {...fieldProps('name')} onChange={event => update('name', event.target.value)} autoComplete="name" placeholder="Adın soyadın" required maxLength={100}/>{error('name')}</div><div className="brief-field"><label htmlFor="brief-email">E-posta adresin</label><input {...fieldProps('email')} onChange={event => update('email', event.target.value)} type="email" autoComplete="email" placeholder="merhaba@ornek.com" required maxLength={200}/>{error('email')}</div></>}
        </div>
        <div className="brief-actions">{step > 0 ? <button className="brief-back" type="button" onClick={() => navigate(step - 1)}>← Geri</button> : <span className="brief-little-note">Her şey bir fikirle başlar.</span>}<button className="brief-next" type="submit">{step === 2 ? 'Fikrini kontrol et' : 'Devam edelim'}<span>↗</span></button></div>
        <p className="brief-privacy">Bu önizlemede gönderim kapalı. Yazdıkların yalnızca bu sayfada kalır.</p>
      </>}
    </div>
  </form>;
}
