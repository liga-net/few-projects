if(document.createStyleSheet) {
    document.createStyleSheet('https://cdn.jsdelivr.net/gh/liga-net/few-projects/1m_style.css');
   }
   else {
    var styles = "@import url('https://cdn.jsdelivr.net/gh/liga-net/few-projects/1m_style.css');";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
}
function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
function getData(id){
    var value = $.ajax({ 
        url: id, 
        async: false
    }).responseJSON;
    return value;
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
                                '<th>Смертей</th>';
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
            if (fillValue[r]['gsx$name']['$t']=='Київ'){
                var name = fillValue[r]['gsx$combined']['$t']
            } else {
                var name = fillValue[r]['gsx$name']['$t']
            }
            tr.innerHTML = '<td>' + name + '</td>' +
                    '<td>' + numberWithSpaces(fillValue[r]['gsx$con']['$t']) + '</td>' 
        } else if (num ==2 ){
            tr.innerHTML = '<td>' + fillValue[r]['gsx$combined']['$t'].split(',')[1] + '</td>' +
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
function makeJson(data) {
    var kyiv = 0,lat = [],lon = [];
    data.forEach(function(d) {
        if (d['gsx$name']['$t'] == 'Київ') {
            kyiv += parseFloat(d['gsx$con']['$t'])
            lat.push(parseFloat(d['gsx$lat']['$t']))
            lon.push(parseFloat(d['gsx$lon']['$t']))
        }
        var con = parseFloat(d['gsx$con']['$t'])
        if (con > 300 & d['gsx$name']['$t'] != 'Київ') {
            export_json.push({'type': "Feature", 'geometry':{
                'type': "Point", "coordinates":[parseFloat(d['gsx$lon']['$t']),parseFloat(d['gsx$lat']['$t'])]
                }, 
                'city': d['gsx$name']['$t'],
                'ill': con
            })
        }
    })
    export_json.push({type: "Feature", 'geometry':{
        'type': "Point", "coordinates":[lon[0],lat[0]]
        }, 
        'city': 'Київ',
        'ill': kyiv
    })
};
function makeMiskiMap(id,w) {
    if (w < 600) {
        var width = w,
        height = w/1.5,
        from = 0.003,
        to = 0.004,
        scale = w*4.4;
    } else {
        var width = 600,
        scale = 2800,
        from = 0.01,
        to = 0.015,
        height = 450;
    }   
    var albersProjection = d3.geoAlbers()
        .scale(scale)
        .rotate([-30.18,0])
        .center([0, 49.96])
        .translate( [width/2.2,height/3] );

    var geoPath = d3.geoPath()
        .projection(albersProjection);
    
    d3.select("#"+id+"_map").html('')

    var svg = d3.select("#"+id+"_map").append("svg")
        .attr("width", width)
        .attr("height", height);
    
        var g = svg.append("g");
    
    g.selectAll("path")
        .data(ukraine)
        .enter()
        .append("path")
        .attr("fill", "#eeeeee")
        .attr("stroke", "black")//#bdbdbd
        .attr("stroke-width", "0.5px")
        .attr("d", geoPath )
        .attr("class", "district");
    
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


    var radius = d3.scaleSqrt()
        .domain([0, from])
        .range([0, to]);
    
    var cities_mer = svg.append("g");  
        cities_mer.selectAll("circle")
            .data(export_json)
            .enter()
            .append("circle")
            .attr("fill", '#e57373')
            .attr("class", 'map_circle')
            .attr("r",function(d) { return radius(d.ill) })
            .attr("transform", function(d) { return "translate(" + geoPath.centroid(d) + ")"; })
            .attr("class", "dot")
            .on("mouseover", function(d) {
                tooltipBee.html(d.city+': '+numberWithSpaces(d.ill)+' заболевших')
                tooltipBee.style("visibility", "visible")
            })
            .on("mousemove", function() {
                return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
            })
            .on("mouseout", function(d){
                return tooltipBee.style("visibility", "hidden");
            });
    
}
function makeWorldMap(id,w) {
    if (w < 600) {
        var width = w,
        height = w/1.5,
        scale = 70;
    } else {
        var width = 600,
        scale = 110
        height = 450;
    }   
    var projection = d3.geoEquirectangular()
        .scale(scale)
        .translate([width / 2, height / 2]);

    var geoPath = d3.geoPath()
        .projection(projection);
    
    var color = d3.scaleThreshold()
        .domain([42969, 85938, 171875, 343750, 687500, 1375000, 2750000, 5500000, 11000000])
        .range(["rgb(255,247,236)","rgb(254,232,200)","rgb(253,212,158)","rgb(253,187,132)","rgb(252,141,89)","rgb(239,101,72)","rgb(215,48,31)","rgb(179,0,0)","rgb(127,0,0)"]);
    
    d3.select("#"+id+"_map").html('')

    var svg = d3.select("#"+id+"_map").append("svg")
        .attr("width", width)
        .attr("height", height);
    
        var g = svg.append("g");
    
    g.selectAll("path")
        .data(topojson.feature(world, world.objects.countries).features.filter(d => d.properties.admin != 'Antarctica'))
        .enter()
        .append("path")
        //.attr("fill", "#eeeeee" )
        .attr("fill", function(d) {
            var country = replaceCountry(d.properties.admin)
            if (country.length>0){
                return color(parseInt(country[0]['gsx$sumofconfirmed']['$t']))
            } else {
                return "#eeeeee" 
            }
        } )
        .attr("stroke", 'black')
        .attr("stroke-width", '0.5px')
        .attr("d", geoPath )
        .attr("class", "countries")
        .on("mouseover", function(d) {
            var country = replaceCountry(d.properties.admin)
            if (country.length>0){
                var country = country[0]
                tooltipBee.html(
                    '<h4>'+country['gsx$name']['$t']+'</h4>'+
                    '<p>Заболевших: '+numberWithSpaces(country['gsx$sumofconfirmed']['$t'])+'</p>'+
                    '<p>Выздоровевших: '+numberWithSpaces(country['gsx$sumofrecovered']['$t'])+'</p>'+
                    '<p>Погибших: '+numberWithSpaces(country['gsx$sumofdeaths']['$t'])+'</p>'
                )
            } else {
                tooltipBee.html('<h4>'+d.properties.admin+'</h4><p>Данных нет</p>')
            }
            tooltipBee.style("visibility", "visible")
            })
        .on("mousemove", function() {
            return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
        })
        .on("mouseout", function(d){
            return tooltipBee.style("visibility", "hidden");
        });
    
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
}
function makeBarChart(id,w) {
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
    var formatMillisecond = locale.format(".%L"),
        formatSecond = locale.format(":%S"),
        formatMinute = locale.format("%I:%M"),
        formatHour = locale.format("%I %p"),
        formatDay = locale.format("%a %d"),
        formatWeek = locale.format("%d %b"),
        formatMonth = locale.format("%b %Y"),
        formatYear = locale.format("%Y");

    function multiFormat(date) {
        return (d3.timeSecond(date) < date ? formatMillisecond
            : d3.timeMinute(date) < date ? formatSecond
            : d3.timeHour(date) < date ? formatMinute
            : d3.timeDay(date) < date ? formatHour
            : d3.timeMonth(date) < date ? (d3.timeWeek(date) < date ? formatDay : formatWeek)
            : d3.timeYear(date) < date ? formatMonth
            : formatYear)(date);
    }
    
    if (w < 600) {
        var start_width = w,
        start_height = w/1.5;
    } else {
        var start_width = 600,
        start_height = 400;
    }   
    if (id == 'pid') {
        var json = pid_count
        var plusMax = 1000
        var color = '#e57373'
        var tooltipText = ' заболевших за сутки</p>'
        var title = 'Количество выявленных заболевших COVID-19 за день'
    } else {
        var json = death_count
        var plusMax = 50
        var color = '#455a64'
        var tooltipText = ' погибших за сутки</p>'
        var title = 'Количество погибших от COVID-19 за день'
    }

    var margin = {top: 30, right: 15, bottom: 40, left: 40},
        width = start_width - margin.left - margin.right,
        height = start_height - margin.top - margin.bottom;

    // append the svg object to the body of the page
    d3.select("#"+id+"_chart").html("")
    var svg = d3.select("#"+id+"_chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
    svg.append("text")
        .attr("x", (width / 2) - 20) 
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", '14px')
        .style("font-family", "sans-serif")
        .style('font-family','Circe')
        .text(title);

    var x = d3.scaleBand()
        .range([ 0, width ])
        .domain(date)
        .padding(0.2);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickValues(tickValues).tickSize(1)
        .tickFormat(locale.format("%d %b")))
        .selectAll("text")
    
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

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, d3.max(json)+plusMax])
        .range([ height, 0]);
    
    svg.append("g")
        .call(d3.axisLeft(y));
    
    var dayMonth = locale.format("%d %B")
    
    svg.selectAll("mybar")
    .data(json)
    .enter()
    .append("rect")
        .attr("x", function(d,i) { return x(date[i]); })
        .attr("y", function(d,i) { return y(json[i]); })
        .attr("width", x.bandwidth())
        .attr("height", function(d,i) { return height - y(json[i]); })
        .attr('class','every_day')
        .attr("fill", color)
        .on("mouseover", function(d,i) {
            tooltipBee.html('<p>'+dayMonth(date[i])+':</p><p>'+d+tooltipText)
            tooltipBee.style("visibility", "visible")
        })
        .on("mousemove", function() {
            return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
        })
        .on("mouseout", function(d){
            return tooltipBee.style("visibility", "hidden");
        })
    svg.selectAll("mybar")
        .data(json)
        .enter()
        .append("svg:text")
        .text(function(d,i){
            if (id == 'pid') {
                if (i == json.length-1) {
                    return d
                } else if (start_width >= 600 && i > 100 && d / json[i-1] >= 1.20) {
                    return d
                } 
            } else {
                if (i == json.length-1) {
                    return d
                } else if (start_width >= 600 && i > 100 && d / json[i-1] >= 1.40) {
                    return d
                }
            }
        })
        .attr("x", function(d,i) { return x(date[i]); })
        .attr("y", function(d,i) { return y(d)-10})
        .attr("text-anchor","middle")
        .attr('font-family','Circe')
        .attr('fill','black')
        .attr('font-size','8px');
}
function makeCovidStat(value) {
    var pid = corona.filter(d => d['gsx$measurenames']['$t'] == value)
    var pid_count = pid.map(d => parseFloat(d['gsx$measurevalues']['$t']))
    var pid_count = pid_count.map(function(d,i) {
        if (i != pid_count.length-1) {
            return pid_count[i+1] - d
        }
    })
    var pid_count = pid_count.slice(0,pid_count.length-1)
    return pid_count
}
function replaceCountry(k) {
    var country = world_data.filter(d => d['gsx$countryregion']['$t'] == k)
    if (country.length == 0) {
        var replaced = k.replace('Democratic Republic of the Congo','Congo (Kinshasa)')
                    .replace('Republic of Congo','Congo (Brazzaville)')
                    .replace('Czech Republic','Czechia')
                    .replace('South Korea','Korea, South')
                    .replace('Macedonia','North Macedonia')
                    .replace('Myanmar','Burma')
                    .replace('Republic of Serbia','Serbia')
                    .replace('Taiwan','Taiwan*')
                    .replace('United Republic of Tanzania','Tanzania')
                    .replace('United States of America','US')
        var country = world_data.filter(d => d['gsx$countryregion']['$t'] == replaced)
    }
    return country
}
function makeLeftBarChart(id,w) {
    if (w < 600) {
        var start_width = w,
        start_height = 600;
        var margin = {top: 50, right: 10, bottom: 70, left: 60},
        width = start_width - margin.left - margin.right,
        height = start_height - margin.top - margin.bottom;
    } else {
        var start_width = 600,
        start_height = 750;
        var margin = {top: 50, right: 10, bottom: 70, left: 190},
        width = start_width - margin.left - margin.right,
        height = start_height - margin.top - margin.bottom;
    } 
    d3.select("#"+id+"_chart").html('')
    var date = ['0-9','10-19','20-29','30-39','40-49','50-59','60-69','70-79','80-89','90+']
    if (id =='confirmed') {
        var json = [17616,40887,98763,179769,188210,215776,172704,65715,20090,1569]
        var percent = [2,4,10,18,19,22,17,7,2,0]
        var title = 'Возраст заболевших COVID-19 в Украине'
    } else {
        var json = [6,18,67,286,817,2504,5380,5023,2997,297]
        var percent = [0,0,0.1,0.2,0.4,1.2,3.1,7.6,14.9,18.9]
        var title = 'Возраст погибших COVID-19 в Украине'
    }
    
    // append the svg object to the body of the page
    var svg = d3.select("#"+id+"_chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
    svg.append("text")
        .attr("x", 130) 
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", '14px')
        .style("font-family", "sans-serif")
        .style('font-family','Circe')
        .text(title);
        var x = d3.scaleLinear()
            .domain([0, d3.max(json)+1000])
            .range([ 0, width]);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end");
    
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

    // Add Y axis
    var y = d3.scaleBand()
        .range([ 0, height ])
        .domain(date)
        .padding(.1);
    svg.append("g")
        .call(d3.axisLeft(y))
        .attr('font-size','16px')
        .attr('font-family','Circe');
    
    var formatTime = d3.timeFormat("%d %B");
    
    svg.selectAll("mybar")
    .data(json)
    .enter()
    .append("rect")
        .attr("y", function(d,i) { return y(date[i]); })
        .attr("x", x(0) )
        .attr("width", function(d,i) { return x(json[i])})
        .attr("height", y.bandwidth())
        .attr('class','every_day')
        .attr("fill", "#d32f2f")
        .on("mouseover", function(d,i) {
            if (id == 'confirmed') {
                var add = '% от общего кол. заболевших'
            } else {
                var add = '% от кол. заболевших в этой возрастной группе'
            }
            tooltipBee.html('<p>'+date[i]+' лет:</p><p>'+numberWithSpaces(json[i])+' человек или '+ String(percent[i])+add)
            tooltipBee.style("visibility", "visible")
        })
        .on("mousemove", function() {
            return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
        })
        .on("mouseout", function(d){
            return tooltipBee.style("visibility", "hidden");
        })
    svg.selectAll("mybar")
        .data(json)
        .enter()
        .append("svg:text")
        .text(function(d,i){
            if (id == 'confirmed') {
                if (i >1&& i < 8){
                    return String(numberWithSpaces(d)) + ' ('+String(percent[i])+'%)'
                } 
            } else {
                if (i >4&& i < 9){
                    return String(numberWithSpaces(d)) + ' ('+String(percent[i])+'%)'
                } 
            }
        })
        .attr("y", function(d,i) { return y(date[i])+30; })
        .attr("x", function(d,i) { return x(json[i])-50; })
        .attr("text-anchor","middle")
        .attr('font-family','Circe')
        .attr('fill','white')
        .attr('font-size','16px');
    }
var parseDate = d3.timeParse("%m/%d/%Y");

var ukraine = getData('https://cdn.jsdelivr.net/gh/liga-net/few-projects/local_elections/ukraine.json').features;
var export_json = []
var cities = getData('https://spreadsheets.google.com/feeds/list/1JP_lGHOwvob1GIn2Ot5kj2_SziENBGh6Jew--gaQPs4/14/public/values?alt=json')['feed']['entry'];

var corona = getData('https://spreadsheets.google.com/feeds/list/1JP_lGHOwvob1GIn2Ot5kj2_SziENBGh6Jew--gaQPs4/1/public/values?alt=json')['feed']['entry'];
var pid_count = makeCovidStat('Кількість підтверджених випадків')
var death_count = null
//var death_count = makeCovidStat('Кількість смертей')
var pid = corona.filter(d => d['gsx$measurenames']['$t'] == 'Кількість підтверджених випадків')
var date = pid.map(d => parseDate(d['gsx$date']['$t']));
var date = date.slice(1,date.length)
var tickValues = date.filter(function(d,i) {if (i%30 == 1) {return d}})
/* var world = getData('world-topo.json')
var world_data = getData('https://spreadsheets.google.com/feeds/list/1JP_lGHOwvob1GIn2Ot5kj2_SziENBGh6Jew--gaQPs4/4/public/values?alt=json')['feed']['entry'];
var all_countries = topojson.feature(world, world.objects.countries).features
var all_countries = all_countries.map(d => d.properties.admin) */
var no_match = []
makeJson(cities)
makeMiskiMap('cities',window.innerWidth)
//makeTable(cities,1)
//makeTable(world_data,3)
//makeWorldMap('world',window.innerWidth)
makeBarChart('pid',window.innerWidth) 
makeLeftBarChart('confirmed',window.innerWidth)
makeLeftBarChart('death',window.innerWidth)
//makeBarChart('death',window.innerWidth) 
window.onresize = function(event) {
    makeMiskiMap('cities',window.innerWidth)
    makeBarChart('pid',window.innerWidth) 
    makeLeftBarChart('confirmed',window.innerWidth)
    makeLeftBarChart('death',window.innerWidth)
};