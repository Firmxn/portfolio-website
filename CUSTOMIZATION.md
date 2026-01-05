# Portfolio Website - Customization Guide

## 📝 Mengubah Data Dummy

### 1. Personal Information

Edit `components/sections/HeroSection.tsx`:

```tsx
// Line 18-19
<h1 className="...">
  Hi, I'm <span className="...">Your Name</span>  {/* ← Ganti dengan nama Anda */}
</h1>

<TextGenerateEffect
  words="Full Stack Developer & Creative Problem Solver"  {/* ← Ganti dengan tagline Anda */}
  ...
/>

// Line 26-28
<p className="...">
  {/* Ganti dengan bio singkat Anda */}
  I build exceptional digital experiences...
</p>
```

### 2. Projects Data

Edit `data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Nama Proyek Anda",           // ← Ganti
    description: "Deskripsi proyek...",  // ← Ganti
    image: "/projects/your-image.jpg",   // ← Tambahkan gambar di folder public/projects/
    tags: ["Tech1", "Tech2", "Tech3"],   // ← Ganti dengan tech stack Anda
    link: "https://your-demo.com",       // ← Ganti dengan link demo
    github: "https://github.com/...",    // ← Ganti dengan link GitHub
  },
  // Tambahkan lebih banyak proyek...
];
```

### 3. Experience Data

Edit `data/experience.ts`:

```typescript
export const experiences: Experience[] = [
  {
    id: "1",
    company: "Nama Perusahaan",          // ← Ganti
    position: "Posisi Anda",             // ← Ganti
    period: "2023 - Present",            // ← Ganti
    description: "Deskripsi pekerjaan...", // ← Ganti
    technologies: ["Tech1", "Tech2"],    // ← Ganti
  },
  // Tambahkan lebih banyak pengalaman...
];
```

### 4. Social Media Links

Edit `data/social.ts`:

```typescript
export const socialLinks: SocialLink[] = [
  {
    id: "1",
    name: "GitHub",
    url: "https://github.com/YourUsername",  // ← Ganti dengan username Anda
    icon: "github",
  },
  {
    id: "2",
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile",  // ← Ganti
    icon: "linkedin",
  },
  // Update semua links...
];
```

## 🎨 Customization Tips

### Mengubah Warna Tema

Edit `tailwind.config.ts` untuk mengubah color scheme:

```typescript
theme: {
  extend: {
    colors: {
      // Tambahkan custom colors
      primary: "#3b82f6",    // Blue
      secondary: "#8b5cf6",  // Purple
      accent: "#ec4899",     // Pink
    },
  },
},
```

Lalu gunakan di components:
```tsx
className="bg-primary text-white"
className="from-primary to-secondary"
```

### Menambahkan Project Images

1. Buat folder `public/projects/` jika belum ada
2. Tambahkan gambar proyek Anda (format: jpg, png, webp)
3. Update path di `data/projects.ts`:
   ```typescript
   image: "/projects/my-project.jpg"
   ```

### Mengubah Font

Edit `app/layout.tsx`:

```typescript
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// Lalu di body:
<body className={inter.className}>
```

### Menambahkan Section Baru

1. Buat file baru di `components/sections/YourSection.tsx`
2. Import dan tambahkan di `app/page.tsx`:
   ```tsx
   import { YourSection } from "@/components/sections/YourSection";
   
   export default function Home() {
     return (
       <main>
         {/* ... sections lain */}
         <YourSection />
       </main>
     );
   }
   ```

## 🔧 Advanced Customization

### Mengaktifkan Contact Form

Untuk mengaktifkan contact form yang benar-benar berfungsi:

1. **Option 1: EmailJS**
   ```bash
   npm install @emailjs/browser
   ```

2. **Option 2: Resend (Recommended)**
   ```bash
   npm install resend
   ```

3. **Option 3: API Route + Nodemailer**
   Buat API route di `app/api/contact/route.ts`

### Menambahkan Analytics

**Google Analytics:**
```bash
npm install @next/third-parties
```

**Vercel Analytics:**
```bash
npm install @vercel/analytics
```

Lalu tambahkan di `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

<body>
  {children}
  <Analytics />
</body>
```

### SEO Optimization

Update metadata di `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name | Full Stack Developer",
  description: "Portfolio website showcasing my projects and experience in web development.",
  keywords: ["web developer", "full stack", "react", "next.js"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name - Portfolio",
    description: "...",
    images: ["/og-image.jpg"],
  },
};
```

## 📱 Mobile Optimization

Website sudah responsive, tapi Anda bisa customize breakpoints di `tailwind.config.ts`:

```typescript
theme: {
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  },
}
```

## 🚀 Performance Tips

1. **Optimize Images**: Gunakan Next.js Image component
2. **Lazy Loading**: Sudah otomatis di Next.js
3. **Code Splitting**: Sudah otomatis di Next.js
4. **Minimize Dependencies**: Hapus packages yang tidak digunakan

## 📝 Checklist Sebelum Deploy

- [ ] Update semua data dummy dengan data real
- [ ] Tambahkan project images
- [ ] Update social media links
- [ ] Test di mobile devices
- [ ] Check semua links berfungsi
- [ ] Update SEO metadata
- [ ] Test contact form (jika sudah diintegrasikan)
- [ ] Run `npm run build` untuk check errors

---

Jika ada pertanyaan atau butuh bantuan, silakan buka issue di GitHub repository!
