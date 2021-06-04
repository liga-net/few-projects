if(document.createStyleSheet) {
    document.createStyleSheet('https://www.liga.net/files/general/few_projects/health.css');
   }
   else {
    var styles = "@import url('https://www.liga.net/files/general/few_projects/health.css');";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
   }
   var nodes_data = {
    "children": [
{"Name":"043 Ішемічна хвороба серця","Count":269753},
{"Name":"046 Цереброваскулярні хвороби","Count":76906},
{"Name":"047 Інші хвороби системи кровообігу","Count":20800},
{"Name":"045 Інші хвороби серця","Count":20668},
{"Name":"079 Інші невідомі та не уточнені причини смерті","Count":14903},
{"Name":"057 Інші хвороби печінки","Count":13715},
{"Name":"014 Злоякісні новоутворення трахеї, бронхів та легенів","Count":11937},
{"Name":"010 Злоякісні новоутворення ободової кишки, прямої кишки та відхідникового каналу","Count":10906},
{"Name":"077 Старість","Count":10135},
{"Name":"026 Інші злоякісні новоутворення","Count":10000},
{"Name":"089 Інші зовнішні причини смерті","Count":9504},
{"Name":"016 Злоякісні новоутворення молочної залози","Count":6768},
{"Name":"058 Інші хвороби органів травлення","Count":6712},
{"Name":"009 Злоякісні новоутворення шлунка","Count":6674},
{"Name":"087 Навмисне самоушкодження","Count":6279},
{"Name":"050 Пневмонія","Count":6101},
{"Name":"052 Хронічні хвороби нижніх дихальних шляхів","Count":5588},
{"Name":"012 Злоякісні новоутворення підшлункової залози","Count":4609},
{"Name":"039 Інші хвороби нервової системи","Count":4066},
{"Name":"004 Хвороба, спричинена вірусом імунодефіциту людини (ВІЛ)","Count":3949},
{"Name":"081 Транспортні нещасні випадки","Count":3936},
{"Name":"044 Алкогольна кардіоміопатія","Count":3933},
{"Name":"020 Злоякісні новоутворення передміхурової залози","Count":3844},
{"Name":"007 Злоякісні новоутворення губи, ротової порожнини та глотки","Count":3618},
{"Name":"085 Випадкове отруєння та дія алкоголю","Count":3089},
{"Name":"005 Інші інфекційні та паразитарні хвороби","Count":2841},
{"Name":"061 Клас XIV Хвороби сечостатевої системи","Count":2534},
{"Name":"003 Туберкульоз органів дихання","Count":2174},
{"Name":"056 Алкогольна хвороба печінки","Count":2133},
{"Name":"019 Злоякісні новоутворення яєчника","Count":2126},
{"Name":"025 Лейкоз","Count":2113},
{"Name":"018 Злоякісні новоутворення інших та неуточнених частин матки","Count":2060},
{"Name":"030 Цукровий діабет","Count":2014},
{"Name":"021 Злоякісні новоутворення сечового міхура","Count":1969},
{"Name":"082 Падіння","Count":1949},
{"Name":"055 Виразка шлунка та дванадцятипалої кишки","Count":1929},
{"Name":"022 Злоякісні новоутворення оболон мозку, головного мозку та інших частин центральної нервової системи","Count":1903},
{"Name":"017 Злоякісні новоутворення шийки матки","Count":1863},
{"Name":"011 Злоякісні новоутворення печінки та внутрішньо-печінкових жовчних проток","Count":1742},
{"Name":"083 Утоплення та занурення у воду","Count":1655},
{"Name":"088 Наслідки нападу з метою убивства чи нанесення ушкодження","Count":1638},
{"Name":"086 Випадкове отруєння, спричинене іншими отруйними речовинами","Count":1585},
{"Name":"008 Злоякісні новоутворення стравоходу","Count":1525},
{"Name":"013 Злоякісні новоутворення гортані","Count":1298},
{"Name":"053 Інші хвороби системи дихання","Count":1285},
{"Name":"084 Нещасні випадки, спричинені дією диму, вогню та полум`я","Count":1270},
{"Name":"023 Неходжкінська лімфома","Count":1160},
{"Name":"015 Злоякісні меланома шкіри","Count":1132},
{"Name":"000 Інше","Count":7155}]
};
var translate = [{"name":"Odessa", "tr": "Одесская"},
            {"name":"Kherson", "tr": "Херсонская"},
            {"name":"Kiev City", "tr": "Киев"},
            {"name":"Zhytomyr", "tr": "Житомирская"},
            {"name":"Sumy", "tr": "Сумская"},
            {"name":"Donets'k", "tr": "Донецкая"},
            {"name":"Dnipropetrovs'k", "tr": "Днепропетровская"},
            {"name":"Kharkiv", "tr": "Харьковская"},
            {"name":"Luhans'k", "tr": "Луганская"},
            {"name":"Poltava", "tr": "Полтавская"},
            {"name":"Zaporizhzhya", "tr": "Запорожская"},
            {"name":"Sevastopol", "tr": "Севастополь"},
            {"name":"Crimea", "tr": "Крым"},
            {"name":"Chernihiv", "tr": "Черниговская"},
            {"name":"Rivne", "tr": "Ровненская"},
            {"name":"Chernivtsi", "tr": "Черновицкая"},
            {"name":"Ivano-Frankivs'k", "tr": "Ивано-Франковская"},
            {"name":"Khmel'nyts'kyy", "tr": "Хмельницкая"},
            {"name":"L'viv", "tr": "Львовская"},
            {"name":"Ternopil'", "tr": "Тернопольская"},
            {"name":"Transcarpathia", "tr": "Закарпатье"},
            {"name":"Volyn", "tr": "Волынь"},
            {"name":"Cherkasy", "tr": "Черкасская"},
            {"name":"Kirovohrad", "tr": "Кировоградская"},
            {"name":"Kiev", "tr": "Киевская"},
            {"name":"Mykolayiv", "tr": "Николаевская"},
            {"name":"Vinnytsya", "tr": "Винницкая"}];
const data = [
    {"id":"map_mortality_ukraine","title":"Количество умерших по областям, 2018", "subtitle":"Данные: Госстат","data":
    [["ua-vi", 24341],["ua-vo", 13710],["ua-dp", 52336],["ua-dt", 40174],["ua-zt", 20227],["ua-zk", 15320],["ua-zp", 27871],["ua-if", 17449],["ua-kv", 28722],["ua-kh", 15484],["ua-kr", null],["ua-lh", 15991],["ua-lv", 32726],["ua-kc", 32231],["ua-mk", 17156],["ua-my", 33607],["ua-pl", 23659],["ua-rv", 14528],["ua-sc", null],["ua-sm", 17877],["ua-tp", 15013],["ua-kk", 42600],["ua-ks", 16163],["ua-km", 19736],["ua-ck", 20181],["ua-cv", 11259],["ua-ch", 19304]]},
    {"id":"bar_vaccines","title":"Процент выполненных прививок по плану Минздрава", "subtitle":"Данные: Минздрав","categories":['Корь-1 в 1 год','Корь-2 в 6 лет','Дифтерия (АДП-м) в 16 лет','Туберкулез (БЦЖ-1)','Дифтерия (АДП-м) взрослым','Полиомиелит-6 в 14 лет','Дифтерия (АКДП-3) до года','Полиомиелит-5 в 6 лет','Дифтерия (АКДП-4) в 18 мес','Hib-3 в 1 год','Полиомиелит-4 в 18 мес.','Полиомиелит-3 до года','Гепатит В3 до года','Hib-2 до года','Дифтерия (АДП) в 6 лет','Туберкулез (БЦЖ-2) в 7 лет'],"data":[93,92,91,89,83,81,81,80,80,80,79,78,77,76,73,0]},
    {"id":"bar_slozh","title":"Увеличение сложности случаев пролеченных больных в стационарных условиях, %", "subtitle":"Данные: Минздрав","categories":['городской','областной','районный','Полтавская область'],"data":[55.3,29.4,6.1,30]},
    {"id":"bar_infection","title":"Какими инфекциями болеют украинцы, 2019", "subtitle":"Данные: Минздрав","categories":["ОРВИ", "Острые кишечные инфекции", "Корь", "Вирусный гепатит", "Грипп", "Педикулез и фтириоз", "Сальмонелиоз", "Чесотка", "Инфекционный мононуклеоз", "Болезнь Лайма", "Гонококковая инфекция", "Коклюш", "Сифилис", "Другое"],"data":[6029148, 86883, 57282, 32933, 15895, 12169, 8588, 6396, 5467, 4482, 3168, 2314, 2280, 1579]},
    {"id":"line_lifeexp","title":"Средняя продолжительность жизни в Украине", "subtitle":"Данные: Мировой банк","categories":['1991','1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017','2018'],"data":[{name: "Средняя продолжительность жизни в Украине",showInLegend: false,color: '#e90c29',data: [69.3,68.8,68.1,67.5,66.7,67,67.6,68.4,68,67.7,67.8,68.3,68.2,68.2,68,68.1,68.2,68.3,69.2,70.3,70.8,70.9,71.2,71.2,71.2,71.5,71.8,71.6]}]},
    {"id":"line_lifeexp_nei","title":"Средняя продолжительность жизни в соседних к Украине странам", "subtitle":"Данные: Мировой банк","categories":['1991','1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017','2018'],"data":
[{name: "Украина",showInLegend: false,data: [69.3,68.8,68.1,67.5,66.7,67,67.6,68.4,68,67.7,67.8,68.3,68.2,68.2,68,68.1,68.2,68.3,69.2,70.3,70.8,70.9,71.2,71.2,71.2,71.5,71.8,71.6]},
{name: "Россия",showInLegend: false,data: [68.47, 66.87, 64.94, 64.47, 64.69, 65.85, 66.7, 67.03, 65.98, 65.48, 65.38, 65.13, 65.05, 65.47, 65.53, 66.73, 67.59, 67.95, 68.68, 68.84, 69.68, 70.07, 70.58, 70.74, 71.18, 71.65, 72.43, 72.66]},
{name: "Беларусь",showInLegend: false,data: [70.38, 70.02, 68.97, 68.77, 68.46, 68.51, 68.46, 68.41, 67.91, 68.91, 68.51, 68.06, 68.55, 68.96, 68.85, 69.4, 70.21, 70.46, 70.41, 70.4, 70.55, 71.97, 72.47, 72.97, 73.62, 73.83, 74.13, 74.18]},
{name: "Венгрия",showInLegend: false,data: [69.38, 69.12, 69.1, 69.47, 69.79, 70.33, 70.7, 70.56, 70.68, 71.25, 72.25, 72.35, 72.3, 72.65, 72.65, 73.1, 73.15, 73.7, 73.9, 74.21, 74.86, 75.06, 75.57, 75.76, 75.57, 76.06, 75.82, 75.82]},
{name: "Молдова",showInLegend: false,data: [67.56, 67.41, 67.22, 67.03, 66.87, 66.76, 66.72, 66.75, 66.85, 67.01, 67.19, 67.36, 67.52, 67.67, 67.82, 68.02, 68.3, 68.67, 69.12, 69.62, 70.12, 70.58, 70.97, 71.27, 71.48, 71.62, 71.72, 71.81]},
{name: "Польша",showInLegend: false,data: [70.59, 71.09, 71.6, 71.7, 71.89, 72.25, 72.65, 73, 73.04, 73.75, 74.2, 74.5, 74.6, 74.85, 75, 75.14, 75.24, 75.54, 75.7, 76.25, 76.7, 76.75, 77, 77.6, 77.45, 77.85, 77.75, 77.75]},
{name: "Румыния",showInLegend: false,data: [69.78, 69.78, 69.56, 69.51, 69.46, 69.1, 69, 69.81, 70.51, 71.16, 71.16, 71.01, 71.31, 71.59, 71.88, 72.16, 72.57, 72.57, 73.31, 73.46, 74.41, 74.41, 75.06, 74.91, 74.91, 75.21, 75.31, 75.41]},
{name: "Словакия",showInLegend: false,data: [70.88, 71.8, 72.45, 72.3, 72.25, 72.65, 72.7, 72.55, 72.9, 73.05, 73.4, 73.6, 73.6, 73.96, 73.9, 74.2, 74.21, 74.7, 74.91, 75.11, 75.96, 76.11, 76.41, 76.81, 76.56, 77.17, 77.17, 77.17]}]},
    {"id":"line_mortality_ukraine","title":"Количество умерших по годам", "subtitle":"Данные: Госстат","categories":['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],"data":[{name: "Количество умерших по годам",showInLegend: false,color: '#e90c29',data: [669960,  697110,  741662,  764669,  792587,  776717,  754151,  719954,  739170,  758082,  745952,  754911,  765408,  761261,  781961,  758092,  762877,  754460,  706739,  698235,  664588,  663139,  662368,  632296,  594796,  583631,  574123,  587665]}]},
    {"id":"line_spendings","title":"Сколько Украина тратит на закупку лекарств", "subtitle":"Данные: Медичні закупівлі України","categories":['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018','2019','2020'],"data":[{name: "Сколько Украина тратит на закупку лекарств",showInLegend: false,color: '#e90c29',data: [60800000, 69300000, 104000000, 165000000, 408000000, 485000000, 341000000, 370000000, 528000000, 1090000000, 2110000000, 2170000000, 4090000000, 3960000000, 6040000000, 5940000000, 6540000000, 9770000000]}]},
    {"id":"line_stat_days","title":"Дни пребывания в стационаре", "subtitle":"Данные: Минздрав","categories":['2017', '2018','2019','2020'],"data":[{name: "Дни пребывания в стационаре",showInLegend: false,color: '#e90c29',data: [9.9,8.9,8.8,7.5]}]},
    {"id":"line_poltava_doctors","title":"Количество врачей в медучреждениях Полтавской области", "subtitle":"Данные: Минздрав","categories":['2015', '2016', '2017','2018','2019'],"data":
[{name: "Всего",showInLegend: false,data: [6421,6305,6315,6292,6091]},
{name: "Стоматологов",showInLegend: false,data: [1058,1029,1077,940,795]}]},
    {"id":"line_illness","title":"Общее количество выписанных украинцев из стационара", "subtitle":"Данные: Минздрав","categories":['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018','2019'],"data":[{name: "Общее количество выписанных украинцев из стационара", showInLegend: false,color: '#e90c29',data: [8354897, 8157471, 8300670, 8191277, 8084592, 8072284, 6809569, 6861777, 6784563, 6601495, 6512969, 6346402]}]},
    {"id":"line_zp","title":"Зарплата врачей медучреждений, финансируемых по программе медгарантий Полтавской области", "subtitle":"Данные: Минздрав","categories":['2018','2019','2020'],"data":
[{name: "Зарплата врачей первого уровня медпомощи",showInLegend: false,data: [7000,12000,15000]},
{name: "Зарплата врачей госпитального сектора",showInLegend: false,data: [null,8621.5,12023]}]},
{"id":"line_rod_stat","title":"Количество родильных стационаров", "subtitle":"Данные: Минздрав","categories":['2015', '2016', '2017', '2018','2019','2020'],"data":[{name: "Общее количество выписанных украинцев из стационара", showInLegend: false,color: '#e90c29',data: [22,20,20,19,14,12]}]},
{"id":"line_rod","title":"Количество родов", "subtitle":"Данные: Минздрав","categories":['2015', '2016', '2017', '2018','2019','2020'],"data":[{name: "Количество родов", showInLegend: false,color: '#e90c29',data: [13463,12399,11083,10142,9060,null]}]},
{"id":"line_rod_per_one","title":"Количество родов в одном стационаре", "subtitle":"Данные: Минздрав","categories":['2015', '2016', '2017', '2018','2019','2020'],"data":[{name: "Количество родов  в одном стационаре", showInLegend: false,color: '#e90c29',data: [612,620,554.2,533.8,647.1,null]}]},
{"id":"line_child_mort_3","title":"Детская смертность на 1000 живорожденных", "subtitle":"Данные: Минздрав","categories":['2015', '2016', '2017', '2018','2019'],"data":[{name: "Детская смертность на 1000 живорожденных", showInLegend: false,color: '#e90c29',data: [5.8,5.9,4.1,5,6.3,]}]},
{"id":"line_mat_mort","title":"Материнская смертность (на 100 тыс. живорожденных)", "subtitle":"Данные: Минздрав","categories":['2015', '2016', '2017', '2018','2019'],"data":[{name: "Материнская смертность (на 100 тыс. живорожденных)", showInLegend: false,color: '#e90c29',data: [14.8,0,18.1,9.8,0]}]},
{"id":"line_mort_serd","title":"Смертность от сердечно-сосудистых (на 100 тыс. населения)", "subtitle":"Данные: Минздрав","categories":['2015', '2016', '2017', '2018','2019'],"data":[{name: "Смертность от сердечно-сосудистых (на 100 тыс. населения)", showInLegend: false,color: '#e90c29',data: [1188.4,1211.7,1164.4,1191.5,1160.6]}]},
    {"id":"line_neoplasm","title":"Выписано больных с новообразованиями", "subtitle":"Данные: Минздрав","categories":['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018','2019'],"data":[{name: "Выписано больных с новообразованиями",showInLegend: false,color: '#e90c29',data: [545265, 544848, 558823, 585502, 600266, 614113, 500133, 517613, 522494, 539134, 549341, 563281]}]},
    {"id":"line_diseases_of_the_circulatory_system","title":"Количество выписанных с болезнями системы кровообращения", "subtitle":"Данные: Минздрав","categories":['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018','2019'],"data":[{name: "Количество выписанных с болезнями системы кровообращения",showInLegend: false,color: '#e90c29',data: [1659144, 1636944, 1679744, 1673734, 1654535, 1676159, 1453974, 1484534, 1462011, 1468315, 1449845, 1435829]}]},
    {"id":"line_respiratory_diseases","title":"Количество выписанных с болезнями органов дыхания", "subtitle":"Данные: Минздрав","categories":['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018','2019'],"data":[{name: "Количество выписанных с болезнями органов дыхания",showInLegend: false,color: '#e90c29',data: [724756, 767220, 821023, 774683, 693883, 716962, 589544, 577937, 635874, 542376, 541257, 515332]}]},
    {"id":"line_food_diseases","title":"Количество выписанных с болезнями органов пищеварения", "subtitle":"Данные: Минздрав","categories":['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018','2019'],"data":[{name: "Количество выписанных с болезнями органов пищеварения",showInLegend: false,color: '#e90c29',data: [799644, 767484, 765751, 743550, 735877, 728302, 621826, 639525, 614998, 611699, 598382, 573176]}]},
    {"id":"line_finance","title":"Траты госбюджета на медицину", "subtitle":"Данные: Ціна держави","categories":[ '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],"data":[{name: "Траты госбюджета на медицину",showInLegend: false,color: '#e90c29',data: [12129000000,15462000000,19720000000,26715000000,33551000000,36558000000,44765000000,48962000000,58454000000,61569000000,57150000000,71001000000,75409000000,102392000000,115848000000,130941000000,133840000000]}]},
    {"id":"line_hospital","title":"Количество больниц", "subtitle":"Данные: Минздрав","categories":['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],"data":[{name: "Количество больниц",showInLegend: false,color: '#e90c29',data: [2259, 2218, 2176, 1911, 1805, 1587, 1312, 1346, 1319, 1292, 1247, 1220]}]},
    {"id":"line_doctor","title":"Количество врачей в госучереждениях", "subtitle":"Данные: Минздрав","categories":['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],"data":[{name: "Количество врачей в госучереждениях",showInLegend: false,color: '#e90c29',data: [226414, 224622, 223698, 220408, 208366, 207077, 174231, 175061, 173833, 172680, 168261, 163281]}]},
    {"id":"line_childmort","title":"Детская смертность на 1000 рожденных", "subtitle":"Данные: Госстат","categories":['1991','1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017','2018'],"data":[{name: "Детская смертность на 1000 рожденных",showInLegend: false,color: '#e90c29',data: [14,14.9,14.5,14.7,14.3,14,12.8,12.8,11.9,11.3,10.3,9.6,9.5,10,9.8,11,10,9.4,9.1,9,8.4,8,7.8,7.9,7.4,7.6,7]}]},
    {"id":"line_vil","title":"Оценочное количество больных ВИЧ в Украине", "subtitle":"Данные: Минздрав","categories":['2015', '2016', '2017','2018','2019'],"data":[{name: "Оценочное количество больных ВИЧ в Украине",showInLegend: false,color: '#e90c29',data: [218000, 220000, 238000, 244000, 239956]}]},
    {"id":"line_snid","title":"Прирост больных СПИД в Украине", "subtitle":"Данные: Минздрав","categories":['2015', '2016', '2017','2018','2019'],"data":[{name: "Прирост больных СПИД в Украине",showInLegend: false,color: '#e90c29',data: [8490, 8841, 9306, 8839, 7502]}]},
    {"id":"line_snid_death","title":"Погибло от СПИД в Украине", "subtitle":"Данные: Минздрав","categories":['2015', '2016', '2017','2018','2019'],"data":[{name: "Погибло от СПИД в Украине",showInLegend: false,color: '#e90c29',data: [2935, 3249, 3313, 3448, 2979]}]}
    
];
function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
function getMinOfArray(numArray,num) {
    if (numArray[0] == undefined) {
        var arra = num.map(d => d.value)
        return Math.min.apply(null, arra);
    } else {
        return Math.min.apply(null, numArray);
    }
}
function getMaxOfArray(numArray,num) {
    if (numArray[0] == undefined) {
        var arra = num.map(d => d.value)
        return Math.max.apply(null, arra);
    } else {
        return Math.max.apply(null, numArray);
    }
}
function makeMap(chart_id) {
    var filtered = data.filter(a => a['id'] == chart_id)[0]
    Highcharts.mapChart(chart_id, {
        chart: {
            map: 'countries/ua/ua-all',
            style: {
                fontFamily: 'Roboto'
            }
        },

        title: {
            text: filtered.title
        },

        subtitle: {
            text: filtered.subtitle
        },

        credits: {
            enabled: false
        },

        colorAxis: {
            min: getMinOfArray(filtered.data.filter(d=> d[1] != null).map(d => d[1]),filtered),
            max: getMaxOfArray(filtered.data.filter(d=> d[1] != null).map(d => d[1]),filtered),
            minColor: 'white',
            maxColor: '#e90c29'
        },
        tooltip: {
            formatter: function(){
                var name = this.point.name
                var value = this.point.value
                return translate.filter(a=>a.name==name)[0].tr+'<br>'+value
            }
        },

        series: [{
            data: filtered.data,
            name: filtered.title,
            states: {
                hover: {
                    borderColor: 'black'
                }
            },
            dataLabels: {
                enabled: false
            }
        }]
    });
}
function makeLineChart(chart_id) {
    var filtered = data.filter(a => a['id'] == chart_id)[0]
    if (filtered.data.length == 1) {
        var labels = {enabled: true}
        var index2014 = filtered.categories.indexOf('2014');
        var value2 = filtered.data[0].data.slice(index2014,index2014+1);
    } else {
        var labels = {enabled: false}
    }
    if (chart_id == 'line_spendings' || 
        chart_id == 'line_poltava_doctors' || 
        chart_id == 'line_stat_days'|| 
        chart_id == 'line_lifeexp'|| 
        chart_id == 'line_childmort'||
        chart_id == 'line_mortality_ukraine') {
        var one_label = {enabled: false}
    } else {
        var one_label = {enabled: true}
    }
    Highcharts.chart(chart_id, {
        chart: {
            type: 'line',
            style: {
                fontFamily: 'Roboto'
            }
        },
        title: {
            text: filtered.title
        },
        subtitle: {
            text: filtered.subtitle
        },
        xAxis: {
            categories: filtered.categories,
            tickInterval: 3
        },
        yAxis: {
            title: {
                text: null
            }
        },
        annotations: [{
            labelOptions: {
                shape: 'connector',
                align: 'right',
                justify: false,
                crop: true,
                style: {
                    fontSize: '1em',
                    textOutline: '1px white'
                }
            },
            labels: [{
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    x: index2014,
                    y: value2
                },
                text: 'Потеря Крыма и Донбасса'
            }]
        }],
        credits: {
            enabled: false
        },
        plotOptions: {
            line: {
                dataLabels: labels
            },
            series: {
                label: one_label
            }
        },
        series: filtered.data //[{name: filtered.title,showInLegend: false,color: '#e90c29',data: filtered.data}]
    });
}
function makeBarChart(chart_id) {
    var filtered = data.filter(a => a['id'] == chart_id)[0]
    Highcharts.chart(chart_id, {
        chart: {
            type: 'bar'
        },
        title: {
            text: filtered.title
        },
        subtitle: {
            text: filtered.subtitle
        },
        xAxis: {
            categories: filtered.categories
        },
        yAxis: {
            title: {
                text: null
            }
        },
        credits: {
            enabled: false
        },
        tooltip: {
            formatter: function() {
                return this.x+": <span style='font-weight:bold;'>"+numberWithSpaces(this.y)+"</span>"
            }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            name: filtered.title,
            showInLegend: false,
            color: '#e90c29',
            data: filtered.data
        }]
    });
}
function makeBubbleChart(dataset) {
    var diameter = 600;
    var color = d3.scaleOrdinal(d3.schemeCategory20);

    var bubble = d3.pack(dataset)
        .size([diameter, diameter])
        .padding(1.5);

    var svg = d3.select("#reason")
        .append("svg")
        .attr("width", diameter)
        .attr("height", diameter)
        .attr("class", "bubble");

    var nodes = d3.hierarchy(dataset)
        .sum(function(d) { return d.Count; });

    var node = svg.selectAll(".node")
        .data(bubble(nodes).descendants())
        .enter()
        .filter(function(d){
            return  !d.children
        })
        .append("g")
        .attr("class", "node")
        .attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
        });
    var tooltip = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("z-index", "10")
        .style("visibility", "hidden")
        .style("padding", "14px")
        .style("background-color", "#f5f5f5")
        .style("color", "black")
        .style("border-radius", "6px")
        .style("border-color", "black")
        .style("font", "12px sans-serif")
        .text("tooltip");

    node.append("title")
        .text(function(d) {
            return d.Name + ": " + d.Count;
        });

    node.append("circle")
        .attr("r", function(d) {
            return d.r;
        })
        .style("fill", function(d,i) {
            return color(i);
        });

    node.append("text")
        .attr("dy", ".2em")
        .style("text-anchor", "middle")
        .text(function(d) {
            return d.data.Name.slice(3, ).substring(0, d.r / 3);
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", function(d){
            return d.r/7;
        })
        .attr("fill", "white");

    node.append("text")
        .attr("dy", "1.3em")
        .style("text-anchor", "middle")
        .text(function(d) {
            return d.data.Count;
        })
        .attr("font-family",  "Gill Sans", "Gill Sans MT")
        .attr("font-size", function(d){
            return d.r/5;
        })
        .attr("fill", "white");
    
    node.on("mouseover", function(d) {
        tooltip.html("<h4>"+ d.data.Name.slice(4,) + "</h4>"+
        '<p><b>'+d.data.Count+'</b></p>'
        )
        tooltip.style("visibility", "visible");
    })
    .on("mousemove", function() {
        return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
    })
    .on("mouseout", function(){return tooltip.style("visibility", "hidden");});

    d3.select(self.frameElement)
        .style("height", diameter + "px");
}
function makeSparkline(div_id) {

    Highcharts.SparkLine = function (a, b, c) {
        var hasRenderToArg = typeof a === 'string' || a.nodeName,
            options = arguments[hasRenderToArg ? 1 : 0],
            defaultOptions = {
                chart: {
                    renderTo: (options.chart && options.chart.renderTo) || this,
                    backgroundColor: null,
                    borderWidth: 0,
                    type: 'area',
                    margin: [2, 0, 2, 0],
                    width: 120,
                    height: 20,
                    style: {
                        overflow: 'visible'
                    },

                    // small optimalization, saves 1-2 ms each sparkline
                    skipClone: true
                },
                title: {
                    text: ''
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    labels: {
                        enabled: false
                    },
                    title: {
                        text: null
                    },
                    startOnTick: false,
                    endOnTick: false,
                    tickPositions: []
                },
                yAxis: {
                    endOnTick: false,
                    startOnTick: false,
                    labels: {
                        enabled: false
                    },
                    title: {
                        text: null
                    },
                    tickPositions: [0]
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    hideDelay: 0,
                    outside: true,
                    shared: true
                },
                plotOptions: {
                    series: {
                        animation: false,
                        lineWidth: 1,
                        shadow: false,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        marker: {
                            radius: 1,
                            states: {
                                hover: {
                                    radius: 2
                                }
                            }
                        },
                        fillOpacity: 0.25
                    },
                    column: {
                        negativeColor: '#910000',
                        borderColor: 'silver'
                    }
                }
            };

        options = Highcharts.merge(defaultOptions, options);

        return hasRenderToArg ?
            new Highcharts.Chart(a, options, c) :
            new Highcharts.Chart(options, b);
    };

    var start = +new Date(),
        $tds = $('td[data-sparkline]'),
        fullLen = $tds.length,
        n = 0;

    // Creating 153 sparkline charts is quite fast in modern browsers, but IE8 and mobile
    // can take some seconds, so we split the input into chunks and apply them in timeouts
    // in order avoid locking up the browser process and allow interaction.
    function doChunk() {
        var time = +new Date(),
            i,
            len = $tds.length,
            $td,
            stringdata,
            arr,
            data,
            chart;

        for (i = 0; i < len; i += 1) {
            $td = $($tds[i]);
            stringdata = $td.data('sparkline');
            arr = stringdata.split('; ');
            data = $.map(arr[0].split(', '), parseFloat);
            chart = {};

            if (arr[1]) {
                chart.type = arr[1];
            }
            $td.highcharts('SparkLine', {
                series: [{
                    data: data,
                    pointStart: 1
                }],
                tooltip: {
                    formatter: function() {
                        var year = parseInt(this.x)+2015
                         return '<span style="font-size: 10px">' + $td.parent().find('th').html() + ', '+year+':</span><br/>'
                    }
                    
                },
                chart: chart
            });

            n += 1;
        }
    }
    doChunk();

}
function makeDynamicOfDiseases(disease) {
    var regions = ['Автономна Республіка Крим', 'Вінницька область', 'Волинська область', 'Дніпропетровська область', 'Донецька область', 'Житомирська область', 'Закарпатська область', 'Запорізька область', 'Івано-Франківська область', 'Київська область', 'Кіровоградська область', 'Луганська область', 'Львівська область', 'Миколаївська область', 'Одеська область', 'Полтавська область', 'Рівненська область', 'Сумська область', 'Тернопільська область', 'Харківська область', 'Херсонська область', 'Хмельницька область', 'Черкаська область', 'Чернівецька область', 'Чернігівська область', 'м. Київ', 'м. Севастополь']
    var filtered_data = reason_data.filter(a => a['small_type'] == disease)
    var series = []
    for (r of regions) {
        var filtered_region = filtered_data.filter(a => a['region'] == r)
        var obj = new Object();
        obj.name = r;
        obj.data = filtered_region.map(function (a,i) {
            var country = population.filter(a => a['region'] == r).map(a => a.value)
            if (country[i] != undefined) {
                var return_value = parseInt(a.value) * 100000 / parseInt(country[i])
                if (isNaN(return_value)) {
                    return null
                } else {
                    return parseInt(return_value.toFixed(1))
                }
            } else {
                return null
            }
            
        });
        obj.showInLegend = false;
        series.push(obj)
        
    }
    Highcharts.chart('disease', {

        title: {
        text: 'Динамика умерших от ишемичной болезни сердца на 100 000 населения, по областям'
        },

        subtitle: {
        text: 'Данные: Госстат'
        },

        yAxis: {
        title: {
            text: null
        }
        },
        xAxis: {
        tickInterval: 1
        },
        credits: {
        enabled: false
        },
        plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2005
        }
        },

        series: series
    });
}
function makeTable(chart_id) {
    var filtered = data.filter(a => a['id'] == chart_id)[0]
    var chart = document.getElementById(chart_id);
    var table = document.createElement('table');
    table.className = 'tablecoro'
    chart.appendChild(table);
    var tr = document.createElement('tr');
    tr.innerHTML = '<th style="text-align:left;">Год</th>'
    for (r=0;r<filtered.data.length;r++) {
        tr.innerHTML += '<th>'+ filtered.data[r].name+'</th>' ;
    }
    table.appendChild(tr);
    for (r=0;r < filtered.data[0].data.length; r++) {
        var tr = document.createElement('tr');
        tr.innerHTML = '<td>' + filtered.categories[r] + '</td>' 
        for (k=0;k<filtered.data.length;k++) {
            tr.innerHTML += '<td>'+ numberWithSpaces(filtered.data[k].data[r]) + '</td>';
        }
        table.appendChild(tr);
        
    }
}
function makeSparklines(num) {
    const width = 120;
    const height = 30;
    const margin = { top: 5, right: 5, bottom: 5, left: 5 };
    const inner_width  = width - margin.left - margin.right;
    const inner_height = height - margin.top - margin.bottom;
    const x = d3.scaleLinear().domain([0, data[num].length]).range([0, inner_width]);
    const y = d3.scaleLinear().domain([0, d3.max(data[num])]).range([inner_height, 0]);

    const svg = d3.select('#sparklines'+String(num))
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    
    const line = d3.line()
        .x((d, i) => x(i))
        .y(d => y(d));
    
    var tooltip = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("z-index", "10")
        .style("visibility", "hidden")
        .style("padding", "14px")
        .style("background-color", "#f5f5f5")
        .style("color", "black")
        .style("border-radius", "6px")
        .style("border-color", "black")
        .style("font", "12px sans-serif")
        .text("tooltip");
    
    var cell = svg.append('path').datum(data[num])
        .attr('fill', 'none')
        .attr('stroke', '#bbb')
        .attr('stroke-width', 1)
        .attr('d', line)
        .text(function(d) { return d; });
    svg.append('circle')
        .attr('r', 2)
        .attr('cx', x(0))
        .attr('cy', y(data[num][0]))
        .attr('fill', 'steelblue');
    svg.append('circle')
        .attr('r', 2)
        .attr('cx', x(data[num].length - 1))
        .attr('cy', y(data[num][data[num].length - 1]))
        .attr('fill', 'tomato');
    

}
$(document).ready(function(){
    $('.tablebutton').on('click',function(){
        makeTable(this.getAttribute("data"))
        $('#'+this.getAttribute("id")).css('display','none')
    });

});
makeBubbleChart(nodes_data);
makeLineChart("line_lifeexp_nei")
makeLineChart("line_stat_days")
makeLineChart("line_poltava_doctors")
makeLineChart("line_spendings")
makeBarChart("bar_slozh")
Highcharts.chart('new_cont', {
    chart: {
        type: 'scatter',
        zoomType: 'xy',
        style: {
            fontFamily:'Roboto'
        }
    },
    title: {
        text: 'Стоимость лечения ишемической болезни сердца'
    },
    subtitle: {
        text: 'Источник: отчет USAID & HFG, анализ 158 больниц'
    },
    xAxis: {
        title: {
            enabled: false
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
    },
    yAxis: {
        title: {
            text: null
        }
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 100,
        y: 70,
        floating: true,
        backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
        borderWidth: 1
    },
    plotOptions: {
        scatter: {
            dataLabels: {
                enabled: true,
                formatter: function() {
                    return this.y
                }
            },
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: false,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            enableMouseTracking: false,
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            }
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Городская',
        color: '#64b5f6',
        marker: {
            symbol: 'circle'
        },
        data: [[4,1256], [5,1260], [6,1300], [7,1343],[12,1816],[14,2453],[17,4098]]

    }, {
        name: 'Районная',
        color: '#e57373',
        marker: {
            symbol: 'circle'
        },
        data: [[1,910], [3,1200], [2,1280], [8,1547], [9,1609],[10,1720],[11,1780],[13,2007]]
    }, {
        name: 'Областная',
        color: '#ffb74d',
        marker: {
            symbol: 'circle'
        },
        data: [[15,3079], [16,3789], [18,5148], [19,6020], [20,8273]]
    }]
});