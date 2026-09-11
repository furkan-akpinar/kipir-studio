import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useReducedMotion } from './Gallery';
import BrandLogo from './BrandLogo';

const links = [['Deneyimler','/#deneyimler'],['Neler yapıyoruz?','/#neler-yapiyoruz'],['Nasıl çalışıyoruz?','/#surec'],['Stüdyo','/#studyo'],['Bir fikir bırakalım.','/#iletisim']];
export default function Header() {
  const dialog = useRef<HTMLDialogElement>(null), opener = useRef<HTMLButtonElement>(null);
  const previousOverflow = useRef(''), animation = useRef<gsap.core.Timeline | null>(null);
  const navigate = useNavigate(), reduced = useReducedMotion();
  const open = () => {
    const el = dialog.current; if (!el) return;
    previousOverflow.current = document.body.style.overflow; document.body.style.overflow = 'hidden'; el.showModal();
    animation.current?.kill();
    animation.current = gsap.timeline({onComplete:()=>el.querySelector('button')?.focus({preventScroll:true})}).fromTo(el.querySelectorAll('.menu-layer'),{yPercent:100},{yPercent:0,stagger:.08,duration:reduced?0:.5,ease:'power3.inOut'})
      .fromTo(el.querySelector('.menu-content'),{opacity:0,y:20},{opacity:1,y:0,duration:reduced?0:.3},'-=.1');
  };
  const close = (target?: string) => {
    const el = dialog.current; if (!el?.open) return;
    animation.current?.kill();
    animation.current = gsap.timeline({onComplete:()=>{
      el.close(); document.body.style.overflow = previousOverflow.current; opener.current?.focus({preventScroll:true}); if(target) navigate(target);
    }}).to(el.querySelector('.menu-content'),{opacity:0,duration:reduced?0:.1}).to(el.querySelectorAll('.menu-layer'),{yPercent:-100,stagger:.04,duration:reduced?0:.35});
  };
  useEffect(()=>()=>{animation.current?.kill();if(dialog.current?.open) document.body.style.overflow=previousOverflow.current;},[]);
  return <><header className="site-header"><Link className="brand-link" to="/#sayfa-basi" aria-label="KIPIR ana sayfa"><BrandLogo/></Link><button className="menu-button" ref={opener} onClick={open} aria-haspopup="dialog">Menü <span className="menu-icon" aria-hidden="true">＋</span></button></header>
    <dialog className="menu-dialog" ref={dialog} aria-label="Ana menü" onCancel={e=>{e.preventDefault();close();}}>
      <div className="menu-layer layer-one"/><div className="menu-layer layer-two"/><div className="menu-layer layer-three"/>
      <div className="menu-content"><div className="menu-top"><span aria-label="KIPIR"><BrandLogo/></span><button className="menu-button" onClick={()=>close()} autoFocus>Kapat <span>×</span></button></div>
        <nav aria-label="Ana gezinme">{links.map(([label,url])=><a key={url} href={url} onClick={e=>{e.preventDefault();close(url);}}>{label}</a>)}</nav>
        <div className="menu-bottom"><span>İyi fikirlerin buluşma noktası.</span><span>YARATICI ETKİNLİK & DENEYİM STÜDYOSU</span></div>
      </div>
    </dialog></>;
}
