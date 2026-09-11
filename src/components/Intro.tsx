import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from './Gallery';

gsap.registerPlugin(ScrollTrigger);

const phrases = [
  { text: 'İYİ FİKİRLER', sticker: 'FİKİR', className: 'idea' },
  { text: 'YERİNDE', sticker: 'DENEYİM', className: 'experience' },
  { text: 'DURMAZ.', sticker: 'BİRLİKTE', className: 'together' },
];

export default function Intro() {
  const section = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    const refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
    if (reduced || !section.current) return () => cancelAnimationFrame(refreshFrame);
    const context = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>('.intro-slogan-line');
      gsap.set(lines, { xPercent: index => index === 1 ? -115 : 115 });
      gsap.fromTo('.intro-letter',
        { yPercent: 115, rotation: 8, opacity: 0 },
        { yPercent: 0, rotation: 0, opacity: 1, stagger: .075, duration: 1.05, delay: .12, ease: 'power3.out' },
      );
      const passage = gsap.timeline({
        defaults: { duration: 1, ease: 'none' },
        scrollTrigger: {
          trigger: section.current, start: 'top top', end: 'bottom bottom',
          scrub: .55, invalidateOnRefresh: true,
        },
      });
      passage.to('.intro-logo-scene', { xPercent: -115, duration: .9 }, .12)
        .to(lines[0], { xPercent: 0 }, .68)
        .to(lines[1], { xPercent: 0 }, 1.18)
        .to(lines[2], { xPercent: 0 }, 1.68)
        .to({}, { duration: .65 }, 2.68);
    }, section);
    return () => { cancelAnimationFrame(refreshFrame); context.revert(); };
  }, [reduced]);

  return <section className={`intro${reduced ? ' intro-reduced' : ''}`} ref={section} aria-label="KIPIR">
    <div className="intro-stage">
      <div className="intro-scene intro-logo-scene">
        <h1 className="intro-mark" aria-label="KIPIR">
          <span className="intro-letters" aria-hidden="true">{Array.from('KIPIR', (letter, index) => <span className="intro-letter" key={index}><span className="intro-glyph" style={{ animationDelay: `${index * -1.12}s` }}>{letter}</span></span>)}</span>
        </h1>
      </div>
      <div className="intro-slogan">
        <h2 className="sr-only">İyi fikirler yerinde durmaz.</h2>
        {phrases.map(phrase => <div key={phrase.text} className={`intro-slogan-line scene-${phrase.className}`} aria-hidden="true">
          <div className="intro-phrase-content">
            <span className="intro-phrase">{phrase.text}</span>
            <span className="intro-sticker-position"><span className="intro-sticker">{phrase.sticker}</span></span>
          </div>
        </div>)}
      </div>
    </div>
  </section>;
}
