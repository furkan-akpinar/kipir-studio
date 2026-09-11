import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/projects';
import Video from './Video';

gsap.registerPlugin(ScrollTrigger);

export function useReducedMotion() {
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  return reduced;
}

const FACE_COUNT = 8;
const FACE_ANGLE = 360 / FACE_COUNT;
const orbitProjects = [...projects,
  { ...projects[3], slug: 'orbit-craft', title: 'ATÖLYEDE', video: '/media/orbit-craft.mp4', poster: '/media/orbit-craft.jpg' },
  { ...projects[1], slug: 'orbit-lights', title: 'SAHNEDE', video: '/media/orbit-lights.mp4', poster: '/media/orbit-lights.jpg' },
];

function Arrow({ previous = false }: { previous?: boolean }) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" style={previous ? { transform: 'rotate(180deg)' } : undefined}>
    <path d="M3 12h17m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;
}

export default function Gallery() {
  const scene = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const trigger = useRef<ScrollTrigger | null>(null);
  const scrollTween = useRef<gsap.core.Tween | null>(null);
  const [phase, setPhase] = useState(0);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const systemReduced = useReducedMotion();
  const [simple, setSimple] = useState(false);
  const reduced = systemReduced || simple;
  const active = Math.max(0, Math.min(projects.length - 1, Math.round(phase)));

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: .05 });
    if (stage.current) observer.observe(stage.current);
    return () => observer.disconnect();
  }, [reduced]);

  useLayoutEffect(() => {
    if (reduced || !scene.current || !ring.current || !stage.current) return;
    const root = scene.current, disk = ring.current;
    let resizeFrame = 0;
    const geometry = () => {
      const viewport = window.innerWidth;
      const tablet = viewport <= 991;
      const shortLandscape = window.innerHeight <= 550 && viewport > window.innerHeight;
      const ratio = shortLandscape ? .6 : viewport <= 767 ? 1.4 : tablet ? 1.2 : .6;
      const availableHeight = (stage.current?.clientHeight ?? window.innerHeight) - 180;
      const width = Math.min(viewport * (tablet ? .7 : .5), Math.max(170, availableHeight / ratio));
      // The reference has eight orbit positions. Six are navigable project stops;
      // the two background faces have their own unique licensed footage.
      const radius = width / (2 * Math.tan(Math.PI / FACE_COUNT)) + viewport * (tablet ? .4 : .3);
      root.style.setProperty('--orbit-width', `${width}px`);
      root.style.setProperty('--orbit-height', `${width * ratio}px`);
      root.style.setProperty('--orbit-radius', `${radius}px`);
    };
    geometry();
    const context = gsap.context(() => {
      const progress = { value: 0 };
      const animation = gsap.to(progress, {
        value: projects.length - 1, ease: 'none',
        onUpdate: () => {
          disk.style.transform = `translateZ(calc(-1 * var(--orbit-radius))) rotateY(${-progress.value * FACE_ANGLE}deg)`;
          setPhase(progress.value);
        },
      });
      trigger.current = ScrollTrigger.create({
        trigger: root, start: 'top top', end: 'bottom bottom',
        animation, scrub: .65, invalidateOnRefresh: true, onRefreshInit: geometry,
      });
    }, root);
    const resize = () => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
    };
    const cancelNavigation = () => scrollTween.current?.kill();
    window.addEventListener('resize', resize);
    window.addEventListener('wheel', cancelNavigation, { passive: true });
    window.addEventListener('touchstart', cancelNavigation, { passive: true });
    return () => {
      cancelAnimationFrame(resizeFrame);
      cancelNavigation();
      context.revert();
      trigger.current = null;
      window.removeEventListener('resize', resize);
      window.removeEventListener('wheel', cancelNavigation);
      window.removeEventListener('touchstart', cancelNavigation);
    };
  }, [reduced]);

  const go = (index: number) => {
    const st = trigger.current;
    if (!st) return;
    scrollTween.current?.kill();
    const target = st.start + (st.end - st.start) * index / (projects.length - 1);
    const cursor = { y: window.scrollY };
    scrollTween.current = gsap.to(cursor, {
      y: target, duration: .9, ease: 'power2.inOut',
      onUpdate: () => { st.scroll(cursor.y); st.update(); },
    });
  };

  return <section id="deneyimler" ref={scene} className={`gallery gallery-reference${reduced ? ' gallery-reduced' : ''}`} aria-label="Seçili deneyimler">
    {reduced ? <>
      <h2 className="sr-only">Seçili deneyimler</h2>
      {!systemReduced && <button className="gallery-return" onClick={() => { setSimple(false); setPhase(0); }}>3D galeriye dön</button>}
      <div className="reduced-projects">{projects.map(p => <article key={p.slug}>
        <Video project={p} enabled={false} controls /><h2>{p.title}</h2><p>{p.description}</p><Link to={`/deneyimler/${p.slug}`}>Deneyimi keşfet ↗</Link>
      </article>)}</div>
    </> : <>
      <div className="orbit-track">
        <div className="orbit-stage" ref={stage}>
          <div className="orbit-perspective">
            <div className="orbit-ring" ref={ring}>
              {Array.from({ length: FACE_COUNT }, (_, slot) => {
                const logical = slot + Math.round((phase - slot) / FACE_COUNT) * FACE_COUNT;
                const project = orbitProjects[slot];
                const angle = (logical - phase) * FACE_ANGLE;
                const current = logical === active;
                return <div className="orbit-panel" key={slot} aria-hidden={!current}
                  style={{ transform: `rotateY(${slot * FACE_ANGLE}deg) translateZ(var(--orbit-radius))` }}>
                  <Video key={project.slug} project={project} enabled={inView && Math.abs(angle) < 145 && !paused} interactive={current} />
                </div>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="orbit-controls-track">
        <div className="orbit-controls-stage">
          <div className="orbit-arrows">
            <button className="orbit-arrow" aria-label="Önceki deneyim" disabled={active === 0} onClick={() => go(active - 1)}><Arrow previous /></button>
            <button className="orbit-arrow" aria-label="Sonraki deneyim" disabled={active === projects.length - 1} onClick={() => go(active + 1)}><Arrow /></button>
          </div>
          <div className="gallery-assist">
            <button onClick={() => setPaused(!paused)} aria-pressed={paused}>{paused ? 'Videoları oynat' : 'Videoları duraklat'}</button>
            <button onClick={() => { setSimple(true); setPhase(0); requestAnimationFrame(() => scene.current?.scrollIntoView()); }}>Hareketi azalt</button>
            <a href="#neler-yapiyoruz">Galeriyi geç</a>
          </div>
          <span className="sr-only" role="status">{projects[active].title} — {active + 1} / {projects.length}</span>
        </div>
      </div>
      <div className="orbit-copy-track">
        {projects.map((project, index) => <article className="orbit-copy" key={project.slug} aria-hidden={active !== index}>
          <div className="orbit-copy-inner">
            <h2 className={`orbit-title${project.title.length > 10 ? ' orbit-title-long' : ''}`}>{project.title}</h2>
            <Link className="orbit-link" tabIndex={active === index ? 0 : -1} to={`/deneyimler/${project.slug}`}>Deneyimi keşfet</Link>
          </div>
        </article>)}
      </div>
    </>}
  </section>;
}
