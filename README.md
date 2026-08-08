# Bengkel Nalar — Kelas X

PWA ringkasan belajar Kelas X (Matematika, Fisika, Kimia, Biologi) dengan gaya "buku catatan investigasi seorang penemu": tiap subbab dibedah lewat 7 tahap — Mengamati → Kenapa Ini Ada → Menelaah/Hakikat → Rumus Ditemukan → Di Dunia Nyata → Kasus (contoh soal terpandu) → Uji Nalar (latihan mandiri).

## Status konten (per rilis ini)

Sudah lengkap (siap dipakai):
- **Matematika** — Bab 1: Eksponen & Logaritma (4 subbab)
- **Fisika** — Bab 4: Kinematika Gerak Lurus (4 subbab)
- **Kimia** — Bab 3: Struktur Atom (4 subbab)
- **Biologi** — Bab 3: Virus (4 subbab)

Bab lainnya sudah muncul di navigasi (dengan label "segera") sesuai kurikulum Fase E, tinggal diisi menyusul — struktur data di `content-*.js` sudah siap dipakai, cukup tambahkan objek subbab baru dengan pola yang sama (mengamati, kenapa, menelaah, rumus, duniaNyata, kasus, ujiNalar).

## 1. Coba dulu di browser (sebelum deploy)

Buka `index.html` langsung di browser, atau jalankan server lokal sederhana:

```
python3 -m http.server 8080
```

lalu buka `http://localhost:8080`.

## 2. Deploy sebagai situs (GitHub Pages) + generate APK

1. Buat repo GitHub baru (misalnya `bengkel-nalar`), lalu push semua isi folder ini ke branch `main`.
2. Di repo → **Settings → Pages** → Source: pilih **GitHub Actions**.
3. Buka `twa-manifest.json`, ganti semua `REPLACE-WITH-USERNAME` dengan username/organisasi GitHub kamu, dan sesuaikan path `bengkel-nalar` kalau nama repo berbeda.
4. (Opsional tapi disarankan agar APK punya keystore permanen, bukan dibuat ulang tiap build) Buat keystore sekali secara lokal:
   ```
   keytool -genkey -v -keystore android.keystore -alias bengkelnalar -keyalg RSA -keysize 2048 -validity 10000
   ```
   lalu encode ke base64 dan simpan sebagai GitHub Secret:
   ```
   base64 -w0 android.keystore > keystore.b64
   ```
   Tambahkan secrets di repo → Settings → Secrets and variables → Actions:
   - `KEYSTORE_BASE64` (isi file `keystore.b64`)
   - `KEYSTORE_PASSWORD`
   - `KEY_PASSWORD`
5. Push ke `main`. Workflow **Deploy PWA & Build APK** otomatis jalan: men-deploy situs ke GitHub Pages, lalu membangun APK lewat Bubblewrap.
6. Ambil file APK dari tab **Actions** → pilih run terakhir → bagian **Artifacts** → unduh `BengkelNalar-apk`.
7. Install APK di Android (aktifkan "Install dari sumber tidak dikenal" jika diminta).

## Struktur file

```
index.html              shell aplikasi + navigasi tab
style.css                tema "blueprint" (biru cetak biru + garis grid)
app.js                    logika render, progres, drawer daftar bab
content-matematika.js     data materi Matematika
content-fisika.js         data materi Fisika
content-kimia.js          data materi Kimia
content-biologi.js        data materi Biologi
manifest.json             manifest PWA
sw.js                      service worker (mode offline)
twa-manifest.json         konfigurasi Bubblewrap untuk build APK
.github/workflows/        pipeline deploy + build APK
icons/                     ikon aplikasi
```

## Progres belajar

Tombol "Tandai Kasus Ini Selesai" di tiap subbab disimpan di `localStorage` HP masing-masing pengguna (bukan server) — tiap install/HP punya progresnya sendiri.
