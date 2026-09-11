import { useEffect, useRef, useState } from 'react';
import type { Project } from '../data/projects';

// A persistent poster remains underneath the first decoded frame. Only nearby
// panels receive a source; off-screen panels and hidden tabs stop decoding.
export default function Video({ project, enabled, controls = false, interactive = true }: { project: Project; enabled: boolean; controls?: boolean; interactive?: boolean }) {
  const surface = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLVideoElement>(null);
  const [onScreen, setOnScreen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [failed, setFailed] = useState(false);
  const [requested, setRequested] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting));
    if (surface.current) observer.observe(surface.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => { if (enabled) setLoaded(true); }, [enabled]);
  useEffect(() => {
    const video = ref.current;
    if (!video || !loaded) return;
    let cancelled = false;
    const sync = () => {
      if ((enabled || (requested && onScreen)) && document.visibilityState === 'visible') {
        video.muted = true;
        void video.play().catch(() => { if (!cancelled) setBlocked(true); });
      } else video.pause();
    };
    sync();
    document.addEventListener('visibilitychange', sync);
    return () => { cancelled = true; video.pause(); document.removeEventListener('visibilitychange', sync); };
  }, [enabled, loaded, requested, onScreen]);
  return <div ref={surface} className={`video-surface ${playing ? 'is-playing' : ''}`}>
    <img className="video-poster" src={project.poster} alt="" loading="lazy" width="1000" height="600" />
    {loaded && <video ref={ref} src={project.video}
      muted loop playsInline autoPlay={enabled} preload={loaded ? 'metadata' : 'none'} controls={controls && loaded}
      aria-label={`${project.title} — konsepti temsil eden stok video`} onPlaying={() => { setPlaying(true); setBlocked(false); }}
      onError={() => setFailed(true)} />}
    {failed ? <span className="video-message">Video yüklenemedi. Poster gösteriliyor.</span> :
      (blocked || (controls && !loaded)) && <button className="video-play" tabIndex={interactive ? 0 : -1} onClick={() => {
        setLoaded(true); setRequested(true);
        if (ref.current?.currentSrc) void ref.current.play().catch(() => setBlocked(true));
      }}>▷ Videoyu oynat</button>}
  </div>;
}
