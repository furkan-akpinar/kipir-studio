import { useEffect } from 'react';
import type { CSSProperties } from 'react';
import { Link, useParams } from 'react-router-dom';
import { services } from '../data/services';
import Footer from './Footer';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(item => item.slug === slug);
  useEffect(() => { document.title = service ? `${service.title} — KIPIR` : 'Sayfa bulunamadı — KIPIR'; }, [service]);
  if (!service) return <section className="not-found"><h1>BU FİKİR<br/>BURADA DEĞİL.</h1><Link className="pill" to="/#neler-yapiyoruz">Neler yapıyoruz?</Link></section>;
  const next = services[(services.indexOf(service) + 1) % services.length];
  const colors = { '--service-bg': service.background, '--service-ink': service.ink, '--service-accent': service.accent } as CSSProperties;
  return <><article className="service-page" style={colors}>
    <header className="service-hero"><Link className="service-back" to="/#neler-yapiyoruz">← Neler yapıyoruz?</Link><h1>{service.lines.map(line => <span key={line}>{line}</span>)}</h1><div className="service-introduction"><div><p className="service-lead">{service.lead}</p><p className="service-story">{service.story}</p></div><figure className="service-image"><img src={service.image} alt={service.imageAlt} width="1400" height="1000" fetchPriority="high"/><figcaption>{service.title}</figcaption></figure></div></header>
    <section className="service-outcomes"><h2>FİKİR NEYE<br/>DÖNÜŞÜR?</h2><div>{service.outcomes.map(([title, body]) => <div className="service-outcome" key={title}><h3>{title}</h3><p>{body}</p></div>)}</div></section>
    <section className="service-approach"><p className="service-statement">{service.statement}</p><div><h2>BİZ NASIL<br/>BAKIYORUZ?</h2><p>{service.approach}</p><Link className="service-start" to="/#iletisim">Birlikte planlayalım <span aria-hidden="true">↗</span></Link></div></section>
    <Link className="service-next" to={`/hizmetler/${next.slug}`}><span>Bir de buraya bak</span><strong>{next.title}</strong><span aria-hidden="true">↗</span></Link>
  </article><Footer/></>;
}
