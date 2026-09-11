# KIPIR medya ve lisans kaydı

Kaynak kontrolü: 11 Eylül 2026. Referans sitenin film, logo, font veya görselleri kullanılmadı.

## Videolar

Tüm seçili videoların kaynak sayfası **Mixkit Stock Video Free License** gösterir: [lisans koşulları](https://mixkit.co/license/#videoFree). Bu lisans kişisel ve ticari projelerde kullanıma izin verir; stok dosyalarını bağımsız bir stok ürün olarak yeniden dağıtma hakkı vermez. KIPIR'daki kullanımlar, özgün tasarımın içine yerleştirilmiş temsili stok çekimlerdir; gerçek etkinlik kaydı veya bir kişinin marka desteği olarak sunulmaz.

| Yerel dosya | Kaynak sayfası / üretici | Gösterilen içerik |
| --- | --- | --- |
| sokakta.mp4 | [Skateboarders in an urban area with graffiti](https://mixkit.co/free-stock-video/skateboarders-in-an-urban-area-with-graffiti-4568/) — Alona | Grafitili alanda kaykaycılar |
| gece-vardiyasi.mp4 | [Hands of a DJ turning knobs on a turntable](https://mixkit.co/free-stock-video/hands-of-a-dj-turning-knobs-on-a-turntable-42421/) — Mixkit | Işıklar altında DJ mikseri |
| bir-yudum.mp4 | [Person working with the machines in a cafeteria](https://mixkit.co/free-stock-video/person-working-with-the-machines-in-a-cafeteria-41228/) — Mixkit | Kahve makinesiyle çalışan barista |
| renk-pazari.mp4 | [Ceramic artist working in the workshop](https://mixkit.co/free-stock-video/ceramic-artist-working-in-the-workshop-1971/) — Edgar Fernández | Seramik atölyesinde kil hazırlama |
| acik-hava.mp4 | [Audience of a music festival](https://mixkit.co/free-stock-video/audience-of-a-music-festival-4185/) — Dan Dubassy | Festival seyircisi hızlandırılmış çekim; gün batımı veya piknik kaydı olduğu iddia edilmez |
| ilk-adim.mp4 | [Girl running during sunset ties her shoelaces](https://mixkit.co/free-stock-video/girl-running-during-sunset-ties-her-shoelaces-4851/) — Yana | Gün batımında koşu ve ayakkabı bağlama |

Kaynak indirme adresi şeması: `https://assets.mixkit.co/videos/{id}/{id}-720.mp4`. Kimlikler sırasıyla 4568, 42421, 41228, 1971, 4185, 4851. İndirmeler HTTP 200 ve `video/mp4` içerik türüyle doğrulandı.

`scripts/prepare-media.mjs` dosyaları 1000×600, 24 fps, H.264 / yuv420p, sessiz, en fazla 10 saniyelik MP4 olarak işler. `faststart` kullanılır. Altı video toplam yaklaşık 7,73 MB. Posterler aynı işlenmiş videonun 0,15. saniyesinden; detay kareleri 3. saniyesinden üretilir. Böylece poster/video kadrajı aynıdır. Orijinaller geçici ve git tarafından yok sayılan `tmp/originals` klasöründedir.

## Fontlar

- **Anton**, Vernon Adams — [Google Fonts kaynağı ve OFL](https://github.com/google/fonts/tree/main/ofl/anton).
- **Manrope**, Mikhail Sharanda ve katkıda bulunanlar — [Google Fonts kaynağı ve OFL](https://github.com/google/fonts/tree/main/ofl/manrope).
- **Archivo Black**, The Archivo Black Project Authors — [Google Fonts kaynağı ve OFL](https://github.com/google/fonts/tree/main/ofl/archivoblack). Galerinin geniş, kalın başlıklarında kullanılır. Dosya `public/fonts/archivo-black.ttf`, lisans `public/fonts/archivo-black-OFL.txt`; Google Fonts üzerinden edinildi.

Anton ve Manrope SIL Open Font License 1.1 ile kullanılır; npm `@fontsource` paketlerinden yerel servis edilir. Türkçe için Latin Extended alt kümeleri eklenmiştir. Lisans dosyaları `public/licenses` içindedir. Büyük giriş yazısı canlı tipografidir.

## Logo

`public/kipir-logo.svg`, yuvarlak uçlu çizgilerden oluşan özgün bir “kıpır” logosudur. Küçük hareket izleri, sabit sıcak krem renk ve ince koyu kontur içerir. Harici font, logo veya raster görsel içermez. Gezinme, açılan menü ve alt bilgide aynı vektör kullanılır.

## Hizmetler çıkartmaları

- `public/media/sticker-shaka.png`: krem/pembe, kalın koyu konturlu shaka eli.
- `public/media/sticker-cursor.png`: krem ve koyu konturlu piksel el imleci; yalnızca mekân/sahne ile prodüksiyon arasındaki sırada kullanılır.

İki görsel 11 Eylül 2026'da yerleşik görsel üretim aracıyla bu site için oluşturuldu. 1254×1254 PNG, şeffaf alfa kanallı; elle veya referanstan kopyalanan illüstrasyon değildir. Referansın çıkartma dosyaları projeye alınmadı. Görsel kontrol ve gerçek sayfada yükleme doğrulaması yapıldı.

## Tasarım referansı

[Pixel Melbourne](https://pixel.melbourne/) canlı galerisinin masaüstü/tablet/telefon ölçüleri, 45° halka geometrisi, ayrı başlık akışı ve yön düğmeleri incelendi; sonraki mesajda gönderilen galeri ekran görüntüsüyle de karşılaştırıldı. Referansın film, logo veya font dosyaları projeye alınmadı; mevcut lisanslı KIPIR videoları ve açık lisanslı fontlar kullanıldı.

## İlave tekil galeri klipleri

| Dosya | Kaynak / üretici | Kullanım |
| --- | --- | --- |
| orbit-craft.mp4 | [Artist varnishing a vase](https://mixkit.co/free-stock-video/artist-varnishing-a-vase-1976/) — Edgar Fernández | Yalnızca galeri yüzü 7 |
| orbit-lights.mp4 | [Experienced drummer performing on stage with lights](https://mixkit.co/free-stock-video/experienced-drummer-performing-on-stage-with-lights-41315/) — Mixkit | Yalnızca galeri yüzü 8 |

İki klip Mixkit Stock Video Free License ile alınmıştır. Her biri 8 saniye, 1000×600, 24 fps, sessiz H.264/yuv420p/faststart; posterleri 0,15. saniyeden üretilir. Tam kaynak ve işleme kaydı `orbit-media.json` içindedir.

## Hizmet ve stüdyo fotoğrafları

11 farklı fotoğraf; 1600 piksel genişlik, JPEG, toplam yaklaşık 2,60 MB. Her fotoğraf yalnızca adını taşıdığı hizmet sayfasında veya stüdyo kolajındaki tek konumda kullanılır. Kaynak sayfaları ve lisansları 11 Eylül 2026 tarihinde kontrol edildi. Dosya boyutları, SHA-256, Türkçe alternatif metinler ve indirme adresleri `photo-media.json` içindedir.

| Dosya | Kaynak / üretici | Lisans |
| --- | --- | --- |
| service-event.jpg | [Bruno Ngarukiye](https://unsplash.com/photos/outdoor-tables-set-for-a-formal-dining-event-t1ep0yUdXWw) | [Unsplash License](https://unsplash.com/license) |
| service-idea.jpg | [Amélie Mourichon](https://unsplash.com/photos/person-writing-on-printing-paper-wusOJ-2uY6w) | [Unsplash License](https://unsplash.com/license) |
| service-identity.jpg | [daisies & dots](https://unsplash.com/photos/red-white-blue-and-yellow-papers-sQB_ILTRYxA) | [Unsplash License](https://unsplash.com/license) |
| service-space.jpg | [Elijah Ekdahl](https://unsplash.com/photos/empty-stage-with-lights-8XxF2kYHIgo) | [Unsplash License](https://unsplash.com/license) |
| service-production.jpg | [Alexander Dummer](https://www.pexels.com/photo/photo-studio-with-white-wooden-framed-wall-mirror-134469/) | [Pexels License](https://www.pexels.com/license/) |
| service-film.jpg | [Jakob Owens](https://unsplash.com/photos/person-holding-black-dslr-camera-u1oQ3LvjOlA) | [Unsplash License](https://unsplash.com/license) |
| service-together.jpg | [Van Tay Media](https://unsplash.com/photos/person-handing-over-paper-Kab_-4M4I74) | [Unsplash License](https://unsplash.com/license) |
| service-play.jpg | [Sarah Brown](https://unsplash.com/photos/person-holding-paint-brush-RapDxBSMKzQ) | [Unsplash License](https://unsplash.com/license) |
| studio-1.jpg | [Clay Banks](https://unsplash.com/photos/artists-studio-with-desk-chair-and-large-window-fybrevHYvWc) | [Unsplash License](https://unsplash.com/license) |
| studio-2.jpg | [Annie Spratt](https://unsplash.com/photos/group-of-people-using-laptop-computer-QckxruozjRg) | [Unsplash License](https://unsplash.com/license) |
| studio-3.jpg | [Nicole Almendrada](https://unsplash.com/photos/paintbrush-resting-on-a-colorful-art-palette-8jrOk1TMq1E) | [Unsplash License](https://unsplash.com/license) |
