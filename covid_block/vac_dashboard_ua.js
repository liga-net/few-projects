function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
const reducer = (accumulator, currentValue) => accumulator + currentValue;
var locale = d3.timeFormatLocale({
    "dateTime": "%A, %e %B %Y г. %X",
    "date": "%d.%m.%Y",
    "time": "%H:%M:%S",
    "periods": ["AM", "PM"],
    "days": ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
    "shortDays": ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
    "months": ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
    "shortMonths": ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]
});
var dayMonth = locale.format("%d %B")
var todayDateFormat = d3.timeFormat("%Y-%m-%d");
var config = [
    {id: 'regions1','url':'https://www.liga.net/files/general/data/coronavirus/23.json',
    table_ids:[]},
    {id: 'regions2','url':'https://www.liga.net/files/general/data/coronavirus/24.json',
    table_ids:[]},
    {id: 'regions_cumulative1','url':'https://www.liga.net/files/general/data/coronavirus/25.json',
    table_ids:[]},
    {id: 'regions_cumulative2','url':'https://www.liga.net/files/general/data/coronavirus/26.json',
    table_ids:[]},
    {id: 'vaccination1','url':'https://www.liga.net/files/general/data/coronavirus/21.json',
    table_ids:["vax1_day",'vax1_all']},
    {id: 'vaccination2','url':'https://www.liga.net/files/general/data/coronavirus/22.json',
    table_ids:["vax2_day",'vax2_all']}
]
var population_regions = [{"ua":"Вінницька область", "pop":1522078, "name":"Вінницька"},
{"ua":"Волинська область", "pop":1025755, "name":"Волинська"},
{"ua":"Дніпропетровська область", "pop":3127604, "name":"Дніпропетровська"},
{"ua":"Донецька область", "pop":4088265, "name":"Донецька"},
{"ua":"Житомирська область", "pop":1189820, "name":"Житомирська"},
{"ua":"Закарпатська область", "pop":1247718, "name":"Закарпатська"},
{"ua":"Запорізька область", "pop":1658319, "name":"Запорізька"},
{"ua":"Івано-Франківська область", "pop":1357168, "name":"Івано-Франківська"},
{"ua":"Київська область", "pop":1787526, "name":"Київська"},
{"ua":"Кіровоградська область", "pop":914939, "name":"Кіровоградська"},
{"ua":"Луганська область", "pop":2115791, "name":"Луганська"},
{"ua":"Львівська область", "pop":2490037, "name":"Львівська"},
{"ua":"Миколаївська область", "pop":1102843, "name":"Миколаївська"},
{"ua":"Одеська область", "pop":2361656, "name":"Одеська"},
{"ua":"Полтавська область", "pop":1365518, "name":"Полтавська"},
{"ua":"Рівненська область", "pop":1146366, "name":"Рівненська"},
{"ua":"Сумська область", "pop":1047999, "name":"Сумська"},
{"ua":"Тернопільська область", "pop":1027431, "name":"Тернопільська"},
{"ua":"Харківська область", "pop":2622796, "name":"Харківська"},
{"ua":"Херсонська область", "pop":1012337, "name":"Херсонська"},
{"ua":"Хмельницька область", "pop":1238564, "name":"Хмельницька"},
{"ua":"Черкаська область", "pop":1172692, "name":"Черкаська"},
{"ua":"Чернівецька область", "pop":894579, "name":"Чернівецька"},
{"ua":"Чернігівська область", "pop":970858, "name":"Чернігівська"},
{"ua":"м. Київ", "pop":2953956, "name":"Київ"}]
var all_number = 0,
    all_today_number = 0,
    pfizer = 0,
    astra = 0,
    coronavac = 0,
    pfizerALL = 0,
    astraALL = 0,
    coronavacALL = 0,
    vacc_all = 0,
    iter = 0
function fillNumbers(dict) {
    if (window.innerWidth > 600) {
        var requestURL = dict.url
    } else {
        var requestURL = dict.url.replace('https://health','https://m-health')
    }
    var time = d3.timeFormat("%H");
    var today = new Date()
    if (requestURL.includes('data?to=')) {
        var requestURL = requestURL+todayDateFormat(today)
    }
    if (requestURL.includes('Type=&date=')) {
        var yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        var requestURL = requestURL+todayDateFormat(yesterday)
    }
    
    fetch(requestURL)
    .then(response => response.json())
    .then(data => run(dict,data))
    .catch((error) => {
        console.error('Error run Dashboard:', error);
    })

    function run(dict,data) {
        if (dict.id == 'vaccination1' || dict.id == 'vaccination2') {
            var vax_all = 0
            var vax_day = 0
            var keys = Object.keys(data.daily.cumulative)
            for (key of keys) {
                vax_all += data.daily.cumulative[key].slice(-1)[0]
                vax_day += data.daily.quantity[key].slice(-1)[0]
            }
            var vaccinesName = Object.keys(data.daily.quantity)
            var vaccinesName = vaccinesName.filter(d => data.daily.quantity[d].reduce(reducer) != 0 && d != 'AstraZeneca' && d != "SarsCov2_nRVv3")
            var json = data.daily.quantity.AstraZeneca
            var jsonData = []
            json.forEach(function(value,i) {
                var sum = value
                vaccinesName.forEach(function(vacName) {
                    sum += data.daily.quantity[vacName][i]
                })
                jsonData.push(sum)
            })
            vacc_all += vax_all

            all_today_number += vax_day
            all_number += vax_all
            if (iter == 0) {
                d3.select('#vax0_day').text(numberWithSpaces(all_today_number))
                d3.select('#vax0_all').text(numberWithSpaces(all_number))
                pfizer += data.daily.quantity['Pfizer-BioNTech'].slice(-1)[0]
                pfizerALL += data.daily.cumulative['Pfizer-BioNTech'].slice(-1)[0]
                d3.select('#Pfizer-BioNTech').text(numberWithSpaces(pfizer))
                var pfizer_percent = pfizerALL/vacc_all*100
                d3.select('#progress_bar_Pfizer-BioNTech').html('<div class="bar" style="height: 15px; width: '+pfizer_percent+'%; position: relative; background-color: rgb(0,68,27); left: 0%;"></div><span style="position: absolute;right: 4px;top: -4px;font-size: 11px; vertical-align: bottom;">'+Math.round(pfizer_percent)+'%</span>')

                astra += data.daily.quantity['AstraZeneca'].slice(-1)[0]
                astraALL += data.daily.cumulative['AstraZeneca'].slice(-1)[0]
                d3.select('#AstraZeneca').text(numberWithSpaces(astra))
                var astra_percent = astraALL/vacc_all*100
                d3.select('#progress_bar_AstraZeneca').html('<div class="bar" style="height: 15px; width: '+astra_percent+'%; position: relative; background-color: rgb(0,68,27); left: 0%;"></div><span style="position: absolute;top: -4px;right: 4px; font-size: 11px; vertical-align: bottom;">'+Math.round(astra_percent)+'%</span>')
                
                coronavac += data.daily.quantity['Sinovac (CoronaVac)'].slice(-1)[0]
                coronavacALL += data.daily.cumulative['Sinovac (CoronaVac)'].slice(-1)[0]
                d3.select('#SinovacBiotech').text(numberWithSpaces(coronavac))
                var coronavac_percent = coronavacALL/vacc_all*100
                d3.select('#progress_bar_SinovacBiotech').html('<div class="bar" style="height: 15px; width: '+coronavac_percent+'%; position: relative; background-color: rgb(0,68,27); left: 0%;"></div><span style="position: absolute;top: -4px;right: 4px; font-size: 11px; vertical-align: bottom;">'+Math.round(coronavac_percent)+'%</span>')
            }
            
            var dose = dict.id.replace('vaccination',''),
                tag_day = ["vax", dose, "_day"].join("")
                tag_all = ["vax", dose, "_all"].join("")

            var myDashboard = {}
            myDashboard[tag_day] = vax_day
            myDashboard[tag_all] = vax_all
            d3.select('#date'+dose).text(dayMonth(new Date()))
            
            var percent = vax_all/41442615*100
            d3.select('#progress_bar0'+dose).html('<div class="bar" style="height: 15px; width: '+percent+'%; position: relative; background-color: rgb(0,68,27); left: 0%;"></div><span style="position: absolute;top: -4px;right: 4px;font-size: 11px; vertical-align: bottom;">'+Math.round(percent)+'%</span>')
        } 
        if (dict.id == 'regions1' || dict.id == 'regions2') {
            var vac_regions = []

            population_regions.forEach(function(x,i) {
                var obj = data.data.filter(f => f.name == x.ua)[0]
                value = obj['AstraZeneca']+obj['Pfizer-BioNTech']+obj['Sinovac (CoronaVac)']+obj['Moderna']
                population_regions[i]['daily'+dict.id.replace('regions','')] = value
            })
        }
        if (dict.id == 'regions_cumulative1' || dict.id == 'regions_cumulative2') {
            var vac_regions = []
            population_regions.forEach(function(x,i) {
                var obj = data.data.filter(f => f.name == x.ua)[0]
                value = obj['AstraZeneca']+obj['Pfizer-BioNTech']+obj['Sinovac (CoronaVac)']+obj['Moderna']
                population_regions[i][dict.id.replace('regions_','')] = value
            })
        }
        var keys = Object.keys(population_regions[0])
        if (keys.includes('cumulative2')) {
            population_regions.forEach(function(x,i) {
                population_regions[i]['sum'] = population_regions[i]['daily1']+population_regions[i]['daily2']
                population_regions[i]['all'] = (population_regions[i]['cumulative1']+population_regions[i]['cumulative2'])/population_regions[i]['pop']*100
                population_regions[i]['per'] = Math.round(population_regions[i]['sum']/population_regions[i]['pop']*100000)
            })
            population_regions.sort(function(a, b) {
                return a.per < b.per;
            });
            var paste_id = ['name','per','all']
            paste_id.forEach(function(paste) {
                for (i=0;i<3;i++) {   
                    d3.select('#oblast_'+paste+i).text(String(population_regions[i][paste]).replace(' область',''))
                    if (paste == 'all') {
                        var percent = population_regions[i][paste]
                        d3.select('#progress_bar_oblast'+i).html('<div class="bar" style="height: 15px; width: '+percent+'%; position: relative; background-color: rgb(0,68,27); left: 0%;"></div><span style="position: absolute;top: -4px;right: 4px;font-size: 11px; vertical-align: bottom;">'+Math.round(percent)+'%</span>')
                    }
                    
                }
            })
            d3.select('#date3').text(dayMonth(new Date()))
            
        }
        dict.table_ids.forEach(function(id) {
            var value = numberWithSpaces(myDashboard[id])
            d3.select('#'+id).text(value)
            
            if (window.innerWidth < 445) {
                d3.select('#hosp_name').text('Госпитал.')
                d3.select('#vax_name').text('Вакцин.')
            }
            
        })
    }
}
config.forEach(function(dict){
    fillNumbers(dict)
})
window.onresize = function(event) {
    iter+=1
    config.forEach(function(dict){
        fillNumbers(dict)
    })
};