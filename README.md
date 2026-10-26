# Miniso Toko: membuat aplikasi Android dan iPhone

Proyek ini memakai Capacitor. Isi aplikasi ada di folder `www`.

## Persiapan (sekali)
1. Pasang Node.js (nodejs.org).
2. Ganti alamat di `www/config.js` dengan alamat edits.json di GitHub Pages Anda (contoh: https://budi.github.io/miniso-toko/edits.json). Staf kemudian selalu melihat data terbaru dari kepala toko.
3. Buka terminal di folder ini, lalu jalankan:
```
npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/ios
npm install -D @capacitor/assets
npx cap add android
npx cap add ios        # hanya di Mac
npx capacitor-assets generate   # membuat ikon dari assets/icon.png
npx cap sync
```

## Izin kamera (untuk scan barcode)
- Android: buka `android/app/src/main/AndroidManifest.xml`, lalu tambahkan di dalam `<manifest>`:
  `<uses-permission android:name="android.permission.CAMERA" />`
- iPhone: buka `ios/App/App/Info.plist`, lalu tambahkan:
  `<key>NSCameraUsageDescription</key><string>Kamera dipakai untuk scan barcode produk</string>`
Lalu jalankan `npx cap sync` lagi.

## Android (APK)
1. Pasang Android Studio, lalu jalankan `npx cap open android`.
2. Pilih menu Build, Build Bundle(s) / APK(s), lalu Build APK(s).
3. File APK dibagikan ke HP staf. Di HP, izinkan pemasangan dari sumber lain. Untuk Google Play butuh akun developer Google dan file AAB (menu Build, Generate Signed Bundle).

## iPhone
1. Butuh Mac dengan Xcode dan akun Apple Developer berbayar untuk dipasang ke HP staf lewat TestFlight atau App Store.
2. Jalankan `npx cap open ios`, pilih Team dan perangkat di Xcode, lalu Run atau Archive.

## Mengubah data
Kepala toko tetap mengedit lewat situs GitHub Pages di browser (alamat dengan `#admin`), lalu mengunggah edits.json baru ke GitHub. Aplikasi mengambil data itu saat dibuka, jadi aplikasi tidak perlu dibangun ulang saat harga berubah. Menu Kelola data tidak dimaksudkan untuk dipakai di dalam aplikasi ini.
