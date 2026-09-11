import { Link } from 'react-router-dom';

const ServiceLink = ({ slug, children }: { slug: string; children: React.ReactNode }) => <Link className="service-word-link" to={`/hizmetler/${slug}`}>{children}</Link>;
export default function Services() {
  return <section className="services-poster" id="neler-yapiyoruz" aria-labelledby="services-title">
    <h2 id="services-title" className="sr-only">Neler yapıyoruz?</h2>
    <p className="services-manifesto">Fikirleri insanların bir araya geldiği deneyimlere dönüştüren yaratıcı bir ekibiz. Tasarımı, mekânı, sesi ve hareketi aynı hikâyede buluşturuyoruz. Merak ediyor, deniyor, birlikte üretiyoruz. Çünkü en güzel işler, yaparken de iyi hissettirenler. <strong>HADİ BİRAZ KIPIRDAYALIM!</strong></p>
    <div className="services-type">
      <div className="services-row"><ServiceLink slug="etkinlik-tasarimi">ETKİNLİK TASARIMI</ServiceLink><img className="services-sticker sticker-shaka" src="/media/sticker-shaka.png" alt="" aria-hidden="true" width="160" height="160" loading="lazy"/></div>
      <div className="services-row"><ServiceLink slug="yaratici-fikir">YARATICI FİKİR</ServiceLink><span className="services-dots" aria-hidden="true">••</span><ServiceLink slug="gorsel-kimlik">GÖRSEL KİMLİK</ServiceLink></div>
      <div className="services-row"><ServiceLink slug="mekan-ve-sahne">MEKÂN &amp; SAHNE</ServiceLink><img className="services-sticker sticker-cursor" src="/media/sticker-cursor.png" alt="" aria-hidden="true" width="160" height="160" loading="lazy"/><ServiceLink slug="produksiyon">PRODÜKSİYON</ServiceLink></div>
      <div className="services-row"><span className="services-type-spark" aria-hidden="true">✳</span><ServiceLink slug="film-ve-fotograf">FİLM &amp; FOTOĞRAF</ServiceLink><span className="services-dots" aria-hidden="true">••</span><ServiceLink slug="birlikte">BİRLİKTE</ServiceLink></div>
      <div className="services-row services-finale"><ServiceLink slug="bolca-kipirti">BOLCA KIPIRTI!<span className="services-asterisk" aria-hidden="true">*</span></ServiceLink></div>
    </div>
    <p className="services-postscript">*Bir araya gelince daha güzel.</p>
  </section>;
}
