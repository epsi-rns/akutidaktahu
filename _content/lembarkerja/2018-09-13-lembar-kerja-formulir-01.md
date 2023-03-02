---
layout    : post
title     : Lembar Kerja - Rancang Form
date      : 2018-09-13 09:17:35
slug      : lembar-kerja-form-01
tags      : [calc]
keywords  : [spreadsheet]

toc       : "toc/lembarkerja.njk"
opengraphimage: "assets/posts/lembarkerja/2018/09/44-tabel-export.png"

excerpt   : Mengelola laporan tabel panjang dengan tampilan form.
---

<a name="prakata"></a>

## Prakata

> Mengelola laporan tabel panjang dengan tampilan form.

### Kendala Tabel Panjang

Seringkali dalam proses administrasi,
kita berhadapan dengan tabel panjang.
Ini tidak mejadi masalah,
ketika tidak perlu ada laporan.

Kebutuhan pelaporan biasanya di kertas A4,
atau kalau mau online bisa lewat whatsapp dengan PDF.
Lewat PDF inipun mesti memakai ukuran standar juga.
Kalau di sebrang sana PDF harus dicetak,
maka sebaiknya muat di ukuran A4 juga.

### Solusi Tabel Panjang

Ada beberapa metode untuk melaporkan tabel panjang.

1. Diperkecil (scaling).
   Dicetak saja apa adanya,
   sampai hurufnya tidak kelihatan saat dibaca.

2. Diringkas.
   Ambil seperlunya.
   Biasanya cara ini yang saya pakai.

3. Manual Transpose.
   Saya juga memiliki beberapa report baku seperti ini.
   Misalnya laporan penyusutan,
   dan juga laporan jurnal.

4. Form.
   Yaitu tranformasi tabel secara manual.
   Ini sebetulnya jarang.
   Namun ketika tidak terhindarkan,
   maka saya harus pelajari betul,
   cara yang tepat menyampaikan pelaporannya.

Kita akan bahas dengan form,
lalu transpose di artikel lainnya.
Kita mulai dengan contoh kasus faktur pajak.
Karena tabel berbentuk form ini,
sering saya gunakan untuk hal yang terkait pajak,
di mana saat mealporkan,
saya tidak ingin menghilangkan rincian detailnya.

_ini bukan artikel pajak atau akuntansi_

Saya akan membahas akuntansi di artikel berseri tersendiri.

### Daftar Isi

* [Prakata](#prakata): Daftar Isi

* [Tabel Panjang](#mentah)

* [Ringkas](#ringkas)

* [Hasil](#Hasil)

* [Mengisi Form](#otomasi)

* [Penutup](#penutup)

### Unduh Berkas

> Siap kerja, supaya lancar, berkinerja.

Lembar kerja spreadsheet tersedia,
supaya teman-teman bisa copy-paste.

* [Berkas Excel: 05-faktur.xlsx][source-format-xlsx]

-- -- --

<a name="mentah"></a>

## Tabel Panjang

Kita lihat contohnya,
yaitu data mentah pajak,
yang diambil dari ETaxInvoice.

![Lembar Kerja: Faktur: Mentah][51ss-faktur-mentah]

Sekilas saja, kita dapat membayangkan,
betapa sulitnya membaca laporan ini di layar monitor yang kecil.

-- -- --

<a name="ringkas"></a>

## Ringkas

Cara jitu yang saya lakukan, adalah tidak menampilkan semua datanya.
Misalnya dalam contoh di bawah.

![Lembar Kerja: Faktur: Ringkas][52ex-faktur-ringkas]

Untuk dapat menampilkan dat di atas-pun,
ternyata saya harus melakukan penyesuaian _scaling_.

![Lembar Kerja: Faktur: Dialog][52ss-dialog-ringkas]

Supaya tetap sinkron datanya, secara opsional,
tetaplah masukkan nilai dalam bentuk fromula,
yang merupakan referensi alamat nilai asalnya.

![Lembar Kerja: Faktur: Ringkas][52ss-faktur-ringkas]

Sebetulnya untuk faktur pajak yang nilainya
sudah tetap tidak perlu memakai formula.

-- -- --

<a name="kosong"></a>

## Kosong

Cara lain adalah dengan menggunakan form.
Kita mulai dari membuat model form-nya.
Ini tidak mudah, karena saya harus berulang kali membuat model.
Contohnya dalam faktur ini, yang keempat baru cocok.

![Lembar Kerja: Faktur: Kosong][53ss-faktur-kosong]

-- -- --

<a name="hasil"></a>

## Hasil

> Test duluu

Uji cobakan untuk beberapa data sekaligus.
Dalam hal faktur ini, ternyata dalam satu A4,
bisa masuk lima tabel form dari faktur.

![Lembar Kerja: Faktur: Hasil][54ss-faktur-hasil]

Hasil akhirnya, seperti ini.
Dapat diolah sendiri lebih lanjut.

![Lembar Kerja: Faktur: Hasil][54ex-faktur-hasil]

Dapat di-export ke PDF, atau berkas PNG,
lalu langsung dikirim lewat whatsapp.

Atau cetak, dan masukkan di ordner,
sebagai bagian dari pembukuan berkas pajak.

-- -- --

<a name="otomasi"></a>

## Mengisi Form

Lalu bagaimana kalau datanya sudah banyak,
khan repot memindahkan satu per satu?

Memindahkan data yang banyak ini,
dapat memakai script atau makro,
yang saya tuliskan di artikel saya yang lain:

* [LibreOffice Macro - Transform Field][transform-field]
* [openpyxl - Transform Field][translate-field]

[transform-field]: https://epsi.bitbucket.io/automation/2022/09/23/python-libreoffice-transform-field/
[translate-field]: https://epsi.bitbucket.io/automation/2022/09/13/python-excel-translate-field/

-- -- --

<a name="selanjutnya"></a>

## Apa Selanjutnya?

Masih form cantique.
Lanjut yoook, kita lohat contoh2 penerapan yang lain.

[[Lembar Kerja - Contoh Form][local-whats-next]].

[//]: <> ( -- -- -- links below -- -- -- )

[local-whats-next]:     /lembarkerja/2018/09/15/lembar-kerja-form-02.html

[source-format-xlsx]:   {% postimage %}/lembarkerja/2018/09/05-faktur.xlsx

[51ex-faktur-mentah]:   {% postimage %}/lembarkerja/2018/09/51ex-faktur-mentah.png
[51ss-faktur-mentah]:   {% postimage %}/lembarkerja/2018/09/51ss-faktur-mentah.png
[52ex-faktur-ringkas]:  {% postimage %}/lembarkerja/2018/09/52ex-faktur-ringkas.png
[52ss-dialog-ringkas]:  {% postimage %}/lembarkerja/2018/09/52ss-dialog-ringkas.png
[52ss-faktur-ringkas]:  {% postimage %}/lembarkerja/2018/09/52ss-faktur-ringkas.png
[53ex-faktur-kosong]:   {% postimage %}/lembarkerja/2018/09/53ex-faktur-kosong.png
[53ss-faktur-kosong]:   {% postimage %}/lembarkerja/2018/09/53ss-faktur-kosong.png
[54ex-faktur-hasil]:    {% postimage %}/lembarkerja/2018/09/54ex-faktur-hasil.png
[54ss-faktur-hasil]:    {% postimage %}/lembarkerja/2018/09/54ss-faktur-hasil.png
