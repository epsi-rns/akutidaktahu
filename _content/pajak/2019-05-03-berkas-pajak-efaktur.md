---
layout    : post
title     : Berkas Pajak - e-Faktur
date      : 2019-05-03 09:17:35
slug      : berkas-pajak-efaktur
tags      : [pajak]
keywords  : [arsip, efaktur]

toc       : "toc/berkaspajak.njk"
opengraphimage: "assets/posts/pajak/2018/03/07-pdf-ns-faktur.png"

excerpt   : Mengenal e-Faktur, dan mengakses berkas laporan

---

<a name="prakata"></a>

## Prakata

> Mengenal e-Faktur, dan mengakses berkas laporan

Artikel ini hanya untuk mengenal e-Faktur,
dan kemudian mengakses laporan,
Dan tidak lebih.

Supaya karyawan admin seperti kita,
dapat mengarsipkan laporan yang dibikin oleh orang lain.

### Daftar Isi

* [Prakata](#prakata): Daftar Isi

* [1: Melakukan Login](#login)

* [2: Menu ETaxInvoice](#menu)

* [3: Faktur Keluaran/Masukan](#faktur)

* [4: Mengakses Laporan](#akses)

* [5: Referensi](#referensi)

* [6: Backup](#backup)

* [Apa Selanjutnya?](#selanjutnya)

### Nama Aplikasi

Aplikasi yang kita pakai bernama `ETaxInvoice`.

### Dokumentasi Resmi

`ETaxInvoice` telah menyertakan dokumentasi resmi.
Yang ada di dalam folder aplikasi `ETaxInvoice`,
yaitu: `EFaktur.chm`,
seperti tampak di gambar di bawah.

![ETaxInvoice: Dokumentasi Resmi][10-cuplikan-chm]

Apabila kawan-kawan punya akses ke berkas tersebut,
maka kawan-kawan tidak perlu membaca artikel di blog saya ini.
Karena dokumentasi resmi sudah cukup resmi.

Bagaimanapun artikel ini tetap saya bikin,
selain supaya mudah diakses dari internet,
isi gambar-nya dapat langsung di-copy-paste,
untuk memudahkan diskusi/tutorial di medsos.

-- -- --

<a name="login"></a>

## 1: Melakukan Login

### Letak berkas

Letak berkas berbeda,
tegantung di mana admin petugas e-faktur meng-extract berkas saat awal.
Berkas ini juga dapat dipindahkan.

Menjalankannya cukup dengan membuka berkas `ETaxInvoice`.

![ETaxInvoice: Letak Folder][11-folder-etax]

### Network atau Lokal

ETaxInvoice dapat bekerja untuk multiuser.

![ETaxInvoice: Database][11-pilih-database]

Jadi dapat ada beberapa orang admin,
yang melakukan entry faktur dari komputer berbeda.
Namun setahu saya,
hanya satu admin utama yang dapat melakukan upload ke DJP.

### Login

Jangan lupa password.

![ETaxInvoice: Login][11-login-etax]

Dan siapkan sertifikat elektronik.
Untuk pengaturan setup yang pertama kali.

### Database

> Satu Aplikasi satu NPWP

Database yang digunakan-pun bisa diatur.
Namun hanya untuk perusahaan yang sama.

![ETaxInvoice: Login][12-admin-database]

Artinya, kalau yang diatur beberapa perusahaan berbeda.
Maka harus ada beberapa aplikasi ETaxInvoice,
di folder yang berbeda.

### Data Wajib Pajak Badan

Supaya tidak salah memasukkan data,
lihat dahulu data perusahaan yang tertera
di bawah menu.

![ETaxInvoice: Data Wajib Pajak Badan][13-data-perusahaan]

-- -- --

<a name="menu"></a>

## 2: Menu ETaxInvoice

Sebagai pengenalan,
marikita jelajahi, menunya apa saja.

### Menu Utama

![ETaxInvoice: Menu Utama][21-menu-utama]

### Menu Fakut Keluaran/Masukan

Terkait denagn pembikinan tagihan invoice sehari-hari di kantor,
kita akan berhubungan dengan faktur keluaran/masukan.

* Faktur Keluaran

![ETaxInvoice: Menu: Faktur Keluaran][22-menu-fpk]

* Faktur Masukan

![ETaxInvoice: Menu: Faktur Masukan][22-menu-fpm]

Kita akan membahas ini secara rinci di artikel lain.

### Menu Dokumen Lainnya

![ETaxInvoice: Menu: Dokumen Lainnya][23-menu-lain]

### Menu SPT

Ini bagian untuk pelaporan bulanan.

![ETaxInvoice: Menu: SPT][24-menu-spt]

Kita akan membahas ini secara rinci di artikel lain.

### Menu Lain

* Referensi

![ETaxInvoice: Menu: Referensi][25-menu-referensi]

* Upload

![ETaxInvoice: Menu: Upload][26-menu-upload]

-- -- --

<a name="faktur"></a>

## 3: Faktur Keluaran/Masukan

Seperti telah disampaikan di atas,
terkait denagn pembikinan tagihan invoice sehari-hari di kantor,
kita akan berhubungan dengan faktur keluaran/masukan.
Isi tabel-nya kira-kira seperti ini:

* Faktur Keluaran

![ETaxInvoice: Tabel: Faktur Keluaran][31-faktur-keluaran]

* Faktur Masukan

![ETaxInvoice: Tabel: Faktur Masukan][31-faktur-masukan]

Pada pelaksanaannya isi tabel bisa banyak bisa sedikit,
tergantung jumlah transaksi perusahaan.

Transaksi sedikit, bukan berarti perusahaan kecil,
karena bisa saja nilainya transaksinya besar.

-- -- --

<a name="akses"></a>

## 4: Mengakses Laporan

### Menu SPT

Kita perlu tahu, tampilan menu SPT seperti apa.

![ETaxInvoice: Tombol Menu: Buka SPT][34-buka-spt]

### Upload SPT

Untuk dapat di-upload,
membutuhkan kewenangan _privilege_ khusus dari admin utama.
Dan untuk keamanan, juga diberi pengaturan khusus.

![ETaxInvoice: Tabel: Upload SPT][38-upload-spt]

### Cetak SPT

Sebetulnya menu cetak laporan hanya dua.

* Induk, beserta AB
* Lampiran: A1, A2, B1, B2, B3.

![ETaxInvoice: Tombol Menu: Buka SPT][35-lapor-spt]

Bila tombol cetak SPT Induk ditekan akan muncul seperti ini:

[35-simpan-spt-induk]:  {% postimage %}/pajak/2019/05/35-simpan-spt-induk.png

Bila tombol cetak Lampiran SPT ditekan akan muncul seperti ini:

[35-simpan-spt-lampir]: {% postimage %}/pajak/2019/05/35-simpan-spt-lampiran.png

Maka akan muncul di folder kita misalnya seperti ini:

1. Induk:
   `0814435180110000101201800F1232040111INDUK.pdf`

2. Lampiran:
   `0814435180110000101201800F1232040111LAMPIRAN.pdf`


-- -- --

<a name="referensi"></a>

## 5: Referensi

Pada saat mengisi faktur, kita membutuhkan referensi sebagai berikut:

* Nomor Seri Faktur Pajak.
* Lawan Transaksi

#### Nomor Seri Faktur Pajak

NSFP yang kita dapatkan dari e-Nofa,
mesti kita inputkan dahulu ke dalam aplikasi `ETaxInvoice`.

![ETaxInvoice: Referensi: Nomor Seri Faktur Pajak][36-ref-faktur]

#### Lawan Transaksi

![ETaxInvoice: Referensi: Lawan Transaksi][37-ref-lawan]

-- -- --

<a name="backup"></a>

## 6: Backup

Backup dilakukan secara otomatis,
saat memulai aplikasi.
di folder db.

### Backup Manual

Simpan secara berkala backup terakhir.

![ETaxInvoice: Backup DB][39-backup-db]

### Bekerja dengan Data Sekunder

Aturan umum dari penggunaan `ETaxInvoice` adalah,
hanya ada satu aplikasi `ETaxInvoice` di perusahaan. 

Seringkali fungsi pajak di suatu perusahaan dipisah.
Misalnya bagian penagihan invoice punya petugas sendiri,
yang punya akses langung sekaligus ke aplikasi `ETaxInvoice`.

Sementara karyawan lain yang,
tidak punya akses langsung ke ke aplikasi `ETaxInvoice`,
perlu sekali-sekali membuka aplikasi ini,
misalnya untuk keperluan pengarsipan atau analisa.

Untuk keperluan ini kita dapat menaruh backup yang diberikan ke kita,
lalu membukanya di berkas `ETaxInvoice` tersendiri di komputer berbeda.
Dengan begini, kita sebagai karyawan admin,
bebas mencetak faktur yang kita perlukan,
atau melakukan hal lain,
misalnya seperti memeriksa kecocokan faktur dengan invocie.

Yang perlu diperhatikan saat bekerja dengan cara seperti adalah,
*jangan menyalakan uploader*.

Selama aturan ini dipenuhi, aman.

-- -- --

<a name="selanjutnya"></a>

## Apa Selanjutnya?

Sekarang kita sudah siap dengan nomor faktur.
Maka kita akan lanjut ke pengisian aplikasi efaktur:
[[Berkas Pajak - e-Bupot PPh 23][local-whats-next]].

[//]: <> ( -- -- -- links below -- -- -- )

[local-whats-next]:     /pajak/2020/11/05/berkas-pajak-ebupot.html

[10-cuplikan-chm]:      {% postimage %}/pajak/2019/05/10-cuplikan-chm.png

[11-folder-etax]:       {% postimage %}/pajak/2019/05/11-folder-etax.png
[11-login-etax]:        {% postimage %}/pajak/2019/05/11-login-etax.png
[11-pilih-database]:    {% postimage %}/pajak/2019/05/11-pilih-database.png
[12-admin-database]:    {% postimage %}/pajak/2019/05/12-admin-database.png
[13-data-perusahaan]:   {% postimage %}/pajak/2019/05/13-data-perusahaan-blank.png

[21-menu-utama]:        {% postimage %}/pajak/2019/05/21-menu-utama.png
[22-menu-fpk]:          {% postimage %}/pajak/2019/05/22-menu-fpk.png
[22-menu-fpm]:          {% postimage %}/pajak/2019/05/22-menu-fpm.png
[23-menu-lain]:         {% postimage %}/pajak/2019/05/23-menu-lain.png
[24-menu-spt]:          {% postimage %}/pajak/2019/05/24-menu-spt.png
[25-menu-referensi]:    {% postimage %}/pajak/2019/05/25-menu-referensi.png
[26-menu-upload]:       {% postimage %}/pajak/2019/05/26-menu-upload.png

[31-faktur-keluaran]:   {% postimage %}/pajak/2019/05/31-faktur-keluaran.png
[31-faktur-masukan]:    {% postimage %}/pajak/2019/05/31-faktur-masukan.png
[32-faktur-keluaran]:   {% postimage %}/pajak/2019/05/32-faktur-keluaran.png
[32-faktur-masukan]:    {% postimage %}/pajak/2019/05/32-faktur-masukan.png
[34-buka-spt]:          {% postimage %}/pajak/2019/05/34-buka-spt.png

[35-lapor-spt]:         {% postimage %}/pajak/2019/05/35-lapor-spt.png
[35-simpan-spt-induk]:  {% postimage %}/pajak/2019/05/35-simpan-spt-induk.png
[35-simpan-spt-lampir]: {% postimage %}/pajak/2019/05/35-simpan-spt-lampiran.png

[36-ref-faktur]:        {% postimage %}/pajak/2019/05/36-ref-faktur.png
[37-ref-lawan]:         {% postimage %}/pajak/2019/05/37-ref-lawan.png
[38-upload-spt]:        {% postimage %}/pajak/2019/05/38-upload-spt.png

[39-backup-db]:         {% postimage %}/pajak/2019/05/39-backup-db.png
