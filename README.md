# Miniso Toko: panduan GitHub Pages

## 1. Pasang di GitHub (sekali saja)
1. Buat akun di github.com, lalu buat repository baru (misalnya `miniso-toko`), pilih Public.
2. Di halaman repository klik Add file, lalu Upload files. Tarik SEMUA isi folder ini (index.html, edits.json, manifest.json, sw.js, dua file icon, dan folder sprites) lalu klik Commit changes.
3. Buka Settings, lalu Pages. Pada Source pilih Deploy from a branch, branch main, folder / (root), lalu Save.
4. Tunggu 1 sampai 3 menit. Alamat aplikasi: https://NAMA-GITHUB-ANDA.github.io/miniso-toko/

Catatan: repository Public berarti file data (harga dan promo) bisa dibaca siapa pun yang tahu alamatnya. Repository Private untuk Pages butuh paket berbayar GitHub.

## 2. Pasang di HP staf
Buka alamat di Chrome (Android): menu tiga titik, lalu Tambahkan ke layar utama. Di iPhone buka dengan Safari: tombol Bagikan, lalu Tambah ke Layar Utama.

## 3. Mode kepala toko
Di HP kepala toko, buka alamat aplikasi dengan tambahan `#admin` di belakangnya, sekali saja (contoh: .../miniso-toko/#admin). Menu Kelola data akan muncul. Staf tidak melihat menu itu.

## 4. Mengubah produk dan membagikannya ke staf
1. Kepala toko edit di menu Kelola data (edit, tambah, impor Excel, foto).
2. Klik Unduh edits.json (untuk staf).
3. Di GitHub buka repository, Add file, Upload files, tarik file edits.json yang baru (nama harus sama), lalu Commit changes.
4. Staf menutup dan membuka ulang aplikasi. Perubahan muncul setelah 1 sampai 2 menit.

Hanya pemilik repository (dan orang yang Anda tambahkan sebagai collaborator) yang bisa mengganti edits.json, jadi hanya kepala toko yang dapat mengubah data yang dilihat staf. Mode #admin hanya menampilkan menu di HP; perlindungan sebenarnya ada di akses ke repository GitHub.
