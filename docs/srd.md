# Software Requirements Document (SRD)

## Project Name

Lovix Photo

## Version

v1.0

## Overview

Lovix Photo adalah website portfolio wedding photography berbasis single-page application yang berfokus pada penyajian karya fotografi secara visual, minimalis, dan premium.

Tujuan utama sistem adalah memungkinkan pengunjung melihat hasil fotografi dengan cepat dan menghubungi Lovix Photo melalui kanal komunikasi yang tersedia.

---

# System Scope

Sistem menyediakan:

* Hero section sebagai first impression.
* Gallery section sebagai fokus utama website.
* Contact section untuk konversi.
* Pengalaman browsing yang cepat dan responsif.

Sistem tidak menyediakan:

* Authentication.
* Dashboard admin.
* Booking system.
* Payment processing.
* Content management system.

---

# User Roles

## Visitor

Pengguna umum yang mengakses website.

Hak akses:

* Melihat seluruh halaman.
* Melihat gallery.
* Membuka Instagram.
* Membuka WhatsApp.

Tidak ada proses login atau registrasi.

---

# Functional Requirements

## FR-001 Hero Section

### Description

Sistem harus menampilkan hero section pada saat halaman pertama kali dibuka.

### Requirements

Hero section harus menampilkan:

* Nama brand.
* Tagline.
* Hero image atau video.
* CTA button.

### Acceptance Criteria

* Hero tampil pada viewport pertama.
* Hero dapat dilihat pada mobile dan desktop.
* CTA dapat diklik.

---

## FR-002 Gallery Display

### Description

Sistem harus menampilkan koleksi foto wedding.

### Requirements

* Gallery menampilkan foto-foto pilihan.
* Foto dapat ditampilkan dalam grid atau masonry layout.
* Gallery dapat di-scroll secara vertikal.

### Acceptance Criteria

* Seluruh foto dapat dimuat.
* Layout tetap rapi pada semua ukuran layar.
* Tidak terjadi layout break.

---

## FR-003 Image Preview

### Description

Pengguna dapat melihat foto dalam ukuran yang lebih besar.

### Requirements

* Klik foto membuka preview.
* Preview dapat ditutup kembali.

### Acceptance Criteria

* Preview muncul kurang dari 300ms setelah klik.
* Tombol close tersedia.
* Pengguna dapat kembali ke gallery.

---

## FR-004 Contact Actions

### Description

Pengguna dapat menghubungi Lovix Photo.

### Requirements

Website menyediakan:

* Tombol WhatsApp.
* Tombol Instagram.

### Acceptance Criteria

* WhatsApp membuka chat.
* Instagram membuka profile.
* Link berfungsi pada mobile dan desktop.

---

## FR-005 Responsive Layout

### Description

Website harus mendukung berbagai ukuran layar.

### Acceptance Criteria

Support:

* Mobile
* Tablet
* Desktop

Layout harus tetap konsisten pada semua perangkat.

---

## FR-006 Smooth Scrolling

### Description

Website menyediakan pengalaman scrolling yang nyaman.

### Acceptance Criteria

* Scrolling terasa halus.
* Tidak terjadi stuttering.
* Performa tetap stabil.

---

# Non-Functional Requirements

## NFR-001 Performance

### Requirements

* Initial load kurang dari 3 detik.
* Optimasi gambar dilakukan sebelum deployment.
* Menggunakan lazy loading untuk gallery.

### Acceptance Criteria

* Website tetap responsif meskipun memiliki banyak foto.
* Tidak ada lag signifikan saat scrolling.

---

## NFR-002 Reliability

### Requirements

* Website dapat diakses 24/7.
* Link WhatsApp dan Instagram harus selalu valid.

### Acceptance Criteria

* Tidak ada broken links.
* Tidak ada error JavaScript yang mengganggu fungsi utama.

---

## NFR-003 Usability

### Requirements

* Navigasi sederhana.
* Pengguna dapat memahami website tanpa instruksi.

### Acceptance Criteria

* Visitor dapat menemukan gallery dalam beberapa detik.
* Visitor dapat menemukan kontak tanpa kebingungan.

---

## NFR-004 Accessibility

### Requirements

* Semua gambar memiliki alt text.
* Kontras warna memenuhi standar dasar keterbacaan.

### Acceptance Criteria

* Konten dapat digunakan pada perangkat assistive technology dasar.

---

## NFR-005 Compatibility

### Supported Browsers

* Google Chrome
* Safari
* Microsoft Edge
* Mozilla Firefox

### Supported Devices

* iPhone
* Android
* iPad
* Laptop
* Desktop

---

# Data Requirements

## Gallery Data

Setiap item gallery minimal memiliki:

* ID
* Image URL
* Alt Text

Contoh:

```json
{
  "id": 1,
  "image": "/gallery/wedding-01.webp",
  "alt": "Bride and groom during wedding ceremony"
}
```

---

# Navigation Flow

## Landing Experience

Visitor membuka website

↓

Hero Section

↓

Gallery

↓

Contact

↓

WhatsApp / Instagram

---

# Error Handling

## Missing Image

Jika gambar gagal dimuat:

* Tampilkan placeholder image.
* Layout tidak boleh rusak.

## Invalid Link

Jika link eksternal tidak tersedia:

* Sistem menampilkan fallback message.
* Website tetap dapat digunakan.

---

# MVP Completion Criteria

Versi 1.0 dianggap selesai apabila:

* Hero section berfungsi.
* Gallery tampil dengan baik.
* Preview foto berfungsi.
* Contact section aktif.
* Website responsif.
* Website berhasil dideploy.
* Tidak terdapat bug kritikal pada flow utama.
