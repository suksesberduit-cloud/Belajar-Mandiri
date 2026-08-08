window.CONTENT_FISIKA = {
  key: 'fisika',
  label: 'Fisika',
  icon: '⚛',
  eyebrow: 'Divisi Riset — Gerak & Gaya',
  desc: 'Fisika lahir dari orang-orang yang mengamati benda jatuh, benda bergerak, dan bertanya "kenapa begini?" sampai akhirnya pola itu bisa ditulis dalam angka. Kamu akan mengulang proses pengamatan itu, bukan cuma menghafal hasilnya.',
  babs: [
    {
      id:'hakikat-fisika',
      title:'Hakikat Fisika dan Metode Ilmiah',
      meta:'Kasus 01 · 3 investigasi',
      unlocked:true,
      subbabs:[
        {
          id:'fisika-sebagai-ilmu',
          title:'Fisika sebagai Ilmu: Fenomena, Bukan Sekadar Rumus',
          mengamati:'Pelangi muncul setelah hujan, bayangan berubah panjang sepanjang hari, benda jatuh selalu ke bawah — fenomena yang akrab, tapi manusia purba menjelaskannya lewat mitos, bukan pengukuran.',
          kenapa:'Fisika lahir dari keputusan untuk menjelaskan fenomena alam lewat <strong>pengamatan & pengukuran yang bisa diverifikasi ulang</strong> oleh siapa pun, bukan cerita yang diwariskan turun-temurun tanpa bukti.',
          menelaah:{ text:'Ciri yang membedakan fisika dari sekadar dugaan:', points:['Fisika mempelajari materi, energi, dan interaksinya lewat besaran yang bisa diukur.', 'Setiap klaim fisika harus bisa diuji lewat eksperimen yang bisa DIULANG (reproducible) — kalau hasil orang lain berbeda pada kondisi sama, klaim itu diragukan.', 'Cabang fisika (mekanika, termodinamika, listrik-magnet, optik) muncul karena fenomena alam dikelompokkan berdasarkan jenis interaksi yang dipelajari.'] },
          rumus:{ formula:'Klaim ilmiah = dugaan + bukti yang bisa diuji ulang', note:'Ini bukan rumus hitung, tapi prinsip dasar yang membedakan sains dari kepercayaan.' },
          duniaNyata:[
            { title:'GPS bergantung pada relativitas', text:'Akurasi posisi GPS memperhitungkan efek relativitas Einstein yang teruji lewat eksperimen berulang.' },
            { title:'CT scan & terapi kanker', text:'Kedokteran memakai fisika radiasi yang sudah diuji ketat sebelum dipakai pada pasien.' }
          ],
          kasus:{ soal:'Seseorang percaya "kalung magnet menyembuhkan penyakit" karena testimoni temannya. Bagaimana cara fisika menguji klaim ini secara ilmiah?', steps:['Rancang eksperimen dengan kelompok kontrol — sebagian pakai kalung magnet asli, sebagian kalung biasa, tanpa tahu mana yang asli (blind test).', 'Ukur hasil kesehatan kedua kelompok secara objektif, bukan perasaan subjektif.', 'Bandingkan hasilnya — kalau tak ada beda signifikan, klaim itu tak terbukti secara ilmiah.'], jawaban:'Klaim harus diuji lewat <strong>eksperimen terkontrol & reproducible</strong>, bukan diterima karena testimoni personal semata.' },
          ujiNalar:{ soal:'Kenapa fisika mengharuskan eksperimen bisa DIULANG oleh orang lain dengan hasil serupa?', options:['Supaya terlihat lebih ilmiah', 'Untuk memastikan hasil bukan kebetulan/bias satu orang, dan klaim bisa dipercaya secara objektif', 'Karena aturan sekolah mengharuskannya', 'Supaya penelitian menjadi lebih mahal'], correctIndex:1, explanation:'Reproducibility memastikan hasil bukan <strong>kebetulan atau bias</strong> — kalau siapa pun yang mengulang eksperimen dengan kondisi sama mendapat hasil serupa, klaim itu bisa dipercaya secara objektif.' }
        },
        {
          id:'metode-ilmiah',
          title:'Metode Ilmiah: Dari Rasa Ingin Tahu ke Kesimpulan',
          mengamati:'Seorang petani menyadari tanamannya di sisi barat kebun tumbuh lebih subur daripada sisi timur. Ia penasaran kenapa — tapi rasa penasaran saja tak menghasilkan jawaban pasti.',
          kenapa:'Metode ilmiah diciptakan sebagai prosedur baku untuk mengubah rasa ingin tahu jadi pengetahuan yang teruji, memaksa orang untuk tidak langsung percaya dugaan pertamanya sebelum diuji.',
          menelaah:{ text:'Alur baku metode ilmiah:', points:['<strong>Observasi</strong>: mengamati fenomena secara detail.', '<strong>Hipotesis</strong>: dugaan sementara yang BISA DIUJI (misal "sisi barat lebih subur karena dapat lebih banyak sinar matahari sore").', '<strong>Eksperimen</strong>: menguji hipotesis dengan mengendalikan variabel lain agar adil.', '<strong>Kesimpulan</strong>: menerima/menolak hipotesis berdasar bukti, bukan berdasar keinginan awal.'] },
          rumus:{ formula:'Observasi → Hipotesis → Eksperimen → Analisis → Kesimpulan', note:'Urutan ini memastikan kesimpulan berasal dari bukti, bukan dugaan yang dipertahankan mati-matian.' },
          duniaNyata:[
            { title:'Uji klinis vaksin bertahap', text:'Pengembangan vaksin melalui fase 1, 2, 3 adalah penerapan metode ilmiah yang ketat.' },
            { title:'Investigasi kecelakaan pesawat', text:'Penyebab sebenarnya ditemukan lewat metode ilmiah, bukan dugaan sepihak.' }
          ],
          kasus:{ soal:'Petani di atas menduga sisi barat lebih subur karena sinar matahari sore. Bagaimana ia menguji hipotesis ini secara ilmiah?', steps:['Buat 2 petak tanaman identik (sama jenis, pupuk, air) — satu di barat, satu di timur (variabel lain dikendalikan sama).', 'Ukur pertumbuhan kedua petak secara objektif setelah waktu tertentu.', 'Kalau petak barat konsisten lebih subur meski semua faktor lain sama, hipotesis makin didukung bukti.'], jawaban:'Petani harus <strong>mengendalikan semua variabel lain</strong> agar HANYA faktor sinar matahari yang berbeda — baru bisa disimpulkan penyebabnya.' },
          ujiNalar:{ soal:'Kenapa dalam eksperimen ilmiah penting mengendalikan variabel LAIN selain yang sedang diuji?', options:['Supaya eksperimen terlihat lebih rumit', 'Agar perbedaan hasil bisa dipastikan berasal dari variabel yang diuji, bukan faktor lain yang tidak terkontrol', 'Karena itu aturan baku tanpa alasan khusus', 'Untuk menghemat waktu penelitian'], correctIndex:1, explanation:'Mengendalikan variabel lain memastikan perbedaan hasil benar-benar berasal dari <strong>variabel yang sedang diuji</strong>, bukan faktor lain yang tak terkontrol.' }
        },
        {
          id:'keselamatan-lab',
          title:'Keselamatan Kerja Laboratorium',
          mengamati:'Laboratorium fisika berisi alat listrik tegangan tinggi, bahan kimia, kaca berpotensi pecah, dan peralatan berat — berbeda dari ruang kelas biasa yang relatif aman.',
          kenapa:'Prosedur keselamatan lab bukan sekadar formalitas — ia bagian dari metode ilmiah itu sendiri: eksperimen yang berbahaya bagi penelitinya sendiri gagal memenuhi tujuan utama sains, yaitu memperluas pengetahuan tanpa merugikan.',
          menelaah:{ text:'Prinsip dasar keselamatan lab:', points:['Kenali potensi bahaya SEBELUM memulai (listrik, panas, bahan kimia, benda tajam) — bukan setelah kejadian.', 'Gunakan alat pelindung diri (APD) sesuai jenis eksperimen.', 'Pahami prosedur darurat (lokasi APAR, jalur evakuasi) SEBELUM dibutuhkan.'] },
          rumus:{ formula:'Kenali risiko → gunakan APD → siapkan prosedur darurat', note:'Ini bukan rumus hitung, tapi urutan mitigasi risiko yang berlaku di lab manapun.' },
          duniaNyata:[
            { title:'Protokol keselamatan industri', text:'Pabrik dan fasilitas riset menerapkan protokol jauh lebih ketat dari lab sekolah karena skala bahayanya lebih besar.' },
            { title:'Simulasi peluncuran roket', text:'NASA dan badan antariksa lain melakukan simulasi keselamatan berulang sebelum peluncuran sungguhan.' }
          ],
          kasus:{ soal:'Seorang siswa memanaskan cairan dalam tabung reaksi tapi mengarahkan mulut tabung ke arah teman sekelompoknya. Apa risikonya?', steps:['Cairan panas yang mendidih bisa menyembur keluar tabung secara tiba-tiba (bumping).', 'Kalau mulut tabung mengarah ke orang lain, semburan panas bisa mengenai mereka.', 'Prosedur benar: arahkan mulut tabung menjauh dari SEMUA orang, biasanya ke ruang kosong.'], jawaban:'Risikonya adalah <strong>semburan cairan panas tiba-tiba (bumping)</strong> yang bisa melukai orang di depan mulut tabung.' },
          ujiNalar:{ soal:'Kenapa mulut tabung reaksi yang sedang dipanaskan harus diarahkan menjauh dari semua orang?', options:['Supaya terlihat lebih profesional', 'Karena cairan panas bisa menyembur tiba-tiba (bumping) dan melukai siapa pun di depan arah semburan', 'Karena itu aturan sekolah tanpa alasan ilmiah', 'Agar tabung tidak pecah'], correctIndex:1, explanation:'Cairan yang mendidih bisa <strong>menyembur tiba-tiba (bumping)</strong> — mulut tabung harus menjauh dari siapa pun untuk mencegah cedera.' }
        }
      ]
    },
    {
      id:'besaran-pengukuran',
      title:'Besaran dan Pengukuran',
      meta:'Kasus 02 · 3 investigasi',
      unlocked:true,
      subbabs:[
        {
          id:'besaran-pokok-turunan',
          title:'Besaran Pokok & Turunan',
          mengamati:'"Kecepatan" dibangun dari "jarak" dan "waktu" — tapi "jarak" dan "waktu" sendiri tak dibangun dari besaran lain yang lebih dasar. Ada level "dasar" dan level "turunan" dalam sistem pengukuran fisika.',
          kenapa:'Fisikawan menyepakati sekumpulan KECIL besaran pokok (dasar, tak diturunkan dari yang lain) sebagai fondasi, lalu semua besaran lain (turunan) dibangun dari kombinasinya — ini mencegah sistem satuan jadi kacau tanpa akar yang jelas.',
          menelaah:{ text:'Struktur besaran dalam fisika:', points:['7 besaran pokok SI: panjang (meter), massa (kilogram), waktu (sekon), arus listrik (ampere), suhu (kelvin), jumlah zat (mol), intensitas cahaya (kandela).', 'Besaran turunan dibentuk dari kombinasi besaran pokok, misalnya kecepatan=panjang/waktu (m/s), gaya=massa×percepatan (kg·m/s²=newton).'] },
          rumus:{ formula:'Besaran turunan = kombinasi (perkalian/pembagian) besaran pokok', note:'Semua satuan turunan pada akhirnya bisa "dibongkar" kembali ke 7 besaran pokok.' },
          duniaNyata:[
            { title:'Label kemasan makanan', text:'Kepadatan energi (kkal/100g) adalah besaran turunan yang dibangun dari besaran pokok.' },
            { title:'Definisi ulang meter', text:'Standar 1 meter kini didefinisikan berdasarkan kecepatan cahaya untuk akurasi lintas negara.' }
          ],
          kasus:{ soal:'Tentukan satuan besaran turunan "massa jenis" (densitas) dari besaran pokoknya.', steps:['Massa jenis = massa/volume.', 'Volume sendiri = panjang³ (m³).', 'Maka satuan massa jenis = kg/m³.'], jawaban:'Satuan massa jenis adalah <strong>kg/m³</strong>.' },
          ujiNalar:{ soal:'Gaya = massa × percepatan. Percepatan = kecepatan/waktu = (m/s)/s = m/s². Berapa satuan gaya dalam besaran pokok?', options:['kg·m/s', 'kg·m/s²', 'kg/m·s', 'kg·m²/s'], correctIndex:1, explanation:'Gaya = massa × percepatan = kg × m/s² = <strong>kg·m/s²</strong> (setara dengan newton).' }
        },
        {
          id:'satuan-si-konversi',
          title:'Satuan SI & Konversi',
          mengamati:'Wahana antariksa NASA, Mars Climate Orbiter, hilang kontak dan hancur pada 1999 karena satu tim insinyur memakai satuan imperial (inch/pon), sementara tim lain memakai satuan metrik (meter/kg) — tanpa dikonversi dengan benar.',
          kenapa:'Satuan SI (Sistem Internasional) disepakati secara global agar semua ilmuwan dan insinyur di dunia bisa bertukar data tanpa risiko salah konversi — kasus NASA di atas adalah bukti nyata betapa mahalnya kesalahan satuan.',
          menelaah:{ text:'Cara sistem satuan bekerja:', points:['Satuan SI memakai awalan berbasis kelipatan 10 (kilo=1000×, senti=1/100×, mili=1/1000×), sehingga konversi antar satuan SI relatif mudah.', 'Konversi antar sistem berbeda (SI vs imperial) butuh faktor konversi yang harus dihafal/dicari.', 'Kesalahan konversi paling sering terjadi saat mencampur sistem satuan dalam satu perhitungan tanpa menyeragamkannya dulu.'] },
          rumus:{ formula: '72 km/jam = 72 × 1000m / 3600s', note:'Selalu pastikan SEMUA angka dalam satuan yang sama sebelum menghitung.' },
          duniaNyata:[
            { title:'Kegagalan Mars Climate Orbiter (1999)', text:'Wahana senilai $327 juta hancur akibat satu tim memakai satuan imperial, tim lain metrik, tanpa dikonversi.' },
            { title:'Resep masakan internasional', text:'Sering perlu dikonversi antara cup/ons (Amerika) dan gram/ml (metrik).' }
          ],
          kasus:{ soal:'Sebuah mobil melaju 72 km/jam. Ubah ke satuan m/s.', steps:['1 km=1000m, 1 jam=3600 sekon.', '72 km/jam = 72×1000m / 3600s.', 'Hitung: 72000/3600 = 20.'], jawaban:'Kecepatan mobil = <strong>20 m/s</strong>.' },
          ujiNalar:{ soal:'Ubah 5000 gram ke kilogram.', options:['0,5 kg', '5 kg', '50 kg', '500 kg'], correctIndex:1, explanation:'1 kg = 1000 gram, jadi 5000 gram = <strong>5 kg</strong>.' }
        },
        {
          id:'ketidakpastian-angka-penting',
          title:'Ketidakpastian Pengukuran & Angka Penting',
          mengamati:'Dua siswa mengukur panjang meja yang sama dengan penggaris yang sama, hasilnya 50,2cm dan 50,3cm. Siapa yang benar? Ternyata tak ada pengukuran yang 100% sempurna — semua pengukuran punya ketidakpastian bawaan.',
          kenapa:'Konsep angka penting & ketidakpastian pengukuran diciptakan untuk secara jujur melaporkan seberapa yakin kita pada suatu hasil ukur, bukan berpura-pura hasil pengukuran itu pasti sempurna.',
          menelaah:{ text:'Prinsip di balik angka penting:', points:['Setiap alat ukur punya batas ketelitian — angka-angka yang "pasti terbaca" plus SATU angka taksiran terakhir disebut angka penting.', 'Makin presisi alat ukur (jangka sorong vs penggaris), makin banyak angka penting yang valid dilaporkan.', 'Melaporkan lebih banyak digit dari yang sebenarnya terukur adalah kesalahan, bukan ketelitian ekstra.'] },
          rumus:{ formula:'Angka penting = digit pasti + satu digit taksiran terakhir', note:'Jumlah angka penting yang dilaporkan tak boleh melebihi kemampuan alat ukurnya.' },
          duniaNyata:[
            { title:'Hasil lab medis', text:'Kadar gula darah dilaporkan sesuai kemampuan alat, bukan asal ditambah digit.' },
            { title:'Toleransi manufaktur presisi', text:'Komponen mesin pesawat memakai konsep ketidakpastian pengukuran untuk menentukan batas aman produksi.' }
          ],
          kasus:{ soal:'Jangka sorong (ketelitian 0,01cm) mengukur diameter kelereng=1,52cm. Penggaris biasa (ketelitian 0,1cm) mengukur benda yang sama. Kenapa hasil penggaris tak bisa dilaporkan sedetail 1,52cm?', steps:['Penggaris biasa hanya mampu membaca pasti sampai 0,1cm terdekat, dengan 1 digit taksiran.', 'Melaporkan hasil sampai 0,01cm dari penggaris berarti mengklaim ketelitian yang sebenarnya tak dimiliki alat itu.', 'Hasil yang jujur dari penggaris biasa hanya sampai sekitar 1,5cm.'], jawaban:'Karena melaporkan lebih detail dari kemampuan alat adalah <strong>klaim ketelitian palsu</strong>.' },
          ujiNalar:{ soal:'Kenapa hasil pengukuran tidak boleh dilaporkan dengan lebih banyak digit daripada kemampuan alat ukurnya?', options:['Supaya terlihat lebih sederhana', 'Karena melaporkan digit ekstra berarti mengklaim ketelitian yang sebenarnya tidak dimiliki alat tersebut', 'Karena angka yang panjang sulit dibaca', 'Karena itu aturan baku tanpa alasan ilmiah'], correctIndex:1, explanation:'Digit ekstra adalah <strong>klaim ketelitian palsu</strong> yang melebihi kemampuan sebenarnya dari alat ukur.' }
        }
      ]
    },
    {
      id:'vektor-fisika',
      title:'Vektor',
      meta:'Kasus 03 · 3 investigasi',
      unlocked:true,
      subbabs:[
        {
          id:'vektor-gaya-resultan',
          title:'Vektor Gaya & Resultan',
          mengamati:'Tarik tambang: dua tim menarik tali berlawanan arah dengan gaya besar. Tali bergerak ke arah tim yang lebih kuat — tapi gerakannya bukan penjumlahan kekuatan biasa, karena arah gaya berperan penting.',
          kenapa:'Dalam fisika, gaya adalah besaran vektor (bukan cuma angka) karena arah gaya menentukan efeknya — dua gaya sama besar tapi berlawanan arah saling meniadakan, sementara dua gaya searah saling memperkuat.',
          menelaah:{ text:'Cara menggabungkan beberapa gaya sekaligus:', points:['Resultan gaya (ΣF) dihitung dengan menjumlahkan SEMUA vektor gaya secara komponen (searah sumbu x dijumlah dengan x, y dengan y).', 'Gaya-gaya yang searah dijumlah langsung, gaya berlawanan arah saling mengurangi.', 'Benda dengan resultan gaya TIDAK NOL akan mengalami perubahan gerak (dipercepat), sesuai Hukum Newton.'] },
          rumus:{ formula:'ΣF = F₁ + F₂ + F₃ + ... (dijumlahkan secara vektor)', note:'Menjumlahkan gaya tanpa memperhatikan arah adalah kesalahan paling umum dalam soal dinamika.' },
          duniaNyata:[
            { title:'Tarik tambang', text:'Arah gerak tali ditentukan oleh resultan gaya kedua tim.' },
            { title:'Desain jembatan', text:'Insinyur menghitung resultan seluruh gaya (berat, angin, beban) untuk memastikan struktur tak roboh.' }
          ],
          kasus:{ soal:'Tim A menarik tambang 500N ke kiri, tim B menarik 450N ke kanan. Tentukan resultan gaya & arah pergerakan tali.', steps:['Tetapkan kiri sebagai arah positif.', 'Tim A=+500N, Tim B=−450N (berlawanan arah).', 'Resultan = 500+(−450) = 50N ke kiri.'], jawaban:'Resultan gaya = <strong>50N ke arah kiri (tim A)</strong>.' },
          ujiNalar:{ soal:'Dua gaya bekerja pada benda: 30N ke kanan dan 30N ke kiri. Berapa resultan gayanya?', options:['0N', '30N', '60N', '15N'], correctIndex:0, explanation:'Karena berlawanan arah dan sama besar, keduanya saling meniadakan: resultan = <strong>0N</strong>.' }
        },
        {
          id:'kesetimbangan-benda',
          title:'Kesetimbangan Benda: Ketika Resultan Gaya Nol',
          mengamati:'Lampu gantung diam tak bergerak meski ditarik gravitasi ke bawah DAN kabel penahan menariknya ke atas. Kenapa lampu itu tak jatuh maupun terbang ke atas?',
          kenapa:'Kesetimbangan terjadi ketika resultan semua gaya yang bekerja pada benda = NOL — bukan berarti tak ada gaya sama sekali, tapi semua gaya saling meniadakan secara sempurna. Memahami ini penting untuk merancang struktur yang tak roboh.',
          menelaah:{ text:'Dua jenis kesetimbangan dan syaratnya:', points:['Benda bisa DIAM (kesetimbangan statis, seperti lampu gantung) atau bergerak dengan kecepatan KONSTAN (kesetimbangan dinamis, seperti mobil dengan cruise control).', 'Syarat kesetimbangan: ΣFx=0 DAN ΣFy=0, dicek terpisah per sumbu.', 'Pada lampu gantung, gaya berat (ke bawah) harus PERSIS sama besar dengan tegangan tali (ke atas) agar resultan nol.'] },
          rumus:{ formula:'ΣFx = 0 dan ΣFy = 0', note:'Ini syarat matematis kesetimbangan — kedua sumbu harus dicek secara terpisah.' },
          duniaNyata:[
            { title:'Jembatan gantung', text:'Arsitek menghitung kesetimbangan gaya agar berat jembatan tak membuat kabel putus.' },
            { title:'Akrobat tali (tightrope walker)', text:'Menjaga kesetimbangan tubuhnya secara real-time terhadap gravitasi.' }
          ],
          kasus:{ soal:'Sebuah lampu 20N digantung dengan 1 kabel vertikal. Berapa tegangan kabel agar lampu dalam kesetimbangan?', steps:['Syarat kesetimbangan: ΣFy=0.', 'Gaya berat lampu=20N ke bawah, tegangan kabel T ke atas.', 'T−20=0, maka T=20N.'], jawaban:'Tegangan kabel harus tepat <strong>20N</strong>.' },
          ujiNalar:{ soal:'Sebuah mobil melaju dengan kecepatan KONSTAN di jalan lurus (kesetimbangan dinamis). Berapa resultan gaya yang bekerja padanya?', options:['Sama dengan gaya mesin', 'Sama dengan berat mobil', 'Nol, karena kecepatan konstan berarti tidak ada percepatan', 'Tergantung kecepatannya'], correctIndex:2, explanation:'Kecepatan konstan berarti percepatan=0, sehingga menurut hukum Newton II, resultan gaya harus = <strong>nol</strong>.' }
        },
        {
          id:'kecepatan-relatif',
          title:'Vektor Kecepatan Relatif: Kapal, Arus & Angin',
          mengamati:'Kapal menyeberangi sungai dengan mengarahkan haluan lurus ke seberang, tapi kapal itu justru mendarat agak ke hilir dari titik yang dituju. Ada "pengaruh tak terlihat" yang menggeser lintasannya.',
          kenapa:'Kecepatan sebenarnya suatu benda relatif terhadap pengamat diam (misal tepi sungai) adalah gabungan (resultan vektor) dari kecepatan benda itu sendiri DAN kecepatan medium yang ditumpanginya (arus air, angin) — inilah kecepatan relatif.',
          menelaah:{ text:'Menghitung kecepatan sebenarnya dari dua pengaruh sekaligus:', points:['v_kapal/tanah = v_kapal/air + v_air/tanah — dijumlahkan secara VEKTOR, bukan angka biasa.', 'Kalau arus tegak lurus arah kapal, resultannya dihitung dengan Pythagoras.', 'Inilah sebabnya kapal yang "mengarah lurus ke seberang" justru mendarat agak menyimpang — lintasan sebenarnya adalah diagonal.'] },
          rumus:{ formula:'v_relatif = v_benda + v_medium (dijumlahkan secara vektor)', note:'Berlaku untuk kapal di arus air, pesawat di angin, atau perenang di sungai.' },
          duniaNyata:[
            { title:'Crab angle pada pesawat', text:'Pilot mengarahkan hidung pesawat sedikit melawan arah angin agar lintasan sebenarnya tetap lurus ke tujuan.' },
            { title:'Perenang menyeberangi sungai', text:'Harus memperhitungkan arus agar tak terbawa terlalu jauh dari titik tujuan.' }
          ],
          kasus:{ soal:'Sebuah kapal bergerak 4 m/s tegak lurus arus sungai yang mengalir 3 m/s. Tentukan kecepatan kapal sebenarnya.', steps:['Karena kedua kecepatan saling tegak lurus, gunakan Pythagoras.', 'v=√(4²+3²)=√(16+9).', 'v=√25=5.'], jawaban:'Kecepatan kapal sebenarnya = <strong>5 m/s</strong>, arahnya diagonal.' },
          ujiNalar:{ soal:'Pesawat terbang 200 km/jam ke timur, angin bertiup 50 km/jam JUGA ke timur (searah). Berapa kecepatan pesawat sebenarnya terhadap tanah?', options:['150 km/jam', '200 km/jam', '250 km/jam', '206 km/jam'], correctIndex:2, explanation:'Karena searah, dijumlahkan langsung: 200+50=<strong>250 km/jam</strong>.' }
        }
      ]
    },
    {
      id:'kinematika-gerak-lurus',
      title:'Kinematika Gerak Lurus',
      meta:'Kasus 04 · 4 investigasi',
      unlocked:true,
      subbabs:[
        {
          id:'posisi-jarak-perpindahan',
          title:'Posisi, Jarak & Perpindahan',
          mengamati:'Seorang pelari mengelilingi lintasan bulat sepanjang 400 meter, lalu berhenti tepat di titik start lagi. Berapa jauh dia "berjalan"? Ternyata pertanyaan ini punya <strong>dua jawaban yang sama-sama benar</strong>: 400 meter (kalau menghitung jejak kaki) atau 0 meter (kalau menghitung seberapa jauh dia dari titik awal). Dua jawaban berbeda untuk satu situasi — inilah yang membuat fisikawan sadar mereka butuh dua istilah berbeda.',
          kenapa:'Fisika memisahkan <strong>jarak</strong> (seberapa panjang lintasan yang ditempuh, selalu positif) dari <strong>perpindahan</strong> (seberapa jauh dan ke arah mana posisi akhir berubah dari posisi awal, bisa positif/negatif tergantung arah). Tanpa pemisahan ini, perhitungan gerak bolak-balik atau melingkar jadi ambigu dan tidak bisa dihitung secara konsisten.',
          menelaah:{
            text:'Bayangkan posisi diukur pada sebuah garis bilangan (sumbu x), dengan titik acuan di angka 0. Ketuk titik pada diagram untuk detail tiap posisi:',
            points:[
              '<strong>Posisi</strong> adalah letak benda relatif terhadap titik acuan — butuh titik nol yang disepakati dulu sebelum posisi punya arti.',
              '<strong>Jarak</strong> = total panjang lintasan yang dilalui, dihitung dari seberapa banyak "langkah" yang benar-benar diambil, tanpa peduli arah.',
              '<strong>Perpindahan</strong> = posisi akhir − posisi awal. Ini besaran vektor: punya arah (tanda + atau −) selain besar.'
            ],
            diagram:{
              viewBox:[260,80],
              svg:'<svg viewBox="0 0 260 80" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="50" x2="240" y2="50" stroke="#4A82BE" stroke-width="1.5"/><circle cx="40" cy="50" r="5" fill="#7FDBFF"/><circle cx="200" cy="50" r="5" fill="#FFB627"/><circle cx="110" cy="50" r="5" fill="#6FE3B4"/><path d="M40,50 Q120,20 200,50" fill="none" stroke="#7FDBFF" stroke-dasharray="3,3" stroke-width="1.5"/></svg>',
              cap:'Berjalan start→200m lalu balik ke 110m: jarak = 200+90=290m, perpindahan = 110−0=110m ke kanan.',
              hotspots:[
                {cx:40,cy:50,label:'Start (0m)',text:'Titik awal gerak, dijadikan acuan posisi 0.'},
                {cx:200,cy:50,label:'Titik balik (200m)',text:'Benda berbalik arah di sini — jarak terus bertambah meski posisi mulai kembali mendekat ke start.'},
                {cx:110,cy:50,label:'Akhir (110m)',text:'Posisi akhir benda. Perpindahan dihitung langsung dari sini ke titik start (garis putus-putus), mengabaikan jalur baliknya.'}
              ]
            }
          },
          rumus:{ formula:'Perpindahan (Δx) = x_akhir − x_awal', note:'Jarak selalu ≥ perpindahan dalam nilai mutlaknya — perpindahan adalah "jalan pintas" garis lurus dari awal ke akhir.' },
          duniaNyata:[
            { title:'Aplikasi ojek online', text:'Estimasi tarif dihitung dari jarak tempuh rute jalan (mengikuti kelokan jalan) bukan perpindahan garis lurus — itu sebabnya tarif ke tempat yang "kelihatannya dekat" di peta bisa lebih mahal kalau jalannya berputar.' },
            { title:'Atlet lari 400m di lintasan oval', text:'Pelari menempuh jarak 400 meter penuh tapi perpindahannya nol karena kembali ke titik start — ini dipakai pelatih untuk membedakan pengukuran stamina (jarak) dari efisiensi lintasan (perpindahan).' }
          ],
          kasus:{
            soal:'Seorang anak berjalan 8 meter ke timur, lalu berbalik arah dan berjalan 3 meter ke barat. Tentukan jarak total dan perpindahannya.',
            steps:[
              'Jarak = total langkah tanpa peduli arah = 8m + 3m = 11 meter.',
              'Untuk perpindahan, tetapkan arah timur sebagai positif: gerakan pertama +8m, gerakan kedua −3m (karena ke barat, arah berlawanan).',
              'Perpindahan total = (+8) + (−3) = +5 meter, artinya 5 meter ke arah timur dari titik awal.'
            ],
            jawaban:'Jarak total = <strong>11 meter</strong>, perpindahan = <strong>5 meter ke timur</strong>. Selisih 6 meter antara keduanya adalah "jalan yang ditempuh sia-sia" akibat berbalik arah.'
          },
          ujiNalar:{
            soal:'Sebuah mobil bergerak 15 km ke utara lalu 15 km ke selatan kembali ke garasi. Berapa perpindahannya?',
            options:['30 km', '15 km', '0 km', '−15 km'],
            correctIndex:2,
            explanation:'Perpindahan = posisi akhir − posisi awal. Karena mobil kembali persis ke garasi (titik awal), perpindahannya = <strong>0 km</strong> — meski jarak yang ditempuh tetap 30 km (15+15).'
          }
        },
        {
          id:'kelajuan-kecepatan',
          title:'Kelajuan & Kecepatan',
          mengamati:'Ada perbedaan antara "mobil ini bergerak dengan laju 60 km/jam" dan "mobil ini bergerak 60 km/jam ke utara". Kalimat kedua memberi informasi lebih banyak. Pertanyaannya: apakah beda ini penting secara matematis, atau cuma soal gaya bahasa?',
          kenapa:'Sama seperti pasangan jarak-perpindahan, fisika membedakan <strong>kelajuan</strong> (skalar, hanya besar — seberapa cepat) dari <strong>kecepatan</strong> (vektor, besar + arah). Perbedaan ini krusial saat menjumlahkan gerak: dua kelajuan 60 km/jam yang berlawanan arah tidak bisa dijumlah begitu saja seperti dua kecepatan yang searah.',
          menelaah:{
            text:'Kelajuan dan kecepatan dibangun dari rasio dasar yang sama, hanya beda pembilangnya:',
            points:[
              '<strong>Kelajuan rata-rata</strong> = jarak tempuh ÷ waktu tempuh. Selalu positif, tidak peduli arah.',
              '<strong>Kecepatan rata-rata</strong> = perpindahan ÷ waktu tempuh. Bisa positif atau negatif tergantung arah acuan.',
              '<strong>Kecepatan sesaat</strong> adalah kecepatan pada satu titik waktu tertentu — seperti angka yang muncul di spidometer mobil saat itu juga, bukan rata-rata seluruh perjalanan.'
            ]
          },
          rumus:{ formula:'v = Δx / Δt  (kecepatan rata-rata)', note:'Satuan SI: meter/sekon (m/s). Konversi umum: 1 km/jam = 1000/3600 m/s ≈ 0,278 m/s.' },
          duniaNyata:[
            { title:'Spidometer vs GPS mobil', text:'Spidometer menunjukkan kelajuan sesaat (seberapa cepat roda berputar saat itu), sedangkan aplikasi navigasi menghitung kecepatan rata-rata perjalanan dari perpindahan total dibagi waktu tempuh — itu kenapa keduanya bisa menunjukkan angka berbeda.' },
            { title:'Perlombaan renang bolak-balik', text:'Perenang gaya 4×50m bolak-balik punya kelajuan tinggi terus-menerus, tapi kecepatan rata-ratanya bisa mendekati nol kalau start dan finish di kolam yang sama — pelatih memakai kelajuan untuk menilai stamina, bukan kecepatan.' }
          ],
          kasus:{
            soal:'Sebuah drone terbang lurus sejauh 240 meter ke arah timur dalam waktu 20 sekon. Hitung kecepatan rata-ratanya.',
            steps:[
              'Identifikasi data: perpindahan Δx = 240 m (ke timur), waktu Δt = 20 s.',
              'Gunakan rumus v = Δx/Δt = 240/20.',
              'Hitung hasilnya: 240 ÷ 20 = 12.'
            ],
            jawaban:'Kecepatan rata-rata drone = <strong>12 m/s ke arah timur</strong>.'
          },
          ujiNalar:{
            soal:'Drone di atas lalu terbang 240 m lagi ke arah barat (kembali ke titik awal) dalam 20 s berikutnya. Berapa kecepatan rata-rata untuk SELURUH perjalanan pulang-pergi?',
            options:['12 m/s', '6 m/s', '0 m/s', '24 m/s'],
            correctIndex:2,
            explanation:'Kelajuan rata-rata memang 480m/40s = 12 m/s. Tapi kecepatan rata-rata memakai perpindahan, dan perpindahan totalnya <strong>0</strong> (drone kembali ke titik awal) — jadi kecepatan rata-ratanya <strong>0 m/s</strong>, meski drone tidak pernah berhenti bergerak.'
          }
        },
        {
          id:'glb',
          title:'Gerak Lurus Beraturan (GLB)',
          mengamati:'Bayangkan mobil di jalan tol lurus dengan cruise control menyala — kecepatannya konstan, tidak berubah sama sekali sepanjang waktu. Bagaimana cara memprediksi posisinya di menit ke-10, ke-20, atau kapan pun tanpa menunggu?',
          kenapa:'GLB adalah <strong>model paling sederhana dari gerak</strong> — kecepatan konstan, percepatan nol. Fisikawan mempelajarinya lebih dulu sebelum gerak yang lebih rumit, karena dari sinilah pola dasar hubungan posisi-kecepatan-waktu bisa dilihat dengan jelas tanpa gangguan percepatan.',
          menelaah:{
            text:'Karena kecepatan tetap, hubungan posisi dan waktu berbentuk garis lurus. Ketuk diagram untuk detail:',
            points:[
              'Grafik <strong>kecepatan terhadap waktu (v-t)</strong> pada GLB adalah garis mendatar (horizontal) — kecepatan tidak berubah.',
              'Grafik <strong>posisi terhadap waktu (x-t)</strong> adalah garis lurus miring — makin curam kemiringannya, makin besar kecepatannya.',
              'Luas daerah di bawah grafik v-t (berbentuk persegi panjang) sama dengan jarak yang ditempuh — pola ini nanti berlaku juga untuk GLBB.'
            ],
            diagram:{
              viewBox:[260,100],
              svg:'<svg viewBox="0 0 260 100" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="85" x2="240" y2="85" stroke="#4A82BE" stroke-width="1"/><line x1="30" y1="10" x2="30" y2="85" stroke="#4A82BE" stroke-width="1"/><line x1="30" y1="40" x2="230" y2="40" stroke="#FFB627" stroke-width="2"/><rect x="30" y="40" width="200" height="45" fill="#FFB627" opacity="0.12"/></svg>',
              cap:'Grafik v-t GLB: garis datar. Area kotak yang diarsir = jarak tempuh (v × t).',
              hotspots:[
                {cx:130,cy:40,label:'Garis kecepatan (v)',text:'Garis mendatar berarti kecepatan tidak berubah — ciri khas GLB.'},
                {cx:130,cy:65,label:'Luas kotak = jarak',text:'Luas daerah di bawah grafik v-t (persegi panjang) sama dengan jarak yang ditempuh: luas = v × t.'}
              ]
            }
          },
          rumus:{ formula:'x = x₀ + v·t', note:'x₀ = posisi awal, v = kecepatan konstan, t = waktu. Karena v tetap, ini persis persamaan garis lurus y = mx + c yang sudah dipelajari di aljabar.' },
          duniaNyata:[
            { title:'Kereta cepat & cruise control', text:'Kereta antar-kota di rel lurus panjang menjaga kecepatan konstan untuk efisiensi energi dan kenyamanan penumpang — mendekati model GLB pada segmen lintasan lurus.' },
            { title:'Estimasi waktu tiba (ETA)', text:'Aplikasi peta memakai asumsi kecepatan rata-rata konstan pada ruas jalan tertentu untuk menghitung estimasi waktu tiba — versi sederhana dari x = x₀ + v·t.' }
          ],
          kasus:{
            soal:'Sebuah kereta bergerak GLB dari posisi awal 5 km dengan kecepatan tetap 80 km/jam. Tentukan posisinya setelah 2,5 jam.',
            steps:[
              'Catat data: x₀ = 5 km, v = 80 km/jam, t = 2,5 jam.',
              'Masukkan ke rumus x = x₀ + v·t = 5 + (80 × 2,5).',
              'Hitung 80 × 2,5 = 200, lalu 5 + 200 = 205.'
            ],
            jawaban:'Posisi kereta setelah 2,5 jam adalah <strong>205 km</strong> dari titik acuan awal.'
          },
          ujiNalar:{
            soal:'Dua motor A dan B start bersamaan dari titik yang sama, A dengan kecepatan 40 km/jam dan B 60 km/jam, searah. Setelah 3 jam, berapa jarak antara keduanya?',
            options:['20 km', '40 km', '60 km', '180 km'],
            correctIndex:2,
            explanation:'Posisi A = 40×3=120km, posisi B = 60×3=180km. Selisih = 180−120 = <strong>60 km</strong>. Cara cepatnya: selisih kecepatan (60−40) × waktu (3) = 60 km.'
          }
        },
        {
          id:'glbb',
          title:'GLBB & Percepatan',
          mengamati:'Mobil yang baru lepas landas dari lampu merah tidak langsung punya kecepatan 60 km/jam — kecepatannya bertambah sedikit demi sedikit. Model GLB (kecepatan konstan) tidak cukup untuk menjelaskan ini. Dibutuhkan besaran baru yang mengukur <strong>seberapa cepat kecepatan itu sendiri berubah</strong>.',
          kenapa:'Percepatan (a) diciptakan sebagai "turunan kedua" dari posisi — kecepatan mengukur laju perubahan posisi, percepatan mengukur laju perubahan kecepatan. GLBB (Gerak Lurus Berubah Beraturan) memodelkan gerak dengan percepatan <em>konstan</em>, seperti mobil yang digas/direm dengan tekanan tetap, atau benda jatuh bebas akibat gravitasi.',
          menelaah:{
            text:'Tiga rumus GLBB sebenarnya semuanya diturunkan dari satu definisi dasar percepatan. Ketuk diagram untuk detail:',
            points:[
              'Definisi dasar: a = Δv/Δt = (v_akhir − v_awal)/t. Dari sini: <strong>vₜ = v₀ + a·t</strong> — kecepatan akhir adalah kecepatan awal ditambah tambahan kecepatan dari percepatan selama waktu t.',
              'Posisi diperoleh dari luas daerah di bawah grafik v-t (sekarang berbentuk trapesium karena kecepatan berubah linear): <strong>x = x₀ + v₀t + ½at²</strong>.',
              'Menggabungkan dua rumus di atas untuk menghilangkan variabel t menghasilkan rumus ketiga: <strong>vₜ² = v₀² + 2a·Δx</strong>.'
            ],
            diagram:{
              viewBox:[260,100],
              svg:'<svg viewBox="0 0 260 100" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="85" x2="240" y2="85" stroke="#4A82BE" stroke-width="1"/><line x1="30" y1="10" x2="30" y2="85" stroke="#4A82BE" stroke-width="1"/><path d="M30,80 L230,20" stroke="#FFB627" stroke-width="2" fill="none"/><polygon points="30,80 230,20 230,85 30,85" fill="#FFB627" opacity="0.12"/></svg>',
              cap:'Grafik v-t GLBB: garis miring. Luas trapesium di bawahnya = jarak tempuh total.',
              hotspots:[
                {cx:130,cy:50,label:'Garis miring (v naik)',text:'Kemiringan garis v-t menunjukkan percepatan (a) — makin miring, makin besar percepatannya.'},
                {cx:130,cy:75,label:'Luas trapesium = jarak',text:'Karena kecepatan berubah, luas di bawah grafik berbentuk trapesium — inilah asal rumus x = v₀t + ½at².'}
              ]
            }
          },
          rumus: { formula:'vₜ = v₀ + at &nbsp;·&nbsp; x = x₀ + v₀t + ½at² &nbsp;·&nbsp; vₜ² = v₀² + 2aΔx', note:'Gerak jatuh bebas adalah GLBB khusus dengan v₀ = 0 dan a = g ≈ 9,8 m/s².' },
          duniaNyata:[
            { title:'Jarak pengereman mobil', text:'Insinyur otomotif menghitung jarak pengereman minimum dari vₜ²=v₀²+2aΔx (dengan vₜ=0 saat berhenti) untuk menentukan standar keamanan jarak aman berkendara pada kecepatan tertentu.' },
            { title:'Roket & pesawat lepas landas', text:'Landasan pacu pesawat dirancang cukup panjang berdasarkan perhitungan GLBB: percepatan mesin pesawat dan kecepatan minimum untuk lepas landas menentukan panjang landasan minimum yang dibutuhkan.' }
          ],
          kasus:{
            soal:'Sebuah motor bergerak dengan kecepatan awal 5 m/s, lalu mengalami percepatan tetap 2 m/s² selama 4 sekon. Tentukan kecepatan akhir dan jarak yang ditempuh.',
            steps:[
              'Catat data: v₀ = 5 m/s, a = 2 m/s², t = 4 s.',
              'Cari kecepatan akhir: vₜ = v₀ + at = 5 + (2×4) = 5 + 8 = 13 m/s.',
              'Cari jarak tempuh: x = v₀t + ½at² = (5×4) + ½(2)(4²) = 20 + 16 = 36 meter.'
            ],
            jawaban:'Kecepatan akhir motor = <strong>13 m/s</strong>, dengan jarak tempuh = <strong>36 meter</strong> selama 4 sekon itu.'
          },
          ujiNalar:{
            soal:'Sebuah bola dijatuhkan bebas (v₀=0) dan menyentuh tanah setelah 2 sekon (g=10 m/s²). Berapa kecepatannya saat menyentuh tanah?',
            options:['10 m/s', '20 m/s', '40 m/s', '100 m/s'],
            correctIndex:1,
            explanation:'vₜ = v₀ + gt = 0 + (10×2) = <strong>20 m/s</strong>. Bonus: tinggi jatuhnya = v₀t + ½gt² = ½(10)(2²) = 20 meter.'
          }
        }
      ]
    },
    {
      id:'gerak-parabola',
      title:'Gerak Parabola',
      meta:'Kasus 05 · 3 investigasi',
      unlocked:true,
      subbabs:[
        {
          id:'konsep-gerak-parabola',
          title:'Gerak Parabola: Gabungan GLB dan GLBB',
          mengamati:'Bola yang ditendang tak bergerak lurus atau langsung jatuh — ia melengkung membentuk lintasan parabola. Bagaimana menjelaskan gerak dua arah sekaligus (mendatar & menanjak-turun) dengan alat yang sudah dipelajari (GLB & GLBB)?',
          kenapa:'Galileo adalah orang pertama yang menyadari gerak peluru bisa "dipecah" jadi DUA gerak independen yang terjadi BERSAMAAN: gerak horizontal (tak dipengaruhi gravitasi, jadi GLB) dan gerak vertikal (dipengaruhi penuh gravitasi, jadi GLBB) — kedua gerak ini tak saling memengaruhi, hanya digabung untuk membentuk lintasan gabungan.',
          menelaah:{ text:'Dua komponen gerak yang berjalan bersamaan:', points:['Komponen horizontal: vx tetap sepanjang waktu (abaikan gesekan udara) → x=v₀ₓ·t, persis GLB.', 'Komponen vertikal: dipengaruhi gravitasi persis seperti GLBB → vy=v₀ᵧ−gt, y=v₀ᵧt−½gt².', 'Kedua persamaan berjalan SIMULTAN dengan variabel waktu t yang sama, menghasilkan lintasan melengkung saat digabungkan.'] },
          rumus:{ formula:'x = v₀cosθ·t &nbsp;·&nbsp; y = v₀sinθ·t − ½gt²', note:'v₀cosθ adalah komponen horizontal kecepatan awal, v₀sinθ adalah komponen vertikalnya.' },
          duniaNyata:[
            { title:'Lemparan bola basket', text:'Pemain menghitung (secara intuitif) sudut & kecepatan lemparan agar bola masuk ring — persis gerak parabola.' },
            { title:'Artileri & perosotan air', text:'Desain water park dan perhitungan artileri militer memakai perhitungan gerak parabola presisi.' }
          ],
          kasus:{ soal:'Sebuah bola ditendang dengan kecepatan awal 20 m/s pada sudut 30° (sin30°=0,5, cos30°≈0,87). Tentukan komponen kecepatan horizontal & vertikal awalnya.', steps:['v₀ₓ=v₀cosθ=20×0,87.', 'Hitung: 17,4 m/s.', 'v₀ᵧ=v₀sinθ=20×0,5=10 m/s.'], jawaban:'Komponen horizontal = <strong>17,4 m/s</strong>, komponen vertikal = <strong>10 m/s</strong>.' },
          ujiNalar:{ soal:'Kenapa komponen horizontal kecepatan pada gerak parabola tetap konstan sepanjang lintasan (mengabaikan gesekan udara)?', options:['Karena gravitasi hanya bekerja pada arah vertikal, tidak ada gaya yang memengaruhi arah horizontal', 'Karena benda melambat secara alami', 'Karena kecepatan awal terlalu kecil untuk berubah', 'Karena gerak horizontal tidak nyata'], correctIndex:0, explanation:'Gravitasi hanya bekerja secara <strong>vertikal</strong> — tidak ada gaya yang mengubah kecepatan horizontal, sehingga komponen ini tetap konstan (GLB).' }
        },
        {
          id:'tinggi-maksimum-jangkauan',
          title:'Tinggi Maksimum & Jangkauan Terjauh',
          mengamati:'Pemain golf ingin tahu sudut pukulan terbaik agar bola terbang sejauh mungkin — terlalu datar bola cepat jatuh, terlalu tegak bola tinggi tapi tak jauh. Ada sudut "optimal" yang bisa dihitung pasti.',
          kenapa:'Tinggi maksimum & jangkauan terjauh gerak parabola bisa diturunkan dari persamaan gerak dengan memakai fakta bahwa di titik tertinggi, kecepatan vertikal = 0 (benda berhenti sesaat sebelum turun kembali) — titik inilah kunci menurunkan seluruh rumusnya.',
          menelaah:{ text:'Menurunkan rumus tinggi maksimum dan jangkauan:', points:['Tinggi maksimum dicapai saat vy=0, yaitu saat t=v₀sinθ/g — substitusi waktu ini ke persamaan y menghasilkan rumus tinggi maksimum.', 'Jangkauan dicapai saat benda kembali ke ketinggian awal — waktu total di udara adalah 2× waktu mencapai puncak (lintasan simetris antara naik & turun).', 'Jangkauan maksimum secara matematis terjadi pada sudut 45° — "titik tengah" antara terlalu datar dan terlalu tegak.'] },
          rumus:{ formula:'h_maks = (v₀sinθ)² / 2g &nbsp;·&nbsp; R_maks = v₀²sin(2θ) / g', note:'Jangkauan terjauh terjadi pada sudut 45°, karena sin(2×45°)=sin90°=1 (nilai maksimum sinus).' },
          duniaNyata:[
            { title:'Lempar cakram & lembing', text:'Pelatih atletik melatih atlet mendekati sudut optimal ~40-45° (disesuaikan hambatan udara & tinggi lepas tangan).' },
            { title:'Desain water park', text:'Tinggi & jangkauan perosotan air dihitung presisi memakai rumus ini.' }
          ],
          kasus:{ soal:'Sebuah peluru ditembakkan dengan v₀=30 m/s pada sudut 30° (sin30°=0,5, g=10 m/s²). Tentukan tinggi maksimumnya.', steps:['Gunakan h_maks=(v₀sinθ)²/2g.', 'Substitusi: (30×0,5)²/(2×10) = 15²/20.', 'Hitung: 225/20 = 11,25.'], jawaban:'Tinggi maksimum = <strong>11,25 meter</strong>.' },
          ujiNalar:{ soal:'Pada sudut berapa jangkauan gerak parabola mencapai nilai MAKSIMUM (dengan kecepatan awal yang sama)?', options:['30°', '45°', '60°', '90°'], correctIndex:1, explanation:'Jangkauan maksimum terjadi pada sudut <strong>45°</strong>, karena sin(2×45°)=sin90°=1 (nilai maksimum sinus).' }
        },
        {
          id:'penerapan-gerak-parabola',
          title:'Penerapan Gerak Parabola dalam Analisis Kasus',
          mengamati:'Investigator forensik terkadang perlu merekonstruksi lintasan peluru atau benda jatuh dari lokasi kejadian untuk menentukan asal tembakan atau ketinggian jatuh — ini murni aplikasi gerak parabola yang "dibalik".',
          kenapa:'Memahami gerak parabola secara menyeluruh (bukan cuma menghafal rumus) memungkinkan kita memecahkan masalah dari arah manapun — baik memprediksi lintasan dari kondisi awal, maupun merekonstruksi kondisi awal dari lintasan yang teramati.',
          menelaah:{ text:'Strategi umum memecahkan soal gerak parabola:', points:['Identifikasi dulu apa yang diketahui (kecepatan awal, sudut, ketinggian awal) dan apa yang ditanya.', 'Pisahkan analisis jadi komponen horizontal (GLB) dan vertikal (GLBB) SECARA TERPISAH.', 'Gunakan variabel waktu t sebagai "jembatan" yang menghubungkan kedua komponen, karena keduanya terjadi pada waktu yang sama.'] },
          rumus:{ formula:'Waktu total di udara = 2v₀sinθ/g (untuk benda yang kembali ke ketinggian awal)', note:'Untuk benda yang dilempar horizontal (tidak kembali ke ketinggian awal), gunakan persamaan y=½gt² langsung.' },
          duniaNyata:[
            { title:'Rekonstruksi kecelakaan lalu lintas', text:'Kecepatan kendaraan direkonstruksi dari jarak pantulan objek yang terlempar.' },
            { title:'Desain roller coaster', text:'Lintasan parabola pada bagian tertentu track dihitung presisi.' }
          ],
          kasus:{ soal:'Sebuah bola dilempar horizontal (v₀ᵧ=0) dari atap gedung setinggi 20m dengan kecepatan 15 m/s. Berapa lama bola di udara sebelum menyentuh tanah (g=10 m/s²)?', steps:['Karena dilempar horizontal, gerak vertikalnya sama dengan jatuh bebas: y=½gt².', '20=½(10)t² → 20=5t² → t²=4.', 't=√4=2.'], jawaban:'Waktu di udara = <strong>2 sekon</strong>.' },
          ujiNalar:{ soal:'Dari kasus di atas (bola dilempar horizontal 15 m/s dari 20m, t=2s), berapa jarak mendatar (jangkauan) bola saat menyentuh tanah?', options:['15 m', '20 m', '30 m', '40 m'], correctIndex:2, explanation:'x=v₀ₓ×t=15×2=<strong>30 m</strong>.' }
        }
      ]
    },
    {
      id:'gerak-melingkar',
      title:'Gerak Melingkar',
      meta:'Kasus 06 · 3 investigasi',
      unlocked:true,
      subbabs:[
        {
          id:'kecepatan-sudut-periode',
          title:'Kecepatan Sudut, Periode & Frekuensi',
          mengamati:'Jarum jam terus berputar dengan "kecepatan" yang terasa konstan, tapi kecepatan LINEAR ujung jarum detik lebih cepat daripada ujung jarum jam. Ada jenis "kecepatan" lain yang dibutuhkan untuk gerak melingkar.',
          kenapa:'Kecepatan sudut (ω) diciptakan untuk mengukur seberapa cepat SUDUT berubah (bukan seberapa cepat jarak ditempuh) — penting karena pada roda/piringan yang sama, semua titik berputar dengan kecepatan sudut yang SAMA, meski kecepatan linear tiap titik berbeda tergantung jaraknya dari pusat.',
          menelaah:{ text:'Tiga besaran dasar gerak melingkar:', points:['Periode (T) = waktu untuk 1 putaran penuh. Frekuensi (f) = banyak putaran per satuan waktu (f=1/T).', 'Kecepatan sudut ω = sudut yang ditempuh (radian) per satuan waktu = 2π/T (karena 1 putaran penuh = 2π radian).', 'Kecepatan linear v pada jarak r dari pusat = ω×r — titik yang lebih jauh dari pusat punya kecepatan linear lebih besar meski ω sama.'] },
          rumus:{ formula:'ω = 2π/T = 2πf &nbsp;·&nbsp; v = ω·r', note:'ω sama untuk seluruh titik pada benda yang sama; v berbeda tergantung jarak dari pusat.' },
          duniaNyata:[
            { title:'RPM mesin', text:'Kecepatan rotasi mesin/motor (rotation per minute) adalah representasi praktis dari frekuensi gerak melingkar.' },
            { title:'Komidi putar', text:'Orang yang duduk di kursi terluar bergerak lebih cepat (kecepatan linear) daripada yang di dekat pusat, meski keduanya berputar bersama dengan ω sama.' }
          ],
          kasus:{ soal:'Sebuah roda berputar dengan periode 0,5 sekon. Tentukan kecepatan sudutnya.', steps:['Gunakan ω=2π/T.', 'Substitusi: 2π/0,5=4π rad/s.', 'Hitung: 4×3,14≈12,56.'], jawaban:'Kecepatan sudut roda ≈ <strong>12,56 rad/s</strong>.' },
          ujiNalar:{ soal:'Sebuah titik berjarak 2m dari pusat roda yang berputar dengan ω=5 rad/s. Berapa kecepatan linearnya?', options:['2,5 m/s', '5 m/s', '7 m/s', '10 m/s'], correctIndex:3, explanation:'v=ωr=5×2=<strong>10 m/s</strong>.' }
        },
        {
          id:'percepatan-sentripetal',
          title:'Percepatan Sentripetal: Kenapa Benda Melingkar Tak Terlempar Lurus',
          mengamati:'Mobil berbelok tajam di tikungan tanpa melaju lebih cepat/lambat (kelajuannya konstan) — tapi arahnya terus berubah. Menurut definisi percepatan (perubahan kecepatan), apakah mobil ini punya percepatan meski kelajuannya tetap?',
          kenapa:'Kecepatan adalah besaran vektor (besar+arah), jadi meski BESAR kecepatan (kelajuan) tetap, kalau ARAHNYA berubah terus-menerus, itu tetap disebut percepatan. Percepatan ini disebut sentripetal — selalu mengarah ke pusat lingkaran, bertugas membelokkan arah gerak tanpa mengubah kelajuannya.',
          menelaah:{ text:'Sifat khas percepatan sentripetal:', points:['Percepatan sentripetal (a_s) selalu tegak lurus terhadap arah kecepatan (arahnya ke pusat) — inilah kenapa ia tak mengubah besar kecepatan, hanya arahnya.', 'Besar percepatan sentripetal a_s=v²/r=ω²r — makin cepat kelajuan atau makin kecil radius, makin besar percepatan yang dibutuhkan.', 'Percepatan ini membutuhkan gaya sentripetal (F=ma_s) yang mengarah ke pusat — pada mobil di tikungan, gaya ini berasal dari gesekan ban dengan jalan.'] },
          rumus:{ formula:'a_s = v²/r = ω²r', note:'a_s berbanding lurus dengan kuadrat kecepatan — menggandakan kecepatan berarti percepatan sentripetal naik 4 kali lipat.' },
          duniaNyata:[
            { title:'Mobil tergelincir di tikungan', text:'Mobil yang melaju terlalu cepat bisa tergelincir keluar lintasan karena gaya gesek ban tak cukup menyediakan gaya sentripetal yang dibutuhkan.' },
            { title:'Gravitasi buatan di stasiun luar angkasa', text:'Desain hipotetis stasiun luar angkasa berputar memanfaatkan percepatan sentripetal untuk menciptakan efek "gravitasi buatan".' }
          ],
          kasus:{ soal:'Sebuah mobil melaju 20 m/s di tikungan berjari-jari 50m. Tentukan percepatan sentripetalnya.', steps:['Gunakan a_s=v²/r.', 'Substitusi: 20²/50=400/50.', 'Hitung: 8.'], jawaban:'Percepatan sentripetal = <strong>8 m/s²</strong>.' },
          ujiNalar:{ soal:'Jika kelajuan mobil pada kasus di atas DIGANDAKAN (jadi 40 m/s) dengan radius tikungan tetap, berapa kali lipat percepatan sentripetalnya bertambah?', options:['2 kali', '4 kali', '8 kali', '16 kali'], correctIndex:1, explanation:'Karena a_s berbanding lurus dengan v², menggandakan v membuat a_s naik 2²=<strong>4 kali</strong>.' }
        },
        {
          id:'penerapan-gerak-melingkar',
          title:'Roda, Transmisi & Penerapan Gerak Melingkar',
          mengamati:'Sepeda memakai gir depan besar dan gir belakang kecil yang dihubungkan rantai — kenapa kombinasi ukuran gir memengaruhi seberapa "berat/ringan" kayuhan, dan seberapa cepat roda berputar?',
          kenapa:'Sistem transmisi (gir, roda gigi, katrol) memanfaatkan hubungan antara kecepatan sudut & kecepatan linear pada gerak melingkar untuk MENGUBAH kecepatan putar atau gaya yang ditransmisikan dari satu poros ke poros lain.',
          menelaah:{ text:'Prinsip di balik sistem transmisi:', points:['Dua roda/gir yang dihubungkan rantai punya kecepatan LINEAR yang sama di titik kontaknya (rantai bergerak dengan satu kecepatan yang sama sepanjang lintasannya).', 'Karena v=ωr, gir dengan radius lebih KECIL harus berputar dengan ω lebih BESAR untuk mencapai v yang sama — inilah kenapa gir belakang kecil berputar lebih cepat daripada gir depan besar.', 'Sistem ini memungkinkan transmisi "menukar" kecepatan putar dengan torsi — gir kecil berputar cepat tapi torsi rendah, gir besar berputar lambat tapi torsi tinggi.'] },
          rumus:{ formula:'v₁ = v₂ (di titik kontak) &nbsp;→&nbsp; ω₁r₁ = ω₂r₂', note:'Ini prinsip dasar semua sistem gir, rantai, dan sabuk transmisi.' },
          duniaNyata:[
            { title:'Gir sepeda gunung', text:'Pengendara mengubah kombinasi gir sesuai medan (tanjakan butuh torsi besar/gir kecil, jalan datar butuh kecepatan/gir besar).' },
            { title:'Jam mekanik', text:'Memakai serangkaian roda gigi berbeda ukuran untuk mengubah 1 putaran jarum detik jadi gerakan jarum menit & jam yang jauh lebih lambat.' }
          ],
          kasus:{ soal:'Gir depan sepeda berjari-jari 10cm berputar dengan ω=2 rad/s. Gir belakang berjari-jari 4cm dihubungkan rantai yang sama. Tentukan kecepatan sudut gir belakang.', steps:['Kecepatan linear di rantai sama: ω₁r₁=ω₂r₂.', '2×10=ω₂×4 → 20=4ω₂.', 'ω₂=20/4=5.'], jawaban:'Kecepatan sudut gir belakang = <strong>5 rad/s</strong> — lebih cepat dari gir depan karena radiusnya lebih kecil.' },
          ujiNalar:{ soal:'Kenapa gir sepeda yang lebih KECIL berputar lebih CEPAT daripada gir yang lebih besar, meski dihubungkan rantai yang sama?', options:['Karena gir kecil lebih ringan', 'Karena kecepatan linear rantai di kedua gir harus sama, sehingga gir dengan radius lebih kecil butuh kecepatan sudut lebih besar untuk mengimbanginya', 'Karena gir kecil terbuat dari bahan berbeda', 'Tidak ada hubungan sistematis, itu kebetulan'], correctIndex:1, explanation:'Kecepatan linear rantai harus <strong>sama</strong> di kedua gir — gir dengan radius kecil butuh ω lebih besar untuk mengimbanginya (v=ωr).' }
        }
      ]
    },
    {
      id:'dinamika-gerak',
      title:'Dinamika Gerak',
      meta:'Kasus 07 · 3 investigasi',
      unlocked:true,
      subbabs:[
        {
          id:'hukum-newton-1',
          title:'Hukum Newton I: Kelembaman (Inersia)',
          mengamati:'Penumpang bus yang direm mendadak terdorong ke depan, padahal tak ada yang mendorongnya — tubuhnya "ingin" tetap bergerak maju meski bus sudah berhenti. Kenapa tubuh berperilaku seperti itu?',
          kenapa:'Newton menyimpulkan bahwa benda punya sifat alami untuk MEMPERTAHANKAN keadaan geraknya (diam atau bergerak lurus konstan) kecuali ada gaya luar yang memaksanya berubah — sifat ini disebut kelembaman (inersia).',
          menelaah:{ text:'Isi dan konsekuensi hukum Newton I:', points:['Hukum Newton I: "benda akan tetap diam atau bergerak lurus beraturan, kecuali ada gaya total (resultan) yang bekerja padanya".', 'Benda TIDAK butuh gaya untuk terus bergerak lurus konstan — yang butuh gaya adalah MENGUBAH gerak.', 'Massa yang lebih besar punya inersia lebih besar (lebih "sulit" diubah geraknya) — inilah kenapa truk lebih sulit direm mendadak daripada motor.'] },
          rumus:{ formula:'ΣF = 0 ⟹ benda diam atau bergerak lurus beraturan (v konstan)', note:'Hukum ini juga disebut hukum kelembaman/inersia.' },
          duniaNyata:[
            { title:'Sabuk pengaman mobil', text:'Dirancang menahan tubuh penumpang agar tak terus bergerak maju (akibat inersia) saat mobil berhenti mendadak.' },
            { title:'Trik taplak meja', text:'Taplak bisa ditarik cepat tanpa menjatuhkan piring di atasnya karena inersia piring membuatnya "tetap diam" sesaat.' }
          ],
          kasus:{ soal:'Sebuah kelereng diam di atas meja licin tanpa gesekan. Jelaskan apa yang terjadi pada kelereng jika tak ada gaya yang bekerja padanya, menurut hukum Newton I.', steps:['Menurut hukum Newton I, tanpa resultan gaya, benda mempertahankan keadaan geraknya.', 'Kelereng dalam keadaan diam.', 'Maka kelereng akan tetap diam selamanya kecuali ada gaya luar yang mendorongnya.'], jawaban:'Kelereng akan <strong>tetap diam selamanya</strong> — tidak butuh gaya untuk mempertahankan keadaan diam.' },
          ujiNalar:{ soal:'Kenapa penumpang bus terdorong ke depan saat bus direm mendadak?', options:['Karena ada gaya misterius yang mendorong dari belakang', 'Karena tubuh penumpang cenderung mempertahankan keadaan geraknya (inersia) meski bus sudah berhenti', 'Karena bus bergerak mundur sesaat', 'Karena gravitasi berubah saat pengereman'], correctIndex:1, explanation:'Tubuh penumpang cenderung <strong>mempertahankan keadaan geraknya</strong> (inersia) — itu sebabnya terdorong maju saat bus berhenti mendadak.' }
        },
        {
          id:'hukum-newton-2',
          title:'Hukum Newton II: Hubungan Gaya, Massa & Percepatan',
          mengamati:'Mendorong troli belanja kosong terasa jauh lebih ringan daripada mendorong troli yang penuh berisi barang, meski dorongan yang diberikan sama. Kenapa massa yang lebih besar butuh "usaha" lebih besar untuk mencapai percepatan yang sama?',
          kenapa:'Hukum Newton II mengukur secara presisi hubungan antara gaya, massa, dan percepatan — menjawab "seberapa besar percepatan yang dihasilkan gaya tertentu pada benda bermassa tertentu", sesuatu yang hukum I tak bisa jawab.',
          menelaah:{ text:'Isi hukum Newton II:', points:['Percepatan benda berbanding LURUS dengan resultan gaya yang bekerja padanya, dan berbanding TERBALIK dengan massanya.', 'Gaya sama pada massa lebih besar menghasilkan percepatan lebih kecil (troli penuh sulit dipercepat).', 'Rumus ini sekaligus mendefinisikan satuan gaya: 1 newton = gaya yang dibutuhkan untuk memberi percepatan 1 m/s² pada massa 1 kg.'] },
          rumus:{ formula:'ΣF = m·a &nbsp;&nbsp;(atau&nbsp; a = ΣF/m)', note:'Ini hukum paling sering dipakai dalam soal dinamika gerak.' },
          duniaNyata:[
            { title:'Desain mobil sport', text:'Memakai mesin bertenaga besar (gaya besar) dengan bodi seringan mungkin (massa kecil) untuk memaksimalkan percepatan.' },
            { title:'Peluncuran roket', text:'Roket membakar bahan bakar dalam jumlah besar (gaya dorong besar) untuk mengimbangi massa raksasa yang harus diangkat melawan gravitasi.' }
          ],
          kasus:{ soal:'Sebuah gaya 20N bekerja pada benda bermassa 4kg. Tentukan percepatan yang dihasilkan.', steps:['Gunakan a=ΣF/m.', 'Substitusi: 20/4.', 'Hitung: 5.'], jawaban:'Percepatan benda = <strong>5 m/s²</strong>.' },
          ujiNalar:{ soal:'Jika gaya yang sama (20N) diberikan pada benda bermassa 2kg (setengah dari sebelumnya), berapa percepatan yang dihasilkan?', options:['2,5 m/s²', '5 m/s²', '10 m/s²', '20 m/s²'], correctIndex:2, explanation:'a=20/2=<strong>10 m/s²</strong> — dua kali lipat karena massanya setengah dari sebelumnya.' }
        },
        {
          id:'hukum-newton-3',
          title:'Hukum Newton III: Aksi-Reaksi',
          mengamati:'Seseorang mendorong tembok dengan tangannya — tembok tak bergerak sama sekali, tapi orang itu justru merasakan dorongan BALIK dari tembok ke tangannya. Dari mana "dorongan balik" itu berasal?',
          kenapa:'Newton menyadari bahwa gaya selalu muncul BERPASANGAN — setiap kali benda A memberi gaya pada benda B (aksi), benda B secara OTOMATIS memberi gaya balik yang sama besar tapi berlawanan arah pada benda A (reaksi). Ini bukan pilihan tembok, tapi konsekuensi fundamental cara gaya bekerja di alam.',
          menelaah:{ text:'Ciri khas pasangan aksi-reaksi:', points:['Pasangan aksi-reaksi SELALU bekerja pada dua benda BERBEDA — inilah kenapa keduanya tak saling meniadakan meski sama besar & berlawanan arah.', 'Gaya aksi & reaksi terjadi BERSAMAAN (simultan), bukan salah satu duluan.', 'Roket bisa melaju di ruang hampa karena ia mendorong gas buang ke belakang (aksi) dan gas buang mendorong balik roket ke depan (reaksi) — prinsip ini tak butuh medium apa pun.'] },
          rumus:{ formula:'F_aksi = −F_reaksi (sama besar, berlawanan arah, bekerja pada benda berbeda)', note:'Karena bekerja pada dua benda berbeda, gaya aksi-reaksi TIDAK saling meniadakan pada sistem masing-masing benda.' },
          duniaNyata:[
            { title:'Roket & pesawat jet', text:'Melaju dengan mendorong gas ke belakang (aksi) sehingga terdorong maju (reaksi) — berfungsi bahkan di ruang hampa udara.' },
            { title:'Renang', text:'Perenang mendorong air ke belakang dengan tangan & kaki (aksi) agar tubuhnya terdorong maju (reaksi).' }
          ],
          kasus:{ soal:'Seseorang bermassa 60kg berdiri di atas skateboard mendorong tembok dengan gaya 100N. Jelaskan apa yang terjadi berdasarkan hukum Newton III.', steps:['Orang tersebut memberi gaya aksi 100N pada tembok.', 'Menurut hukum III, tembok memberi gaya reaksi 100N pada orang tersebut, arahnya menjauhi tembok.', 'Karena orang berdiri di atas skateboard (bisa bergerak bebas), gaya reaksi ini membuatnya terdorong menjauhi tembok.'], jawaban:'Orang tersebut akan <strong>terdorong menjauhi tembok</strong> akibat gaya reaksi 100N.' },
          ujiNalar:{ soal:'Kenapa tembok tidak bergerak sama sekali meski menerima gaya reaksi yang sama besar dengan gaya yang diberikan orang padanya?', options:['Karena tembok tidak benar-benar memberi gaya reaksi', 'Karena tembok terhubung dengan bangunan/tanah yang massa efektifnya sangat besar, sehingga percepatan yang dihasilkan sangat kecil (hampir nol)', 'Karena hukum Newton III tidak berlaku untuk benda diam', 'Karena gaya reaksi lebih kecil dari gaya aksi'], correctIndex:1, explanation:'Tembok terhubung dengan bangunan/tanah yang <strong>massa efektifnya sangat besar</strong> — menurut hukum II (a=F/m), massa besar menghasilkan percepatan yang sangat kecil (hampir tak terlihat).' }
        }
      ]
    },
    {
      id:'usaha-energi',
      title:'Usaha dan Energi',
      meta:'Kasus 08 · 3 investigasi',
      unlocked:true,
      subbabs:[
        {
          id:'konsep-usaha',
          title:'Konsep Usaha dalam Fisika',
          mengamati:'Seseorang mendorong tembok sekuat tenaga selama 10 menit sampai berkeringat, tapi tembok tak bergeser sedikit pun. Dalam bahasa sehari-hari orang itu "sudah berusaha keras" — tapi dalam FISIKA, usaha yang dilakukannya = NOL. Kenapa?',
          kenapa:'Fisika mendefinisikan usaha (work) secara berbeda dari bahasa sehari-hari: usaha hanya terjadi jika gaya BERHASIL menggerakkan benda sejauh jarak tertentu — kalau tak ada perpindahan sama sekali, secara fisika usahanya nol, betapa pun besar tenaga yang dikeluarkan.',
          menelaah:{ text:'Definisi usaha secara fisika:', points:['Usaha (W) = gaya (F) × perpindahan (s) SEARAH gaya itu — kalau gaya tak menghasilkan perpindahan, W=0.', 'Kalau gaya tak searah penuh dengan perpindahan, hanya KOMPONEN gaya yang searah perpindahan yang dihitung (W=F·cosθ·s).', 'Usaha bisa positif (gaya searah gerak, menambah energi) atau negatif (gaya berlawanan gerak, mis. gesekan, mengurangi energi).'] },
          rumus:{ formula:'W = F·s·cos θ', note:'θ adalah sudut antara arah gaya dan arah perpindahan. Kalau gaya tegak lurus perpindahan (θ=90°), usaha = 0 karena cos90°=0.' },
          duniaNyata:[
            { title:'Membawa koper berjalan mendatar', text:'Secara fisika, gaya angkat koper (vertikal) tidak melakukan usaha terhadap perpindahan mendatar, meski terasa melelahkan.' },
            { title:'Angkat besi', text:'Melakukan usaha besar karena gaya angkat searah penuh dengan perpindahan vertikal beban.' }
          ],
          kasus:{ soal:'Sebuah gaya 50N mendorong kotak sejauh 4m dengan arah gaya SEARAH perpindahan (θ=0°). Tentukan usaha yang dilakukan.', steps:['Gunakan W=F·s·cosθ.', 'cos0°=1.', 'W=50×4×1=200.'], jawaban:'Usaha yang dilakukan = <strong>200 joule</strong>.' },
          ujiNalar:{ soal:'Seseorang membawa tas berjalan mendatar sejauh 10m, dengan gaya angkat tas yang arahnya VERTIKAL (tegak lurus arah jalan). Berapa usaha yang dilakukan gaya angkat terhadap perpindahan mendatar?', options:['0 joule, karena gaya tegak lurus perpindahan', 'Sama dengan berat tas dikali jarak', 'Tergantung kecepatan berjalan', 'Tidak bisa ditentukan'], correctIndex:0, explanation:'Karena gaya angkat tegak lurus (θ=90°) terhadap perpindahan mendatar, cos90°=0, sehingga usahanya = <strong>0 joule</strong>.' }
        },
        {
          id:'energi-kinetik-potensial',
          title:'Energi Kinetik & Energi Potensial',
          mengamati:'Bola yang dipegang di atas tanah "menyimpan" sesuatu yang akan muncul begitu dilepas (ia akan bergerak makin cepat saat jatuh). Bola yang sedang bergerak jelas punya "sesuatu" terkait gerakannya. Fisika menyebut "sesuatu" ini energi.',
          kenapa:'Energi potensial (tersimpan karena posisi) dan energi kinetik (dimiliki karena gerak) diciptakan untuk menjelaskan bagaimana "kemampuan melakukan usaha" bisa berpindah bentuk — bola yang jatuh mengubah energi potensialnya jadi energi kinetik secara bertahap, tanpa energi itu hilang.',
          menelaah:{ text:'Dua bentuk energi mekanik dasar:', points:['Energi potensial gravitasi (Ep) bergantung pada massa, gravitasi, dan KETINGGIAN benda dari titik acuan.', 'Energi kinetik (Ek) bergantung pada massa dan KECEPATAN benda (kuadrat kecepatan, bukan linear) — kecepatan berpengaruh jauh lebih besar daripada massa.', 'Saat benda jatuh bebas, Ep berkurang tepat sebesar Ek yang bertambah — totalnya (energi mekanik) tetap konstan.'] },
          rumus:{ formula:'Ep = m·g·h &nbsp;·&nbsp; Ek = ½m·v²', note:'Perhatikan Ek bergantung pada v² (kuadrat), sementara Ep bergantung pada h (linear).' },
          duniaNyata:[
            { title:'Roller coaster', text:'Tanjakan awal yang tinggi menyimpan Ep besar, yang berubah jadi Ek (kecepatan tinggi) saat meluncur turun.' },
            { title:'PLTA (pembangkit listrik tenaga air)', text:'Mengubah Ep air di bendungan tinggi jadi Ek air yang mengalir, lalu jadi energi listrik.' }
          ],
          kasus:{ soal:'Sebuah benda bermassa 2kg berada pada ketinggian 5m (g=10 m/s²). Tentukan energi potensialnya.', steps:['Gunakan Ep=mgh.', 'Substitusi: 2×10×5.', 'Hitung: 100.'], jawaban:'Energi potensial benda = <strong>100 joule</strong>.' },
          ujiNalar:{ soal:'Sebuah mobil bermassa 1000kg melaju dengan kecepatan 10 m/s. Berapa energi kinetiknya?', options:['5.000 joule', '10.000 joule', '50.000 joule', '100.000 joule'], correctIndex:2, explanation:'Ek=½×1000×10²=½×1000×100=<strong>50.000 joule</strong>.' }
        },
        {
          id:'kekekalan-energi-daya',
          title:'Hukum Kekekalan Energi & Daya',
          mengamati:'Roller coaster di titik tertinggi bergerak lambat (Ek kecil, Ep besar), lalu meluncur turun jadi sangat cepat (Ek besar, Ep kecil) — tapi ajaibnya, tanpa mesin tambahan, roller coaster bisa naik lagi ke bukit berikutnya (asal tak lebih tinggi dari bukit pertama).',
          kenapa:'Hukum kekekalan energi mekanik menyatakan bahwa dalam sistem tanpa gesekan/hambatan, jumlah energi kinetik dan potensial (energi mekanik total) selalu KONSTAN — energi hanya berpindah bentuk, tak pernah tercipta atau hilang begitu saja.',
          menelaah:{ text:'Konsekuensi hukum kekekalan energi:', points:['Em = Ep + Ek = konstan (pada sistem ideal tanpa gesekan) — inilah kenapa roller coaster tak bisa naik lebih tinggi dari titik awal.', 'Pada sistem NYATA (ada gesekan), sebagian energi mekanik berubah jadi PANAS akibat gesekan — energi total (termasuk panas) tetap konstan, tapi energi mekanik yang berguna berkurang.', 'DAYA (P) mengukur seberapa CEPAT usaha/energi dipindahkan — P=W/t, bukan seberapa besar energi total.'] },
          rumus:{ formula:'Em = Ep + Ek = konstan (ideal) &nbsp;·&nbsp; P = W/t', note:'Daya diukur dalam watt (1 watt = 1 joule per sekon) — dua mesin bisa melakukan usaha total sama tapi berbeda daya kalau waktunya berbeda.' },
          duniaNyata:[
            { title:'Perhitungan daya PLTA', text:'Daya listrik yang dihasilkan dihitung dari laju energi air yang jatuh per satuan waktu, bukan cuma total energinya.' },
            { title:'Efisiensi mesin kendaraan', text:'Diukur dari seberapa besar energi bahan bakar berubah jadi energi gerak berguna, bukan terbuang jadi panas akibat gesekan mesin.' }
          ],
          kasus:{ soal:'Sebuah benda bermassa 1kg dijatuhkan dari ketinggian 20m (g=10 m/s², abaikan gesekan udara). Tentukan kecepatannya tepat saat menyentuh tanah, memakai hukum kekekalan energi.', steps:['Ep awal = Ek akhir, karena energi mekanik konstan: mgh = ½mv².', 'Massa saling coret: gh=½v². 10×20=½v².', '200=½v² → v²=400 → v=√400=20.'], jawaban:'Kecepatan saat menyentuh tanah = <strong>20 m/s</strong>.' },
          ujiNalar:{ soal:'Dua mesin melakukan usaha total yang SAMA (1000 joule), tapi mesin A menyelesaikannya dalam 10 detik, mesin B dalam 20 detik. Mesin mana yang memiliki daya lebih besar?', options:['Mesin A, karena daya = usaha/waktu, dan waktunya lebih singkat', 'Mesin B, karena bekerja lebih lama', 'Keduanya sama karena usahanya sama', 'Tidak bisa ditentukan dari informasi ini'], correctIndex:0, explanation:'Daya = usaha/waktu. Mesin A: 1000/10=100 watt. Mesin B: 1000/20=50 watt. <strong>Mesin A</strong> berdaya lebih besar meski usahanya sama.' }
        }
      ]
    },
    {
      id:'momentum-impuls',
      title:'Momentum dan Impuls',
      meta:'Kasus 09 · 3 investigasi',
      unlocked:true,
      subbabs:[
        {
          id:'konsep-momentum',
          title:'Konsep Momentum: Kesulitan Menghentikan Benda Bergerak',
          mengamati:'Truk besar yang melaju pelan jauh lebih sulit dihentikan daripada motor yang melaju cepat, meski keduanya "bergerak". Ada besaran yang menggabungkan MASSA dan KECEPATAN sekaligus untuk mengukur "seberapa sulit menghentikan" sebuah benda bergerak.',
          kenapa:'Momentum diciptakan untuk mengukur "kuantitas gerak" suatu benda — menggabungkan massa dan kecepatan karena KEDUANYA menentukan seberapa besar usaha yang dibutuhkan untuk mengubah/menghentikan gerak benda itu.',
          menelaah:{ text:'Sifat dasar momentum:', points:['Momentum (p) = massa × kecepatan — benda bermassa besar berkecepatan kecil bisa punya momentum sama besar dengan benda bermassa kecil berkecepatan tinggi.', 'Momentum adalah besaran VEKTOR, mengikuti arah kecepatan bendanya.', 'Benda diam (v=0) selalu punya momentum nol, tak peduli seberapa besar massanya.'] },
          rumus:{ formula:'p = m·v', note:'Satuan momentum: kg·m/s. Perhatikan strukturnya mirip Ek=½mv², tapi momentum linear terhadap v, sementara energi kinetik kuadratik terhadap v.' },
          duniaNyata:[
            { title:'Standar keselamatan kendaraan', text:'Jarak pengereman aman truk dirancang mempertimbangkan momentumnya yang besar.' },
            { title:'Olahraga tinju', text:'Atlet melatih memaksimalkan momentum pukulan (kombinasi massa tubuh & kecepatan gerakan) untuk efek maksimal.' }
          ],
          kasus:{ soal:'Sebuah truk bermassa 2000kg melaju 5 m/s, dan sebuah motor bermassa 200kg melaju 40 m/s. Bandingkan momentum keduanya.', steps:['p_truk=2000×5=10.000 kg·m/s.', 'p_motor=200×40=8.000 kg·m/s.', 'Bandingkan kedua nilai.'], jawaban:'Momentum truk (<strong>10.000 kg·m/s</strong>) tetap sedikit lebih besar dari motor (<strong>8.000 kg·m/s</strong>) meski kecepatannya jauh lebih rendah — karena massanya jauh lebih besar.' },
          ujiNalar:{ soal:'Benda A bermassa 5kg bergerak 4 m/s, benda B bermassa 10kg bergerak 2 m/s. Bagaimana perbandingan momentum keduanya?', options:['A lebih besar', 'B lebih besar', 'Sama besar', 'Tidak bisa dibandingkan'], correctIndex:2, explanation:'pA=5×4=20 kg·m/s, pB=10×2=20 kg·m/s — <strong>sama besar</strong>.' }
        },
        {
          id:'impuls-hubungan-momentum',
          title:'Impuls & Hubungannya dengan Momentum',
          mengamati:'Pemain bulu tangkis "menahan" gerakan raketnya sesaat setelah memukul shuttlecock (follow-through), sementara petinju justru memukul secepat & sesingkat mungkin. Kenapa teknik keduanya berbeda?',
          kenapa:'Impuls diciptakan untuk mengukur efek gabungan GAYA dan LAMA WAKTU gaya itu bekerja — gaya kecil yang bekerja lama bisa menghasilkan efek sama dengan gaya besar yang bekerja sebentar.',
          menelaah:{ text:'Hubungan impuls dan momentum:', points:['Impuls (I) = gaya × selang waktu gaya bekerja (F×Δt).', 'Impuls yang dialami benda SAMA DENGAN perubahan momentumnya (I=Δp) — konsekuensi langsung dari hukum Newton II.', 'Memperpanjang waktu kontak (Δt) mengurangi gaya (F) yang dibutuhkan untuk perubahan momentum yang sama — inilah prinsip di balik airbag mobil & matras olahraga.'] },
          rumus:{ formula:'I = F·Δt = Δp (perubahan momentum)', note:'Ini sebabnya airbag "melunakkan" benturan — bukan mengurangi perubahan momentum (tetap sama), tapi memperpanjang waktu kontak sehingga gaya yang dirasakan tubuh jauh lebih kecil.' },
          duniaNyata:[
            { title:'Airbag mobil & matras olahraga', text:'Memperpanjang waktu kontak saat benturan untuk mengurangi gaya yang dialami tubuh.' },
            { title:'Teknik menangkap bola', text:'Mengulurkan tangan mengikuti arah bola mengurangi rasa sakit dengan memperpanjang waktu kontak.' }
          ],
          kasus:{ soal:'Sebuah bola bermassa 0,5kg melaju 10 m/s ditangkap hingga berhenti (v akhir=0) dalam waktu 0,2 sekon. Tentukan gaya rata-rata yang bekerja pada bola.', steps:['Hitung perubahan momentum: Δp=m(v_akhir−v_awal)=0,5×(0−10)=−5 kg·m/s.', 'Gunakan I=FΔt=Δp: F×0,2=−5.', 'F=−5/0,2=−25.'], jawaban:'Gaya rata-rata yang bekerja = <strong>25 N</strong> (arah berlawanan dengan gerak bola).' },
          ujiNalar:{ soal:'Kenapa menangkap bola cepat dengan tangan yang "mengalir mengikuti" bola terasa lebih tidak sakit daripada menangkapnya dengan tangan kaku?', options:['Karena momentum bola berkurang saat tangan mengalir', 'Karena memperpanjang waktu kontak mengurangi gaya yang dibutuhkan untuk perubahan momentum yang sama (I=FΔt=Δp tetap)', 'Karena bola kehilangan energi saat tangan bergerak', 'Tidak ada perbedaan sebenarnya, hanya perasaan subjektif'], correctIndex:1, explanation:'Δp yang harus terjadi tetap sama, tapi memperpanjang Δt membuat <strong>gaya F yang dibutuhkan lebih kecil</strong> (I=FΔt=Δp).' }
        },
        {
          id:'kekekalan-momentum-tumbukan',
          title:'Hukum Kekekalan Momentum & Jenis Tumbukan',
          mengamati:'Dua bola biliar bertumbukan — sebelum tumbukan salah satu diam, setelah tumbukan bola yang tadinya diam bergerak dan bola yang tadinya bergerak melambat/berhenti. Total "gerak" sistem tampak berpindah, bukan hilang.',
          kenapa:'Hukum kekekalan momentum menyatakan bahwa pada sistem tertutup (tak ada gaya luar signifikan), TOTAL momentum sebelum tumbukan = total momentum sesudah tumbukan — konsekuensi langsung dari hukum Newton III.',
          menelaah:{ text:'Dua jenis tumbukan dengan konsekuensi berbeda:', points:['Total momentum SEBELUM tumbukan = total momentum SESUDAH tumbukan, meski momentum masing-masing benda individual berubah.', '<strong>Tumbukan lenting sempurna</strong>: energi kinetik total JUGA kekal (tak ada energi hilang jadi panas/bunyi) — benda memantul sempurna.', '<strong>Tumbukan tidak lenting sama sekali</strong>: kedua benda menyatu bergerak bersama setelah tumbukan (energi kinetik banyak hilang jadi panas/deformasi).'] },
          rumus:{ formula:'m₁v₁ + m₂v₂ (sebelum) = m₁v₁′ + m₂v₂′ (sesudah)', note:'Momentum SELALU kekal pada sistem tertutup, tapi energi kinetik hanya kekal pada tumbukan lenting sempurna.' },
          duniaNyata:[
            { title:'Uji tabrak mobil (crash test)', text:'Mempelajari kekekalan momentum untuk merancang struktur mobil yang menyerap energi tumbukan demi keselamatan penumpang.' },
            { title:'Biliar & bowling', text:'Seluruhnya bergantung pada prinsip kekekalan momentum saat bola saling bertumbukan.' }
          ],
          kasus:{ soal:'Sebuah bola bermassa 2kg bergerak 6 m/s menabrak bola diam bermassa 4kg, lalu keduanya menyatu bergerak bersama. Tentukan kecepatan gabungan setelah tumbukan.', steps:['Gunakan kekekalan momentum: m₁v₁+m₂v₂ = (m₁+m₂)v′.', 'Substitusi: (2×6)+(4×0) = (2+4)v′.', '12 = 6v′ → v′=2.'], jawaban:'Kecepatan gabungan setelah tumbukan = <strong>2 m/s</strong>.' },
          ujiNalar:{ soal:'Pada tumbukan tidak lenting sama sekali (dua benda menyatu), apa yang TETAP kekal dan apa yang TIDAK?', options:['Momentum kekal, energi kinetik total TIDAK kekal (sebagian berubah jadi panas/deformasi)', 'Energi kinetik kekal, momentum tidak kekal', 'Keduanya kekal sepenuhnya', 'Keduanya tidak kekal sama sekali'], correctIndex:0, explanation:'<strong>Momentum selalu kekal</strong> pada sistem tertutup, tapi pada tumbukan tak lenting, sebagian energi kinetik berubah jadi panas/bunyi/deformasi.' }
        }
      ]
    },
    {
      id:'fluida',
      title:'Fluida',
      meta:'Kasus 10 · 3 investigasi',
      unlocked:true,
      subbabs:[
        {
          id:'tekanan-hidrostatis',
          title:'Tekanan & Tekanan Hidrostatis',
          mengamati:'Penyelam merasakan tekanan di telinga yang makin kuat makin dalam ia menyelam. Kenapa kedalaman begitu berpengaruh pada tekanan yang dirasakan?',
          kenapa:'Tekanan hidrostatis diciptakan untuk menjelaskan bagaimana berat fluida di atas suatu titik menghasilkan gaya yang "menekan" ke segala arah pada titik itu — makin dalam, makin banyak/berat kolom fluida di atasnya, makin besar tekanannya.',
          menelaah:{ text:'Sifat tekanan hidrostatis:', points:['Tekanan (P) = gaya per satuan luas (P=F/A) — konsep umum yang berlaku pada zat padat maupun fluida.', 'Tekanan hidrostatis bergantung pada kerapatan fluida (ρ), gravitasi (g), dan kedalaman (h) — BUKAN pada bentuk/luas wadah.', 'Tekanan pada kedalaman yang sama akan SAMA besar, baik di kolam sempit maupun luas — hanya kedalaman yang menentukan.'] },
          rumus:{ formula:'P = ρ·g·h', note:'Tekanan hidrostatis tidak bergantung pada bentuk wadah — hanya kedalaman dan jenis fluidanya.' },
          duniaNyata:[
            { title:'Desain kapal selam', text:'Memperhitungkan tekanan hidrostatis ekstrem di laut dalam agar strukturnya tak remuk.' },
            { title:'Struktur bendungan', text:'Dibangun lebih tebal di bagian dasar karena tekanan air di situ jauh lebih besar daripada di permukaan.' }
          ],
          kasus:{ soal:'Tentukan tekanan hidrostatis air pada kedalaman 10m (ρ_air=1000 kg/m³, g=10 m/s²).', steps:['Gunakan P=ρgh.', 'Substitusi: 1000×10×10.', 'Hitung: 100.000.'], jawaban:'Tekanan hidrostatis = <strong>100.000 Pa (pascal)</strong>.' },
          ujiNalar:{ soal:'Dua kolam dengan bentuk sangat berbeda (satu sempit, satu luas) memiliki kedalaman air yang SAMA. Bagaimana perbandingan tekanan hidrostatis di dasar keduanya?', options:['Kolam luas tekanannya lebih besar', 'Kolam sempit tekanannya lebih besar', 'Sama besar, karena tekanan hidrostatis hanya bergantung kedalaman, bukan bentuk wadah', 'Tidak bisa dibandingkan tanpa tahu volume totalnya'], correctIndex:2, explanation:'Tekanan hidrostatis <strong>hanya bergantung pada kedalaman</strong>, bukan bentuk atau luas wadah — jadi kedua kolam punya tekanan sama di dasar.' }
        },
        {
          id:'hukum-pascal',
          title:'Hukum Pascal: Melipatgandakan Gaya dengan Fluida',
          mengamati:'Dongkrak hidrolik di bengkel bisa mengangkat mobil seberat 1,5 ton hanya dengan tekanan tangan manusia pada tuas kecil. Bagaimana gaya sekecil itu bisa mengangkat beban seberat itu?',
          kenapa:'Blaise Pascal menemukan bahwa tekanan yang diberikan pada fluida TERTUTUP diteruskan SAMA BESAR ke segala arah — prinsip ini memungkinkan gaya kecil pada penampang sempit menghasilkan gaya besar pada penampang luas.',
          menelaah:{ text:'Cara kerja sistem hidrolik:', points:['Karena P=F/A sama di kedua sisi sistem hidrolik tertutup, maka F₁/A₁=F₂/A₂.', 'Kalau A₂ (penampang keluaran) jauh lebih besar dari A₁ (penampang masukan), maka F₂ jauh lebih besar dari F₁.', 'Ini bukan "menciptakan energi dari ketiadaan" — gaya keluaran lebih besar, tapi jarak perpindahannya lebih kecil, sehingga total usaha tetap seimbang.'] },
          rumus:{ formula:'F₁/A₁ = F₂/A₂', note:'Semakin besar rasio luas penampang keluaran terhadap penampang masukan, semakin besar pelipatgandaan gayanya.' },
          duniaNyata:[
            { title:'Dongkrak hidrolik', text:'Mengangkat mobil dengan gaya tangan manusia yang kecil.' },
            { title:'Rem hidrolik mobil', text:'Meneruskan gaya injakan kaki pengemudi ke seluruh sistem pengereman roda secara merata.' }
          ],
          kasus:{ soal:'Sebuah dongkrak hidrolik: penampang masukan A₁=5cm², penampang keluaran A₂=100cm². Gaya masukan F₁=50N. Tentukan gaya keluaran F₂.', steps:['Gunakan F₁/A₁=F₂/A₂.', '50/5=F₂/100 → 10=F₂/100.', 'F₂=10×100=1000.'], jawaban:'Gaya keluaran = <strong>1.000 N</strong> — dilipatgandakan 20 kali dari gaya masukan.' },
          ujiNalar:{ soal:'Kenapa dongkrak hidrolik yang melipatgandakan gaya TIDAK melanggar hukum kekekalan energi?', options:['Karena hukum Pascal adalah pengecualian dari hukum kekekalan energi', 'Karena meski gaya keluaran lebih besar, jarak perpindahannya lebih kecil, sehingga total usaha (kerja) tetap seimbang', 'Karena energi memang bisa diciptakan dari fluida', 'Karena dongkrak hidrolik menggunakan sumber energi tersembunyi'], correctIndex:1, explanation:'Gaya keluaran lebih besar tapi <strong>jarak perpindahannya lebih kecil</strong> — total usaha (W=F×s) tetap seimbang di kedua sisi.' }
        },
        {
          id:'hukum-archimedes-bernoulli',
          title:'Hukum Archimedes & Persamaan Bernoulli',
          mengamati:'Kapal besi raksasa bisa mengapung di air, padahal besi jauh lebih rapat dari air dan seharusnya tenggelam. Sementara itu, kenapa pesawat terbang bisa terangkat ke udara hanya karena bentuk sayapnya?',
          kenapa:'Dua fenomena ini dijelaskan oleh dua prinsip fluida berbeda: hukum Archimedes (gaya apung dari fluida yang dipindahkan benda) menjelaskan kapal mengapung, sementara persamaan Bernoulli (hubungan kecepatan aliran & tekanan) menjelaskan gaya angkat sayap pesawat.',
          menelaah:{ text:'Dua prinsip fluida yang berbeda:', points:['Hukum Archimedes: gaya apung (F_a) sama besar dengan berat fluida yang dipindahkan oleh benda — kapal besi mengapung karena BENTUKnya (berongga) memindahkan volume air yang besar.', 'Persamaan Bernoulli: tempat dengan KECEPATAN aliran lebih tinggi memiliki TEKANAN lebih rendah.', 'Pada sayap pesawat, bentuknya membuat udara di atas mengalir lebih cepat daripada di bawah, sehingga tekanan di atas lebih rendah — menghasilkan gaya angkat neto ke atas.'] },
          rumus:{ formula:'F_a = ρ_fluida · g · V_terendam (Archimedes)', note:'Kapal besi mengapung karena bentuknya memindahkan volume air yang besar — bukan karena besi lebih ringan dari air (justru sebaliknya).' },
          duniaNyata:[
            { title:'Kapal selam', text:'Menyesuaikan volume air di tangki ballast untuk mengatur daya apung saat menyelam/mengapung.' },
            { title:'Sayap pesawat & spoiler mobil balap', text:'Sayap pesawat menghasilkan gaya angkat, sementara spoiler mobil balap didesain menghasilkan gaya tekan ke bawah — keduanya memakai prinsip Bernoulli.' }
          ],
          kasus:{ soal:'Sebuah benda dengan volume terendam 0,02 m³ dicelupkan ke air (ρ_air=1000 kg/m³, g=10 m/s²). Tentukan gaya apung yang dialaminya.', steps:['Gunakan F_a=ρgV.', 'Substitusi: 1000×10×0,02.', 'Hitung: 200.'], jawaban:'Gaya apung = <strong>200 N</strong>.' },
          ujiNalar:{ soal:'Kenapa kapal besi raksasa bisa mengapung di air, padahal besi jauh lebih rapat daripada air?', options:['Karena besi berubah sifat saat berada di air', 'Karena bentuk kapal yang berongga memindahkan volume air yang besar, menghasilkan gaya apung yang cukup menahan beratnya', 'Karena air laut lebih ringan dari air biasa', 'Karena kapal sebenarnya tidak benar-benar mengapung'], correctIndex:1, explanation:'Bentuk kapal yang <strong>berongga</strong> memindahkan volume air yang besar, menghasilkan gaya apung yang cukup menahan berat totalnya, meski bahan besinya sendiri lebih rapat dari air.' }
        }
      ]
    }
  ]
};
