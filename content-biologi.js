window.CONTENT_BIOLOGI = {
  key: 'biologi',
  label: 'Biologi',
  icon: '❦',
  eyebrow: 'Divisi Riset — Kehidupan & Sistemnya',
  desc: 'Biologi sering dimulai dari pertanyaan aneh yang tidak bisa dijawab teknologi zamannya — seperti "penyakit apa yang penyebabnya lebih kecil dari bakteri, sampai tidak tersaring apa pun?" Kamu akan menelusuri jejak pertanyaan seperti itu.',
  babs: [
    {
      id:'hakikat-biologi',
      title:'Hakikat Ilmu Biologi dan Metode Ilmiah',
      meta:'Kasus 01 · 3 investigasi',
      unlocked:true,
      subbabs:[
        {
          id:'ciri-makhluk-hidup',
          title:'Ciri-Ciri Makhluk Hidup: Membedakan yang Hidup dan Tak Hidup',
          mengamati:'Kristal garam bisa "tumbuh" membesar dalam larutan jenuh, dan api bisa "menyebar" serta "berkembang biak" (menyalakan benda lain). Tapi tak ada yang menganggap kristal atau api sebagai makhluk hidup. Apa yang sebenarnya membedakan "hidup" dari sekadar "berubah/bergerak"?',
          kenapa:'Biologi butuh definisi presisi tentang apa itu "makhluk hidup" — bukan sekadar intuisi — karena definisi ini menentukan batas ilmu biologi itu sendiri (status virus misalnya terus diperdebatkan karena hanya memenuhi sebagian ciri).',
          menelaah:{ text:'Kombinasi ciri yang mendefinisikan makhluk hidup:', points:['Makhluk hidup dicirikan oleh KOMBINASI beberapa sifat sekaligus: bernapas, bergerak, tumbuh & berkembang, bereproduksi, peka terhadap rangsang, dan memerlukan nutrisi.', 'Kristal "tumbuh" hanya dengan menempelkan materi dari LUAR (tanpa proses internal), beda dengan makhluk hidup yang tumbuh lewat pembelahan sel & metabolisme internal.', 'Api "menyebar" tapi tak punya materi genetik yang diwariskan dan tak punya struktur sel — "reproduksinya" cuma memindahkan reaksi kimia, bukan menghasilkan keturunan dengan informasi genetik.'] },
          rumus:{ formula:'Makhluk hidup = bernapas + bergerak + tumbuh + bereproduksi + peka rangsang + butuh nutrisi (kombinasi, bukan satu saja)', note:'Tidak ada satu ciri tunggal yang cukup — harus kombinasi beberapa ciri sekaligus.' },
          duniaNyata:[
            { title:'Perdebatan status virus', text:'Berpusat pada fakta virus hanya memenuhi sebagian ciri makhluk hidup (punya materi genetik, bereproduksi) tapi tidak yang lain (tak bermetabolisme mandiri).' },
            { title:'Astrobiologi', text:'Pencarian tanda kehidupan di planet lain memakai kriteria serupa untuk menilai apakah suatu fenomena menunjukkan "kehidupan".' }
          ],
          kasus:{ soal:'Kristal garam yang direndam dalam larutan garam jenuh akan "tumbuh" membesar seiring waktu. Jelaskan kenapa ini BUKAN pertumbuhan dalam pengertian biologis.', steps:['Pertumbuhan kristal terjadi dari penambahan materi dari luar yang menempel di permukaan, tanpa proses internal apa pun.', 'Pertumbuhan biologis melibatkan pembelahan sel dan proses metabolisme internal.', 'Kristal tidak memiliki sel, tidak bermetabolisme, dan tidak mewariskan informasi genetik — ia hanya "menempel", bukan "tumbuh" secara biologis.'], jawaban:'Kristal bukan tumbuh secara biologis karena hanya <strong>menempelkan materi dari luar tanpa proses internal (sel, metabolisme, pewarisan genetik)</strong>.' },
          ujiNalar:{ soal:'Kenapa status virus sebagai "makhluk hidup" masih diperdebatkan ilmuwan?', options:['Karena virus terlalu kecil untuk diteliti', 'Karena virus memenuhi sebagian ciri makhluk hidup (punya materi genetik, bisa bereproduksi) tapi tidak ciri lainnya (tidak bermetabolisme mandiri tanpa sel inang)', 'Karena virus tidak pernah diteliti secara ilmiah', 'Karena semua ilmuwan sepakat virus adalah makhluk hidup'], correctIndex:1, explanation:'Virus memenuhi <strong>sebagian</strong> ciri makhluk hidup tapi tidak semuanya — status ini yang terus diperdebatkan.' }
        },
        {
          id:'cabang-biologi',
          title:'Cabang-Cabang Biologi: Memetakan Kompleksitas Kehidupan',
          mengamati:'Kehidupan terentang dari molekul DNA sekecil nanometer sampai ekosistem hutan seluas ribuan hektar — terlalu luas untuk dipelajari satu orang secara mendalam sekaligus di semua level.',
          kenapa:'Cabang-cabang biologi diciptakan sebagai cara membagi kompleksitas kehidupan jadi SKALA yang bisa dipelajari mendalam — tiap cabang fokus pada level organisasi kehidupan yang berbeda.',
          menelaah:{ text:'Tingkat organisasi kehidupan sebagai dasar pembagian cabang biologi:', points:['Biologi dipelajari berdasar tingkat organisasi: molekuler/genetika, seluler, jaringan-organ-sistem organ, organisme, populasi, komunitas & ekosistem.', 'Cabang seperti anatomi, fisiologi, taksonomi, mikrobiologi masing-masing mendalami aspek tertentu dari level-level organisasi ini.', 'Pemahaman di satu level sering menjelaskan fenomena di level lain — misalnya mutasi gen (molekuler) bisa menjelaskan variasi sifat dalam populasi.'] },
          rumus:{ formula:'Molekuler → Seluler → Jaringan/Organ → Organisme → Populasi → Ekosistem', note:'Ini urutan tingkat organisasi kehidupan dari yang paling kecil sampai paling luas.' },
          duniaNyata:[
            { title:'Penelitian kanker', text:'Menggabungkan genetika (mutasi penyebab), biologi sel (pembelahan tak terkendali), dan fisiologi (dampak pada organ) sekaligus.' },
            { title:'Konservasi spesies langka', text:'Memerlukan pemahaman ekologi (habitat), genetika (keragaman populasi), dan perilaku (pola reproduksi).' }
          ],
          kasus:{ soal:'Seorang peneliti mempelajari kenapa populasi kupu-kupu di suatu hutan menurun drastis dalam 10 tahun terakhir. Cabang biologi apa saja yang mungkin relevan?', steps:['Ekologi relevan untuk memahami interaksi kupu-kupu dengan lingkungan, predator, dan sumber makanannya.', 'Genetika relevan untuk memeriksa apakah ada penurunan keragaman genetik yang membuat populasi rentan.', 'Fisiologi/perilaku relevan untuk memahami apakah ada perubahan pola makan/reproduksi yang terganggu.'], jawaban:'Penelitian ini kemungkinan melibatkan <strong>ekologi, genetika, dan fisiologi/perilaku</strong> sekaligus.' },
          ujiNalar:{ soal:'Kenapa biologi dibagi menjadi banyak cabang berdasarkan tingkat organisasi kehidupan?', options:['Karena biologi terlalu membosankan jika tidak dibagi-bagi', 'Karena kompleksitas kehidupan terentang dari skala molekul sampai ekosistem, dan setiap cabang memungkinkan pendalaman fokus pada satu level tertentu', 'Karena setiap cabang biologi tidak berhubungan satu sama lain', 'Karena pembagian ini hanya untuk keperluan administrasi sekolah'], correctIndex:1, explanation:'Kompleksitas kehidupan yang sangat luas memerlukan <strong>pembagian fokus per level organisasi</strong>.' }
        },
        {
          id:'langkah-metode-ilmiah-biologi',
          title:'Metode Ilmiah dalam Penelitian Biologi',
          mengamati:'Seorang peneliti ingin tahu kenapa tanaman di dekat jalan raya tumbuh lebih kerdil daripada tanaman sejenis di area yang jauh dari jalan. Ada banyak faktor yang bisa jadi penyebab — bagaimana mengidentifikasi penyebab sebenarnya?',
          kenapa:'Penelitian biologi memerlukan metode ilmiah yang sistematis karena sistem hidup sangat kompleks dengan banyak variabel yang saling terkait — tanpa metode yang ketat, mudah salah menyimpulkan penyebab yang sebenarnya cuma kebetulan.',
          menelaah:{ text:'Elemen kunci metode ilmiah dalam biologi:', points:['Perlu memperhatikan VARIABEL BEBAS (yang diteliti pengaruhnya), VARIABEL TERIKAT (yang diukur sebagai hasil), dan VARIABEL KONTROL (yang dijaga tetap sama).', 'Penelitian biologi sering memerlukan REPLIKASI (mengulang percobaan pada banyak sampel) karena variasi alami antar individu makhluk hidup besar.', 'Kelompok KONTROL (yang tak diberi perlakuan) penting untuk perbandingan — tanpa kontrol, tak bisa dipastikan efek yang diamati benar-benar dari faktor yang diteliti.'] },
          rumus:{ formula:'Variabel bebas + Variabel terikat + Variabel kontrol + Replikasi + Kelompok kontrol = eksperimen valid', note:'Kelima elemen ini adalah standar minimum eksperimen biologi yang bisa dipercaya.' },
          duniaNyata:[
            { title:'Uji klinis obat baru', text:'Selalu memakai kelompok kontrol (plasebo) dan replikasi (ratusan/ribuan pasien) untuk memastikan efek obat bukan kebetulan.' },
            { title:'Penelitian dampak pestisida pada lebah', text:'Memerlukan kontrol ketat variabel lain (cuaca, jenis bunga) untuk memastikan pestisida benar-benar penyebab penurunan populasi.' }
          ],
          kasus:{ soal:'Seorang siswa ingin menguji apakah musik memengaruhi pertumbuhan tanaman. Ia menanam 1 tanaman sambil diputarkan musik, dan 1 tanaman lain tanpa musik, tapi menaruh keduanya di lokasi berbeda dengan pencahayaan berbeda. Apa kesalahan metodologisnya?', steps:['Variabel lain (pencahayaan) tidak dikendalikan sama antara kedua tanaman.', 'Hanya 1 tanaman per kelompok berarti tidak ada replikasi.', 'Kesimpulan tentang pengaruh musik jadi tidak valid karena terlalu banyak variabel yang tidak terkontrol.'], jawaban:'Kesalahannya adalah <strong>tidak mengendalikan variabel lain (pencahayaan) dan tidak ada replikasi</strong>.' },
          ujiNalar:{ soal:'Kenapa penelitian biologi sering memerlukan REPLIKASI (mengulang percobaan pada banyak sampel), bukan cukup 1 sampel saja?', options:['Karena replikasi membuat penelitian terlihat lebih rumit', 'Karena variasi alami antar individu makhluk hidup cukup besar, sehingga satu sampel saja bisa menyesatkan (kebetulan), sementara pola pada banyak sampel lebih bisa dipercaya', 'Karena replikasi diwajibkan oleh hukum', 'Karena satu sampel selalu salah'], correctIndex:1, explanation:'Variasi alami antar individu makhluk hidup <strong>cukup besar</strong>, sehingga satu sampel bisa menyesatkan.' }
        }
      ]
    },
    {
      id:'keanekaragaman-hayati',
      title:'Keanekaragaman Hayati',
      meta:'Kasus 02 · 3 investigasi',
      unlocked:true,
      subbabs:[
        {
          id:'tiga-tingkat-keanekaragaman',
          title:'Tiga Tingkat Keanekaragaman Hayati: Gen, Jenis, Ekosistem',
          mengamati:'Ada ratusan varietas padi berbeda di Indonesia (semuanya spesies sama), ada ribuan SPESIES berbeda dari kupu-kupu di dunia, dan ada berbagai jenis EKOSISTEM berbeda. "Keanekaragaman hayati" ternyata beroperasi pada level yang berbeda-beda sekaligus.',
          kenapa:'Memisahkan keanekaragaman hayati jadi 3 tingkat penting karena strategi KONSERVASI yang dibutuhkan untuk melindungi tiap tingkat sangat berbeda satu sama lain.',
          menelaah:{ text:'Tiga tingkat keanekaragaman hayati:', points:['Keanekaragaman GEN adalah variasi dalam satu spesies yang sama (mis. varietas padi, ras anjing).', 'Keanekaragaman JENIS (spesies) adalah variasi antar spesies berbeda dalam satu area — inilah yang paling sering dimaksud orang awam saat bicara "keanekaragaman hayati".', 'Keanekaragaman EKOSISTEM adalah variasi jenis-jenis ekosistem yang berbeda (hutan hujan, gurun, terumbu karang).'] },
          rumus:{ formula:'Keanekaragaman hayati = gen + jenis + ekosistem', note:'Ketiga tingkat ini butuh strategi konservasi yang berbeda-beda.' },
          duniaNyata:[
            { title:'Bank benih global', text:'Menyimpan keanekaragaman GEN berbagai varietas tanaman pangan untuk berjaga-jaga dari kepunahan varietas tertentu.' },
            { title:'Taman nasional', text:'Dirancang melindungi keanekaragaman EKOSISTEM, karena spesies-spesies di dalamnya saling bergantung pada ekosistem yang utuh.' }
          ],
          kasus:{ soal:'Sebuah kebun memiliki 50 pohon mangga dari varietas yang sama persis (klon identik hasil cangkok). Jelaskan mengapa ini menunjukkan keanekaragaman GEN yang RENDAH, meski jumlah pohonnya banyak.', steps:['Keanekaragaman gen diukur dari variasi materi genetik antar individu, bukan jumlah individu.', 'Karena semua pohon adalah klon dari varietas yang sama persis, materi genetiknya identik antar satu pohon dengan pohon lainnya.', 'Meski jumlahnya 50 pohon, keanekaragaman genetiknya setara dengan hanya memiliki 1 "individu genetik".'], jawaban:'Keanekaragaman gen rendah karena semua pohon memiliki <strong>materi genetik yang identik</strong> (klon).' },
          ujiNalar:{ soal:'Kenapa melindungi SATU spesies langka saja tidak cukup untuk konservasi, dan taman nasional dirancang melindungi keanekaragaman EKOSISTEM?', options:['Karena satu spesies tidak penting untuk dilindungi', 'Karena spesies-spesies dalam suatu ekosistem saling bergantung satu sama lain, sehingga melindungi ekosistem secara utuh melindungi banyak spesies sekaligus beserta hubungan di antaranya', 'Karena ekosistem lebih murah untuk dilindungi', 'Karena spesies langka biasanya tidak penting bagi ekosistem'], correctIndex:1, explanation:'Spesies-spesies <strong>saling bergantung</strong> — melindungi ekosistem secara utuh melindungi banyak spesies sekaligus.' }
        },
        {
          id:'klasifikasi-taksonomi',
          title:'Klasifikasi Makhluk Hidup: Mengorganisir Jutaan Spesies',
          mengamati:'Diperkirakan ada 8-10 juta spesies makhluk hidup di bumi. Tanpa sistem pengelompokan, mustahil ilmuwan di seluruh dunia bisa berkomunikasi tentang spesies yang sama tanpa kebingungan.',
          kenapa:'Sistem klasifikasi (taksonomi) diciptakan Carl Linnaeus untuk memberi tiap spesies nama ilmiah yang unik & universal, sekaligus mengelompokkan spesies berdasar kemiripan ciri & kekerabatan evolusi.',
          menelaah:{ text:'Struktur sistem klasifikasi:', points:['Tersusun hierarkis dari yang paling UMUM ke paling SPESIFIK: Kingdom → Filum/Divisi → Kelas → Ordo → Famili → Genus → Spesies.', 'Makin ke bawah hierarki, makin spesifik & makin mirip ciri organisme yang dikelompokkan bersama.', 'Nama ilmiah memakai sistem BINOMIAL NOMENCLATURE (2 kata Latin): genus + penunjuk spesies, keduanya dicetak miring.'] },
          rumus:{ formula:'Nama ilmiah = Genus + penunjuk spesies (2 kata Latin, dicetak miring)', note:'Contoh: Homo sapiens (manusia), Panthera leo (singa).' },
          duniaNyata:[
            { title:'Nama ilmiah mencegah kebingungan', text:'"Kentang" punya banyak nama lokal berbeda tiap bahasa, tapi Solanum tuberosum dikenali ilmuwan di seluruh dunia.' },
            { title:'Identifikasi spesies invasif', text:'Bergantung pada sistem klasifikasi yang presisi untuk membedakannya dari spesies asli yang mirip.' }
          ],
          kasus:{ soal:'Manusia diklasifikasikan sebagai Homo sapiens, sementara simpanse Pan troglodytes. Keduanya berada dalam famili yang sama (Hominidae). Apa artinya kesamaan famili ini?', steps:['Berada dalam famili yang sama berarti manusia dan simpanse memiliki kekerabatan evolusi yang cukup dekat.', 'Tapi keduanya berbeda genus (Homo vs Pan) dan spesies, menunjukkan mereka sudah berpisah cukup lama.', 'Semakin dekat tingkat klasifikasi yang sama, semakin dekat pula kekerabatan evolusinya.'], jawaban:'Kesamaan famili menunjukkan manusia dan simpanse memiliki <strong>kekerabatan evolusi yang relatif dekat</strong>.' },
          ujiNalar:{ soal:'Kenapa nama ilmiah (seperti Homo sapiens) selalu terdiri dari 2 kata Latin, bukan 1 kata saja?', options:['Karena aturan bahasa Latin mengharuskannya', 'Karena kata pertama menunjukkan genus dan kata kedua menunjukkan penunjuk spesies, sehingga kombinasi keduanya memberikan identitas yang unik dan presisi untuk satu spesies tertentu', 'Karena 1 kata terlalu pendek untuk nama ilmiah', 'Karena itu hanya tradisi tanpa alasan praktis'], correctIndex:1, explanation:'Kombinasi genus + spesies memberikan <strong>identitas unik dan presisi</strong> untuk satu spesies.' }
        },
        {
          id:'upaya-pelestarian',
          title:'Upaya Pelestarian Keanekaragaman Hayati: In Situ vs Ex Situ',
          mengamati:'Badak Jawa dilindungi di habitat aslinya (Taman Nasional Ujung Kulon), sementara panda raksasa dikembangbiakkan di kebun binatang/pusat konservasi di luar habitat aslinya. Dua strategi pelestarian yang tampak berbeda ini punya alasan tersendiri.',
          kenapa:'Strategi pelestarian dibedakan jadi IN SITU (di dalam habitat asli) dan EX SITU (di luar habitat asli) karena masing-masing punya kelebihan & keterbatasan yang berbeda.',
          menelaah:{ text:'Dua strategi pelestarian utama:', points:['Pelestarian IN SITU (taman nasional, cagar alam) mempertahankan spesies dalam ekosistem aslinya — tapi rentan kalau habitat itu sendiri rusak/terancam.', 'Pelestarian EX SITU (kebun binatang, bank benih, penangkaran) memindahkan spesies keluar habitat aslinya — lebih terlindungi dari ancaman langsung, tapi individu mungkin kehilangan sebagian perilaku/adaptasi alami.', 'Strategi terbaik sering menggabungkan keduanya — populasi ex situ sebagai "cadangan" sambil upaya in situ memulihkan habitat asli.'] },
          rumus:{ formula:'In situ: di habitat asli &nbsp;·&nbsp; Ex situ: di luar habitat asli', note:'Pilihan strategi bergantung pada kondisi spesies & habitatnya.' },
          duniaNyata:[
            { title:'Program penangkaran gajah Sumatra', text:'Menggabungkan in situ (suaka di dalam hutan asli) dan ex situ (pusat konservasi) tergantung kondisi & tujuan spesifik.' },
            { title:'Bank benih', text:'Menyimpan cadangan genetik tanaman pangan sebagai jaminan jika varietas asli punah di alam.' }
          ],
          kasus:{ soal:'Sebuah spesies katak langka hanya hidup di satu danau kecil yang airnya mulai tercemar parah. Strategi pelestarian apa yang paling mendesak?', steps:['Karena habitat asli (danau) sedang terancam langsung, pelestarian in situ saja berisiko tinggi.', 'Strategi ex situ (evakuasi ke penangkaran terkendali) mendesak dilakukan sebagai "asuransi" agar spesies tidak punah total.', 'Sambil itu, upaya in situ tetap perlu dilakukan agar populasi bisa dikembalikan ke habitat asli nantinya.'], jawaban:'Strategi <strong>ex situ (evakuasi ke penangkaran terkendali)</strong> paling mendesak sebagai langkah darurat.' },
          ujiNalar:{ soal:'Apa keterbatasan utama strategi pelestarian EX SITU dibanding IN SITU?', options:['Ex situ selalu lebih mahal tanpa manfaat apa pun', 'Individu yang dikembangbiakkan di luar habitat asli mungkin kehilangan sebagian perilaku/adaptasi alami yang dibutuhkan untuk bertahan hidup di alam liar', 'Ex situ tidak bisa melindungi spesies sama sekali', 'Ex situ hanya bisa dilakukan untuk tumbuhan, bukan hewan'], correctIndex:1, explanation:'Individu ex situ bisa <strong>kehilangan sebagian perilaku/adaptasi alami</strong> untuk bertahan di alam liar.' }
        }
      ]
    },
    {
      id:'virus',
      title:'Virus',
      meta:'Kasus 03 · 4 investigasi',
      unlocked:true,
      subbabs:[
        {
          id:'penemuan-virus',
          title:'Penemuan Dunia yang Tak Terlihat: Percobaan Penyaringan Ivanovsky',
          mengamati:'Tahun 1890-an, tanaman tembakau di banyak perkebunan terserang penyakit mosaik (daun belang-belang, layu, gagal panen). Ilmuwan sudah tahu banyak penyakit disebabkan bakteri, dan sudah punya alat andalan untuk membuktikannya: <strong>saringan porselen</strong> berpori sangat halus yang bisa menahan semua bakteri yang diketahui saat itu.',
          kenapa:'Dmitri Ivanovsky menyaring getah tanaman tembakau sakit melalui saringan itu, mengharapkan cairan hasil saringan menjadi "bersih" dari penyebab penyakit. Tapi hasilnya mengejutkan: <strong>cairan hasil saringan tetap bisa menularkan penyakit</strong> ke tanaman sehat. Ini artinya penyebab penyakitnya bukan bakteri — karena bakteri seharusnya tertahan saringan — melainkan sesuatu yang jauh <em>lebih kecil dari bakteri manapun yang diketahui saat itu</em>.',
          menelaah:{
            text:'Ikuti alur penalaran yang membentuk konsep "virus" untuk pertama kalinya:',
            points:[
              'Saringan porselen terbukti bisa menahan semua bakteri yang dikenal — jadi kalau ada sesuatu yang lolos, ukurannya harus jauh lebih kecil dari bakteri.',
              'Getah hasil saringan tetap infeksius (menular) — membuktikan agen penyebab penyakit benar-benar ada di cairan itu, bukan cuma kontaminasi.',
              'Martinus Beijerinck kemudian menegaskan temuan ini dan menyebut agen misterius itu "contagium vivum fluidum" (cairan hidup penular) — cikal bakal istilah <strong>virus</strong> (bahasa Latin: racun/cairan beracun).',
              'Penemuan ini memaksa ilmuwan menyadari dunia agen infeksius punya "lapisan" yang lebih kecil dari bakteri — baru benar-benar bisa dilihat setelah mikroskop elektron ditemukan pada 1930-an.'
            ]
          },
          rumus:{ formula:'Ukuran virus ≈ 20–300 nanometer (nm), ratusan kali lebih kecil dari bakteri (~1.000–5.000 nm)', note:'Karena seukuran itu, virus tidak bisa dilihat mikroskop cahaya biasa — hanya mikroskop elektron yang cukup kuat untuk melihatnya.' },
          duniaNyata:[
            { title:'Filter N95 & masker medis', text:'Prinsip "ukuran partikel menentukan apa yang bisa disaring" masih dipakai sampai sekarang — masker N95 dirancang menyaring partikel hingga ukuran tertentu, relevan langsung dengan bagaimana virus (sangat kecil) menyebar lewat udara.' },
            { title:'Uji saring air minum & sterilisasi', text:'Industri farmasi memakai filter berpori sangat halus (0,22 mikron) untuk sterilisasi cairan dari bakteri — tapi filter itu sendiri tidak cukup untuk menahan virus, sehingga metode sterilisasi lain (panas, radiasi) tetap dibutuhkan.' }
          ],
          kasus:{
            soal:'Getah tanaman sakit disaring dengan saringan yang diketahui bisa menahan semua bakteri, tapi cairan hasil saringan tetap menularkan penyakit ke tanaman sehat. Apa kesimpulan paling logis dari hasil ini?',
            steps:[
              'Ingat fungsi saringan: menahan partikel yang berukuran lebih besar dari pori saringan, meloloskan yang lebih kecil.',
              'Karena semua bakteri seharusnya tertahan, tapi penyakit tetap menular lewat cairan saringan, penyebab penyakit itu pasti lolos dari pori saringan.',
              'Satu-satunya penjelasan logis: penyebabnya berukuran lebih kecil dari bakteri manapun yang diketahui saat itu.'
            ],
            jawaban:'Penyebab penyakit tersebut adalah agen infeksius yang <strong>lebih kecil dari bakteri</strong> — inilah yang kemudian dikenal sebagai virus.'
          },
          ujiNalar:{
            soal:'Kenapa penemuan virus baru bisa benar-benar "dilihat" bertahun-tahun setelah keberadaannya disimpulkan lewat percobaan penyaringan?',
            options:[
              'Karena virus baru terbentuk belakangan setelah percobaan Ivanovsky',
              'Karena ukuran virus jauh di bawah batas kemampuan mikroskop cahaya, dan baru bisa terlihat setelah mikroskop elektron ditemukan',
              'Karena virus tidak berwarna sehingga sulit diwarnai untuk diamati',
              'Karena virus hanya boleh diteliti di laboratorium tingkat tinggi'
            ],
            correctIndex:1,
            explanation:'Ukuran virus (20-300 nm) jauh di bawah batas kemampuan <strong>mikroskop cahaya</strong> yang tersedia saat itu. Virus baru bisa benar-benar terlihat setelah <strong>mikroskop elektron</strong> ditemukan pada 1930-an, yang mampu memperbesar hingga skala nanometer.'
          }
        },
        {
          id:'struktur-virus',
          title:'Struktur Tubuh Virus: Kapsid, Asam Nukleat & Selubung',
          mengamati:'Begitu mikroskop elektron memungkinkan virus benar-benar "dilihat", muncul pertanyaan baru yang lebih membingungkan: virus tidak punya sel, tidak punya inti sel, tidak punya organel seperti mitokondria — tapi ia bisa menularkan sifat dan berkembang biak. <strong>Apa sebenarnya yang menyusun tubuh virus, kalau bukan sel?</strong>',
          kenapa:'Struktur virus dipelajari secara detail karena bentuknya menentukan <em>bagaimana</em> virus menginfeksi. Berbeda dengan makhluk hidup bersel yang strukturnya menunjang metabolisme mandiri, struktur virus adalah "alat pengiriman" yang efisien — dirancang (oleh evolusi) hanya untuk satu tujuan: memasukkan materi genetiknya ke dalam sel inang.',
          menelaah:{
            text:'Bedah struktur virus lapis demi lapis dari luar ke dalam. Ketuk diagram untuk detail:',
            points:[
              '<strong>Kapsid</strong>: selubung protein yang membungkus materi genetik virus. Tersusun dari unit-unit kecil bernama kapsomer, membentuk pola geometris (misalnya ikosahedral/20 sisi) yang sangat efisien secara struktural.',
              '<strong>Materi genetik (asam nukleat)</strong>: inti informasi virus, berupa DNA atau RNA saja (tidak pernah keduanya sekaligus) — "cetak biru" yang dipakai virus untuk memerintah sel inang membuat salinan virus baru.',
              '<strong>Selubung (envelope)</strong>: lapisan lipid tambahan yang dimiliki sebagian virus (diambil dari membran sel inang saat virus "kabur" keluar sel) — membantu virus menyamar dan menempel lebih mudah ke sel inang berikutnya.',
              'Karena tidak punya membran sel, sitoplasma, atau alat metabolisme sendiri, virus <strong>tidak bisa hidup dan bereproduksi sendirian</strong> — inilah alasan virus sering diperdebatkan sebagai "makhluk hidup" atau tidak.'
            ],
            diagram:{
              viewBox:[220,110],
              svg:'<svg viewBox="0 0 220 110" xmlns="http://www.w3.org/2000/svg"><polygon points="110,10 150,35 150,75 110,100 70,75 70,35" fill="none" stroke="#7FDBFF" stroke-width="2"/><path d="M85,45 Q110,55 95,70 Q120,80 105,60" stroke="#FFB627" stroke-width="2" fill="none"/></svg>',
              cap:'Struktur dasar virus ikosahedral: kapsid protein membungkus untai asam nukleat di dalamnya.',
              hotspots:[
                {cx:110,cy:15,label:'Kapsid (protein)',text:'Selubung protein pelindung yang membungkus materi genetik virus, tersusun dari unit-unit kapsomer.'},
                {cx:95,cy:60,label:'Asam nukleat (DNA/RNA)',text:'"Cetak biru" virus — hanya salah satu (DNA atau RNA), tidak pernah keduanya sekaligus.'}
              ]
            }
          },
          rumus:{ formula:'Virus = Asam nukleat (DNA atau RNA) + Kapsid protein (± selubung lipid)', note:'Ini bukan rumus hitung, tapi "formula struktural" — kombinasi minimal yang selalu ada di semua jenis virus, apa pun bentuknya.' },
          duniaNyata:[
            { title:'Vaksin berbasis protein kapsid', text:'Banyak vaksin (termasuk vaksin HPV dan hepatitis B) dibuat hanya dari protein kapsid virus (tanpa materi genetiknya) — cukup untuk melatih sistem imun mengenali virus tanpa risiko infeksi sungguhan.' },
            { title:'Disinfektan berbasis alkohol', text:'Alkohol/hand sanitizer efektif melawan virus berselubung (seperti virus influenza, korona) karena melarutkan lapisan lipid selubungnya — tapi kurang efektif pada virus tanpa selubung yang kapsidnya lebih tahan pelarut lemak.' }
          ],
          kasus:{
            soal:'Sebuah virus diketahui kehilangan infektivitasnya (tidak bisa lagi menular) setelah dicuci dengan sabun, tapi virus jenis lain tetap infeksius meski dicuci sabun. Apa perbedaan struktural yang paling mungkin menjelaskan hal ini?',
            steps:[
              'Ingat fungsi sabun: melarutkan lemak (lipid) secara efektif.',
              'Virus yang rusak oleh sabun kemungkinan besar memiliki selubung lipid yang menjadi target utama sabun — begitu selubungnya rusak, virus tidak bisa lagi menempel/masuk ke sel inang.',
              'Virus yang tetap infeksius meski dicuci sabun kemungkinan tidak memiliki selubung lipid (virus telanjang), sehingga kapsid proteinnya lebih tahan terhadap sabun.'
            ],
            jawaban:'Virus pertama kemungkinan besar adalah <strong>virus berselubung (lipid envelope)</strong> yang rusak oleh sabun, sedangkan virus kedua adalah <strong>virus telanjang (tanpa selubung)</strong> yang kapsid proteinnya lebih tahan terhadap sabun — inilah dasar ilmiah kenapa mencuci tangan dengan sabun efektif melawan banyak virus berselubung.'
          },
          ujiNalar:{
            soal:'Virus A rusak infektivitasnya setelah dicuci sabun, Virus B tetap infeksius meski dicuci sabun. Apa penjelasan paling mungkin?',
            options:[
              'Virus A berselubung lipid (rusak oleh sabun), Virus B virus telanjang (tanpa selubung, lebih tahan sabun)',
              'Virus A tidak punya materi genetik sama sekali, Virus B punya',
              'Virus A berukuran jauh lebih besar dari Virus B',
              'Virus A sebenarnya adalah bakteri, bukan virus sungguhan'
            ],
            correctIndex:0,
            explanation:'Sabun efektif melarutkan lipid. Virus A kemungkinan besar <strong>berselubung lipid</strong> sehingga rusak oleh sabun, sedangkan Virus B adalah <strong>virus telanjang</strong> yang lebih tahan terhadap sabun.'
          }
        },
        {
          id:'siklus-litik-lisogenik',
          title:'Siklus Hidup Virus: Litik vs Lisogenik',
          mengamati:'Karena virus tidak bisa bermetabolisme sendiri, satu-satunya cara virus memperbanyak diri adalah dengan "meminjam" mesin sel makhluk hidup lain. Tapi ternyata ada dua pola perilaku berbeda: ada virus yang langsung menghancurkan sel inangnya dalam hitungan menit-jam, dan ada yang justru "bersembunyi" di dalam sel inang selama bertahun-tahun tanpa merusaknya sama sekali — sampai suatu saat tiba-tiba aktif.',
          kenapa:'Dua strategi berbeda ini (siklus litik dan lisogenik) diteliti terpisah karena punya konsekuensi yang sangat berbeda untuk kesehatan inang dan penyebaran penyakit. Virus yang "bersembunyi" (lisogenik) jauh lebih sulit diberantas karena sistem imun tidak bisa mendeteksinya selama fase tidur itu.',
          menelaah:{
            text:'Bandingkan tahapan kedua siklus. Ketuk diagram untuk detail:',
            points:[
              '<strong>Siklus litik</strong> (cepat & destruktif): virus menempel pada sel inang → menyuntikkan materi genetiknya → membajak mesin sel untuk membuat ratusan salinan virus baru → sel inang pecah (lisis) melepaskan virus-virus baru. Sel inang selalu mati di akhir siklus ini.',
              '<strong>Siklus lisogenik</strong> (tersembunyi & bertahan lama): materi genetik virus <strong>menyisip ke dalam DNA sel inang</strong> (disebut profag) dan ikut tersalin setiap kali sel inang membelah diri — tanpa merusak sel sama sekali, kadang selama bertahun-tahun.',
              'Virus dalam fase lisogenik bisa "terbangun" sewaktu-waktu (dipicu stres, radiasi, atau bahan kimia tertentu) dan berpindah ke siklus litik — menjelaskan kenapa beberapa infeksi virus bisa "kambuh" bertahun-tahun setelah infeksi awal tampak sembuh.',
              'Contoh pada manusia: virus herpes (bisa "tidur" di sel saraf lalu kambuh saat imun menurun) dan virus HIV (menyisip ke DNA sel imun).'
            ],
            diagram:{
              viewBox:[260,100],
              svg:'<svg viewBox="0 0 260 100" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="50" r="18" fill="none" stroke="#7FDBFF" stroke-width="1.5"/><path d="M60,50 L100,25" stroke="#FFB627" stroke-width="1.5"/><circle cx="130" cy="20" r="4" fill="#FF6B5E"/><circle cx="145" cy="15" r="4" fill="#FF6B5E"/><circle cx="140" cy="30" r="4" fill="#FF6B5E"/><path d="M60,50 L100,75" stroke="#6FE3B4" stroke-width="1.5"/><rect x="120" y="70" width="40" height="8" fill="none" stroke="#6FE3B4" stroke-width="1"/></svg>',
              cap:'Dua nasib berbeda setelah virus menyuntikkan materi genetiknya ke sel inang.',
              hotspots:[
                {cx:40,cy:50,label:'Sel inang',text:'Sel yang disuntik materi genetik virus — nasibnya menentukan siklus mana yang terjadi.'},
                {cx:137,cy:22,label:'Siklus litik',text:'Virus langsung memperbanyak diri dan memecahkan sel inang (lisis) — cepat dan destruktif.'},
                {cx:140,cy:74,label:'Siklus lisogenik',text:'Materi genetik virus menyisip ke DNA sel inang (profag) dan "tidur" tanpa merusak sel — bisa aktif kembali sewaktu-waktu.'}
              ]
            }
          },
          rumus:{ formula:'Litik: infeksi → replikasi cepat → lisis sel (sel mati, virus baru menyebar)\nLisogenik: infeksi → penyisipan (profag) → dorman → (pemicu) → beralih ke litik', note:'Siklus lisogenik pada akhirnya sering "berubah pikiran" menjadi litik ketika kondisi sel inang melemah — dua siklus ini bukan pilihan permanen, tapi bisa berpindah.' },
          duniaNyata:[
            { title:'Herpes yang "kambuh" saat daya tahan tubuh turun', text:'Sariawan/luka herpes yang muncul lagi saat seseorang kelelahan atau stres adalah contoh nyata virus yang berpindah dari fase lisogenik (tidur) ke fase litik (aktif menyerang) karena sistem imun sedang lemah.' },
            { title:'Terapi fag (bacteriophage therapy)', text:'Virus yang menyerang bakteri (bakteriofag) sedang diteliti sebagai alternatif antibiotik untuk melawan bakteri yang sudah resistan — memanfaatkan siklus litik bakteriofag untuk menghancurkan bakteri berbahaya secara spesifik tanpa merusak sel manusia.' }
          ],
          kasus:{
            soal:'Seseorang terinfeksi virus herpes saat remaja, tapi gejalanya baru muncul kembali bertahun-tahun kemudian saat ia sedang sakit flu berat (imun melemah). Jelaskan proses ini menggunakan konsep siklus litik dan lisogenik.',
            steps:[
              'Saat infeksi awal, virus herpes menyisipkan materi genetiknya ke dalam sel inang dan memasuki fase lisogenik (dorman/tidur), tidak merusak sel dan tidak menimbulkan gejala.',
              'Selama bertahun-tahun, sel inang terus membelah dan menyalin materi genetik virus bersama DNA-nya sendiri, tapi virus tetap "diam".',
              'Saat sistem imun melemah akibat sakit flu, kondisi ini menjadi pemicu bagi virus untuk beralih dari fase lisogenik ke fase litik — virus mulai aktif bereplikasi cepat dan merusak sel, menimbulkan gejala herpes yang terlihat kembali.'
            ],
            jawaban:'Virus herpes tersebut sempat berada dalam <strong>fase lisogenik</strong> (dorman) selama bertahun-tahun, lalu beralih ke <strong>fase litik</strong> (aktif merusak) saat sistem imun tubuh melemah, memicu munculnya gejala kembali.'
          },
          ujiNalar:{
            soal:'Kenapa virus dengan siklus lisogenik lebih sulit diberantas oleh sistem imun dibanding virus dengan siklus litik murni?',
            options:[
              'Karena virus lisogenik bergerak lebih cepat di dalam tubuh',
              'Karena materi genetiknya bersembunyi di dalam DNA sel inang tanpa membuat partikel virus baru, sehingga tidak terdeteksi sampai aktif kembali',
              'Karena virus lisogenik tidak memiliki materi genetik sama sekali',
              'Karena sistem imun tidak bisa mengenali sel inang manusia'
            ],
            correctIndex:1,
            explanation:'Selama fase lisogenik, materi genetik virus <strong>bersembunyi di dalam DNA sel inang</strong> tanpa memproduksi partikel virus baru atau merusak sel — tidak ada tanda infeksi yang bisa dikenali sistem imun sampai virus aktif kembali, bahkan bertahun-tahun kemudian.'
          }
        },
        {
          id:'virus-kehidupan-manusia',
          title:'Virus dan Kehidupan Manusia: Peran, Penyakit & Pemanfaatan',
          mengamati:'Virus terlanjur identik dengan kata "penyakit" — flu, cacar, rabies, COVID-19. Tapi ilmuwan modern justru mulai memanfaatkan sifat unik virus (kemampuannya menyuntikkan materi genetik dengan sangat presisi ke sel target) untuk tujuan yang jauh dari merugikan. Bagaimana bisa "penyebab penyakit" berubah jadi "alat penyembuh"?',
          kenapa:'Sifat dasar virus — sangat efisien memasukkan materi genetik ke sel spesifik — ternyata adalah persis kemampuan yang dibutuhkan dalam bidang <strong>terapi gen dan bioteknologi</strong>. Ilmuwan mempelajari mekanismenya untuk "meretas" kemampuan itu demi tujuan medis: mengirim gen sehat ke sel yang rusak, atau melatih sistem imun mengenali ancaman tanpa efek penyakit sungguhan.',
          menelaah:{
            text:'Lihat dua sisi peran virus yang tampak bertolak belakang:',
            points:[
              '<strong>Sisi merugikan</strong>: virus menyebabkan penyakit dengan merusak sel inang secara langsung (siklus litik) atau memicu respons imun berlebihan yang justru merusak jaringan tubuh sendiri.',
              '<strong>Vaksin</strong> memanfaatkan sifat virus (atau bagian kecilnya seperti kapsid) yang dilemahkan/dimatikan/direkayasa agar sistem imun "berlatih" mengenali virus tanpa risiko sakit sungguhan.',
              '<strong>Vektor terapi gen</strong>: virus yang telah "dikosongkan" materi genetik berbahayanya dipakai sebagai kendaraan pengangkut gen sehat ke dalam sel pasien dengan kelainan genetik.',
              '<strong>Bakteriofag</strong> (virus penyerang bakteri) dimanfaatkan dalam bioteknologi dan diteliti sebagai alternatif antibiotik untuk melawan bakteri yang kebal obat.'
            ]
          },
          rumus:{ formula:'Kemampuan dasar virus (masuk sel + menyuntik materi genetik) = merugikan (penyakit) ATAU menguntungkan (vaksin, terapi gen) — tergantung siapa yang mengendalikan dan tujuannya', note:'Ini bukan rumus hitung, tapi prinsip yang menjelaskan kenapa "objek yang sama" bisa jadi ancaman atau alat bantu tergantung konteks pemanfaatannya.' },
          duniaNyata:[
            { title:'Vaksin mRNA', text:'Vaksin mRNA modern (seperti untuk COVID-19) memakai prinsip mirip materi genetik virus — mengirim instruksi ke sel tubuh untuk membuat protein yang mirip bagian virus, melatih imun tanpa menggunakan virus hidup sama sekali.' },
            { title:'Terapi gen untuk penyakit genetik langka', text:'Beberapa penyakit genetik langka kini diobati dengan menyuntikkan virus yang telah direkayasa (dikosongkan bagian berbahayanya) untuk mengantarkan gen sehat langsung ke sel pasien yang membutuhkan.' }
          ],
          kasus:{
            soal:'Seorang pasien diberi vaksin yang berisi hanya protein kapsid virus (tanpa materi genetik virus sama sekali). Jelaskan mengapa vaksin ini bisa melatih sistem imun tanpa membuat pasien sakit.',
            steps:[
              'Ingat bahwa infeksi (dan kerusakan sel yang menimbulkan gejala sakit) hanya terjadi jika virus berhasil menyuntikkan materi genetiknya dan membajak mesin sel untuk bereplikasi.',
              'Karena vaksin ini hanya berisi kapsid (protein luar) tanpa materi genetik, virus "palsu" ini tidak bisa memerintah sel inang membuat salinan virus baru — tidak ada infeksi sungguhan yang terjadi.',
              'Meski begitu, sistem imun tubuh tetap mengenali protein kapsid tersebut sebagai benda asing dan membentuk antibodi terhadapnya — sehingga saat virus asli (yang punya kapsid sama) datang, tubuh sudah siap melawan lebih cepat.'
            ],
            jawaban:'Vaksin tersebut aman karena <strong>tidak memiliki materi genetik virus</strong> untuk bereplikasi dan merusak sel, tapi tetap efektif karena sistem imun bisa mengenali dan "berlatih" melawan protein kapsidnya saja.'
          },
          ujiNalar:{
            soal:'Kenapa kemampuan virus menyuntikkan materi genetik ke sel dengan sangat presisi dianggap berguna dalam bidang terapi gen, meski sifat aslinya berbahaya?',
            options:[
              'Karena virus bisa dijinakkan sepenuhnya menjadi bakteri yang menguntungkan',
              'Karena kemampuan pengantaran materi genetik virus yang presisi bisa dimanfaatkan (setelah bagian berbahayanya dibuang) untuk mengantar gen sehat ke sel pasien',
              'Karena virus mampu menyembuhkan dirinya sendiri dari sifat berbahayanya',
              'Karena virus berhenti menular setelah diteliti di laboratorium'
            ],
            correctIndex:1,
            explanation:'Masalah utama dalam terapi gen adalah <strong>bagaimana mengantarkan gen sehat tepat sasaran ke dalam sel pasien</strong> — dan itu persis kemampuan alami virus yang sudah "teruji" jutaan tahun oleh evolusi. Ilmuwan memanfaatkan kemampuan pengantaran itu setelah membuang bagian genetik virus yang berbahaya.'
          }
        }
      ]
    },
    {
      id:'monera',
      title:'Kingdom Monera: Archaebacteria & Eubacteria',
      meta:'Kasus 04 · 3 investigasi',
      unlocked:true,
      subbabs:[
        {
          id:'penemuan-dunia-mikroba',
          title:'Penemuan Dunia Mikroba: Antonie van Leeuwenhoek',
          mengamati:'Pada abad ke-17, seorang pedagang kain Belanda bernama Antonie van Leeuwenhoek (bukan ilmuwan terlatih) mengasah lensa kacanya sendiri hingga bisa memperbesar ratusan kali, lalu mengamati setetes air kolam — dan terkejut melihat "makhluk kecil hidup" bergerak-gerak di dalamnya, sesuatu yang tak pernah dibayangkan orang sebelumnya ada.',
          kenapa:'Penemuan ini penting karena membuka "dunia baru" kehidupan yang tak terlihat mata telanjang — sebelum mikroskop, orang mengira kehidupan hanya terdiri dari yang bisa dilihat langsung. Ini mengubah total pemahaman tentang skala & keragaman kehidupan.',
          menelaah:{ text:'Ciri dasar bakteri sebagai organisme prokariotik:', points:['Bakteri adalah organisme bersel satu (uniseluler) TANPA membran inti sel (disebut PROKARIOTIK) — materi genetiknya "mengambang" bebas di sitoplasma.', 'Ukuran bakteri jauh lebih kecil dari sel makhluk hidup lain (eukariotik) — inilah kenapa baru terdeteksi setelah mikroskop cukup kuat ditemukan.', 'Meski sederhana secara struktur, bakteri sangat sukses secara evolusi — ditemukan di hampir semua lingkungan di bumi.'] },
          rumus:{ formula:'Prokariotik = tanpa membran inti sel &nbsp;·&nbsp; Eukariotik = punya membran inti sel', note:'Ini pembeda paling mendasar dalam klasifikasi seluler makhluk hidup.' },
          duniaNyata:[
            { title:'Dasar mikrobiologi modern', text:'Penemuan bakteri jadi dasar penemuan penyebab penyakit infeksi (sebelumnya dikira disebabkan "udara buruk") dan pengembangan antibiotik.' },
            { title:'Industri makanan fermentasi', text:'Yogurt, keju, kecap bergantung pada pemahaman & pemanfaatan bakteri tertentu.' }
          ],
          kasus:{ soal:'Sebelum penemuan mikroskop, penyakit infeksi sering dikira disebabkan oleh "udara buruk" (miasma). Jelaskan bagaimana penemuan dunia mikroba mengubah pemahaman ini.', steps:['Penemuan mikroorganisme menunjukkan ada agen penyebab penyakit yang nyata dan bisa diamati, bukan sekadar "udara buruk" abstrak.', 'Penelitian lanjutan (Pasteur, Koch) membuktikan mikroorganisme tertentu secara spesifik menyebabkan penyakit tertentu (teori kuman penyakit).', 'Ini mengubah total pendekatan pengobatan - dari sekadar mengatasi gejala menjadi menargetkan penyebab secara langsung.'], jawaban:'Penemuan dunia mikroba membuktikan penyakit infeksi disebabkan oleh <strong>agen biologis nyata (mikroorganisme)</strong>, bukan "udara buruk" abstrak.' },
          ujiNalar:{ soal:'Apa yang membuat bakteri digolongkan sebagai organisme PROKARIOTIK?', options:['Karena bakteri sangat kecil ukurannya', 'Karena bakteri tidak memiliki membran inti sel, materi genetiknya mengambang bebas di sitoplasma', 'Karena bakteri hanya hidup di lingkungan ekstrem', 'Karena bakteri ditemukan oleh Van Leeuwenhoek'], correctIndex:1, explanation:'Ciri utamanya adalah <strong>tidak memiliki membran inti sel</strong>.' }
        },
        {
          id:'archaebacteria-eubacteria',
          title:'Archaebacteria vs Eubacteria: Dua Dunia Prokariotik',
          mengamati:'Sebagian bakteri ditemukan hidup normal di lingkungan ekstrem yang mematikan bagi hampir semua makhluk hidup lain — sumber air panas vulkanik, danau garam superpekat, bahkan tanpa oksigen sama sekali.',
          kenapa:'Penelitian genetik mengungkap bahwa organisme "ekstremofil" ini secara genetik & biokimia berbeda cukup jauh dari bakteri "biasa" — perbedaan ini cukup signifikan untuk memisahkan mereka jadi kelompok terpisah: Archaebacteria.',
          menelaah:{ text:'Dua kelompok prokariotik utama:', points:['EUBACTERIA (bakteri "sejati") adalah kelompok prokariotik yang paling umum, hidup di lingkungan biasa, termasuk bakteri penyebab penyakit maupun yang menguntungkan.', 'ARCHAEBACTERIA memiliki perbedaan mendasar pada komposisi kimia dinding sel & membran selnya, membuat mereka mampu bertahan di kondisi ekstrem.', 'Secara evolusi, Archaebacteria justru lebih dekat kekerabatannya dengan organisme eukariotik (termasuk manusia) dibanding dengan Eubacteria.'] },
          rumus:{ formula:'Eubacteria: bakteri "biasa" &nbsp;·&nbsp; Archaebacteria: tahan lingkungan ekstrem, komposisi kimia dinding sel berbeda', note:'Meski sama-sama prokariotik secara struktur, keduanya berbeda mendasar secara genetik.' },
          duniaNyata:[
            { title:'Enzim untuk teknik PCR', text:'Enzim dari Archaebacteria yang tahan panas ekstrem dimanfaatkan dalam teknik PCR — teknologi kunci dalam tes DNA & diagnosis penyakit modern.' },
            { title:'Bioteknologi industri', text:'Terus mencari enzim tahan ekstrem dari Archaebacteria untuk aplikasi industri suhu tinggi.' }
          ],
          kasus:{ soal:'Enzim Taq polymerase (dari bakteri Thermus aquaticus yang hidup di sumber air panas) tetap aktif pada suhu mendekati titik didih air, sementara enzim dari organisme biasa akan rusak. Jelaskan kenapa ini penting bagi teknologi PCR.', steps:['Proses PCR melibatkan siklus pemanasan berulang hingga mendekati titik didih untuk memisahkan untai DNA.', 'Enzim biasa akan rusak pada suhu setinggi itu, tidak bisa dipakai berulang kali dalam siklus PCR.', 'Enzim dari organisme ekstremofil secara alami tahan suhu tinggi, sehingga tetap berfungsi normal meski dipanaskan berulang kali.'], jawaban:'Enzim tahan panas memungkinkan proses PCR berjalan tanpa harus <strong>mengganti enzim di setiap siklus pemanasan</strong>.' },
          ujiNalar:{ soal:'Kenapa Archaebacteria dan Eubacteria dipisahkan menjadi kelompok berbeda, meski keduanya sama-sama organisme prokariotik?', options:['Karena Archaebacteria lebih besar ukurannya', 'Karena keduanya memiliki perbedaan mendasar pada komposisi kimia dinding sel dan membran sel, serta perbedaan genetik yang signifikan, meski sama-sama prokariotik secara struktur', 'Karena Archaebacteria ditemukan lebih dulu', 'Karena Eubacteria tidak bisa hidup di lingkungan ekstrem sama sekali'], correctIndex:1, explanation:'Perbedaan <strong>komposisi kimia dinding sel dan genetik</strong> yang signifikan memisahkan keduanya.' }
        },
        {
          id:'peran-bakteri',
          title:'Peran Bakteri: Menguntungkan & Merugikan',
          mengamati:'Bakteri Salmonella menyebabkan keracunan makanan berbahaya, sementara bakteri Lactobacillus yang juga hidup di makanan justru dipakai untuk membuat yogurt yang menyehatkan.',
          kenapa:'Memahami peran ganda bakteri (menguntungkan DAN merugikan) penting karena kesalahan menggeneralisasi "semua bakteri berbahaya" bisa membuat manusia kehilangan manfaat besar dari bakteri baik.',
          menelaah:{ text:'Dua sisi peran bakteri:', points:['Bakteri MENGUNTUNGKAN berperan dalam dekomposisi, fermentasi (yogurt, tempe, kecap), fiksasi nitrogen, dan bakteri baik di usus manusia.', 'Bakteri MERUGIKAN (patogen) menyebabkan penyakit dengan merusak jaringan tubuh langsung atau menghasilkan racun (toksin) berbahaya.', 'Penentu apakah bakteri "menguntungkan" atau "merugikan" seringkali bergantung pada KONTEKS (lokasi, jumlah) — bakteri baik di usus bisa berbahaya kalau masuk ke aliran darah lewat luka.'] },
          rumus:{ formula:'Peran bakteri = menguntungkan (dekomposer, fermentasi, fiksasi nitrogen) ATAU merugikan (patogen) — tergantung konteks', note:'Konteks lokasi dan jumlah menentukan apakah bakteri yang sama berdampak baik atau buruk.' },
          duniaNyata:[
            { title:'Antibiotik dan bakteri baik', text:'Penggunaan antibiotik berlebihan bisa ikut membunuh bakteri baik di usus, menyebabkan gangguan pencernaan.' },
            { title:'Pertanian organik', text:'Memanfaatkan bakteri fiksasi nitrogen (menanam kacang-kacangan bergiliran) sebagai pupuk alami.' }
          ],
          kasus:{ soal:'Seseorang mengonsumsi antibiotik spektrum luas untuk mengobati infeksi, tapi mengalami gangguan pencernaan sebagai efek samping. Jelaskan mengapa ini bisa terjadi.', steps:['Antibiotik spektrum luas membunuh bakteri secara umum, tidak hanya bakteri patogen penyebab infeksi.', 'Bakteri baik di usus ikut terbunuh karena antibiotik tidak bisa membedakan bakteri baik dari bakteri jahat.', 'Berkurangnya populasi bakteri baik di usus mengganggu keseimbangan sistem pencernaan.'], jawaban:'Antibiotik <strong>tidak bisa membedakan bakteri baik dari bakteri jahat</strong> — ikut membunuh bakteri baik di usus.' },
          ujiNalar:{ soal:'Kenapa bakteri fiksasi nitrogen pada akar tanaman kacang-kacangan dianggap menguntungkan bagi pertanian?', options:['Karena bakteri itu membuat tanaman kacang tumbuh lebih cepat secara langsung', 'Karena bakteri itu mengubah nitrogen di udara (yang tak bisa diserap tanaman) menjadi bentuk yang bisa diserap, menyuburkan tanah secara alami tanpa pupuk kimia', 'Karena bakteri itu membunuh hama tanaman', 'Karena bakteri itu mengubah warna tanaman menjadi lebih hijau'], correctIndex:1, explanation:'Bakteri ini mengubah nitrogen udara jadi bentuk yang bisa diserap tanaman, <strong>menyuburkan tanah secara alami</strong>.' }
        }
      ]
    },
    {
      id:'protista',
      title:'Protista',
      meta:'Kasus 05 · 3 investigasi',
      unlocked:true,
      subbabs:[
        {
          id:'protista-kelompok-peralihan',
          title:"Protista: Kelompok 'Peralihan' yang Sulit Diklasifikasikan",
          mengamati:'Euglena adalah organisme bersel satu yang bisa BERFOTOSINTESIS seperti tumbuhan (punya klorofil) TAPI juga bisa BERGERAK AKTIF mencari makanan seperti hewan (punya flagela untuk berenang). Ke kingdom mana seharusnya organisme seperti ini dimasukkan?',
          kenapa:'Protista diciptakan sebagai kingdom "keranjang" untuk organisme eukariotik yang tidak cocok masuk kingdom Hewan, Tumbuhan, atau Jamur — biasanya karena strukturnya terlalu sederhana atau menunjukkan campuran ciri dari beberapa kingdom sekaligus.',
          menelaah:{ text:'Tiga kelompok besar Protista:', points:['Protista MIRIP HEWAN (Protozoa) — bersel satu, bisa bergerak aktif, tak berfotosintesis, mis. Amoeba & Paramecium.', 'Protista MIRIP TUMBUHAN (Alga) — punya klorofil & berfotosintesis, mis. alga hijau/coklat/merah.', 'Protista MIRIP JAMUR — menyerap nutrisi dari lingkungan seperti jamur tapi punya ciri berbeda secara struktural/genetik, mis. jamur lendir.'] },
          rumus:{ formula:'Protista = organisme eukariotik yang tak cocok masuk kingdom Hewan/Tumbuhan/Jamur', note:'Keberadaan kingdom "campuran" ini mengungkap bahwa klasifikasi biologis bukan kategori kaku sempurna.' },
          duniaNyata:[
            { title:'Malaria', text:'Plasmodium (protista mirip hewan) adalah penyebab penyakit malaria, ditularkan lewat gigitan nyamuk Anopheles.' },
            { title:'Produksi oksigen dunia', text:'Alga (protista mirip tumbuhan) menghasilkan sebagian besar oksigen di bumi lewat fotosintesis di lautan, bahkan lebih banyak dari hutan darat.' }
          ],
          kasus:{ soal:'Euglena memiliki klorofil untuk berfotosintesis (seperti tumbuhan) tapi juga bisa bergerak aktif dan memakan partikel makanan saat gelap (seperti hewan). Jelaskan kenapa organisme ini paling tepat dikelompokkan sebagai Protista.', steps:['Euglena menunjukkan campuran ciri dari dua kingdom berbeda sekaligus.', 'Kingdom Tumbuhan dan Hewan didefinisikan dengan ciri yang lebih spesifik dan konsisten.', 'Karena Euglena tidak cocok sepenuhnya dengan definisi ketat kedua kingdom, ia dikelompokkan sebagai Protista.'], jawaban:'Euglena dikelompokkan sebagai Protista karena menunjukkan <strong>ciri campuran</strong> dari tumbuhan dan hewan.' },
          ujiNalar:{ soal:'Kenapa Kingdom Protista sering disebut sebagai kingdom "keranjang" atau "peralihan"?', options:['Karena Protista adalah kingdom yang paling penting', 'Karena Protista berisi organisme eukariotik yang tidak cocok masuk kingdom Hewan, Tumbuhan, atau Jamur karena strukturnya sederhana atau menunjukkan ciri campuran', 'Karena Protista hanya ditemukan di air keranjang', 'Karena semua ilmuwan setuju Protista adalah kingdom paling sempurna'], correctIndex:1, explanation:'Protista menampung organisme yang <strong>tidak cocok</strong> masuk kingdom lain.' }
        },
        {
          id:'protista-mirip-hewan-tumbuhan',
          title:'Protista Mirip Hewan (Protozoa) & Mirip Tumbuhan (Alga)',
          mengamati:'Amoeba bergerak dengan cara mengubah bentuk tubuhnya (kaki semu/pseudopodia), Paramecium berenang dengan ribuan rambut getar (silia), sementara Euglena berenang dengan satu ekor cambuk (flagela). Tiga cara "bergerak" yang sangat berbeda dalam kelompok yang sama.',
          kenapa:'Cara BERGERAK menjadi salah satu ciri pengelompokan utama dalam Protozoa karena mekanisme gerak yang berbeda mencerminkan struktur sel yang berbeda pula.',
          menelaah:{ text:'Klasifikasi Protozoa dan Alga:', points:['Protozoa dikelompokkan berdasar alat geraknya: Rhizopoda (kaki semu, mis. Amoeba), Ciliata (silia, mis. Paramecium), Flagellata (flagela, mis. Euglena), dan Sporozoa (tanpa alat gerak, parasit, mis. Plasmodium).', 'Alga dikelompokkan berdasar pigmen warna dominannya: alga hijau, alga coklat (kelp), alga merah (hidup lebih dalam karena efisien menyerap cahaya biru-hijau).', 'Alga berperan sebagai produsen utama di ekosistem perairan, dasar rantai makanan laut.'] },
          rumus:{ formula:'Protozoa dikelompokkan berdasar alat gerak &nbsp;·&nbsp; Alga dikelompokkan berdasar pigmen dominan', note:'Dua prinsip klasifikasi berbeda untuk dua kelompok Protista yang berbeda.' },
          duniaNyata:[
            { title:'Penyakit tidur Afrika', text:'Trypanosoma (Flagellata) menyebabkan penyakit ini, ditularkan lalat tsetse.' },
            { title:'Bahan pengental alami', text:'Industri makanan & kosmetik memanfaatkan ekstrak alga (agar-agar dari alga merah, alginat dari alga coklat).' }
          ],
          kasus:{ soal:'Plasmodium (penyebab malaria) diklasifikasikan sebagai Sporozoa, kelompok Protozoa yang TIDAK memiliki alat gerak aktif. Jelaskan mengapa ketiadaan alat gerak ini tidak menghalangi Plasmodium menyebar.', steps:['Meski tidak punya alat gerak aktif, Plasmodium memanfaatkan VEKTOR (nyamuk Anopheles) untuk berpindah dari satu inang ke inang lain.', 'Sebagai parasit, Plasmodium juga tidak perlu "mencari" makanan aktif — ia menyerap nutrisi langsung dari sel inang.', 'Strategi hidup sebagai parasit membuat alat gerak aktif menjadi tidak terlalu diperlukan.'], jawaban:'Plasmodium tidak membutuhkan alat gerak aktif karena memanfaatkan <strong>nyamuk sebagai vektor</strong> untuk berpindah inang.' },
          ujiNalar:{ soal:'Kenapa alga merah bisa hidup di kedalaman laut yang lebih dalam dibanding alga hijau?', options:['Karena alga merah lebih kuat secara fisik', 'Karena pigmen alga merah lebih efisien menyerap cahaya biru-hijau yang mampu menembus air lebih dalam, dibanding pigmen klorofil dominan pada alga hijau', 'Karena alga merah tidak membutuhkan cahaya sama sekali', 'Karena alga merah lebih ringan sehingga tenggelam lebih dalam'], correctIndex:1, explanation:'Pigmen alga merah lebih efisien menyerap <strong>cahaya biru-hijau</strong> yang menembus air lebih dalam.' }
        },
        {
          id:'protista-mirip-jamur',
          title:'Protista Mirip Jamur: Jamur Lendir yang Membingungkan',
          mengamati:'Jamur lendir (slime mold) pada sebagian tahap hidupnya terlihat seperti gumpalan lendir yang bisa MERAYAP perlahan mencari makanan, tapi pada tahap lain ia membentuk struktur seperti JAMUR yang menghasilkan spora. Satu organisme, dua "wajah" yang sangat berbeda.',
          kenapa:'Jamur lendir awalnya dikira benar-benar "jamur" karena cara reproduksinya mirip jamur sejati, tapi penelitian lebih dalam menunjukkan struktur sel & cara hidupnya (fase merayap mencari makanan seperti amoeba) sangat berbeda dari jamur sejati.',
          menelaah:{ text:'Dua wajah jamur lendir:', points:['Menghabiskan sebagian besar hidupnya sebagai sel tunggal yang bergerak bebas (fase mirip amoeba), memakan bakteri dengan cara menelan langsung (fagositosis).', 'Saat kondisi memburuk, sel-sel jamur lendir bisa BERGABUNG membentuk struktur multiseluler sementara yang menghasilkan SPORA (mirip jamur sejati).', 'Jamur sejati (Fungi) tidak pernah punya fase bergerak aktif seperti ini — selalu diam & menyerap nutrisi lewat dinding sel.'] },
          rumus:{ formula:'Jamur lendir = fase bergerak (mirip amoeba) + fase spora (mirip jamur)', note:'Kombinasi dua fase inilah yang membuatnya digolongkan Protista, bukan Fungi.' },
          duniaNyata:[
            { title:'Inspirasi algoritma jaringan', text:'Jamur lendir dipelajari ilmuwan komputer karena perilakunya mencari jalur makanan terpendek antar sumber makanan mirip algoritma optimasi jaringan.' },
            { title:'Evolusi perilaku "kerja sama"', text:'Penelitian jamur lendir membantu memahami evolusi perilaku kerja sama sederhana pada organisme uniseluler.' }
          ],
          kasus:{ soal:'Peneliti menaruh potongan makanan di beberapa titik dalam wadah, lalu meletakkan jamur lendir di tengahnya. Jamur lendir kemudian membentuk jalur yang menghubungkan semua titik makanan dengan sangat efisien. Jelaskan perilaku dasar yang memungkinkan ini.', steps:['Jamur lendir pada fase merayapnya bergerak mencari makanan secara aktif, mirip perilaku amoeba.', 'Karena bisa bergerak bebas sebagai massa sel tunggal yang menyatu, ia bisa menjangkau banyak sumber makanan sekaligus.', 'Perilaku ini bukan hasil "kecerdasan" otak (jamur lendir tak punya sistem saraf), melainkan respons biokimia sederhana terhadap gradien nutrisi.'], jawaban:'Perilaku ini berasal dari kemampuan jamur lendir <strong>bergerak aktif mencari sumber makanan</strong>, meski tanpa sistem saraf/otak sama sekali.' },
          ujiNalar:{ soal:'Apa perbedaan MENDASAR yang memisahkan jamur lendir (Protista) dari jamur sejati (kingdom Fungi), meski keduanya sama-sama menghasilkan spora?', options:['Jamur lendir berwarna berbeda dari jamur sejati', 'Jamur lendir memiliki fase hidup bergerak aktif mencari makanan (mirip amoeba), sedangkan jamur sejati selalu diam dan menyerap nutrisi lewat dinding sel sepanjang hidupnya', 'Jamur lendir tidak bisa bereproduksi', 'Jamur sejati selalu lebih besar ukurannya'], correctIndex:1, explanation:'Jamur lendir punya <strong>fase bergerak aktif</strong> yang tidak dimiliki jamur sejati.' }
        }
      ]
    },
    {
      id:'fungi',
      title:'Fungi (Jamur)',
      meta:'Kasus 06 · 3 investigasi',
      unlocked:true,
      subbabs:[
        {
          id:'ciri-struktur-jamur',
          title:'Ciri & Struktur Jamur: Bukan Tumbuhan, Bukan Hewan',
          mengamati:'Jamur dulu diklasifikasikan sebagai "tumbuhan" karena tak bergerak & tumbuh dari tanah seperti tumbuhan. Tapi jamur TIDAK berfotosintesis (tak punya klorofil) — lalu bagaimana ia mendapatkan energi untuk hidup?',
          kenapa:'Jamur dipisahkan jadi kingdom tersendiri (Fungi) karena cara hidupnya fundamental berbeda dari tumbuhan maupun hewan — ia tak berfotosintesis tapi juga tak menelan makanan lewat sistem pencernaan internal.',
          menelaah:{ text:'Struktur dan cara makan jamur yang unik:', points:['Tubuh jamur tersusun dari benang-benang halus disebut HIFA, yang bersambung membentuk jaringan disebut MISELIUM (tersembunyi di dalam tanah/media tumbuh).', 'Dinding sel jamur tersusun dari KITIN, BUKAN selulosa seperti dinding sel tumbuhan.', 'Jamur mengeluarkan ENZIM pencernaan ke lingkungan sekitarnya untuk memecah materi organik, lalu MENYERAP hasil pencernaan itu (pencernaan eksternal, bukan internal seperti hewan).'] },
          rumus:{ formula:'Jamur = heterotrof + dinding sel kitin + pencernaan eksternal (enzim → serap)', note:'Kombinasi ciri ini yang membuat jamur digolongkan kingdom tersendiri, bukan tumbuhan atau hewan.' },
          duniaNyata:[
            { title:'Jaringan miselium raksasa', text:'Salah satu organisme individu terbesar di dunia adalah jaringan miselium jamur Armillaria di Oregon, luasnya beberapa kilometer persegi.' },
            { title:'Produksi makanan fermentasi', text:'Industri memanfaatkan enzim pencernaan eksternal jamur untuk produksi tempe, oncom, dan pengolahan limbah organik.' }
          ],
          kasus:{ soal:'Seorang siswa menemukan sebuah cendawan (jamur payung) tumbuh di halaman rumah. Jelaskan mengapa cendawan itu HANYA sebagian kecil dari keseluruhan tubuh jamur.', steps:['Cendawan yang terlihat di permukaan adalah TUBUH BUAH, struktur khusus untuk reproduksi.', 'Bagian utama tubuh jamur (miselium) tersembunyi di dalam tanah, seringkali membentang jauh lebih luas.', 'Tubuh buah hanya muncul secara berkala saat jamur siap bereproduksi.'], jawaban:'Cendawan yang terlihat hanyalah <strong>tubuh buah (struktur reproduksi)</strong> — bagian utama jamur (miselium) tersembunyi di bawah tanah.' },
          ujiNalar:{ soal:'Kenapa jamur tidak diklasifikasikan sebagai tumbuhan, meski sama-sama tidak bisa berpindah tempat?', options:['Karena jamur berukuran lebih kecil dari tumbuhan', 'Karena jamur tidak berfotosintesis (tidak punya klorofil) dan dinding selnya tersusun dari kitin, bukan selulosa seperti tumbuhan', 'Karena jamur hidup lebih lama dari tumbuhan', 'Karena jamur selalu berwarna putih'], correctIndex:1, explanation:'Jamur tidak berfotosintesis dan dinding selnya dari <strong>kitin</strong>, bukan selulosa.' }
        },
        {
          id:'klasifikasi-jamur',
          title:'Klasifikasi Jamur Berdasarkan Cara Reproduksi',
          mengamati:'Jamur tempe (Rhizopus), jamur ragi roti (Saccharomyces), dan jamur payung beracun semuanya "jamur" tapi struktur & cara reproduksinya sangat berbeda satu sama lain.',
          kenapa:'Klasifikasi jamur ke dalam beberapa divisi utama didasarkan pada struktur reproduksi (terutama bentuk spora) karena ciri ini paling konsisten membedakan kelompok jamur yang berbeda secara evolusi.',
          menelaah:{ text:'Divisi utama klasifikasi jamur:', points:['Zygomycota (mis. Rhizopus/jamur tempe) bereproduksi seksual dengan membentuk ZIGOSPORA.', 'Ascomycota (mis. Saccharomyces/ragi) menghasilkan spora dalam struktur kantung disebut ASKUS — kelompok terbesar jamur.', 'Basidiomycota (mis. jamur payung/cendawan) menghasilkan spora pada struktur pemukul kecil disebut BASIDIUM.'] },
          rumus:{ formula:'Zygomycota: zigospora &nbsp;·&nbsp; Ascomycota: askus &nbsp;·&nbsp; Basidiomycota: basidium', note:'Struktur penghasil spora adalah kunci klasifikasi jamur.' },
          duniaNyata:[
            { title:'Ragi roti dan minuman', text:'Saccharomyces cerevisiae (Ascomycota) dipakai dalam pembuatan roti dan minuman beralkohol.' },
            { title:'Penemuan antibiotik penisilin', text:'Penicillium (Ascomycota) menghasilkan antibiotik penisilin, salah satu penemuan medis paling berpengaruh dalam sejarah.' }
          ],
          kasus:{ soal:'Seorang peneliti menemukan jamur baru yang menghasilkan spora dalam struktur kantung (askus). Ke divisi manakah jamur tersebut kemungkinan diklasifikasikan?', steps:['Struktur askus (kantung penghasil spora) adalah ciri khas divisi Ascomycota.', 'Klasifikasi jamur sangat bergantung pada struktur reproduksi spesifik yang diamati.', 'Karena jamur ini menghasilkan spora dalam askus, ia kemungkinan besar termasuk Ascomycota.'], jawaban:'Jamur tersebut kemungkinan besar diklasifikasikan sebagai <strong>Ascomycota</strong>.' },
          ujiNalar:{ soal:'Kenapa jamur yang belum diketahui fase reproduksi seksualnya secara pasti dimasukkan ke dalam kelompok "sementara" (Deuteromycota)?', options:['Karena jamur itu dianggap tidak penting', 'Karena klasifikasi jamur sangat bergantung pada struktur reproduksi seksual, sehingga tanpa data lengkap tentang hal ini, jamur sementara dikelompokkan terpisah sampai penelitian lebih lanjut ditemukan', 'Karena jamur itu adalah spesies baru yang belum punya nama', 'Karena Deuteromycota adalah kelompok jamur yang paling berbahaya'], correctIndex:1, explanation:'Tanpa data reproduksi seksual lengkap, jamur dikelompokkan <strong>sementara</strong> sampai penelitian lanjut.' }
        },
        {
          id:'peran-jamur-ekosistem',
          title:'Peran Jamur dalam Ekosistem & Kehidupan Manusia',
          mengamati:'Hutan yang penuh daun-daun gugur & kayu mati tidak menumpuk selamanya — dalam beberapa bulan/tahun, materi organik itu terurai & "menghilang" kembali ke tanah. Siapa yang melakukan pekerjaan penguraian besar-besaran ini?',
          kenapa:'Jamur (bersama bakteri) adalah dekomposer utama di sebagian besar ekosistem darat — tanpa jamur, materi organik mati akan menumpuk tanpa batas & nutrisi penting akan "terkunci" selamanya.',
          menelaah:{ text:'Peran ganda jamur dalam ekosistem:', points:['Sebagai DEKOMPOSER, jamur memecah materi organik kompleks jadi nutrisi yang bisa diserap ulang oleh tumbuhan — krusial dalam siklus nutrisi ekosistem.', 'Banyak jamur membentuk simbiosis MUTUALISME dengan akar tumbuhan (MIKORIZA) — jamur membantu tumbuhan menyerap air & mineral, tumbuhan memberi jamur gula hasil fotosintesis.', 'Jamur juga punya peran MERUGIKAN sebagai parasit penyebab penyakit pada tumbuhan & manusia, serta jamur beracun.'] },
          rumus:{ formula:'Jamur = dekomposer + simbion mikoriza + (kadang) patogen', note:'Peran jamur dalam ekosistem jauh lebih luas dari sekadar "jamur yang dimakan".' },
          duniaNyata:[
            { title:'Dampak penyakit jamur pada pertanian', text:'Kehilangan panen besar-besaran akibat penyakit jamur menunjukkan dampak ekonomi besar jamur patogen.' },
            { title:'Inokulasi mikoriza kehutanan', text:'Petani hutan modern sengaja menanam pohon dengan inokulasi mikoriza untuk mempercepat pertumbuhan & ketahanan bibit.' }
          ],
          kasus:{ soal:'Sebuah hutan mengalami penurunan populasi jamur secara drastis akibat pencemaran tanah. Prediksi apa yang mungkin terjadi pada siklus nutrisi hutan tersebut.', steps:['Tanpa jamur (dekomposer utama), materi organik mati akan terurai jauh lebih lambat.', 'Nutrisi yang terkunci dalam materi organik mati tidak akan kembali ke tanah secepat biasanya.', 'Tumbuhan di hutan tersebut mungkin mengalami kekurangan nutrisi dalam jangka panjang.'], jawaban:'Penurunan populasi jamur bisa <strong>memperlambat siklus nutrisi</strong> — mengurangi kesuburan tanah dan memengaruhi seluruh ekosistem hutan.' },
          ujiNalar:{ soal:'Apa keuntungan yang didapat TUMBUHAN dari hubungan simbiosis mikoriza dengan jamur?', options:['Tumbuhan menjadi kebal dari semua penyakit', 'Tumbuhan mendapat bantuan menyerap air dan mineral dari tanah secara lebih efisien, karena jangkauan hifa jamur jauh lebih luas dari akar tumbuhan sendiri', 'Tumbuhan tumbuh lebih cepat tanpa perlu fotosintesis', 'Tumbuhan menjadi tidak perlu akar sama sekali'], correctIndex:1, explanation:'Jangkauan hifa jamur yang luas <strong>membantu penyerapan air & mineral</strong> lebih efisien.' }
        }
      ]
    },
    {
      id:'ekologi',
      title:'Ekologi: Komponen Ekosistem & Aliran Energi',
      meta:'Kasus 07 · 3 investigasi',
      unlocked:true,
      subbabs:[
        {
          id:'komponen-ekosistem',
          title:'Komponen Biotik & Abiotik dalam Ekosistem',
          mengamati:'Sebuah kolam ikan tampak sebagai "satu kesatuan" — ikan, tumbuhan air, bakteri, tapi juga air, suhu, cahaya matahari, dan kandungan mineral dalam air. Kalau salah satu "bagian" ini diubah, seluruh sistem terpengaruh.',
          kenapa:'Ekologi mempelajari ekosistem sebagai satu kesatuan yang saling terkait, bukan makhluk hidup secara terpisah dari lingkungannya — memahami komponen apa saja yang membentuk ekosistem adalah dasar untuk memprediksi dampak perubahan lingkungan.',
          menelaah:{ text:'Dua komponen utama ekosistem:', points:['Komponen BIOTIK: PRODUSEN (membuat makanan sendiri lewat fotosintesis), KONSUMEN (makan organisme lain), dan DEKOMPOSER (menguraikan sisa organisme mati).', 'Komponen ABIOTIK: cahaya matahari, suhu, air, tanah, mineral, udara — menentukan jenis organisme apa yang bisa bertahan hidup.', 'Komponen biotik & abiotik saling memengaruhi DUA ARAH — bukan cuma abiotik memengaruhi biotik, tapi biotik juga memengaruhi abiotik.'] },
          rumus:{ formula:'Ekosistem = komponen biotik + komponen abiotik + interaksi antar keduanya', note:'Interaksi dua arah inilah yang membuat ekosistem sebagai sistem dinamis, bukan statis.' },
          duniaNyata:[
            { title:'Pemutihan terumbu karang', text:'Perubahan suhu air laut (abiotik) akibat pemanasan global menyebabkan pemutihan terumbu karang (biotik) secara massal.' },
            { title:'Reboisasi dan curah hujan', text:'Reboisasi hutan (menambah komponen biotik) terbukti mengubah pola curah hujan lokal (komponen abiotik) di beberapa wilayah.' }
          ],
          kasus:{ soal:'Sebuah danau mengalami pencemaran limbah pertanian yang kaya fosfat (abiotik). Jelaskan bagaimana perubahan ini bisa memengaruhi komponen biotik danau secara berantai.', steps:['Peningkatan fosfat memicu pertumbuhan alga secara berlebihan (eutrofikasi) di permukaan danau.', 'Alga yang menutupi permukaan menghalangi cahaya matahari mencapai tumbuhan air di dasar danau.', 'Saat alga mati dalam jumlah besar, dekomposer mengonsumsi oksigen terlarut dalam jumlah besar, menyebabkan ikan mati massal.'], jawaban:'Peningkatan fosfat memicu <strong>ledakan pertumbuhan alga</strong>, yang akhirnya menyebabkan kematian massal ikan akibat penurunan oksigen terlarut.' },
          ujiNalar:{ soal:'Kenapa komponen biotik dan abiotik dikatakan saling memengaruhi DUA ARAH, bukan hanya abiotik memengaruhi biotik?', options:['Karena itu hanya teori tanpa bukti nyata', 'Karena makhluk hidup (biotik) juga bisa mengubah lingkungan fisiknya (abiotik), misalnya tumbuhan mengubah komposisi oksigen udara lewat fotosintesis', 'Karena komponen abiotik sebenarnya tidak penting', 'Karena hanya manusia yang bisa memengaruhi komponen abiotik'], correctIndex:1, explanation:'Makhluk hidup juga bisa <strong>mengubah lingkungan fisiknya</strong> — interaksi berjalan dua arah.' }
        },
        {
          id:'rantai-jaring-makanan',
          title:'Rantai Makanan & Jaring-Jaring Makanan',
          mengamati:'Seekor elang memakan ular, ular memakan tikus, tikus memakan biji-bijian. Tapi kenyataannya elang juga bisa memakan tikus langsung — hubungan makan-memakan di alam tidak sesederhana satu garis lurus.',
          kenapa:'Konsep rantai makanan diperluas jadi jaring-jaring makanan karena di alam nyata, kebanyakan organisme punya lebih dari satu sumber makanan dan lebih dari satu predator.',
          menelaah:{ text:'Dari rantai sederhana ke jaring kompleks:', points:['RANTAI MAKANAN adalah urutan linear sederhana perpindahan energi dari satu organisme ke organisme lain.', 'JARING-JARING MAKANAN adalah gabungan banyak rantai makanan yang saling terhubung dalam satu ekosistem.', 'Jaring-jaring yang lebih kompleks membuat ekosistem lebih stabil & tahan gangguan — kalau satu spesies mangsa hilang, predator masih punya sumber makanan alternatif.'] },
          rumus:{ formula:'Jaring-jaring makanan = gabungan banyak rantai makanan yang saling terhubung', note:'Semakin kompleks jaring-jaring makanan suatu ekosistem, semakin stabil ekosistem itu terhadap gangguan.' },
          duniaNyata:[
            { title:'Kepunahan spesies kunci di Yellowstone', text:'Hilangnya serigala di Yellowstone mengubah total ekosistem taman nasional itu — contoh keystone species.' },
            { title:'Pengelolaan perikanan modern', text:'Memperhitungkan jaring-jaring makanan laut secara menyeluruh, bukan cuma spesies target tangkapan.' }
          ],
          kasus:{ soal:'Populasi ular (predator tikus) menurun drastis akibat perburuan liar. Jelaskan dampak yang mungkin terjadi pada jaring-jaring makanan ekosistem tersebut.', steps:['Berkurangnya predator ular berarti populasi tikus berpotensi meningkat drastis tanpa kendali alami.', 'Peningkatan populasi tikus bisa menyebabkan kerusakan lebih besar pada tanaman pertanian.', 'Predator lain yang memakan tikus mungkin mengalami peningkatan sumber makanan, tapi keseimbangan ekosistem tetap terganggu.'], jawaban:'Penurunan populasi ular berpotensi menyebabkan <strong>ledakan populasi tikus</strong> yang tak terkendali.' },
          ujiNalar:{ soal:'Kenapa ekosistem dengan jaring-jaring makanan yang LEBIH KOMPLEKS cenderung LEBIH STABIL dibanding ekosistem dengan rantai makanan sederhana?', options:['Karena ekosistem kompleks memiliki lebih banyak spesies berbahaya', 'Karena jika satu spesies mangsa hilang, predator masih punya sumber makanan alternatif lain, sehingga dampak gangguan tidak langsung menghancurkan seluruh sistem', 'Karena ekosistem kompleks tidak memiliki predator sama sekali', 'Karena kompleksitas tidak memengaruhi stabilitas ekosistem'], correctIndex:1, explanation:'Predator punya <strong>sumber makanan alternatif</strong> saat satu mangsa hilang, sehingga sistem lebih tahan gangguan.' }
        },
        {
          id:'piramida-energi',
          title:'Piramida Energi: Kenapa Rantai Makanan Selalu Pendek',
          mengamati:'Rantai makanan di alam jarang lebih dari 4-5 tingkat — hampir tak pernah ditemukan rantai makanan dengan 10 tingkat trofik. Kenapa ada "batas" alami pada panjang rantai makanan?',
          kenapa:'Hukum termodinamika (transfer energi selalu disertai kehilangan sebagai panas) berlaku juga pada ekosistem — setiap kali energi berpindah dari satu tingkat trofik ke tingkat berikutnya, sebagian besar energi hilang sebagai panas metabolisme.',
          menelaah:{ text:'Kenapa piramida energi selalu mengecil ke atas:', points:['Aturan umum (hukum 10%) menyatakan hanya sekitar 10% energi dari satu tingkat trofik yang diteruskan ke tingkat berikutnya — sisanya hilang sebagai panas.', 'Inilah kenapa piramida energi selalu mengecil ke atas, dan jumlah/biomassa organisme juga cenderung mengecil ke tingkat trofik yang lebih tinggi.', 'Akibat penyusutan energi drastis, rantai makanan yang terlalu panjang (>5-6 tingkat) tak lagi praktis — energi tersisa terlalu sedikit untuk menopang populasi yang viable.'] },
          rumus:{ formula:'Hanya ~10% energi dari satu tingkat trofik diteruskan ke tingkat berikutnya (90% hilang sebagai panas)', note:'Ini disebut hukum 10% dalam ekologi.' },
          duniaNyata:[
            { title:'Efisiensi pola makan vegetarian', text:'Mengonsumsi produsen langsung jauh lebih efisien secara energi daripada makan daging (konsumen).' },
            { title:'Budidaya perikanan', text:'Memilih memelihara ikan herbivora (bukan karnivora) karena lebih efisien mengonversi pakan jadi biomassa yang bisa dipanen.' }
          ],
          kasus:{ soal:'Sebuah padang rumput menghasilkan energi setara 10.000 kkal dari rumput (produsen). Jika hanya 10% energi diteruskan tiap tingkat trofik, berapa energi yang tersedia untuk konsumen sekunder (tingkat trofik ketiga)?', steps:['Energi di produsen = 10.000 kkal.', 'Energi di konsumen primer (tingkat kedua) = 10% dari 10.000 = 1.000 kkal.', 'Energi di konsumen sekunder (tingkat ketiga) = 10% dari 1.000 = 100 kkal.'], jawaban:'Energi yang tersedia untuk konsumen sekunder hanya <strong>100 kkal</strong>.' },
          ujiNalar:{ soal:'Kenapa rantai makanan di alam jarang memiliki lebih dari 5-6 tingkat trofik?', options:['Karena hewan tidak mau makan lebih dari 5 jenis mangsa', 'Karena hanya sekitar 10% energi diteruskan ke tingkat trofik berikutnya, sehingga setelah beberapa tingkat, energi yang tersisa terlalu sedikit untuk menopang populasi organisme yang viable', 'Karena alam sengaja membatasi jumlah tingkat trofik', 'Karena rantai makanan yang panjang dilarang oleh hukum ekologi'], correctIndex:1, explanation:'Energi yang tersisa setelah beberapa tingkat terlalu sedikit untuk <strong>menopang populasi viable</strong>.' }
        }
      ]
    },
    {
      id:'perubahan-lingkungan',
      title:'Perubahan Lingkungan dan Daur Biogeokimia',
      meta:'Kasus 08 · 3 investigasi',
      unlocked:true,
      subbabs:[
        {
          id:'jenis-pencemaran-lingkungan',
          title:'Jenis Pencemaran Lingkungan & Dampaknya',
          mengamati:'Sekilas, sampah plastik di laut, asap knalpot kendaraan, dan limbah pabrik kimia semuanya disebut "pencemaran" — tapi mekanisme kerusakan yang ditimbulkan masing-masing sangat berbeda.',
          kenapa:'Mengklasifikasi pencemaran berdasar media yang tercemar (udara, air, tanah) penting karena memungkinkan penanganan yang tepat sasaran — solusi untuk pencemaran udara sangat berbeda dari solusi untuk pencemaran plastik laut.',
          menelaah:{ text:'Tiga jenis pencemaran utama dan keterkaitannya:', points:['PENCEMARAN UDARA berasal dari asap kendaraan/pabrik, berdampak pada kesehatan pernapasan & berkontribusi pada hujan asam & pemanasan global.', 'PENCEMARAN AIR bisa berupa limbah organik, logam berat, atau sampah plastik — masing-masing punya mekanisme kerusakan berbeda.', 'PENCEMARAN TANAH berasal dari sampah non-organik, pestisida berlebih & limbah kimia — dampaknya seringkali TIDAK terbatas satu media saja, saling terkait lewat sistem lingkungan yang sama.'] },
          rumus:{ formula:'Pencemaran udara → hujan asam → pencemaran air & tanah', note:'Contoh bagaimana ketiga jenis pencemaran saling terkait dalam satu sistem.' },
          duniaNyata:[
            { title:'Pulau sampah plastik Pasifik', text:'Great Pacific Garbage Patch menunjukkan skala pencemaran plastik laut yang membentang seluas jutaan kilometer persegi.' },
            { title:'Hujan asam merusak hutan', text:'Akibat pencemaran udara (SO2, NOx), merusak hutan & danau di banyak wilayah industri.' }
          ],
          kasus:{ soal:'Sebuah pabrik mengeluarkan asap SO2 ke udara. Beberapa hari kemudian, danau di dekat pabrik itu menjadi lebih asam dan ikan-ikan mulai mati. Jelaskan bagaimana pencemaran udara bisa berujung pada pencemaran air.', steps:['SO2 di udara bereaksi dengan uap air di atmosfer membentuk asam sulfat, yang jatuh sebagai hujan asam.', 'Hujan asam yang jatuh ke danau menurunkan pH air danau.', 'Perubahan pH yang drastis mengganggu fisiologi ikan, menyebabkan kematian massal.'], jawaban:'Pencemaran udara (SO2) berubah menjadi <strong>hujan asam</strong> yang jatuh ke danau, menurunkan pH air dan meracuni kehidupan akuatik.' },
          ujiNalar:{ soal:'Kenapa ketiga jenis pencemaran (udara, air, tanah) dikatakan saling terkait, bukan masalah yang terpisah sepenuhnya?', options:['Karena pencemaran selalu terjadi di tempat yang sama', 'Karena pencemar dari satu media (misalnya udara) bisa berpindah dan mencemari media lain (seperti air lewat hujan asam), menunjukkan lingkungan adalah sistem yang saling terhubung', 'Karena hanya ada satu jenis pencemaran yang sebenarnya', 'Karena pemerintah mengklasifikasikannya begitu tanpa alasan ilmiah'], correctIndex:1, explanation:'Pencemar bisa <strong>berpindah antar media</strong> — lingkungan adalah sistem yang saling terhubung.' }
        },
        {
          id:'daur-air-karbon',
          title:'Daur Biogeokimia: Air dan Karbon yang Terus Berputar',
          mengamati:'Molekul air yang kamu minum hari ini mungkin pernah jadi bagian lautan jutaan tahun lalu, pernah jadi awan, hujan, sungai. Air (dan unsur-unsur penting lain) tidak "habis", ia terus berputar.',
          kenapa:'Daur biogeokimia menjelaskan bagaimana unsur-unsur kimia penting bagi kehidupan terus didaur ulang melalui komponen biotik & abiotik secara berulang — inilah yang memungkinkan kehidupan bertahan miliaran tahun dengan jumlah materi yang pada dasarnya tetap.',
          menelaah:{ text:'Dua daur penting: air dan karbon', points:['DAUR AIR: evaporasi (menguap) → kondensasi (jadi awan) → presipitasi (hujan) → mengalir kembali ke laut, digerakkan energi matahari.', 'DAUR KARBON: CO2 diserap tumbuhan lewat fotosintesis → dimakan hewan → dilepas kembali lewat respirasi atau pembusukan/pembakaran.', 'Pembakaran bahan bakar fosil MENGGANGGU keseimbangan daur karbon dengan melepas karbon yang "terkunci" jutaan tahun dalam waktu singkat, jauh lebih cepat dari kemampuan alam menyerapnya.'] },
          rumus:{ formula:'Evaporasi → Kondensasi → Presipitasi → (kembali ke laut/tanah)', note:'Ini siklus dasar daur air yang digerakkan energi matahari.' },
          duniaNyata:[
            { title:'Deforestasi mengganggu daur karbon', text:'Mengurangi jumlah tumbuhan penyerap CO2 sekaligus melepas karbon tersimpan di pohon saat ditebang/dibakar.' },
            { title:'Bendungan mengubah daur air', text:'Pembangunan bendungan besar mengubah pola daur air alami di suatu wilayah, memengaruhi ekosistem hilir sungai.' }
          ],
          kasus:{ soal:'Manusia membakar bahan bakar fosil dalam skala besar sejak revolusi industri. Jelaskan mengapa ini dianggap "mengganggu keseimbangan" daur karbon alami, bukan sekadar "menambah" karbon baru.', steps:['Karbon dalam bahan bakar fosil sebelumnya "terkunci" di dalam bumi selama jutaan tahun.', 'Pembakaran melepas karbon ini kembali ke atmosfer dalam waktu sangat singkat (dekade), jauh lebih cepat dari waktu penguncian alaminya.', 'Laju pelepasan yang jauh melebihi laju penyerapan alami inilah yang menyebabkan konsentrasi CO2 atmosfer terus meningkat drastis.'], jawaban:'Ini mengganggu keseimbangan karena karbon yang terkunci <strong>jutaan tahun</strong> dilepas kembali dalam hitungan dekade.' },
          ujiNalar:{ soal:'Apa yang menggerakkan daur air (siklus hidrologi) sehingga terus berputar tanpa henti?', options:['Gaya gravitasi bumi saja', 'Energi matahari, yang menyebabkan penguapan air dan menggerakkan seluruh siklus evaporasi-kondensasi-presipitasi', 'Aktivitas manusia yang memompa air', 'Rotasi bumi pada porosnya'], correctIndex:1, explanation:'<strong>Energi matahari</strong> menyebabkan penguapan air yang menggerakkan seluruh siklus.' }
        },
        {
          id:'dampak-perubahan-iklim',
          title:'Dampak Perubahan Iklim pada Ekosistem',
          mengamati:'Terumbu karang di banyak wilayah dunia mengalami "pemutihan" (coral bleaching) massal dalam beberapa dekade terakhir — berubah dari berwarna-warni jadi putih pucat & banyak yang mati.',
          kenapa:'Memahami mekanisme di balik dampak perubahan iklim (bukan sekadar "bumi memanas") penting karena memungkinkan prediksi & mitigasi yang tepat.',
          menelaah:{ text:'Mekanisme biologis di balik pemutihan karang:', points:['Karang hidup dalam simbiosis dengan alga mikroskopis (zooxanthellae) yang memberi karang warna & sebagian besar nutrisi lewat fotosintesis.', 'Saat suhu air laut naik meski hanya 1-2°C untuk periode yang cukup lama, karang mengalami stres & "mengusir" alga simbiotiknya.', 'Kalau suhu tak kembali normal dalam waktu cukup, karang yang kehilangan alga simbiotiknya akan mati kelaparan — dampak berantai meruntuhkan seluruh ekosistem terumbu karang.'] },
          rumus:{ formula:'Kenaikan suhu → karang mengusir zooxanthellae → kehilangan warna & nutrisi → (jika berkepanjangan) karang mati', note:'Ini rantai sebab-akibat yang menjelaskan mengapa pemutihan karang bisa fatal.' },
          duniaNyata:[
            { title:'Great Barrier Reef', text:'Terumbu karang terbesar di dunia mengalami beberapa peristiwa pemutihan massal parah dalam dekade terakhir akibat gelombang panas laut.' },
            { title:'Pergeseran pola migrasi', text:'Perubahan iklim mengganggu pola migrasi burung & waktu berbunga tumbuhan, menciptakan ketidaksesuaian waktu antara predator/penyerbuk dengan sumber makanannya.' }
          ],
          kasus:{ soal:'Sebuah wilayah terumbu karang mengalami kenaikan suhu air laut 2°C di atas normal selama 2 bulan berturut-turut. Jelaskan mekanisme biologis yang menyebabkan karang berubah warna menjadi putih.', steps:['Kenaikan suhu air yang berkepanjangan menyebabkan stres fisiologis pada karang.', 'Karang yang stres "mengusir" alga zooxanthellae yang biasanya hidup bersimbiosis dalam jaringannya.', 'Karena alga inilah yang memberi karang warna dan nutrisi, hilangnya alga menyebabkan karang tampak putih pucat (bleaching).'], jawaban:'Kenaikan suhu menyebabkan karang <strong>"mengusir" alga zooxanthellae</strong> yang bersimbiosis dengannya akibat stres.' },
          ujiNalar:{ soal:'Kenapa pemutihan karang (coral bleaching) bisa berujung pada kematian karang, bukan sekadar perubahan warna sementara?', options:['Karena warna putih beracun bagi karang', 'Karena alga zooxanthellae yang diusir karang adalah sumber nutrisi utamanya lewat fotosintesis, sehingga tanpa alga itu karang bisa kelaparan jika kondisi stres berlangsung terlalu lama', 'Karena karang tidak bisa hidup tanpa warna', 'Karena pemutihan selalu bersifat permanen sejak awal'], correctIndex:1, explanation:'Alga yang diusir adalah <strong>sumber nutrisi utama</strong> karang lewat fotosintesis.' }
        }
      ]
    },
    {
      id:'bioteknologi',
      title:'Inovasi Bioteknologi',
      meta:'Kasus 09 · 3 investigasi',
      unlocked:true,
      subbabs:[
        {
          id:'bioteknologi-konvensional',
          title:'Bioteknologi Konvensional: Memanfaatkan Mikroorganisme Alami',
          mengamati:'Manusia sudah membuat tempe, tape, dan yogurt selama ratusan bahkan ribuan tahun — jauh sebelum ilmu mikrobiologi modern ditemukan. Bagaimana nenek moyang menemukan & memanfaatkan proses ini tanpa memahami mikroorganisme secara ilmiah?',
          kenapa:'Bioteknologi konvensional memanfaatkan kemampuan ALAMI mikroorganisme (fermentasi) tanpa perlu memodifikasi materi genetiknya — berbeda dari bioteknologi modern yang secara sengaja merekayasa gen.',
          menelaah:{ text:'Ciri khas bioteknologi konvensional:', points:['Memanfaatkan proses FERMENTASI — mikroorganisme memecah bahan mentah lewat metabolisme alaminya, menghasilkan produk dengan sifat berbeda.', 'Tidak mengubah materi genetik organisme yang digunakan, hanya memanfaatkan proses metabolisme ALAMI yang sudah ada.', 'Meski "konvensional", bioteknologi jenis ini tetap relevan & terus dikembangkan secara ilmiah modern.'] },
          rumus:{ formula:'Bioteknologi konvensional = memanfaatkan proses metabolisme ALAMI mikroorganisme, TANPA modifikasi genetik', note:'Ini yang membedakannya secara mendasar dari bioteknologi modern.' },
          duniaNyata:[
            { title:'Fermentasi makanan tradisional Indonesia', text:'Tempe, tape, oncom adalah warisan bioteknologi konvensional yang terus dikembangkan secara ilmiah modern.' },
            { title:'Produksi antibiotik generasi awal', text:'Penisilin awalnya juga memanfaatkan kemampuan alami jamur Penicillium, bukan rekayasa genetik.' }
          ],
          kasus:{ soal:'Seorang pengrajin tempe secara turun-temurun memilih "ragi" (starter Rhizopus) dari batch tempe sebelumnya yang berkualitas terbaik. Jelaskan mengapa praktik ini merupakan bentuk bioteknologi konvensional.', steps:['Pengrajin memanfaatkan kemampuan alami jamur Rhizopus untuk memfermentasi kedelai, tanpa mengubah materi genetiknya.', 'Pemilihan starter dari batch terbaik adalah bentuk SELEKSI (bukan rekayasa genetik).', 'Praktik ini murni memanfaatkan proses metabolisme alami mikroorganisme.'], jawaban:'Praktik ini adalah bioteknologi konvensional karena memanfaatkan <strong>proses metabolisme alami</strong> jamur Rhizopus.' },
          ujiNalar:{ soal:'Apa ciri utama yang membedakan bioteknologi KONVENSIONAL dari bioteknologi MODERN?', options:['Bioteknologi konvensional lebih mahal', 'Bioteknologi konvensional memanfaatkan proses metabolisme alami mikroorganisme tanpa mengubah materi genetiknya, sedangkan bioteknologi modern secara sengaja merekayasa gen organisme', 'Bioteknologi konvensional hanya bisa dilakukan di laboratorium', 'Tidak ada perbedaan mendasar antara keduanya'], correctIndex:1, explanation:'Perbedaan utamanya: bioteknologi modern secara sengaja <strong>merekayasa gen</strong>, konvensional tidak.' }
        },
        {
          id:'bioteknologi-modern-rekayasa-genetika',
          title:'Bioteknologi Modern: Rekayasa Genetika',
          mengamati:'Bakteri E. coli secara alami TIDAK menghasilkan insulin manusia. Tapi sejak tahun 1980-an, bakteri E. coli yang direkayasa khusus mampu memproduksi insulin manusia dalam skala industri.',
          kenapa:'Bioteknologi modern diciptakan begitu ilmuwan memahami bahwa GEN yang mengkode suatu sifat/protein bisa DIPINDAHKAN dari satu organisme ke organisme lain — membuka kemungkinan merekayasa organisme untuk menghasilkan produk yang secara alami tak pernah bisa dihasilkannya.',
          menelaah:{ text:'Mekanisme dasar rekayasa genetika:', points:['Melibatkan pemindahan GEN spesifik dari organisme SUMBER ke organisme PENERIMA (sering bakteri karena mudah dikembangbiakkan cepat).', 'Teknik dasar melibatkan ENZIM RESTRIKSI (memotong DNA, seperti "gunting" molekuler) dan ENZIM LIGASE (menyambung DNA, seperti "lem" molekuler).', 'Begitu gen tersisip berhasil, organisme penerima akan memproduksi protein yang dikode gen tersebut, persis seperti organisme asli sumber gen itu.'] },
          rumus:{ formula:'DNA sumber → potong dgn enzim restriksi → sisipkan ke vektor → masukkan ke organisme penerima → produksi protein target', note:'Ini alur dasar seluruh proses rekayasa genetika.' },
          duniaNyata:[
            { title:'Insulin manusia rekombinan', text:'Dari bakteri E. coli yang direkayasa, menggantikan insulin hewan yang dulu dipakai, lebih aman & efisien diproduksi massal.' },
            { title:'Tanaman transgenik', text:'Kapas Bt (disisipi gen bakteri Bacillus thuringiensis) menghasilkan racun alami yang membunuh hama tertentu, mengurangi kebutuhan pestisida kimia.' }
          ],
          kasus:{ soal:'Sebelum insulin rekombinan ditemukan, penderita diabetes bergantung pada insulin dari pankreas sapi/babi, yang terbatas dan bisa memicu alergi. Jelaskan bagaimana rekayasa genetika mengatasi kedua masalah ini.', steps:['Dengan menyisipkan gen insulin manusia ke bakteri E. coli, bakteri memproduksi insulin yang strukturnya identik dengan insulin manusia — mengatasi masalah alergi.', 'Bakteri bisa dikembangbiakkan dalam skala industri besar dan cepat, mengatasi masalah keterbatasan jumlah.', 'Kedua masalah teratasi sekaligus karena produksi protein manusia yang identik dalam skala produksi mikroorganisme yang efisien.'], jawaban:'Rekayasa genetika membuat bakteri memproduksi insulin yang <strong>strukturnya identik dengan insulin manusia</strong> dan bisa diproduksi dalam <strong>skala industri besar</strong>.' },
          ujiNalar:{ soal:'Apa fungsi enzim restriksi dalam proses rekayasa genetika?', options:['Menyambung potongan DNA menjadi satu', 'Memotong DNA di lokasi spesifik, berfungsi seperti "gunting" molekuler untuk mengisolasi gen target', 'Menghancurkan DNA yang tidak diperlukan secara total', 'Mengubah urutan basa DNA secara acak'], correctIndex:1, explanation:'Enzim restriksi berfungsi seperti <strong>"gunting" molekuler</strong> untuk memotong DNA di lokasi spesifik.' }
        },
        {
          id:'penerapan-etika-bioteknologi',
          title:'Penerapan Bioteknologi & Pertimbangan Etikanya',
          mengamati:'Bioteknologi modern memungkinkan hal-hal yang dulu terdengar seperti fiksi ilmiah: kloning hewan, tanaman transgenik, bahkan potensi "menyunting" gen manusia. Tapi kemampuan teknis ini memunculkan pertanyaan yang bukan sekadar sains: apakah semua yang bisa dilakukan harus dilakukan?',
          kenapa:'Penerapan bioteknologi selalu perlu dipertimbangkan dari sisi etika & dampak jangka panjang, bukan cuma kelayakan teknis — karena teknologi yang sama bisa dipakai untuk tujuan yang sangat menguntungkan maupun berisiko/kontroversial.',
          menelaah:{ text:'Bidang penerapan dan pertimbangan etika bioteknologi:', points:['Diterapkan luas di PERTANIAN (tanaman transgenik), KESEHATAN (obat/vaksin rekombinan, terapi gen), dan LINGKUNGAN (bioremediasi).', 'Pertimbangan etika: keamanan jangka panjang produk transgenik, keadilan akses (negara kaya vs miskin), dan batas rekayasa genetik manusia.', 'Regulasi ketat & uji keamanan bertahap diterapkan sebelum produk bioteknologi diizinkan beredar luas, menyeimbangkan manfaat dengan risiko yang belum sepenuhnya dipahami.'] },
          rumus:{ formula:'Kelayakan teknis + pertimbangan etika + regulasi = penerapan bioteknologi yang bertanggung jawab', note:'Kelayakan teknis saja tidak cukup untuk memutuskan suatu penerapan bioteknologi.' },
          duniaNyata:[
            { title:'Kontroversi CRISPR pada embrio manusia', text:'Kasus penyunting gen CRISPR yang dipakai pada embrio manusia oleh seorang ilmuwan China (2018) memicu kecaman internasional.' },
            { title:'Uji klinis bertahap', text:'Regulasi ketat uji klinis (fase 1-3) sebelum obat/vaksin bioteknologi diizinkan beredar adalah bentuk penyeimbangan manfaat & risiko yang terlembagakan.' }
          ],
          kasus:{ soal:'Seorang ilmuwan mengklaim berhasil melakukan modifikasi genetik pada embrio manusia untuk "meningkatkan" kecerdasan (bukan mengobati penyakit). Jelaskan mengapa hal ini menuai kontroversi etika lebih besar dibanding terapi gen untuk penyakit genetik.', steps:['Terapi gen untuk penyakit genetik memiliki tujuan medis yang jelas — mengurangi penderitaan akibat kondisi yang sudah teridentifikasi.', 'Modifikasi untuk "meningkatkan" sifat non-medis tidak memiliki batas yang jelas, berpotensi memicu kesenjangan sosial baru.', 'Modifikasi pada embrio juga akan diwariskan ke generasi berikutnya tanpa persetujuan mereka.'], jawaban:'Kontroversinya lebih besar karena modifikasi untuk "peningkatan" tidak punya <strong>batas etika yang jelas</strong> dan efeknya akan <strong>diwariskan ke generasi berikutnya</strong>.' },
          ujiNalar:{ soal:'Kenapa penerapan bioteknologi modern selalu perlu mempertimbangkan aspek ETIKA, tidak cukup hanya kelayakan teknis semata?', options:['Karena etika lebih penting daripada sains', 'Karena teknologi yang sama bisa dipakai untuk tujuan yang sangat menguntungkan maupun berisiko/kontroversial, dan dampaknya bisa memengaruhi masyarakat luas serta generasi mendatang', 'Karena pertimbangan etika akan membuat teknologi lebih mahal', 'Karena hanya ilmuwan yang boleh menentukan penerapan teknologi'], correctIndex:1, explanation:'Dampak teknologi bisa memengaruhi <strong>masyarakat luas dan generasi mendatang</strong>, sehingga etika harus dipertimbangkan.' }
        }
      ]
    }
  ]
};
