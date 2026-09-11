export type Service = {
  slug: string; title: string; lines: string[]; image: string; imageAlt: string;
  background: string; ink: string; accent: string; lead: string; story: string;
  statement: string; approach: string; outcomes: [string, string][];
};

export const services: Service[] = [
  {
    slug: 'etkinlik-tasarimi', title: 'Etkinlik tasarımı', lines: ['ETKİNLİK', 'TASARIMI.'], image: '/media/service-event.jpg', imageAlt: 'Çiçekler, limonlar ve açık yeşil örtülerle hazırlanan açık hava etkinlik masaları.',
    background: '#f3b7d5', ink: '#1800ff', accent: '#e9fa53',
    lead: 'İnsanları aynı yere getirmek başlangıç. Aynı hissin içine almak asıl mesele.',
    story: 'Bir etkinliği davetiyeden son karşılaşmaya kadar bir bütün olarak düşünürüz. Neden buluştuğumuzu, kimin geldiğini ve geriye ne kalmasını istediğimizi birlikte netleştiririz. Sonra fikre bir akış, mekâna bir karakter veririz.',
    statement: 'BİR GÜN BİTER. HİSSİ KALIR.',
    approach: 'Önce amacı ve katılımcıyı tanırız. Konsepti, programı ve mekânı aynı hikâyede buluşturur; insanlara keşfetmeleri ve birbirleriyle karşılaşmaları için alan açarız. Gösterişli bir an kadar, beklerken geçen zamanı da tasarlarız.',
    outcomes: [['Bir ana fikir', 'Buluşmanın nedenini anlatan yaratıcı konsept ve deneyim dili.'], ['Akıp giden bir gün', 'Davet, karşılama, program ve vedayı birleştiren katılımcı yolculuğu.'], ['Yaşayan detaylar', 'Etkinlik kimliği, etkileşim noktaları ve mekâna özel uygulamalar.']],
  },
  {
    slug: 'yaratici-fikir', title: 'Yaratıcı fikir', lines: ['YARATICI', 'FİKİR.'], image: '/media/service-idea.jpg', imageAlt: 'Renkli not kâğıtları arasında birlikte geliştirilen el çizimi tasarım eskizleri.',
    background: '#e9fa53', ink: '#1800ff', accent: '#f3b7d5',
    lead: 'Bazen en iyi başlangıç, masaya bırakılan bir “ya şöyle olsa?”dır.',
    story: 'Tamamlanmış bir brief getirmek zorunda değilsin. Bir soru, bir his ya da çözmek istediğin bir mesele yeter. Konuya farklı yerlerden bakar, alışılmış cevapların biraz dışına çıkarız. Fikri büyütürken hayata nasıl geçeceğini de düşünürüz.',
    statement: 'MERAK ET. KARIŞTIR. BUL.',
    approach: 'Kısa keşif oturumlarıyla ihtiyacı açar, görsel ve kültürel referanslarla olasılıkları çoğaltırız. Birkaç güçlü yaratıcı yönün içinden, amacına ve koşullarına en iyi oturan fikri birlikte seçeriz.',
    outcomes: [['Doğru soru', 'İhtiyaç, kitle ve amaç etrafında netleşmiş bir yaratıcı çerçeve.'], ['Yeni ihtimaller', 'Konsept yönleri, referanslar ve anlatıyı taşıyan fikir taslakları.'], ['Somut bir başlangıç', 'Seçilen fikrin hikâyesi, temel uygulamaları ve sonraki adımları.']],
  },
  {
    slug: 'gorsel-kimlik', title: 'Görsel kimlik', lines: ['GÖRSEL', 'KİMLİK.'], image: '/media/service-identity.jpg', imageAlt: 'Canlı renklerde kâğıt parçalarıyla oluşturulmuş geometrik bir kompozisyon.',
    background: '#1800ff', ink: '#f3b7d5', accent: '#e9fa53',
    lead: 'Daha kapıdan girmeden hissedilen, çıktıktan sonra da hatırlanan bir dil.',
    story: 'Görsel kimlik bizim için tek bir işaretle bitmez. Rengin, yazının, görüntünün ve hareketin birlikte nasıl konuştuğuna bakarız. Bir afişte başlayan karakterin bileklikte, ekranda ve mekânda da kendisi gibi görünmesini isteriz.',
    statement: 'HER YERDE AYNI KARAKTER.',
    approach: 'Fikrin tonunu ve kitlesini anlayarak görsel bir yön belirleriz. Küçük ölçekte de büyük bir sahnede de çalışan bir sistem kurar, gerçek kullanım alanlarında deneyerek geliştiririz.',
    outcomes: [['Kendine ait bir ses', 'Logo yaklaşımı, tipografi, renk paleti ve görsel dünya.'], ['Birbiriyle konuşan parçalar', 'Afiş, davetiye, sosyal içerik ve mekân grafikleri.'], ['Devam edebilen bir sistem', 'Yeni uygulamaları tutarlı kılan temel kullanım rehberi ve tasarım dosyaları.']],
  },
  {
    slug: 'mekan-ve-sahne', title: 'Mekân & sahne', lines: ['MEKÂN', '& SAHNE.'], image: '/media/service-space.jpg', imageAlt: 'Mor ışıklar, spotlar ve dikey ışık çubuklarıyla hazırlanan boş sahne.',
    background: '#ff5038', ink: '#eee9df', accent: '#e9fa53',
    lead: 'Mekân bir arka plan değil; hikâyeye katılan bir parça.',
    story: 'İnsanların nerede durduğunu, neye baktığını ve birbirleriyle nerede karşılaştığını düşünürüz. Sahne, ışık, yönlendirme ve dinlenme alanları aynı deneyimin parçalarıdır. Bazen tek bir masa, bazen koca bir meydan fikrin buluşma noktasına dönüşür.',
    statement: 'BİR YERİ BİR HİSSE ÇEVİR.',
    approach: 'Mekânın olanaklarını yerinde okur; akış, kapasite ve teknik ihtiyaçlarla yaratıcı fikri buluştururuz. Tasarımı kurulum, kullanım ve söküm aşamalarını düşünerek geliştiririz.',
    outcomes: [['Anlaşılır bir akış', 'Katılımcı hareketi, yerleşim planı ve karşılaşma noktaları.'], ['Bir atmosfer', 'Sahne, ışık yaklaşımı, yüzeyler ve mekâna özel tasarım.'], ['Uygulanabilir detaylar', 'Ölçek, malzeme, üretim ve kurulum kararları.']],
  },
  {
    slug: 'produksiyon', title: 'Prodüksiyon', lines: ['PRODÜKSİYON.'], image: '/media/service-production.jpg', imageAlt: 'Beyaz fon, ışık düzenekleri ve çekim ekipmanlarıyla hazırlanmış prodüksiyon stüdyosu.',
    background: '#eee9df', ink: '#1800ff', accent: '#ff5038',
    lead: 'O güzel fikrin, tam hayal edildiği gibi yerini bulması için.',
    story: 'İşin görünmeyen tarafında takvimler, ekipler, malzemeler ve birçok küçük karar vardır. Yaratıcı fikri koruyarak hepsini aynı planda buluştururuz. Ne zaman, nerede, kimle ve nasıl sorularının karşılığını birlikte oluştururuz.',
    statement: 'HAYAL TAMAM. SIRA HAREKETTE.',
    approach: 'Kapsamı, bütçeyi ve zamanlamayı baştan netleştiririz. Üretim planını, tedarik süreçlerini ve saha koordinasyonunu birbirine bağlar; değişen koşullarda hangi kararın neyi etkilediğini görünür tutarız.',
    outcomes: [['Ortak bir plan', 'İş takvimi, kapsam, ekip ve ihtiyaç listeleri.'], ['Birleşen parçalar', 'Üretim, tedarik, teknik hazırlık ve kurulum koordinasyonu.'], ['Rahat bir saha', 'Etkinlik günü akışı, görev paylaşımı ve operasyon takibi.']],
  },
  {
    slug: 'film-ve-fotograf', title: 'Film & fotoğraf', lines: ['FİLM &', 'FOTOĞRAF.'], image: '/media/service-film.jpg', imageAlt: 'Ekranında çekilen sahne görünen sinema kamerasını kullanan bir kişinin yakın planı.',
    background: '#f3b7d5', ink: '#1800ff', accent: '#e9fa53',
    lead: 'Sadece ne olduğunu değil, orada olmanın nasıl hissettirdiğini de hatırla.',
    story: 'Bir karşılaşma, bir bakış, kalabalığın ritmi. Deneyimin görsel hafızasını kurarken ana hikâyeyi ve küçük anları birlikte ararız. Çekimin nerede kullanılacağını baştan düşünür; tek bir günden farklı mecralarda yaşayan içerikler çıkarırız.',
    statement: 'O ANI BİR DAHA HİSSET.',
    approach: 'Hikâye ve kullanım alanlarına göre çekim planını hazırlarız. Sahadaki akışı bozmadan kayıt alır, kurgu ve görsel düzenleme sırasında deneyimin karakterini koruruz.',
    outcomes: [['Net bir bakış', 'Görsel yön, çekim listesi ve anlatı planı.'], ['Anın kaydı', 'Etkinlik filmi, fotoğraf seçkisi ve özel çekimler.'], ['Paylaşılacak parçalar', 'Kısa kurgu versiyonları ve mecralara uygun görsel çıktılar.']],
  },
  {
    slug: 'birlikte', title: 'Birlikte', lines: ['BİRLİKTE.'], image: '/media/service-together.jpg', imageAlt: 'Masa üzerinde birbirine kâğıt uzatan iki kişinin elleri.',
    background: '#e9fa53', ink: '#1800ff', accent: '#f3b7d5',
    lead: 'Aynı masaya farklı kafalar gelince, fikir başka bir yere gider.',
    story: 'Bir markayla, bir toplulukla ya da başka bir yaratıcı ekiple aynı masaya oturabiliriz. Hazır bir cevapla gelmek yerine iyi sorular sorarız. Bilgiyi, yeteneği ve merakı bir araya getirerek işin sahipliğini paylaşırız.',
    statement: 'BİZ + SEN + YENİ İHTİMALLER.',
    approach: 'Birlikte çalışma biçimimizi baştan konuşuruz. Kimin hangi noktada katkı vereceğini, kararların nasıl alınacağını ve fikirlerin nasıl paylaşılacağını netleştiririz. Sonra üretirken birbirimizden öğreniriz.',
    outcomes: [['Ortak bir zemin', 'Hedefleri ve beklentileri açan keşif buluşmaları.'], ['Birlikte düşünme alanı', 'Yaratıcı atölyeler, fikir oturumları ve ortak geliştirme.'], ['Paylaşılan bir üretim', 'Farklı disiplinleri bir araya getiren iş birlikleri.']],
  },
  {
    slug: 'bolca-kipirti', title: 'Bolca kıpırtı!', lines: ['BOLCA', 'KIPIRTI!'], image: '/media/service-play.jpg', imageAlt: 'Suluboya paletinde renkleri deneyen, fırça tutan bir el.',
    background: '#1800ff', ink: '#f3b7d5', accent: '#e9fa53',
    lead: 'Biraz oyun, biraz deneme. Bazen fikri tam da bunlar hareket ettirir.',
    story: 'Her şeyin daha ilk günden kusursuz olması gerekmez. Küçük bir model, hızlı bir deneme, beklenmedik bir eşleşme yeni bir kapı açabilir. Merakı üretimin içinde tutar, fikri kâğıttan çıkarıp görmeye ve hissetmeye çalışırız.',
    statement: 'DENE. ŞAŞIR. BİR DAHA DENE.',
    approach: 'Denemek istediğimiz soruyu seçer, küçük ve somut bir karşılık üretiriz. Birlikte bakar, neyin çalıştığını konuşur ve bir sonraki versiyona geçeriz. Oyun, burada düşünmenin bir yoludur.',
    outcomes: [['Küçük deneyler', 'Malzeme, hareket, görüntü ve etkileşim araştırmaları.'], ['Elle tutulur fikirler', 'Hızlı maketler, görsel denemeler ve deneyim prototipleri.'], ['Taze bir yön', 'Denemelerden çıkan bulgular ve fikri büyütecek sonraki adım.']],
  },
];
