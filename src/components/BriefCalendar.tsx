import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';

export const dateKey = (date: Date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
export const readableDate = (value: string) => new Date(`${value}T12:00:00`).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });

export default function BriefCalendar({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const [open, setOpen] = useState(!!value);
  const [month, setMonth] = useState(() => { const start = value ? new Date(`${value}T12:00:00`) : new Date(); return new Date(start.getFullYear(), start.getMonth(), 1); });
  const [focused, setFocused] = useState(value || dateKey(today));
  const grid = useRef<HTMLDivElement>(null), keyboardFocus = useRef(false);
  useEffect(() => { if (keyboardFocus.current) { grid.current?.querySelector<HTMLButtonElement>(`[data-date="${focused}"]`)?.focus(); keyboardFocus.current = false; } }, [focused, month]);
  const previousDisabled = month.getFullYear() === today.getFullYear() && month.getMonth() <= today.getMonth();
  const changeMonth = (offset: number) => { const next = new Date(month.getFullYear(), month.getMonth() + offset, 1); setMonth(next); setFocused(dateKey(next < today ? today : next)); };
  const keyMove = (event: KeyboardEvent<HTMLButtonElement>, day: Date) => {
    const offsets: Record<string, number> = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 };
    if (!(event.key in offsets)) return;
    event.preventDefault(); const next = new Date(day); next.setDate(next.getDate() + offsets[event.key]);
    if (next < today) return;
    keyboardFocus.current = true; setFocused(dateKey(next)); setMonth(new Date(next.getFullYear(), next.getMonth(), 1));
  };
  const blanks = (month.getDay() + 6) % 7;
  const count = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  return <div className="brief-date-picker">
    <div className="brief-date-choices"><button type="button" aria-pressed={!open && !value} onClick={() => { onChange(''); setOpen(false); }}>Henüz belli değil <span>↝</span></button><button type="button" aria-expanded={open} aria-controls="brief-calendar" onClick={() => setOpen(!open)}>{value ? readableDate(value) : 'Bir tarih seçelim'} <span>＋</span></button></div>
    {open && <div className="brief-calendar" id="brief-calendar"><div className="calendar-heading"><button type="button" aria-label="Önceki ay" disabled={previousDisabled} onClick={() => changeMonth(-1)}>←</button><strong aria-live="polite">{month.toLocaleDateString('tr-TR', { month: 'long', year: 'numeric' })}</strong><button type="button" aria-label="Sonraki ay" onClick={() => changeMonth(1)}>→</button></div>
      <div className="calendar-week" aria-hidden="true">{['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map(day => <span key={day}>{day}</span>)}</div>
      <div className="calendar-days" ref={grid}>{Array.from({ length: blanks }, (_, index) => <span key={`blank-${index}`}/>)}{Array.from({ length: count }, (_, index) => { const day = new Date(month.getFullYear(), month.getMonth(), index + 1), key = dateKey(day); return <button type="button" key={key} data-date={key} disabled={day < today} tabIndex={key === focused ? 0 : -1} aria-label={readableDate(key)} aria-pressed={value === key} className={key === dateKey(today) ? 'is-today' : ''} onKeyDown={event => keyMove(event, day)} onClick={() => { setFocused(key); onChange(key); }}>{index + 1}</button>; })}</div>
      <p>Ok tuşlarıyla günler arasında gezebilirsin.</p></div>}
  </div>;
}
