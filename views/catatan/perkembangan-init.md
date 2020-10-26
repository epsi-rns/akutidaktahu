---
layout    : post
title     : Perkembangan Init
date      : 2020-10-26 09:17:35
slug      : init
tags      : [catatan]
keywords  : [opini, "sistem operasi"]

toc       : "toc/pesan-tersemat.njk"
opengraphimage: "assets/images/topics/card-telegram.png"
---

Bahas sejarah satu satu yacc. cmiiw cwie mie teman2 semua.
Ini sekedar tulisan kasar (draft), untuk bahan diskusi supaya group ramai.

<!-- more -->

> Perkembangan Init Dari Waktu Ke Waktu.

![Init Apa Dipakai Apa][init-who-use-what]

### sysvinit sudah usang

Sepertinya kebanyakan pengembang distro sepakat,
kalau `sysvinit` sudah usang dan mesti diganti,
maka dibuat beberapa pengganti,
salah satunya `upstart` yang dibikin `ubuntu`,
dan kemudian `lennart` juga bikin `systemd` di fedora.

Aku pribadi merasa perlu dikurangi penggunaan script di `init`,
yang bikin `sysvinit` jadi penuh dengan bash.
Di sini `systemd` memang bagus.

### systemd sebagai administrating subsystem

`systemd` ini secara konsep memang mau dibikin menyaingi kemampuan windows,
yang dapat meng-`admin`-istrasi suatu server,
mematikan dari jauh, menyalakan dari jauh, dan sebagainya.
Pengembangan ini adalah hal bagus, walaupun ada semacam `trade off`,
misalnya di bidang `security`.

Gagasan ini salah satu sebabnya `systemd`,
berusaha menjadi lebih dari sekedar init,
namun menjadi satu rangkaian sistem sendiri.
Hal ini akan sangat memudahkan sysadmin dalam bekerja.
Karena itulah dibikin `systemd umbrella`,
dengan `re-invent` hal-hal baru supaya sesuai dengan tujuan ini.

### Adopsi oleh gnome

Berikutnya `systemd` dengan adanya `logind`,
dan beberapa hal lain diadopsi oleh `gnome`,
ini yang menyebabkan `gnome` terikat dengan satu `init` tertentu.
Ini bukan salah pengembang `systemd`.

Pengembang `gnome` sendiri terkadang suka jalan sendiri,
misalnya tidak mau ikut standar `freedesktop`.

Masalah dari ikatan `systemd+gnome` di saat itu,
adalah kalau tidak memakai ini, maka gnome tidak jalan.
Artinya suatu distro tidak diberi pilihan,
kecuali harus memakai `systemd`.
Kalaupun memakai ini lain,
maka tetap harus memakai `libsystemd0`.
Ini yang **mematikan** init yang lain.

### Default init di distro

Adanya keterikatan `systemd` dengan `gnome` ini,
yang saat itu menyebabkan `debian` harus memilih.
Dan saat vote akhirnya dipilihlah systemd sebagai `default init`.

Bukan salah Debian juga,
karena ada beberapa project yang tidak setuju dengan systemd,
seperti Debian/kfreeBSD **kekurangan relawan developer** yang aktif.

Debian sebagai distro yang punya pangsa besar,
saat itu memakai `systemd` sebagai default init,
maka turunan Debian juga mengikuti,
bahkan ubuntu melepas `upstart` dan mengganti dengan `systemd`.

Saat itu juga masih belum banyak alternatif,
untuk mem-porting keterikatan `systemd+gnome`,
sehingga Arch linux yang memiliki pangsa besar juga memakai `systemd`.
Jangan tanya `openSUSE` dan `Fedora` di kelas **enterprise**,
yang tentunya akan memilih `systemd`.
Saat itu, bisa dibilang hanya distro2 minimalis yaitu:
Void Linux, Gentoo, LFS dan Slackware,
yang masih menyediakan init lain,
misalnya `sysvinit`, `OpenRC` dan `runit`.

😳

### Pengembang init alternatif

Di sisi lain, gerakan dari `anti-systemd`,
juga tidak memiliki langkah yang bagus,
kebanyakan hanya berisi orang2 yang mengomel,
dan tidak melakukan kontribusi yang cukup.

Selama beberapa tahun devuan `tetap` memakai `libsystemd0`,
walaupun sudah tidak memakai `systemd` lagi.
Padahal bersih dari `systemd` sudah dilakukan di distribusi lain,
misalnya Gentoo yang tetap lancar jaya menjalankan `gnome`.
Komunikasi antar distro ini tidak dilakukan dengan baik.

Syukurlah ada beberapa port yang bagus,
dari `artoo` untuk membuat `manjaro+openrc`,
yang kemudian berkembang menjadi distro sendiri bernama `artix`,
yang bisa memilih beberapa init,
misalnya saja `s6`, `OpenRC` dan `runit`. Disusul `obarun`.

Sebelumnya ada `Void Linux`,
yang memakai `runit` yang dibikin oleh orang BSD.
Tadinya `Void Linux` ini kurang bagus,
namun mejadi distro yang keren,
setelah diambil pengelolaannya oleh komunitas.

😁

### Lalu bagaimana?

Saya percaya perlunya keberagaman tanpa mematikan yang lain.
Kalau `Fedora` mau membikin distro enterprise,
yang memudahkan sysadmin dengan tier `systemd+gnome`,
itu hal bagus yang perlu didukung,
karena kita butuh keberagaman.

Demikian distro lain perlu diberi kebebasan,
untuk menggunakan init yang berupa `init murni`,
dan bukan init beserta rangkaian dependency yang panjang.

Pengguna biasa yang tidak memerlukan pengaturan sysadmin yang khusus,
mestinya cukup dengan gaya linux yang `modular`.
Berbagai init yang murni, perlu didukung pengembangannya.
Dan dijamin keberadaannya.

### Penutup.

Jangan sekedar menjadi `distro hopper`, sesekali `jadilah init hopper`, supaya tahu bedanya.

Sekian.

[//]: <> ( -- -- -- links below -- -- -- )

[init-who-use-what]:{% postimage %}/catatan/2020/diversity-init-who-use-what.png
