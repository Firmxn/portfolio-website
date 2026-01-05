# Deployment Guide - Vercel

## Prerequisites
- GitHub account dengan repository portfolio
- Vercel account (gratis)

## Steps to Deploy

### 1. Connect GitHub Repository

1. Kunjungi [vercel.com](https://vercel.com)
2. Sign in dengan GitHub account
3. Click "Add New Project"
4. Import repository `Firmxn/portfolio-website`

### 2. Configure Project

Vercel akan otomatis mendeteksi Next.js project. Pastikan konfigurasi berikut:

**Framework Preset:** Next.js
**Build Command:** `npm run build`
**Output Directory:** `.next`
**Install Command:** `npm install`

### 3. Environment Variables (Optional)

Jika Anda menambahkan fitur yang memerlukan environment variables (misalnya email service, analytics), tambahkan di Vercel dashboard:

```
# Contoh environment variables
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### 4. Deploy

1. Click "Deploy"
2. Tunggu proses build selesai (±2-3 menit)
3. Vercel akan memberikan URL deployment: `https://portfolio-website-xxx.vercel.app`

### 5. Custom Domain (Optional)

1. Buka project di Vercel dashboard
2. Go to "Settings" → "Domains"
3. Add custom domain Anda
4. Follow instruksi untuk update DNS records

## Automatic Deployments

Setiap kali Anda push ke branch `main`, Vercel akan otomatis:
- Build project
- Run tests (jika ada)
- Deploy ke production

## Preview Deployments

Setiap pull request akan mendapat preview deployment URL sendiri untuk testing.

## Performance Optimization

Vercel sudah mengoptimalkan:
- ✅ Image optimization
- ✅ Code splitting
- ✅ Edge caching
- ✅ Compression
- ✅ CDN distribution

## Troubleshooting

### Build Errors

Jika build gagal:
1. Check build logs di Vercel dashboard
2. Pastikan `npm run build` berhasil di local
3. Verify semua dependencies ada di `package.json`

### Environment Issues

Jika ada masalah dengan environment variables:
1. Check spelling dan format
2. Restart deployment setelah menambah variables
3. Pastikan prefix `NEXT_PUBLIC_` untuk client-side variables

## Monitoring

Vercel menyediakan:
- Analytics (traffic, performance)
- Error tracking
- Build logs
- Deployment history

## Next Steps

1. ✅ Deploy ke Vercel
2. 📝 Update data dummy dengan data real Anda
3. 🎨 Customize design sesuai preferensi
4. 📧 Integrate contact form dengan email service
5. 📊 Add analytics (Google Analytics, Vercel Analytics)
6. 🔍 SEO optimization
7. 🌐 Add custom domain

---

**Deployment URL:** Akan tersedia setelah deploy
**Repository:** https://github.com/Firmxn/portfolio-website
