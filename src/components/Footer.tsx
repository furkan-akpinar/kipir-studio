import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';

export default function Footer() {
  return <footer className="footer footer-remix"><div className="footer-top"><Link className="brand-link" to="/" aria-label="KIPIR ana sayfa"><BrandLogo/></Link><p>Yerinde duramayan<br/>fikirler için.</p><a href="#sayfa-basi" className="back-top back-top-sticker" aria-label="Sayfanın başına dön"><svg viewBox="0 0 64 76" aria-hidden="true"><path className="up-arrow-shadow" d="M9 36 34 8l25 28H44v33H27V36Z"/><path className="up-arrow-body" d="M5 30 30 2l25 28H40v33H23V30Z"/><path className="up-arrow-highlight" d="m17 23 13-14 13 14"/></svg></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} KIPIR — Yaratıcı etkinlik & deneyim stüdyosu.</span><span className="creator-signature">Furkan Akpınar</span></div></footer>;
}
