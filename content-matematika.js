window.CONTENT_MATEMATIKA = {
  key: 'matematika',
  label: 'Matematika',
  icon: '∑',
  eyebrow: 'Divisi Riset — Pola & Bilangan',
  desc: 'Setiap rumus matematika lahir karena seseorang menolak menghitung hal yang sama berulang-ulang dengan cara yang lambat. Di sini kamu akan menelusuri ulang jalan pikiran itu — dari masalah mentah sampai rumus jadi.',
  babs: [
    {
      id: 'eksponen-logaritma',
      title: 'Eksponen dan Logaritma',
      meta: 'Kasus 01 · 4 investigasi',
      unlocked: true,
      subbabs: [
        {
          id: 'bilangan-berpangkat',
          title: 'Bilangan Berpangkat & Sifat Eksponen',
          mengamati: 'Bayangkan kamu diminta menghitung <strong>2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2</strong> — sepuluh angka 2 dikalikan berturut-turut. Menulisnya saja sudah melelahkan, apalagi kalau jumlahnya jadi 100 atau 1 juta kali. Ilmuwan komputasi awal, insinyur, sampai ahli biologi yang menghitung pembelahan sel semuanya menghadapi masalah yang sama: <strong>perkalian berulang butuh notasi yang lebih ringkas.</strong>',
          kenapa: 'Eksponen (pangkat) diciptakan sebagai <strong>singkatan resmi</strong> untuk perkalian berulang dengan bilangan pokok yang sama. Alih-alih menulis 2 sepuluh kali, kita cukup menulis 2¹⁰. Ini bukan sekadar mempersingkat tulisan — begitu ada notasi baru, kita bisa menemukan <em>pola operasi baru</em> yang tidak terlihat kalau semua ditulis manual.',
          menelaah: {
            text: 'Perhatikan pola berikut sebelum menghafal rumus apa pun — ini cara sifat eksponen sebenarnya ditemukan, bukan dihafal dari langit:',
            points: [
              '2³ × 2² = (2×2×2) × (2×2) = 2 dikalikan sebanyak 3+2 = 5 kali → 2⁵. Jadi <strong>aᵐ × aⁿ = aᵐ⁺ⁿ</strong>.',
              '2⁵ ÷ 2² = (2×2×2×2×2) ÷ (2×2), dua faktor di penyebut saling coret dua faktor di pembilang, sisa 3 → 2³. Jadi <strong>aᵐ ÷ aⁿ = aᵐ⁻ⁿ</strong>.',
              'Kalau pola pengurangan itu diteruskan sampai m = n, hasilnya aⁿ⁻ⁿ = a⁰, tapi secara nilai aⁿ÷aⁿ pasti = 1. Maka disepakati <strong>a⁰ = 1</strong> — bukan aturan sembarangan, tapi konsekuensi logis dari pola pembagian.',
              'Kalau polanya diteruskan lagi ke pangkat negatif: a⁻ⁿ = a⁰⁻ⁿ = a⁰ ÷ aⁿ = 1/aⁿ. Maka <strong>a⁻ⁿ = 1/aⁿ</strong> — pangkat negatif berarti "kebalikan", bukan "bilangan negatif".'
            ]
          },
          rumus: { formula: 'aᵐ × aⁿ = aᵐ⁺ⁿ &nbsp;·&nbsp; aᵐ ÷ aⁿ = aᵐ⁻ⁿ &nbsp;·&nbsp; (aᵐ)ⁿ = aᵐⁿ &nbsp;·&nbsp; a⁻ⁿ = 1/aⁿ', note: 'Semua sifat eksponen adalah konsekuensi dari satu ide: pangkat = penghitung berapa kali bilangan pokok dikalikan.' },
          duniaNyata: [
            { title: 'Bunga majemuk & investasi', text: 'Tabungan yang tumbuh 5% per tahun setelah n tahun bernilai awal × (1,05)ⁿ. Investor memakai eksponen untuk memproyeksikan kekayaan bertahun-tahun ke depan tanpa mengalikan manual satu-satu.' },
            { title: 'Penyebaran virus atau informasi', text: 'Kalau satu orang menularkan ke 2 orang, dan itu berulang n putaran, jumlah orang tertular ≈ 2ⁿ. Ini sebabnya wabah atau tren viral terasa "meledak tiba-tiba".' }
          ],
          kasus: { soal: 'Sederhanakan: (2³ × 2⁴) ÷ 2⁵, lalu hitung nilainya.', steps: ['Gabungkan perkalian di pembilang dulu: 2³ × 2⁴ = 2³⁺⁴ = 2⁷.', 'Sekarang bentuknya jadi 2⁷ ÷ 2⁵ = 2⁷⁻⁵ = 2².', 'Hitung nilai akhir: 2² = 4.'], jawaban: 'Hasil akhirnya adalah <strong>4</strong>. Sifat eksponen membiarkan kita bekerja dengan pangkatnya saja, jauh lebih cepat.' },
          ujiNalar: { soal: 'Tanpa kalkulator, berapa nilai dari 5⁰ × 3⁻¹ × 3²?', options: ['1', '3', '9', '15'], correctIndex: 1, explanation: '5⁰ = 1. 3⁻¹ × 3² = 3¹ = 3. Jadi hasil totalnya 1 × 3 = <strong>3</strong>.' }
        },
        {
          id: 'pangkat-pecahan-bentuk-akar',
          title: 'Pangkat Pecahan & Bentuk Akar',
          mengamati: 'Sifat aᵐ × aⁿ = aᵐ⁺ⁿ tadi hanya diuji untuk pangkat bilangan bulat. Pertanyaan yang muncul secara alami: <strong>apa artinya pangkat ½?</strong> Ini titik di mana matematikawan harus memutuskan apakah pola yang sudah ditemukan tetap berlaku di luar bilangan bulat.',
          kenapa: 'Supaya sistem eksponen tetap konsisten, pangkat pecahan <strong>dipaksa</strong> mengikuti aturan yang sama: a^(1/2) × a^(1/2) harus tetap sama dengan a¹ = a. Bilangan apa yang kalau dikalikan dengan dirinya sendiri menghasilkan a? Jawabannya adalah akar kuadrat dari a — bentuk akar dan pangkat pecahan ternyata adalah <strong>satu hal yang sama</strong>.',
          menelaah: { text: 'Ikuti logikanya selangkah demi selangkah:', points: ['Misalkan a^(1/2) = x. Maka x × x = a^1 = a, artinya x² = a.', 'Bilangan x yang kalau dikuadratkan menghasilkan a, itulah definisi akar kuadrat: x = √a.', 'Jadi <strong>a^(1/2) = √a</strong>. Perluasannya: a^(m/n) = ⁿ√(aᵐ).'] },
          rumus: { formula: 'a^(1/n) = ⁿ√a &nbsp;·&nbsp; a^(m/n) = ⁿ√(aᵐ) &nbsp;·&nbsp; √a × √b = √(ab)', note: 'Merasionalkan penyebut hanyalah trik aljabar, bukan hukum baru.' },
          duniaNyata: [
            { title: 'Kecepatan gelombang gempa', text: 'Rumus kecepatan gelombang seismik melibatkan akar dari perbandingan modulus elastisitas dan kerapatan batuan.' },
            { title: 'Desain layar & rasio aspek', text: 'Diagonal layar HP/TV dihitung dari akar kuadrat (Pythagoras: d = √(p² + l²)).' }
          ],
          kasus: { soal: 'Sederhanakan bentuk akar √50 + √8.', steps: ['50 = 25×2, jadi √50 = 5√2.', '8 = 4×2, jadi √8 = 2√2.', 'Jumlahkan suku sejenis: 5√2 + 2√2 = 7√2.'], jawaban: 'Hasil sederhananya adalah <strong>7√2</strong>.' },
          ujiNalar: { soal: 'Ubah 27^(2/3) ke bentuk akar, lalu hitung nilainya.', options: ['3', '9', '18', '729'], correctIndex: 1, explanation: '27^(2/3) = (³√27)² = 3² = <strong>9</strong>.' }
        },
        {
          id: 'fungsi-eksponen',
          title: 'Fungsi Eksponen & Grafiknya',
          mengamati: 'Semua yang dibahas sejauh ini memperlakukan pangkat sebagai bilangan tetap. Tapi bagaimana kalau <strong>pangkatnya yang berubah-ubah</strong>? Itulah fungsi eksponen: f(x) = aˣ.',
          kenapa: 'Fungsi eksponen diciptakan untuk memodelkan sesuatu yang <strong>bertambah/berkurang berdasarkan proporsi dari nilai sebelumnya</strong> — bukan bertambah dengan jumlah tetap seperti fungsi linear.',
          menelaah: {
            text: 'Bandingkan dua jenis pertumbuhan untuk x = 0,1,2,3,4. Ketuk titik pada diagram untuk info lebih lanjut:',
            points: ['Pertumbuhan <strong>linear</strong> f(x)=2x: 0,2,4,6,8 — selalu bertambah 2 (jumlah tetap).', 'Pertumbuhan <strong>eksponensial</strong> f(x)=2ˣ: 1,2,4,8,16 — selalu dikali 2 (rasio tetap).', 'a>1: grafik naik makin curam. 0<a<1: grafik turun mendekati nol tapi tak pernah menyentuhnya.'],
            diagram: { viewBox:[260,140], svg:'<svg viewBox="0 0 260 140" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="120" x2="250" y2="120" stroke="#4A82BE" stroke-width="1"/><line x1="20" y1="10" x2="20" y2="120" stroke="#4A82BE" stroke-width="1"/><path d="M 20 118 Q 90 116 140 90 T 240 15" fill="none" stroke="#FFB627" stroke-width="2"/><path d="M 20 5 Q 90 40 140 90 T 240 118" fill="none" stroke="#7FDBFF" stroke-width="2"/></svg>', cap:'Kedua kurva lahir dari titik (0,1). Ketuk pin untuk detail.', hotspots:[{cx:200,cy:28,label:'a > 1',text:'Kurva naik makin curam — pertumbuhan eksponensial (bunga majemuk, populasi bakteri).'},{cx:200,cy:112,label:'0 < a < 1',text:'Kurva turun mendekati nol — peluruhan (radioaktif, baterai HP).'},{cx:22,cy:14,label:'(0,1)',text:'Titik jangkar tetap: semua fungsi f(x)=aˣ melewati titik ini, karena a⁰=1.'}] }
          },
          rumus: { formula: 'f(x) = a·bˣ &nbsp;&nbsp;(b &gt; 1: tumbuh, &nbsp;0 &lt; b &lt; 1: meluruh)', note: '"a" adalah nilai awal, "b" adalah rasio pertumbuhan/peluruhan per satu satuan x.' },
          duniaNyata: [
            { title: 'Peluruhan radioaktif & carbon dating', text: 'Arkeolog menghitung usia fosil dari sisa karbon-14 memakai fungsi eksponen peluruhan.' },
            { title: 'Depresiasi nilai kendaraan', text: 'Mobil kehilangan ~15-20% nilainya per tahun dari harga tahun sebelumnya, bukan dari harga awal.' }
          ],
          kasus: { soal: 'Populasi bakteri mulai dari 200 sel dan berlipat dua tiap jam. Jumlah sel setelah 5 jam?', steps: ['a=200, rasio b=2, x=5 jam.', 'f(x)=200×2ˣ.', 'f(5)=200×2⁵=200×32=6.400.'], jawaban: 'Setelah 5 jam ada <strong>6.400 sel bakteri</strong>.' },
          ujiNalar: { soal: 'HP kehilangan 10% baterainya tiap jam. Sisa baterai setelah 3 jam?', options: ['70%', '72,9%', '73%', '90%'], correctIndex: 1, explanation: 'Rasio per jam=0,9. f(3)=100×0,9³=<strong>72,9%</strong> — bukan 70%, karena pengurangan dari nilai yang sudah berkurang.' }
        },
        {
          id: 'logaritma',
          title: 'Logaritma: Sifat, Persamaan & Fungsi',
          mengamati: 'Fungsi eksponen menjawab "berapa hasilnya kalau 2 dipangkatkan 5?". Tapi bagaimana kalau dibalik: <strong>"2 harus dipangkatkan berapa supaya hasilnya 32?"</strong> Pertanyaan terbalik ini butuh alat matematika baru: logaritma.',
          kenapa: 'Logaritma diciptakan sebagai <strong>operasi kebalikan (invers) dari eksponen</strong>. Sebelum kalkulator ada, logaritma dipakai untuk mengubah perkalian besar menjadi penjumlahan yang jauh lebih mudah dihitung manual.',
          menelaah: { text: 'Hubungan eksponen dan logaritma adalah dua wajah dari satu fakta:', points: ['Jika 2⁵=32, maka ⁵log 32=5 — "logaritma basis 2 dari 32 sama dengan 5".', 'Bentuk umum: <strong>aᶜ = b ⟺ ᵃlog b = c</strong>.', 'Sifat eksponen punya pasangan sifat logaritma: aᵐ⁺ⁿ ↔ ᵃlog(m×n) = ᵃlog m + ᵃlog n.'] },
          rumus: { formula: 'ᵃlog(m·n) = ᵃlog m + ᵃlog n &nbsp;·&nbsp; ᵃlog(m/n) = ᵃlog m − ᵃlog n &nbsp;·&nbsp; ᵃlog mⁿ = n·ᵃlog m', note: 'Grafik y=ᵃlog x adalah cerminan grafik y=aˣ terhadap garis y=x.' },
          duniaNyata: [
            { title: 'Skala Richter (gempa bumi)', text: 'Gempa magnitudo 6 punya energi getaran 10x lebih besar dari magnitudo 5, bukan cuma "1 lebih besar".' },
            { title: 'pH larutan kimia', text: 'pH = −log[H⁺] — memampatkan rentang konsentrasi yang sangat lebar jadi skala 0–14.' }
          ],
          kasus: { soal: 'Tentukan x dari ²log(x) + ²log(8) = 5.', steps: ['Gabungkan: ²log(8x) = 5.', 'Ubah ke bentuk eksponen: 2⁵ = 8x.', '32 = 8x, maka x = 4.'], jawaban: 'Nilai x = <strong>4</strong>.' },
          ujiNalar: { soal: 'Kalau ³log 5 = p, nyatakan ³log 45 dalam p.', options: ['2 + p', '2p', 'p + 9', '45p'], correctIndex: 0, explanation: '45=3²×5. ³log 45 = 2·³log 3 + p = 2(1)+p = <strong>2+p</strong>.' }
        }
      ]
    },
    {
      id: 'barisan-deret',
      title: 'Barisan dan Deret',
      meta: 'Kasus 02 · 3 investigasi',
      unlocked: true,
      subbabs: [
        {
          id: 'pola-barisan-aritmetika',
          title: 'Pola Bilangan & Barisan Aritmetika',
          mengamati: 'Kursi bioskop bernomor 2,4,6,8,... atau tabungan yang selalu ditambah Rp50.000 tiap bulan: 100rb, 150rb, 200rb,... Ada pola tetap yang mengatur deretan angka ini.',
          kenapa: 'Barisan aritmetika diciptakan untuk menangkap keteraturan seperti itu secara matematis — supaya kita bisa memprediksi suku ke-100 misalnya, tanpa harus menghitung satu per satu dari suku pertama.',
          menelaah: { text: 'Perhatikan bagaimana rumus suku ke-n sebenarnya lahir dari pengamatan sederhana:', points: ['Selisih antar suku berurutan pada barisan aritmetika selalu tetap, disebut <strong>beda (b)</strong>.', 'Untuk sampai ke suku ke-n dari suku pertama (a), kita menambahkan b sebanyak (n−1) kali — bukan n kali, karena suku pertama belum ditambah sama sekali.', 'Dari situ lahir rumus Un = a + (n−1)b.'] },
          rumus: { formula: 'Un = a + (n − 1)b', note: 'a = suku pertama, b = beda, n = nomor suku yang dicari.' },
          duniaNyata: [
            { title: 'Nomor kursi bioskop/stadion', text: 'Penomoran kursi yang bertambah tetap tiap baris memudahkan panitia menghitung total kursi tanpa menghitung satu-satu.' },
            { title: 'Kenaikan gaji berkala', text: 'Gaji dengan kenaikan tetap tiap tahun bisa diprediksi persis di tahun ke berapa pun memakai rumus suku ke-n.' }
          ],
          kasus: { soal: 'Barisan aritmetika 5, 9, 13, ... Tentukan suku ke-10.', steps: ['Identifikasi a=5, b=9−5=4.', 'Masukkan ke rumus: U10 = 5 + (10−1)×4.', 'Hitung: 5 + 36 = 41.'], jawaban: 'Suku ke-10 adalah <strong>41</strong>.' },
          ujiNalar: { soal: 'Suatu barisan aritmetika: U3=11, U7=23. Tentukan bedanya (b).', options: ['2', '3', '4', '12'], correctIndex: 1, explanation: 'Dari U3 ke U7 ada 4 langkah beda: b=(23−11)/(7−3)=12/4=<strong>3</strong>.' }
        },
        {
          id: 'deret-aritmetika',
          title: 'Deret Aritmetika: Menjumlahkan Pola Tetap',
          mengamati: 'Konon saat masih kecil, matematikawan Carl Gauss diminta gurunya menjumlahkan 1 sampai 100 sebagai hukuman — dan ia menjawab dalam hitungan detik. Bagaimana caranya, tanpa menjumlah satu-satu?',
          kenapa: 'Gauss menyadari trik memasangkan suku pertama dengan suku terakhir (1+100=101), suku kedua dengan kedua dari belakang (2+99=101) — semua pasangan menghasilkan jumlah yang SAMA. Trik inilah yang diformalkan menjadi rumus deret aritmetika.',
          menelaah: { text: 'Ikuti logika Gauss selangkah demi selangkah:', points: ['Pasangkan suku pertama (a) dengan suku terakhir (Un): jumlahnya selalu a+Un.', 'Ada n/2 pasangan seperti itu (setengah dari total suku).', 'Jumlah total = banyak pasangan × jumlah tiap pasangan = (n/2)(a+Un).'] },
          rumus: { formula: 'Sn = n/2 (a + Un) &nbsp;atau&nbsp; Sn = n/2 (2a + (n−1)b)', note: 'Dua bentuk rumus ini setara — pilih yang datanya lebih mudah didapat (Un langsung, atau b).' },
          duniaNyata: [
            { title: 'Total tabungan berkala', text: 'Menghitung total uang yang terkumpul setelah menabung dengan kenaikan tetap tiap bulan selama setahun.' },
            { title: 'Jumlah kursi gedung bertingkat', text: 'Gedung dengan baris kursi yang bertambah tetap tiap tingkat bisa dihitung total kapasitasnya langsung tanpa menjumlah tiap baris.' }
          ],
          kasus: { soal: 'Hitung jumlah 10 suku pertama dari barisan 5, 9, 13, ... (a=5, b=4, U10=41 dari kasus sebelumnya).', steps: ['Gunakan Sn = n/2(a+Un).', 'S10 = 10/2 × (5+41).', 'Hitung: 5 × 46 = 230.'], jawaban: 'Jumlah 10 suku pertama adalah <strong>230</strong>.' },
          ujiNalar: { soal: 'Hitung 1+2+3+...+50 memakai trik Gauss.', options: ['1225', '1275', '2500', '5000'], correctIndex: 1, explanation: 'Sn = n/2(a+Un) = 50/2 × (1+50) = 25 × 51 = <strong>1275</strong>.' }
        },
        {
          id: 'barisan-deret-geometri',
          title: 'Barisan & Deret Geometri (termasuk Tak Hingga)',
          mengamati: 'Cerita klasik: seseorang meminta bayaran berupa 1 butir gandum di kotak pertama papan catur, lalu dobel tiap kotak berikutnya (2,4,8,...). Terdengar sepele, tapi di kotak ke-64 jumlahnya sudah melampaui total produksi gandum dunia.',
          kenapa: 'Barisan geometri menangkap pola <strong>rasio tetap</strong> (bukan selisih tetap seperti aritmetika) — cocok untuk fenomena yang tumbuh/menyusut dengan kelipatan konstan, seperti populasi, peluruhan radioaktif, atau bunga majemuk.',
          menelaah: { text: 'Bandingkan struktur barisan geometri dengan aritmetika:', points: ['Rasio r = Un/Un−1 selalu tetap (bukan selisih, tapi hasil bagi).', 'Un = a·rⁿ⁻¹ — pola perkalian berulang, mirip logika eksponen yang sudah dipelajari.', 'Untuk deret geometri TAK HINGGA dengan |r|<1, semakin banyak suku ditambahkan, suku-sukunya semakin kecil mendekati nol — sehingga totalnya mendekati satu nilai tetap, bukan tak terhingga.'] },
          rumus: { formula: 'Un = a·rⁿ⁻¹ &nbsp;·&nbsp; Sn = a(rⁿ−1)/(r−1) &nbsp;·&nbsp; S∞ = a/(1−r) untuk |r|&lt;1', note: 'S∞ hanya berlaku kalau rasio r berada di antara −1 dan 1 — kalau tidak, jumlahnya benar-benar tak terhingga.' },
          duniaNyata: [
            { title: 'Bola pantul yang makin rendah', text: 'Total lintasan bola yang dijatuhkan dan memantul makin rendah tiap kali dihitung memakai deret geometri tak hingga.' },
            { title: 'Peluruhan dosis obat dalam tubuh', text: 'Konsentrasi obat dalam darah yang berkurang dengan rasio tetap tiap jam mengikuti pola barisan geometri.' }
          ],
          kasus: { soal: 'Barisan geometri 3, 6, 12, 24, ... Tentukan suku ke-6.', steps: ['a=3, r=6/3=2.', 'U6 = a·r⁵ = 3×2⁵.', 'Hitung: 3×32 = 96.'], jawaban: 'Suku ke-6 adalah <strong>96</strong>.' },
          ujiNalar: { soal: 'Deret geometri tak hingga 8+4+2+1+... Berapa jumlah totalnya?', options: ['12', '15', '16', '32'], correctIndex: 2, explanation: 'a=8, r=1/2. S∞ = 8/(1−0,5) = 8/0,5 = <strong>16</strong>.' }
        }
      ]
    },
    {
      id: 'vektor',
      title: 'Vektor',
      meta: 'Kasus 03 · 3 investigasi',
      unlocked: true,
      subbabs: [
        {
          id: 'skalar-vektor-representasi',
          title: 'Besaran Skalar vs Vektor & Representasinya',
          mengamati: 'Info "mobil bergerak 60 km/jam" berbeda dari "60 km/jam ke utara" — kalimat kedua memberi informasi lebih lengkap. Matematika butuh objek yang bisa menyimpan besar DAN arah sekaligus.',
          kenapa: 'Vektor diciptakan sebagai representasi matematis untuk besaran yang punya arah — digambar sebagai panah, dan ditulis sebagai pasangan komponen (x,y) agar bisa dihitung secara aljabar, bukan hanya digambar.',
          menelaah: { text: 'Aturan dasar tentang bagaimana vektor "berperilaku":', points: ['Vektor digambar sebagai panah: panjang panah = besar (magnitudo), arah panah = arahnya.', 'Dua vektor dianggap SAMA jika besar dan arahnya sama, meski posisi pangkalnya berbeda (vektor bebas ditranslasi).', 'Notasi komponen v=(x,y) mewakili pergeseran x satuan mendatar, y satuan tegak — dari sinilah besarnya bisa dihitung pakai Pythagoras.'] },
          rumus: { formula: '|v| = √(x² + y²)', note: 'Besar vektor dihitung dari komponennya persis seperti mencari sisi miring segitiga siku-siku.' },
          duniaNyata: [
            { title: 'Peta angin pada prakiraan cuaca', text: 'Panah pada peta cuaca menunjukkan arah DAN kekuatan angin sekaligus — representasi visual langsung dari sebuah vektor.' },
            { title: 'Gaya dorong pada game/animasi fisika', text: 'Setiap dorongan atau tabrakan dalam game dihitung sebagai vektor gaya yang punya arah dan besar.' }
          ],
          kasus: { soal: 'Vektor v=(3,4). Tentukan besarnya.', steps: ['Gunakan rumus |v|=√(x²+y²).', 'Substitusi: √(3²+4²) = √(9+16).', 'Hitung: √25 = 5.'], jawaban: 'Besar vektor tersebut adalah <strong>5</strong>.' },
          ujiNalar: { soal: 'Vektor u=(6,8). Berapa besarnya?', options: ['10', '14', '48', '100'], correctIndex: 0, explanation: '|u|=√(36+64)=√100=<strong>10</strong>.' }
        },
        {
          id: 'operasi-vektor',
          title: 'Operasi Penjumlahan, Pengurangan & Perkalian Skalar',
          mengamati: 'Dua orang menarik gerobak dari arah yang sedikit berbeda. Hasil gerak gerobak bukan sekadar "jumlah kekuatan" seperti penjumlahan angka biasa — arah tarikan ikut menentukan hasilnya.',
          kenapa: 'Operasi vektor diciptakan untuk menjawab "apa hasil gabungan dua pengaruh yang punya arah berbeda" — sesuatu yang tidak bisa dijawab aritmetika biasa.',
          menelaah: { text: 'Cara menggabungkan dan mengubah vektor:', points: ['Secara komponen, penjumlahan vektor tinggal menjumlahkan komponen x dengan x, y dengan y.', 'Pengurangan vektor = penjumlahan dengan vektor yang arahnya dibalik.', 'Perkalian dengan skalar k mengubah panjang vektor sebanyak k kali; skalar negatif membalik arah vektor sepenuhnya.'] },
          rumus: { formula: 'u + v = (ux+vx, uy+vy) &nbsp;·&nbsp; k·v = (k·vx, k·vy)', note: 'Vektor resultan (hasil penjumlahan) mewakili pengaruh gabungan dari semua vektor yang dijumlahkan.' },
          duniaNyata: [
            { title: 'Resultan gaya pada struktur bangunan', text: 'Insinyur sipil menjumlahkan semua gaya vektor yang bekerja pada jembatan/bangunan untuk memastikan strukturnya stabil.' },
            { title: 'Gerak kapal dipengaruhi arus', text: 'Kecepatan kapal sebenarnya di air adalah resultan (vektor jumlah) dari kecepatan mesin kapal dan kecepatan arus laut.' }
          ],
          kasus: { soal: 'u=(2,3), v=(−1,5). Tentukan u+v.', steps: ['Jumlahkan komponen x: 2+(−1)=1.', 'Jumlahkan komponen y: 3+5=8.', 'Hasilnya (1,8).'], jawaban: 'u+v = <strong>(1, 8)</strong>.' },
          ujiNalar: { soal: 'u=(4,1), v=(2,−3). Tentukan u−v.', options: ['(2,4)', '(6,−2)', '(2,−4)', '(−2,4)'], correctIndex: 0, explanation: 'u−v = (4−2, 1−(−3)) = <strong>(2, 4)</strong>.' }
        },
        {
          id: 'komponen-vektor-penerapan',
          title: 'Komponen Vektor & Penerapannya',
          mengamati: 'Pesawat terbang miring akibat angin — gerak sebenarnya adalah gabungan arah pesawat dan arah angin. Bagaimana menghitung kecepatan riil pesawat terhadap tanah dari dua pengaruh sekaligus?',
          kenapa: 'Memecah satu vektor menjadi komponen horizontal & vertikal memungkinkan tiap arah dihitung terpisah lalu digabung lagi — inilah dasar semua perhitungan gerak dua dimensi dalam fisika dan teknik.',
          menelaah: { text: 'Cara memecah dan menggabungkan kembali vektor:', points: ['Vektor v dengan besar |v| dan sudut θ terhadap sumbu x dipecah: vx=|v|cosθ, vy=|v|sinθ.', 'Ini murni memakai definisi trigonometri dasar yang sudah dipelajari sebelumnya, hanya diterapkan pada vektor.', 'Sebaliknya, dari komponen vx dan vy, besar dan arah vektor asli bisa dicari lagi lewat Pythagoras dan tangen.'] },
          rumus: { formula: 'vx = |v|cos θ &nbsp;·&nbsp; vy = |v|sin θ', note: 'Ini adalah alasan trigonometri dan vektor selalu diajarkan berdekatan — keduanya saling membutuhkan.' },
          duniaNyata: [
            { title: 'Lintasan peluru & roket', text: 'Gaya dorong roket dipecah jadi komponen horizontal dan vertikal untuk menghitung lintasan penuhnya.' },
            { title: 'Desain sayap pesawat', text: 'Gaya angkat sayap dihitung sebagai komponen vektor dari gaya total yang bekerja akibat aliran udara.' }
          ],
          kasus: { soal: 'Sebuah gaya besar 10N dengan sudut 30° terhadap horizontal (cos30°≈0,87). Tentukan komponen horizontalnya.', steps: ['Gunakan vx=|v|cosθ.', 'Substitusi: 10×0,87.', 'Hasilnya 8,7 N.'], jawaban: 'Komponen horizontalnya adalah <strong>8,7 N</strong>.' },
          ujiNalar: { soal: 'Vektor besar 20 dengan sudut 60° (sin60°≈0,87). Berapa komponen vertikalnya?', options: ['10', '17,4', '20', '8,7'], correctIndex: 1, explanation: 'vy=20×0,87=<strong>17,4</strong>.' }
        }
      ]
    },
    {
      id: 'trigonometri',
      title: 'Trigonometri',
      meta: 'Kasus 04 · 4 investigasi',
      unlocked: true,
      subbabs: [
        {
          id: 'sudut-perbandingan-trigonometri',
          title: 'Sudut & Perbandingan Trigonometri Dasar',
          mengamati: 'Ilmuwan Yunani kuno ingin mengukur tinggi menara atau piramida tanpa memanjatnya — hanya dengan mengukur panjang bayangan dan sudut matahari.',
          kenapa: 'Pada segitiga siku-siku, perbandingan antar sisi terhadap suatu sudut ternyata SELALU TETAP, tak peduli ukuran segitiganya — asal sudutnya sama. Inilah yang memungkinkan sinus, cosinus, tangen didefinisikan sebagai fungsi SUDUT, bukan fungsi ukuran segitiga.',
          menelaah: { text: 'Definisi dasar perbandingan trigonometri:', points: ['Relatif terhadap sudut acuan, ada sisi depan, sisi samping, dan sisi miring.', '<strong>sin θ = depan/miring</strong>, <strong>cos θ = samping/miring</strong>, <strong>tan θ = depan/samping = sin θ/cos θ</strong>.', 'Karena rasio ini tetap untuk sudut yang sama, tabel trigonometri cukup dibuat sekali dan berlaku untuk segitiga berukuran berapa pun.'] },
          rumus: { formula: 'sin θ = depan/miring &nbsp;·&nbsp; cos θ = samping/miring &nbsp;·&nbsp; tan θ = depan/samping', note: 'Tiga rasio ini adalah dasar dari seluruh trigonometri yang dipelajari setelahnya.' },
          duniaNyata: [
            { title: 'Mengukur tinggi gedung dari jarak', text: 'Surveyor mengukur tinggi bangunan dari jarak dan sudut elevasi, tanpa perlu naik ke atasnya.' },
            { title: 'Navigasi kapal & pesawat', text: 'Arah tempuh dihitung dari sudut kompas memakai perbandingan trigonometri dasar.' }
          ],
          kasus: { soal: 'Segitiga siku-siku: sisi depan=3, sisi miring=5. Tentukan sin θ dan panjang sisi samping.', steps: ['sin θ = depan/miring = 3/5 = 0,6.', 'Cari sisi samping dengan Pythagoras: samping=√(miring²−depan²)=√(25−9)=√16.', 'Sisi samping = 4.'], jawaban: 'sin θ = <strong>0,6</strong>, dan sisi samping = <strong>4</strong>.' },
          ujiNalar: { soal: 'Segitiga siku-siku: sisi samping=8, sisi miring=10 (sisi depan=6). Berapa tan θ?', options: ['0,6', '0,75', '0,8', '1,33'], correctIndex: 1, explanation: 'tan θ = depan/samping = 6/8 = <strong>0,75</strong>.' }
        },
        {
          id: 'sudut-istimewa-identitas',
          title: 'Nilai Sudut Istimewa & Identitas Dasar',
          mengamati: 'Kenapa sin 30° selalu tepat 0,5, bukan angka desimal aneh? Ada sudut-sudut tertentu yang nilainya bisa dihitung EKSAK lewat geometri, bukan cuma dibaca dari kalkulator.',
          kenapa: 'Sudut istimewa (30°, 45°, 60°, dst) berasal dari segitiga-segitiga khusus yang bisa dibedah geometrinya secara pasti — nilai trigonometrinya "ditemukan" lewat pembuktian, bukan dihafal buta.',
          menelaah: { text: 'Asal-usul nilai eksak sudut istimewa:', points: ['Segitiga sama sisi yang dibelah dua menghasilkan segitiga siku-siku bersisi 1, √3, 2 — dari sini sin30°=1/2, cos30°=√3/2.', 'Segitiga siku-siku sama kaki bersisi 1,1,√2 menghasilkan sin45°=cos45°=√2/2.', 'Identitas sin²θ+cos²θ=1 langsung konsekuensi Pythagoras (depan²+samping²=miring², dibagi miring² di kedua ruas).'] },
          rumus: { formula: 'sin² θ + cos² θ = 1', note: 'Identitas ini berlaku untuk SEMUA nilai θ, bukan hanya sudut istimewa.' },
          duniaNyata: [
            { title: 'Rotasi objek pada game/animasi', text: 'Sudut istimewa dipakai untuk rotasi objek yang presisi tanpa galat pembulatan dalam pemrograman grafis.' },
            { title: 'Konstruksi segi enam beraturan', text: 'Desain roda gigi dan struktur heksagonal memakai sudut 60° yang nilainya eksak.' }
          ],
          kasus: { soal: 'Hitung nilai dari sin60°·cos60° + cos²30° (sin60=√3/2, cos60=1/2, cos30=√3/2).', steps: ['sin60×cos60 = (√3/2)×(1/2) = √3/4 ≈ 0,433.', 'cos²30 = (√3/2)² = 3/4 = 0,75.', 'Jumlahkan: 0,433 + 0,75 ≈ 1,183.'], jawaban: 'Hasilnya ≈ <strong>1,183</strong>.' },
          ujiNalar: { soal: 'Berapa nilai dari sin²45° + cos²45°?', options: ['0', '0,5', '1', '√2'], correctIndex: 2, explanation: 'Berdasarkan identitas dasar, sin²θ+cos²θ selalu = <strong>1</strong> untuk sudut berapa pun.' }
        },
        {
          id: 'aturan-sinus',
          title: 'Aturan Sinus: Segitiga Tanpa Sudut Siku-Siku',
          mengamati: 'Sinus, cosinus, tangen tadi hanya berlaku pada segitiga siku-siku. Tapi kebanyakan segitiga di dunia nyata (bidang tanah, jembatan) tidak siku-siku. Bagaimana menghitung sisi atau sudutnya?',
          kenapa: 'Aturan sinus diciptakan untuk memperluas trigonometri ke SEMUA jenis segitiga, dengan menghubungkan tiap sisi dengan sinus sudut di depannya lewat satu rasio yang sama untuk seluruh segitiga.',
          menelaah: { text: 'Prinsip di balik aturan sinus:', points: ['Pada sembarang segitiga, perbandingan sisi terhadap sinus sudut di depannya selalu sama untuk ketiga pasangnya.', 'Ini bisa dibuktikan dengan menarik garis tinggi dari satu titik sudut, memecah segitiga jadi dua segitiga siku-siku, lalu menyamakan dua ekspresi tinggi yang dihasilkan.', 'Berguna kalau diketahui minimal satu pasang sudut & sisi di depannya, plus satu info lain.'] },
          rumus: { formula: 'a/sin A = b/sin B = c/sin C', note: 'Berlaku untuk segitiga jenis apa pun, tidak harus siku-siku.' },
          duniaNyata: [
            { title: 'Triangulasi GPS & survei tanah', text: 'Menentukan jarak titik yang tak terjangkau langsung dengan mengukur dua sudut dan satu sisi.' },
            { title: 'Navigasi pelayaran', text: 'Posisi kapal ditentukan dari dua sudut pengamatan menuju mercusuar yang diketahui posisinya.' }
          ],
          kasus: { soal: 'Segitiga dengan sudut A=30°, sudut B=45°, sisi a=10. Tentukan sisi b.', steps: ['Gunakan a/sinA = b/sinB.', 'b = a·sinB/sinA = 10×sin45°/sin30°.', 'Hitung: 10×0,707/0,5 ≈ 14,14.'], jawaban: 'Sisi b ≈ <strong>14,14</strong>.' },
          ujiNalar: { soal: 'Segitiga dengan sudut A=60°, a=12, sudut B=45° (sin60≈0,87, sin45≈0,71). Berapa sisi b?', options: ['12', '9,8', '13,9', '17,4'], correctIndex: 1, explanation: 'b=12×0,71/0,87 ≈ <strong>9,8</strong>.' }
        },
        {
          id: 'aturan-cosinus',
          title: 'Aturan Cosinus: Ketika Sinus Saja Tidak Cukup',
          mengamati: 'Aturan sinus butuh minimal satu sudut dan sisi di depannya yang saling berpasangan diketahui. Tapi bagaimana kalau yang diketahui hanya tiga sisi segitiga saja, tanpa sudut sama sekali?',
          kenapa: 'Aturan cosinus diciptakan untuk kasus yang tak bisa dipecahkan aturan sinus — ia adalah perluasan teorema Pythagoras untuk segitiga sembarang, dengan koreksi tambahan dari sudut di antara dua sisi.',
          menelaah: { text: 'Aturan cosinus sebagai "Pythagoras yang diperluas":', points: ['Pythagoras c²=a²+b² hanya berlaku kalau sudut di antara a dan b adalah 90° (karena cos90°=0).', 'Aturan cosinus c²=a²+b²−2ab·cosC adalah versi umumnya.', 'Begitu sudut C=90°, suku terakhir hilang (cos90°=0) dan kembali jadi Pythagoras biasa — Pythagoras adalah kasus khusus dari aturan cosinus.'] },
          rumus: { formula: 'c² = a² + b² − 2ab·cos C', note: 'Berguna saat diketahui dua sisi dan sudut di antara keduanya, atau tiga sisi tanpa sudut sama sekali.' },
          duniaNyata: [
            { title: 'Navigasi saat berbelok', text: 'Kapal/pesawat menghitung jarak tempuh sebenarnya saat berbelok dengan sudut tertentu.' },
            { title: 'Panjang kabel penyangga jembatan', text: 'Teknik sipil menghitung panjang kabel yang membentuk sudut dengan menara penyangga.' }
          ],
          kasus: { soal: 'Segitiga dengan a=7, b=9, sudut C di antaranya=60° (cos60°=0,5). Tentukan sisi c.', steps: ['Gunakan c²=a²+b²−2ab·cosC.', 'c²=49+81−2(7)(9)(0,5)=130−63=67.', 'c=√67≈8,19.'], jawaban: 'Sisi c ≈ <strong>8,19</strong>.' },
          ujiNalar: { soal: 'Segitiga dengan a=5, b=5, sudut C=90° di antaranya. Berapa sisi c?', options: ['5', '7,07', '10', '25'], correctIndex: 1, explanation: 'Karena sudutnya 90°, ini kembali ke Pythagoras: c=√(25+25)=√50≈<strong>7,07</strong>.' }
        }
      ]
    },
    {
      id: 'spldv-sptldv',
      title: 'Sistem Persamaan dan Pertidaksamaan',
      meta: 'Kasus 05 · 3 investigasi',
      unlocked: true,
      subbabs: [
        {
          id: 'spldv-substitusi-eliminasi',
          title: 'Sistem Persamaan Linear Dua Variabel',
          mengamati: 'Beli 2 buku + 3 pensil = Rp16.000. Beli 1 buku + 2 pensil = Rp9.000. Ada dua barang yang harganya belum diketahui, dan dua persamaan yang menghubungkannya — bagaimana menemukan harga masing-masing tanpa coba-coba?',
          kenapa: 'SPLDV diciptakan untuk situasi ada dua hal tak diketahui yang saling terkait lewat lebih dari satu hubungan — satu persamaan saja tidak cukup menentukan nilai pasti, dibutuhkan dua persamaan independen untuk dua variabel.',
          menelaah: { text: 'Dua metode penyelesaian, tinggal pilih yang lebih cepat sesuai bentuk soal:', points: ['<strong>Substitusi</strong>: dari satu persamaan, nyatakan satu variabel dalam variabel lain, lalu masukkan ke persamaan kedua sehingga tinggal satu variabel.', '<strong>Eliminasi</strong>: kalikan salah satu/kedua persamaan sehingga koefisien satu variabel sama, lalu kurangkan/tambahkan kedua persamaan untuk menghilangkan variabel itu.'] },
          rumus: { formula: 'Substitusi atau Eliminasi — keduanya sah, hasilnya selalu sama', note: 'Pilih substitusi kalau salah satu variabel mudah diisolasi; pilih eliminasi kalau koefisiennya mudah disamakan.' },
          duniaNyata: [
            { title: 'Penentuan harga satuan barang', text: 'Kasir/pembisnis menentukan harga per unit dari beberapa kombinasi total pembelian berbeda.' },
            { title: 'Pencampuran larutan kimia', text: 'Menentukan berapa banyak dua larutan berbeda konsentrasi yang harus dicampur untuk mencapai konsentrasi target.' }
          ],
          kasus: { soal: 'Dari cerita di atas: 2x+3y=16000, x+2y=9000 (x=harga buku, y=harga pensil). Tentukan harga masing-masing.', steps: ['Dari persamaan kedua: x=9000−2y.', 'Substitusi ke persamaan pertama: 2(9000−2y)+3y=16000 → 18000−4y+3y=16000 → −y=−2000 → y=2000.', 'Substitusi balik: x=9000−2(2000)=5000.'], jawaban: 'Harga buku = <strong>Rp5.000</strong>, harga pensil = <strong>Rp2.000</strong>.' },
          ujiNalar: { soal: 'Dari 3x+y=11 dan x+y=5, berapa nilai x?', options: ['2', '3', '4', '5'], correctIndex: 1, explanation: 'Eliminasi (kurangkan kedua persamaan): 2x=6, maka x=<strong>3</strong>.' }
        },
        {
          id: 'spltv',
          title: 'Sistem Persamaan Linear Tiga Variabel',
          mengamati: 'Sekarang bayangkan tiga barang tak diketahui sekaligus (misal harga tiga jenis buah dari tiga kombinasi belanja berbeda). Apakah metode SPLDV bisa diperluas ke situasi ini?',
          kenapa: 'SPLTV memakai prinsip yang sama persis dengan SPLDV, hanya diterapkan bertahap: eliminasi satu variabel dulu dari sepasang persamaan untuk mengubah masalah tiga variabel menjadi dua variabel (SPLDV biasa).',
          menelaah: { text: 'Strategi penyelesaian bertahap:', points: ['Pilih satu variabel untuk dieliminasi lebih dulu dari dua pasang persamaan berbeda.', 'Hasilnya adalah dua persamaan baru dengan dua variabel — selesaikan seperti SPLDV biasa.', 'Substitusi balik ke salah satu persamaan asli untuk mendapatkan variabel ketiga.'] },
          rumus: { formula: 'SPLTV = SPLDV yang diterapkan dua kali secara bertahap', note: 'Kuncinya adalah konsisten memilih variabel mana yang dieliminasi lebih dulu.' },
          duniaNyata: [
            { title: 'Perhitungan komposisi gizi', text: 'Menentukan komposisi tiga bahan makanan agar total kalori, protein, dan lemak sesuai target tertentu.' },
            { title: 'Distribusi beban struktur', text: 'Teknik sipil menghitung distribusi beban pada tiga titik tumpu sebuah struktur bangunan.' }
          ],
          kasus: { soal: 'Diketahui x+y+z=6, x+2y+z=9, 2x+y+z=8. Tentukan nilai x, y, z.', steps: ['Dari (pers2 − pers1): y=3.', 'Dari (pers3 − pers1): x=2.', 'Substitusi ke persamaan pertama: 2+3+z=6, maka z=1.'], jawaban: 'x=<strong>2</strong>, y=<strong>3</strong>, z=<strong>1</strong>.' },
          ujiNalar: { soal: 'Dari petunjuk kasus di atas, berapa nilai z?', options: ['0', '1', '2', '3'], correctIndex: 1, explanation: 'Dari substitusi balik, z = <strong>1</strong>.' }
        },
        {
          id: 'pertidaksamaan-pemodelan',
          title: 'Pertidaksamaan Linear & Pemodelan Masalah Nyata',
          mengamati: 'Soal SPLDV sebelumnya mengasumsikan hubungan PASTI (=). Tapi kenyataan sering berupa batasan, misalnya "uang belanja tidak boleh lebih dari Rp100.000" — itu bukan persamaan, itu pertidaksamaan.',
          kenapa: 'Pertidaksamaan linear dipakai saat hubungan antar variabel berupa kendala (maksimal, minimal, tidak lebih dari), bukan kesetaraan pasti — inilah dasar pemrograman linear yang dipakai bisnis untuk optimasi produksi dengan sumber daya terbatas.',
          menelaah: { text: 'Cara membaca dan menggambar pertidaksamaan:', points: ['Pertidaksamaan digambar sebagai DAERAH pada bidang koordinat, bukan garis tunggal seperti persamaan.', 'Garis batasnya solid kalau ≤ atau ≥ (termasuk), putus-putus kalau < atau > (tidak termasuk).', 'Daerah yang memenuhi SEMUA pertidaksamaan sekaligus disebut daerah penyelesaian (feasible region), biasanya berbentuk poligon.'] },
          rumus: { formula: 'Daerah penyelesaian = irisan seluruh daerah tiap pertidaksamaan', note: 'Ini bukan rumus hitung tunggal, melainkan hasil visual dari menggambar semua batasan sekaligus.' },
          duniaNyata: [
            { title: 'Optimasi produksi pabrik', text: 'Pabrik menentukan kombinasi produksi terbaik dengan keterbatasan bahan baku dan jam kerja (riset operasi).' },
            { title: 'Perencanaan anggaran rumah tangga', text: 'Batas pengeluaran per kategori bisa dimodelkan sebagai sistem pertidaksamaan linear.' }
          ],
          kasus: { soal: 'Tentukan apakah titik (2,3) memenuhi pertidaksamaan x+y≤6 dan x≥0.', steps: ['Cek pertidaksamaan pertama: 2+3=5, apakah ≤6? Ya.', 'Cek pertidaksamaan kedua: x=2, apakah ≥0? Ya.', 'Karena kedua syarat terpenuhi, titik ini termasuk daerah penyelesaian.'], jawaban: 'Titik (2,3) <strong>memenuhi</strong> kedua pertidaksamaan.' },
          ujiNalar: { soal: 'Apakah titik (4,5) memenuhi pertidaksamaan x+y<8?', options: ['Ya, karena 4+5=9<8', 'Tidak, karena 4+5=9 tidak kurang dari 8', 'Ya, karena x dan y positif', 'Tidak cukup informasi'], correctIndex: 1, explanation: '4+5=9, dan 9 <strong>bukan</strong> kurang dari 8 — jadi titik ini tidak memenuhi.' }
        }
      ]
    },
    {
      id: 'fungsi-kuadrat',
      title: 'Persamaan dan Fungsi Kuadrat',
      meta: 'Kasus 06 · 3 investigasi',
      unlocked: true,
      subbabs: [
        {
          id: 'bentuk-grafik-fungsi-kuadrat',
          title: 'Bentuk & Grafik Fungsi Kuadrat',
          mengamati: 'Lintasan bola yang dilempar, pancuran air mancur, kabel jembatan gantung — semuanya membentuk lengkungan yang mirip, disebut parabola. Kenapa begitu banyak fenomena berbeda membentuk kurva yang sama persis?',
          kenapa: 'Fungsi kuadrat f(x)=ax²+bx+c menghasilkan grafik parabola karena suku x² membuat nilai fungsi berubah TIDAK PROPORSIONAL (dipercepat) — inilah yang secara matematis cocok memodelkan gerak yang dipengaruhi percepatan tetap seperti gravitasi.',
          menelaah: { text: 'Membaca anatomi grafik parabola:', points: ['Koefisien a menentukan arah buka: a>0 terbuka ke atas (titik minimum), a<0 terbuka ke bawah (titik maksimum).', 'Titik puncak (vertex) adalah titik ekstrem grafik, koordinatnya bisa dicari dari x=−b/2a.', 'Sumbu simetri adalah garis vertikal yang melewati titik puncak, membagi parabola menjadi dua sisi cermin sempurna.'] },
          rumus: { formula: 'x_puncak = −b/2a &nbsp;·&nbsp; y_puncak = f(x_puncak)', note: 'Titik puncak adalah "jantung" dari analisis fungsi kuadrat — banyak soal berujung pada mencarinya.' },
          duniaNyata: [
            { title: 'Lintasan proyektil', text: 'Bola, peluru, atau air mancur mengikuti bentuk parabola sesuai kombinasi gerak GLB horizontal dan GLBB vertikal.' },
            { title: 'Reflektor parabola', text: 'Antena satelit dan lampu mobil memakai bentuk parabola untuk memantulkan sinyal/cahaya ke satu titik fokus.' }
          ],
          kasus: { soal: 'Tentukan titik puncak dari f(x)=x²−4x+3.', steps: ['a=1, b=−4. x_puncak = −(−4)/2(1) = 2.', 'y_puncak = f(2) = 4−8+3 = −1.', 'Titik puncaknya (2,−1).'], jawaban: 'Titik puncak adalah <strong>(2, −1)</strong>.' },
          ujiNalar: { soal: 'Berapa x_puncak dari f(x)=2x²−8x+5?', options: ['1', '2', '4', '8'], correctIndex: 1, explanation: 'x_puncak = −(−8)/2(2) = 8/4 = <strong>2</strong>.' }
        },
        {
          id: 'akar-persamaan-kuadrat',
          title: 'Akar Persamaan Kuadrat: Faktorisasi, Rumus ABC & Diskriminan',
          mengamati: 'Parabola f(x)=x²−5x+6 memotong sumbu x di dua titik. Bagaimana menemukan titik potong itu secara pasti — bukan cuma menaksir dari gambar grafiknya?',
          kenapa: 'Mencari akar persamaan kuadrat (nilai x yang membuat f(x)=0) penting karena itulah titik-titik kritis yang menjawab pertanyaan praktis: kapan bola menyentuh tanah, kapan keuntungan mencapai nol (titik impas), dan sebagainya.',
          menelaah: { text: 'Tiga cara mencari akar, dari yang tercepat sampai yang selalu berhasil:', points: ['<strong>Faktorisasi</strong>: cari dua bilangan yang jumlahnya=b dan hasil kalinya=c — cepat, tapi tidak selalu mudah ditebak.', '<strong>Rumus ABC</strong> selalu berhasil untuk persamaan kuadrat manapun, diturunkan dari teknik melengkapkan kuadrat sempurna.', '<strong>Diskriminan D=b²−4ac</strong> menentukan JUMLAH akar tanpa perlu menghitung akarnya penuh: D>0 dua akar berbeda, D=0 satu akar kembar, D<0 tak ada akar real.'] },
          rumus: { formula: 'x = (−b ± √(b²−4ac)) / 2a &nbsp;·&nbsp; D = b² − 4ac', note: 'D<0 artinya grafik parabola tidak pernah menyentuh sumbu x sama sekali.' },
          duniaNyata: [
            { title: 'Titik impas (break-even point) bisnis', text: 'Menentukan kapan keuntungan sama dengan nol dari fungsi keuntungan berbentuk kuadrat.' },
            { title: 'Waktu benda jatuh menyentuh tanah', text: 'Dihitung dari akar persamaan gerak kuadrat yang memodelkan ketinggian terhadap waktu.' }
          ],
          kasus: { soal: 'Selesaikan x²−5x+6=0 dengan faktorisasi.', steps: ['Cari dua bilangan yang jumlahnya=−5 dan kalinya=6: yaitu −2 dan −3.', 'Maka (x−2)(x−3)=0.', 'Sehingga x=2 atau x=3.'], jawaban: 'Akar-akarnya adalah <strong>x=2</strong> dan <strong>x=3</strong>.' },
          ujiNalar: { soal: 'Berapa nilai diskriminan dari x²+2x+5=0, dan apa artinya?', options: ['D=−16, tak ada akar real', 'D=16, dua akar berbeda', 'D=0, akar kembar', 'D=24, dua akar berbeda'], correctIndex: 0, explanation: 'D=4−20=<strong>−16</strong>, artinya grafik tidak pernah menyentuh sumbu x (tak ada akar real).' }
        },
        {
          id: 'pemodelan-fungsi-kuadrat',
          title: 'Pemodelan dengan Fungsi Kuadrat',
          mengamati: 'Seorang petani ingin memagari lahan persegi panjang dengan kawat sepanjang 100 meter untuk mendapat luas SEBESAR MUNGKIN. Berapa ukuran optimalnya? Ini bukan soal aljabar biasa, tapi soal optimasi.',
          kenapa: 'Banyak masalah "cari nilai terbaik" di dunia nyata bisa diubah menjadi fungsi kuadrat, karena fungsi kuadrat punya SATU titik ekstrem pasti (puncak parabola) yang bisa dicari eksak lewat rumus, tanpa coba-coba.',
          menelaah: { text: 'Langkah umum pemodelan optimasi dengan fungsi kuadrat:', points: ['Beri nama variabel untuk besaran yang dicari.', 'Tulis hubungan antar besaran sebagai satu fungsi (luas/keuntungan/jarak) dalam SATU variabel bebas — fungsi ini akan berbentuk kuadrat.', 'Titik puncaknya (dari rumus x=−b/2a) adalah jawaban optimalnya.'] },
          rumus: { formula: 'Nilai optimal = y_puncak = f(−b/2a)', note: 'Kalau a>0, ini nilai MINIMUM; kalau a<0, ini nilai MAKSIMUM.' },
          duniaNyata: [
            { title: 'Penentuan harga jual optimal', text: 'Harga terlalu tinggi mengurangi pembeli, terlalu rendah mengurangi margin — titik optimalnya bisa dicari lewat fungsi kuadrat keuntungan.' },
            { title: 'Desain kemasan dengan bahan terbatas', text: 'Menentukan ukuran wadah yang memaksimalkan volume dengan luas bahan yang tersedia.' }
          ],
          kasus: { soal: 'Petani di atas: keliling pagar=100m (panjang+lebar=50). Tentukan ukuran yang memaksimalkan luas.', steps: ['Misalkan panjang=x, maka lebar=50−x. Luas L(x)=x(50−x)=−x²+50x.', 'Titik puncak: x=−50/2(−1)=25.', 'Luas maksimum: L(25)=25×(50−25)=25×25=625 m².'], jawaban: 'Ukuran optimal adalah persegi <strong>25m × 25m</strong>, dengan luas maksimum <strong>625 m²</strong>.' },
          ujiNalar: { soal: 'Keuntungan toko dimodelkan K(x)=−2x²+40x. Berapa keuntungan maksimumnya?', options: ['100', '150', '200', '400'], correctIndex: 2, explanation: 'x_puncak=−40/2(−2)=10. K(10)=−200+400=<strong>200</strong>.' }
        }
      ]
    },
    {
      id: 'geometri',
      title: 'Geometri',
      meta: 'Kasus 07 · 3 investigasi',
      unlocked: true,
      subbabs: [
        {
          id: 'titik-garis-bidang',
          title: 'Titik, Garis, Bidang & Hubungannya',
          mengamati: 'Kenapa meja bisa goyang saat berdiri di atas 4 kaki di lantai tak rata, tapi kursi berkaki 3 selalu stabil di permukaan mana pun?',
          kenapa: 'Geometri ruang mempelajari hubungan posisi antar titik, garis, dan bidang — konsep "3 titik tak segaris menentukan tepat 1 bidang" menjelaskan langsung fenomena kursi 3 kaki di atas.',
          menelaah: { text: 'Aturan dasar relasi titik-garis-bidang:', points: ['2 titik menentukan tepat 1 garis lurus.', '3 titik yang TAK segaris menentukan tepat 1 bidang datar — inilah alasan kursi 3 kaki selalu stabil, berapa pun tidak ratanya lantai.', 'Garis terhadap bidang bisa: berada PADA bidang, SEJAJAR bidang, atau MENEMBUS bidang di satu titik.'] },
          rumus: { formula: '3 titik tak segaris ⟹ tepat 1 bidang', note: 'Ini prinsip dasar yang menjelaskan kenapa tripod kamera selalu berkaki 3, bukan 4.' },
          duniaNyata: [
            { title: 'Kaki tripod kamera/teleskop', text: 'Selalu didesain 3 kaki agar stabil sempurna di permukaan tak rata mana pun.' },
            { title: 'Kemiringan atap bangunan', text: 'Arsitek menghitung sudut kemiringan atap sebagai sudut antara dua bidang.' }
          ],
          kasus: { soal: 'Sebuah meja berkaki 4 goyang di lantai tak rata, tapi begitu satu kaki diangkat (jadi 3 titik kontak), langsung stabil. Jelaskan kenapa.', steps: ['4 titik (ujung kaki) belum tentu terletak tepat pada 1 bidang datar karena lantai tak rata sempurna — salah satu kaki jadi menggantung/goyang.', 'Begitu jadi 3 titik kontak, otomatis membentuk 1 bidang pasti.', 'Tak peduli seberapa tak ratanya lantai, 3 titik SELALU membentuk bidang tunggal.'], jawaban: 'Karena <strong>3 titik tak segaris selalu menentukan tepat 1 bidang</strong> — menambah kaki keempat tidak menjamin keempatnya berada tepat di bidang yang sama.' },
          ujiNalar: { soal: 'Kenapa kursi berkaki 3 tidak akan pernah goyang di permukaan mana pun?', options: ['Karena kaki kursi terbuat dari bahan kuat', 'Karena 3 titik ujung kaki selalu menentukan tepat 1 bidang datar, tak peduli posisi permukaannya', 'Karena berat kursi terbagi rata', 'Karena kursi berkaki 3 lebih ringan'], correctIndex: 1, explanation: 'Prinsip geometrinya: <strong>3 titik tak segaris selalu menentukan tepat 1 bidang</strong>.' }
        },
        {
          id: 'bangun-ruang-luas-volume',
          title: 'Bangun Ruang: Luas Permukaan & Volume',
          mengamati: 'Kenapa kaleng minuman selalu berbentuk tabung (silinder), padahal kubus lebih mudah ditumpuk di rak toko?',
          kenapa: 'Perusahaan minuman memilih bentuk yang meminimalkan LUAS PERMUKAAN (biaya bahan alumunium) untuk VOLUME tertentu (isi minuman) — inilah motivasi nyata di balik rumus luas dan volume bangun ruang: soal efisiensi bahan, bukan sekadar hitung-hitungan.',
          menelaah: { text: 'Membedakan dua ukuran penting bangun ruang:', points: ['<strong>Volume</strong> mengukur ruang yang ditempati bangun (satuan kubik) — relevan untuk kapasitas isi.', '<strong>Luas permukaan</strong> mengukur total area seluruh sisi luar bangun (satuan persegi) — relevan untuk bahan pembungkus/cat.', 'Untuk bangun gabungan, volume total = jumlah tiap bagian, tapi luas permukaan harus mengurangi bagian yang saling menempel (tak terlihat dari luar).'] },
          rumus: { formula: 'V_tabung = πr²t &nbsp;·&nbsp; L_tabung = 2πr² + 2πrt &nbsp;·&nbsp; V_balok = p×l×t', note: 'Rumus volume dan luas permukaan berbeda tujuan — jangan tertukar saat soal minta salah satunya.' },
          duniaNyata: [
            { title: 'Desain kemasan produk', text: 'Kaleng dan kotak dirancang meminimalkan bahan tapi memaksimalkan isi.' },
            { title: 'Perhitungan kapasitas tangki air', text: 'Kebutuhan cat pada bangunan dan kapasitas tandon dihitung dari luas permukaan dan volume.' }
          ],
          kasus: { soal: 'Kaleng tabung berjari-jari 5cm, tinggi 15cm (π≈3,14). Tentukan volumenya.', steps: ['Gunakan V=πr²t.', 'Substitusi: 3,14×5²×15 = 3,14×25×15.', 'Hitung: 3,14×375 = 1177,5.'], jawaban: 'Volume kaleng ≈ <strong>1177,5 cm³</strong>.' },
          ujiNalar: { soal: 'Sebuah balok berukuran 4cm×3cm×5cm. Berapa volumenya?', options: ['12 cm³', '20 cm³', '60 cm³', '120 cm³'], correctIndex: 2, explanation: 'V=p×l×t=4×3×5=<strong>60 cm³</strong>.' }
        },
        {
          id: 'geometri-koordinat',
          title: 'Geometri Koordinat: Menggabungkan Aljabar & Bentuk',
          mengamati: 'Matematikawan Descartes bertanya-tanya: bisakah bentuk geometri (lingkaran, garis, segitiga) dituliskan sebagai persamaan aljabar, bukan cuma digambar?',
          kenapa: 'Geometri koordinat lahir dari ide itu — dengan menempatkan tiap titik pada pasangan angka (x,y), semua hubungan geometris (jarak, kemiringan, letak) bisa dihitung pakai aljabar biasa, membuka jalan bagi GPS, komputer grafis, dan robotika modern.',
          menelaah: { text: 'Dua rumus dasar geometri koordinat:', points: ['Jarak antar dua titik diturunkan langsung dari Pythagoras: selisih x dan selisih y sebagai dua sisi siku-siku, jarak sebagai sisi miring.', 'Titik tengah dua titik adalah rata-rata koordinat x dan rata-rata koordinat y kedua titik.', 'Gradien (kemiringan garis) mengukur seberapa curam garis, dihitung dari perbandingan perubahan y terhadap perubahan x.'] },
          rumus: { formula: 'jarak = √[(x₂−x₁)² + (y₂−y₁)²] &nbsp;·&nbsp; titik tengah = ((x₁+x₂)/2, (y₁+y₂)/2)', note: 'Rumus jarak ini sebenarnya adalah teorema Pythagoras yang "disamarkan" dalam bentuk koordinat.' },
          duniaNyata: [
            { title: 'GPS & aplikasi peta', text: 'Menghitung jarak lurus antar dua lokasi dengan koordinat lintang-bujur memakai prinsip yang sama.' },
            { title: 'Game & animasi komputer', text: 'Menggerakkan objek dengan menghitung ulang koordinatnya setiap frame animasi.' }
          ],
          kasus: { soal: 'Tentukan jarak antara titik A(1,2) dan B(4,6).', steps: ['Gunakan rumus jarak.', 'Substitusi: √[(4−1)²+(6−2)²] = √[9+16].', 'Hitung: √25 = 5.'], jawaban: 'Jarak A ke B adalah <strong>5</strong>.' },
          ujiNalar: { soal: 'Tentukan titik tengah antara P(2,3) dan Q(8,7).', options: ['(5,5)', '(3,2)', '(10,10)', '(6,4)'], correctIndex: 0, explanation: 'Titik tengah = ((2+8)/2, (3+7)/2) = <strong>(5, 5)</strong>.' }
        }
      ]
    },
    {
      id: 'statistika',
      title: 'Statistika',
      meta: 'Kasus 08 · 3 investigasi',
      unlocked: true,
      subbabs: [
        {
          id: 'penyajian-data',
          title: 'Penyajian Data: Tabel & Diagram',
          mengamati: 'Nilai ulangan 40 siswa berupa 40 angka acak — sulit dilihat polanya kalau dibaca satu-satu. Bagaimana cara "melihat" pola dari tumpukan data mentah?',
          kenapa: 'Penyajian data (tabel distribusi frekuensi, histogram) diciptakan untuk mengubah data mentah yang berantakan jadi bentuk yang bisa dibaca sekali lihat — otak manusia jauh lebih cepat menangkap pola dari gambar/tabel dibanding daftar angka.',
          menelaah: { text: 'Cara data mentah diubah jadi bentuk yang bisa dibaca:', points: ['Data dikelompokkan ke dalam interval (kelas) dengan lebar sama, lalu dihitung frekuensinya, menghasilkan tabel distribusi frekuensi.', 'Histogram adalah versi visual tabel itu — batangnya berdempetan tanpa jarak karena data yang diwakili bersifat kontinu.', 'Makin banyak kelas, makin detail tapi makin sulit dilihat polanya — ada trade-off antara detail dan kejelasan.'] },
          rumus: { formula: 'Jumlah kelas & lebar interval dipilih agar pola data terlihat jelas', note: 'Tidak ada rumus tunggal — ini soal keputusan yang mempertimbangkan kejelasan visual.' },
          duniaNyata: [
            { title: 'Laporan sensus penduduk', text: 'Sebaran usia penduduk disajikan dalam histogram untuk mendukung kebijakan publik.' },
            { title: 'Laporan cuaca bulanan', text: 'Suhu bulanan disajikan dalam diagram garis untuk melihat tren musiman.' }
          ],
          kasus: { soal: '10 data nilai: 70,75,80,85,90,70,75,80,85,90. Buat tabel frekuensi sederhana.', steps: ['Kelompokkan nilai yang sama: 70 (2×), 75 (2×), 80 (2×), 85 (2×), 90 (2×).', 'Setiap nilai muncul dengan frekuensi yang sama.', 'Kesimpulan: data ini tersebar MERATA sempurna, tak ada nilai yang dominan.'], jawaban: 'Semua nilai (70,75,80,85,90) muncul <strong>2 kali</strong> — tidak ada nilai yang lebih dominan dari yang lain.' },
          ujiNalar: { soal: 'Kenapa batang histogram digambar berdempetan tanpa jarak, beda dengan diagram batang kategori biasa?', options: ['Supaya terlihat lebih rapi', 'Karena data pada histogram bersifat kontinu (interval angka yang bersambungan), bukan kategori terpisah', 'Karena lebih mudah digambar', 'Tidak ada alasan khusus, hanya konvensi'], correctIndex: 1, explanation: 'Histogram mewakili data <strong>kontinu</strong> (interval angka bersambungan), sehingga tidak ada jarak yang berarti antar batang.' }
        },
        {
          id: 'ukuran-pemusatan',
          title: 'Ukuran Pemusatan Data: Mean, Median, Modus',
          mengamati: 'Sebuah perusahaan kecil: 8 karyawan bergaji 5 juta, 1 orang (bos) bergaji 100 juta. Rata-rata (mean) gajinya jadi 15,5 juta — tapi apakah angka itu benar-benar "mewakili" gaji karyawan pada umumnya?',
          kenapa: 'Kasus di atas menunjukkan MEAN bisa menyesatkan kalau ada nilai ekstrem (outlier). Karena itu diciptakan MEDIAN (nilai tengah, tak terpengaruh outlier) dan MODUS (nilai paling sering muncul) — ketiganya menjawab "di mana pusat data" dengan cara berbeda.',
          menelaah: { text: 'Tiga cara mengukur pusat data:', points: ['<strong>Mean</strong> = jumlah semua data ÷ banyak data — sensitif terhadap nilai ekstrem karena tiap data "menarik" nilai rata-rata sesuai besarnya.', '<strong>Median</strong> = nilai tengah data yang sudah diurutkan — tak terpengaruh seberapa ekstrem nilai di ujung, hanya peduli urutan.', '<strong>Modus</strong> = nilai/kategori yang paling sering muncul, cocok untuk data kategorik yang tak bisa dirata-rata.'] },
          rumus: { formula: 'Mean = Σx / n', note: 'Untuk data yang sangat "miring" oleh outlier (seperti kasus gaji di atas), median biasanya representasi pusat data yang lebih jujur daripada mean.' },
          duniaNyata: [
            { title: 'Laporan "gaji rata-rata" nasional', text: 'Sering memakai median (bukan mean) agar tidak disesatkan oleh segelintir orang super kaya.' },
            { title: 'Stok sepatu di toko', text: 'Toko memakai modus (ukuran yang paling laku) untuk menentukan prioritas stok.' }
          ],
          kasus: { soal: 'Dari data gaji di atas (8×5jt + 1×100jt), tentukan mediannya.', steps: ['Urutkan 9 data: 5,5,5,5,5,5,5,5,100 (dalam juta).', 'Cari data ke-5 (tengah dari 9 data): nilainya 5.', 'Median = 5 juta — jauh lebih representatif daripada mean 15,5 juta.'], jawaban: 'Median = <strong>Rp5 juta</strong>, jauh lebih mewakili gaji karyawan pada umumnya dibanding mean.' },
          ujiNalar: { soal: 'Data nilai ujian: 60,70,70,80,90. Berapa modusnya?', options: ['60', '70', '75', '90'], correctIndex: 1, explanation: '<strong>70</strong> muncul 2 kali, paling sering dibanding nilai lain.' }
        },
        {
          id: 'ukuran-penyebaran',
          title: 'Ukuran Penyebaran Data: Kuartil & Jangkauan',
          mengamati: 'Dua kelas sama-sama punya nilai rata-rata 75. Tapi kelas A nilainya berkisar 70-80 (kompak), kelas B berkisar 40-100 (sangat bervariasi). Mean sama, tapi gambaran kedua kelas sangat berbeda!',
          kenapa: 'Ukuran pemusatan saja tidak cukup menggambarkan data — dibutuhkan ukuran PENYEBARAN untuk tahu seberapa "menyebar" data dari pusatnya, karena dua kumpulan data bisa punya pusat sama tapi karakter sangat berbeda.',
          menelaah: { text: 'Dua ukuran penyebaran yang saling melengkapi:', points: ['<strong>Jangkauan (range)</strong> = data maksimum − data minimum — sederhana tapi kasar, hanya peduli dua titik ekstrem.', '<strong>Kuartil</strong> membagi data terurut jadi 4 bagian sama banyak (Q1=25%, Q2=median, Q3=75%).', '<strong>Jangkauan interkuartil (IQR=Q3−Q1)</strong> mengukur sebaran 50% data di tengah — lebih tahan terhadap outlier karena mengabaikan nilai ekstrem di ujung.'] },
          rumus: { formula: 'Jangkauan = data maks − data min &nbsp;·&nbsp; IQR = Q3 − Q1', note: 'IQR lebih "jujur" menggambarkan sebaran mayoritas data dibanding jangkauan biasa.' },
          duniaNyata: [
            { title: 'Analisis volatilitas harga saham', text: 'IQR dipakai mengukur sebaran harga tanpa terpengaruh lonjakan sesaat yang ekstrem.' },
            { title: 'Konsistensi performa atlet', text: 'Atlet dengan jangkauan waktu lari kecil lebih konsisten meski rata-ratanya sama dengan atlet lain.' }
          ],
          kasus: { soal: 'Data kelas B: 40,60,70,80,100. Tentukan jangkauannya.', steps: ['Cari data maksimum: 100.', 'Cari data minimum: 40.', 'Jangkauan = 100 − 40 = 60.'], jawaban: 'Jangkauan kelas B = <strong>60</strong> — jauh lebih besar dari kelas A yang jangkauannya cuma 10, meski mean keduanya sama.' },
          ujiNalar: { soal: 'Data: 10,20,30,40,50. Berapa jangkauannya?', options: ['20', '30', '40', '50'], correctIndex: 2, explanation: 'Jangkauan = 50 − 10 = <strong>40</strong>.' }
        }
      ]
    },
    {
      id: 'peluang',
      title: 'Peluang',
      meta: 'Kasus 09 · 3 investigasi',
      unlocked: true,
      subbabs: [
        {
          id: 'ruang-sampel-kejadian',
          title: 'Ruang Sampel & Kejadian',
          mengamati: 'Melempar 1 koin hasilnya jelas: angka atau gambar. Tapi bagaimana cara sistematis mendaftar SEMUA kemungkinan hasil saat situasinya lebih rumit, misalnya melempar 2 dadu sekaligus (36 kemungkinan)?',
          kenapa: 'Konsep ruang sampel diciptakan untuk mendaftar semua kemungkinan hasil suatu percobaan acak secara lengkap dan tak berulang — tanpa daftar lengkap ini, mustahil menghitung peluang secara benar.',
          menelaah: { text: 'Membangun ruang sampel secara sistematis:', points: ['Ruang sampel (S) adalah himpunan SEMUA hasil yang mungkin dari suatu percobaan.', 'Kejadian (event) adalah himpunan bagian dari ruang sampel yang memenuhi kriteria tertentu.', 'Banyak anggota ruang sampel untuk percobaan gabungan dihitung dengan aturan perkalian: banyak hasil percobaan 1 × banyak hasil percobaan 2.'] },
          rumus: { formula: 'n(percobaan gabungan) = n(percobaan 1) × n(percobaan 2) × ...', note: 'Aturan perkalian ini menghindari kita mendaftar satu-satu secara manual untuk percobaan yang kompleks.' },
          duniaNyata: [
            { title: 'Perancangan kode PIN/keamanan', text: 'Total kombinasi kode yang mungkin dihitung memakai aturan perkalian ruang sampel.' },
            { title: 'Permainan kartu & dadu', text: 'Kasino dan permainan berbasis probabilitas seluruhnya bergantung pada perhitungan ruang sampel yang presisi.' }
          ],
          kasus: { soal: 'Berapa banyak anggota ruang sampel saat melempar 2 koin sekaligus?', steps: ['Tiap koin punya 2 hasil (Angka/Gambar).', 'Gunakan aturan perkalian: n=2×2.', 'Hasilnya 4. Ruang sampel S={AA,AG,GA,GG}.'], jawaban: 'Ruang sampelnya memiliki <strong>4 anggota</strong>.' },
          ujiNalar: { soal: 'Berapa banyak ruang sampel saat melempar 1 dadu dan 1 koin sekaligus?', options: ['6', '8', '12', '36'], correctIndex: 2, explanation: 'n = 6 (dadu) × 2 (koin) = <strong>12</strong>.' }
        },
        {
          id: 'peluang-tunggal-komplemen',
          title: 'Peluang Kejadian Tunggal & Komplemen',
          mengamati: 'Setelah ruang sampel didaftar lengkap, bagaimana mengubahnya menjadi ANGKA yang menunjukkan "seberapa mungkin" suatu kejadian terjadi — dari pasti tidak terjadi (0%) sampai pasti terjadi (100%)?',
          kenapa: 'Peluang diciptakan sebagai rasio antara banyak hasil yang diinginkan (kejadian) dengan total hasil yang mungkin (ruang sampel), dengan asumsi semua hasil di ruang sampel punya kesempatan sama munculnya.',
          menelaah: { text: 'Dua konsep dasar dalam menghitung peluang:', points: ['P(A) = n(A)/n(S), nilainya selalu antara 0 (mustahil) dan 1 (pasti).', 'Komplemen kejadian A (ditulis A\') adalah "A TIDAK terjadi".', 'Karena A dan A\' bersama-sama mencakup SELURUH ruang sampel tanpa tumpang tindih, maka P(A)+P(A\')=1 — trik ini berguna saat P(A) langsung sulit dihitung tapi P(A\') justru mudah.'] },
          rumus: { formula: 'P(A) = n(A)/n(S) &nbsp;·&nbsp; P(A′) = 1 − P(A)', note: 'Trik komplemen sering jadi jalan pintas untuk soal peluang yang rumit dihitung langsung.' },
          duniaNyata: [
            { title: 'Perhitungan premi asuransi', text: 'Perusahaan asuransi menghitung peluang klaim (dan komplemennya) untuk menentukan besar premi.' },
            { title: 'Prediksi cuaca', text: 'Ramalan "70% kemungkinan hujan" adalah peluang kejadian tunggal berdasarkan data historis.' }
          ],
          kasus: { soal: 'Sebuah dadu dilempar sekali. Tentukan peluang muncul mata dadu genap.', steps: ['Kejadian genap = {2,4,6}, sehingga n(A)=3.', 'Ruang sampel n(S)=6.', 'P(A) = 3/6 = 1/2 = 0,5.'], jawaban: 'Peluang muncul mata dadu genap = <strong>0,5</strong> (atau 1/2).' },
          ujiNalar: { soal: 'Peluang besok hujan adalah 0,3. Berapa peluang besok TIDAK hujan?', options: ['0,3', '0,5', '0,7', '1,3'], correctIndex: 2, explanation: 'P(tidak hujan) = 1 − 0,3 = <strong>0,7</strong>.' }
        },
        {
          id: 'peluang-majemuk',
          title: 'Peluang Kejadian Majemuk',
          mengamati: 'Apa peluang muncul mata dadu genap ATAU angka lebih dari 4? Apa peluang koin muncul gambar DAN dadu muncul angka 6 sekaligus? Kata "atau" dan "dan" ternyata mengubah cara hitungnya secara drastis.',
          kenapa: 'Kejadian majemuk butuh aturan khusus karena kata "atau" (union) dan "dan" (irisan/kejadian saling bebas) punya logika matematis yang berbeda — salah pakai rumus bisa menghitung ganda atau kurang hitung.',
          menelaah: { text: 'Dua aturan utama kejadian majemuk:', points: ['Untuk "A ATAU B": P(A∪B)=P(A)+P(B)−P(A∩B) — dikurangi irisan agar bagian yang tumpang tindih tidak terhitung dua kali.', 'Kalau A dan B saling lepas (tak mungkin terjadi bersamaan), P(A∩B)=0, sehingga rumusnya jadi P(A∪B)=P(A)+P(B) saja.', 'Untuk "A DAN B" yang saling bebas (hasil satu tak memengaruhi yang lain), P(A∩B)=P(A)×P(B).'] },
          rumus: { formula: 'P(A∪B) = P(A) + P(B) − P(A∩B) &nbsp;·&nbsp; P(A∩B) = P(A)×P(B) jika saling bebas', note: 'Kata kunci "atau" mengarah ke union, "dan" (untuk kejadian saling bebas) mengarah ke perkalian.' },
          duniaNyata: [
            { title: 'Analisis risiko gabungan keuangan', text: 'Menghitung peluang dua kejadian buruk terjadi sekaligus dalam manajemen risiko/asuransi.' },
            { title: 'Genetika (hukum Mendel)', text: 'Peluang gabungan pewarisan dua sifat berbeda dari orang tua dihitung memakai peluang kejadian saling bebas.' }
          ],
          kasus: { soal: 'Sebuah dadu dilempar sekali. Tentukan peluang muncul mata dadu GENAP ATAU lebih dari 4.', steps: ['Genap = {2,4,6}, n=3. Lebih dari 4 = {5,6}, n=2.', 'Irisan (genap DAN >4) = {6}, n=1.', 'P(A∪B) = 3/6 + 2/6 − 1/6 = 4/6 = 2/3.'], jawaban: 'Peluangnya adalah <strong>2/3</strong>.' },
          ujiNalar: { soal: 'Koin dan dadu dilempar bersamaan (saling bebas). Berapa peluang muncul GAMBAR pada koin DAN angka 6 pada dadu?', options: ['1/2', '1/6', '1/12', '1/36'], correctIndex: 2, explanation: 'P(gambar)=1/2, P(6)=1/6. Karena saling bebas: P=1/2×1/6=<strong>1/12</strong>.' }
        }
      ]
    }
  ]
};
