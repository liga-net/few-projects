if(document.createStyleSheet) {
    document.createStyleSheet('https://cdn.jsdelivr.net/gh/liga-net/few-projects/local_election_search/candidates_local.css');
   }
   else {
    var styles = "@import url('https://cdn.jsdelivr.net/gh/liga-net/few-projects/local_election_search/candidates_local.css');";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
}
function getValue(file){
    var value = $.ajax({ 
       url: 'https://cdn.jsdelivr.net/gh/liga-net/few-projects/'+file+'.json',
       async: false
    }).responseJSON.data;
    return value;
 }
 var miski_data = null,
     rayon_data = null,
     mer_data = null,
     oblasne_data = null;

 var data = getValue('local_dils');

 var modal = document.getElementById('myModal');
 var obl = [
     {name: 'Вінницька', id: 5},{name: 'Волинська', id: 7},{name: 'Дніпропетровська', id: 12},{name: 'Донецька', id: 14},{name: 'Житомирська', id: 18},{name: 'Закарпатська', id: 21},{name: 'Запорізька', id: 23},{name: 'Івано-Франківська', id: 26},{name: 'Київська', id: 32},{name: 'Кіровоградська', id: 35},{name: 'Луганська', id: 44},{name: 'Львівська', id: 46},{name: 'Миколаївська', id: 48},{name: 'Одеська', id: 51},{name: 'Полтавська', id: 53},{name: 'Рівненська', id: 56},{name: 'Сумська', id: 59},{name: 'Тернопільська', id: 61},{name: 'Харківська', id: 63},{name: 'Херсонська', id: 65},{name: 'Хмельницька', id: 68},{name: 'Черкаська', id: 71},{name: 'Чернівецька', id: 73},{name: 'Чернігівська', id: 74},{name: 'Київ', id: 80}
 ];
 var city_replace = [{name:'Дніпро', id:1},{name:'Львів', id:2},{name:'Харків', id:3},{name:'Київ', id:4},{name:'Одеса', id:5}];
 var rayon_replace = [{'name': 'Амур-Нижньодніпровський район', 'id': 1},
     {'name': 'Шевченківський район', 'id': 2},
     {'name': 'Індустріальний район', 'id': 3},
     {'name': 'Новокодацький район', 'id': 4},
     {'name': 'Самарський район', 'id': 5},
     {'name': 'Соборний район', 'id': 6},
     {'name': 'Центральний район', 'id': 7},
     {'name': 'Чечелівський район', 'id': 8},
     {'name': 'Галицький район', 'id': 9},
     {'name': 'Залізничний район', 'id': 10},
     {'name': 'Личаківський район', 'id': 11},
     {'name': 'Сихівський район', 'id': 12},
     {'name': 'Франківський район', 'id': 13},
     {'name': 'Київський район', 'id': 14},
     {'name': 'Московський район', 'id': 15},
     {'name': 'Немишлянський район', 'id': 16},
     {'name': 'Новобаварський район', 'id': 17},
     {'name': "Основ'янський район", 'id': 18},
     {'name': 'Слобідський район', 'id': 19},
     {'name': 'Холодногірський район', 'id': 20},
     {'name': 'Голосіївський район', 'id': 21},
     {'name': 'Дарницький район', 'id': 22},
     {'name': 'Деснянський район', 'id': 23},
     {'name': 'Дніпровський район', 'id': 24},
     {'name': 'Оболонський район', 'id': 25},
     {'name': 'Печерський район', 'id': 26},
     {'name': 'Подільський район', 'id': 27},
     {'name': 'Святошинський район', 'id': 28},
     {'name': "Солом'янський район", 'id': 29},
     {'name':'Малиновський район', 'id': 30},
     {'name':'Приморський район', 'id': 31},
     {'name':'Суворовський район', 'id': 32}];
 
 var party_replace = [{'name': 'БАТЬКІВЩИНА', 'id': 1},
{'name': 'СВОБОДА', 'id': 2},
{'name': 'ЄВРОПЕЙСЬКА СОЛІДАРНІСТЬ', 'id': 3},
{'name': 'ОПОЗИЦІЙНА ПЛАТФОРМА – ЗА ЖИТТЯ', 'id': 4},
{'name': 'СИЛА І ЧЕСТЬ', 'id': 5},
{'name': 'СЛУГА НАРОДУ', 'id': 6},
{'name': 'УКРАЇНСЬКА СТРАТЕГІЯ ГРОЙСМАНА', 'id': 7},
{'name': 'ГОЛОС', 'id': 8},
{'name': 'ПАРТІЯ ВІННИЧАН', 'id': 9},
{'name': 'ЗА МАЙБУТНЄ', 'id': 10},
{'name': 'НАШ КРАЙ', 'id': 11},
{'name': 'РАДИКАЛЬНА ПАРТІЯ ОЛЕГА ЛЯШКА', 'id': 12},
{'name': 'АГРАРНА ПАРТІЯ УКРАЇНИ', 'id': 13},
{'name': 'УКРАЇНСЬКА НАРОДНА ПАРТІЯ', 'id': 14},
{'name': 'ГРОМАДЯНСЬКИЙ РУХ СВІДОМІ', 'id': 15},
{'name': 'ПАРТІЯ ГРОМАДСЬКА СИЛА', 'id': 16},
{'name': 'БЛОК ВІЛКУЛА УКРАЇНСЬКА ПЕРСПЕКТИВА', 'id': 17},
{'name': 'НАЦІОНАЛЬНИЙ КОРПУС', 'id': 18},
{'name': 'ПРОПОЗИЦІЯ', 'id': 19},
{'name': 'БДЖОЛА', 'id': 20},
{'name': 'СИЛА ЛЮДЕЙ', 'id': 21},
{'name': 'ПАРТІЯ ЗЕЛЕНИХ УКРАЇНИ', 'id': 22},
{'name': 'ПОРЯДОК', 'id': 23},
{'name': 'КОМАНДА МАКСИМА ЄФІМОВА НАШ КРАМАТОРСЬК', 'id': 24},
{'name': 'ОПОЗИЦІЙНИЙ БЛОК', 'id': 25},
{'name': 'ПАРТІЯ МИРУ ТА РОЗВИТКУ', 'id': 26},
{'name': 'БЛОК ВАДИМА БОЙЧЕНКА', 'id': 27},
{'name': 'ЛІВА ОПОЗИЦІЯ', 'id': 28},
{'name': 'НАРОДНА ПАРТІЯ', 'id': 29},
{'name': 'ДЕМОКРАТИЧНА ПАРТІЯ УГОРЦІВ УКРАЇНИ', 'id': 30},
{'name': 'КМКС ПАРТІЯ УГОРЦІВ УКРАЇНИ', 'id': 31},
{'name': 'КОМАНДА АНДРІЯ БАЛОГИ', 'id': 32},
{'name': 'РІДНЕ ЗАКАРПАТТЯ', 'id': 33},
{'name': 'РАЗОМ СИЛА', 'id': 34},
{'name': 'ЄВРОПЕЙСЬКА ПАРТІЯ УКРАЇНИ', 'id': 35},
{'name': 'ОБЄДНАННЯ САМОПОМІЧ', 'id': 36},
{'name': 'НОВА ПОЛІТИКА', 'id': 37},
{'name': 'ПАРТІЯ ВОЛОДИМИРА БУРЯКА ЄДНАННЯ', 'id': 38},
{'name': 'КОМАНДА СЕРГІЯ МІНЬКА', 'id': 39},
{'name': "ВСЕУКРАЇНСЬКЕ ОБ'ЄДНАННЯ ПЛАТФОРМА ГРОМАД", 'id': 40},
{'name': 'УДАР', 'id': 41},
{'name': 'НАРОДНИЙ РУХ УКРАЇНИ', 'id': 42},
{'name': 'ПЕРЕМОГА ПАЛЬЧЕВСЬКОГО', 'id': 43},
{'name': 'ГРОМАДСЬКИЙ РУХ МИКОЛИ ТОМЕНКА РІДНА КРАЇНА', 'id': 44},
{'name': 'УКРАЇНА СЛАВЕТНА', 'id': 45},
{'name': 'НОВІ ОБЛИЧЧЯ', 'id': 46},
{'name': 'ПАРТІЯ НАЦІОНАЛЬНОГО ЕГОЇЗМУ', 'id': 47},
{'name': 'БЕРЕЗАНСЬКА ГРОМАДА', 'id': 48},
{'name': 'КОМАНДА ІГОРЯ САПОЖКА – ЄДНІСТЬ', 'id': 49},
{'name': 'ГРОМАДЯНСЬКИЙ РУХ ХВИЛЯ', 'id': 50},
{'name': 'ПАРТІЯ ПЕНСІОНЕРІВ УКРАЇНИ', 'id': 51},
{'name': 'ВАРТА', 'id': 52},
{'name': 'ГРОМАДЯНСЬКА ПОЗИЦІЯ', 'id': 53},
{'name': 'КОНГРЕС УКРАЇНСЬКИХ НАЦІОНАЛІСТІВ', 'id': 54},
{'name': 'УКРАЇНСЬКА ГАЛИЦЬКА ПАРТІЯ', 'id': 55},
{'name': 'ПАРТІЯ ХРИСТИЯНСЬКО-ДЕМОКРАТИЧНИЙ СОЮЗ', 'id': 56},
{'name': 'МИКОЛАЇВЦІ', 'id': 57},
{'name': 'ДОВІРЯЙ ДІЛАМ', 'id': 58},
{'name': 'УКРАЇНСЬКА МОРСЬКА ПАРТІЯ СЕРГІЯ КІВАЛОВА', 'id': 59},
{'name': 'БЛОК ЕДУАРДА ГУРВІЦА', 'id': 60},
{'name': 'ПАРТІЯ ШАРІЯ', 'id': 61},
{'name': 'ДОВІРА', 'id': 62},
{'name': 'ПАРТІЯ ПРОСТИХ ЛЮДЕЙ СЕРГІЯ КАПЛІНА', 'id': 63},
{'name': 'РІДНЕ МІСТО', 'id': 64},
{'name': 'НОВА КРАЇНА', 'id': 65},
{'name': 'ВОЛЯ', 'id': 66},
{'name': 'ПАРТІЯ РОЗВИТКУ ГРОМАД', 'id': 67},
{'name': 'ДОБРИЙ САМАРЯНИН', 'id': 68},
{'name': 'БЛОК КЕРНЕСА – УСПІШНИЙ ХАРКІВ!', 'id': 69},
{'name': 'БЛОК СВІТЛИЧНОЇ РАЗОМ!', 'id': 70},
{'name': 'УКРАЇНСЬКА ПРАВОСЛАВНА АСАМБЛЕЯ', 'id': 71},
{'name': 'АКЦЕНТ', 'id': 72},
{'name': 'БЛОК ВОЛОДИМИРА САЛЬДО', 'id': 73},
{'name': 'ПАРТІЯ ІГОРЯ КОЛИХАЄВА НАМ ТУТ ЖИТИ!', 'id': 74},
{'name': 'ПАРТІЯ МІСЦЕВОГО САМОВРЯДУВАННЯ', 'id': 75},
{'name': 'ХЕРСОНЦІ', 'id': 76},
{'name': 'ЗА КОНКРЕТНІ СПРАВИ', 'id': 77},
{'name': 'ЧЕРКАЩАНИ', 'id': 78},
{'name': 'КОМАНДА СЕРГІЯ РУДИКА. ЧАС ЗМІН!', 'id': 79},
{'name': 'ПАРТІЯ ВІЛЬНИХ ДЕМОКРАТІВ', 'id': 80},
{'name': 'ГРОМАДСЬКИЙ РУХ НАРОДНИЙ КОНТРОЛЬ', 'id': 81},
{'name': 'ЄДИНА АЛЬТЕРНАТИВА', 'id': 82},
{'name': 'КОМАНДА МИХАЙЛІШИНА', 'id': 83},
{'name': 'ПАРТІЯ ЧЕРНІВЧАН', 'id': 84},
{'name': 'РІДНИЙ ДІМ', 'id': 85},
{'name': 'ГРОМАДСЬКО-ПОЛІТИЧНА ПЛАТФОРМА НАДІЇ САВЧЕНКО', 'id': 86},
{'name': 'АДВОКАТ', 'id': 87},
{'name': 'РУХ СПРАВЕДЛИВОСТІ', 'id': 88},
{'name': 'УКРАЇНСЬКА ПАРТІЯ ЧЕСТІ, БОРОТЬБИ З КОРУПЦІЄЮ ТА ОРГАНІЗОВАНОЮ ЗЛОЧИННІСТЮ',
'id': 89},
{'name': 'ЕКО ПАРТІЯ БЕРЕЗИ', 'id': 90},
{'name': 'ПОБРАТИМИ УКРАЇНИ', 'id': 91},
{'name': 'ДЕМАЛЬЯНС (ДЕМОКРАТИЧНИЙ АЛЬЯНС)', 'id': 92},
{'name': 'КОМАНДА ДНІПРА', 'id': 93},
{'name': 'СПРАВА', 'id': 94},
{'name': 'КОМАНДА ЛЕВЧЕНКА НАРОДОВЛАДДЯ', 'id': 95},
{'name': 'СОЛІДАРНІСТЬ ЖІНОК УКРАЇНИ', 'id': 96},
{'name': 'ОСНОВА', 'id': 97},
{'name': 'ПАРТІЯ ЗАХИСНИКІВ ВІТЧИЗНИ', 'id': 98},
{'name': 'НАШІ', 'id': 99},
{'name': 'МОЛОДІЖНА ПАРТІЯ УКРАЇНИ', 'id': 100},
{'name': 'ДЕМОКРАТИЧНА СОКИРА', 'id': 101},
{'name': 'РЕСПУБЛІКАНСЬКА ПЛАТФОРМА', 'id': 102},
{'name': 'ВСЕУКРАЇНСЬКА БРАТСТВО', 'id': 103},
{'name': 'КРАЇНА', 'id': 104},
{'name': 'ГРОМАДА І ЗАКОН', 'id': 105},
{'name': 'АЛЬТЕРНАТИВА', 'id': 106},
{'name': 'ГРОМАДСЬКО-ПОЛІТИЧНИЙ РУХ ВАЛЕНТИНА НАЛИВАЙЧЕНКА СПРАВЕДЛИВІСТЬ',
'id': 107},
{'name': 'ІДЕЯ НАЦІЇ', 'id': 108},
{'name': 'НЕЗАЛЕЖНІСТЬ', 'id': 109},
{'name': 'ПАРТІЯ ТВОГО МІСТА', 'id': 110},
{'name': 'ПАТРІОТ', 'id': 111},
{'name': 'ПАРТІЯ ПРОМИСЛОВЦІВ І ПІДПРИЄМЦІВ УКРАЇНИ', 'id': 112},
{'name': 'ПАРТІЯ ВЕТЕРАНІВ АФГАНІСТАНУ', 'id': 113},
{'name': 'ПРАВИЙ СЕКТОР', 'id': 114},
{'name': 'УКРАЇНСЬКА РЕСПУБЛІКАНСЬКА ПАРТІЯ', 'id': 115},
{'name': 'УКРАЇНСЬКА ПАРТІЯ', 'id': 116},
{'name': 'ЄДИНА ГРОМАДА', 'id': 117},
{'name': 'БІЛА ЦЕРКВА РАЗОМ', 'id': 118},
{'name': 'ЄДНІСТЬ ОЛЕКСАНДРА ОМЕЛЬЧЕНКА', 'id': 119},
{'name': 'СОЦІАЛ-ДЕМОКРАТИЧНА ПАРТІЯ', 'id': 120},
{'name': 'ПЕРСПЕКТИВА МІСТА', 'id': 121},
{'name': 'ПАРТІЯ СПРАВЕДЛИВІСТЬ', 'id': 122},
{'name': 'ДУХОВНА УКРАЇНА', 'id': 123},
{'name': 'ПАТРІОТИ УКРАЇНИ', 'id': 124},
{'name': 'РОЗУМНА СИЛА', 'id': 125},
{'name': 'ПАРТІЯ ЗА ПРАВА ЛЮДИНИ', 'id': 126},
{'name': 'БЛОК ДМИТРА ГОЛУБОВА', 'id': 127},
{'name': 'РЕСПУБЛІКА', 'id': 128},
{'name': 'ЗАПОРУКА (ЗА ПОРЯДОК В УКРАЇНІ)', 'id': 129},
{'name': 'САМОВРЯДНА УКРАЇНСЬКА ДЕРЖАВА', 'id': 130},
{'name': 'ГРОМАДСЬКИЙ КОНТРОЛЬ', 'id': 131},
{'name': 'РІВНЕ РАЗОМ', 'id': 132},
{'name': 'УСПІШНА УКРАЇНА', 'id': 133},
{'name': 'СОЦІАЛІСТИ', 'id': 134},
{'name': 'ПОРЯДОК. ВІДПОВІДАЛЬНІСТЬ. СПРАВЕДЛИВІСТЬ', 'id': 135},
{'name': 'КОЗАЦЬКА УКРАЇНСЬКА ПАРТІЯ', 'id': 136},
{'name': 'ВСЕУКРАЇНСЬКЕ ПОЛІТИЧНЕ ОБЄДНАННЯ ЄДИНА РОДИНА', 'id': 137},
{'name': 'СОЮЗ ЛІВИХ СИЛ', 'id': 138},
{'name': 'ВЛАДА НАРОДУ (СПІЛКА ВІЛЬНИХ ЛЮДЕЙ СОНЦЕ)', 'id': 139},
{'name': 'КОМАНДА СИМЧИШИНА', 'id': 140},
{'name': 'ОШУКАНІ УКРАЇНЦІ', 'id': 141},
{'name': 'СОЦІАЛІСТИЧНА ПАРТІЯ ОЛЕКСАНДРА МОРОЗА', 'id': 142},
{'name': 'ЕКОЛОГІЧНА АЛЬТЕРНАТИВА', 'id': 143},
{'name': 'САМОВИСУВАННЯ', 'id': 144},
{'name': 'ЗА МАЙБУТНЄ', 'id': 145},
{'name': 'БЛОК ДАРТА ВЕЙДЕРА', 'id': 146},
{'name': 'ПРОГРЕСИВНА СОЦІАЛІСТИЧНА ПАРТІЯ УКРАЇНИ', 'id': 147}]
 var link_replace = [{"name":'kyiv',id:4,cvk:'https://www.cvk.gov.ua/pls/vm2020/pvm056pid102=2pf7691=2pt001f01=695rej=0pt00_t001f01=695.html'},{"name":'kharkiv',id:3,cvk:'https://www.cvk.gov.ua/pls/vm2020/pvm056pid102=5914pf7691=64337pt001f01=695rej=0pt00_t001f01=695.html'},{"name":'odesa',id:5,cvk:'https://www.cvk.gov.ua/pls/vm2020/pvm056pid102=9973pf7691=64276pt001f01=695rej=0pt00_t001f01=695.html'},{"name":'dnipro',id:1,cvk:'https://www.cvk.gov.ua/pls/vm2020/pvm056pid102=4364pf7691=63801pt001f01=695rej=0pt00_t001f01=695.html'},{"name":'lviv',id:2,cvk:'https://www.cvk.gov.ua/pls/vm2020/pvm056pid102=3670pf7691=64097pt001f01=695rej=0pt00_t001f01=695.html'}]
 var mer_programs = ['Ківалов Сергій Васильович','Труханов Геннадій Леонідович','Філімонов Олег Миколайович','Кошулинський Руслан Володимирович','Садовий Андрій Іванович','Синютка Олег Михайлович','Верещук Ірина Андріївна','Кличко Віталій Володимирович', 'Притула Сергій Дмитрович','Вілкул Олександр Юрійович','Краснов Загід Геннадійович','Філатов Борис Альбертович','Кернес Геннадій Адольфович','Кучер Олексій Володимирович', "Фельдман Олександр Борисович"]
 function getRandomArbitrary() {
     return Math.round(Math.random() * (data.length - 0) + 0);
 }
 
 function randomOutput(val) {
     var сity_place = city_replace.filter(d => d['id'] == val.city)[0].name
     var rayon_place = rayon_replace.filter(d => d['id'] == val.rayon)[0].name
     
     random += '<div id="c'+val.city+'_m'+val.miske+'_d'+val.dil+'_r'+val.rayon+'" class="well"><div><div class="okrug">' + сity_place +  '</div>';
     random += '<div class="district"><img style="width: 8px; padding-right: 2px;" src="point.png"> ' +rayon_place + '</div>';
     random += '</div></div>';
     return random
 }
 function range(start, end) {
     var foo = [];
     for (var i = start; i <= end; i++) {
         foo.push(i);
     }
     return foo;
 }
 function toggle(element_id) {
     var x = document.getElementById(element_id);
     if (x.style.display == "none") {
         x.style.display = "block";
     } else {
         x.style.display = "none";
     }
 }

 function showModal(idd) {

     function makeTable(major,name) {
         if (name != 'mer') {
             var filter = major.filter(d => d['city'] == splited_id[0].replace('c','') && 
                                     d['tvo'] == splited_id[1].replace('m',''))
         } else {
             var filter = major.filter(d => d['city'] == splited_id[0].replace('c',''))
         }
         
         var parties = filter.map(p => p.party)
         text += '<table id="'+name+'_table">'
         for (f=0; f <filter.length; f++) {
             var party = party_replace.filter(d => d['id'] == filter[f].party)[0].name
             var link_city = link_replace.filter(d => d['id'] == splited_id[0].replace('c',''))[0].name
             var link_cvk = link_replace.filter(d => d['id'] == splited_id[0].replace('c',''))[0].cvk
             if (name == 'mer') {
                 text += '<tr class="position"><td>'+filter[f].name+'</td>'
                 text += '<td class="position">'+party+'</td>'
                 if (mer_programs.includes(filter[f].name)) {
                     text += '<td class="position"><a target="_blank" href="https://www.centreua.org/vybory2020/'+link_city+'/mer">Програма</a></td></tr>'
                 } else {
                     text += '<td class="position"><a target="_blank" href="'+link_cvk+'">Програма</a></td></tr>'
                 }
                 
             } else if (f == 0 || filter[f].party != filter[f-1].party) {
                 var rowspan = filter.filter(d => d['party'] == filter[f].party).length;
                 text += '<tr class="position"><td style="text-align: center;" rowspan='+rowspan+'>'+party+'</td>'
                 text += '<td style="text-align: center;" rowspan='+rowspan+'><a target="_blank" href="https://www.centreua.org/vybory2020/'+link_city+'/rada">Програма</a></td>'
                 text += '<td>'+filter[f].tvo_num+'</td>'
                 text += '<td class="position">'+filter[f].name+'</td>'
                 //text += '<td class="position"><a target="_blank" href="https://www.centreua.org/vybory2020/'+link_city+'/rada">Програма</a></td></tr>'  
             }  else {
                 text += '<tr class="position"><td>'+filter[f].tvo_num+'</td>'
                 text += '<td class="position">'+filter[f].name+'</td></tr>'
                 /* if (name != 'mer'){
                     text += '<td class="position"><a target="_blank" href="https://www.centreua.org/vybory2020/'+link_city+'/rada">Програма</a></td></tr>'
                 } else {
                     text += '</tr>'
                 } */
             }  
             
         }
         text += '</table>'
         var cont = document.getElementById('cont')
         cont.innerHTML += text
     }

     var splited_id = idd.split('_');        
     
     var сity_place = city_replace.filter(d => d['id'] == splited_id[0].replace('c',''))[0].name;
     var text = '<div class="first_text">Місто: ' + сity_place + '</div>'
     text += '<div class="first_text">Район: ' + rayon_replace.filter(d => d['id'] == splited_id[3].replace('r',''))[0].name + '</div>'
     text += '<div class="first_text">Територіальний виборчий округ: ' + splited_id[1].replace('m','') + '</div>'
     text += '<div class="first_text">Дільниця №' + splited_id[2].replace('d','') + '</div>'
     text += '<div class="title">Бюлетень №1: кандидати у мери</div>'
     if (mer_data == null) {
         var mer_data = getValue('mer_candidates');
     }
     makeTable(mer_data,'mer')
     text += '<div class="title"><button id="miski">Бюлетень №2: кандидати до міської ради</button></div>'
     if (miski_data == null) {
         var miski_data = getValue('miski_candidates');
     }
     makeTable(miski_data,'miski')
     if (splited_id[0].replace('c','') != 4) {
         text += '<div class="title"><button id="rayon">Бюлетень №3: кандидати до районної ради</button></div>'
         if (rayon_data == null) {
             var rayon_data = getValue('rayon_candidates');
         }
         makeTable(rayon_data,'rayon')
         text += '<div class="title"><button id="oblasni">Бюлетень №4: кандидати до обласної ради</button></div>'
         if (oblasne_data == null) {
             var oblasni_data = getValue('oblasni_candidates');
         }
         makeTable(oblasni_data,'oblasni')
     } 
     
     var cont = document.getElementById('cont')
     cont.innerHTML = text
     
     modal.style.display = "block";

     
     $('#miski').on('click',function() {
         toggle('miski_table')
     })
     $('#rayon').on('click',function() {
         toggle('rayon_table')
     })
     $('#oblasni').on('click',function() {
         toggle('oblasni_table')
     })
     //});
 }
 var random = '<div class="row">';
 for (r=0;r<4;r++) {
     randomOutput(data[getRandomArbitrary()])
 }
 random += '</div>';
 $('#filter-records').html(random);
 $('.well').on('click', function() {
     showModal($(this)[0].id);
 });
 
 
 $('#txt-search').keyup(function(){
     function makeOutput (val,search) {
         var place = ''
         var regex_replace = new RegExp(searchField,'i')
         var city_place = city_replace.filter(d => d['id'] == val.city)[0].name;	
         var rayon_place = rayon_replace.filter(d => d['id'] == val.rayon)[0].name

         var regex1 = new RegExp('\\S+\\s?\\'+searchField+'\\s?\\S+?', "i");
         
         output += '<div id="c'+val.city+'_m'+val.miske+'_d'+val.dil+'_r'+val.rayon+'" class="well"><div><div class="okrug">' + city_place +  '</div>';

         if (search == 0) {
             var regex_rayon = new RegExp(searchField.trim(), "i");
             var sl = rayon_place.search(regex_rayon)
             if (sl != -1) {
                 var word = rayon_place.slice(sl,rayon_place.length)
                 var word = word.replace(regex_replace,'<span style="background-color: #ffecb3;text-transform:capitalize;">'+ searchField + '</span>')
                 output += '<div class="district"><img style="width: 8px; padding-right: 2px;" src="point.png"> ' + word + '</div>';
             } 
             output += '<div class="district">Дільниця №' + val.dil + '</div>';
             output += '<div class="district"><img style="width: 8px; padding-right: 2px;" src="point.png"> ' + val.place.split(/,|:|;/)[0] + '</div>';
         } else if (search == 1) {
             output += '<div class="district" style="background-color: #ffecb3;"><img style="width: 8px; padding-right: 2px;" src="point.png"> ' + rayon_place + '</div>';
             output += '<div class="district">Дільниця №' + val.dil + '</div>';
             var regex_rayon_split = new RegExp(searchField.split('район ')[1], "i");
             //var new_sl = val.place.search(regex_rayon_split)
             var sl = val.place.search(regex_rayon_split)
             if (sl != -1) {
                 var word = val.place.slice(sl,val.place.length)
                 console.log(word)
                 var word = word.replace(regex_replace,'<span style="background-color: #ffecb3;text-transform:capitalize;">'+ searchField + '</span>')
                 
                 output += '<div class="district"><img style="width: 8px; padding-right: 2px;" src="point.png"> ' + word + '</div>';
             } 
         } else {
             output += '<div class="district"><img style="width: 8px; padding-right: 2px;" src="point.png"> ' + rayon_place + '</div>';
             output += '<div class="district">Дільниця №' + val.dil + '</div>';
             
             var sl = val.place.search(regex1)
             if (sl != -1) {
                 var word = val.place.slice(sl,val.place.length).split(/,|:|;/)[0]
                 var word = word.replace(regex_replace,'<span style="background-color: #ffecb3;text-transform:capitalize;">'+ searchField.split(/,|:|;/)[0] + '</span>')
                 output += '<div class="district"><img style="width: 8px; padding-right: 2px;" src="point.png"> ' + word + '</div>';
             } 
             
         }

         output += '</div></div>';
         return output
     }

         var searchField = $(this).val();
         var regex = new RegExp(searchField.trim(), "i");
         if(searchField == '')  {
             $('#filter-records').html('<p>Такой улицы или района нет в базе ЦИК. Попробуйте другой запрос</p>');
             return;
         }
         
         var output = '<div class="row">';
         var count = 1;
         $.each(data, function(key, val){
             var rayon_place = rayon_replace.filter(d => d['id'] == val.rayon)[0].name
               if (rayon_place.search(regex) != -1) {
                 makeOutput(val,0)
             }
             if (searchField.includes('район ') && val.place.search(new RegExp(searchField.split('район ')[1], "i")) != -1) {
                 makeOutput(val,1)
             }
         });
         $.each(data, function(key, val){
             var regex3 = new RegExp(searchField, "i");
             if ((val.place.search(regex3) != -1)) {
                 var a = val.place.split(';')
                 var a = a.filter(d => d.toLowerCase().includes(searchField))
                 var a = a.map(d => d.replace(new RegExp('^\\,\\s'),''))
                 for (v=0;v<a.length;v++) {
                     if (a[v].includes(', ')) {
                         var a = a.map(d => d.replace(', ',';'+searchField+': '))
                     }
                     if (a[v].includes('–')) {
                         var c = a[v].split(';')
                         for (x=0;x<c.length;x++) {
                             if ((c[x].includes('–'))) {
                                 var slash = new RegExp('\\d+?\\/?\\d+\\–\\d+\\/?\\d+?', "i");
                                 if ((c[x].match(slash) != null)&&(c[x].match(slash)[0].split('–')[0]!=c[x].match(slash)[0].split('–')[1])) {
                                     var splited = c[x].match(slash)[0].split('–')
                                     if (splited[0].includes('/')) {
                                         var ifslash1 =';'+ searchField+': '+splited[0]
                                         var sp1 = parseInt(splited[0].split('/')[0])+1
                                     } else {
                                         var ifslash1 = ''
                                         var sp1 = parseInt(splited[0])
                                     }
                                     if (splited[1].includes('/')) {
                                         var ifslash2 = ';'+searchField+': '+splited[1]
                                         var sp2 = parseInt(splited[1].split('/')[0])-1
                                     } else {
                                         var ifslash2 = ''
                                         var sp2 = parseInt(splited[1])
                                     }
                                     a[v] = range(sp1,sp2).join(';'+searchField+': ')+ifslash1+ifslash2
                                 }
                             }
                         }
                     }
                 }
                 makeOutput(val,a.join('; ').trim())
             } 
         });
         
           output += '</div>';
           $('#filter-records').html(output);
           $('.well').on('click', function() {
                 showModal($(this)[0].id);
             });
           
     });  
     
     var span = document.getElementsByClassName('close')[0];
     span.onclick = function() {
       modal.style.display = "none";
     }
     window.onclick = function(event) {
       if (event.target == modal) {
         modal.style.display = "none";
       }
     }