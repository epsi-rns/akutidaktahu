---
layout    : post
title     : Lembar Kerja - Tips Rumus
date      : 2018-08-17 09:17:35
slug      : lembar-kerja-formula-02
tags      : [calc]
keywords  : [spreadsheet]

toc       : "toc/lembarkerja.njk"
opengraphimage: "assets/posts/lembarkerja/2018/08/35ss-formula-terbilang.png"

excerpt   : Menetapkan rumus, angka, case, teks, tangal, terbilang, jumlah, acuan.
---

<a name="prakata"></a>

## Prakata

> Menetapkan rumus: angka, case, teks, tangal, terbilang, jumlah, dan acuan.

Ada dua hal yang sering saya pakai.
Yang pertama mencari selisih tanggal,
untuk mencari penyusutan.

Yang kedua mencari nilai terbilang,
yang saya pakai untuk invoice.

### Daftar Isi

* [Prakata](#prakata): Daftar Isi

* [Tanggal](#tanggal)

* [Terbilang](#terbilang)

* [Penutup](#penutup)

### Unduh Berkas

> Gratis nih bro!

Lembar kerja spreadsheet tersedia,
supaya teman-teman bisa copy-paste.

* [Berkas Excel: 03-formula.xlsx][source-format-xlsx]

-- -- --

<a name="tanggal"></a>

## Tanggal

Selisih tanggal ini, variasinya banyak tergantung parameter selisih yang dipakai, yang contoh prakteknya dapat langsung dilihat di bawah ini:

![Lembar Kerja: Tips Rumus: Export: Tanggal][34ex-formula-tanggal]

Parameter `d`, `m`, `y`, `md` dan `ym` ini,
juga dapat ditulis dalam referensi cell.
Jadi tidak harus ditulis di formula yaaa..

{% highlight "xlsx" %}
=DATEDIF(C5;D5;E5)
=DATEDIF(C6;D6;E6)
=DATEDIF(C7;D7;E7)
=DATEDIF(C8;D8;E8)
=DATEDIF(C9;D9;E9)
{% endhighlight %}

![Lembar Kerja: Tips Rumus: Screenshot: Tanggal][34ss-formula-tanggal]

-- -- --

<a name="terbilang"></a>

## Terbilang

Rumus terbilang bukanlah hal yang baku tersedia di Excel maupun Calc. 
Di Excel harus mengintall add-ins dahulu, silahkan di cari sendiri.
Sementara di Libreoffice Calc harus memasang extensions numbertext dahulu yaitu:

* [Number Text Extension][numbertext]

Setelah itu bikin macro secara global supaya dapat menggunakan fungsi `terbilang`.

![Lembar Kerja: Tips Rumus: Export: Macro][35ss-macro]

{% highlight "vba" %}
Function terbilang(a as double) as string
    Dim oService As Object
    Set oService = createUnoService("com.sun.star.sheet.FunctionAccess")
    terbilang = oService.callFunction("numbertext", Array(a, "id"))
end Function
{% endhighlight %}

Dengan cara ini, maka rumus `terbilang` akan compatible,
baik dibuka di Excel, maupun Calc.
Namun jangan lupa kalau di Excel tidak ada rumus `numbertext`.

![Lembar Kerja: Tips Rumus: Export: Terbilang][35ex-formula-terbil]

Contoh prakteknya adalah untuk mencari nilai rupiah:

{% highlight "xlsx" %}
NUMBERTEXT(D3)
TERBILANG(D3)
PROPER(TERBILANG(D3))&" Rupiah."
{% endhighlight %}

![Lembar Kerja: Tips Rumus: Screenshot: Terbilang][35ss-formula-terbil]

Dari masukan:

{% highlight "haskell" %}
123.456.789,12
{% endhighlight %}

Maka keluarannya adalah:

{% highlight "bash" %}
Seratus Dua Puluh Tiga Juta
Empat Ratus Lima Puluh Enam Ribu
Tujuh Ratus Delapan Puluh Sembilan
Koma Satu Dua Rupiah.
{% endhighlight %}

Saya berikan _newline_ supaya lebih mudah dibaca.


-- -- --

<a name="selanjutnya"></a>

## Apa Selanjutnya?

Lanjut baca yuk.
[[Lembar Kerja - Rumus Penjumlahan][local-whats-next]].

[//]: <> ( -- -- -- links below -- -- -- )

[local-whats-next]:     /lembarkerja/2018/08/19/lembar-kerja-formula-03.html

[numbertext]:           https://extensions.libreoffice.org/en/extensions/show/numbertext-1

[source-format-xlsx]:   {% postimage %}/lembarkerja/2018/08/03-formula.xlsx

[34ex-formula-tanggal]: {% postimage %}/lembarkerja/2018/08/34ex-formula-tanggal.png
[34ss-formula-tanggal]: {% postimage %}/lembarkerja/2018/08/34ss-formula-tanggal.png

[35ss-macro]:           {% postimage %}/lembarkerja/2018/08/35ss-macro.png
[35ex-formula-terbil]:  {% postimage %}/lembarkerja/2018/08/35ex-formula-terbilang.png
[35ss-formula-terbil]:  {% postimage %}/lembarkerja/2018/08/35ss-formula-terbilang.png
