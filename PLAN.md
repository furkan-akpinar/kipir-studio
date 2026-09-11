# KIPIR — uygulama planı

Yerel geliştirme. Uzak depo, push ve yayınlama yapılmayacak.

1. React + TypeScript + Vite kurulumu; GSAP / ScrollTrigger.
2. Öncelikli prototip: gerçek videolar, posterler, perspektifli altı panelli halka. Kaydırma ve oklar tek ScrollTrigger ilerlemesini kontrol eder. Görünürlük, otomatik oynatma ve azaltılmış hareket yönetilir.
3. Galerinin masaüstü / mobil kontrolünden sonra özgün açılış, katmanlı menü, hizmetler, süreç, stüdyo, form ve altı deneyim sayfası.
4. TypeScript, production build, dört ekran boyutu ve gerçek tarayıcı etkileşimlerinin doğrulanması. Medya lisansları ve eksikler belgelenir.

## Dosya yapısı

```text
public/media/            Yerel, optimize video ve posterler
src/components/         Gallery, Video, Header, ContactForm
src/data/projects.ts    Altı konseptin ortak içerik kaynağı
src/App.tsx             Ana sayfa ve detay yolları
src/styles.css          Tipografi, renkler ve responsive düzen
docs/MEDIA.md           Kaynaklar ve kullanım koşulları
docs/QA.md              Gerçek kontrol sonuçları
```

## Komutlar

```sh
npm install
npm run dev -- --host 127.0.0.1
npm run typecheck
npm run build
npm run preview -- --host 127.0.0.1
```

## Tasarım

Sıcak kâğıt rengi üzerinde siyah, büyük ve sıkı tipografi; mercan marka, limon etiketler, elektrik mavisi bölüm ve pembe süreç. Ana vurgu 5:3 videolardan oluşan gerçek 3D halka. Türkçe karakterli, SIL OFL lisanslı Anton ve Manrope yerel fontları.

## Referans notu

Ek klasöründe yalnızca metin dosyası var; tarifte bahsedilen ekran görüntüsü bulunmuyor. Canlı pixel.melbourne referansı ve verilen ölçekler kullanılacak, ekran görüntüsüyle birebir karşılaştırma doğrulanmış sayılmayacak.
