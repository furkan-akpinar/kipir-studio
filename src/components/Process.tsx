import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { useReducedMotion } from './Gallery';

const steps = [
  ['TANIŞIRIZ.', 'Önce seni, fikrini ve bir araya getirmek istediğin insanları dinleriz.', 'BİR MERHABA'],
  ['FİKRİ BULURUZ.', 'Sorular sorar, ihtimalleri çoğaltırız. İçimize sinen o fikrin peşine düşeriz.', 'YA ŞÖYLE OLSA?'],
  ['ŞEKİL VERİRİZ.', 'Fikre bir dil, bir mekân, bir ritim veririz. Küçük detayları da düşünürüz.', 'TAM DA BÖYLE!'],
  ['HAYATA GEÇİRİRİZ.', 'Planlar açılır, parçalar birleşir. Hayal ettiğimiz şey birlikte yerini bulur.', 'HAZIR MIYIZ?'],
  ['BİRLİKTE YAŞARIZ.', 'Kapılar açılır, insanlar gelir. O fikir artık hepimizin olur.', 'İŞTE BU!'],
];
export default function Process() {
  const root = useRef<HTMLElement>(null), reduced = useReducedMotion();
  useLayoutEffect(() => {
    if (reduced) return;
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.process-beat').forEach(row => {
        gsap.from(row, { y: 32, opacity: 0, duration: .65, ease: 'power2.out', scrollTrigger: { trigger: row, start: 'top 92%', once: true } });
      });
    }, root);
    return () => context.revert();
  }, [reduced]);
  return <section ref={root} className="process-remix" id="surec" aria-labelledby="process-title">
    <div className="process-remix-heading"><h2 id="process-title">FİKİRDEN<br/><span>KALABALIĞA.</span></h2><p>Bir merhabayla başlar.<br/>Birlikte kıpırdayarak büyür.</p><span className="process-heading-sticker" aria-hidden="true">HEP BERABER ↗</span></div>
    <ol className="process-beats">{steps.map(([title, body, tag], index) => <li className="process-beat" key={title}><span className="process-beat-number" aria-hidden="true">0{index + 1}</span><h3>{title}</h3><div className="process-beat-copy"><span className="process-beat-tag">{tag}</span><p>{body}</p></div></li>)}</ol>
  </section>;
}
