window.CONTENT_KIMIA = {
  key: 'kimia',
  label: 'Kimia',
  icon: '⚗',
  eyebrow: 'Divisi Riset — Materi & Reaksi',
  desc: 'Struktur atom bukan diketahui dari sekali percobaan — ia dibongkar bertahap oleh ilmuwan yang menantang model sebelumnya. Kamu akan mengikuti jejak investigasi itu, dari bola pejal sampai model modern.',
  babs: [
    {
      id:'kimia-kehidupan',
      title:'Kimia dalam Kehidupan',
      meta:'Kasus 01 · 3 investigasi',
      unlocked:true,
      subbabs:[
        {
          id:'peran-ilmu-kimia',
          title:'Kenapa Semua Ilmu Butuh Kimia?',
          mengamati:'Memasak nasi, mencuci baju dengan sabun, obat menyembuhkan sakit kepala — semua ini melibatkan reaksi kimia yang terjadi tanpa kita sadari sedang "melakukan kimia".',
          kenapa:'Kimia dipelajari secara formal karena tanpa memahami bagaimana zat berubah & berinteraksi, manusia hanya bisa "mencoba-coba" tanpa tahu kenapa sesuatu berhasil/gagal — ilmu kimia mengubah trial-error jadi pemahaman prediktif.',
          menelaah:{ text:'Fondasi ilmu kimia:', points:['Kimia mempelajari MATERI (segala sesuatu yang punya massa & menempati ruang) dan perubahannya.', 'Perubahan materi dibagi 2: <strong>perubahan fisika</strong> (bentuk berubah, zat tetap sama, mis. es mencair) dan <strong>perubahan kimia</strong> (zat berubah jadi zat baru dengan sifat berbeda, mis. kayu terbakar jadi abu).', 'Kimia menjembatani fisika (energi & materi secara umum) dengan biologi (kehidupan) — reaksi dalam tubuh makhluk hidup pada dasarnya adalah kimia.'] },
          rumus:{ formula:'Perubahan fisika = zat tetap sama &nbsp;·&nbsp; Perubahan kimia = terbentuk zat baru', note:'Ini kriteria pembeda paling mendasar dalam kimia.' },
          duniaNyata:[
            { title:'Industri farmasi', text:'Merancang obat berdasar pemahaman reaksi kimia dalam tubuh.' },
            { title:'Fermentasi makanan', text:'Industri makanan mengontrol proses fermentasi (kimia) untuk membuat tempe, tape, yogurt.' }
          ],
          kasus:{ soal:'Seorang tukang roti menambahkan ragi ke adonan dan rotinya mengembang. Apakah ini perubahan fisika atau kimia?', steps:['Ragi menghasilkan gas CO2 lewat fermentasi (mengubah gula jadi CO2 & alkohol).', 'Ini reaksi kimia karena menghasilkan zat baru (gas CO2) yang tak ada sebelumnya.', 'Adonan mengembang bukan sekadar perubahan bentuk, tapi hasil dari zat baru yang terbentuk di dalamnya.'], jawaban:'Ini adalah <strong>perubahan kimia</strong>, karena fermentasi menghasilkan zat baru yang tidak ada sebelumnya.' },
          ujiNalar:{ soal:'Es yang mencair menjadi air adalah contoh perubahan apa?', options:['Perubahan kimia, karena wujudnya berubah', 'Perubahan fisika, karena zatnya tetap air (H2O), hanya wujudnya yang berubah', 'Bukan perubahan apa pun', 'Tergantung suhu ruangan'], correctIndex:1, explanation:'Zatnya tetap <strong>H2O</strong>, hanya wujudnya (padat→cair) yang berubah — ini perubahan fisika.' }
        },
        {
          id:'metode-ilmiah-lab-kimia',
          title:'Metode Ilmiah & Keselamatan di Lab Kimia',
          mengamati:'Berbeda dengan lab fisika, lab kimia punya risiko tambahan: bahan kimia bisa korosif, beracun, mudah terbakar, atau bereaksi berbahaya kalau dicampur sembarangan.',
          kenapa:'Prosedur lab kimia yang ketat diciptakan karena konsekuensi kesalahan di kimia bisa lebih parah & tak terduga daripada bidang lain — mencampur dua bahan yang terlihat "aman" secara terpisah bisa menghasilkan reaksi berbahaya.',
          menelaah:{ text:'Prinsip keselamatan lab kimia:', points:['Setiap bahan kimia lab wajib diberi label dengan simbol bahaya standar (mudah terbakar, korosif, beracun) yang dikenali secara internasional.', 'Prosedur "tambahkan asam ke air, JANGAN sebaliknya" adalah aturan keselamatan spesifik karena reaksi asam kuat dengan air bisa melepas panas hebat secara tiba-tiba kalau urutannya terbalik.', 'Alat pelindung diri (kacamata, sarung tangan, jas lab) wajib karena bahan kimia bisa merusak kulit/mata secara permanen dalam hitungan detik.'] },
          rumus:{ formula:'Tuang ASAM ke AIR, tidak pernah sebaliknya', note:'Ini salah satu aturan keselamatan paling penting di lab kimia.' },
          duniaNyata:[
            { title:'Industri kimia besar', text:'Pabrik pupuk dan petrokimia menerapkan protokol keselamatan berlapis karena skala bahayanya jauh lebih besar.' },
            { title:'Label bahaya produk rumah tangga', text:'Simbol bahaya kimia yang sama dipakai secara global pada kemasan pemutih dan pembersih.' }
          ],
          kasus:{ soal:'Seorang siswa hendak mengencerkan asam sulfat pekat. Kenapa prosedurnya harus "tuang ASAM ke AIR", bukan sebaliknya?', steps:['Mengencerkan asam pekat melepaskan panas besar (reaksi eksotermik).', 'Kalau air dituang ke asam pekat, panas terkonsentrasi di sedikit air di sekitar asam, bisa mendidih tiba-tiba & memercikkan asam.', 'Dengan menuang asam sedikit demi sedikit ke air yang banyak, panas tersebar merata di volume air yang besar, jauh lebih aman.'], jawaban:'Karena menuang air ke asam pekat bisa menyebabkan <strong>panas terkonsentrasi mendadak & percikan asam berbahaya</strong>.' },
          ujiNalar:{ soal:'Kenapa prosedur keselamatan lab kimia umumnya lebih ketat dibanding lab fisika biasa?', options:['Karena kimia dianggap lebih penting', 'Karena bahan kimia bisa bereaksi tak terduga, korosif, beracun, atau mudah terbakar dengan konsekuensi yang bisa lebih parah', 'Karena peralatan kimia lebih mahal', 'Tidak ada perbedaan sebenarnya'], correctIndex:1, explanation:'Bahan kimia punya risiko <strong>reaksi tak terduga, korosif, beracun, atau mudah terbakar</strong> yang konsekuensinya bisa lebih parah.' }
        },
        {
          id:'perubahan-fisika-kimia-lanjut',
          title:'Membedakan Perubahan Fisika & Kimia Secara Sistematis',
          mengamati:'Gula yang dilarutkan dalam air terlihat "menghilang" — mirip dengan gula yang dibakar hingga jadi karamel & akhirnya arang hitam. Apakah keduanya jenis perubahan yang sama?',
          kenapa:'Membedakan perubahan fisika dari kimia secara sistematis penting karena menentukan apakah proses itu BISA DIBALIK (reversibel) atau tidak — gula yang larut bisa diperoleh lagi dengan menguapkan air, tapi gula yang terbakar jadi arang tak bisa dikembalikan.',
          menelaah:{ text:'Ciri pembeda perubahan fisika vs kimia:', points:['Perubahan fisika: tidak menghasilkan zat baru, biasanya REVERSIBEL.', 'Perubahan kimia: menghasilkan zat baru dengan sifat berbeda, umumnya IRREVERSIBEL, sering disertai tanda: perubahan warna, gas (gelembung), endapan, atau perubahan suhu signifikan.', 'Tanda-tanda ini bukan bukti mutlak, tapi petunjuk awal yang kuat.'] },
          rumus:{ formula:'Fisika: reversibel, tanpa zat baru &nbsp;·&nbsp; Kimia: irreversibel, terbentuk zat baru', note:'Kriteria reversibilitas adalah cara paling praktis membedakan keduanya secara cepat.' },
          duniaNyata:[
            { title:'Daur ulang logam/kaca', text:'Memanfaatkan sifat perubahan fisika (dilelehkan lalu dibentuk ulang) yang reversibel, hemat sumber daya.' },
            { title:'Sampah organik membusuk', text:'Perubahan kimia yang tak bisa "dikembalikan" jadi bahan asalnya.' }
          ],
          kasus:{ soal:'Sebuah lilin dinyalakan. Lilin meleleh (jadi cair) DAN terbakar (menghasilkan nyala, jelaga, gas CO2). Identifikasi mana perubahan fisika dan mana perubahan kimia.', steps:['Lilin yang meleleh (padat→cair) adalah perubahan FISIKA — zatnya masih lilin yang sama dan bisa membeku lagi.', 'Lilin yang terbakar (bereaksi dengan oksigen jadi CO2, air, jelaga, panas) adalah perubahan KIMIA.', 'Zat lilin berubah total jadi zat lain, tak bisa dikembalikan jadi lilin lagi.'], jawaban:'Meleleh = <strong>perubahan fisika</strong>. Terbakar = <strong>perubahan kimia</strong>.' },
          ujiNalar:{ soal:'Kertas yang disobek menjadi potongan kecil adalah contoh perubahan apa?', options:['Perubahan kimia, karena bentuknya berubah total', 'Perubahan fisika, karena zatnya tetap kertas, hanya ukuran/bentuknya yang berubah', 'Tidak termasuk perubahan apa pun', 'Tergantung ukuran potongannya'], correctIndex:1, explanation:'Zatnya tetap <strong>kertas</strong>, hanya bentuk/ukurannya yang berubah — ini perubahan fisika.' }
        }
      ]
    },
    {
      id:'kimia-hijau',
      title:'Kimia Hijau dan Lingkungan',
      meta:'Kasus 02 · 3 investigasi',
      unlocked:true,
      subbabs:[
        {
          id:'konsep-kimia-hijau',
          title:'Kimia Hijau: Mendesain Ulang Cara Berkimia',
          mengamati:'Industri kimia selama puluhan tahun menghasilkan limbah berbahaya sebagai "efek samping" tak terhindarkan dari proses produksi — seolah polusi adalah harga yang harus dibayar untuk kemajuan.',
          kenapa:'Kimia hijau lahir dari pertanyaan yang menantang asumsi lama itu: "bagaimana kalau proses kimia dirancang sejak awal untuk minim limbah, bukan menangani limbah setelah terlanjur dihasilkan?" — pergeseran dari "membersihkan setelah kotor" jadi "mendesain agar tak kotor".',
          menelaah:{ text:'Prinsip utama kimia hijau:', points:['Menekankan EFISIENSI ATOM — reaksi ideal mengubah semua atom bahan baku jadi produk yang diinginkan, bukan membuang sebagian besar jadi limbah.', 'PENCEGAHAN limbah lebih diutamakan daripada PENGOLAHAN limbah setelah terbentuk.', 'Pemilihan bahan & pelarut yang lebih aman jadi prioritas desain sejak tahap perencanaan reaksi.'] },
          rumus:{ formula:'Efisiensi atom = (massa produk yang diinginkan / massa total reaktan) × 100%', note:'Semakin tinggi efisiensi atom, semakin sedikit bahan baku yang terbuang jadi limbah.' },
          duniaNyata:[
            { title:'Deterjen ramah lingkungan', text:'Formula modern lebih mudah terurai secara biologis daripada deterjen generasi lama.' },
            { title:'Plastik biodegradable', text:'Upaya kimia hijau mengurangi limbah plastik yang menumpuk ratusan tahun.' }
          ],
          kasus:{ soal:'Sebuah reaksi kimia menghasilkan 80 gram produk yang diinginkan dari total 100 gram bahan baku. Tentukan efisiensi atom reaksi ini.', steps:['Gunakan efisiensi atom = (massa produk diinginkan/massa total reaktan)×100%.', 'Substitusi: (80/100)×100%.', 'Hitung: 80%.'], jawaban:'Efisiensi atom reaksi ini = <strong>80%</strong>.' },
          ujiNalar:{ soal:'Kenapa kimia hijau lebih menekankan PENCEGAHAN limbah daripada PENGOLAHAN limbah setelah terbentuk?', options:['Karena pengolahan limbah dilarang oleh hukum', 'Karena mencegah limbah terbentuk sejak awal lebih murah dan lebih aman daripada membersihkannya setelah terlanjur dihasilkan', 'Karena limbah tidak bisa diolah sama sekali', 'Karena pencegahan lebih mudah dipublikasikan'], correctIndex:1, explanation:'Mencegah limbah terbentuk <strong>lebih murah dan lebih aman</strong> daripada membersihkannya setelah terlanjur ada.' }
        },
        {
          id:'pemanasan-global-efek-rumah-kaca',
          title:'Pemanasan Global & Efek Rumah Kaca: Penjelasan Kimianya',
          mengamati:'Rumah kaca yang dipakai petani tetap hangat di dalam meski udara luar dingin — kaca membiarkan sinar matahari masuk tapi "menjebak" sebagian panasnya. Atmosfer bumi berperilaku serupa dengan gas-gas tertentu.',
          kenapa:'Memahami efek rumah kaca secara kimia penting karena ia menjelaskan MEKANISME PASTI kenapa peningkatan konsentrasi gas tertentu (CO2, metana) menyebabkan bumi memanas — ada penjelasan pada tingkat molekul, bukan sekadar korelasi.',
          menelaah:{ text:'Mekanisme efek rumah kaca:', points:['Sinar matahari (gelombang pendek) menembus atmosfer & memanaskan permukaan bumi.', 'Permukaan bumi memancarkan kembali energi itu sebagai radiasi inframerah (gelombang panjang).', 'Molekul gas rumah kaca (CO2, metana, uap air) MENYERAP radiasi inframerah ini lalu memancarkannya kembali ke segala arah, termasuk balik ke bumi — inilah yang "menjebak" panas.'] },
          rumus:{ formula:'Radiasi matahari masuk (gelombang pendek) → radiasi bumi keluar (inframerah) → sebagian terjebak gas rumah kaca', note:'Makin tinggi konsentrasi gas rumah kaca, makin banyak radiasi inframerah yang terjebak.' },
          duniaNyata:[
            { title:'Pembakaran bahan bakar fosil', text:'Melepas CO2 dalam jumlah besar, meningkatkan konsentrasi gas rumah kaca sejak revolusi industri.' },
            { title:'Deforestasi', text:'Mengurangi jumlah pohon yang menyerap CO2, memperparah akumulasi gas rumah kaca.' }
          ],
          kasus:{ soal:'Kenapa gas nitrogen (N2) dan oksigen (O2) yang menyusun 99% atmosfer bumi TIDAK dianggap gas rumah kaca utama, sementara CO2 yang jumlahnya jauh lebih sedikit justru jadi perhatian utama?', steps:['Struktur molekul N2 dan O2 (diatomik simetris) tidak efektif menyerap radiasi inframerah.', 'Struktur molekul CO2 (dan metana, uap air) justru sangat efektif menyerap radiasi inframerah karena geometri & jenis ikatannya.', 'Jadi bukan soal jumlah molekul saja, tapi soal KEMAMPUAN struktur molekul menyerap radiasi inframerah.'], jawaban:'Karena struktur molekul N2 dan O2 <strong>tidak efektif menyerap radiasi inframerah</strong>, sementara struktur CO2 sangat efektif menyerapnya.' },
          ujiNalar:{ soal:'Apa yang terjadi pada radiasi inframerah dari bumi ketika bertemu molekul gas rumah kaca di atmosfer?', options:['Radiasi langsung diteruskan keluar angkasa tanpa hambatan', 'Radiasi diserap oleh molekul gas rumah kaca, lalu dipancarkan kembali ke segala arah termasuk balik ke bumi', 'Radiasi dipantulkan langsung kembali ke bumi tanpa diserap', 'Radiasi diubah menjadi gas rumah kaca baru'], correctIndex:1, explanation:'Radiasi <strong>diserap lalu dipancarkan kembali ke segala arah</strong>, termasuk balik ke bumi — inilah yang menjebak panas.' }
        },
        {
          id:'pencemaran-lingkungan-solusi',
          title:'Pencemaran Lingkungan & Solusi Berbasis Kimia Hijau',
          mengamati:'Sungai yang tercemar limbah pabrik bisa terlihat "jernih" secara visual, tapi ikan-ikan di dalamnya mati massal. Ini menunjukkan pencemaran tak selalu terlihat kasat mata.',
          kenapa:'Memahami JENIS pencemaran secara kimia penting karena tiap jenis pencemar butuh solusi penanganan yang berbeda — logam berat, limbah organik, dan bahan kimia beracun tak bisa ditangani dengan metode yang sama.',
          menelaah:{ text:'Dua jenis pencemaran utama:', points:['Limbah ORGANIK (mis. limbah rumah tangga) yang terurai tapi menghabiskan oksigen terlarut air, membuat ikan mati lemas.', 'Limbah ANORGANIK (mis. logam berat merkuri/timbal) yang TIDAK terurai & terakumulasi dalam rantai makanan, makin pekat di predator puncak — termasuk manusia.', 'Solusi kimia hijau: mencegah limbah berbahaya terbentuk sejak di sumbernya, dan mengolah limbah yang terlanjur ada tanpa menciptakan pencemaran baru.'] },
          rumus:{ formula:'Limbah organik → menghabiskan oksigen terlarut &nbsp;·&nbsp; Limbah anorganik → terakumulasi di rantai makanan', note:'Dua mekanisme kerusakan yang sangat berbeda, butuh penanganan berbeda pula.' },
          duniaNyata:[
            { title:'Kasus Teluk Minamata (1950-an)', text:'Menunjukkan bagaimana logam berat merkuri terakumulasi dalam rantai makanan hingga meracuni manusia yang memakan ikan dari perairan tercemar.' },
            { title:'Instalasi pengolahan air limbah (IPAL)', text:'Memakai prinsip kimia untuk menetralkan/mengendapkan pencemar sebelum air dibuang kembali ke lingkungan.' }
          ],
          kasus:{ soal:'Sebuah pabrik membuang limbah organik (sisa makanan) ke sungai dalam jumlah besar. Ikan-ikan di hilir sungai mati massal meski limbah itu tidak beracun. Jelaskan mekanisme kimiawinya.', steps:['Limbah organik yang terurai oleh bakteri membutuhkan oksigen terlarut dalam jumlah besar.', 'Semakin banyak limbah organik, semakin banyak oksigen terlarut yang dikonsumsi bakteri pengurai.', 'Kadar oksigen terlarut yang anjlok drastis membuat ikan tak bisa "bernapas", meski limbah itu sendiri tidak beracun.'], jawaban:'Ikan mati karena <strong>penurunan drastis kadar oksigen terlarut</strong> akibat dikonsumsi bakteri pengurai limbah organik.' },
          ujiNalar:{ soal:'Kenapa logam berat (seperti merkuri) dianggap lebih berbahaya jangka panjang dibanding limbah organik biasa?', options:['Karena logam berat berwarna lebih gelap', 'Karena logam berat tidak terurai dan terakumulasi semakin pekat di sepanjang rantai makanan, termasuk pada manusia', 'Karena logam berat lebih murah diproduksi', 'Karena logam berat lebih mudah terlihat di air'], correctIndex:1, explanation:'Logam berat <strong>tidak terurai</strong> dan terakumulasi semakin pekat di sepanjang rantai makanan.' }
        }
      ]
    },
    {
      id:'struktur-atom',
      title:'Struktur Atom',
      meta:'Kasus 03 · 4 investigasi',
      unlocked:true,
      subbabs:[
        {
          id:'dalton-thomson',
          title:'Jejak Sang Elektron: Dari Dalton ke Thomson',
          mengamati:'Tahun 1800-an, semua orang percaya atom adalah bola pejal terkecil yang tidak bisa dibagi lagi — sesuai arti kata "atomos" (tak terbagi) dari bahasa Yunani. Lalu J.J. Thomson bereksperimen dengan tabung sinar katoda: ia melewatkan arus listrik dalam tabung hampa dan melihat seberkas sinar misterius yang bisa dibelokkan oleh medan listrik dan magnet.',
          kenapa:'Kalau atom benar-benar bola pejal tanpa muatan, seharusnya <strong>tidak ada apa pun di dalamnya yang bisa dibelokkan oleh medan listrik</strong>. Fakta bahwa sinar katoda dibelokkan ke arah kutub positif membuktikan sinar itu bermuatan negatif — dan karena partikel ini bisa "dikeluarkan" dari berbagai jenis logam berbeda, Thomson menyimpulkan partikel bermuatan negatif ini pasti ada di <em>dalam</em> semua atom, bukan cuma milik satu jenis unsur.',
          menelaah:{
            text:'Ini titik ketika model atom pertama kali direvisi:',
            points:[
              'Model <strong>Dalton (1803)</strong>: atom adalah bola pejal, tidak bisa dibagi, tidak bisa diciptakan/dimusnahkan — cocok untuk menjelaskan hukum kekekalan massa, tapi tidak menjelaskan listrik.',
              'Eksperimen Thomson menemukan partikel bermuatan negatif (elektron) di dalam atom — ini artinya atom <strong>bisa dibagi</strong>, bertentangan langsung dengan model Dalton.',
              'Karena atom netral secara keseluruhan, dan elektron bermuatan negatif ditemukan di dalamnya, harus ada muatan positif penyeimbang di tempat lain dalam atom.',
              'Thomson mengusulkan model <strong>"roti kismis" (plum pudding)</strong>: bola bermuatan positif dengan elektron-elektron tersebar merata di dalamnya, seperti kismis dalam adonan roti.'
            ]
          },
          rumus:{ formula:'Atom netral: jumlah muatan (+) = jumlah muatan (−)', note:'Ini prinsip dasar yang tetap berlaku di semua model atom setelahnya, termasuk model modern.' },
          duniaNyata:[
            { title:'Tabung CRT televisi lama', text:'TV tabung (CRT) sebelum era layar datar bekerja persis dengan prinsip sinar katoda Thomson — elektron ditembakkan dan dibelokkan medan magnet untuk membentuk gambar di layar fosfor.' },
            { title:'Petir & listrik statis', text:'Perpindahan elektron antar partikel di awan adalah dasar terjadinya petir — fenomena yang baru bisa dijelaskan secara ilmiah setelah keberadaan elektron dikonfirmasi.' }
          ],
          kasus:{
            soal:'Sebuah partikel dalam tabung sinar katoda dibelokkan menuju kutub positif medan listrik. Jelaskan apa yang bisa disimpulkan dari pengamatan ini, sesuai logika Thomson.',
            steps:[
              'Ingat prinsip dasar kelistrikan: partikel bermuatan sejenis saling tolak, partikel berbeda muatan saling tarik.',
              'Karena partikel tertarik/dibelokkan MENUJU kutub positif, partikel tersebut harus bermuatan berlawanan dengan kutub positif.',
              'Simpulkan: partikel tersebut bermuatan negatif — inilah elektron.'
            ],
            jawaban:'Partikel itu adalah <strong>elektron (bermuatan negatif)</strong>, karena partikel selalu dibelokkan menuju kutub yang muatannya berlawanan dengannya.'
          },
          ujiNalar:{
            soal:'Kenapa model Dalton tidak bisa menjelaskan hasil eksperimen tabung sinar katoda Thomson?',
            options:[
              'Karena Dalton menganggap atom punya banyak elektron',
              'Karena Dalton menganggap atom adalah bola pejal tak terbagi, padahal eksperimen membuktikan atom punya partikel bermuatan di dalamnya',
              'Karena Dalton tidak percaya pada listrik',
              'Karena Dalton mengukur massa atom secara salah'
            ],
            correctIndex:1,
            explanation:'Model Dalton menganggap atom bola pejal tanpa partikel bermuatan di dalamnya. Eksperimen Thomson menunjukkan ada partikel bermuatan negatif yang bisa "dikeluarkan" dari atom — <strong>membuktikan atom punya struktur internal dan bisa dibagi</strong>, bertentangan langsung dengan asumsi dasar Dalton.'
          }
        },
        {
          id:'rutherford',
          title:'Penembakan Foil Emas: Rutherford Membongkar Inti Atom',
          mengamati:'Ernest Rutherford (bersama Geiger dan Marsden) menembakkan partikel alfa (bermuatan positif) ke lempeng emas setipis mungkin. Kalau model Thomson benar — muatan positif tersebar merata seperti adonan roti — hampir semua partikel alfa seharusnya menembus lurus dengan sedikit pembelokan. Tapi hasilnya mengejutkan: <strong>sebagian kecil partikel alfa memantul balik</strong>, seolah menabrak sesuatu yang sangat padat.',
          kenapa:'Rutherford sendiri berkata itu "seperti menembakkan peluru meriam ke tisu dan pelurunya memantul balik" — sesuatu yang mustahil kalau muatan positif memang tersebar merata dan lemah seperti model Thomson. Fakta bahwa <em>sebagian besar</em> partikel alfa tetap lolos lurus tanpa halangan, sementara <em>sebagian sangat kecil</em> memantul drastis, memaksa kesimpulan baru tentang bagaimana materi tersusun di dalam atom.',
          menelaah:{
            text:'Bedah tiga pengamatan Rutherford. Ketuk diagram untuk detail:',
            points:[
              'Sebagian besar partikel alfa <strong>menembus lurus</strong> tanpa pembelokan → sebagian besar volume atom adalah ruang kosong.',
              'Sebagian partikel <strong>dibelokkan sedikit</strong> → ada muatan positif terkonsentrasi yang menolak partikel alfa (yang juga positif) saat lewat dekat.',
              'Sangat sedikit partikel <strong>memantul balik total</strong> → muatan positif itu bukan tersebar, melainkan terkonsentrasi sangat padat di satu titik kecil yang disebut <strong>inti atom (nukleus)</strong>.'
            ],
            diagram:{
              viewBox:[260,100],
              svg:'<svg viewBox="0 0 260 100" xmlns="http://www.w3.org/2000/svg"><circle cx="130" cy="50" r="4" fill="#FFB627"/><ellipse cx="130" cy="50" rx="90" ry="30" fill="none" stroke="#4A82BE" stroke-width="1" stroke-dasharray="2,2"/><circle cx="220" cy="50" r="2.5" fill="#7FDBFF"/><line x1="10" y1="20" x2="250" y2="20" stroke="#6FE3B4" stroke-width="1"/><line x1="10" y1="80" x2="250" y2="80" stroke="#6FE3B4" stroke-width="1"/><line x1="10" y1="50" x2="105" y2="50" stroke="#FF6B5E" stroke-width="1.3"/></svg>',
              cap:'Titik oranye = inti padat kecil. Sebagian besar berkas lolos — hanya yang mendekati inti yang terpengaruh.',
              hotspots:[
                {cx:130,cy:50,label:'Inti atom (padat, +)',text:'Titik kecil ini adalah inti atom — sangat padat dan bermuatan positif, tempat hampir seluruh massa atom terkonsentrasi.'},
                {cx:220,cy:50,label:'Elektron',text:'Mengorbit jauh di luar inti, di ruang yang sebagian besar kosong.'},
                {cx:57,cy:50,label:'Berkas memantul (langka)',text:'Hanya partikel alfa yang kebetulan mengarah tepat ke inti yang memantul balik — sangat jarang terjadi karena inti berukuran sangat kecil.'}
              ]
            }
          },
          rumus:{ formula:'Model atom Rutherford: inti kecil bermuatan (+), elektron mengorbit di ruang kosong sekelilingnya', note:'Diameter inti ≈ 1/100.000 dari diameter atom — analoginya, kalau atom seukuran stadion sepak bola, inti hanya seukuran kelereng di tengah lapangan.' },
          duniaNyata:[
            { title:'Pemindaian keamanan bandara', text:'Prinsip hamburan partikel serupa dipakai dalam teknik pencitraan modern untuk "melihat" struktur dalam suatu material tanpa membongkarnya secara fisik.' },
            { title:'Reaktor nuklir & PLTN', text:'Pemahaman bahwa massa atom terkonsentrasi di inti yang sangat kecil menjadi dasar perhitungan reaksi fisi nuklir yang dipakai pembangkit listrik tenaga nuklir.' }
          ],
          kasus:{
            soal:'Kenapa hanya sebagian sangat kecil partikel alfa yang memantul balik, bukan semuanya, jika inti atom memang bermuatan positif kuat?',
            steps:[
              'Ingat bahwa inti atom berukuran sangat kecil dibanding keseluruhan atom (seperti kelereng di tengah stadion).',
              'Karena inti sangat kecil, peluang partikel alfa menembak tepat ke arah inti (atau sangat dekat dengannya) jauh lebih rendah daripada peluang lewat di ruang kosong sekitarnya.',
              'Hanya partikel yang "kebetulan" mengarah tepat ke inti yang mengalami tolakan cukup kuat untuk memantul; mayoritas partikel lewat di ruang kosong dan tidak terpengaruh.'
            ],
            jawaban:'Karena inti atom sangat kecil dibanding volume atom secara keseluruhan, <strong>peluang tumbukan langsung sangat rendah</strong> — mayoritas partikel alfa lewat di ruang kosong tanpa pernah mendekati inti.'
          },
          ujiNalar:{
            soal:'Apa perbedaan mendasar antara model atom Thomson dan model atom Rutherford?',
            options:[
              'Thomson: muatan (+) tersebar merata di seluruh atom; Rutherford: muatan (+) terkonsentrasi di inti kecil dan padat',
              'Thomson: atom bola pejal; Rutherford: atom tersusun dari kulit elektron bertingkat energi',
              'Thomson: elektron berada di inti; Rutherford: proton berada di kulit terluar',
              'Keduanya sama saja, tidak ada perbedaan berarti'
            ],
            correctIndex:0,
            explanation:'Thomson mengusulkan muatan positif <strong>tersebar merata</strong> (model roti kismis). Rutherford membuktikan lewat eksperimen bahwa muatan positif <strong>terkonsentrasi di inti kecil dan padat</strong>, dengan elektron mengorbit jauh di ruang kosong sekelilingnya.'
          }
        },
        {
          id:'bohr',
          title:'Bohr dan Lompatan Kuantum Elektron',
          mengamati:'Model Rutherford punya masalah besar yang ia sendiri tidak bisa jawab: menurut hukum fisika klasik, elektron yang mengorbit inti seharusnya terus kehilangan energi dan akhirnya <strong>jatuh spiral ke dalam inti</strong> dalam waktu sangat singkat — artinya semua atom seharusnya "runtuh" dalam sepersekian detik. Kenyataannya atom stabil selamanya. Ada yang salah dengan model itu.',
          kenapa:'Niels Bohr mengusulkan solusi radikal: elektron <strong>tidak boleh berada di sembarang jarak</strong> dari inti, melainkan hanya pada lintasan-lintasan tertentu dengan tingkat energi tetap (disebut kulit atau tingkat energi). Elektron di lintasan ini tidak kehilangan energi selama tetap di sana — ia hanya melompat ke lintasan lain (menyerap atau memancarkan energi) saat berpindah tingkat, tidak pernah "meluncur" pelan-pelan.',
          menelaah:{
            text:'Postulat Bohr menjawab masalah kestabilan atom dengan tiga ide kunci:',
            points:[
              'Elektron mengorbit inti hanya pada <strong>lintasan/kulit tertentu</strong> (diberi label K, L, M, N, ... atau n=1,2,3,...) — bukan pada sembarang jarak.',
              'Selama berada di satu kulit, elektron <strong>tidak memancarkan atau menyerap energi</strong> — ini yang membuat atom tetap stabil, tidak runtuh seperti prediksi fisika klasik.',
              'Elektron bisa "melompat" antar kulit hanya dengan menyerap energi (naik ke kulit lebih luar) atau memancarkan energi dalam bentuk cahaya (turun ke kulit lebih dalam) — energi yang diserap/dipancarkan harus tepat sama dengan selisih energi kedua kulit.',
              'Inilah yang menjelaskan kenapa setiap unsur memancarkan warna cahaya yang khas (spektrum garis) saat dipanaskan — setiap unsur punya susunan tingkat energi elektron yang unik.'
            ]
          },
          rumus:{ formula:'ΔE = E_akhir − E_awal = energi foton yang diserap/dipancarkan', note:'Model Bohr paling akurat untuk atom hidrogen (1 elektron); untuk atom lebih kompleks, model mekanika kuantum modern lebih presisi — tapi ide "tingkat energi diskrit" tetap dipakai sampai sekarang.' },
          duniaNyata:[
            { title:'Lampu neon & lampu jalan', text:'Warna khas lampu neon (merah), natrium (kuning-oranye), atau merkuri (biru-putih) terjadi karena elektron gas di dalamnya melompat turun antar tingkat energi yang berbeda-beda untuk tiap unsur, memancarkan warna cahaya yang unik.' },
            { title:'Kembang api berwarna', text:'Warna-warni kembang api berasal dari senyawa logam berbeda (stronsium=merah, tembaga=biru, natrium=kuning) — tiap logam memancarkan warna sesuai selisih energi lompatan elektronnya sendiri.' }
          ],
          kasus:{
            soal:'Sebuah elektron dalam atom hidrogen berpindah dari kulit dengan energi lebih tinggi ke kulit dengan energi lebih rendah. Apa yang terjadi, dan mengapa peristiwa ini bisa dideteksi sebagai cahaya?',
            steps:[
              'Ingat postulat Bohr: elektron yang turun ke tingkat energi lebih rendah harus melepaskan kelebihan energinya.',
              'Energi yang dilepaskan keluar dalam bentuk foton (paket cahaya) dengan besar energi yang sama persis dengan selisih energi kedua kulit.',
              'Karena tiap unsur punya selisih energi kulit yang berbeda-beda, foton yang dipancarkan punya warna (panjang gelombang) yang berbeda pula — inilah yang tertangkap sebagai spektrum garis khas tiap unsur.'
            ],
            jawaban:'Elektron memancarkan energinya sebagai <strong>foton cahaya</strong> saat turun tingkat — inilah dasar mengapa setiap unsur punya "sidik jari warna" (spektrum) yang unik saat dipanaskan atau dialiri listrik.'
          },
          ujiNalar:{
            soal:'Kenapa model Bohr berhasil menjelaskan kestabilan atom, sementara model Rutherford tidak?',
            options:[
              'Karena Bohr menambahkan neutron ke dalam inti atom',
              'Karena Bohr membatasi elektron hanya boleh berada pada tingkat energi tertentu (diskrit), sehingga elektron tidak kehilangan energi dan jatuh ke inti',
              'Karena Bohr menghilangkan muatan pada inti atom',
              'Karena Bohr menyatakan atom tidak memiliki elektron sama sekali'
            ],
            correctIndex:1,
            explanation:'Rutherford tidak membatasi posisi elektron, sehingga menurut fisika klasik elektron akan terus kehilangan energi dan jatuh ke inti. Bohr membatasi elektron hanya boleh berada pada <strong>tingkat energi tertentu (diskrit)</strong>, sehingga atom tetap stabil selama elektron tidak berpindah tingkat.'
          }
        },
        {
          id:'partikel-notasi-atom',
          title:'Partikel Penyusun Atom & Notasi (Z, A, Isotop)',
          mengamati:'Setelah tahu atom tersusun dari inti dan elektron yang mengorbit, pertanyaan berikutnya: <strong>apa saja isi inti itu sendiri?</strong> Kenapa dua atom bisa punya sifat kimia identik tapi massa berbeda?',
          kenapa:'Penelitian lanjutan (termasuk oleh James Chadwick pada 1932) menemukan inti atom bukan cuma berisi proton (partikel bermuatan positif), tapi juga <strong>neutron</strong> (partikel tanpa muatan) yang menambah massa tanpa mengubah muatan listrik atom. Penemuan ini menjelaskan fenomena yang tidak bisa dijelaskan proton saja: kenapa atom dari unsur yang sama bisa punya massa berbeda-beda (isotop).',
          menelaah:{
            text:'Tiga partikel dasar penyusun atom, dan bagaimana notasi atom dibaca. Ketuk diagram untuk detail:',
            points:[
              '<strong>Proton</strong> (muatan +1, di inti) menentukan identitas unsur — jumlah proton disebut <strong>nomor atom (Z)</strong>. Ubah jumlah proton, unsurnya berubah total.',
              '<strong>Neutron</strong> (tanpa muatan, di inti) menambah massa tanpa mengubah identitas unsur. Jumlah proton + neutron = <strong>nomor massa (A)</strong>.',
              '<strong>Elektron</strong> (muatan −1, mengorbit inti) jumlahnya sama dengan proton pada atom netral.',
              '<strong>Isotop</strong> adalah atom dari unsur sama (Z sama) tapi jumlah neutron berbeda (A berbeda) — contoh: karbon-12 dan karbon-14 sama-sama karbon (6 proton) tapi massanya beda karena jumlah neutron beda.'
            ],
            diagram:{
              viewBox:[200,90],
              svg:'<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg"><text x="20" y="45" fill="#E7F1FA" font-size="26" font-family="monospace">A</text><text x="20" y="75" fill="#E7F1FA" font-size="26" font-family="monospace">Z</text><text x="55" y="60" fill="#FFB627" font-size="26" font-family="monospace">X</text></svg>',
              cap:'Notasi atom standar: A di kiri atas, Z di kiri bawah, lambang unsur di tengah.',
              hotspots:[
                {cx:20,cy:35,label:'A = nomor massa',text:'Jumlah proton + neutron dalam inti atom.'},
                {cx:20,cy:70,label:'Z = nomor atom',text:'Jumlah proton — menentukan identitas unsur.'},
                {cx:60,cy:55,label:'X = lambang unsur',text:'Simbol kimia unsur tersebut, misalnya Cl untuk klorin.'}
              ]
            }
          },
          rumus:{ formula:'A = Z + n &nbsp;(nomor massa = nomor atom + jumlah neutron)', note:'Untuk atom netral: jumlah elektron = jumlah proton = Z. Untuk ion, jumlah elektron berbeda dari Z sesuai muatan ion.' },
          duniaNyata:[
            { title:'Penanggalan karbon (carbon dating)', text:'Arkeolog menentukan usia fosil dari perbandingan isotop karbon-14 (radioaktif, meluruh perlahan) terhadap karbon-12 (stabil) — karena keduanya kimiawi identik tapi meluruh dengan laju berbeda.' },
            { title:'Terapi & diagnosis medis (radioisotop)', text:'Isotop iodin-131 dipakai untuk mendiagnosis dan mengobati gangguan tiroid — tubuh menyerapnya sama seperti iodin biasa (karena sifat kimia sama), tapi sifat radioaktifnya bisa dimanfaatkan secara medis.' }
          ],
          kasus:{
            soal:'Suatu atom memiliki notasi ₁₇³⁵Cl (nomor massa 35, nomor atom 17). Tentukan jumlah proton, elektron, dan neutron atom tersebut.',
            steps:[
              'Nomor atom Z = 17 → jumlah proton = 17 (langsung dari definisi Z).',
              'Karena atom netral (tidak disebutkan sebagai ion), jumlah elektron = jumlah proton = 17.',
              'Gunakan rumus A = Z + n untuk mencari neutron: 35 = 17 + n, maka n = 35 − 17 = 18.'
            ],
            jawaban:'Atom klorin ini memiliki <strong>17 proton, 17 elektron, dan 18 neutron</strong>.'
          },
          ujiNalar:{
            soal:'Karbon-12 dan Karbon-14 disebut isotop. Kenapa keduanya punya sifat kimia yang sama tapi massa berbeda?',
            options:[
              'Karena jumlah protonnya berbeda tapi elektronnya sama',
              'Karena jumlah proton dan elektron sama (menentukan sifat kimia), hanya jumlah neutron yang beda (menambah massa)',
              'Karena keduanya punya jumlah neutron sama tapi proton berbeda',
              'Karena karbon-14 sebenarnya bukan unsur karbon sungguhan'
            ],
            correctIndex:1,
            explanation:'Keduanya sama-sama memiliki 6 proton (Z=6) dan 6 elektron — sifat kimia ditentukan jumlah elektron/proton, sehingga sifat kimianya identik. Perbedaannya hanya jumlah neutron: karbon-12 punya 6 neutron, karbon-14 punya 8 neutron — <strong>neutron menambah massa tanpa mengubah sifat kimia</strong>.'
          }
        }
      ]
    },
    {
      id:'sistem-periodik',
      title:'Sistem Periodik Unsur',
      meta:'Kasus 04 · 3 investigasi',
      unlocked:true,
      subbabs:[
        {
          id:'sejarah-sistem-periodik',
          title:'Dari Kekacauan ke Pola: Sejarah Sistem Periodik',
          mengamati:'Pada awal 1800-an, puluhan unsur kimia sudah ditemukan tapi tersebar tanpa keteraturan yang jelas — seperti memiliki ratusan buku tanpa sistem katalog perpustakaan.',
          kenapa:'Dmitri Mendeleev (1869) mengorganisir unsur-unsur berdasar massa atom dan kemiripan sifat kimia, lalu (ini bagian paling berani) SENGAJA meninggalkan kotak kosong untuk unsur yang BELUM ditemukan, memprediksi sifat-sifatnya dari pola di sekitarnya — dan prediksinya terbukti akurat saat unsur-unsur itu benar-benar ditemukan kemudian.',
          menelaah:{ text:'Bagaimana sistem periodik berkembang:', points:['Mendeleev menyusun unsur dalam baris (periode) & kolom (golongan) berdasar pola berulang sifat kimia.', 'Keberanian meninggalkan kotak kosong (bukan memaksakan unsur yang ada ke tempat yang salah) menunjukkan Mendeleev percaya pada pola yang ia temukan.', 'Sistem periodik MODERN disusun berdasar NOMOR ATOM (bukan massa atom seperti Mendeleev), yang ternyata menghasilkan pola yang lebih konsisten.'] },
          rumus:{ formula:'Sistem modern: disusun berdasar NOMOR ATOM (jumlah proton), bukan massa atom', note:'Penyempurnaan ini terjadi setelah struktur atom (proton, elektron) dipahami lebih dalam.' },
          duniaNyata:[
            { title:'Prediksi unsur germanium', text:'Mendeleev memprediksi unsur "eka-silikon" (kemudian ditemukan & dinamai germanium) yang sifatnya hampir persis cocok dengan ramalannya puluhan tahun sebelumnya.' },
            { title:'Unsur sintetis baru', text:'Sistem periodik modern terus diperbarui saat unsur sintetis baru berhasil dibuat di laboratorium fisika nuklir.' }
          ],
          kasus:{ soal:'Mendeleev meninggalkan kotak kosong di antara silikon dan timah, memprediksi akan ada unsur dengan sifat "di antara" keduanya. Kenapa keberanian ini penting bagi perkembangan sains?', steps:['Kalau Mendeleev memaksakan unsur yang ada ke tempat yang tak sesuai pola, sistemnya akan terlihat "cocok" secara dangkal tapi kehilangan kekuatan prediktifnya.', 'Dengan meninggalkan kotak kosong, ia menunjukkan bahwa POLA itu sendiri adalah temuan yang lebih penting.', 'Saat germanium ditemukan & sifatnya cocok dengan prediksi, ini membuktikan sistem periodik mengungkap struktur alam yang sesungguhnya.'], jawaban:'Keberanian itu penting karena membuktikan sistem periodik <strong>mengungkap pola alam yang sesungguhnya</strong>, bukan sekadar cara mengelompokkan data yang sudah ada.' },
          ujiNalar:{ soal:'Apa perbedaan utama antara sistem periodik Mendeleev (1869) dan sistem periodik modern?', options:['Mendeleev menyusun berdasarkan warna unsur, modern berdasarkan massa', 'Mendeleev menyusun berdasarkan massa atom, sistem modern berdasarkan nomor atom (jumlah proton)', 'Tidak ada perbedaan sama sekali', 'Sistem modern hanya menambahkan lebih banyak unsur tanpa mengubah prinsip penyusunan'], correctIndex:1, explanation:'Mendeleev memakai <strong>massa atom</strong>, sistem modern memakai <strong>nomor atom (jumlah proton)</strong> yang terbukti lebih konsisten.' }
        },
        {
          id:'golongan-periode-konfigurasi',
          title:'Golongan, Periode & Konfigurasi Elektron',
          mengamati:'Unsur natrium (Na) dan kalium (K) sama-sama logam yang bereaksi hebat dengan air, meski nomor atomnya jauh berbeda (11 vs 19). Kenapa unsur-unsur yang "jauh" letak nomor atomnya bisa punya sifat kimia yang begitu mirip?',
          kenapa:'Kemiripan sifat kimia antar unsur segolongan ternyata bukan kebetulan — ia berasal dari KONFIGURASI ELEKTRON KULIT TERLUAR (elektron valensi) yang identik, dan elektron valensi inilah yang paling menentukan bagaimana suatu unsur bereaksi kimia.',
          menelaah:{ text:'Pola konfigurasi elektron pada tabel periodik:', points:['Elektron dalam atom tersusun dalam KULIT-KULIT (tingkat energi) berbeda, mengikuti pola pengisian tertentu.', 'Unsur dalam GOLONGAN (kolom) yang sama memiliki jumlah elektron valensi yang SAMA — inilah kenapa Na dan K punya sifat kimia serupa.', 'Unsur dalam PERIODE (baris) yang sama memiliki jumlah kulit elektron yang sama, tapi elektron valensinya berbeda-beda sepanjang periode itu.'] },
          rumus:{ formula:'Golongan sama = elektron valensi sama &nbsp;·&nbsp; Periode sama = jumlah kulit sama', note:'Elektron valensi adalah faktor utama yang menentukan sifat kimia suatu unsur.' },
          duniaNyata:[
            { title:'Logam alkali (golongan IA)', text:'Reaktivitas Li, Na, K yang makin hebat ke bawah tabel dimanfaatkan/diwaspadai dalam eksperimen kimia sekolah.' },
            { title:'Baterai lithium', text:'Memanfaatkan sifat elektron valensi tunggal logam alkali yang mudah dilepas.' }
          ],
          kasus:{ soal:'Unsur X memiliki 11 elektron, tersusun dalam konfigurasi 2,8,1. Golongan berapa unsur X, dan sifat kimia macam apa yang diperkirakan?', steps:['Elektron valensi (kulit terluar) unsur X = 1, menunjukkan ia berada di golongan IA (logam alkali).', 'Unsur dengan konfigurasi ini adalah natrium (Na).', 'Sifat kimianya diperkirakan mirip logam alkali lain: reaktif, mudah melepas 1 elektron valensinya untuk membentuk ion bermuatan +1.'], jawaban:'Unsur X berada di <strong>golongan IA</strong> (logam alkali) — inilah natrium (Na).' },
          ujiNalar:{ soal:'Kenapa unsur-unsur dalam GOLONGAN yang sama pada tabel periodik cenderung memiliki sifat kimia yang mirip?', options:['Karena massa atomnya selalu sama', 'Karena jumlah elektron valensi (kulit terluar) mereka sama, dan elektron valensi paling menentukan sifat kimia unsur', 'Karena mereka ditemukan pada tahun yang sama', 'Karena warnanya sama'], correctIndex:1, explanation:'Elektron valensi yang sama adalah penyebab utama <strong>kemiripan sifat kimia</strong> antar unsur segolongan.' }
        },
        {
          id:'sifat-periodik-unsur',
          title:'Sifat Periodik: Jari-Jari Atom, Energi Ionisasi & Keelektronegatifan',
          mengamati:'Dalam satu golongan (kolom), sifat unsur berubah secara TERATUR dari atas ke bawah — dan dalam satu periode (baris), berubah teratur dari kiri ke kanan. Pola keteraturan inilah yang membuat tabel disebut "periodik".',
          kenapa:'Memahami TREN sifat periodik (bukan menghafal nilai tiap unsur satu-satu) memungkinkan kita MEMPREDIKSI sifat unsur yang belum pernah dipelajari langsung, cukup dari posisinya di tabel.',
          menelaah:{ text:'Tiga tren sifat periodik utama:', points:['JARI-JARI ATOM mengecil dari kiri ke kanan sepanjang periode (tarikan inti lebih kuat) dan membesar dari atas ke bawah sepanjang golongan (kulit elektron bertambah).', 'ENERGI IONISASI (energi melepas elektron terluar) meningkat dari kiri ke kanan dan menurun dari atas ke bawah.', 'KEELEKTRONEGATIFAN (kecenderungan menarik elektron dalam ikatan) mengikuti pola serupa energi ionisasi.'] },
          rumus:{ formula:'Ke kanan (1 periode): jari-jari↓, energi ionisasi↑ &nbsp;·&nbsp; Ke bawah (1 golongan): jari-jari↑, energi ionisasi↓', note:'Menghafal dua tren ini cukup untuk memprediksi sebagian besar sifat periodik lainnya.' },
          duniaNyata:[
            { title:'Halogen sebagai disinfektan', text:'Unsur golongan VIIA (fluorin, klorin) punya keelektronegatifan tinggi sehingga sangat reaktif — dipakai dalam disinfektan (klorin kolam renang) & pasta gigi (fluorin).' },
            { title:'Reaktivitas logam alkali', text:'Golongan IA (kiri bawah tabel) punya energi ionisasi rendah, sangat reaktif, dipakai dengan hati-hati dalam eksperimen kimia.' }
          ],
          kasus:{ soal:'Bandingkan jari-jari atom natrium (Na, golongan IA periode 3) dengan magnesium (Mg, golongan IIA periode 3). Mana yang jari-jarinya lebih besar?', steps:['Na dan Mg berada pada periode yang sama (3), tapi Mg memiliki lebih banyak proton (12) dibanding Na (11).', 'Menurut tren periodik, jari-jari atom mengecil dari kiri ke kanan sepanjang periode.', 'Karena Mg lebih ke kanan dari Na, jari-jari atom Mg lebih kecil dari Na.'], jawaban:'Jari-jari atom <strong>natrium (Na) lebih besar</strong> dari magnesium (Mg).' },
          ujiNalar:{ soal:'Bagaimana tren energi ionisasi dari ATAS ke BAWAH dalam satu golongan tabel periodik?', options:['Meningkat, karena elektron semakin dekat ke inti', 'Menurun, karena elektron valensi semakin jauh dari inti sehingga lebih mudah dilepas', 'Tidak berubah sama sekali', 'Tergantung jenis unsurnya, tidak ada pola pasti'], correctIndex:1, explanation:'Energi ionisasi <strong>menurun</strong> ke bawah golongan karena elektron valensi makin jauh dari inti, makin mudah dilepas.' }
        }
      ]
    },
    {
      id:'ikatan-kimia',
      title:'Ikatan Kimia',
      meta:'Kasus 05 · 3 investigasi',
      unlocked:true,
      subbabs:[
        {
          id:'mengapa-atom-berikatan',
          title:'Mengapa Atom Berikatan? Aturan Oktet',
          mengamati:'Gas mulia (helium, neon, argon) hampir tak pernah bereaksi dengan unsur lain, sementara natrium & klorin bereaksi hebat membentuk garam dapur (NaCl). Ada sesuatu yang "spesial" pada susunan elektron gas mulia.',
          kenapa:'Atom cenderung berikatan untuk mencapai konfigurasi elektron yang STABIL, yaitu 8 elektron di kulit terluarnya (seperti gas mulia) — dikenal sebagai aturan oktet. Kestabilan ini mendorong sebagian besar reaksi kimia terjadi.',
          menelaah:{ text:'Bagaimana atom "mencari" kestabilan:', points:['Atom dengan elektron valensi SEDIKIT (mis. logam golongan IA) cenderung MELEPAS elektron untuk mencapai konfigurasi stabil.', 'Atom dengan elektron valensi BANYAK (mis. golongan VIIA) cenderung MENERIMA elektron tambahan untuk mencapai 8.', 'Atom yang melepas elektron jadi ION POSITIF (kation), yang menerima jadi ION NEGATIF (anion) — tarikan listrik antara ion berlawanan muatan disebut IKATAN ION.'] },
          rumus:{ formula:'Aturan oktet: atom "ingin" memiliki 8 elektron di kulit terluar (kecuali H dan He yang stabil dengan 2)', note:'Aturan ini menjelaskan sebagian besar (meski tak semua) pola pembentukan ikatan kimia.' },
          duniaNyata:[
            { title:'Garam dapur (NaCl)', text:'Terbentuk dari natrium yang melepas 1 elektron ke klorin yang menerimanya — keduanya jadi lebih stabil.' },
            { title:'Baterai', text:'Memanfaatkan kecenderungan atom melepas/menerima elektron untuk menghasilkan aliran listrik.' }
          ],
          kasus:{ soal:'Atom natrium (Na, konfigurasi 2,8,1) bereaksi dengan atom klorin (Cl, konfigurasi 2,8,7). Jelaskan apa yang terjadi berdasarkan aturan oktet.', steps:['Na memiliki 1 elektron valensi — lebih mudah MELEPAS 1 elektron daripada menerima 7 elektron tambahan.', 'Cl memiliki 7 elektron valensi — lebih mudah MENERIMA 1 elektron untuk melengkapi oktet.', 'Na melepas 1 elektron (jadi Na⁺ stabil), elektron itu diterima Cl (jadi Cl⁻ stabil).'], jawaban:'Na melepas 1 elektron menjadi <strong>Na⁺</strong>, Cl menerima elektron itu menjadi <strong>Cl⁻</strong> — keduanya mencapai konfigurasi oktet stabil.' },
          ujiNalar:{ soal:'Kenapa gas mulia (seperti neon, argon) sangat jarang bereaksi dengan unsur lain?', options:['Karena gas mulia tidak memiliki elektron sama sekali', 'Karena gas mulia sudah memiliki 8 elektron di kulit terluarnya (oktet), sehingga sudah stabil dan tidak perlu melepas/menerima elektron', 'Karena gas mulia terlalu ringan untuk bereaksi', 'Karena gas mulia hanya ada di atmosfer bagian atas'], correctIndex:1, explanation:'Gas mulia sudah memiliki <strong>8 elektron valensi (oktet)</strong>, sehingga sudah stabil dan tak perlu bereaksi.' }
        },
        {
          id:'ikatan-ion-kovalen',
          title:'Ikatan Ion vs Ikatan Kovalen',
          mengamati:'Garam dapur (NaCl) berbentuk kristal keras yang meleleh pada suhu sangat tinggi (801°C), sementara air (H2O) berbentuk cair pada suhu ruang & mendidih hanya di 100°C. Kenapa dua senyawa ini berperilaku begitu berbeda?',
          kenapa:'Perbedaan drastis ini berasal dari JENIS IKATAN yang berbeda: NaCl terbentuk dari ikatan ION (transfer elektron penuh), sementara H2O terbentuk dari ikatan KOVALEN (berbagi pasangan elektron).',
          menelaah:{ text:'Dua mekanisme pembentukan ikatan:', points:['Ikatan ION terjadi antara atom LOGAM (mudah melepas elektron) dan NON-LOGAM (mudah menerima elektron) — elektron benar-benar BERPINDAH.', 'Ikatan KOVALEN terjadi antara sesama atom NON-LOGAM yang sama-sama butuh menerima elektron — keduanya BERBAGI sepasang elektron.', 'Senyawa ion cenderung kristal keras dengan titik leleh tinggi; senyawa kovalen sederhana cenderung cair/gas dengan titik leleh lebih rendah.'] },
          rumus:{ formula:'Ikatan ion: transfer elektron penuh &nbsp;·&nbsp; Ikatan kovalen: berbagi pasangan elektron', note:'Aturan praktis: logam+nonlogam biasanya ion, nonlogam+nonlogam biasanya kovalen.' },
          duniaNyata:[
            { title:'Garam larut & menghantarkan listrik', text:'Garam dapur (ikatan ion) larut baik dalam air & menghantarkan listrik saat larut (ion bebas bergerak).' },
            { title:'Gula tidak menghantarkan listrik', text:'Gula (ikatan kovalen) larut dalam air tapi tidak menghantarkan listrik (tak ada ion bebas).' }
          ],
          kasus:{ soal:'Sebuah senyawa memiliki titik leleh sangat tinggi (>800°C) dan menghantarkan listrik saat dilarutkan dalam air. Senyawa lain memiliki titik leleh rendah dan tidak menghantarkan listrik. Prediksi jenis ikatan masing-masing.', steps:['Senyawa pertama (titik leleh tinggi, menghantarkan listrik) menunjukkan ciri khas IKATAN ION.', 'Senyawa kedua (titik leleh rendah, tak menghantarkan listrik) menunjukkan ciri khas IKATAN KOVALEN.', 'Simpulkan jenis ikatan berdasarkan ciri-ciri fisiknya.'], jawaban:'Senyawa pertama kemungkinan besar berikatan <strong>ion</strong>, senyawa kedua berikatan <strong>kovalen</strong>.' },
          ujiNalar:{ soal:'Kenapa larutan garam dapur (NaCl) bisa menghantarkan listrik, sementara larutan gula tidak?', options:['Karena garam lebih asin dari gula', 'Karena NaCl berikatan ion sehingga terurai jadi ion-ion bebas bergerak dalam air yang bisa menghantarkan listrik, sedangkan gula berikatan kovalen dan tidak menghasilkan ion bebas', 'Karena gula tidak larut dalam air', 'Karena garam memiliki warna yang berbeda dari gula'], correctIndex:1, explanation:'NaCl terurai jadi <strong>ion-ion bebas bergerak</strong> yang bisa menghantarkan listrik; gula (kovalen) tidak menghasilkan ion bebas.' }
        },
        {
          id:'struktur-lewis-kepolaran',
          title:'Struktur Lewis & Kepolaran Ikatan',
          mengamati:'Pada molekul air (H2O), kedua atom H tidak menarik pasangan elektron ikatan sama kuatnya dengan atom O — elektron "condong" lebih dekat ke O. Ketimpangan sekecil ini berdampak besar pada sifat air.',
          kenapa:'Struktur Lewis diciptakan untuk memvisualisasikan bagaimana elektron valensi tersusun & dibagi dalam suatu molekul — dari situ, KEPOLARAN ikatan (ketimpangan tarikan elektron) bisa dianalisis, bukan cuma dihafal sebagai fakta.',
          menelaah:{ text:'Bagaimana kepolaran ikatan muncul:', points:['Struktur Lewis menggambarkan elektron valensi sebagai titik-titik dan pasangan elektron ikatan sebagai garis penghubung antar atom.', 'Kepolaran ikatan muncul saat dua atom yang berikatan kovalen punya KEELEKTRONEGATIFAN BERBEDA — atom yang lebih elektronegatif menarik elektron lebih dekat.', 'Kalau perbedaan keelektronegatifan sangat besar (biasanya logam-nonlogam), ikatan cenderung jadi ION, bukan sekadar condong.'] },
          rumus:{ formula:'Δ Keelektronegatifan besar → ikatan ion &nbsp;·&nbsp; Δ sedang → kovalen polar &nbsp;·&nbsp; Δ ≈ 0 → kovalen nonpolar', note:'Skala perbedaan keelektronegatifan ini menentukan spektrum jenis ikatan.' },
          duniaNyata:[
            { title:'Air sebagai "pelarut universal"', text:'Sisi δ+ dan δ- air bisa menarik & mengelilingi ion/molekul polar lain, melarutkannya.' },
            { title:'Deterjen', text:'Dirancang dengan bagian polar & nonpolar sekaligus untuk mengikat kotoran berminyak sekaligus larut dalam air.' }
          ],
          kasus:{ soal:'Molekul HCl memiliki klorin yang jauh lebih elektronegatif daripada hidrogen. Prediksi kepolaran ikatan H-Cl dan tentukan sisi mana yang bermuatan parsial negatif.', steps:['Klorin memiliki keelektronegatifan lebih tinggi, sehingga menarik pasangan elektron ikatan lebih dekat ke dirinya.', 'Ini menciptakan ketimpangan distribusi elektron.', 'Molekul HCl adalah molekul KOVALEN POLAR.'], jawaban:'Ikatan H-Cl bersifat <strong>kovalen polar</strong>, dengan sisi <strong>klorin bermuatan parsial negatif (δ-)</strong>.' },
          ujiNalar:{ soal:'Molekul dengan dua atom SEJENIS (seperti gas H2 atau O2) selalu bersifat kovalen NONPOLAR. Kenapa?', options:['Karena atom sejenis tidak bisa berikatan', 'Karena atom sejenis memiliki keelektronegatifan yang sama persis, sehingga tidak ada atom yang menarik elektron lebih kuat dari yang lain', 'Karena molekul diatomik selalu tidak stabil', 'Karena tidak ada elektron yang dibagi dalam molekul diatomik'], correctIndex:1, explanation:'Atom sejenis punya <strong>keelektronegatifan sama persis</strong>, sehingga elektron ikatan terbagi rata — tidak ada kepolaran.' }
        }
      ]
    },
    {
      id:'bentuk-molekul',
      title:'Bentuk Molekul & Interaksi Antarpartikel',
      meta:'Kasus 06 · 3 investigasi',
      unlocked:true,
      subbabs:[
        {
          id:'teori-vsepr-bentuk-molekul',
          title:'Teori VSEPR: Memprediksi Bentuk Molekul',
          mengamati:'Molekul air (H2O) berbentuk bengkok (seperti huruf V), sementara molekul karbon dioksida (CO2) berbentuk lurus, meski keduanya sama-sama "3 atom". Kenapa bentuknya bisa sangat berbeda?',
          kenapa:'Teori VSEPR (tolakan pasangan elektron kulit valensi) menjelaskan bentuk molekul dari prinsip sederhana: pasangan elektron di sekitar atom pusat SALING TOLAK-MENOLAK, dan akan mengatur posisi sejauh mungkin satu sama lain untuk meminimalkan tolakan itu.',
          menelaah:{ text:'Bagaimana VSEPR menentukan bentuk molekul:', points:['Pasangan elektron BEBAS (tak berikatan) menempati lebih banyak "ruang" & memberikan tolakan lebih besar daripada pasangan elektron BERIKATAN.', 'Pada CO2, atom pusat karbon tidak punya pasangan elektron bebas — hanya 2 ikatan yang saling tolak sejauh mungkin, menghasilkan bentuk LINEAR (180°).', 'Pada H2O, atom pusat oksigen punya 2 pasangan elektron bebas yang "mendorong" ikatan O-H lebih rapat, menghasilkan bentuk BENGKOK (~104,5°).'] },
          rumus:{ formula:'Jumlah domain elektron (ikatan + bebas) di atom pusat menentukan bentuk dasar molekul', note:'Pasangan bebas selalu memberikan tolakan lebih besar dibanding pasangan ikatan.' },
          duniaNyata:[
            { title:'Sifat pelarut air', text:'Bentuk bengkok H2O yang membuatnya polar (dan jadi pelarut universal) berbeda total dari CO2 linear yang nonpolar.' },
            { title:'Desain obat farmasi', text:'Memperhitungkan bentuk molekul agar "pas" berikatan dengan reseptor tubuh tertentu.' }
          ],
          kasus:{ soal:'Molekul metana (CH4) memiliki atom pusat karbon terikat pada 4 atom hidrogen, tanpa pasangan elektron bebas. Prediksi bentuk molekul metana berdasarkan VSEPR.', steps:['Karbon memiliki 4 domain elektron, semuanya berupa ikatan (tak ada pasangan bebas).', 'Untuk meminimalkan tolakan, 4 pasangan ikatan mengatur diri sejauh mungkin dalam ruang 3D.', 'Susunan yang meminimalkan tolakan untuk 4 domain adalah bentuk TETRAHEDRAL.'], jawaban:'Molekul metana berbentuk <strong>tetrahedral</strong> (piramida segitiga), dengan sudut ikatan sekitar 109,5°.' },
          ujiNalar:{ soal:'Kenapa molekul air (H2O) berbentuk bengkok, bukan lurus, padahal sama-sama memiliki 3 atom seperti CO2?', options:['Karena oksigen lebih berat dari karbon', 'Karena oksigen memiliki 2 pasangan elektron bebas yang mendorong kedua ikatan O-H lebih rapat, sementara karbon pada CO2 tidak memiliki pasangan bebas', 'Karena air selalu berbentuk cair', 'Karena hidrogen lebih kecil dari oksigen'], correctIndex:1, explanation:'Pasangan elektron bebas pada oksigen <strong>mendorong ikatan O-H lebih rapat</strong>, menghasilkan bentuk bengkok.' }
        },
        {
          id:'kepolaran-molekul',
          title:'Kepolaran Molekul: Dari Ikatan ke Keseluruhan Molekul',
          mengamati:'Molekul CO2 memiliki 2 ikatan C=O yang masing-masing polar — tapi secara keseluruhan, molekul CO2 ternyata NONPOLAR. Bagaimana bisa molekul dengan ikatan polar jadi nonpolar secara keseluruhan?',
          kenapa:'Kepolaran MOLEKUL berbeda dari kepolaran IKATAN — molekul mempertimbangkan bentuk geometrinya juga, karena arah kepolaran tiap ikatan bisa saling MENIADAKAN kalau susunannya simetris.',
          menelaah:{ text:'Dua faktor yang menentukan kepolaran molekul:', points:['Kepolaran tiap ikatan (dari perbedaan keelektronegatifan) DAN bentuk geometri molekul (arah ikatan-ikatan tersusun).', 'Pada CO2 (linear, simetris), kedua ikatan C=O polar tapi arahnya berlawanan & sama besar — saling meniadakan, hasilnya nonpolar.', 'Pada H2O (bengkok, tidak simetris), kedua ikatan O-H polar dan arahnya TIDAK saling meniadakan — hasilnya tetap polar.'] },
          rumus:{ formula:'Molekul polar = ikatan polar + bentuk TIDAK simetris', note:'Molekul simetris dengan ikatan polar bisa tetap nonpolar secara keseluruhan.' },
          duniaNyata:[
            { title:'Minyak tidak bercampur air', text:'Prinsip "like dissolves like" menjelaskan kenapa minyak (nonpolar) & air (polar) terpisah.' },
            { title:'Kelarutan CO2', text:'CO2 yang nonpolar membuatnya tak larut baik dalam air, tapi larut baik dalam pelarut nonpolar.' }
          ],
          kasus:{ soal:'Molekul BF3 memiliki bentuk segitiga datar simetris, dengan 3 ikatan B-F yang masing-masing polar. Prediksi apakah BF3 secara keseluruhan polar atau nonpolar.', steps:['Setiap ikatan B-F memang polar secara individual.', 'Tapi bentuk trigonal planar yang simetris membuat ketiga arah kepolaran ikatan saling meniadakan.', 'Karena arah kepolaran saling meniadakan sempurna, molekul BF3 bersifat NONPOLAR.'], jawaban:'Molekul BF3 bersifat <strong>nonpolar</strong> secara keseluruhan, meski tiap ikatan B-F individualnya polar.' },
          ujiNalar:{ soal:'Kenapa molekul dengan ikatan-ikatan yang polar bisa tetap bersifat NONPOLAR secara keseluruhan?', options:['Karena ikatan polar sebenarnya tidak ada', 'Karena bentuk molekul yang simetris membuat arah kepolaran tiap ikatan saling meniadakan', 'Karena molekul besar selalu nonpolar', 'Karena hanya ikatan ion yang bisa polar'], correctIndex:1, explanation:'Bentuk molekul yang <strong>simetris</strong> membuat arah kepolaran ikatan saling meniadakan.' }
        },
        {
          id:'gaya-antarmolekul',
          title:'Gaya Antarmolekul: Kenapa Zat Punya Titik Didih Berbeda',
          mengamati:'Air (H2O, massa molekul 18) mendidih pada 100°C, sementara metana (CH4, massa molekul 16) mendidih pada -162°C. Kalau massa molekulnya mirip, kenapa titik didihnya bisa berbeda sangat jauh?',
          kenapa:'Titik didih ditentukan oleh seberapa KUAT gaya tarik ANTAR molekul (bukan ikatan DALAM molekul) yang harus diatasi agar molekul bisa lepas jadi gas.',
          menelaah:{ text:'Tiga jenis gaya antarmolekul, dari yang terlemah sampai terkuat:', points:['Gaya LONDON adalah gaya tarik LEMAH yang ada pada semua molekul, muncul dari fluktuasi sesaat distribusi elektron.', 'Gaya DIPOL-DIPOL terjadi antar molekul POLAR — lebih kuat dari gaya London pada molekul seukuran.', 'IKATAN HIDROGEN adalah jenis gaya dipol-dipol yang sangat kuat, terjadi saat atom H terikat langsung ke atom yang sangat elektronegatif & kecil (O, N, F).'] },
          rumus:{ formula:'Kekuatan gaya antarmolekul: Ikatan hidrogen &gt; Dipol-dipol &gt; Gaya London', note:'Ini urutan kekuatan untuk molekul seukuran — semakin kuat gaya, semakin tinggi titik didihnya.' },
          duniaNyata:[
            { title:'Sifat unik air', text:'Titik didih tinggi & tegangan permukaan besar berkat ikatan hidrogen antar molekulnya — krusial bagi kehidupan di bumi.' },
            { title:'Gas alam (metana)', text:'Tetap berwujud gas pada suhu ruang karena hanya punya gaya London yang lemah antar molekulnya.' }
          ],
          kasus:{ soal:'Dua senyawa memiliki massa molekul hampir sama, tapi senyawa A memiliki titik didih jauh lebih tinggi dari senyawa B. Senyawa A diketahui memiliki atom H yang terikat langsung ke atom N. Jelaskan kemungkinan penyebabnya.', steps:['Atom H yang terikat langsung ke N (elektronegatif & kecil) memenuhi syarat terbentuknya IKATAN HIDROGEN.', 'Ikatan hidrogen jauh lebih kuat dibanding gaya London biasa.', 'Senyawa B (tanpa ikatan hidrogen) hanya mengandalkan gaya London yang lebih lemah.'], jawaban:'Senyawa A memiliki titik didih lebih tinggi karena molekulnya membentuk <strong>ikatan hidrogen</strong> antar sesamanya.' },
          ujiNalar:{ soal:'Kenapa air (H2O) memiliki titik didih yang jauh lebih tinggi dibanding metana (CH4), meski massa molekul keduanya hampir sama?', options:['Karena air lebih berat dari metana', 'Karena air membentuk ikatan hidrogen antar molekulnya (gaya kuat), sedangkan metana hanya memiliki gaya London (gaya lemah)', 'Karena metana adalah gas beracun', 'Karena air memiliki lebih banyak atom'], correctIndex:1, explanation:'Air membentuk <strong>ikatan hidrogen</strong> (gaya kuat), metana hanya punya gaya London (gaya lemah).' }
        }
      ]
    },
    {
      id:'hukum-dasar-kimia',
      title:'Hukum Dasar Kimia',
      meta:'Kasus 07 · 3 investigasi',
      unlocked:true,
      subbabs:[
        {
          id:'hukum-kekekalan-massa',
          title:'Hukum Kekekalan Massa: Lavoisier & Neraca yang Teliti',
          mengamati:'Sepotong kayu dibakar dan yang tersisa hanya segenggam abu ringan — terlihat seperti massa "menghilang". Tapi Antoine Lavoisier curiga: apakah massa benar-benar hilang, atau berubah bentuk jadi sesuatu yang tak terlihat (gas)?',
          kenapa:'Lavoisier melakukan eksperimen pembakaran dalam WADAH TERTUTUP dan menimbang sebelum & sesudah reaksi dengan neraca yang sangat teliti — pada wadah terbuka, gas hasil pembakaran "kabur" tak tertimbang, membuat massa TERLIHAT berkurang; pada wadah tertutup, semua produk tetap tertimbang, membuktikan massa TIDAK berubah.',
          menelaah:{ text:'Isi dan konsekuensi hukum kekekalan massa:', points:['Massa total zat SEBELUM reaksi = massa total zat SESUDAH reaksi (dalam sistem tertutup).', 'Prinsip ini mendasari semua persamaan reaksi kimia harus SETARA.', '"Hilangnya" massa pada pembakaran kayu di wadah terbuka adalah ILUSI — massa itu "kabur" sebagai gas ke udara, tetap ada, cuma tak tertimbang.'] },
          rumus:{ formula:'Massa reaktan (sebelum) = Massa produk (sesudah)', note:'Ini prinsip fundamental yang mendasari semua perhitungan stoikiometri.' },
          duniaNyata:[
            { title:'Perhitungan stoikiometri industri', text:'Menentukan berapa banyak bahan baku dibutuhkan untuk hasil produk tertentu.' },
            { title:'Reaktor kimia tertutup', text:'Dirancang untuk memastikan tak ada produk berharga yang "kabur" tanpa terhitung.' }
          ],
          kasus:{ soal:'Sepotong logam magnesium dibakar dalam wadah TERBUKA, dan massa abunya ternyata lebih BESAR dari massa magnesium awal. Jelaskan mengapa ini tidak melanggar hukum kekekalan massa.', steps:['Magnesium yang terbakar bereaksi dengan OKSIGEN dari udara membentuk magnesium oksida (MgO).', 'Oksigen dari udara ikut bergabung ke dalam produk padat, menambah massa padatan yang tertinggal.', 'Massa total tetap kekal: massa magnesium awal + massa oksigen yang bereaksi = massa MgO yang terbentuk.'], jawaban:'Ini tidak melanggar hukum kekekalan massa karena <strong>oksigen dari udara ikut bergabung</strong> ke dalam produk padat.' },
          ujiNalar:{ soal:'Kenapa kayu yang dibakar di wadah TERBUKA tampak "kehilangan" massa, padahal hukum kekekalan massa menyatakan massa tak bisa hilang?', options:['Karena hukum kekekalan massa tidak berlaku untuk kayu', 'Karena sebagian produk pembakaran (gas CO2 dan uap air) kabur ke udara dan tidak ikut tertimbang, meski massanya tetap ada', 'Karena kayu benar-benar kehilangan massa secara nyata', 'Karena neraca yang dipakai tidak akurat'], correctIndex:1, explanation:'Gas hasil pembakaran <strong>kabur ke udara</strong> tanpa tertimbang, meski massanya tetap ada di suatu tempat.' }
        },
        {
          id:'hukum-perbandingan-tetap',
          title:'Hukum Perbandingan Tetap: Proust vs Berthollet',
          mengamati:'Air selalu tersusun dari hidrogen & oksigen dengan perbandingan massa yang SAMA PERSIS, tak peduli air itu berasal dari sungai, hujan, atau dibuat di lab. Joseph Proust berdebat sengit dengan Claude Berthollet yang percaya perbandingan unsur dalam senyawa bisa bervariasi.',
          kenapa:'Proust membuktikan lewat eksperimen berulang bahwa senyawa MURNI selalu memiliki perbandingan massa unsur penyusun yang TETAP, tak peduli dari mana atau bagaimana senyawa itu dibuat — membuktikan senyawa kimia punya "identitas komposisi" yang pasti.',
          menelaah:{ text:'Isi hukum perbandingan tetap (hukum Proust):', points:['Dalam suatu senyawa MURNI, perbandingan massa unsur-unsur penyusunnya selalu TETAP, berapa pun jumlah total senyawa itu.', 'Ini berbeda dari CAMPURAN, yang perbandingan komponennya BISA bervariasi.', 'Hukum ini menjadi bukti kuat bahwa materi tersusun dari ATOM-ATOM dengan perbandingan pasti dalam senyawa (teori atom Dalton).'] },
          rumus:{ formula:'Perbandingan massa unsur dalam senyawa murni = TETAP, berapa pun jumlah totalnya', note:'Ini yang membedakan senyawa murni dari sekadar campuran.' },
          duniaNyata:[
            { title:'Standar kemurnian obat', text:'Deviasi dari perbandingan massa yang seharusnya menandakan adanya kontaminasi/ketidakmurnian.' },
            { title:'Analisis mineral di lab geologi', text:'Memakai prinsip ini untuk mengidentifikasi jenis mineral.' }
          ],
          kasus:{ soal:'18 gram air (H2O) diketahui tersusun dari 2 gram hidrogen dan 16 gram oksigen. Jika seseorang memiliki 90 gram air murni, berapa gram oksigen yang terkandung di dalamnya?', steps:['Tentukan perbandingan massa oksigen terhadap total air: 16/18.', 'Terapkan perbandingan yang sama untuk 90 gram air: massa oksigen = (16/18)×90.', 'Hitung: (16/18)×90 = 80.'], jawaban:'Massa oksigen dalam 90 gram air murni = <strong>80 gram</strong>.' },
          ujiNalar:{ soal:'Apa perbedaan mendasar antara SENYAWA dan CAMPURAN terkait hukum perbandingan tetap?', options:['Tidak ada perbedaan, keduanya mengikuti hukum yang sama', 'Senyawa murni memiliki perbandingan massa unsur yang selalu tetap, sedangkan campuran bisa memiliki perbandingan komponen yang bervariasi', 'Campuran selalu memiliki perbandingan tetap, senyawa tidak', 'Keduanya tidak memiliki perbandingan yang bisa diukur'], correctIndex:1, explanation:'Senyawa murni punya perbandingan <strong>tetap</strong>; campuran bisa <strong>bervariasi</strong>.' }
        },
        {
          id:'hukum-perbandingan-berganda-avogadro',
          title:'Hukum Perbandingan Berganda & Hipotesis Avogadro',
          mengamati:'Karbon dan oksigen bisa membentuk DUA senyawa berbeda: karbon monoksida (CO, gas beracun) dan karbon dioksida (CO2, hasil pernapasan). Bagaimana pola perbandingan massanya?',
          kenapa:'John Dalton mengamati bahwa ketika dua unsur membentuk lebih dari satu senyawa, perbandingan massa unsur kedua (dengan massa unsur pertama dibuat tetap) selalu berupa BILANGAN BULAT SEDERHANA — bukti kuat lain bagi teori atom: atom bergabung dalam jumlah bulat, tak pernah dalam pecahan.',
          menelaah:{ text:'Dua hukum/hipotesis penting lainnya:', points:['Hukum perbandingan berganda: massa unsur kedua yang bergabung dengan massa TETAP unsur pertama akan berbanding sebagai bilangan bulat sederhana antar senyawa-senyawa itu.', 'Pada CO vs CO2 (massa karbon sama), massa oksigen berbanding 1:2 — mencerminkan CO2 punya 2 atom O per atom C, CO cuma 1.', 'Hipotesis Avogadro: pada suhu & tekanan sama, VOLUME gas yang SAMA mengandung JUMLAH PARTIKEL yang SAMA, tak peduli jenis gasnya.'] },
          rumus:{ formula:'Perbandingan berganda: rasio bilangan bulat sederhana (1:2, 1:3, dst)', note:'Hipotesis Avogadro jadi dasar penting menghitung jumlah molekul dari volume gas.' },
          duniaNyata:[
            { title:'Bahaya keracunan CO', text:'Keracunan karbon monoksida dari pembakaran tak sempurna jauh lebih berbahaya dari CO2, karena CO mengikat hemoglobin darah jauh lebih kuat dari oksigen.' },
            { title:'Perhitungan volume molar gas', text:'Hipotesis Avogadro mendasari perhitungan volume molar gas yang dipakai luas dalam industri kimia.' }
          ],
          kasus:{ soal:'Unsur nitrogen dan oksigen membentuk NO dan NO2. Jika massa nitrogen dibuat tetap sama, bagaimana perbandingan massa oksigen antara NO dan NO2?', steps:['Pada NO, setiap atom N berikatan dengan 1 atom O.', 'Pada NO2, setiap atom N berikatan dengan 2 atom O.', 'Dengan massa N sama, massa oksigen pada NO2 akan dua kali lipat dari NO.'], jawaban:'Perbandingan massa oksigen antara NO dan NO2 adalah <strong>1:2</strong> — bilangan bulat sederhana.' },
          ujiNalar:{ soal:'Apa isi utama hipotesis Avogadro?', options:['Semua gas memiliki massa yang sama pada volume yang sama', 'Pada suhu dan tekanan yang sama, volume gas yang sama mengandung jumlah partikel yang sama, tak peduli jenis gasnya', 'Gas selalu lebih ringan dari zat cair', 'Volume gas selalu tetap tak peduli suhu dan tekanan'], correctIndex:1, explanation:'Volume gas sama pada suhu & tekanan sama <strong>mengandung jumlah partikel yang sama</strong>, tak peduli jenis gasnya.' }
        }
      ]
    },
    {
      id:'persamaan-reaksi',
      title:'Persamaan Reaksi',
      meta:'Kasus 08 · 3 investigasi',
      unlocked:true,
      subbabs:[
        {
          id:'rumus-kimia-reaktan-produk',
          title:'Rumus Kimia, Reaktan & Produk',
          mengamati:'Persamaan "2H2 + O2 → 2H2O" terlihat seperti kalimat matematika biasa, tapi setiap simbol di dalamnya membawa informasi presisi tentang apa yang bereaksi, apa yang dihasilkan, dan dalam jumlah berapa.',
          kenapa:'Persamaan reaksi kimia diciptakan sebagai "bahasa universal" untuk mendeskripsikan perubahan kimia secara ringkas & presisi, dipahami ilmuwan di seluruh dunia tanpa hambatan bahasa.',
          menelaah:{ text:'Anatomi sebuah persamaan reaksi:', points:['REAKTAN (zat yang bereaksi, di sisi KIRI panah) berubah menjadi PRODUK (zat hasil reaksi, di sisi KANAN panah).', 'Koefisien (angka di depan rumus kimia) menunjukkan jumlah partikel/mol relatif, BUKAN bagian dari rumus kimia itu sendiri.', 'Simbol wujud zat: (s)=padat, (l)=cair, (g)=gas, (aq)=larutan dalam air.'] },
          rumus:{ formula:'Reaktan → Produk (dengan koefisien menunjukkan perbandingan jumlah partikel/mol)', note:'Mengubah rumus kimia mengubah IDENTITAS zat; mengubah koefisien hanya mengubah JUMLAHnya.' },
          duniaNyata:[
            { title:'Label produk kimia rumah tangga', text:'Mencantumkan rumus kimia standar yang dipahami secara internasional.' },
            { title:'Sintesis obat farmasi', text:'Didokumentasikan lewat persamaan reaksi presisi untuk memastikan konsistensi produksi.' }
          ],
          kasus:{ soal:'Dalam persamaan CH4 + 2O2 → CO2 + 2H2O, identifikasi mana reaktan dan mana produk, serta jelaskan arti koefisien 2 pada O2 dan H2O.', steps:['Reaktan (kiri panah) adalah CH4 dan O2.', 'Produk (kanan panah) adalah CO2 dan H2O.', 'Koefisien 2 pada O2 berarti dibutuhkan 2 molekul O2 untuk tiap 1 molekul CH4; koefisien 2 pada H2O berarti dihasilkan 2 molekul H2O.'], jawaban:'Reaktan: <strong>CH4 dan O2</strong>. Produk: <strong>CO2 dan H2O</strong>.' },
          ujiNalar:{ soal:'Kenapa mengubah KOEFISIEN suatu persamaan reaksi tidak mengubah identitas zatnya, sementara mengubah RUMUS KIMIA akan mengubahnya?', options:['Karena koefisien dan rumus kimia sebenarnya sama saja', 'Karena koefisien hanya menunjukkan JUMLAH partikel/mol suatu zat, sedangkan rumus kimia menunjukkan SUSUNAN atom dalam satu partikel zat itu', 'Karena koefisien tidak memiliki arti apa pun', 'Karena rumus kimia bisa berubah sesuka hati tanpa mengubah zat'], correctIndex:1, explanation:'Koefisien = <strong>jumlah</strong>, rumus kimia = <strong>susunan/identitas</strong> zat — dua hal yang berbeda.' }
        },
        {
          id:'menyetarakan-reaksi',
          title:'Menyetarakan Persamaan Reaksi',
          mengamati:'Persamaan "H2 + O2 → H2O" terlihat masuk akal, tapi kalau dihitung teliti: di kiri ada 2 atom H & 2 atom O, di kanan cuma ada 2 atom H & 1 atom O. Satu atom oksigen "menghilang" — padahal hukum kekekalan massa melarang ini.',
          kenapa:'Menyetarakan persamaan reaksi bukan sekadar formalitas matematis, tapi KEHARUSAN agar persamaan itu patuh pada hukum kekekalan massa — jumlah atom tiap unsur harus sama persis di kedua sisi panah.',
          menelaah:{ text:'Strategi menyetarakan persamaan reaksi:', points:['Hitung dulu jumlah atom tiap unsur di kedua sisi persamaan.', 'Tambahkan KOEFISIEN — jangan pernah mengubah subscript dalam rumus kimia itu sendiri.', 'Biasanya lebih mudah menyetarakan unsur yang muncul di hanya satu senyawa dulu, dan unsur H/O disetarakan terakhir.'] },
          rumus:{ formula:'Jumlah atom tiap unsur di REAKTAN = jumlah atom unsur yang sama di PRODUK', note:'Ini syarat mutlak sebuah persamaan reaksi dianggap benar/setara.' },
          duniaNyata:[
            { title:'Perhitungan farmasi & industri kimia', text:'Bergantung mutlak pada persamaan yang setara untuk menentukan jumlah bahan baku yang tepat.' },
            { title:'Bahan bakar roket', text:'Memerlukan persamaan reaksi yang presisi setara untuk menghitung dorongan yang dihasilkan.' }
          ],
          kasus:{ soal:'Setarakan persamaan reaksi H2 + O2 → H2O.', steps:['Hitung atom di kiri: 2 H, 2 O. Di kanan: 2 H, 1 O — oksigen belum setara.', 'Tambahkan koefisien 2 di depan H2O: H2 + O2 → 2H2O. Sekarang kanan: 4 H, 2 O — hidrogen jadi tak setara.', 'Tambahkan koefisien 2 di depan H2: 2H2 + O2 → 2H2O. Cek ulang: kiri 4 H, 2 O; kanan 4 H, 2 O — SETARA.'], jawaban:'Persamaan setaranya adalah <strong>2H2 + O2 → 2H2O</strong>.' },
          ujiNalar:{ soal:'Kenapa saat menyetarakan persamaan reaksi, kita TIDAK BOLEH mengubah subscript (angka kecil) dalam rumus kimia, hanya boleh menambahkan koefisien di depannya?', options:['Karena subscript tidak memiliki arti penting', 'Karena mengubah subscript akan mengubah IDENTITAS zat itu sendiri (misalnya H2O jadi H2O2, yang adalah zat berbeda), sedangkan koefisien hanya mengubah jumlahnya', 'Karena subscript lebih sulit diubah secara teknis', 'Karena aturan itu hanya berlaku untuk gas'], correctIndex:1, explanation:'Mengubah subscript mengubah <strong>identitas zat</strong> (H2O jadi H2O2 adalah zat berbeda sama sekali).' }
        },
        {
          id:'jenis-jenis-reaksi',
          title:'Jenis-Jenis Reaksi Kimia',
          mengamati:'Reaksi pembakaran, reaksi karat besi, reaksi asam-basa (cuka + baking soda), dan reaksi pemisahan air lewat listrik semuanya disebut "reaksi kimia" — tapi masing-masing punya pola perubahan yang berbeda.',
          kenapa:'Mengklasifikasi reaksi ke dalam jenis/pola tertentu memungkinkan kita MEMPREDIKSI produk suatu reaksi hanya dari mengenali polanya, tanpa harus menghafal ribuan reaksi individual.',
          menelaah:{ text:'Empat pola reaksi utama:', points:['<strong>Kombinasi/sintesis</strong>: dua/lebih zat sederhana bergabung jadi satu zat kompleks (A+B→AB).', '<strong>Penguraian/dekomposisi</strong>: satu zat kompleks terurai jadi dua/lebih zat sederhana (AB→A+B).', '<strong>Pertukaran tunggal</strong>: satu unsur menggantikan unsur lain dalam senyawa (A+BC→AC+B). <strong>Pertukaran ganda</strong>: dua senyawa "bertukar pasangan" (AB+CD→AD+CB).'] },
          rumus:{ formula:'Kombinasi: A+B→AB &nbsp;·&nbsp; Penguraian: AB→A+B &nbsp;·&nbsp; Pertukaran tunggal: A+BC→AC+B &nbsp;·&nbsp; Pertukaran ganda: AB+CD→AD+CB', note:'Mengenali pola ini memudahkan memprediksi produk reaksi baru.' },
          duniaNyata:[
            { title:'Karat besi', text:'Reaksi kombinasi yang merugikan (korosi), Fe bereaksi dengan O2 & air.' },
            { title:'Cuka + baking soda', text:'Reaksi pertukaran ganda yang menghasilkan gas CO2 & busa, dipakai dalam eksperimen sekolah & sebagai pengembang kue.' }
          ],
          kasus:{ soal:'Reaksi Zn + CuSO4 → ZnSO4 + Cu menunjukkan seng menggantikan tembaga dalam senyawa CuSO4. Termasuk jenis reaksi apakah ini?', steps:['Perhatikan pola: satu unsur bebas (Zn) menggantikan posisi unsur lain (Cu) dalam senyawa.', 'Ini persis pola A + BC → AC + B.', 'Pola ini adalah ciri khas reaksi PERTUKARAN TUNGGAL.'], jawaban:'Reaksi ini termasuk <strong>reaksi pertukaran tunggal</strong>.' },
          ujiNalar:{ soal:'Reaksi 2H2O → 2H2 + O2 (air terurai jadi gas hidrogen dan oksigen lewat elektrolisis) termasuk jenis reaksi apa?', options:['Reaksi kombinasi/sintesis', 'Reaksi penguraian/dekomposisi', 'Reaksi pertukaran tunggal', 'Reaksi pertukaran ganda'], correctIndex:1, explanation:'Satu zat (H2O) terurai jadi dua zat sederhana (H2 dan O2) — ini <strong>reaksi penguraian/dekomposisi</strong>.' }
        }
      ]
    },
    {
      id:'stoikiometri',
      title:'Konsep Mol dan Stoikiometri',
      meta:'Kasus 09 · 3 investigasi',
      unlocked:true,
      subbabs:[
        {
          id:'konsep-mol-avogadro',
          title:'Konsep Mol: Menghitung Partikel yang Terlalu Kecil dan Terlalu Banyak',
          mengamati:'Satu sendok teh air mengandung sekitar 200 miliar triliun molekul H2O — angka yang terlalu besar untuk ditulis/dihitung secara langsung dalam perhitungan kimia sehari-hari.',
          kenapa:'Konsep MOL diciptakan sebagai "satuan hitung" khusus untuk partikel superkecil, persis seperti "lusin" adalah satuan hitung untuk 12 benda — memungkinkan ahli kimia bekerja dengan angka yang jauh lebih manageable.',
          menelaah:{ text:'Mol sebagai jembatan antar besaran:', points:['1 mol = 6,022×10²³ partikel (bilangan Avogadro, NA).', 'Mol menjembatani dunia PARTIKEL (terlalu kecil untuk ditimbang satu-satu) dengan dunia MASSA (yang bisa ditimbang di lab) lewat MASSA MOLAR.', 'Mol adalah "jembatan" yang menghubungkan JUMLAH PARTIKEL, MASSA, dan (untuk gas) VOLUME dalam satu kerangka perhitungan yang konsisten.'] },
          rumus:{ formula:'n (mol) = massa (gram) / massa molar (gram/mol) &nbsp;·&nbsp; jumlah partikel = n × NA', note:'NA = 6,022×10²³ (bilangan Avogadro).' },
          duniaNyata:[
            { title:'Dosis obat farmasi', text:'Efek biologis obat bergantung pada JUMLAH MOLEKUL (mol) yang mencapai target — konversi mol krusial dalam farmasi.' },
            { title:'Industri pupuk', text:'Kebutuhan bahan baku dihitung dalam skala ton, tapi reaksinya tetap dihitung berdasar perbandingan MOL.' }
          ],
          kasus:{ soal:'Berapa mol yang terkandung dalam 36 gram air (H2O), jika massa molar air adalah 18 gram/mol?', steps:['Gunakan rumus n=massa/massa molar.', 'Substitusi: n=36/18.', 'Hitung: n=2.'], jawaban:'Terkandung <strong>2 mol</strong> air dalam 36 gram air tersebut.' },
          ujiNalar:{ soal:'Kenapa konsep mol diciptakan, alih-alih ahli kimia langsung menghitung jumlah atom/molekul satu per satu?', options:['Karena menghitung atom satu-satu itu ilegal', 'Karena jumlah partikel kimia biasanya sangat besar (triliunan bahkan lebih), sehingga dibutuhkan satuan pengelompokan seperti mol agar perhitungan lebih praktis', 'Karena atom terlalu besar untuk dihitung', 'Karena mol adalah satuan yang lebih murah'], correctIndex:1, explanation:'Jumlah partikel kimia sangat <strong>besar</strong>, sehingga dibutuhkan satuan pengelompokan seperti mol.' }
        },
        {
          id:'hubungan-mol-massa-partikel',
          title:'Hubungan Mol dengan Massa & Jumlah Partikel',
          mengamati:'Seorang siswa diminta menghitung berapa gram natrium klorida (NaCl) yang mengandung 3,011×10²³ partikel. Angka partikel ini terlalu abstrak untuk langsung diterjemahkan ke gram tanpa "jembatan" mol.',
          kenapa:'Hubungan mol-massa-partikel diciptakan sebagai satu sistem terpadu — begitu salah satu besaran diketahui, dua besaran lainnya bisa dihitung lewat mol sebagai perantara.',
          menelaah:{ text:'Cara mol menjembatani massa dan jumlah partikel:', points:['Kalau diketahui MASSA, cari MOL dulu (n=massa/Mr), baru dari mol cari JUMLAH PARTIKEL (partikel=n×NA).', 'Kalau diketahui JUMLAH PARTIKEL, cari MOL dulu (n=jumlah partikel/NA), baru dari mol cari MASSA (massa=n×Mr).', 'Mol selalu jadi "perantara" wajib — tak ada jalan pintas langsung dari partikel ke massa tanpa melalui mol.'] },
          rumus:{ formula:'massa ⟷ mol (via Mr) ⟷ jumlah partikel (via NA)', note:'Selalu lewat mol sebagai titik tengah perhitungan.' },
          duniaNyata:[
            { title:'Analisis forensik', text:'Menghitung jumlah partikel zat dari residu sangat kecil yang ditemukan di TKP, mengonversinya lewat mol untuk identifikasi zat.' },
            { title:'Kontrol kualitas farmasi', text:'Memverifikasi jumlah molekul obat aktif per tablet lewat perhitungan mol dari data massa.' }
          ],
          kasus:{ soal:'Berapa jumlah partikel yang terkandung dalam 0,5 mol gas oksigen (O2)?', steps:['Gunakan rumus jumlah partikel=n×NA.', 'Substitusi: 0,5×6,022×10²³.', 'Hitung: 3,011×10²³.'], jawaban:'Jumlah partikel dalam 0,5 mol O2 adalah <strong>3,011×10²³ partikel</strong>.' },
          ujiNalar:{ soal:'Kenapa untuk mengubah dari JUMLAH PARTIKEL ke MASSA, kita harus melalui MOL sebagai perantara, tidak bisa langsung?', options:['Karena aturan kimia melarang jalan pintas', 'Karena partikel dihitung dengan satuan jumlah (buah) sedangkan massa diukur dengan satuan berat (gram), dan mol adalah satuan yang menjembatani keduanya secara konsisten', 'Karena massa dan jumlah partikel sebenarnya sama saja', 'Karena hanya mol yang bisa dihitung dengan kalkulator'], correctIndex:1, explanation:'Partikel (jumlah) dan massa (berat) adalah satuan yang berbeda jenis — <strong>mol menjembatani keduanya</strong> secara konsisten.' }
        },
        {
          id:'pereaksi-pembatas-persen-hasil',
          title:'Pereaksi Pembatas & Persen Hasil',
          mengamati:'Sebuah resep kue butuh 2 butir telur & 200gram tepung untuk 1 loyang. Kalau tersedia 10 butir telur tapi cuma 200gram tepung, berapa loyang maksimal yang bisa dibuat? Dibatasi oleh TEPUNG, bukan telur yang berlebih.',
          kenapa:'Konsep pereaksi pembatas diciptakan karena dalam reaksi kimia sungguhan, reaktan jarang tersedia dengan perbandingan mol yang pas sesuai persamaan setara — salah satu reaktan biasanya akan habis lebih dulu.',
          menelaah:{ text:'Cara menentukan pereaksi pembatas dan mengukur efisiensi hasil:', points:['Pereaksi pembatas adalah reaktan yang HABIS LEBIH DULU, menentukan jumlah maksimum produk yang bisa terbentuk.', 'Cara menentukan: hitung mol produk yang bisa dihasilkan dari SETIAP reaktan — reaktan yang menghasilkan produk PALING SEDIKIT adalah pereaksi pembatasnya.', 'Persen hasil = (hasil aktual/hasil teoritis)×100% — mengukur seberapa efisien reaksi sungguhan dibanding perhitungan ideal.'] },
          rumus:{ formula:'Persen hasil = (hasil aktual / hasil teoritis) × 100%', note:'Hasil aktual biasanya lebih kecil dari teoritis karena reaksi sampingan atau kehilangan saat pemurnian.' },
          duniaNyata:[
            { title:'Optimasi biaya industri kimia', text:'Menghitung pereaksi pembatas untuk mengoptimalkan biaya bahan baku.' },
            { title:'Indikator efisiensi produksi', text:'Persen hasil dipakai sebagai indikator efisiensi proses produksi farmasi dan industri kimia lainnya.' }
          ],
          kasus:{ soal:'Reaksi N2 + 3H2 → 2NH3 melibatkan 2 mol N2 dan 3 mol H2. Tentukan pereaksi pembatas.', steps:['Dari persamaan setara, 1 mol N2 membutuhkan 3 mol H2. Untuk 2 mol N2, dibutuhkan 6 mol H2.', 'Tapi H2 yang tersedia cuma 3 mol — jauh dari kebutuhan 6 mol.', 'Karena H2 akan habis lebih dulu, H2 adalah pereaksi pembatasnya.'], jawaban:'<strong>H2 adalah pereaksi pembatas</strong> — jumlahnya tidak cukup untuk bereaksi dengan seluruh N2.' },
          ujiNalar:{ soal:'Sebuah reaksi memiliki hasil teoritis 50 gram produk, tapi hasil aktual di laboratorium hanya 40 gram. Berapa persen hasil reaksi ini?', options:['40%', '50%', '80%', '90%'], correctIndex:2, explanation:'Persen hasil=(40/50)×100%=<strong>80%</strong>.' }
        }
      ]
    },
    {
      id:'nanoteknologi',
      title:'Nanoteknologi',
      meta:'Kasus 10 · 3 investigasi',
      unlocked:true,
      subbabs:[
        {
          id:'konsep-skala-nano',
          title:'Konsep Skala Nano: Ketika Ukuran Mengubah Sifat',
          mengamati:'Emas dalam ukuran normal (perhiasan) berwarna kuning keemasan. Tapi partikel emas yang diperkecil hingga skala NANOMETER justru berwarna MERAH atau UNGU, bukan kuning. Ukuran yang lebih kecil ternyata mengubah sifat dasar suatu material.',
          kenapa:'Nanoteknologi lahir dari penemuan bahwa material pada skala nano (1-100 nanometer) bisa memiliki sifat fisik & kimia yang sangat berbeda dari material yang sama persis pada ukuran normal — bukan sekadar "versi kecil".',
          menelaah:{ text:'Kenapa sifat material berubah di skala nano:', points:['Perbandingan LUAS PERMUKAAN terhadap VOLUME partikel menjadi jauh lebih besar dibanding partikel normal, membuat lebih banyak atom berada di PERMUKAAN (lebih reaktif).', 'Efek KUANTUM (biasanya diabaikan pada skala besar) menjadi signifikan pada skala nano, mengubah sifat optik, listrik, dan magnetik.', 'Inilah kenapa emas nano bisa berwarna berbeda — elektronnya berinteraksi dengan cahaya secara fundamental berbeda.'] },
          rumus:{ formula:'Rasio luas permukaan : volume MENINGKAT drastis saat ukuran partikel MENGECIL', note:'Ini prinsip dasar yang menjelaskan hampir semua keunikan sifat material nano.' },
          duniaNyata:[
            { title:'Tabir surya modern', text:'Memakai partikel nano titanium dioksida/seng oksida yang transparan di kulit tapi tetap efektif memblokir sinar UV.' },
            { title:'Chip elektronik modern', text:'Memanfaatkan sifat unik material skala nano untuk komponen yang jauh lebih kecil & efisien.' }
          ],
          kasus:{ soal:'Kenapa partikel nano cenderung jauh LEBIH REAKTIF secara kimia dibanding partikel berukuran normal dari material yang sama?', steps:['Pada partikel besar, sebagian besar atom berada di bagian dalam partikel, "terlindung".', 'Pada partikel nano, rasio luas permukaan terhadap volume jauh lebih besar, sehingga proporsi atom di permukaan jauh lebih tinggi.', 'Atom di permukaan lebih mudah berinteraksi/bereaksi dengan zat lain.'], jawaban:'Partikel nano lebih reaktif karena <strong>proporsi atom yang berada di permukaan jauh lebih besar</strong>.' },
          ujiNalar:{ soal:'Kenapa emas dalam bentuk nanopartikel bisa berwarna berbeda (merah/ungu) dari emas dalam ukuran normal (kuning keemasan)?', options:['Karena nanopartikel emas sebenarnya bukan emas murni', 'Karena pada skala nano, efek kuantum menjadi signifikan dan mengubah cara elektron berinteraksi dengan cahaya', 'Karena nanopartikel emas selalu dicampur pewarna', 'Karena ukuran tidak memengaruhi warna material apa pun'], correctIndex:1, explanation:'Efek <strong>kuantum</strong> pada skala nano mengubah cara elektron berinteraksi dengan cahaya.' }
        },
        {
          id:'nanoteknologi-kesehatan',
          title:'Nanoteknologi dalam Kesehatan',
          mengamati:'Kemoterapi konvensional menyerang SEMUA sel yang membelah cepat (termasuk sel sehat), menyebabkan efek samping parah — padahal targetnya cuma sel kanker. Bagaimana caranya menyerang HANYA sel kanker?',
          kenapa:'Nanopartikel dikembangkan sebagai "kendaraan pengantar" obat yang sangat presisi — ukurannya yang superkecil memungkinkan nanopartikel menargetkan sel kanker secara spesifik, mengurangi kerusakan pada sel sehat.',
          menelaah:{ text:'Mekanisme pengantaran obat lewat nanopartikel:', points:['Nanopartikel bisa direkayasa permukaannya dengan "penanda" molekul yang hanya mengenali & menempel pada sel kanker spesifik.', 'Pembuluh darah di sekitar tumor cenderung "bocor" (lebih permeabel) dibanding pembuluh normal — nanopartikel bisa "menyusup" lewat celah ini dan terakumulasi di jaringan tumor.', 'Selain pengantaran obat, nanopartikel juga dipakai untuk diagnosis (pencitraan medis lebih presisi) dan terapi langsung.'] },
          rumus:{ formula:'Nanopartikel + penanda target + celah pembuluh tumor = pengantaran obat presisi', note:'Ini bukan rumus hitung, tapi prinsip kerja "drug delivery" berbasis nanopartikel.' },
          duniaNyata:[
            { title:'Kemoterapi generasi baru', text:'Beberapa obat kemoterapi sudah memakai nanopartikel liposom untuk mengurangi efek samping.' },
            { title:'Vaksin mRNA', text:'Vaksin mRNA modern (seperti untuk COVID-19) memakai nanopartikel lipid sebagai "kendaraan" mengantarkan materi genetik ke sel tubuh.' }
          ],
          kasus:{ soal:'Kenapa nanopartikel obat kanker bisa terakumulasi lebih banyak di jaringan tumor dibanding jaringan sehat, meski disebar lewat aliran darah yang sama?', steps:['Pembuluh darah di sekitar tumor tumbuh secara abnormal & cenderung lebih "bocor" dibanding pembuluh normal.', 'Nanopartikel berukuran tepat bisa menyusup lewat celah pembuluh darah yang bocor ini dan terjebak di jaringan tumor.', 'Pembuluh darah sehat yang lebih rapat tidak memungkinkan nanopartikel menyusup sebanyak itu.'], jawaban:'Karena pembuluh darah di sekitar tumor <strong>lebih "bocor" (permeabel)</strong>, memungkinkan nanopartikel terakumulasi lebih banyak di sana.' },
          ujiNalar:{ soal:'Apa keunggulan utama nanopartikel sebagai kendaraan pengantar obat kanker, dibanding kemoterapi konvensional?', options:['Nanopartikel lebih murah diproduksi', 'Nanopartikel bisa ditargetkan lebih presisi ke sel kanker, mengurangi kerusakan pada sel sehat di sekitarnya', 'Nanopartikel bekerja lebih cepat tanpa alasan khusus', 'Nanopartikel tidak memerlukan resep dokter'], correctIndex:1, explanation:'Nanopartikel bisa <strong>ditargetkan lebih presisi</strong>, mengurangi kerusakan sel sehat.' }
        },
        {
          id:'nanoteknologi-energi-lingkungan',
          title:'Nanoteknologi dalam Energi & Lingkungan',
          mengamati:'Panel surya konvensional hanya mampu mengubah sekitar 15-20% energi matahari yang diterimanya jadi listrik — sisanya terbuang. Bisakah efisiensi ini ditingkatkan dengan merekayasa material pada skala yang jauh lebih kecil?',
          kenapa:'Material nano dikembangkan untuk aplikasi energi & lingkungan karena sifat unik pada skala nano (luas permukaan besar, efek kuantum) bisa dimanfaatkan untuk meningkatkan efisiensi proses yang sebelumnya dibatasi oleh sifat material skala normal.',
          menelaah:{ text:'Aplikasi material nano untuk energi & lingkungan:', points:['Material nano dengan luas permukaan besar per satuan massa sangat efektif sebagai KATALIS, dimanfaatkan dalam sel bahan bakar & konverter katalitik kendaraan.', 'Nanomaterial tertentu (titanium dioksida nano) bisa dipakai untuk FOTOKATALISIS — memakai energi cahaya untuk menguraikan polutan.', 'Riset baterai & sel surya generasi baru memakai nanomaterial untuk meningkatkan kapasitas penyimpanan energi & efisiensi konversi cahaya jadi listrik.'] },
          rumus:{ formula:'Luas permukaan besar → lebih banyak tempat reaksi katalisis terjadi', note:'Ini prinsip dasar kenapa katalis nano jauh lebih efisien dari katalis konvensional.' },
          duniaNyata:[
            { title:'Konverter katalitik kendaraan', text:'Memakai nanopartikel logam (platinum, paladium) untuk mengubah gas buang berbahaya jadi gas yang kurang berbahaya secara lebih efisien.' },
            { title:'Material self-cleaning', text:'Kaca/cat memakai nanopartikel fotokatalitik yang memecah kotoran organik saat terkena sinar matahari.' }
          ],
          kasus:{ soal:'Kenapa nanopartikel logam pada konverter katalitik kendaraan bisa mempercepat reaksi penguraian gas buang berbahaya lebih efektif dibanding logam berukuran normal dengan massa yang sama?', steps:['Nanopartikel memiliki luas permukaan jauh lebih besar per satuan massa.', 'Reaksi katalisis terjadi di permukaan katalis — semakin luas permukaan, semakin banyak reaksi yang bisa terjadi bersamaan.', 'Dengan massa yang sama, nanopartikel menyediakan lebih banyak "tempat reaksi".'], jawaban:'Nanopartikel lebih efektif karena <strong>luas permukaannya jauh lebih besar</strong> per satuan massa.' },
          ujiNalar:{ soal:'Kenapa material nano umumnya menjadi katalis yang lebih efektif dibanding material berukuran normal dari bahan yang sama?', options:['Karena material nano lebih murah', 'Karena material nano memiliki luas permukaan yang jauh lebih besar per satuan massa, menyediakan lebih banyak tempat untuk reaksi kimia terjadi', 'Karena material nano selalu berwarna berbeda', 'Karena material nano tidak bisa bereaksi sama sekali'], correctIndex:1, explanation:'Luas permukaan yang jauh lebih besar menyediakan <strong>lebih banyak tempat reaksi</strong>.' }
        }
      ]
    }
  ]
};
