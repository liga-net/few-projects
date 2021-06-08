function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
const reducer = (accumulator, currentValue) => accumulator + currentValue;
function makeChoroplethMap() {
    var width = 150,
        height = width/1.3,
        scale = width*4.4

    var albersProjection = d3.geoAlbers()
        .scale(scale)
        .rotate([-30.68,0])
        .center([0, 50.12])
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
    fetch(config[4].url+todayDateFormat(today))
        .then(response => response.json())
        .then(responseJson => prepareAndDraw(responseJson))
        .catch((error) => {
            console.error('Error prepareAndDraw:', error);
            var yesterday = new Date()
            yesterday.setDate(yesterday.getDate() - 1)
            fetch(config[4].url+todayDateFormat(yesterday))
                .then(response => response.json())
                .then(responseJson => prepareAndDraw(responseJson))
        })
    
    function prepareAndDraw(responseJson) {
    
        var zero = responseJson.ukraine.filter(d=> d.delta_confirmed == 0)
        
        var json = []
        responseJson.ukraine.forEach(function(d,i) {
            json.push({
                'region':d.label.uk,
                'confirmed':d.confirmed,
                'value':d.delta_confirmed
            })
        })

        var colorRange = ["rgb(255,245,240)", "rgb(254,224,210)", "rgb(252,187,161)", "rgb(252,146,114)", "rgb(251,106,74)", "rgb(239,59,44)", "rgb(203,24,29)", "rgb(165,15,21)", "rgb(103,0,13)"]
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
        
        fetch('https://cdn.jsdelivr.net/gh/liga-net/few-projects/local_elections/ukraine.json')
            .then(response => response.json())
            .then(ukraine => drawPath(ukraine))
        function drawPath (ukraine) {
            g.selectAll("path")
                .data(ukraine.features)
                .enter()
                .append("path")
                .attr("fill", function(d) {
                    if (d.properties.name == 'Автономна Республіка Крим'){
                        return '#cecece'
                    } else if (d.properties.name == 'Київська область'){
                        var items = json.filter(k => k.region == 'м. Київ')
                        if (items.length != 0) {
                            var value = items[0].value
                            return color(value)
                        } else {
                            return '#cecece'
                        }
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
                            var confirmed = items[0].confirmed
                            var html = '<h4>Киев</h4><p>Выявлено '+numberWithSpaces(value)+' заболевших</p>'+
                                        '<p>За все время: '+numberWithSpaces(confirmed)+' заболевших</p>'
                            
                            var items = json.filter(k => k.region == d.properties.name)
                            var value = items[0].value
                            var confirmed = items[0].confirmed
                            html += '<h4>'+d.properties['name:ru']+'</h4><p>Выявлено '+numberWithSpaces(value)+' заболевших</p>'+
                                    '<p>За все время: '+numberWithSpaces(confirmed)+' заболевших</p>'
                        } else {
                            var html = '<h4>'+d.properties['name:ru']+'</h4><p>Неизвестно</p>'
                        }
                        tooltipBee.html(html)
                    } else {
                        var items = json.filter(k => k.region == d.properties.name)
                        if (items.length != 0) {
                            var value = items[0].value
                            var confirmed = items[0].confirmed
                            var html = '<h4>'+d.properties['name:ru']+'</h4><p>Выявлено '+numberWithSpaces(value)+' заболевших</p>'+
                                        '<p>За все время: '+numberWithSpaces(confirmed)+' заболевших</p>'
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
    {id: 'api-covid','url':'https://www.liga.net/files/general/data/coronavirus/10.json',
    table_ids:["date","ill_all","ill_day","dead_all","dead_day"]},
    {id: 'hospitalization','url':'https://www.liga.net/files/general/data/coronavirus/11.json',
    table_ids:["hosp_day"]},
    {id: 'hospitalization_all','url':'https://health-security.rnbo.gov.ua/api/beds/covid/ranking?bedType=total&regionId=&otgId=&aggLevel=regions&hospitalType=&date=',
        table_ids:['hosp_all']},
    {id: 'vaccination','url':'https://www.liga.net/files/general/data/coronavirus/12.json',
    table_ids:["vax_day",'vax_all']},
    {id: 'regions','url':'https://api-covid19.rnbo.gov.ua/data?to=',
    table_ids:['region0_day','region0_all','region0_text','region1_day','region1_all','region1_text','region2_day','region2_all','region2_text']}
]

function drawSparklines(id,data) { 
    if (window.innerWidth > 445) {
        var width = 50;
        var height = 50;
        var margin = {top: 15, right: 5, bottom: 5, left: 5 };
    } else {
        var width = 30;
        var height = 50;
        var margin = {top: 10, right: 5, bottom: 10, left: 5 };
    }
    const inner_width  = width - margin.left - margin.right;
    const inner_height = height - margin.top - margin.bottom;
    const x = d3.scaleLinear().domain([0, data.length]).range([0, inner_width]);
    const y = d3.scaleLinear().domain([0, d3.max(data)]).range([inner_height, 0]);
    d3.select('#'+id+'_spark').html('')
    const svg = d3.select('#'+id+'_spark')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    
    const line = d3.line()
        .x((d, i) => x(i))
        .y(d => y(d));
    
    var cell = svg.append('path').datum(data)
        .attr('fill', 'none')
        .attr('stroke', '#000000')
        .attr('stroke-width', 1)
        .attr('d', line)
        .text(function(d) { return d; });
    svg.append('circle')
        .attr('r', 2)
        .attr('cx', x(0))
        .attr('cy', y(data[0]))
        .attr('fill', '#000000');
    svg.append('circle')
        .attr('r', 2)
        .attr('cx', x(data.length - 1))
        .attr('cy', y(data[data.length - 1]))
        .attr('fill', '#000000');
}
function makeDailyStatistics(data) {
    var days = []
    data.map(function(d,i) {
        if (i < data.length-1) {
            days.push(data[i+1]-data[i])
        }
    })
    return days
}

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
        if (dict.id == 'api-covid') {
            var myDashboard = {
                "date":'Данные СНБО на '+dayMonth(new Date()),
                "ill_all":data.confirmed.slice(-1)[0],
                "ill_day_spark":makeDailyStatistics(data.confirmed.slice(-10)),
                "ill_day":data.confirmed.slice(-1)[0]-data.confirmed.slice(-2)[0],
                "dead_all":data.deaths.slice(-1)[0],
                "dead_day_spark":makeDailyStatistics(data.deaths.slice(-10)),
                "dead_day":data.deaths.slice(-1)[0]-data.deaths.slice(-2)[0]
            }
            
        } else if (dict.id == 'vaccination') {
            var vax_all = 0
            var vax_day = 0
            var keys = Object.keys(data.daily.cumulative)
            for (key of keys) {
                vax_all += data.daily.cumulative[key].slice(-1)[0]
                vax_day += data.daily.quantity[key].slice(-1)[0]
            }
            var vaccinesName = Object.keys(data.daily.quantity)
            var vaccinesName = vaccinesName.filter(d => data.daily.quantity[d].reduce(reducer) != 0 && d != 'AstraZeneca' )
            var json = data.daily.quantity.AstraZeneca
            var jsonData = []
            json.forEach(function(value,i) {
                var sum = value
                vaccinesName.forEach(function(vacName) {
                    sum += data.daily.quantity[vacName][i]
                })
                jsonData.push(sum)
            })
            
            var myDashboard = {
                "vax_day" : vax_day,
                "vax_day_spark": jsonData.slice(-10),
                "vax_all" : vax_all
            }
        }else if (dict.id == 'regions'){
            var regions_data = data.ukraine
            var regions_data = regions_data.sort(function(a, b){
                return a.delta_confirmed - b.delta_confirmed;
            })
            var zero = regions_data.filter(d=> d.delta_confirmed == 0)
            
            var amount = regions_data.length
            var myDashboard = {
                'region0_day':regions_data[amount-1].delta_confirmed,
                'region0_all':regions_data[amount-1].confirmed,
                'region0_text':regions_data[amount-1].label.uk.replace('м. ','').replace(' область',''),
                'region1_day':regions_data[amount-2].delta_confirmed,
                'region1_all':regions_data[amount-2].confirmed,
                'region1_text':regions_data[amount-2].label.uk.replace('м. ','').replace(' область',''),
                'region2_day':regions_data[amount-3].delta_confirmed,
                'region2_all':regions_data[amount-3].confirmed,
                'region2_text':regions_data[amount-3].label.uk.replace('м. ','').replace(' область',''),
            }
        } else if (dict.id == 'hospitalization'){
            var myDashboard = {
                "hosp_day":data.count.i1.slice(-1)[0],
                "hosp_day_spark":data.count.i1.slice(-10),
            } 
            
        } else if (dict.id == 'hospitalization_all') {
            var myDashboard = {
                'hosp_all':data.header.used[0]
            } 
        }
        dict.table_ids.forEach(function(id) {
            var value = numberWithSpaces(myDashboard[id])
            d3.select('#'+id).text(value)
            if (dict.id != 'regions' && id.includes('day') && window.innerWidth > 445) {
                drawSparklines(id,myDashboard[id+'_spark'])
            }
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
    config.forEach(function(dict){
        fillNumbers(dict)
    })
};