---
layout    : post
title     : Berkas Pajak - e-Nofa
date      : 2019-05-01 09:17:35
slug      : berkas-pajak-enofa
tags      : [pajak]
keywords  : [arsip, enofa]

toc       : "toc/berkaspajak.njk"
opengraphimage: "assets/posts/pajak/2018/03/07-pdf-ns-faktur.png"

excerpt   : Mempersiapkan Faktur Pajak dengan e-Nofa

---

<a name="prakata"></a>

## Prakata

> Mempersiapkan Faktur Pajak dengan e-Nofa

Di era eFaktur seperti sekarang kita perlu mempersiapkan dua hal.

1. Sertifikat Elektronik
2. Nomor Seri Faktur Pajak (NSFP)

Kita mesti _well prepared_ mengenai hal ini.
Atau siap-siap saja tidak dapat melakukan transaksi,
apda saat sudah ada proyek.

Kedua hal tersebut harus dilakukan secara online,
melalui situs e-Nofa (nomor faktur).

### Daftar Isi

* [Prakata](#prakata): Daftar Isi

* [1: Login dan Menu](#menu)

* [2: Sertifikat Elektronik](#sertel)

* [3: Nomor Seri Faktur Pajak](#nsfp)

* [Apa Selanjutnya?](#selanjutnya)

-- -- --

<a name="menu"></a>

## 1: Login dan Menu

Untuk mengurus e-Nofa,
harus mengajukan pengajuan ke kantor pajak.

Untuk mengakses e-Nofa,
juga dibutuhkan sertifikat elektronik,
karena itu harus mengurus e-Fin
terlebih dahulu juga ke kantor pajak.

### Alamat URL Situs

* [efaktur.pajak.go.id](https://efaktur.pajak.go.id)

### Login

Setelah diberikan password maka kita dapat login

![e-Nofa: Login][01-e-nofa-login]

### Layanan Menu

Ada beberapa layanan di e-Nofa,
termasuk pemeriksaan faktur dari lawan transaksi.

![e-Nofa: Menu][02-e-nofa-menu]

-- -- --

<a name="sertel"></a>

## 2: Sertifikat Elektronik

Sertifikat Digital yang dipakai oleh DJP berekstensi p12.
Kita tidak perlu tahu secara rinci, yang penting dapat dipakai.

![Sertifikat Elektronik: Menu][08-cert-p12]

Kita perlu berulang kali menggunakan berkas ini.
Maka tempatkanlah di tempat yang baik.

Setiap kali digunakan, kita juga harus mengetik password yang tepat.

### PKCS #12

> Khusus kutu buku.

Bagi kutu komputer yang kepo,
Ekstensi `p12` berarti PKCS # 12
(Public Key Cryptography Standard # 12).

Kita dapat melihat isinya di `bash`.

{% highlight "bash" %}
$ openssl pkcs12 -info -in 081443518011000.p12 -passin pass:${password}
MAC: sha1, Iteration 1024
MAC length: 20, salt length: 20
PKCS7 Data
Shrouded Keybag: pbeWithSHA1And3-KeyTripleDES-CBC, Iteration 1024
Bag Attributes
    friendlyName: pt. teliti telaten tekun-201912290027-081443518011000
    localKeyID: 54 19 1D 15 20 71 76 74 70 78 73 73 71 77 75 71 76 79 
Key Attributes: <No Attributes>
{% endhighlight %}

Silahkan lewati bagian barusan.
Memang tidak penting bagi admin kantor ya.

### Memasang Sertifikat di Browser

Tiap browser punya tempat pengaturan berbeda.
Berikut pengaturan di firefox:

![Sertifikat Elektronik: Pengaturan di Firefox][09-cert-firefox]

Rincian juga dapat dilihat di firefox:

![Sertifikat Elektronik: Rincian di Firefox][09-cert-detail]

### Masa Berlaku

Sertifikat Elektronik memiliki masa daluarsa.
Karena itu kita harus membuat sertifikat baru,
ketika habis masa berlakunya.

### Memeriksa Sertifikat Elektronik

Situs e-Nofa juga menyediakan fasilitas,
untuk memeriksa sertifikat elektronik perusahaan.

![Sertifikat Elektronik: Periksa][04-e-nofa-sertel]

-- -- --

<a name="nsfp"></a>

## 3: Nomor Seri Faktur Pajak

### NSFP yang sudah diminta

Kita dapat memeriksa NSFP yang sudah pernah diminta oleh perusahaan.

![NSFP: Periksa][03-e-nofa-nsfp-n]

### Permohonan NSFP

Permohonan NSFP dilakukan melalui e-Nofa.

![NSFP: Permohonan][05-e-nofa-permohonan]

### Permohonan NSFP

Setelah permohonan dikabulkan.
Maka kita dapat langsung mengunduh,
berkas PDF yang diberi password (kata sandi).
Berkas PDF ini kira2 berisi berkas seperti di bawah:

![NSFP: Permohonan][07-pdf-ns-faktur]

Untuk kerahasiaan.
Maka nomor faktur yang asli saya samarkan.

-- -- --

<a name="selanjutnya"></a>

## Apa Selanjutnya?

Sekarang kita sudah siap dengan nomor faktur.
Maka kita akan lanjut ke pengisian aplikasi efaktur:
[[Berkas Pajak - e-Faktur][local-whats-next]].

[//]: <> ( -- -- -- links below -- -- -- )

[local-whats-next]:     /pajak/2019/05/03/berkas-pajak-efaktur.html

[01-e-nofa-login]:      {% postimage %}/pajak/2019/05/01-e-nofa-login.png
[02-e-nofa-menu]:       {% postimage %}/pajak/2019/05/02-e-nofa-menu.png
[03-e-nofa-nsfp]:       {% postimage %}/pajak/2019/05/03-e-nofa-nsfp.png
[03-e-nofa-nsfp-n]:     {% postimage %}/pajak/2019/05/03-e-nofa-nsfp-narrow.png

[05-e-nofa-permohonan]: {% postimage %}/pajak/2019/05/05-e-nofa-permohonan.png
[07-doc-ns-faktur]:     {% postimage %}/pajak/2019/05/07-doc-ns-faktur.png
[07-pdf-ns-faktur]:     {% postimage %}/pajak/2019/05/07-pdf-ns-faktur.png

[08-cert-p12]:          {% postimage %}/pajak/2019/05/08-certificate-p12.png
[09-cert-firefox]:      {% postimage %}/pajak/2019/05/09-certificate-firefox.png
[09-cert-detail]:       {% postimage %}/pajak/2019/05/09-certificate-detail.png
[04-e-nofa-sertel]:     {% postimage %}/pajak/2019/05/04-e-nofa-sertel.png
