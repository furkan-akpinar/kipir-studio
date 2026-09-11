# Doğrulama — 11 Eylül 2026

## Son çalışma: süreç, stüdyo, yaratıcı brief ve imza

- Süreç, stüdyo ve tanışma bölümleri yeniden oluşturuldu. İstenen 03/04/05 bölüm etiketlerinin DOM'da bulunmadığı doğrulandı; bölüm bağlantıları korundu.
- 1440×900 ve 390×844 görünümünde üç bölüm incelendi. Pembe süreçte büyük mavi başlık ve beş adım; limon zeminli stüdyoda üç fotoğraflı kolaj; mercan tanışma bölümünde özel tasarımlı form bulunuyor. Yatay taşma yok. Mobil süreçte tüm adım başlıklarının scrollWidth ve clientWidth değerleri eşit.
- Stüdyo görselleri yüklenmiş ve doğru oranlarda: masaüstü fotoğraf içerikleri yaklaşık 401×308 px. Sabit fotoğraf yükseklikleri kaldırıldı, mobil oran ayrıca ayarlandı.
- Boş ilk form aşaması etkinlik ve fikir metni uyarıları verdi, odak ilk hatalı gruba geçti. Kısa/boş metin ilerlemeyi engelledi. Geçersiz e-posta uyarısı ve ilgili alana odak doğrulandı.
- Etkinlik seçimi, metin, şehir, tarih, ad ve e-posta ile üç aşama tamamlandı. Son özet değerlerle eşleşti ve mesajın gönderilmediğini açıkça gösterdi. Hiçbir gönderim servisi eklenmedi.
- Özel takvimde Eylül → Ekim → Eylül ay geçişi ve 12 Eylül 2026 seçimi çalıştı. Geçmiş tarihler devre dışı. Mobil takvim yaklaşık 303 px genişlikte, form sınırları içinde.
- Mobilde geri dönünce fikir metni ve seçilen etkinlik türü korundu; tekrar ilerleyince şehir de korundu. “Henüz belli değil” seçeneğiyle tarihsiz ilerleme çalıştı. Aşama geçişinden sonra form üstü yaklaşık 119 px, odak brief başlığında.
- Furkan Akpınar imzası footer'ın sonunda görüntülendi; 390 px görünümde tamamı ekrana sığıyor.
- TypeScript ve son Vite production build başarılı. İşletim sistemi hareket tercihi ve takvim ok tuşları kodda destekleniyor; bu revizyonda ayrıca emüle edilmedi/test edilmedi. Gerçek telefon donanımı, Safari ve Firefox kontrolleri yapılmadı.

Aşağıdaki kayıtlar önceki revizyonların tarihçesidir.

## En yeni revizyon: sürekli harf hareketi, birleşen slogan ve hizmetler

- Pixel Melbourne canlı girişindeki sessiz, otomatik ve tekrarlı video incelendi (yaklaşık 5,93 saniye). KIPIR için bağımsız bir CSS harf hareketi oluşturuldu; referansın videosu veya harf çizimleri kopyalanmadı.
- KIPIR harflerinin açılıştan sonra da hareket ettiği, farklı anlarda değişen transform değerleriyle doğrulandı. Döngü 5,6 saniye ve infinite. Aralıklar hareket sırasında harfler birbirine değmeyecek şekilde genişletildi; 1440×900 ve 390×844 görsel kontrolleri yapıldı.
- Slogan başlangıç konumları sağ/sol/sağ: masaüstünde x = +1643,68 / -1643,68 / +1643,68 px. Ara kaydırmada ilk satır x=0 kalırken ikinci soldan, üçüncü sağdan ilerledi. ScrollY=2250 konumunda üç satırın da x=0 olduğu, farklı y konumlarıyla ortada alt alta kaldığı ölçüldü.
- Telefonda tamamlanan slogan ve üç etiket ekrana sığıyor; yatay taşma yok. Başlangıçta büyük logo animasyonlu, gezinme görünür ve sabit.
- Eski hizmetler başlığı, açıklamaları ve açılır listeler kaldırıldı; bölümde details sayısı 0. Yeni mavi/pembe kompozisyon, beş metin sırası ve üç çıkartma yerleşimi masaüstü/telefon görünümünde incelendi. Tüm satırlar kendi genişliklerine sığıyor, görseller yüklenmiş (naturalWidth=1254).
- Menüdeki Neler yapıyoruz bağlantısı yeni bölümün başına doğru hizalanıyor. Sabit logo ve Menü arka planı saydam kaldı.
- Son production build TypeScript kontrolüyle birlikte başarılı. Hareket azaltma medya sorguları ve alternatif slogan akışı kodda korundu; bu revizyonda işletim sistemi tercihi emüle edilmedi.

Aşağıdaki kayıtlar önceki revizyonların tarihçesidir; güncel giriş akışı ve hizmetler düzeni için bu bölüm geçerlidir.

## Son revizyon: yatay giriş, yeni logo, kesintisiz şerit

- TypeScript ve Vite production derlemesi başarılı; güncel çıktı yerel 5187 önizlemesinde kontrol edildi.
- 1440×900 masaüstü ve 390×844 telefon görünümünde yeni SVG logo, Menü ve yatay intro incelendi. Masaüstünde logo 86 px, telefonda 76 px genişliğinde. Sayfa genişliği viewport'u aşmıyor.
- KIPIR sola çıkarken İYİ FİKİRLER sağdan giriyor; ardından YERİNDE ve DURMAZ. ifadeleri kendi etiketleriyle aynı yönde ilerliyor. Masaüstünde ara konumlar ve ters kaydırma ölçüldü; telefonda üç ifade ve son merkez konum görsel olarak kontrol edildi. Sticky sahne hareket boyunca ekranın üstünde kalıyor.
- Gezinmenin arka planı `rgba(0,0,0,0)`, backdrop-filter değeri none; rengi her bölümde `rgb(255,244,218)`. Mercan, mavi, pembe, açık stüdyo ve galeri zeminlerinde görsel kontrol yapıldı. Koyu kontur kalıcıdır; bölüme bağlı renk değişimi ve üst bant kaldırılmıştır.
- Marquee iki eş, bitişik gruptan oluşuyor. Masaüstünde gruplar 2665,94 px (4 tekrar), telefonda 942,99 px (2 tekrar). Track genişliği tam iki grup; gruplar arası boşluk sıfır. CSS animasyonu 55 saniye, linear, infinite ve tam %50 ötelenme ile aynı konuma bağlanıyor. Tam 55 saniyelik döngü zaman tutularak izlenmedi; birleşim ölçümler ve keyframe üzerinden doğrulandı.
- Mobil menüden Deneyimler bağlantısı doğru galeri konumuna geçti; yeni giriş yüksekliği galeri hizasını bozmadı.
- Hareket azaltma alternatifi kodda korunuyor; bu revizyonda işletim sistemi tercihi emüle edilmedi. Gerçek telefon donanımı, Safari ve Firefox testi yapılmadı.

Aşağıdaki notlar önceki revizyonların tarihçesidir; giriş akışı ve üst gezinme rengi için yukarıdaki son revizyon geçerlidir.

## Canlı referansa göre galeri revizyonu

11 Eylül 2026'da https://pixel.melbourne/ galerisinde gerçek kaydırma ve yön düğmesi etkileşimleri incelendi. Kullanıcının son gönderdiği ikinci ekran görüntüsü de esas alındı.

- Referansta sekiz yüz, 45° dönüş, yarıçapla eşit perspective, masaüstünde 50vw kart genişliği ve 30vw boşluk; tablet/telefonda 70vw genişlik ve 40vw boşluk ölçüldü. Masaüstünde 5:3, tablette yükseklik/genişlik 1,2 ve telefonda 1,4. KIPIR'ın altı proje durağı korundu; iki dekoratif arka yüz mevcut medyayı tekrar kullanır.
- Videolar sticky sahnede döner; başlıklar karttan bağımsız doğal dikey akışta ilerler. Zemin #E0C8BB, keşif düğmesi #FFB5D2, ince ok düğmeleri #E4FE52. Sayaç, kategori, üst açıklamalar ve alt ipuçları normal görünümden kaldırıldı. Logo ve menü galeri boyunca sarı ve saydam zeminde sabit kalır.
- 1920×952 görünümünde merkez kart 960×576, perspective 1734,82 px; 768×1024 görünümünde 537,6×645,1; 390×844 görünümünde 273×382,2 ölçüldü. 1371×680 dizüstü ölçeği de incelendi. Bu görünümlerde yatay taşma yok.
- Gerçek tarayıcıda ileri okla altı projenin tamamına gidildi; her başlık ve detay bağlantısı eşleşti. İlk projede geri, son projede ileri devre dışı. Son projedeki merkez video `/media/ilk-adim.mp4` ile eşleşti. Geri ok ve ters kaydırma doğrulandı.
- Ara kaydırma konumunda sahne top=0 kalırken başlık bloğu -466,4 px ilerledi; başlığın kendi transform değeri none, halka transform değeri 3D dönüş olarak ölçüldü. Okların üzerinde başlık geçtiğinde düğmeler tıklanabilir üst katmanda kaldı.
- Galeriden çıkışta hizmetler bölümüne doğal geçiş ve galeri videolarının tamamının durması doğrulandı. Görünür videolarda readyState=4, paused=false, error=null gözlendi.
- Mobil menüden galeriye geçiş çalıştı. Doğrudan #deneyimler bağlantısının üst hizası scroll-padding telafisiyle 1 px içinde doğrulandı.
- 844×390 yatay görünümde kontroller y=332–376 aralığında ekrana sığdı. Kısa yatay ekranlarda panel 5:3 oranına dönerek yüksekliğe sığdırılır.
- Archivo Black yerel font yüklemesi doğrulandı; font ve OFL metni projede. Referansın medya/font dosyaları kullanılmadı.
- Sistem hareket azaltma ve klavye odağıyla açılan yardımcı kontroller kodda korundu; bu revizyonda işletim sistemi hareket tercihi yeniden emüle edilmedi.

Aşağıdaki revizyon notları tarihçedir; önceki galeri ölçüleri güncel tasarımı tarif etmez.

## Animasyon ve sabit gezinme revizyonu

- Kullanıcının sonraki isteğiyle sol üst KIPIR ve sağ üst Menü girişte yeniden gösterildi; tüm sayfa boyunca sabit. Girişte saydam başlık, alt bölümlerde mevcut açık zemin kullanılıyor.
- Büyük KIPIR harfleri açılışta sırayla yerleşiyor. Kaydırırken logo küçülüp silikleşiyor; slogan `İYİ FİKİRLER / YERİNDE / DURMAZ.` olarak üç satırda, FİKİR / DENEYİM / BİRLİKTE etiketleriyle birlikte yerleşiyor. Hareket kaydırmayla geri alınabiliyor.
- 1440×900 ve 390×844 görünümünde giriş, slogan, etiketler ve menü kontrol edildi. Yatay taşma yok. Menüden alt bölüme geçişte başlık görünür ve üst konumu 0; iletişim eylemi yerine yalnızca logo ve menü var.
- Telefon görünümünde farklı kaydırma konumlarında harf/satır dönüşümleri ve opaklıkları ölçüldü; animasyon ilerliyor ve ters yönde geri alınıyor. Menü açma ve bölüm bağlantıları çalışıyor.
- Sistem hareket azaltma tercihi Intro animasyonlarını devre dışı bırakıyor; GSAP bağlamı temizlenerek metinler doğal görünümünde kalıyor. Galeri bileşeni ve medya kaynakları değiştirilmedi.
- TypeScript kontrolü ve production derlemesi başarılı.

## Görsel referanslarla giriş revizyonu

- Kullanıcının yeni paylaştığı beş görsel esas alınarak giriş iki ardışık, ekran yüksekliğinde bölüme dönüştürüldü: yalnızca `KIPIR`, ardından `İYİ FİKİRLER / YERİNDE DURMAZ.`.
- 4. görseldeki logo renginden zemin `#FF5038`; 5. görselden yazı rengi `#EEE9DF` örneklendi. İki giriş bölümünde aynı kesintisiz zemin kullanıldı.
- Eski giriş açıklamaları, etiket ve ok kaldırıldı. Üst gezinme giriş boyunca gizlenir; galeriye ulaşıldığında yeniden görünür. Galeri bileşeni, video kaynakları ve sonraki içerikler değiştirilmedi.
- 1440×900 tarayıcı görünümünde renkler, iki bölümün birleşimi, görünür metinler ve taşmama doğrulandı. Galeriye geçişte altı panel ve görünür videolar çalıştı; sonraki düğmesi GECE VARDİYASI başlığı ve doğru bağlantısına geçti.
- Revizyonun production build'i TypeScript kontrolüyle birlikte başarılı.
- 390×844 telefon görünümünde iki giriş bölümü görsel olarak kontrol edildi; metin kesilmesi, yatay taşma veya fazladan giriş öğesi yok.

Aşağıdaki kayıtlar ilk teslimin kontrolleridir; o teslim sırasında henüz yeni giriş referansları paylaşılmamıştı.

## Ortam

Windows üzerinde Chromium tabanlı Codex tarayıcısı; gerçek sayfa etkileşimleri ve DOM ölçümleri. Ekran ölçeği dikkate alınarak aşağıdaki CSS viewport boyutları ölçüldü. Gerçek telefon donanımı testi değildir.

| Ekran | Sonuç |
| --- | --- |
| 1920×1080 geniş masaüstü | Merkez panel 960×576 px, 5:3 ve ekranın %50'si. İleri/geri perspektifli yan paneller görünür. |
| 1366×768 dizüstü | Merkez yaklaşık 683×410 px. Alt oklar, başlık ve bağlantı yerinde. |
| 768×1024 tablet | Galeri ve gezinme çalışır; sayfa genişliği viewport içinde. |
| 390×844 telefon | Merkez 319,8×191,9 px, genişliğin %82'si. Komşu paneller görünür; yatay taşma yok. |
| 844×390 yatay telefon | Geometri yüksekliğe göre yeniden hesaplanır; merkez 333,3×200 px. Oklar görünür alan içinde (y=312–352). |

## Gerçek tarayıcıda çalıştırılanlar

- Altı projeye okla sıra sıra ilerleme; her adımda aktif başlık, sayaç ve `/deneyimler/...` bağlantısı eşleşti. İlk projede önceki, son projede sonraki düğmesi devre dışı.
- Geri ok, yukarı kaydırma ve ileri kaydırma. Altıncı proje sonrasında sahne çözülerek hizmetler bölümüne geçildi.
- İlk ve son merkez paneller ile görünür komşuların `paused=false`, `readyState=4`, artan oynatma zamanı; görünmeyen arka panelin ilk girişte kaynak almaması.
- Galeri duraklat düğmesinde tüm videolar durdu. Sahne ekran dışına çıktığında tüm videolar durdu.
- “Hareketi azalt”: pin kaldırıldı, altı proje erişilebilir oldu, video kaynakları otomatik yüklenmedi. Açık oynatma düğmesi ile ilk video oynatıldı.
- Masaüstü ve telefon menüsü; Tab ile odak menü içinde, Escape ile kapatma, odağın Menü düğmesine dönüşü. Menü öncesi ve sonrası scrollY aynı: 5010.
- Türkçe zorunlu alan/e-posta hataları, ilk hataya odak, geçmiş tarih reddi ve geçerli formun “mesajın gönderilmedi” durumu.
- Altı detay yoluna ayrı ayrı doğrudan giriş; başlık/sonraki proje eşleşmesi, telefon genişliğinde taşmama. İLK ADIM sayfası yenilendi.
- Başlık, hizmetler, süreç, stüdyo, iletişim ve detay görünümlerinin görsel kontrolü.
- Tarayıcı hata/uyarı kayıtlarında çalışma zamanı hatası görülmedi. Yerel medya dosyalarında video hata nesnesi bulunmadı.

## Son komut ve production kontrolleri

- `npm run typecheck`: başarılı.
- `npm run build`: başarılı; TypeScript proje kontrolü ve Vite production derlemesi tamamlandı.
- `npm run preview -- --host 127.0.0.1 --port 5187`: production çıktı yerelde açıldı.
- Ana sayfa, altı detay rotası, bütün üretilmiş asset/font dosyaları, 18 medya dosyası, favicon ve font lisansları: **46 URL, tümü HTTP 200**.
- Video Range isteği: **HTTP 206**, `bytes 0-1023/983674`; akış/arama desteği doğrulandı.
- Production ana sayfasının 1366×768 ilk görünümünde **0 video öğesi / kaynağı**; sahnenin video bandına gelince görünür videolar yüklenip oynadı.
- Production galerisinde sonraki ok, aktif bağlantı, sade görünüme geçiş ve tekrar 3D'ye dönüş çalıştı.
- Production SOKAKTA detay bağlantısı açıldı ve yenilendi. Konsolda hata/uyarı yok.
- Yatay telefondaki 1 px yuvarlama taşması düzeltildi; son ölçüm `scrollWidth=clientWidth=833`.

## Uygulama kararları

Son sürümde kaydırma süreklidir; otomatik snap kullanılmaz. Oklar aynı ScrollTrigger'ın scroll konumunu yumuşakça değiştirir; başka bir aktif proje kaynağı yoktur. Tekerlek/dokunma başladığında programatik ilerleme iptal edilir. Böylece kaydırma ve düğmeler birbiriyle yarışmaz.

## Doğrulanmamış veya bağlı olmayanlar

- Tarif edilen ek ekran görüntüsü dosyalarda bulunmadı. Canlı Pixel Melbourne kompozisyonuyla görsel karşılaştırma yapıldı; ek görüntüyle piksel düzeyinde eşleşme doğrulanmış değildir.
- İşletim sistemindeki azaltılmış hareket ayarı değiştirilmedi. `matchMedia` bağlantısı kodda incelendi; aynı alternatif dalı kullanıcı düğmesiyle tarayıcıda test edildi.
- Tarayıcının autoplay reddetmesi zorlanarak simüle edilmedi. Ret/hata yakalama ve poster/oynat kontrolü kodda mevcut; açık oynatma yolu test edildi.
- Gerçek iOS/Android, Safari/Firefox, fiziksel dokunma ve düşük güç modu testi yapılmadı.
- İletişim için gönderim servisi yoktur; gerçek mesaj gönderimi testi yapılmadı.
- Hosting yapılmadı. Gelecekteki sunucuda SPA fallback gereksinimi README'de kayıtlıdır.

## 11 Eylül 2026 — hizmet sayfaları, tekil medya ve arayüz düzeltmeleri

Bu bölüm son değişikliklerin kontrolüdür; önceki galeri ölçümleri ve eski sürüm kontrolleri yukarıda tarihsel kayıt olarak korunur.

- TypeScript kontrolü ve `npm run build` başarılı. Production önizleme 5187 portunda güncellendi.
- Sekiz büyük hizmet başlığı gerçek `/hizmetler/...` bağlantısı. Her biri 1440×900 ve 390×844 CSS viewport'ta açıldı; sekiz başlık, sekiz farklı fotoğraf ve sonraki hizmet bağlantıları doğrulandı. Fotoğraflar yüklü; yatay sayfa taşması yok.
- Etkinlik tasarımı sayfasının masaüstü ve mobil görünümü, detay bölümleri; Görsel kimlik sayfasının doğrudan açılması ve yenilenmesi görsel olarak incelendi.
- Hizmet sayfasındaki “Birlikte planlayalım” bağlantısı ana sayfadaki iletişim formunu açtı.
- Menüde beş metin bağlantısı kaldı; `.menu-number` ve `.menu-link-arrow` öğesi sayısı sıfır. Menüden iletişim bölümüne geçiş çalıştı.
- Formda başlangıçta seçenek işareti yok. Ürün lansmanı seçildiğinde yalnızca bu kartta tik görüldü; Pop-up deneyimi seçildiğinde tik bu karta geçti, önceki işaret kalktı.
- Footer'da görünür “YUKARI” yazısı yok; özgün SVG ok yukarı yönlü. Tıklanınca `scrollY=0` doğrulandı. Furkan Akpınar imzası korundu.
- Ana sayfanın sekiz video posteri, iki hizmet çıkartması ve üç stüdyo fotoğrafı birbirinden farklı src değerlerine sahip. Logo dışında tekrarlı içerik görseli yok.
- Yeni orbit-craft ve orbit-lights videoları production galerisinde `readyState=4`, `paused=false`, `error=null` ile oynadı. Sekiz galeri yüzünün poster kaynağı farklı.
- SOKAKTA detay sayfasında yalnızca sokakta-still.jpg ve ortak marka logosu var; video öğesi yok. Mobil yerleşimde taşma yok. Diğer beş detay sayfası aynı ortak bileşenden, kendine ait kare ile üretilir.
- On bir yeni fotoğraf ile iki yeni video posteri birlikte görsel olarak incelendi. Kaynak/lisans kayıtları ve 11 farklı SHA-256 değeri photo-media.json içinde saklandı.
- Bu değişiklikte gerçek mesaj gönderilmedi; yayın, commit veya push yapılmadı. Gerçek cihaz/Safari/Firefox kapsamı önceki sınırlamalarla aynı.
