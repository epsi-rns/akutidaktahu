---
layout    : post
title     : Berkas Pajak - Softcopy
date      : 2018-03-13 09:17:35
slug      : berkas-pajak-softcopy
tags      : [pajak]
keywords  : [arsip, folder]

toc       : "toc/berkaspajak.njk"
opengraphimage: "assets/posts/pajak/2018/03/64-cover-writer.png"

excerpt   : Mempersiapkan Folder untuk Bekerja dengan Arsip Pajak.
---

<a name="prakata"></a>

## Prakata

> Mempersiapkan Folder untuk Bekerja dengan Arsip Pajak.

Sebetulnya bebas saja mau mulai dari mana.
Ada hardcopy kemudian di-scan menjadi softcopy.
Atau ada softcopy kemudian dicetak menjadi hardcopy.

Yang mudah adalah memulai dari softcopy.
Kalau softcopy sudah lengkap,
maka mencetak menjadi mudah.
Namun saya juga paham kalau tidak semua kondisi,
memungkinkan adanya softcopy ini.
Sebagai pegawai, mungkin kita ingin berbuat,
namun tidak pounya akses ke sana.

Bagaimanapun, di artikel ini asumsinya adalah,
kita memulai dari softcopy.
Softcopy ini memerlukan pengelolaan secara khusus.
Yaitu:
1. Mengelola Folder
2. Tata Nama Berkas

Dan sedikit tambahan yaitu

* Berkomunikasi untuk keperluan internal.

### Daftar Isi

* [Prakata](#prakata): Daftar Isi

* [1: Penataan Folder Utama](#folderutama)

* [2: Tata Nama Berkas](#tatanama)

* [3: Kebutuhan Internal](#internal)

* [Apa Selanjutnya?](#selanjutnya)

-- -- --

<a name="folderutama"></a>

### 1: Penataan Folder Utama

Sebelum masuk ke jenis-jenis berkas pajak.
Mari kita bayangkan sejenak akan seperti apa berkas ini nantinya.

#### Aturan Umum Folder

> Semua berkas ada tempatnya./
> Semua berkas pada tempatnya.

Kelompokkan berkas, misalnya berdasarkan waktu atau lainnya.
Sebisanya jangan ada berkas-berkas liar di luar folder.

Kalau sudah ada lebih dari dua belas berkas tanpa folder,
ini pertanda folder kita berantakan.
Masukkan dalam direktori tersendiri.

Berkas-berkas juga mesti memiliki,
tata nama yang memudahkan pengurutan.
Jangan mengandalkan file manager di OS,
untuk mengurutkan berkas.
Admin yang mengambil keputusan,
misalnya diurutkan berdasarkan tahun.

#### File Sharing

Ada beberapa jenis pendekatan dalam penyimpanan berkas.
File sharing, atau simpan sendiri-sendiri di PC masing-masing.
File sharing ini biasanya mulai dibutuhkan ketika beberapa karyawan,
harus mengakses berkas yang sama dalam waktu yang hampir bersamaan.
Sementara kalau perusahaan kecil yang baru mulai,
biasanya menyimpan folder di PC masing-masing,
atau bahkan nitebook pribadi.
Sebagai catatan: Berkas yang bersifat rahasia,
seperti gaji pegawai, disimpan di tempat khusus.

Sebetulnya folder perusahaan itu banyak.
Kalau di kantor ada file server,
untuk diakses beberapa karyawan sekaligus,
maka biasanya kita temukan folder yang dinomori berurut,
sesuai urutan business process-nya misalnya:

* 01 - Quotation
* 02 - Purchase
* 03 - Invoice
* 05 - Pajak Masa

Kita tidak membahas yang seperti ini.
Yang kita bahas adalah folder di PC masing-masing.

#### Meletakkan Data

Untuk kegiatan di PC masing-masing,
biasanya ditaruh di partisi khusus, misalnya di `D:`,
bila memakai Windows.
atau di linux dapat ditaruh di partisi home.
Intinya adalah pisahkan sistem dengan data.

_Mengapa tidak disarankan ditaruh di my document?_

Tujuan memisahkan partisi adalah,
memudahkan backup bila terjadi sesuatu.
Seringkali kita hrus memformat drive `C:`,
maka kita harus memudahkan admin,
dengan tidak menaruh data di drive `C:`.

#### Working Folder

Sekarang mari kita lihat contoh penampakan,
direktori kerja kita.

![Folder Utama: Sederhana][01-folder-sederhana]

Ada dua jenis folder yang harus kita tangani.

1. Pajak Masa
2. Laporan Tahunan

Sebetulnya job desc ini sudah banyak,
kalau transaksi perusahaan memang rutin.

#### Pengurutan Folder untuk Backup

Biasanya saya memberi prefix tahun.
Misalnya:

* 2008 - Pajak Masa

Hal ini terkait dengan backup. Misalnya: 

* Kalau melakukan sync ke dropbox, maka kapasitas terbatas.
  Karena itu tahun-tahun yang lama, mesti kita pisahkan.

* Data beberapa tahun terlewat, perlu di-backup,
  misalnya ke external hard disk.
  Dengan memberi prefix tahun,
  maka mudah diketahui mana yang perlu di-backup.

#### Laporan Tahunan

Folder eSPT ini saya pisahkan,
karena untuk pelaporannya memang membutuhkan perhatian khusus,
dan tentunya banyak sumber data, terutama terkait dengan akuntansi.

Di sini saya beri contoh pelaporan pajak tahun 2017,
yang direncanakan akan dilaporkan di bulan maret 2018.

![Folder Utama: e-SPT][02-folder-espt]

Isi folder ini tergantung kebijakan perusahaan masing-masing.
Tidak harus seperti di atas.

#### Pajak Masa

Folder pajak masa, dapat diatur menurut jenis pajaknya.
Atau diatur menurut jenis masa-nya.
Ini masalah selera, tidak ada yang salah atau benar.
Berikut contoh pengaturan sesuai dengan masa pajaknya.

![Folder Utama: Pajak Masa][03-folder-pajak-masa]

Kalau urutan sesuai masa pajak-nya,
maka isi rincian-nya dalah sesuai jenis pajaknya.

![Folder Utama: Pajak Masa - Rinci][04-folder-masa-rinci]

Namun bila pelaporan sesuai jenis pajaknya,
maka rincian-nya adalah masa pajaknya.

Saya pernah mencoba ini,
dan hasil folder-nya kurang rapih.
Namun kembali lagi,
ini tergantung selera admin setempat.
Saya tidak boleh mengatur.

#### Pengurutan Folder Bulanan

Biasanya penulis susun seperti ini:

* 01 - Jan
* 02 - Feb
* 03 - Mar

Mengenai pengurutan berdasarkan masa pajak tidak terkait dengan backup.
Namun hanya kerapihan saja.

Yang perlu dicatat.
Isi folder ini nantinya akan berkembang,
bukan hanya berisi folder bulanan ini.
Namun ini kita bahas nanti.

Sekarang dasar pengaturannya saja terlebih dahulu.

#### Pembetulan

> To Err is Human

Ciri khas laporan pajak adalah terjadinya pembetulan.
Kesalahan adalah manusiawi,
maka dinas pajak memberikan fasilitas pembetulan.
Yang dapat terjadi yaitu:

1. Laporan Pertama: Normal
2. Laporan Kedua: Pembetulan 1
3. Laporan Ketiga: Pembetulan 2

Karena itu kita perlu membuat,
_naming space_ (tata nama) yang konsisten,
misalnya untuk PPn:

* PPn.0.normal
* PPn.1.rev
* PPn.2.rev

Bagaimana kalau ternyata ada berkas yang dibikin rekan kerja,
namun tidak belum di-submit pelaporannya. Maka kita beri nama draft:

* PPn.2.draft

Bagaimana, kalau kita sendiri yang mengerjakan namun belum dilaporkan?
Maka perlu kita beri nama lain misalnya:

* PPn.2.rev.new

Dengan demikian, kita dapat langsung tahu,
kalau ada berkas kita yang belum kita laporkan.
Kita tahu ada pekerjaan kantor,
yang berpotensi terkena denda karena masih gantung,
belum dilaporkan.

#### Penyederhanaan NAma

Bilamana, jarang terjadi pembetulan,
maka dapat menyederhanakan tata nama.

Misalnya alih-alih menulis demikian:

* PPh4(2).0.normal

Maka akan lebih ringkas menulis begini:

* PPh4(2).0

#### Alternatif

Pengaturan folder utama-pun,
tidak bisa dipaksakan sesuai contoh di atas.

Kalau yang diatur hanya satu perusahaan,
maka cukup memakai yang seperti ini:

![Folder Utama: Alternatif][01-folder-alternatif]

Semua di satu folder.

-- -- --

<a name="tatanama"></a>

### 2: Tata Nama Berkas

Buatlah tata nama berkas yang konsisten,
sesuai kebutuhan kantor.

Berikut contoh yang saya bikin di bawah.
Namun tidak perlu mesti sama.

* Folder PPn
* Folder PPh 21
* Folder PPh 4(2)
* Folder PPh 23
* Folder Baru

Folder baru ini adalah yang masih gantung,
belum selesai pelaporannya.

#### Folder PPn

Di sini ada dua jenis tata nama folder PPn.
Yang kita pakai adalah yang sudah memakai e-Faktur.

![Folder PPn][05-folder-ppn]

Di tahun sebelumnya pelaporan masih memakai eSPT PPn.
Sedangakn tahun ini sudah memakai e-Faktur semua.

Memang aplikasi pajak selalu diperbarui secara berkala,
disesuaikan kebutuhan modernisasi.
Sehingga kita sebagai pegawai mesti terus belajar,
memperbarui ilmu juga.

#### Folder PPh 21

Berikut gambaran sekilas PPh pasal 21.
Kita akan bahas rincian di artikel terpisah.

![Folder PPh21][06-folder-pph21]

Tampaknya pemerintah juga akan memperbarui aplikasi pajak.

#### Folder PPh 4(2)

Berikut gambaran sekilas PPh pasal 4 ayat 2, yaitu PPh Final.
Kita akan bahas rincian di artikel terpisah.

![Folder PPh 4(2)][07-folder-pph4(2)]

#### Folder PPh 23

Berikut gambaran sekilas PPh pasal 23.
Kita akan bahas rincian di artikel terpisah.

![Folder PPh 23][08-folder-pph23]

#### Folder Baru

Di folder baru ini,
biasanya ditaruh berkas awal untuk perhitungan pajaknya.

![Folder New][09-folder-new]

Biasanya saya bikin berkas lembar kerja excel-nya.
Berikut draft SSP, bilamana perlu ada pembayaran pajak.

Kita akan bahas prakteknya artikel terpisah,
untuk tiap jenis pajak masa, secara mendetail.

Untuk sementara ini hanya wawasan yang dapat diabaikan.

#### Media Berkomunikasi

Lalu mengapa ada berkas `png` (image) di folder itu.
Karena untuk komunikasi kepada atasan,
misalnya meminta konfirmasi,
saya lakukan dengan sederhana,
yaitu cukup dengan whatsapp saja.

Di Whatsapp ini cara berkomunikasi yang mudah,
adalah dalam bentuk gambar yaitu `png` (image).
Supaya atasan tidak perlu repot membuka berkas `pdf`,
atau repot-repot membuka berkas `excel`.

-- -- --

<a name="internal"></a>

### 3: Kebutuhan Internal

Setelah pelaporan,
jangan lupa kalau kita bekerja bukan untuk dirjen pajak.
Namun untuk perusahaan.
Maka kita perlu lakukan beberapa hal berikut

#### Template Pelaporan

> Lapor ke Atasan

Bikin template, laporan bulanan, untuk dikirim lewat e-mail,
lengkap dengan lampirannya.

Tiap jenis pajak template berbeda.
Misalnya untuk PPn secara singkat adalah:

```
(teliti) Lapor PPn, Masa Januari 2018 (pembetulan 1)

Terlampir softcopy pelaporan pajak,
yaitu PPn untuk masa Januari 2018 (pembetulan 1),
sebagai bahan pelaporan internal supaya tertib administrasi.

...

* PPn Masukan Kumulatif : Rp.  _.___.___,-
* PPn Keluaran Masa     : Rp.          0,-
* PPn Masukan Masa      : Rp.  _.___.___,-
* PPn Dibayarkan        : Rp.          0,-
* PPn Masukan Sisa      : Rp. __.___.___,-
```

Penggunaan e-mail ini karena supaya struktur lampiran tetap rapi,
bersama tata nama yang sudah kita bikin.
Ketika terkait dengan lampiran yang sudah terstruktur,
maka tidak disarankan memakai whatsapp.
Kecuali kalau atasan kita mau repot-repot melakukan unzip.

Bilamana dibutuhkan respon cepat,
maka silahkan saja melaporkan ringkasan menggunakan whatsapp.
Sementara lampiran dan pesan utama tetap di e-mail.

Yang perlu diingat, pada prakteknya, ada yang namanya pembetulan,
dan ada yang namanya terlambat lapor, maka walaupun ada template,
kita mesti luwes.

Kita akan bahas lebih rinci di artikel,
untuk masing-masing jenis pajak masa.

#### Backup

Ada beberapa backup yang biasanya dilakukan:
1. PPh 21
2. PPh 4(2)
3. eFaktur

Kebijakan backup ini,
terserah masing-masing kantor.

-- -- --

<a name="selanjutnya"></a>

## Apa Selanjutnya?

Lalu apa berikutnya dalam artikel berseri ini?

Kita akan melanjutkan dengan pengenalan mengenai jenis-jenis pajak.
Yaitu PPn, PPh 21, PPh 4(2), PPh 23.
Semua artikel berikut masih dalam tahap pengenalan.
Sedangkan rincian ada di artikel berseri terpisah.
Karena pengenalan masing-masing pajak saja,
sebetulnya sudah cukup panjang.

Mari kita lanjutkan ke artikel berikutnya yaitu:
[[Berkas Pajak - Arsip PPn][local-whats-next]].

[//]: <> ( -- -- -- links below -- -- -- )

[local-whats-next]:     /pajak/2018/03/15/berkas-pajak-ppn.html

[01-folder-sederhana]:  {% postimage %}/pajak/2018/03/01-folder-utama-sederhana.png
[01-folder-alternatif]: {% postimage %}/pajak/2018/03/01-folder-utama-alternatif.png
[02-folder-espt]:       {% postimage %}/pajak/2018/03/02-folder-espt.png
[03-folder-pajak-masa]: {% postimage %}/pajak/2018/03/03-folder-pajak-masa.png
[04-folder-masa-rinci]: {% postimage %}/pajak/2018/03/04-folder-masa-rinci.png

[05-folder-ppn]:        {% postimage %}/pajak/2018/03/05-folder-ppn.png
[06-folder-pph21]:      {% postimage %}/pajak/2018/03/06-folder-pph21.png
[07-folder-pph4(2)]:    {% postimage %}/pajak/2018/03/07-folder-pph4(2).png
[08-folder-pph23]:      {% postimage %}/pajak/2018/03/08-folder-pph23.png
[09-folder-new]:        {% postimage %}/pajak/2018/03/09-folder-new.png
