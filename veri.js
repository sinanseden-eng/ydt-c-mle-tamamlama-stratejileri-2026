/* ══════════════════════════════════════════════════════════
   YDT CÜMLE TAMAMLAMA STRATEJİLERİ 2026 — veri.js (DOSYA 2/2)
   index.html'deki <script src="veri.js"> satırı bu dosyayı yükler.
   Türkçe karakterler doğrudan yazılmıştır; UTF-8 olarak kaydedin.
   Soru eklerken aynı alanları kullanın:
   id, part('A' Tip 1 | 'B' Tip 2), cat, stem, clue,
   facts[soru kökü, boşluk ----], opts[[metin,geribildirim]×5],
   ans(0-4), ev, why, strat
   ══════════════════════════════════════════════════════════ */

window.CATS = {
  kiyas:    {no:'01', name:'Kıyaslama & Karşıtlık', en:'Contrast & Comparison', color:'#C13F14'},
  zaman:    {no:'02', name:'Zaman Uyumu', en:'Tense Harmony', color:'#8F6400'},
  kosul:    {no:'03', name:'Koşul & Kip Uyumu', en:'Condition & Modal Harmony', color:'#8E2D5A'},
  anlam:    {no:'04', name:'Anlam Yönü & Beklenti', en:'Meaning Direction', color:'#0E7568'},
  gonderim: {no:'05', name:'Gönderim & Yapı Teşhisi', en:'Reference & Structure', color:'#23608F'},
  yapi:     {no:'06', name:'Özne Uyumu & Ön Yargı', en:'Subject Harmony & Prejudice', color:'#5B3E96'}
};

window.LESSONS = [
  {cat:'kiyas', title:'Kıyaslama ve Karşıtlık: whereas · while · although', en:'Contrast & Comparison',
   roots:[
     ['whereas / while (kıyaslama)','Taban tabana kıyaslama kurar: iki özne, iki yön, aynı ölçü. Şıkta kökün öznesine KARŞI bir özne ve ters yöne çekilmiş bir değer ara.'],
     ['although / even though (teslim)','Beklenenin tersi gerçekleşir: "en yeni cihazlar + yine kaybolmak" gibi. Ana cümledeki still / yet pekiştiricileri sinyaldir.'],
     ['despite / in spite of (isim)','+ isim öbeği: despite the rain. Cümleyle kurulamaz — although cümle ister. Form takası klasik çeldiricidir.'],
     ['Kıyaslanabilirlik kuralı','Karşılaştırılan iki şey AYNI KATEGORİDEN olmalı: bitter çikolata ↔ sütlü çikolata ✓; bitter çikolata ↔ "çikolata tüketimi" ✗ — alt tür kendisiyle kıyaslanamaz.']
   ],
   steps:[
     'Bağlacı bulun ve ilişkiyi adlandırın: kıyaslama mı, teslim (rağmen) mi?',
     'Kökün öznesini ve yönünü yazın; şıkta aynı kategoriden, ters yönde bir özne arayın.',
     'Form denetleyin: despite isim ister, although cümle ister.',
     'still / yet gibi pekiştiricileri işaretleyin: teslim ilişkisini doğrularlar.'
   ],
   trap:{t:'Alt Tür Tuzağı', d:'Kıyaslamada kelime benzerliğine kanmayın: "bitter çikolatanın faydalarına farkındalık arttı" cümlesinin karşısına "çikolata tüketimi arttı" konulamaz — bitter, çikolatanın ALT TÜRÜDÜR; kendisiyle ailesi kıyaslanmaz. Doğru karşılık, 1. sorudaki gibi paralel bir alt türdür: buhar makinesi (yüzyıl) ↔ akıllı telefon (on yıl).'}},
  {cat:'zaman', title:'Zaman Bağlaçları: Önce Uyum, Sonra Anlam', en:'Tense Harmony',
   roots:[
     ['by the time + past → past perfect','"By the time X arrived, … had already + V3": referans anından ÖNCE tamamlanmış olay. En sık sınanan ikili budur.'],
     ['WHEN ana cümle yasağı','when + present kökünde boş kol sınamaya girmez: have/has V3, have/has been V-ing, am/is/are V-ing — tablo §01\u2019deki Eleme Tabloları modülünde.'],
     ['until / when + gelecek ana cümle','Geleceği ana cümle taşır: "will not … until it HAS been completed" — bağımlı cümlede will yasaktır.'],
     ['Sıra: uyum → anlam','Zaman bağlacı görürseniz önce zaman uyumsuz şıkları eler, anlam değerlendirmesini SONRA yaparsınız.']
   ],
   steps:[
     'Kökteki fiilin zamanını daire içine alın (past / present / will).',
     'Eleme tablosundan geçemeyen biçimleri ilk turda çizin.',
     'Kalan adaylarda öncelik-eşzamanlılık anlamını denetleyin: by the time = öncelik, while = eşzamanlılık, until = süredurum.',
     'Son kararı "çıkarıp okuma" ile doğrulayın: kalan dört cümle akıyor mu?'
   ],
   trap:{t:'Anlam Mükemmel, Zaman Uyumsuz', d:'2. sorunun dersi: itfaiye kökünde şıkların çoğu anlamca makuldür; ancak will have, has been V-ing, have V3 gibi biçimler zaman eksenini kırar ve ilk turda düşer. Bu türde anlam güzelliği zaman uyumsuzluğunu asla telafi etmez — önce uyum, sonra anlam.'}},
  {cat:'kosul', title:'Koşul Bağlaçları: Eleme Tablosu ve Type Takibi', en:'Condition & Modal Harmony',
   roots:[
     ['IF sonuç kolu yasaklıları','have/has V3, have/has been V-ing, past tense\u2019ler ve would ailesi tabloyla düşer; kalan güvenli biçim yalın geniş zaman ve can/must/could gibi modallerdir.'],
     ['Type takibi','Kök Type 1 ise (if + present) şıklarda would have / past aramayın; type karışımı otomatik eleme nedenidir.'],
     ['unless = if … not','"Unless you hurry, you will be late" — olumsuz koşul: sonuç da olumsuz/olası yönde olur.'],
     ['so that + could / might','Amaç cümlesinin kipi ana fiile kilitlenir: geçmiş ana fiil → so that + could/might; "so that + will" yalnız şimdiki-gelecek kökte yaşar.']
   ],
   steps:[
     'Koşul bağlacını görünce eleme tablosunu açın: yasaklı biçim taşıyan şıklar ilk turda düşer.',
     'Kökün type\u2019ını belirleyin ve şıkların type uyumunu denetleyin.',
     'unless/otherwise yönünü işaretleyin: olumsuz koşul → olumsuz/olası sonuç.',
     'Amaç bağlacında kip uyumunu kontrol edin: geçmiş → could/might.'
   ],
   trap:{t:'Type Karışımı', d:'4. sorunun dersi: "If the restoration work continues…" Type 1\u2019dir; have V3 (A), past (B) ve have been V-ing (D) tabloyla, "would have returned" (E) type uyumsuzluğuyla düşer. Kalan güvenli biçim modal ya da yalın geniş zamandır — tablo + type + anlam sırası bozulmadığında cevap kendini gösterir.'}},
  {cat:'anlam', title:'Anlam Yönü ve Beklenti Yönetimi', en:'Meaning Direction',
   roots:[
     ['Yönü yazın','Bağlacın istediği ilişkiyi tek kelimeyle not edin: sebep, sonuç, terslik, amaç. Her şıkkı bu kelimeyle SÖZLE test edin.'],
     ['therefore zinciri','"; therefore, X" kalıbında öncül → sonuç akışı kurulur: boşluğa sonucun NEDENİ gelir (kül bulutu → uçuş iptali).'],
     ['Anlamlı ama ilişkisiz','İki cümle ayrı ayrı doğru olabilir; bağlacın istediği ilişki ikisi arasında YOKSA şık düşer — Tip 2\u2019nin ana sınavı budur.'],
     ['Çelişki avı','Bir şık kökün savını çürütüyorsa ya da sonucu öncül sanıyorsa yön ters demektir.']
   ],
   steps:[
     'Kök cümlenin savını tek cümlede özetleyin.',
     'Her şıkkın bu sava katkısını etiketleyin: destekler / çürütür / ilgisiz.',
     'Bağlaç-şık eşleşmesini SÖZLE yapın: "X olduğundan Y" dediğinizde kulak tıkıyorsa eler.',
     'Son iki adayda duygu yönü en tutarlı olanı seçin.'
   ],
   trap:{t:'İki Doğru Cümle, Sıfır Bağ', d:'15. sorunun dersi: "Since satellites now follow every route, the mechanism remains a mystery" tek başına makul bir cümledir ama ilişki olarak terstir — izlemek bilinmezliği azaltır, artırmaz. Tip 2\u2019de dört yanlış şık çoğu kez ANLAMSAL olarak doğrudur; yalnızca bağlacın kurduğu ilişkiyi kuramazlar.'}},
  {cat:'gonderim', title:'Referans Kelimeleri ve that / where Teşhisi', en:'Reference & Structure',
   roots:[
     ['its / their / he / she takibi','Kökte its varsa şıkta TEKİL bir isim olmalı; "Libya and Sudan" gibi çoğul özne their ister. Sayı + cinsiyet kilidi birlikte çalışır.'],
     ['THAT + tam cümle → noun clause','that + S-V-O geliyorsa bu bir isim cümleciğidir ve kök cümlenin NESNESİDİR: seçeneklerde ÖZNE + FİİL (SV) dizilimi aranır; tam cümleler ve isim öbekleri elenir.'],
     ['THAT + eksik cümle → relative clause','that + SV/VO geliyorsa şık tam cümledir; that bir ismi nitelemektedir.'],
     ['where → şıkkın SON ismi','where-clause bir YERİ niteler: şıkkın sonundaki isim yer olmalı (telemedicine wing ✓; "regulations" ✗).']
   ],
   steps:[
     'Kökteki its/they/this\u2019in yanına sayı + tür yazın; her şıkta adresini arayın.',
     'that\u2019ten sonraki cümlenin tam mı eksik mi olduğuna bakın; noun/relative teşhisini yapın.',
     'where gördüğünüzde şıkların SON isimlerini altını çizin; yer anlamı taşıyanı seçin.',
     'Gönderimi havada kalan şık, en akıcı şık olsa bile düşer.'
   ],
   trap:{t:'Sayı Kilidi', d:'18. sorunun dersi: "it still takes its light more than eight minutes" cümlesinde its, TEKİL bir gök cismi ister. "Stars" (çoğul → their) ve "other stars" (özne kayması) bu kilidi kırdığı için elenir; doğru cevap hem its adresini veren hem "still" kontrastını tamamlayan tek şıktır.'}},
  {cat:'yapi', title:'Kısaltmalar, Özne Atlamaları ve Ön Yargı Yapıları', en:'Subject Harmony & Prejudice',
   roots:[
     ['V3 / Having V3 açılışı','Kısaltmanın ön şartı özne ortaklığıdır: "Built to resist earthquakes" ise şıkta KURULAN bir özne aranır — kule ✓, mühendis ✗, deprem ✗.'],
     ['we → you sıçraması','Kök "we" ile açılmışsa şıklarda "you" görünce ön yargıyla yaklaşın: mantıklı bir geçiş yoksa şık büyük olasılıkla tuzağın kendisidir.'],
     ['Had V2 ↔ V (would) beraberliği','Past perfect daima if/devrik yapı ve would ile BERABER gelir: if\u2019siz "Had V3, would have" fragmenttır; devrik "Had + özne + V3" ise DOĞRU biçimdir.'],
     ['was/were V-ing ↔ have/has V','Past continuous ile present perfect\u2019i yapısal olarak bağlamak sınanmamıştır: bu dizilimi gördüğünüzde daha iyi bir aday arayın.']
   ],
   steps:[
     'Kök V3/Having V3 ile başlıyorsa şıklardaki özneleri altını çizin; kısaltmayı yapabilecek faili seçin.',
     'Zamir sıçramalarını işaretleyin (we→you): gerekçesiz sıçrama = şüphe.',
     'Had V3\u2019ü tek başına ya da karışık type\u2019la gördüğünüzde ön yargı listesine alın.',
     'was/were V-ing + have/has V diziliminde elinizde sağlam aday varsa bu şıkkı bırakın.'
   ],
   trap:{t:'Kurulamayan Özne', d:'11. sorunun dersi: "Built to resist earthquakes that never came" kısaltmasını yalnızca inşa edilen bir YAPI yapabilir — kule. Mühendis (tasarlar), standartlar (yazılır), deprem (vurur) kurulamaz. Kısaltmalı kökte ilk iş şıklardaki özneleri listelemek ve fiilin mantıksal failini bulmaktır.'}}
];

window.LABTAGS = {
  zaman:    {name:'Zaman Uyumu', color:'#8F6400'},
  kosul:    {name:'Koşul Eleme', color:'#8E2D5A'},
  kiyas:    {name:'Kıyaslama Beklentisi', color:'#C13F14'},
  gonderim: {name:'Referans Takibi', color:'#0E7568'},
  yap:      {name:'Yapı Teşhisi (that/where)', color:'#23608F'},
  oztur:    {name:'Özne Uyumu', color:'#221B14'},
  onyargi:  {name:'Ön Yargı Alarmı', color:'#5B3E96'},
  anlam:    {name:'Anlam Beklentisi', color:'#6E3E75'}
};

window.LABITEMS = [
  {en:'By the time the rescue teams reached the village, ----', tr:'Kurtarma ekipleri köye ulaştığında ----', tag:'zaman', note:'by the time + past → had already + V3. İlk hamle: kökün zamanını işaretle, uyumsuz biçimleri eler.'},
  {en:'If the vaccine passes its final trials this year, ----', tr:'Aşı bu yıl son denemelerinden geçerse ----', tag:'kosul', note:'IF tablosu: boşlukta have V, past, would ailesi yasak. Tablo ilk turda eler; kalanda type + anlam.'},
  {en:'Whereas the north of the country relies on heavy industry, ----', tr:'Ülkenin kuzeyi ağır sanayie dayanırken ----', tag:'kiyas', note:'whereas = taban tabana kıyaslama: karşıt bölge/sistem ve ters yöne çekilmiş değer bekle.'},
  {en:'---- even though its digestive system has puzzled zoologists for decades.', tr:'---- sindirim sistemi onlarca yıldır zoolologları şaşırtsa da.', tag:'gonderim', note:'its → TEKİL bir hayvan; şıkta tekil özne ara (çoğul özne their isterdi).'},
  {en:'---- that the two manuscripts were copied by the same scribe.', tr:'---- iki el yazması aynı katip tarafından kopyalanmıştı.', tag:'yap', note:'that + tam cümle (SVO) → noun clause: şıkta özne + fiil (SV) dizilimi ara.'},
  {en:'Having surveyed the damage from the air, ----', tr:'Hasarı havadan incelemiş olan ----', tag:'oztur', note:'Having V3 kısaltması: özne ortaklığı — incelemeyi YAPAN özneyi şıklarda ara.'},
  {en:'----, the floods would have submerged the old town entirely.', tr:'---- seller eski şehri tümüyle su altında bırakırdı.', tag:'onyargi', note:'would have + V3 → Type 3: if + had V3 ya da devrik "Had + özne + V3" beklenir; karışık biçimlere ön yargı.'},
  {en:'Because deep-sea creatures live without sunlight, ----', tr:'Derin deniz canlıları güneşsiz yaşadığından ----', tag:'anlam', note:'because = sebep: karanlığa uyum (ışık üretme, durgun metabolizma, basınç dayanımı) bekle.'},
  {en:'When the ice on the lake reaches a safe thickness, ----', tr:'Göldeki buz güvenli kalınlığa ulaştığında ----', tag:'zaman', note:'WHEN tablosu: boş kol have V / have been V-ing / are V-ing taşımaz — ilk tur eleme.'},
  {en:'----, while the others preferred to work in isolation.', tr:'---- oysa diğerleri yalnız çalışmayı yeğledi.', tag:'kiyas', note:'while + "the others" → karşıt grup: boşlukta "some X" gibi paralel bir özne bekle.'},
  {en:'Despite its fearsome reputation, ----', tr:'Korkunç ününe rağmen ----', tag:'gonderim', note:'its kökte adres bulamıyor: şıkta tekil ve kötü şöhretli bir özne ara (despite + isim kuralı da cabası).'},
  {en:'The archive will remain closed until every document ----', tr:'Arşiv, her belge ---- dek kapalı kalacak.', tag:'zaman', note:'until\u2019lü bağımlı cümlede will yasak: şimdiki ya da şimdiki-perfekt biçim gelir.'},
  {en:'Unless the population trend reverses within a decade, ----', tr:'Nüfus eğilimi on yıl içinde tersine dönmezse ----', tag:'kosul', note:'unless = if…not: tablo + olumsuz/olası sonuç beklentisi birlikte çalışır.'},
  {en:'----, the expedition would have reached the summit before the storm.', tr:'---- ekip fırtınadan önce zirveye ulaşmış olurdu.', tag:'onyargi', note:'would have → "Had + özne + V3" doğru biçimdir; if\u2019siz Had V3 ve "if + would have" ön yargı listesinde.'},
  {en:'---- where rare orchids bloom beneath the canopy.', tr:'---- nadir orkideler ağaç örtüsü altında açar.', tag:'yap', note:'where-clause YERİ niteler: şıkların SON ismi yer olmalı (vadi, koru, orman…).'},
  {en:'We have been trading with the same supplier for a decade ----', tr:'On yıldır aynı tedarikçiyle çalışıyoruz ----', tag:'oztur', note:'we ile açılan kökte you\u2019ya sıçrayan şıklara ön yargı: we/us hattını koruyan şık ara.'}
];

window.QUESTIONS = [
  {id:1, part:'A', cat:'kiyas',
   stem:'The option that best completes the end of the sentence is ----.',
   clue:'whereas = taban tabana kıyaslama: kökte "yüzyıla yakın süre" var; şıkta aynı ölçeğin ters yöne çekildiği PARALEL bir özne aranıyor.',
   facts:['Whereas the steam engine took nearly a century to transform daily life, ----'],
   opts:[
     ['industrial revolutions have always depended on a few key inventions','Genel doğru yargı: kıyas kurmuyor. whereas\u2019ın istediği "iki taraf, iki yön" bu cümlede yok.'],
     ['the steam engine was perfected by a series of British engineers','Kökün öznesini tekrar eder: whereas karşıt tarafı ister, aynı tarafın devamını değil.'],
     ['the smartphone reshaped global communication in barely a decade','DOĞRU. Buhar makinesi (yüzyıla yakın) ↔ akıllı telefon (on yıl): özne paralel, süre ters yönde — kıyaslama tam.'],
     ['daily life in the nineteenth century was harsh for most workers','Kıyas ölçüsü (dönüşüm hızı) yok; "harsh" yeni bir konu açar.'],
     ['technology has always moved faster than people anticipate','Genel bir gözlem: özgül kıyas ve paralel özne taşımıyor.']
   ],
   ans:2, ev:['s1-f0'],
   why:'whereas/while taban tabana kıyaslama kurar: bir özneyi verir, karşı özneyi sorar. Kökte "steam engine + yüzyıla yakın süre" var; C şıkkı "smartphone + on yıl" ile hem özneyi hem ölçüyü ters çevirir — kıyaslamanın tam tanımı.',
   strat:'Kıyaslama bağlacı görürseniz iki soru sorun: KİM kime karşı? HANGİ ölçü ters çevriliyor? Bu iki cevabı taşımayan şık, anlamca ne kadar güzel olursa olsun elenir.'},
  {id:2, part:'A', cat:'zaman',
   stem:'The option that best completes the end of the sentence is ----.',
   clue:'by the time bir ZAMAN bağlacıdır: önce kökün zamanını (past) belirleyin, sonra zaman uyumsuz şıkları eler — anlamdan ÖNCE.',
   facts:['By the time the fire brigade reached the mountain village, ----'],
   opts:[
     ['the wildfire will have destroyed most of the orchards','will have: kök geçmiş; gelecek-perfect eksenleri kırar.'],
     ['the residents had already been moved to a nearby school','DOĞRU. by the time + past → had already + V3: varış anından önce tamamlanmış tahliye.'],
     ['the village is famous for its stone architecture','Geniş zaman: kökün past anlatısıyla uyumsuz; ayrıca konu kayıyor.'],
     ['the brigade has been training for such emergencies','has been V-ing: by the time + past koluna bağlanmaz.'],
     ['the flames have already been brought under control','have V3: geçmiş referans noktası için had V3 gerekirdi.']
   ],
   ans:1, ev:['s2-f0'],
   why:'"By the time + past simple" ana cümlede past perfect ister: itfaiye vardığında tahliye ÇOKTAN tamamlanmıştı. A, C, D ve E dört farklı zaman hatasıyla kurulmuş; yalnız B kalıbın aynası.',
   strat:'Zaman bağlacı = önce zaman. Kökteki fiili daire içine alın, eleme tablosundan geçemeyen biçimleri ilk turda çizin; anlam değerlendirmesi ikinci tura kalsın.'},
  {id:3, part:'A', cat:'kiyas',
   stem:'The option that best completes the end of the sentence is ----.',
   clue:'although = teslim: "en yeni cihazlar" beklentisi kurar; şıkta bu beklentinin TERSİ gerçekleşmeli — still/yine sinyalini arayın.',
   facts:['Although the expedition was equipped with the latest satellite navigation, ----'],
   opts:[
     ['global positioning technology has transformed modern exploration','Genel doğru ama özne kaymış: seferin hikâyesi yok, kontrast da yok.'],
     ['the explorers documented hundreds of new species','Başarı hikâyesi: although\u2019un çelişkisini beslemiyor, destekliyor.'],
     ['satellite phones had failed on earlier expeditions','Geçmişe sapma: kökün öznesi bu sefer; "önceki seferler" kontrast kurmaz.'],
     ['the team still lost its way in the featureless ice field','DOĞRU. En yeni cihazlar + YİNE kaybolmak: still pekiştiricisi although\u2019un imzasıdır.'],
     ['the route had been surveyed in remarkable detail','Hazırlık ve detay: beklentiyi destekler, çürütmez.']
   ],
   ans:3, ev:['s3-f0'],
   why:'although beklenenin tersini işaret eder: en son teknolojiyle donatılmış bir ekip için beklenti "kaybolmaz" olurdu; D bu beklentiyi "hâlâ kayboldular" ile ters yüz eder. still sözcüğü teslim ilişkisinin klasik pekiştiricisidir.',
   strat:'Teslim kökünde şıkları "beklenti ters çevrildi mi?" süzgecinden geçirin; şık kökteki avantajı DESTEKLİYORSA (başarı, detay, teknoloji) elenir — çelişki istenir, teyit değil.'},
  {id:4, part:'A', cat:'kosul',
   stem:'The option that best completes the end of the sentence is ----.',
   clue:'IF eleme tablosu: boş kolonda have V, past, would ailesi yasak — ilk turda üç şık tabloyla düşer; kalan güvenli biçim modal ya da yalın geniş zamandır.',
   facts:['If the restoration work continues at its current pace, ----'],
   opts:[
     ['the palace has already reopened its eastern wing','have V3: koşulun sonuç kolunda sınamaya girmez — eleme tablosu ilk turda düşürür.'],
     ['the scaffolding was removed last month','Past: if + present köküne (Type 1) zaman uyumsuz.'],
     ['the courtyard can open to visitors by early spring','DOĞRU. can + geniş zaman: tablodan sağlam çıkan modal biçim; koşulun doğal sonucu.'],
     ['the architects have been monitoring the frescoes closely','have been V-ing: sonuç kolunda yasaklı biçim.'],
     ['tourists would have returned in greater numbers','would have: Type 3 karışımı — type takibi şıkkı düşürür.']
   ],
   ans:2, ev:['s4-f0'],
   why:'Kök Type 1\u2019dir (if + present). C, tablodan sağlam çıkan modal biçimi taşır; A ve D have V ailesiyle, B past ile, E type karışımıyla elenir. Tablo + type + anlam sırası izlendiğinde cevap kendini gösterir.',
   strat:'Koşul kökünde sırayı bozmayın: (1) IF tablosu → yasaklı biçimler düşer; (2) type takibi → karışık type düşer; (3) anlam. Kalan aday zaten cevaptır.'},
  {id:5, part:'A', cat:'zaman',
   stem:'The option that best completes the end of the sentence is ----.',
   clue:'WHEN tablosu: boş kolonda have/has V3, have/has been V-ing, am/is/are V-ing ve would sınamaya girmez — dört şık tabloyla düşer.',
   facts:['When a shipping container is swept overboard in a storm, ----'],
   opts:[
     ['ocean currents have carried its cargo to distant shores','have V3: WHEN\u2019ın boş kolunda yasaklı biçim.'],
     ['its contents can drift for decades before washing ashore','DOĞRU. Modal (can): when + present kökünün boş kolundaki güvenli biçim.'],
     ['scientists are still mapping the garbage patches of the Pacific','am/is/are V-ing: tablonun yasaklı biçimi; konu da kayıyor.'],
     ['the crew has been tracking floating debris for years','have been V-ing: tabloda yasak.'],
     ['the toys would dissolve in seawater within weeks','would: koşul kipi; when ile kurulmaz.']
   ],
   ans:1, ev:['s5-f0'],
   why:'WHEN tablosu bu sorunun çözümüdür: A (have V3), C (are V-ing), D (have been V-ing) ve E (would) tabloyla ilk turda düşer; when + present kökünün boş kolundaki güvenli biçim modal (can) taşıyan B\u2019dir.',
   strat:'WHEN\u2019lı soruda önce tablo, sonra anlam: tablo dört şıkkı mekanik olarak eler. Modal (can/must) ve yalın geniş zaman, bu tabloda her zaman güvenli limandır.'},
  {id:6, part:'A', cat:'kosul',
   stem:'The option that best completes the end of the sentence is ----.',
   clue:'so that + kip kilidi: geçmiş ana fiil (kept) → boşlukta could/might beklenir.',
   facts:['The editor kept the manuscript in a locked drawer so that ----'],
   opts:[
     ['no rival publisher could see the chapters before publication','DOĞRU. so that + could: geçmiş ana fiille uyumlu amaç cümlesi.'],
     ['the author has revised the ending twice','have V3: kip uyumsuz — kept geçmişine perfect taşınmaz.'],
     ['the pages will be sent to the printer tomorrow','will: so that + will yalnız şimdiki-gelecek kökte yaşar; kept ile çelişir.'],
     ['the drawer was made of reinforced steel','Çekmece detayı: amaç ilişkisi kurmuyor, ilgisiz bilgi veriyor.'],
     ['the novel later became an instant classic','Sonuç anlatıyor: so that amaç ister, gerçekleşmiş sonuç değil.']
   ],
   ans:0, ev:['s6-f0'],
   why:'Amaç bağlacının kipi ana fiile kilitlenir: kept (geçmiş) → so that + could/might. A bu kilidi taşır; B ve C kip uyumsuz, D amaçsız detay, E sonuç-amaca ilişkin.',
   strat:'so that görürseniz ana fiilin zamanına bakın: geçmiş → could/might; şimdiki-gelecek → can/will. Kip uyumu, amaç sorularının en hızlı eleme süzgecidir.'},
  {id:7, part:'A', cat:'kosul',
   stem:'The option that best completes the end of the sentence is ----.',
   clue:'unless = if…not: tablo + yön denetimi birlikte çalışır — olumsuz koşulun sonucu olumsuz/olası yönde olur.',
   facts:['Unless the rains return before the end of the month, ----'],
   opts:[
     ['the city has enjoyed several wet winters in a row','have V3: unless/if sonuç kolunda yasak.'],
     ['farmers were already digging deeper wells','Past: Type 1 ile uyumsuz; ayrıca kuyu kazma koşulun sonucu değil tepkisi.'],
     ['water restrictions would have been lifted last week','would have: type hatası — unless + present will/modal bekler.'],
     ['the dam has been supplying the entire region','have been V-ing: tabloda yasaklı biçim.'],
     ['the reservoir could fall below the critical level within weeks','DOĞRU. could: Type 1\u2019in güvenli olasılık modalı; yağmama koşulunun doğal sonucu.']
   ],
   ans:4, ev:['s7-f0'],
   why:'unless\u2019in formülü: if not + present → olasılık içeren olumsuz sonuç. E hem tabloya uyar (could) hem koşulun sonucunu taşır; A ve D have V ailesiyle, B past ile, C type karışımıyla düşer.',
   strat:'unless\u2019te iki filtre: (1) tablo — yasaklı biçimler; (2) yön — olumsuz koşul → olumsuz/olası sonuç. "Kısıtlama kalktı" gibi olumlu-kesin sonuçlar hem tabloyu hem yönü bozar.'},
  {id:8, part:'A', cat:'zaman',
   stem:'The option that best completes the end of the sentence is ----.',
   clue:'Gelecek ana cümle + until: bağımlı cümlede will YASAK; şimdiki ya da şimdiki-perfekt biçim gelir.',
   facts:['The conservation team will not begin restoring the frescoes until ----'],
   opts:[
     ['the humidity in the chapel has been brought under control','DOĞRU. will not … until + has been V3: tamamlanma, present perfect ile.'],
     ['the scaffolding will be delivered by the contractors','will: bağımlı cümleye giremez — zaman bağlacının ilk kuralı.'],
     ['the tourists were charged higher admission fees','Past: gelecek ana cümleyle eksen uyumsuz.'],
     ['the chapel has appeared in several travel documentaries','Biçim doğru (has V3) ama belgesiye bağlanan restorasyon saçmadır: anlam sapması.'],
     ['the restorers had finished their preliminary reports','had V3: past perfect, gelecek beklentisiyle uyumsuz.']
   ],
   ans:0, ev:['s8-f0'],
   why:'"will not … until + present perfect" kalıbı: restorasyon, nem KONTROL ALTINA ALINANA dek başlamayacak. B will\u2019i bağımlı cümleye sokar, C ve E eksen kırar; D biçimi doğru ama mantığı kopuk bir tuzaktır.',
   strat:'until\u2019li sorularda iki filtre sırayla: (1) will bağımlı cümlede yasak; (2) biçim doğru kalan şıklarda anlam denetimi — "X\u2019e kadar yapılmayacak" derseniz X\u2019in mantıksal ön koşul olması gerekir.'},
  {id:9, part:'A', cat:'gonderim',
   stem:'The option that best completes the beginning of the sentence is ----.',
   clue:'that + TAM CÜMLE (SVO) → noun clause: boşlukta ÖZNE + FİİL (SV) dizilimi aranır; tam cümleler ve isim öbekleri elenir.',
   facts:['---- that the two manuscripts were copied by the same scribe.'],
   opts:[
     ['The remarkable similarity between the two handwritings','İsim öbeği: fiil yok — that\u2019tan önce SV dizilimi kurulamaz.'],
     ['Linguists have long debated the origins of the alphabet','Tam cümle: son isme yapıştırılan that kırık bir niteleme üretir.'],
     ['The older manuscript contains several illuminated pages','Tam cümle: "pages that the manuscripts were copied…" dizilimi çözülür.'],
     ['The almost identical errors in both texts strongly suggest','DOĞRU. Özne + fiil: "errors … suggest that…" — isim cümleciğinin taşıyıcısı.'],
     ['Medieval scribes worked under candlelight','Tam cümle: "candlelight that…" nitelemesi anlam üretmez.']
   ],
   ans:3, ev:['s9-f0'],
   why:'that\u2019ten sonra tam cümle (S-V-O) geliyor: bu bir noun clause\u2019tur ve kök cümlenin NESNESİDİR. Nesne kökte verildiğine göre seçeneklerde özne + fiil eksikliği aranır; yalnızca D (errors … suggest) bu SV dizilimini taşır.',
   strat:'that\u2019li kökte önce teşhis: that + SVO → noun clause (şıkta SV ara); that + SV/VO → relative clause (şıkta tam cümle ara). Tek satırlık bu ayrım, soru tipinin tamamını çözer.'},
  {id:10, part:'A', cat:'gonderim',
   stem:'The option that best completes the beginning of the sentence is ----.',
   clue:'where-clause bir YERİ niteler: şıkların SONUNDAKİ isme bakın — yer anlamı taşıyan hangisi?',
   facts:['----, where patients can consult specialists without travelling to the capital.'],
   opts:[
     ['The ministry has announced stricter licensing regulations','Son isim "regulations": yer değil; yönetmeliklerde hastalar gezmez.'],
     ['The regional hospital has opened a new telemedicine wing','DOĞRU. Son isim "wing" (birim): tele-tıp kanadı = uzaktan danışılan YER.'],
     ['Rural communities face a chronic shortage of nursing staff','Son isim "staff": insan; "personelin içinde danışılıyor" kurulamaz.'],
     ['Health spending has risen sharply over the past decade','Son isim "decade": zaman — where\u2019ın nitelemesine adres olmaz.'],
     ['Medical students now complete part of their training online','Son sözcük "online": ortam bildirir ama isim değildir; where-clause adresi vermez.']
   ],
   ans:1, ev:['s10-f0'],
   why:'where\u2019lı kök, şıkkın SON isminin YER olmasını ister. "Telemedicine wing" hastaların uzaktan uzmanlara danıştığı yerdir; regulations, staff, decade ve online bu adresi vermez.',
   strat:'where görürseniz şıklardaki SON isimlerin altını çizin ve yanına "yer mi?" yazın. İnsan (staff), soyut (regulations) ve zaman (decade) isimleri ilk turda düşer; kalan yer adayları arasında anlam turu yapılır.'},
  {id:11, part:'A', cat:'yapi',
   stem:'The option that best completes the end of the sentence is ----.',
   clue:'V3 ile açılan kök = adverbial kısaltma: şıktaki ÖZNE "kurulmuş/built" olabilecek şey olmalı — özne ortaklığı kısaltmanın ön şartıdır.',
   facts:['Built to resist earthquakes that never came, ----'],
   opts:[
     ['the engineer who designed it won several national awards','Özne: mühendis. "Depreme dayanacak şekilde KURULAN" mühendis değil kule; özne uyumsuz.'],
     ['the city\u2019s construction standards were revised twice','Özne: standartlar. Standartlar inşa edilmez, yazılır.'],
     ['an earthquake of similar magnitude struck the neighbouring town','Özne: deprem. Deprem "kurulmuş" olamaz; özne ortaklığı yok.'],
     ['its steel framework requires constant repainting','"its" havada: kökte henüz tekil bir isim yok — gönderim kopuk.'],
     ['the tower has never needed a single structural repair','DOĞRU. Özne: kule. "Depreme dayanacak şekilde inşa edilen kule" — kısaltmanın faili ile şıkkın öznesi aynı.']
   ],
   ans:4, ev:['s11-f0'],
   why:'Kısaltmanın kuralı: iki cümlenin öznesi AYNI olmalı. "Built to resist earthquakes" kısaltmasını yalnızca inşa edilen bir YAPI yapabilir: kule. Mühendis tasarlar, standartlar yazılır, deprem vurur — kurulamazlar.',
   strat:'V3/Having V3 ile açılan kökte ilk iş şıklardaki özneleri altını çizmektir. Her özneye "bu kısaltmayı yapabilir mi?" sorun; yapamayan — insan, soyut kavram, olay — anında elenir.'},
  {id:12, part:'A', cat:'yapi',
   stem:'The option that best completes the end of the sentence is ----.',
   clue:'Having V3 kısaltması: özne, "üç yaz kazı yapmış" biri/birleri olmalı — özne ortaklığı yine ilk süzgeç.',
   facts:['Having spent three summers excavating the mound, ----'],
   opts:[
     ['the archaeologists finally published their complete findings','DOĞRU. Kazıyı YAPAN arkeologlar; kısaltma ile şık öznesi aynı.'],
     ['the site revealed a temple older than anyone had predicted','Özne: alan (site). Alan yaz geçirmez, kazı yapamaz.'],
     ['the temple\u2019s walls were covered in mysterious carvings','Özne: duvarlar. Duvarlar kazı yapamaz.'],
     ['the local museum now displays every recovered item','Özne: müze. Müze yazları sahada geçirmez.'],
     ['the government declared the area a protected zone','Özne: hükümet. Kazıyı hükümet yapmadı; eylem sahibi farklı.']
   ],
   ans:0, ev:['s12-f0'],
   why:'"Having spent three summers excavating" eylemini yalnızca kazı ekibi yapmıştır: arkeologlar kısaltmanın failiyle örtüşür. B, C, D ve E dört farklı özne taşır — özne ortaklığı kırılır, cümle dilbilgisel olarak çöker.',
   strat:'Having V3 = tamamlanmış eylem + özne ortaklığı. Şıklardaki özneleri listelin ve "yazları kazı yapan kim?" sorun; fail ile örtüşmeyen her şık, anlamı en güzel kuran şık olsa bile düşer.'},
  {id:13, part:'B', cat:'anlam',
   stem:'The option that best completes the end of the sentence is ----.',
   clue:'Tip 2: bağlaçlar şıklarda. Kök "neden kasa?" sorusunu açıyor — sebep ilişkisi kuran bağlacı arayın.',
   facts:['The library keeps its rare manuscripts in a climate-controlled vault, ----'],
   opts:[
     ['so that scholars can consult them without special permission','so that amaç: kasada tutmak + İZİNSİZ inceleme çelişir — amaç yönü ters.'],
     ['although the vault was installed only two years ago','although kontrast: kurulum yaşı kasada tutma gerekçesiyle ilgisiz.'],
     ['and the reading rooms are open to the public on weekdays','and ekleme: kurulur ama "neden" sorusuna cevap vermez; sebep bekleniyor.'],
     ['yet some of the collection remains uncatalogued','yet kontrastı alakasız: katalog eksikliği kasa gerekçesi değil.'],
     ['because fluctuations in humidity would slowly destroy the fragile paper','DOĞRU. because: nem dalgalanmaları kağıdı yavaşça yok eder → kasanın gerekçesi.']
   ],
   ans:4, ev:['s13-f0'],
   why:'Kök cümle bir uygulama (kasada tutma) bildirir ve boşluk onun GEREKÇESİNİ ister: because. E, "nem ↔ hassas kağıt" zincirini kurar; A\u2019nın amacı kasayla çelişir, B ve D kontrastı ilgisiz yöne çeker, C sadece ekler.',
   strat:'Tip 2\u2019de kökü okuyup tek kelimelik beklenti yazın: sebep mi, amaç mı, kontrast mı? Sonra beş bağlacı bu beklentiyle eşleştirin — beklentiyi karşılayan tek şık kalır.'},
  {id:14, part:'B', cat:'anlam',
   stem:'The option that best completes the beginning of the sentence is ----.',
   clue:'Kök bir üstünlük bildiriyor: "en ince kahvenin üçte biri" — bunun gerekçesi olan şık aranıyor.',
   facts:['----, the region produces almost a third of the world\u2019s finest coffee.'],
   opts:[
     ['Although Brazil has historically dominated coffee exports','although: Brezilya\u2019nın geçmişi bölgenin üstünlüğünü açıklamaz, kontrast da kurmaz.'],
     ['Because the high plateaus of Colombia combine altitude with volcanic soil','DOĞRU. because: rakım + volkanik toprak → en ince kahve; sebep-sonuç tam.'],
     ['While consumption continues to rise across Asia','while: tüketim artışı üretim gerekçesi değil; konu kayıyor.'],
     ['If the harvest fails for a second consecutive year','if: koşul — üstünlüğe koşul bağlanmaz, sonuç bağlanır.'],
     ['Until international prices stabilize next season','until: zaman; "fiyatlar stabilize olana dek üretiyor" kurulmuyor.']
   ],
   ans:1, ev:['s14-f0'],
   why:'Kökteki "the world\u2019s finest coffee" bir kalite iddiasıdır ve doğal gerekçesi toprak/rakım ikilisidir: B. Diğer dört bağlaç iddia ile arasında SEBEP ilişkisi kuramaz — Tip 2\u2019nin klasik "anlamlı ama ilişkisiz" çeldiricileri.',
   strat:'Tip 2\u2019de her şıkkı SÖZLE test edin: "X olduğundan, bölge en ince kahveyi üretiyor" dediğinizde cümle mantıklı mı? Bağlaç sözcük olarak uygun görünse de ilişki kurulamıyorsa şık düşer.'},
  {id:15, part:'B', cat:'kiyas',
   stem:'The option that best completes the beginning of the sentence is ----.',
   clue:'Kök "hâlâ bilinmiyor" diyor: buna RAĞMEN türü bir kontrast bekleniyor — uzun çabalara karşın gizem sürüyor olmalı.',
   facts:['----, the precise mechanism by which birds navigate across oceans remains a mystery.'],
   opts:[
     ['Because migrating birds cross entire oceans without resting','because: kuşların uçması mekanizmanın bilinmezliğini açıklamaz — sebep ters.'],
     ['If pigeons can find their way home from hundreds of kilometres away','if: koşul; "bilinmiyor" yargısına koşul bağlanmıyor.'],
     ['Since satellites now follow every major migration route','since: izleme artarsa bilinmezlik azalır — sebep yönü ters.'],
     ['So the research team implanted tiny tracking devices in fledglings','so: sonuç; cihaz takıldıysa bilinmezlik azalır, artmaz — çelişir.'],
     ['Although biologists have tracked migratory routes with satellites for decades','DOĞRU. although: onlarca yıllık uydu takibine RAĞMEN mekanizma gizem — kontrast tam.']
   ],
   ans:4, ev:['s15-f0'],
   why:'Kökteki "remains a mystery" bir BİLGİSİZLİK iddiasıdır; onunla çelişecek güçte bir bilgi çabası gerekir: E\u2019deki "onlarca yıllık uydu takibi". C ve D bu çabayı içerir ama since/so ile bilinmezliği azaltacak yönde bağlarlar — yön ters; E although ile istenen çelişkiyi kurar.',
   strat:'Tip 2\u2019de yön tutarlılığını çift yönlü denetleyin: şık güçlü bir çaba bildiriyorsa ve kök bilinmezlik bildiriyorsa araya although/even though girer; because/so/since girerse çaba bilinmezliği azaltır — cümle kendini yalar.'},
  {id:16, part:'B', cat:'anlam',
   stem:'The option that best completes the beginning of the sentence is ----.',
   clue:'Noktalı virgül + therefore: boşluk, iptalin NEDENİ olan bir öncül olmalı — olumsuz sonuca uygun olumsuz bir durum.',
   facts:['----; therefore, the airline cancelled all flights to the region.'],
   opts:[
     ['The airport authorities had invested in new landing systems','Yatırım: olumlu bir gelişme; iptalin gerekçesi olamaz — duygu yönü ters.'],
     ['Passengers stranded by the delays were offered hotel accommodation','Konaklama iptalin SONUCUDUR; öncül olamaz — therefore zinciri ters döner.'],
     ['If the wind changes direction before dawn','if: koşul; therefore\u2019ın öncülü olgu cümlesidir, koşul değil.'],
     ['A thick cloud of volcanic ash was drifting towards the airport','DOĞRU. Kül bulutu → uçuş iptali: therefore\u2019ın doğal öncülü.'],
     ['Until the aviation authorities lift the travel advisory','until: zaman; öncül-sonuç zincirine zaman bağlacı sığmaz.']
   ],
   ans:3, ev:['s16-f0'],
   why:'"; therefore, X" kalıbı öncül → sonuç zinciri kurar: X\u2019in mantıklı nedeni boşluğa gelir. Uçuş iptalinin klasik nedeni D\u2019deki kül bulutudur; B sonuç ile öncülü ters dizer, A yön bildirmez, C koşul ve E zamanla zinciri kırar.',
   strat:'therefore görürseniz kökteki sonucu yazın ve "bunu ne tetikler?" sorun. Öncül adayı olumluysa (yatırım, tazminat) ve sonuç olumsuzsa şık elenir; neden ve sonuç AYNI duygu yönünde olmalıdır.'},
  {id:17, part:'B', cat:'zaman',
   stem:'The option that best completes the beginning of the sentence is ----.',
   clue:'Ana cümlede "had already": by the time + past bekleniyor — zaman uyumu ilk süzgeç.',
   facts:['----, the orchestra had already begun the second movement.'],
   opts:[
     ['When the conductor raises his baton','present (raises): had already ile eksen uyumsuz.'],
     ['While the audience is still applauding','present continuous: geçmiş past perfect\u2019e bağlanmaz.'],
     ['By the time the latecomers slipped into their seats','DOĞRU. by the time + past → had already + V3: geç kalanlar otururken orkestra ikinci bölümde.'],
     ['As soon as the tickets are sold out','present (are sold): zaman uyumsuz; ayrıca bilet satışı konu dışı.'],
     ['Until the house lights have dimmed','present perfect: had already\u2019ye bağlanamaz; until\u2019ın süredurumu da öncelik bildirmez.']
   ],
   ans:2, ev:['s17-f0'],
   why:'"had already begun" bir ÖNCELİK anlatır ve referans noktası ister: by the time + past. C bu kalıbı taşır; A, B, D ve E şimdiki biçimlerle geçmiş eksenine bağlanamaz — zaman uyumu, anlamdan önce karar verir.',
   strat:'Ana cümlede had already görürseniz boşluğa "ne zamana göre önce?" sorun: cevap by the time\u2019dır. Şıklardaki şimdiki biçimler (raises / is applauding / are sold / have dimmed) tek turda düşer.'},
  {id:18, part:'B', cat:'gonderim',
   stem:'The option that best completes the beginning of the sentence is ----.',
   clue:'Çifte ipucu: "it still" → kontrast + its → tekil gök cismi. Şık hem although ilişkisi kurmalı hem its\u2019in adresini vermeli.',
   facts:['----, it still takes its light more than eight minutes to reach the Earth.'],
   opts:[
     ['Although the sun is the nearest star to our planet','DOĞRU. EN YAKIN yıldız + YİNE sekiz dakika: kontrast tam; its = the sun\u2019s.'],
     ['Because the sun converts hydrogen into helium at enormous rates','because: dönüşüm hızı ışığın varış süresini açıklamaz — sebep yönü kurulmuyor.'],
     ['If astronomers can measure the distance to nearby stars accurately','if: koşul; "ölçebilirse… yine sekiz dakika sürüyor" bağlanmıyor; its adresi de yok.'],
     ['While other stars appear only as faint points in the night sky','while: öteki yıldızlar — its\u2019in adresi kaybolur; özne kıyası kurulamaz.'],
     ['Because light travels faster than anything else in the universe','because: "ışık en hızlı olduğundan yine sekiz dakika sürüyor" — hız, süreyi açıklamaz.']
   ],
   ans:0, ev:['s18-f0'],
   why:'Kökteki "it still takes" iki beklenti birden kurar: (1) still → kontrast (although); (2) its → tekil gök cismi. A\u2019daki "the sun is the NEAREST star" hem çelişkiyi ("en yakın ama yine sekiz dakika") hem gönderimi (its = güneşin) karşılar.',
   strat:'Çok ipuçlu köklerde ipuçlarını listeyin: still (kontrast), it/its (tekil adres), light (gök cismi). Beş şıktan bu üçünü birden karşılayan tek aday genelde cevaptır — çeldiriciler yalnız birini karşılar.'},
  {id:19, part:'B', cat:'yapi',
   stem:'The option that best completes the end of the sentence is ----.',
   clue:'Kök "we" ile konuşuyor: şıklarda you\u2019ya sıçrayanlar ön yargıyla yaklaşılır — we/us hattını koruyan kontrast aranıyor.',
   facts:['We have known for decades that regular exercise protects the heart, ----'],
   opts:[
     ['and that is why you must join a gym immediately','we → you sıçraması: onlarca yıllık bilgi + "SEN spor salonuna yazıl" — özne hattı kopuyor.'],
     ['so you really ought to take better care of yourselves','we → you: aynı sıçrama; öneri yönü de kişiselleşiyor.'],
     ['yet most of us still spend our evenings in front of the television','DOĞRU. we → us hattı korunuyor; yet + still ile "biliyoruz ama yapmıyoruz" kontrastı kuruluyor.'],
     ['but you have probably never exercised properly in your life','we → you: sıçrama + suçlayıcı ton; kökün nesnel anlatısıyla üslup uyumsuz.'],
     ['and your doctor will confirm this at your next check-up','we → you: sıçrama; "your doctor" üçüncü bir muhatabı devreye sokuyor.']
   ],
   ans:2, ev:['s19-f0'],
   why:'Zamir özneler mantıksız sıçrama yaparsa şık ön yargıyla yaklaşılır. A, B, D ve E\u2019nin dördü de "we"den "you"a atlar; yalnız C "most of us / our evenings" ile özne hattını korur ve "yet … still" ile doğal kontrastı kurar.',
   strat:'Kök we/you/I ile açılmışsa şıklardaki özneleri işaretleyin: hattı koruyan şıklara artı, sıçrayanlara soru işareti koyun. Sıçrama "insanlar genelinde" gibi bir gerekçeyse kabul edilebilir — burada değil.'},
  {id:20, part:'B', cat:'yapi',
   stem:'The option that best completes the beginning of the sentence is ----.',
   clue:'Sonuç kolunda would have + V3 → Type 3: if kolunda past perfect ya da devrik "Had + özne + V3" aranır; ön yargı listesi de devrede.',
   facts:['----, the city would have preserved its medieval skyline.'],
   opts:[
     ['If the council rejects the tower proposals','if + present: would have ile type karışımı — eşleşme tablo dışı.'],
     ['The council had rejected the tower proposals','Had V3 var, bağlaç yok: "had rejected, would have preserved" dizilimi if\u2019siz kurulamaz — fragment. Ön yargı kuralı: Had V2 daima if/devrik yapı ve would ile BERABER gelir.'],
     ['If the council would have rejected the tower proposals','if + would have: 3. koşulun en klasik yasak biçimi.'],
     ['Had the council rejected the tower proposals','DOĞRU. Devrik Type 3: Had + özne + V3 → would have + V3; iki kol da tamam.'],
     ['Unless the council approves the tower proposals','unless + present → will/modal bekler; would have ile type uyumsuz.']
   ],
   ans:3, ev:['s20-f0'],
   why:'"would have preserved" Type 3\u2019ün sonuç koludur; if kolunda "If the council HAD rejected" ya da devrik biçimi "HAD the council rejected" gerekir. D devrik yapının ta kendisidir; A ve E type karıştırır, C if\u2019e would have sokar, B ise Had V3\u2019ü bağlaçsız bırakıp fragment üretir.',
   strat:'would have V3 görünce deklanşör: (1) if + would have ✗; (2) bağımsız Had V3 gördüğünüzde ön yargıyla yaklaşın — daima if/devrik + would ile beraber gelir; (3) devrik "Had + özne + (not) + V3" biçimi doğru cevabın en zarif kılıfıdır.'}
];

window.__VERI_OK = 1;
/* VERI-SONU: Bu satırı görüyorsanız veri.js tamamdır. */
