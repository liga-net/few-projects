function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
const reducer = (accumulator, currentValue) => accumulator + currentValue;
function makeChoroplethMap() {
    var width = 200,
        height = width/1.3,
        scale = width*4.4,
        from = 260827968,
        to = 14;

    var albersProjection = d3.geoAlbers()
        .scale(scale)
        .rotate([-30.68,0])
        .center([0, 50.52])
        .translate( [width/2.2,height/3] );

    var geoPath = d3.geoPath()
        .projection(albersProjection);
    
    d3.select("#ukraine_confirmed").html('')
    
    var svg = d3.select("#ukraine_confirmed").append("svg")
        .attr("width", width)
        .attr("height", height);

    var g = svg.append("g");
    
    var tooltipBee = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("z-index", "10")
        .style("visibility", "hidden")
        .style("padding", "14px")
        .style("background-color", "white")
        .style("border", "1px solid #f5f5f5")
        .style("color", "black")
        .style("border-radius", "6px")
        .style("border-color", "black")
        .style("font", "12px sans-serif")
        .text("tooltip");
    
    var today = new Date()
    fetch(config[0].url)
        .then(response => response.json())
        .then(responseJson => prepareAndDraw(responseJson))
        .catch((error) => {
            console.error('Error prepareAndDraw:', error);
        })
    
    function prepareAndDraw(responseJson) {
    
        var json = []
        responseJson.data.forEach(function(d,i) {
            json.push({
                'region':d.name,
                'value':d.AstraZeneca+d["Pfizer-BioNTech"]+d["Sinovac Biotech"]
            })
        })

        var colorRange = ["rgb(229,245,249)","rgb(204,236,230)","rgb(153,216,201)","rgb(102,194,164)","rgb(65,174,118)","rgb(35,139,69)","rgb(0,109,44)","rgb(0,68,27)"]
        var textColorRange = ["rgb(103,0,13)", "rgb(165,15,21)", "rgb(203,24,29)", "rgb(239,59,44)", "rgb(251,106,74)", "rgb(252,146,114)", "rgb(252,187,161)", "rgb(254,224,210)", "rgb(255,245,240)"]
        function makeColorRange(id) {
            return json.map(d => parseInt(d.value))
        }
        const range = (start, stop, step = 1) =>
            Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)
        function makeDomain(min, max, step) {
            return range(min, max, max/step)
        }
        var vax_values = makeColorRange()
        var color = d3.scaleThreshold()
            .domain(
                makeDomain(d3.min(vax_values),d3.max(vax_values),8)
            )
            .range(colorRange);
        
        var colorText = d3.scaleThreshold()
            .domain(
                makeDomain(d3.min(vax_values),d3.max(vax_values),8)
            )
            .range(textColorRange)

        fetch('https://cdn.jsdelivr.net/gh/liga-net/few-projects/local_elections/ukraine.json')
            .then(response => response.json())
            .then(ukraine => drawPath(ukraine))
        function drawPath(ukraine) {
            g.selectAll("path")
                .data(ukraine.features)
                .enter()
                .append("path")
                .attr("fill", function(d) {
                    if (d.properties.name == 'Автономна Республіка Крим'){
                        return '#cecece'
                    } else {
                        var items = json.filter(k => k.region == d.properties.name)
                        if (items.length != 0) {
                            var value = items[0].value
                            return color(value)
                        } else {
                            return '#cecece'
                        }
                    }        
                })
                .attr("stroke", "#f5f5f5")
                .attr("stroke-width", ".1px")
                .attr("d", geoPath )
                .attr("class", "district")
                .on("mouseover", function(d) {
                    if (d.properties.name == 'Автономна Республіка Крим'){
                        tooltipBee.html(
                            '<h4>'+d.properties['name:ru']+'</h4><p>Временно оккупированная территория РФ</p>'
                        )
                    } else if (d.properties.name == 'Київська область'){
                        var items = json.filter(k => k.region == 'м. Київ')
                        if (items.length != 0) {
                            var value = items[0].value
                            var html = '<h4>Киев</h4><p>Вакцинировано '+numberWithSpaces(value)+' человек 1 дозой</p>'
                            
                            var items = json.filter(k => k.region == d.properties.name)
                            var value = items[0].value
                            html += '<h4>'+d.properties['name:ru']+'</h4><p>Вакцинировано '+numberWithSpaces(value)+' человек 1 дозой</p>'
                        } else {
                            var html = '<h4>'+d.properties['name:ru']+'</h4><p>Неизвестно</p>'
                        }
                        tooltipBee.html(html)
                    } else {
                        var items = json.filter(k => k.region == d.properties.name)
                        if (items.length != 0) {
                            var value = items[0].value
                            var html = '<h4>'+d.properties['name:ru']+'</h4><p>Вакцинировано '+numberWithSpaces(value)+' человек 1 дозой</p>'
                        } else {
                            var html = '<h4>'+d.properties['name:ru']+'</h4><p>Неизвестно</p>'
                        }
                        tooltipBee.html(html)
                    }
                    var dist = d3.select(this)
                    dist.attr("stroke", "black")
                        .attr("stroke-width", "1.5px")
                    return tooltipBee.style("visibility", "visible")
                })
                .on("mousemove", function() {
                    return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
                })
                .on("mouseout", function(d){
                    var dist = d3.select(this)
                    dist.attr("stroke", "#f5f5f5")
                        .attr("stroke-width", ".1px")
                    return tooltipBee.style("visibility", "hidden");
                })
            }
    }
        
}
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
    {id: 'regions','url':'https://www.liga.net/files/general/data/coronavirus/20.json',
    table_ids:[]},
    {id: 'vaccination1','url':'https://www.liga.net/files/general/data/coronavirus/21.json',
    table_ids:["vax1_day",'vax1_all']},
    {id: 'vaccination2','url':'https://www.liga.net/files/general/data/coronavirus/22.json',
    table_ids:["vax2_day",'vax2_all']}
]
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
    /* if (window.innerWidth > 600) {
        var requestURL = dict.url
    } else {
        var requestURL = dict.url.replace('https://health','https://m-health')
    } */
    var requestURL = dict.url
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
                
                coronavac += data.daily.quantity['Sinovac Biotech'].slice(-1)[0]
                coronavacALL += data.daily.cumulative['Sinovac Biotech'].slice(-1)[0]
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
        dict.table_ids.forEach(function(id) {
            var value = numberWithSpaces(myDashboard[id])
            d3.select('#'+id).text(value)
            
            if (window.innerWidth < 445) {
                d3.select('#hosp_name').text('Госпитал.')
                d3.select('#vax_name').text('Вакцинир.')
            }
            
        })
    }
}
if (window.innerWidth > 445) {
    makeChoroplethMap()
}
config.forEach(function(dict){
    fillNumbers(dict)
})

window.onresize = function(event) {
    iter+=1
    config.forEach(function(dict){
        fillNumbers(dict)
    })
}

;