---
layout    : post
title     : Berkas Pajak - Pengisian Web e-Faktur
date      : 2020-12-09 09:17:35
slug      : berkas-pajak-web-efaktur
tags      : [pajak]
keywords  : [arsip, web efaktur, ppn]

toc       : "toc/berkaspajak.njk"
opengraphimage: "assets/posts/pajak/2020/12/21-lamp-05-ab0.png.png"

excerpt   : Cara Pengisian Web eFaktur

---

<a name="prakata"></a>

## Prakata

> Cara Pengisian Web eFaktur

Artikel ini adalah kelanjutan dari,
artikel Web e-Faktur yang kemarin.

Pengisian Web e-Faktur,
adalah berdasarkan data yang ada di DJP.
Data di DJP ini ini sendiri adalah berdasarkan,
upload data secara manual ddi ETaxInvoice,
baik Faktur Masukan, maupun Faktur Keluaran.

Karena itu, maka beberapa data di Web e-Faktur, akan terisi sendiri.
Tergantung dari entry data yang kita masukkan di ETaxInvoice.

### Daftar Isi

* [Prakata](#prakata): Daftar Isi

* [7: Lampiran Detail](#rinci)

* [8: Lampiran AB](#ab)

* [9: Formulir Induk](#induk)

* [Apa Selanjutnya?](#selanjutnya)

### Untuk Pengarsipan

Pengarsipan PPn,
memerlukan pengetahuan mengenai isi berkas.
Karena itu perlu dijelaskan secara rinci.

Kita ambil contoh kasus,
misalnya bulan nopember 2020.

Berkas yang belum dilaporkan akan tampil sebagaimana 
data bulan nopember 2020 berikut di bawah.

![Web e-Faktur: Monitor: Open][16-mon-nop-open]

Dalam Contoh Kasus ini kita umpamakan di `ETaxInvoice` terdapat:

* Jumlah Faktur Keluaran: Rp. 0,-
* Jumlah Faktur Masukan: Rp. 2.000.000,-

-- -- --

<a name="rinci"></a>

## 7: Lampiran Detail

Buka laporan masa yang baru saja di-posting.
Maka akan ada isian PPn, yang terdiri dari tiga bagian tab:

* Lampiran Detail
* Lampiran AB
* Induk

### Formulir Pajak

Sebagaimana versi ETaxInvoice yang lama,
isian Web e-Faktur persis seperti formulir cetaknya.
Untuk mengisi laporan pajak,
mulailah dari belakang, yaitu rincian.

![Web e-Faktur: Formulir PPn][22-lamp-01-detail]

Rincian ini hanya di-isi bilmana ada berkas dokumen yang khusus.

-- -- --

<a name="ab"></a>

## 8: Lampiran AB

Beberapa data di lampiran AB akan terisi sendiri,
sesuai dengan data di ETaxInvoice yang kita masukkan.

Secara ringkas isinya adalah seperti tangkapan layar di bawah:

![Web e-Faktur: Lampiran AB][21-lamp-05-ab0]

### Rekapitulasi Penyerahan

Jumlahnya kosong,
karena faktur keluaran tidak ada.

![Web e-Faktur: Lampiran AB I][23-lamp-02-ab1]

### Rekapitulasi Perolehan

Jumlahnya sesuai nominal faktur masukan.

![Web e-Faktur: Lampiran AB II][23-lamp-03-ab2]

### Perhitungan PM yang dapat dikreditkan.

Seperti kita lihat,
isinya sangat sedikit yang dapat di-edit.
Karena dasarnya adalah data ETaxInvoice,
yang sudah di-upload ke DJP.

![Web e-Faktur: Lampiran AB III][23-lamp-04-ab3]

### Pernyataan

Khusus untuk Web e-Faktur ada pernyataan yang harus dicentang,
sebelum melakukan submit.

![Web e-Faktur: Lampiran PPn: Pernyataan][24-lamp-06-ab0]

### Submit

Untuk dapat melakukan submit,
maka dibutuhkan sertifikat digital.

![Web e-Faktur: Sertifikat Digital][25-sert-dig-req]

Bilamana sudah berhasil submit,
akan ada notifikasi sebagaimana berikut:

![Web e-Faktur: Berhasil Submit][25-sert-dig-succeed]

Dari sini, baru dapat lanjut ke tab berikutnya.

-- -- --

<a name="induk"></a>

## 9: Formulir Induk

Secara ringkas isi formulir induk adalah,
seperti tangkapan layar di bawah:

![Web e-Faktur: Induk][26-induk-00]

### Penyerahan Barang dan Jasa

Cara perhitungan di bagian ini adalah,
bagian utama yang perlu dipahami dalam menghitung PPn.
Bagian ini memegang peranan dalam pengarsipan,
yang akan kita bahas dalam satu artikel berseri tersendiri.

![Web e-Faktur: Induk I][27-induk-01]

### Penghitungan PPn Kurang/Lebih Bayar

Begitu pula bagian ini harus dikuasai perhitungannya.
Namun untuk lebih jelasnya,
akan lebih mudah melihat versi cetaknya saja.
atau lebih baik lagi, nanti kita akan membikin rekapitulasi
dalam bentuk spreadsheet.

![Web e-Faktur: Induk II][27-induk-02]

Apabila terjadi lebih bayar.
Harus jelas akan di-alokasikan ke-mana dan bulan apa.

![Web e-Faktur: Induk II][27-induk-03]

Demikian pula bila terjadi restitusi pajak.

![Web e-Faktur: Induk II][27-induk-04]

### Kelengkapan SPT

bagian-bagian lain juga penting,
namun karena jarang dipakai dapat dilewati dahulu oleh pemula.

![Web e-Faktur: Induk: Kelengkapan][28-induk-05]

### Penandatangan

Sebagaimana ETaxInvoice.
Penanggungjawab harus jelas.

![Web e-Faktur: Induk: Penandatangan][28-induk-06]

Sekian mengenai isian e-Faktur.

-- -- --

<a name="selanjutnya"></a>

## Apa Selanjutnya?

Ada lagi aplikasi yang diperbarui DJP,
yaitu e-Bupot Unifikasi yang berbasis web.
[[Berkas Pajak - e-Bupot Unifikasi][local-whats-next]].

[//]: <> ( -- -- -- links below -- -- -- )

[local-whats-next]:     /pajak/2022/06/11/berkas-pajak-unifikasi.html

[16-mon-nop-open]:      {% postimage %}/pajak/2020/12/16-mon-nop-open.png
[21-lamp-05-ab0]:       {% postimage %}/pajak/2020/12/21-lamp-05-ab0.png
[22-lamp-01-detail]:    {% postimage %}/pajak/2020/12/22-lamp-01-detail.png

[23-lamp-02-ab1]:       {% postimage %}/pajak/2020/12/23-lamp-02-ab1.png
[23-lamp-03-ab2]:       {% postimage %}/pajak/2020/12/23-lamp-03-ab2.png
[23-lamp-04-ab3]:       {% postimage %}/pajak/2020/12/23-lamp-04-ab3.png
[24-lamp-06-ab0]:       {% postimage %}/pajak/2020/12/24-lamp-06-ab0.png

[25-sert-dig-req]:      {% postimage %}/pajak/2020/12/25-sert-dig-req.png
[25-sert-dig-succeed]:  {% postimage %}/pajak/2020/12/25-sert-dig-succeed.png

[26-induk-00]:          {% postimage %}/pajak/2020/12/26-induk-00.png
[27-induk-01]:          {% postimage %}/pajak/2020/12/27-induk-01.png
[27-induk-02]:          {% postimage %}/pajak/2020/12/27-induk-02.png
[27-induk-03]:          {% postimage %}/pajak/2020/12/27-induk-03.png
[27-induk-04]:          {% postimage %}/pajak/2020/12/27-induk-04.png
[28-induk-05]:          {% postimage %}/pajak/2020/12/28-induk-05.png
[28-induk-06]:          {% postimage %}/pajak/2020/12/28-induk-06.png

