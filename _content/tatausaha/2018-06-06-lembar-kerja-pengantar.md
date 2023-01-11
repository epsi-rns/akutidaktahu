---
layout    : post
title     : Lembar Kerja - Pengantar
date      : 2018-06-06 09:17:35
slug      : lembar-kerja-pengantar
tags      : [calc]
keywords  : [spreadsheet]

toc       : "toc/tatausaha.njk"
opengraphimage: "assets/posts/tatausaha/2018/06/07-calc-kumplit.png"



excerpt   : Memulai bekerja dengan spreadsheet.
---

<a name="prakata"></a>

## Prakata

> Memulai bekerja dengan spreadsheet.

Bertahun yang lalu,
saya sudah memakai spreadsheet,
baik Excel maupun Calc.
Namun saya baru sadar kalau,
saya tidak pernah optimal menggunakannya.
Karena itu saya niatkan untuk membuat artikel berseri.

Topik yang terkait spreadsheet ini sangat luas.
Karena itu saya batasi kepada hal-hal dasar,
dengan target pembaca admin dari perusahaan.
Tidak semata-mata teknis cara pemakaian,
namun lebih ke apa yang dihadapi saat bekerja di dunia nyata.

Ruang lingkup yang akan saya tuliskan adalah:
Format, Formula, Formulir, Komunikasi, Report, dan Macro.

### Daftar Isi

* [Prakata](#prakata): Daftar Isi

* [LibreOffice Calc](#lo-calc)

* [Penutup](#penutup)

### Office Suite

Berkas yang menjadi contoh dapat diunduh dengan format `.xlsx`,
supaya mudah dibuka pembaca di Microsoft Excel.
Sementara penggunaanya saya tampilkan dengan LibreOffice Calc.

![Lembar Kerja: Tampilan: LibreOffice Calc][07-calc-kumplit]

### Artikel Berseri

Berikut materi yang saya niatkan untuk ditulis di artikel berseri ini.

1. Format:
   * Unit, Numbering, date, number colon, npwp, rupiah, material color.

2. Formula (Rumus):
   * if/switch, index, h/v/xlookup, pivot, terbilang

3. Form:
   * Tabel, column width, row height, merged cells, thin lines, smooth coloring, small logo

4. Communication:
   * Print, Export to PDF, Copy to whatsapp, export to PNG

5. Report:
   * Tab Color, Tab Naming, Group, Template, Foldering, Highlight, Symbol

6. Automation
   * Python Macro

Hmmm... Agak aneh ya silabusnya?
Memang, karena ini panduan di dunia nyata,
bukan textbook cara pemakaian.

-- -- --

<a name="lo-calc"></a>

## LibreOffice Calc

Walaupun panduannya dengan LibreOffice Calc,
namun berkas yang sama dapat dibuka dengan baik di Microsoft Excel.

Mari kita mulai dengan pengenalan tampilan.

### User Interface: Standard

Tampilan LibreOffice Calc berbeda dengan Excel.
Lebih sederhana, namun lebih cocok untuk keperluan saya.

![Lembar Kerja: Tampilan: Standard UI][01-calc-ui-standard]

### User Interface: Tabbed

LibreOffice memberi beberapa pilihan tampilan.

![Lembar Kerja: Tampilan: Preferred UI][02-calc-ui-preferred]

Di antaranya adalah Ribbon(Tabbed):

![Lembar Kerja: Tampilan: Tabbed UI][03-calc-ui-tabbed]

### Contoh Laporan

Berikut contoh hasil akhir dari siklus akuntansi yang siap dicetak.

![Lembar Kerja: Tampilan: Neraca][06-calc-neraca]

Sama saja seperti Excel bukan?

### Sheet Tab

Penggunaan warna pada sheet tab, lebih menarik,
misalnya untuk laporan bulanan ini (balance sheet),
dan (profit loss):

![Lembar Kerja: Tampilan: Tab Flip Flop][05-calc-tab-flipflop]

Dan ini tampilan bulanan

![Lembar Kerja: Tampilan: Tab Gradient][04-calc-tab-grad]

Begitulah kira-kira, ada perbedaan tampilan,
antara Microsoft Office dan LibreOffice Calc.

### Unit Metrik

Ada hal khusus, yang dapat berbeda antara satu user dengan lainnya.
Yaitu pilihan Options, misalnya tentang unit metrik yang dipakai.

![Lembar Kerja: Option: General][08-calc-general]

Biasanya saya mengatur unit,
menjadi centimeter di tiap komputer yang saya pakai.
Pengaturan unit ini perlu untuk menjaga konsistensi,
baik tampilan di lembar kerja, maupun hasil cetaknya nanti.

![Lembar Kerja: Option: Unit Metrik][08-calc-metrics]

### Locale

Kemudian, pengaturan bahasa juga berpengaruh.
Saya biasanya langsung mengatur supaya memakai bahasa Indonesia.

![Lembar Kerja: Option: Locale Language][09-language]

Lanjut yuuuks.

-- -- --

<a name="selanjutnya"></a>

## Apa Selanjutnya?

[[Inkscape - Mengenal Inkscape][local-whats-next]].

[//]: <> ( -- -- -- links below -- -- -- )

[local-whats-next]:     /tatausaha/2022/05/09/mengenal-inkscape.html

[01-calc-ui-standard]:  {% postimage %}/tatausaha/2018/06/01-calc-ui-standard.png
[02-calc-ui-preferred]: {% postimage %}/tatausaha/2018/06/02-calc-ui-preferred.png
[03-calc-ui-tabbed]:    {% postimage %}/tatausaha/2018/06/03-calc-ui-tabbed.png
[04-calc-tab-grad]:     {% postimage %}/tatausaha/2018/06/04-calc-tab-grad.png
[05-calc-tab-flipflop]: {% postimage %}/tatausaha/2018/06/05-calc-tab-flipflop.png
[06-calc-neraca]:       {% postimage %}/tatausaha/2018/06/06-calc-neraca.png
[07-calc-kumplit]:      {% postimage %}/tatausaha/2018/06/07-calc-kumplit.png

[08-calc-general]:      {% postimage %}/tatausaha/2018/06/08-calc-general.png
[08-calc-metrics]:      {% postimage %}/tatausaha/2018/06/08-calc-general-metrics.png
[09-language]:          {% postimage %}/tatausaha/2018/06/09-language.png
