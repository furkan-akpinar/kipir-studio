export type Project = {
  slug: string; title: string; category: string; description: string;
  concept: string; idea: string; color: string; services: string[];
  video: string; poster: string; still: string;
};
const media = (slug: string) => ({ video: `/media/${slug}.mp4`, poster: `/media/${slug}.jpg`, still: `/media/${slug}-still.jpg` });
export const projects: Project[] = [
  { slug: 'sokakta', title: 'SOKAKTA', category: 'SOKAK KÜLTÜRÜ BULUŞMASI',
    description: 'Sokağın ritmi. Bir arada olmanın enerjisi.',
    concept: 'Kaykayın sesi, duvarların rengi, müziğin peşinden giden bir kalabalık. SOKAKTA, şehre seyirci kalmak istemeyenleri aynı zeminde buluşturan bir açık alan etkinliği fikri.',
    idea: 'Gündüz açık kaykay seansları ve birlikte boyanan bir duvar; akşam yerel seçkilerle müzik. Katı bir program yerine keşfe yer açan bir akış. Her köşe, kendi karşılaşmasını yaratıyor.',
    color: '#ff5038', services: ['Etkinlik konsepti', 'Görsel kimlik', 'Mekân ve sahne tasarımı', 'Prodüksiyon'], ...media('sokakta') },
  { slug: 'gece-vardiyasi', title: 'GECE VARDİYASI', category: 'ELEKTRONİK MÜZİK GECESİ',
    description: 'Mesai biter. Frekans yükselir.',
    concept: 'Gündelik hayatın temposunu kapıda bırakan bir elektronik müzik gecesi. GECE VARDİYASI, ışık, ses ve insan hareketini tek bir atmosferde bir araya getiren bir deneyim tasarımı.',
    idea: 'Endüstriyel bir mekânda yalın ışık çizgileri, değişen renkler ve DJ kabininin etrafında buluşan bir dans alanı. Biletinden son parçasına kadar aynı frekansta bir gece.',
    color: '#c2a0ea', services: ['Etkinlik konsepti', 'Görsel kimlik', 'Mekân ve sahne tasarımı', 'Etkinlik filmi ve fotoğrafı'], ...media('gece-vardiyasi') },
  { slug: 'bir-yudum', title: 'BİR YUDUM', category: 'KAHVE POP-UP DENEYİMİ',
    description: 'Küçük bir mola. Uzun bir sohbet.',
    concept: 'Bir kahve markası için, alışverişten önce tanışmayı önemseyen bir pop-up fikri. BİR YUDUM, kahve meraklılarını ortak bir masa ve yeni tatlar etrafında buluşturuyor.',
    idea: 'Kokuyu takip et, bir demleme yöntemi seç, masana birini davet et. Modüler kahve barı, tadım kartları ve baristayla küçük sohbetler bir fincanı paylaşılacak bir ana dönüştürüyor.',
    color: '#e9ad7e', services: ['Etkinlik konsepti', 'Görsel kimlik', 'Mekân ve sahne tasarımı', 'Prodüksiyon'], ...media('bir-yudum') },
  { slug: 'renk-pazari', title: 'RENK PAZARI', category: 'BAĞIMSIZ TASARIM PAZARI',
    description: 'El emeği var. Aynısından bir daha yok.',
    concept: 'Bağımsız tasarımcılarla meraklılarını aynı avluda buluşturan bir üretici pazarı. Seramik, baskı, tekstil ve küçük güzel şeyler; hepsinin arkasında anlatılacak bir hikâye var.',
    idea: 'Ürünlerin yanında üretim süreçlerinin de görünür olduğu açık tezgâhlar. Kısa atölyeler, renkli yönlendirmeler ve dinlenme köşeleriyle acele etmeden dolaşılan bir buluşma.',
    color: '#efacd0', services: ['Etkinlik konsepti', 'Görsel kimlik', 'Mekân ve sahne tasarımı', 'Prodüksiyon'], ...media('renk-pazari') },
  { slug: 'acik-hava', title: 'AÇIK HAVA', category: 'MÜZİK & PİKNİK BULUŞMASI',
    description: 'Gökyüzü açık. Program esnek.',
    concept: 'Battaniyeni alıp geldiğin, gün batımına bir şarkı eklediğin bir buluşma. AÇIK HAVA, müzik ve pikniği sakin, özenli bir açık alan deneyiminde birleştiriyor.',
    idea: 'Doğal dokuya uyum sağlayan küçük bir sahne, yeniden kullanılabilir servisler ve gölgede sohbet alanları. Tasarımın işi doğanın önüne geçmek değil, birlikte geçirilen zamana alan açmak.',
    color: '#d9e956', services: ['Etkinlik konsepti', 'Mekân ve sahne tasarımı', 'Prodüksiyon', 'Etkinlik filmi ve fotoğrafı'], ...media('acik-hava') },
  { slug: 'ilk-adim', title: 'İLK ADIM', category: 'SNEAKER KOLEKSİYONU LANSMANI',
    description: 'Yeni bir çift. Bambaşka bir hareket.',
    concept: 'Bir sneaker koleksiyonu için vitrinin dışına çıkan bir lansman fikri. İLK ADIM, ayakkabıyı sergilemek kadar onunla hareket etme hissini de tasarlıyor.',
    idea: 'Deneme parkuru, kişiselleştirme masası ve hareketten beslenen bir fotoğraf alanı. Konuklar yeni koleksiyonla yalnızca tanışmıyor; kendi adımlarını deneyimin bir parçası yapıyor.',
    color: '#a8c2f2', services: ['Etkinlik konsepti', 'Görsel kimlik', 'Prodüksiyon', 'Etkinlik filmi ve fotoğrafı'], ...media('ilk-adim') },
];
