import fiaRenndyPhoto from '@/assets/testimonials/fia-renndy.webp'
import nengZhengPhoto from '@/assets/testimonials/neng-zheng.webp'
import rosyidTiaraPhoto from '@/assets/testimonials/rosyid-tiara.webp'
import aisahGalangPhoto from '@/assets/testimonials/aisah-galang.webp'
import listaNajibPhoto from '@/assets/testimonials/lista-najib.webp'
import wikaDzikriPhoto from '@/assets/testimonials/wika-dzikri.webp'
import fatimaFakhriPhoto from '@/assets/testimonials/fatima-fakhri.webp'

export const testimonials = [
  {
    id: 'testimonial-fia-renndy',
    quote:
      'Pengalaman prewedding bersama LOVIXPHOTO benar-benar menyenangkan. Timnya komunikatif, sabar, dan profesional. Hasil fotonya estetik, natural, dan setiap momen berhasil diabadikan dengan indah. Terima kasih LOVIXPHOTO, kami sangat puas dan pastinya akan merekomendasikan kepada teman maupun keluarga.',
    name: 'Fia & Renndy',
    role: 'Prewedding',
    photo: fiaRenndyPhoto,
    // Pre-composed as a circular crop already (transparent corners) — no
    // extra zoom needed, it's framed correctly as delivered.
    photoScale: 1,
    photoOrigin: '50% 50%',
  },
  {
    id: 'testimonial-neng-zheng',
    quote:
      'MasyaAllah, hasil fotonya benar-benar cantik dan membuat kami terharu saat melihatnya. Setiap momen penting berhasil diabadikan dengan sangat baik. Tim LOVIXPHOTO juga sangat profesional, ramah, dan membuat kami merasa nyaman sepanjang acara. Terima kasih sudah menjadi bagian dari hari terbaik kami. Sangat puas dengan hasil dan pelayanannya!',
    name: 'Neng & Zheng',
    role: 'Wedding',
    photo: nengZhengPhoto,
    // Pre-composed as a circular crop already (transparent corners) — no
    // extra zoom needed, it's framed correctly as delivered.
    photoScale: 1,
    photoOrigin: '50% 50%',
  },
  {
    id: 'testimonial-rosyid-tiara',
    quote:
      'Terima kasih banyak LOVIXPHOTO sudah mengabadikan momen pernikahan kami dengan sangat baik. Dari awal sampai hari H, team-nya profesional, ramah, dan membuat kami nyaman. Hasil fotonya juga sangat memuaskan dan berhasil menangkap banyak momen berharga yang akan selalu kami kenang.',
    name: 'Rosyid & Tiara',
    role: 'Wedding',
    photo: rosyidTiaraPhoto,
    // Pre-composed as a circular crop already (transparent corners) — no
    // extra zoom needed, it's framed correctly as delivered.
    photoScale: 1,
    photoOrigin: '50% 50%',
  },
  {
    id: 'testimonial-aisah-galang',
    quote:
      'Overall kami puas banget dengan pelayanan dan hasil dari LOVIXPHOTO. Team-nya ramah, sigap, dan bikin kami nyaman selama proses foto di hari wedding. Hasilnya juga sesuai dengan yang kami harapkan, bahkan banyak momen candid yang berhasil ditangkap dengan indah. Terima kasih banyak LOVIXPHOTO.',
    name: 'Aisah & Galang',
    role: 'Wedding',
    photo: aisahGalangPhoto,
    // Couple already fills most of the frame — only a mild zoom needed.
    photoScale: 1.15,
    photoOrigin: '50% 45%',
  },
  {
    id: 'testimonial-lista-najib',
    quote:
      'Memilih LOVIXPHOTO untuk wedding kami benar-benar keputusan yang tepat. Team-nya gercep, komunikatif, dan bikin suasana jadi nyaman. Hasil fotonya juga sangat memuaskan, detail dan momennya dapet banget. Terima kasih sudah memberikan hasil terbaik untuk hari bahagia kami.',
    name: 'Lista & Najib',
    role: 'Wedding',
    photo: listaNajibPhoto,
    // Dark venue shot with guests and a chandelier crowding the frame —
    // zoom toward the couple, who sit slightly left of center.
    photoScale: 1.35,
    photoOrigin: '42% 48%',
  },
  {
    id: 'testimonial-wika-dzikri',
    quote:
      'Puas banget dengan pelayanan LOVIXPHOTO dari awal sampai selesai. Team-nya profesional, ramah, dan sangat membantu selama acara. Hasil fotonya juga bagus banget, setiap momen penting di wedding kami berhasil diabadikan dengan indah. Terima kasih LOVIXPHOTO sudah mengabadikan cerita di hari spesial kami.',
    name: 'Wika & Dzikri',
    role: 'Wedding',
    photo: wikaDzikriPhoto,
    // Full-body shot dwarfed by a large floral backdrop — zoom in and
    // shift down toward the couple.
    photoScale: 1.45,
    photoOrigin: '50% 62%',
  },
  {
    id: 'testimonial-fatima-fakhri',
    quote:
      'Wedding day kami jadi terasa semakin berkesan karena setiap momennya berhasil diabadikan dengan begitu indah oleh LOVIXPHOTO. Mulai dari persiapan, akad, sampai resepsi semuanya terdokumentasikan dengan baik. Team-nya profesional, ramah, dan sangat mengerti momen-momen penting yang harus diabadikan. Terima kasih LOVIXPHOTO sudah menjadi bagian dari cerita bahagia kami.',
    name: 'Fatima & Fakhri',
    role: 'Wedding',
    photo: fatimaFakhriPhoto,
    // Top-down candid shot, already tightly framed — only a mild zoom.
    photoScale: 1.1,
    photoOrigin: '50% 48%',
  },
]
