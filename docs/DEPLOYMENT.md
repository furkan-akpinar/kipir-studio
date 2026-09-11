# Cloudflare yayını

**Canlı adres:** [kipir-studio.furkan-akpinar.workers.dev](https://kipir-studio.furkan-akpinar.workers.dev)

KIPIR, Cloudflare Workers Static Assets üzerinde yayımlanır. Vite çıktısı doğrudan sunulur; uygulama için sunucu kodu, veritabanı veya API anahtarı gerekmez.

## Yayın ayarları

| Alan | Değer |
| --- | --- |
| Worker adı | `kipir-studio` |
| Yapılandırma | [`wrangler.jsonc`](../wrangler.jsonc) |
| Çıktı dizini | `dist/` |
| SPA yönlendirmesi | `assets.not_found_handling: single-page-application` |
| Derleme | `npm run build` |
| Yayın | `npx wrangler deploy` |
| Doğrulanan ortam | Node.js 24, Wrangler 4.131.0 |

SPA yönlendirmesi, `/hizmetler/gorsel-kimlik` gibi adreslerin doğrudan açılmasını ve yenilenmesini sağlar. Tanınmayan uygulama yollarını React Router içindeki 404 sayfası karşılar.

## Yeni sürüm yayımlama

```sh
npm ci
npm run build
npx wrangler whoami
npx wrangler deploy --dry-run
npx wrangler deploy
```

Cloudflare oturumu yoksa önce `npx wrangler login` çalıştırılır. Oturumun yapılandırmadaki hesaba yayın yetkisi olmalıdır. Hesap kimliği bir sır değildir; erişim belirteçleri, yerel `.wrangler/` çıktısı ve ortam dosyaları Git'e eklenmez.

## GitHub üzerinden otomatik derleme

İlk yayın Wrangler komutuyla yapılmıştır. Workers Builds bağlantısı bu işlemde kurulmamıştır. Otomatik yayın için mevcut `kipir-studio` Worker'ının Git bağlantısında şu alanlar kullanılabilir:

| Alan | Değer |
| --- | --- |
| GitHub deposu | `furkan-akpinar/kipir-studio` |
| Üretim dalı | `main` |
| Proje kökü | Depo kökü (`/`) |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |

## İlk yayın doğrulaması — 11 Eylül 2026

- Kaynak commit: `65c56764f34f28eb908d3363e156fe7786788fc2`.
- Cloudflare sürümü: `6b48009e-9713-430e-a19e-9ec8d66db41d`.
- TypeScript ve Vite üretim derlemesi tamamlandı; Wrangler deneme yayını başarılı.
- Ana sayfa, altı deneyim ve sekiz hizmet adresi HTTPS üzerinden HTTP 200 döndü. Toplam 15 rotanın HTML yanıtı yerel üretim çıktısıyla eşleşti.
- Üretim çıktısındaki 60 dosyanın tamamı canlı adreste HTTP 200 döndü.
- Video kontrolünde `sokakta.mp4` tam dosya olarak HTTP 200 döndü ve yerel dosyayla bayt düzeyinde eşleşti. Bu kontrolde kısmi içerik yanıtı (206) alınmadı.
- Canlı tarayıcıda animasyonlu giriş, menü gezinmesi ve galeri görüntülendi. Yüklenmiş yedi galeri videosu hata vermeden oynuyordu (`readyState: 4`).
- Görsel kimlik detayına doğrudan giriş ve sayfa yenileme başarılı; başlık ile sayfaya ait görsel yüklendi, yatay taşma görülmedi.

İletişim formu mevcut kapsamıyla bir önizlemedir; bu yayın mesaj gönderimini etkinleştirmez. Uygulama ve medya kontrollerinin diğer kayıtları [QA.md](QA.md) dosyasındadır.
