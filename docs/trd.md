# Technical Requirements Document (TRD)

## Project Name

Loxix Photo

## Version

v1.0

## Overview

Loxix Photo adalah website portfolio wedding photography berbasis React yang dirancang sebagai single-page application (SPA).

Arsitektur sistem harus sederhana, mudah dipelihara, cepat diakses, dan berfokus pada penyajian karya fotografi dengan performa optimal.

---

# Technical Goals

## Primary Goals

* Fast loading experience
* Mobile-first responsive design
* Clean architecture
* Easy content maintenance
* Premium user experience

## Secondary Goals

* SEO friendly
* Scalable for future expansion
* Easy deployment process

---

# Technology Stack

## Frontend Framework

React 19+

Alasan:

* Component-based architecture
* Mudah dikembangkan
* Ekosistem luas
* Cocok untuk SPA portfolio

---

## Build Tool

Vite

Alasan:

* Fast development server
* Lightweight
* Optimized production build

---

## Styling

Tailwind CSS

Alasan:

* Rapid development
* Consistent design system
* Minimal CSS maintenance

---

## Animation

Framer Motion

Digunakan untuk:

* Fade in animation
* Scroll reveal
* Hero transitions
* Hover effects

---

## Smooth Scrolling

Lenis

Digunakan untuk:

* Premium scrolling experience
* Consistent scrolling behaviour

---

## Deployment

Vercel

Alasan:

* Free hosting
* React friendly
* Fast CDN
* Automatic deployment

---

# Application Architecture

## Architecture Type

Single Page Application (SPA)

Flow:

Home Page

↓

Hero

↓

Gallery

↓

Contact

Tidak menggunakan multi-page routing pada versi pertama.

---

# Project Structure

```txt
src/

├── assets/
│
│   ├── hero/
│   │   └── hero.webp
│   │
│   └── gallery/
│       ├── wedding-01.webp
│       ├── wedding-02.webp
│       └── ...
│
├── components/
│
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── Hero.css
│   │
│   ├── Gallery/
│   │   ├── Gallery.jsx
│   │   └── Gallery.css
│   │
│   ├── Lightbox/
│   │   └── Lightbox.jsx
│   │
│   └── Contact/
│       └── Contact.jsx
│
├── data/
│   └── gallery.js
│
├── hooks/
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# Component Design

## Hero Component

Responsibilities:

* Menampilkan branding utama
* Menampilkan hero image
* Menampilkan CTA

Props:

```js
{
  title,
  subtitle,
  image
}
```

---

## Gallery Component

Responsibilities:

* Menampilkan koleksi foto
* Menangani grid layout
* Menangani click event

Props:

```js
{
  photos
}
```

---

## Lightbox Component

Responsibilities:

* Menampilkan foto ukuran besar
* Menangani close action

Props:

```js
{
  image,
  isOpen,
  onClose
}
```

---

## Contact Component

Responsibilities:

* Menampilkan WhatsApp link
* Menampilkan Instagram link

Props:

```js
{
  whatsapp,
  instagram
}
```

---

# State Management

## Approach

Local State Only

Menggunakan:

```js
useState()
```

dan

```js
useEffect()
```

Tidak menggunakan:

* Redux
* Zustand
* MobX

Karena kebutuhan aplikasi sangat sederhana.

---

# Data Management

## Gallery Data

File:

```txt
src/data/gallery.js
```

Contoh:

```js
export const gallery = [
  {
    id: 1,
    image: "/gallery/wedding-01.webp",
    alt: "Wedding moment"
  }
];
```

Versi pertama menggunakan static data.

---

# Image Strategy

## Image Format

Prioritas:

```txt
WEBP
```

Fallback:

```txt
JPG
```

---

## Optimization Rules

* Maksimum 300 KB per foto
* Kompres sebelum upload
* Lazy loading untuk seluruh gallery
* Hero image menggunakan preload

---

## Loading Strategy

Hero:

```html
loading="eager"
```

Gallery:

```html
loading="lazy"
```

---

# Animation Strategy

## Hero Animation

* Fade in
* Slight upward motion

Durasi:

```txt
0.6 – 1.0 second
```

---

## Gallery Animation

Saat foto masuk viewport:

* Opacity transition
* Small translateY

Tidak menggunakan:

* Parallax berat
* 3D effects
* Over-animation

---

# Responsive Design

## Breakpoints

Mobile

```css
< 768px
```

Tablet

```css
768px - 1024px
```

Desktop

```css
> 1024px
```

---

# SEO Requirements

## Meta Title

```txt
Loxix Photo | Wedding Photography
```

---

## Meta Description

```txt
Premium wedding photography portfolio by Loxix Photo. Capturing timeless love stories through elegant and emotional imagery.
```

---

## Open Graph

Required:

* og:title
* og:description
* og:image

Untuk preview saat link dibagikan ke:

* WhatsApp
* Instagram DM
* Telegram
* Facebook

---

# External Integrations

## WhatsApp

Format:

```txt
https://wa.me/XXXXXXXXXXX
```

---

## Instagram

Format:

```txt
https://instagram.com/username
```

---

# Performance Requirements

Target Lighthouse Score:

Performance

```txt
90+
```

Accessibility

```txt
90+
```

Best Practices

```txt
90+
```

SEO

```txt
90+
```

---

# Deployment Pipeline

Developer Push

↓

GitHub Repository

↓

Vercel Auto Deploy

↓

Production

Branch Strategy:

```txt
main
```

untuk production deployment.

---

# Future Expansion (Phase 2)

Fitur yang dapat ditambahkan tanpa mengubah arsitektur utama:

* CMS integration
* Client gallery
* Multiple wedding albums
* Testimonial section
* Booking inquiry form
* Blog section
* Multi-language support

---

# Technical Success Criteria

Project dianggap selesai apabila:

* Build berhasil tanpa error.
* Responsive pada mobile, tablet, desktop.
* Gallery berfungsi dengan baik.
* Lightbox berjalan normal.
* CTA WhatsApp dan Instagram aktif.
* Lighthouse score > 90.
* Deployment production berhasil.
* Tidak ada bug kritikal pada user journey utama.
