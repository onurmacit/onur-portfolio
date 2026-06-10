# Onur Macit — Portfolio

Minimal, iki dilli (EN/TR) kişisel portfolio/CV sitesi. Next.js + Tailwind CSS ile geliştirildi.

## Çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini aç.

## İçeriği Düzenleme

Sitedeki **tüm metinler tek bir dosyada**: [`lib/content.ts`](lib/content.ts)

- İsim, ünvan, tanıtım yazısı → `hero`
- Hakkımda paragrafları → `about`
- İş deneyimleri → `experience.items`
- Projeler → `projects.items`
- Yetenekler → `skills.groups`
- E-posta ve sosyal linkler → `contact`

Hem `en` hem `tr` bölümlerini güncellemeyi unutma.

## Tasarımı Özelleştirme

Renkler ve fontlar [`app/globals.css`](app/globals.css) içindeki `:root` değişkenlerinde:

- `--accent` — vurgu rengi
- `--background` / `--foreground` — zemin ve metin renkleri

## Deploy

En kolayı [Vercel](https://vercel.com): repoyu GitHub'a pushlayıp Vercel'e bağlaman yeterli.

```bash
npm run build
```
