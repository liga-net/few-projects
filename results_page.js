if(document.createStyleSheet) {
    document.createStyleSheet('https://www.liga.net/files/general/few_projects/new_results_page.css');
   }
   else {
    var styles = "@import url('https://www.liga.net/files/general/few_projects/new_results_page.css');";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
   }
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
   {"name":"Transcarpathia", "tr": "Закарпатская"},
   {"name":"Volyn", "tr": "Волынская"},
   {"name":"Cherkasy", "tr": "Черкасская"},
   {"name":"Kirovohrad", "tr": "Кировоградская"},
   {"name":"Kiev", "tr": "Киевская"},
   {"name":"Mykolayiv", "tr": "Николаевская"},
   {"name":"Vinnytsya", "tr": "Винницкая"}];
function numberWithSpaces(x) {
return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
function makeTable(scraped, num) {
var table = document.getElementById('tablecoro'+String(num));
var tr = document.createElement('tr');
if (num == 1) {
var fillValue = scraped.filter(a=>a['gsx$lat']['$t']!='')
tr.innerHTML = '<th style="text-align:left;">Населенный пункт</th>' +
                           '<th>Заболевших</th>' ;
} else if (num ==2 ){
var fillValue = scraped.filter(a=>a['gsx$lat']['$t']=='')
tr.innerHTML = '<th style="text-align:left;">Регион</th>' +
                           '<th>Заболевших</th>';
} else {
var fillValue = scraped
tr.innerHTML = '<th style="text-align:left;">Страна</th>' +
                           '<th>Заболевших</th>'+
                           '<th>Выздоровевших</th>'+
                           '<th>Смертей</th>';;
}
table.appendChild(tr);

for (r=0;r < fillValue.length; r++) {
var tr = document.createElement('tr');
if (r>10) {
   var clas = 'tablerow'+String(num);
} else {
   var clas = 'norm'
}
tr.className = clas
if (num == 1) {
   tr.innerHTML = '<td>' + fillValue[r]['gsx$name']['$t'] + '</td>' +
               '<td>' + numberWithSpaces(fillValue[r]['gsx$con']['$t']) + '</td>' 
} else if (num ==2 ){
   tr.innerHTML = '<td>' + fillValue[r]['gsx$name']['$t'] + '</td>' +
                               '<td>' + numberWithSpaces(fillValue[r]['gsx$con']['$t']) + '</td>'
} else {
   tr.innerHTML = '<td>' + fillValue[r]['gsx$name']['$t'] + '</td>' +
       '<td>' + numberWithSpaces(fillValue[r]['gsx$sumofconfirmed']['$t']) + '</td>'+
       '<td>' + numberWithSpaces(fillValue[r]['gsx$sumofrecovered']['$t']) + '</td>'+
       '<td>' + numberWithSpaces(fillValue[r]['gsx$sumofdeaths']['$t']) + '</td>'
}
table.appendChild(tr);

}
}
function makeDetailedMap() {
$.getJSON('https://spreadsheets.google.com/feeds/list/1JP_lGHOwvob1GIn2Ot5kj2_SziENBGh6Jew--gaQPs4/3/public/values?alt=json', function(data) {
var scraped = data['feed']['entry']
makeTable(scraped,1)
makeTable(scraped,2)
var shvl = [];
var ukr = [];
for (s=0;s<scraped.length;s++) {
   if (scraped[s]['gsx$lat']['$t'] != '') {
       shvl.push({
           name: scraped[s]['gsx$name']['$t'],
           lat: parseFloat(scraped[s]['gsx$lat']['$t']),
           lon: parseFloat(scraped[s]['gsx$lon']['$t']),
           z: parseFloat(scraped[s]['gsx$con']['$t'])
       });
   } else {
       ukr.push({
           name: scraped[s]['gsx$name']['$t'],
           z: parseFloat(scraped[s]['gsx$con']['$t'])
       });
   }
}

Highcharts.mapChart('mainDetailedmap', {
   chart: {
       type: 'map',
       map: 'countries/ua/ua-all',
       style: {
           fontFamily: 'Roboto'
       }
   },
   title: {
       text: 'Коронавирус: в каких городах подтвердились случаи'
   },
   subtitle: {
       text: ''
   },
   credits: {
       enabled: false
   },
   mapNavigation: {
       enableButtons: true
   },
   tooltip: {
       pointFormatter: function(){
           return this.name+": "+this.z
       }
   },
   legend: {
       title:{
           text:'Количество заболевших'
       },
       bubbleLegend: {
           enabled: true
       }
   },
   series: [{
       name: 'Basemap',
       borderColor: '#A0A0A0',
       nullColor: '#eceff1',
       showInLegend: false,
       dataLabels: {
           enabled: true,
           color: 'black',
           formatter: function(){
               var name = this.point.name
               var finalName = translate.filter(a=>a.name==name)[0].tr
               return finalName+': '+ukr.filter(a=>a.name==finalName)[0].z
           }
       }
   },{
       type: 'mapbubble',
       minSize: 3,
       maxSize:'10%',
       color:'#009688',
       name: 'Количество заболевших',
       showInLegend: false,
       dataLabels: {
           enabled: false
       },
       data: shvl
   }]
});
})
}
function makeMainMap(type) {
$.getJSON('https://spreadsheets.google.com/feeds/list/1JP_lGHOwvob1GIn2Ot5kj2_SziENBGh6Jew--gaQPs4/2/public/values?alt=json', function(data) {
var scraped = data['feed']['entry']
var stan2 = [];
var cityname = '<span style="font-weight: bold; font-size: 14px;">{point.name}</span><br>'
if (type == 4) {
   var col = '#e53935'
   var value0 = 'diagnos'
   var value01 = 'pid'
   var head = 'Количество заболевших по областям'
} else {
   var col = 'black'
   var value0 = 'death'
   var value01 = 'diagnos'
   var head = 'Количество погибших по областям'
}
var filtered = scraped.filter(sc => sc['gsx$code']['$t'] != '');
var filtered_data = filtered.map((p) => [p['gsx$code']['$t'],parseInt(p['gsx$'+value0]['$t'])])

Highcharts.mapChart('mainmap'+String(type), {
    chart: {
        map: 'countries/ua/ua-all'
    },
    title: {
        text: head
    },
    credits: {
        enabled: false
    },
    colorAxis: {
        visible: false,
        minColor: '#f5f5f5',
        maxColor:col
    },
    tooltip: {
        pointFormatter: function() {
            if (type == 4) {
                var dead_count = filtered.filter(sc => sc['gsx$code']['$t'] == this['hc-key'])[0]['gsx$death']['$t']
                var zabol = '<br>Заболевших: <span style="font-size: 14px;">'+this.value+'</span><br>'
                var dead = 'Смертей от коронавируса: <span style="font-size: 14px;">'+dead_count+'</span>'
            } else {
                var diag = filtered.filter(sc => sc['gsx$code']['$t'] == this['hc-key'])[0]['gsx$diagnos']['$t']
                var zabol = '<br>Заболевших: <span style="font-size: 14px;">'+diag+'</span><br>'
                var dead = 'Смертей от коронавируса: <span style="font-size: 14px;">'+this.value+'</span>'
            }
            return '<b>'+translate.filter(a=>a.name==this.name)[0].tr+"</b>:"+ zabol + dead
        }
    },
    series: [{
        borderColor: '#f5f5f5',
        borderWidth: 0.5,
        data: filtered_data,
        name: 'Коронавирус',
        dataLabels: {
            enabled: true,
            formatter: function() {
                return translate.filter(a=>a.name==this.point.name)[0].tr+': '+this.point.value
            }
        }
    }]
});
})
}
function makeLineChart() {
$.getJSON('https://spreadsheets.google.com/feeds/list/1JP_lGHOwvob1GIn2Ot5kj2_SziENBGh6Jew--gaQPs4/1/public/values?alt=json', function(data) {
var scraped = data['feed']['entry']
var filtered = scraped.filter(sc => sc['gsx$measurenames']['$t'] == 'Кількість підтверджених випадків');
var cat = []
for (p of filtered) {
    if (p['gsx$date']['$t'].split('/')[0] < 10) {
        cat.push(p['gsx$date']['$t'].split('/')[1]+'.0'+p['gsx$date']['$t'].split('/')[0])
    } else {
        cat.push(p['gsx$date']['$t'].split('/')[1]+'.'+p['gsx$date']['$t'].split('/')[0])
    }
}
var vyp = filtered.map((p) => parseFloat(p['gsx$measurevalues']['$t'].replace(' ','')))
var vyp = vyp.map(function(v,i) { 
   if (i != vyp.length) 
   return (v - vyp[i-1]); 
}); 
var filtered = scraped.filter(sc => sc['gsx$measurenames']['$t'] == 'Кількість одужань');
var pid = filtered.map((p) => parseFloat(p['gsx$measurevalues']['$t'].replace(' ','')))

var filtered = scraped.filter(sc => sc['gsx$measurenames']['$t'] == 'Кількість смертей');
var deaths = filtered.map((p) => parseFloat(p['gsx$measurevalues']['$t'].replace(' ','')))

Highcharts.chart('linechart', {
   chart: {
       type:'line',
       style: {
           fontFamily: 'Roboto'
       }
       
   },
   title: {
       text: 'Коронавирус: статистика выздоровлений и смертей в Украине'
   },
   subtitle: {
       text: 'Данные: Минздрав, ОПУ'
   },
   xAxis: {
       categories: cat,
   },
   credits: {
       enabled: false
   },
   plotOptions: {
       line: {
           dataLabels: {
               enabled: true,
               formatter: function() {
                   if (this.point.x % 2 == 0 && this.point.y > 2) {
                       return this.point.y
                   }
               }
           }
       }
   },
   yAxis: {
       title: {
           text: null
       }
   },
   series: [{
       name: 'Количество выздоровлений',
       color:'#009688',
       data: pid
   }, {
       name: 'Количество смертей',
       color:'black',
       data: deaths
   }]
});
Highcharts.chart('barchart', {
   chart: {
       type:'column',
       style: {
           fontFamily: 'Roboto'
       }
       
   },
   title: {
       text: 'Количество случаев выявления коронавируса в Украине, по дням'
   },
   subtitle: {
       text: 'Данные: Минздрав, ОПУ'
   },
   xAxis: {
       categories: cat,
   },
   credits: {
       enabled: false
   },
   plotOptions: {
       column: {
           dataLabels: {
               enabled: true,
               formatter: function() {
                   if (this.point.y > 1) {
                       return this.point.y
                   }
               }
           }
       }
   },
   yAxis: {
       title: {
           text: null
       }
   },
   series: [{
       name: 'Количество случаев',
       color:'#009688',
       data: vyp
   }]
});
})
}
function makeMainWorldMap() {
$.getJSON('https://spreadsheets.google.com/feeds/list/1JP_lGHOwvob1GIn2Ot5kj2_SziENBGh6Jew--gaQPs4/4/public/values?alt=json', function(data) {
var scraped = data['feed']['entry']
makeTable(scraped,3)
var worlddata = [];
for (s=0;s<scraped.length;s++) {
   worlddata.push({
       code: scraped[s]['gsx$code']['$t'],
       countryname: scraped[s]['gsx$name']['$t'],
       value: parseFloat(scraped[s]['gsx$sumofconfirmed']['$t']),
       death: parseFloat(scraped[s]['gsx$sumofdeaths']['$t']),
       recovered: parseFloat(scraped[s]['gsx$sumofrecovered']['$t'])
   });
}
Highcharts.mapChart('worldmap', {
   chart: {
       map: 'custom/world',
       style: {
           fontFamily: 'Roboto'
       }
   },
   title: {
       text: ''
   },
   subtitle: {
       text: ''
   },
   colorAxis: {
       min: 100,
       type: 'logarithmic',
       minColor: '#eeeeee',
       maxColor: '#b71c1c',
       stops: [
           [0, '#eeeeee'],
           [0.5, '#f44336'],
           [1, '#b71c1c']
       ]
   },
   mapNavigation: {enableButtons: true},
   legend: {
       enabled: false
   },
   credits: {
       enabled: false
   },
   series: [{
       name: 'Коронавирус в мире',
       joinBy: ['hc-key','code'],
       color:'#e53935',
       data: worlddata,
       dataLabels: {
           enabled: true,
           formatter: function() {
               if (this.point.value > 4000) {
                   return this.point.countryname+'<br>'+ numberWithSpaces(this.point.value)
               }
           }
       },
       tooltip: {
           pointFormatter: function(){
           return '<span style="font-size: 14px;">'+this.countryname+'</span>:<br>' +
                           '<span style="font-size: 14px;">'+numberWithSpaces(this.value)+'</span> заболевших<br>'+
                           '<span style="font-size: 14px;">'+numberWithSpaces(this.death)+'</span> погибших<br>'+
                           '<span style="font-size: 14px;">'+numberWithSpaces(this.recovered)+'</span> выздоровевших<br>' 
            } 
       }
   }]
});
})
}


makeDetailedMap()
makeMainMap(5)
makeLineChart()
makeMainWorldMap()
$(document).ready(function(){
$('#tablebutton2').on('click',function(){   
$('.tablerow2').toggle();
$('#tablebutton2').css('display','none')
});
$('#tablebutton1').on('click',function(){   
$('.tablerow1').toggle();
$('#tablebutton1').css('display','none')
});
$('#tablebutton3').on('click',function(){   
$('.tablerow3').toggle();
$('#tablebutton3').css('display','none')
});

});