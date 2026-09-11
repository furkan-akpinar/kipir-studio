import { useEffect } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Intro from './components/Intro';
import Footer from './components/Footer';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Process from './components/Process';
import Studio from './components/Studio';
import Contact from './components/Contact';
import ServiceDetail from './components/ServiceDetail';
import { projects } from './data/projects';

function RoutePosition() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      if (hash) {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        const pinned = ScrollTrigger.getAll().find(item => item.trigger === target);
        if (pinned) window.scrollTo(0, pinned.start);
        else target?.scrollIntoView();
      } else window.scrollTo(0, 0);
    });
    return () => cancelAnimationFrame(id);
  }, [pathname, hash, key]);
  return null;
}
function Home() {
  useEffect(() => { document.title = 'KIPIR — İyi fikirler yerinde durmaz.'; }, []);
  return <>
    <Intro/><Gallery/>
    <Marquee/>
    <Services/>
    <Process/><Studio/><Contact/><Footer/>
  </>;
}
function Detail() {
  const {slug}=useParams(), project=projects.find(p=>p.slug===slug);
  useEffect(() => { document.title = project ? `${project.title} — KIPIR Deneyimleri` : 'Sayfa bulunamadı — KIPIR'; }, [project]);
  if(!project)return <NotFound/>;
  const next=projects[(projects.indexOf(project)+1)%projects.length];
  return <><section className="detail-hero"><Link className="detail-back" to="/#deneyimler">← Tüm deneyimler</Link><div className="detail-meta"><span className="eyebrow">{project.category}</span><span className="concept-label">Bir KIPIR konsepti</span></div><h1>{project.title}<span style={{color:project.color}}>✳</span></h1><p>{project.description}</p></section>
    <div className="detail-video detail-photo"><img src={project.still} alt={`${project.title} konseptinin atmosferi`} width="1000" height="600"/></div>
    <section className="detail-story section-pad"><span className="eyebrow">BİR FİKİR OLARAK BAŞLADI.</span><div><h2>{project.description}</h2><p>{project.concept}</p><p>{project.idea}</p><div className="detail-services"><span className="eyebrow">BU DENEYİMİN PARÇALARI</span><ul>{project.services.map(s=><li key={s}>{s}</li>)}</ul></div></div></section>
    <section className="detail-visuals detail-poster-only"><div className="project-poster" style={{background:project.color}}><span>KIPIR SUNAR / KONSEPT SERİSİ</span><strong>{project.title}</strong><span className="poster-spark" aria-hidden="true">✳</span><div><p>{project.description}</p><span>GİRİŞ: HAYAL GÜCÜ</span></div></div></section>
    <div className="detail-disclosure"><span>✳</span><p>Bu proje, hayali KIPIR stüdyosu için hazırlanmış bir konsept çalışmadır. Gerçek müşteri veya gerçekleştirilmiş etkinlik iddiası içermez. Stok görüntüler fikrin atmosferini anlatmak için kullanılmıştır.</p></div>
    <Link className="next-project section-pad" to={`/deneyimler/${next.slug}`}><span className="eyebrow">SIRADAKİ DENEYİM</span><div><h2>{next.title}</h2><span>↗</span></div></Link><Footer/></>;
}
function NotFound(){return <section className="not-found"><span className="eyebrow">404 / BİRAZ FAZLA KIPIRDADIK.</span><h1>BURASI<br/>BOŞ KALMIŞ.</h1><Link className="pill" to="/">Ana sayfaya dön ↗</Link></section>;}
export default function App(){return <><a className="skip-link" href="#icerik">İçeriğe geç</a><div id="sayfa-basi"/><Header/><RoutePosition/><main id="icerik"><Routes><Route path="/" element={<Home/>}/><Route path="/deneyimler/:slug" element={<Detail/>}/><Route path="hizmetler/:slug" element={<ServiceDetail/>}/><Route path="*" element={<NotFound/>}/></Routes></main></>;}
