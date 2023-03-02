---
layout    : post
title     : Lembar Kerja - Pengantar
date      : 2018-06-01 09:17:35
slug      : lembar-kerja-pengantar
tags      : [calc]
keywords  : [spreadsheet]

toc       : "toc/lembarkerja.njk"
opengraphimage: "assets/posts/lembarkerja/2018/06/07-calc-kumplit.png"

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

_Baru tau kalau bodoh yaaaa.. wkwkwk_

Sebagaimana kita sering tidak sadar,
kalau mental kita masih negara berkembang.
Tetiba saya paham kalau kemampuan saya masih terbelakang.
Karena itu saya niatkan untuk membuat artikel berseri,
supaya hasil kerja saya matang.

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

* [Ucapan Terimakasih](#haturnuhun)

* [Penutup](#penutup)

### Office Suite

Berkas yang menjadi contoh dapat diunduh dengan format `.xlsx`,
supaya mudah dibuka pembaca di Microsoft Excel.
Sementara penggunaanya saya tampilkan dengan LibreOffice Calc.

![Lembar Kerja: Tampilan: LibreOffice Calc][07-calc-kumplit]

### Artikel Berseri

Berikut materi yang saya niatkan untuk ditulis di artikel berseri ini.

1. Number Format
   * angka, tanggal, NPWP, rupiah

2. Format:
   * Unit, ukuran, group, warna, border

3. Formula (Rumus):
   * if/switch, index, h/v/xlookup, pivot, terbilang

4. Form:
   * Tabel, column width, row height, merged cells, thin lines, smooth coloring, small logo

5. Communication:
   * Print, Export to PDF, Copy to whatsapp, export to PNG

6. Report:
   * Tab Color, Tab Naming, Group, Template, Foldering, Highlight, Symbol

7. Automation
   * Python Macro

Hmmm... Agak aneh ya silabusnya?
Memang, karena ini panduan di dunia nyata,
bukan textbook cara pemakaian.

### Berbagi

Salah satu alasan menulis adalah
saya sering lupa, padahal saya bolak-balik salah,
makanya saya tulis saja deh, supaya tidak tercecer.
Biasanya yang pernah saya lewati dalam pekerjaan sehari-hari,
karana kalau belum pernah saya jelajahi,
lalu saya tulis, rasanya kurang tulus.
Dan kurang jujur juga.

Bagi teman-teman yang bukan admin,
sesekali turunlah ke bawah supaya dapat _feel_-nya.
Krean yang dirasakan admin,
lebih dalam dari yang sekedar dikerjakan admin.

### Alasan Sebenarnya

> Mengapa harus saya tulis?

Saya menulis supaya saya dapat mengerjakan hal lain.
Ketika harus mendelegasikan segala sesuatunya,
biarkan saja orang lain membaca panduan cara kerja,
yang sudah pernah saya lewati.
Selanjutnya biarkan orang lain ber-improvisasi sendiri.

### Salah Kaprah

Artikel ini bercerita opini mengenai _worksheet_,
yang saya terjemahkan menjadi **lembar kerja**.

Artikel ini sama sekali tidak berhubungan dengan **lembur kerja**.

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

<a name="haturnuhun"></a>

## Ucapan Terimakasih

### Pertanyaan di Social Media

> Makasi kakaaaaa

Artikel ini dibikin untuk menjawab pertanyaan2,
dari teman2 saya di social media.

Tanpa kalian, hati saya tidak pernah tergerak,
untuk membikin artikel yang berguna.
Karena saya jadi tahu,
seseorang di luar sama mungkin membutuhkannya.

Boro-boro siklus akunting mah,
saya sebetulnya tidak mampu membuat
tampilan cantique, menarique plus unique. Susah atuh.
Namun karena kebutuhan kalian,
saya jadi bisa membikin satu template,
yang dapat dipakai oleh beberapa perusahaan sekaligus.

_sebagaimana teman2 bertanya mengenai coding_
_saya jadi punya tujuan hidup_

### Inspiring People

> Haturnuhun Teteh

Terimakasih juga kepada video2 dari `Voice of Baceprot`,
yang lagunya menemani di saat-saat paling berat.

Membikin artikel berseri semacam ini membutuhkan kerja keras.
Lagu kalian betul-betul menghilangkan rasa kantuk,
sehingga artikel berseri ini dapat dirampungkan.

Semangat kalian, mengilhami untuk tidak berleha-leha,
saat orang lain terlelap.

-- -- --

<a name="selanjutnya"></a>

## Apa Selanjutnya?

Makan bubur mulai dari pinggirnya.
Kita mulai dari yang mudah dulu ya kawan.

Format, Formula, Formulir, semuanya huruf F.

[[Lembar Kerja - Tata Angka][local-whats-next]].

[//]: <> ( -- -- -- links below -- -- -- )

[local-whats-next]:     /lembarkerja/2018/06/03/lembar-kerja-number-01.html

[01-calc-ui-standard]:  {% postimage %}/lembarkerja/2018/06/01-calc-ui-standard.png
[02-calc-ui-preferred]: {% postimage %}/lembarkerja/2018/06/02-calc-ui-preferred.png
[03-calc-ui-tabbed]:    {% postimage %}/lembarkerja/2018/06/03-calc-ui-tabbed.png
[04-calc-tab-grad]:     {% postimage %}/lembarkerja/2018/06/04-calc-tab-grad.png
[05-calc-tab-flipflop]: {% postimage %}/lembarkerja/2018/06/05-calc-tab-flipflop.png
[06-calc-neraca]:       {% postimage %}/lembarkerja/2018/06/06-calc-neraca.png
[07-calc-kumplit]:      {% postimage %}/lembarkerja/2018/06/07-calc-kumplit.png

[08-calc-general]:      {% postimage %}/lembarkerja/2018/06/08-calc-general.png
[08-calc-metrics]:      {% postimage %}/lembarkerja/2018/06/08-calc-general-metrics.png
[09-language]:          {% postimage %}/lembarkerja/2018/06/09-language.png
