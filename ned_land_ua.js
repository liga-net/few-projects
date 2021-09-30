if(document.createStyleSheet) {
    document.createStyleSheet('https://cdn.jsdelivr.net/gh/liga-net/few-projects/fedor_covid.css');
   }
   else {
    var styles = "@import url('https://cdn.jsdelivr.net/gh/liga-net/few-projects/fedor_covid.css');";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
  }
  var countryInfo = [
    {"rus":"Чехия","ua":"Чехія","first":1522,"last":4455,"country":"Czech"},
{"rus":"Литва","ua":"Литва","first":390,"last":2220,"country":"Lithuania"},
{"rus":"Эстония","ua":"Естонія","first":282,"last":2417,"country":"Estonia"},
{"rus":"Латвия","ua":"Латвія","first":526,"last":4818,"country":"Latvia"},
{"rus":"Польща","ua":"Польща","first":1310,"last":6333,"country":"Polscha"},
{"rus":"Венгрия","ua":"Угорщина","first":1741,"last":3216,"country":"Hungary"},
{"rus":"Румыния","ua":"Румунія","first":1000,"last":3364,"country":"Romania"},
{"rus":"Болгария","ua":"Болгарія","first":1150,"last":4558,"country":"Bulgaria"},
{"rus":"Словакия","ua":"Словаччина","first":912,"last":1256,"country":"Slovakia"}]

var vaxData = [{"country":"Czech","date":0,"vac":1522},
{"country":"Czech","date":1,"vac":1561},
{"country":"Czech","date":2,"vac":1621},
{"country":"Czech","date":3,"vac":1625},
{"country":"Czech","date":4,"vac":1867},
{"country":"Czech","date":5,"vac":2375},
{"country":"Czech","date":6,"vac":2557},
{"country":"Czech","date":7,"vac":2807},
{"country":"Czech","date":8,"vac":2962},
{"country":"Czech","date":9,"vac":3253},
{"country":"Czech","date":10,"vac":3400},
{"country":"Czech","date":11,"vac":3825},
{"country":"Czech","date":12,"vac":4455},
{"country":"Lithuania","date":0,"vac":390},
{"country":"Lithuania","date":1,"vac":406},
{"country":"Lithuania","date":2,"vac":536},
{"country":"Lithuania","date":3,"vac":734},
{"country":"Lithuania","date":4,"vac":831},
{"country":"Lithuania","date":5,"vac":1075},
{"country":"Lithuania","date":6,"vac":971},
{"country":"Lithuania","date":7,"vac":1138},
{"country":"Lithuania","date":8,"vac":1605},
{"country":"Lithuania","date":9,"vac":1608},
{"country":"Lithuania","date":10,"vac":1883},
{"country":"Lithuania","date":11,"vac":2171},
{"country":"Lithuania","date":12,"vac":2220},
{"country":"Estonia","date":0,"vac":282},
{"country":"Estonia","date":1,"vac":583},
{"country":"Estonia","date":2,"vac":894},
{"country":"Estonia","date":3,"vac":1125},
{"country":"Estonia","date":4,"vac":1056},
{"country":"Estonia","date":5,"vac":1111},
{"country":"Estonia","date":6,"vac":1111},
{"country":"Estonia","date":7,"vac":1083},
{"country":"Estonia","date":8,"vac":1333},
{"country":"Estonia","date":9,"vac":1681},
{"country":"Estonia","date":10,"vac":2111},
{"country":"Estonia","date":11,"vac":2417},
{"country":"Latvia","date":0,"vac":526},
{"country":"Latvia","date":1,"vac":1001},
{"country":"Latvia","date":2,"vac":2183},
{"country":"Latvia","date":3,"vac":3786},
{"country":"Latvia","date":4,"vac":3552},
{"country":"Latvia","date":5,"vac":1940},
{"country":"Latvia","date":6,"vac":1015},
{"country":"Latvia","date":7,"vac":1503},
{"country":"Latvia","date":8,"vac":1804},
{"country":"Latvia","date":9,"vac":3287},
{"country":"Latvia","date":10,"vac":4144},
{"country":"Latvia","date":11,"vac":4818},
{"country":"Polscha","date":0,"vac":1310},
{"country":"Polscha","date":1,"vac":1464},
{"country":"Polscha","date":2,"vac":2051},
{"country":"Polscha","date":3,"vac":2388},
{"country":"Polscha","date":4,"vac":3210},
{"country":"Polscha","date":5,"vac":3668},
{"country":"Polscha","date":6,"vac":4083},
{"country":"Polscha","date":7,"vac":4333},
{"country":"Polscha","date":8,"vac":4833},
{"country":"Polscha","date":9,"vac":6150},
{"country":"Polscha","date":10,"vac":6333},
{"country":"Hungary","date":0,"vac":1741},
{"country":"Hungary","date":1,"vac":1771},
{"country":"Hungary","date":2,"vac":1853},
{"country":"Hungary","date":3,"vac":1927},
{"country":"Hungary","date":4,"vac":1987},
{"country":"Hungary","date":5,"vac":2221},
{"country":"Hungary","date":6,"vac":2403},
{"country":"Hungary","date":7,"vac":2416},
{"country":"Hungary","date":8,"vac":2544},
{"country":"Hungary","date":9,"vac":2880},
{"country":"Hungary","date":10,"vac":3216},
{"country":"Romania","date":0,"vac":1000},
{"country":"Romania","date":1,"vac":972},
{"country":"Romania","date":2,"vac":1408},
{"country":"Romania","date":3,"vac":1500},
{"country":"Romania","date":4,"vac":1727},
{"country":"Romania","date":5,"vac":1891},
{"country":"Romania","date":6,"vac":2182},
{"country":"Romania","date":7,"vac":3000},
{"country":"Romania","date":8,"vac":3182},
{"country":"Romania","date":9,"vac":3364},
{"country":"Bulgaria","date":0,"vac":1150},
{"country":"Bulgaria","date":1,"vac":1202},
{"country":"Bulgaria","date":2,"vac":1595},
{"country":"Bulgaria","date":3,"vac":1519},
{"country":"Bulgaria","date":4,"vac":1420},
{"country":"Bulgaria","date":5,"vac":2092},
{"country":"Bulgaria","date":6,"vac":2820},
{"country":"Bulgaria","date":7,"vac":2930},
{"country":"Bulgaria","date":8,"vac":3832},
{"country":"Bulgaria","date":9,"vac":4558},
{"country":"Slovakia","date":0,"vac":912},
{"country":"Slovakia","date":1,"vac":946},
{"country":"Slovakia","date":2,"vac":981},
{"country":"Slovakia","date":3,"vac":1017},
{"country":"Slovakia","date":4,"vac":1121},
{"country":"Slovakia","date":5,"vac":1211},
{"country":"Slovakia","date":6,"vac":1256}]
    const range = (start, stop, step = 1) =>
        Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)
    function makeDomain(min, max, step) {
        return range(min, max, max/step)
    }
    
    function makeChoroplethMap(id,w) {
if (w < 600) {
    var width = w,
    height = w/1.3,
    scale = w*4.4,
    from = 260827968,
    to = 14;
} else {
    var width = 600,
    scale = 2700,
    from = 260827968,
    to = 18,
    height = 450;
}

var albersProjection = d3.geoAlbers()
    .scale(scale)
    .rotate([-30.68,0])
    .center([0, 50.12])
    .translate( [width/2.2,height/3] );

var geoPath = d3.geoPath()
    .projection(albersProjection);

d3.select("#"+id).html('')

var svg = d3.select("#"+id).append("svg")
    .attr("width", width)
    .attr("height", height);
    if (width > 500) {
            var fontSize = '18px'
        } else {
            var fontSize = '16px'
        }
if (id == 'quantity') {
    var title = 'Кількість проданих земельних ділянок'
    var tooltipEnd = ' ділянок</p>'
} else if (id == 'square') {
    var title = 'Площа проданих земельних ділянок'
    var tooltipEnd = ' га</p>'
} else if (id == 'avgPrice') {
    var title = 'Середня ціна за 1 га'
    var tooltipEnd = ' грн за 1 га</p>'
}
svg.append("text")
    .attr("x", (width / 2) ) 
    .attr("y", 20)
    .attr("text-anchor", "middle")  
    .style("font-size", fontSize)
    .style("font-family", "Georgia")
    .text(title);
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
    
var json = [{"region":"Вінницька область", "quantity":1710, "square":3250.7,"avgPrice":36659.8},
{"region":"Волинська область", "quantity":1090, "square":1559.3,"avgPrice":26376.8},
{"region":"Дніпропетровська область", "quantity":1108, "square":4919.5,"avgPrice":29001.5},
{"region":"Донецька область", "quantity":283, "square":1253.6,"avgPrice":27920.3},
{"region":"Житомирська область", "quantity":943, "square":1460.8,"avgPrice":27193.1},
{"region":"Закарпатська область", "quantity":406, "square":890,"avgPrice":53472.4},
{"region":"Запорізька область", "quantity":476, "square":1958.2,"avgPrice":27328.7},
{"region":"Івано-Франківська область", "quantity":694, "square":266,"avgPrice":286813.8},
{"region":"Київська область", "quantity":1997, "square":2504,"avgPrice":260913.8},
{"region":"Кіровоградська область", "quantity":1460, "square":9071.3,"avgPrice":29536.8},
{"region":"Луганська область", "quantity":193, "square":891.8,"avgPrice":26604.3},
{"region":"Львівська область", "quantity":678, "square":533.8,"avgPrice":174915.5},
{"region":"Миколаївська область", "quantity":569, "square":2138.7,"avgPrice":23127.8},
{"region":"Одеська область", "quantity":346, "square":707.2,"avgPrice":48824.7},
{"region":"Полтавська область", "quantity":1984, "square":5215.4,"avgPrice":36661.1},
{"region":"Рівненська область", "quantity":543, "square":399.3,"avgPrice":80966.4},
{"region":"Сумська область", "quantity":1608, "square":2546.1,"avgPrice":24480.3},
{"region":"Тернопільська область", "quantity":694, "square":854,"avgPrice":43352.1},
{"region":"Харківська область", "quantity":1863, "square":7313.7,"avgPrice":33701.7},
{"region":"Херсонська область", "quantity":893, "square":4035.7,"avgPrice":21835.1},
{"region":"Хмельницька область", "quantity":1936, "square":3046.6,"avgPrice":40019.1},
{"region":"Черкаська область", "quantity":812, "square":1404.2,"avgPrice":34300.8},
{"region":"Чернівецька область", "quantity":415, "square":259.7,"avgPrice":63867.6},
{"region":"Чернігівська область", "quantity":999, "square":2024.2,"avgPrice":23292.5}]   
function makeColorRange(id) {
    return json.map(d => parseInt(d[id]))
}
var vax_values = makeColorRange(id)
var color = d3.scaleThreshold()
    .domain(
        makeDomain(d3.min(vax_values),d3.max(vax_values),8)
    )
    .range(["rgb(247,252,253)","rgb(229,245,249)","rgb(204,236,230)","rgb(153,216,201)","rgb(102,194,164)","rgb(65,174,118)","rgb(35,139,69)","rgb(0,109,44)","rgb(0,68,27)"]);

var colorText = d3.scaleThreshold()
    .domain(
        makeDomain(d3.min(vax_values),d3.max(vax_values),8)
    )
    .range(["rgb(0,68,27)","rgb(0,109,44)","rgb(35,139,69)","rgb(65,174,118)","rgb(62,88,82)","rgb(153,216,201)","rgb(204,236,230)","rgb(229,245,249)","rgb(247,252,253)"])

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
                var value = items[0][id]
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
                '<h4>'+d.properties['name:uk']+'</h4><p>Тимчасово окупована територія РФ</p>'
            )
        } else {
            var items = json.filter(k => k.region == d.properties.name)
            
            var html = '<h4>'+d.properties['name:uk']+'</h4><p>'+numberWithSpaces(items[0][id])+tooltipEnd
            tooltipBee.html(html)
        }
        var dist = d3.select(this)
        dist.attr("stroke", "#2c3555")
            .attr("stroke-width", "1.5px")
        return tooltipBee.style("visibility", "visible")
    })
    .on("mousemove", function() {
        return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
    })
    .on("mouseout", function(d){
        var dist = d3.select(this)
        dist.attr("stroke", "#2c3555")
            .attr("stroke-width", ".1px")
        return tooltipBee.style("visibility", "hidden");
    })
g.selectAll("text")
    .data(ukraine.features)
    .enter()
    .append("svg:text")
    .html(function(d,i){
        if (d.properties.name != 'Автономна Республіка Крим'){
            var items = json.filter(k => k.region == d.properties.name)
            if (items.length != 0) {
                var value = items[0][id]
                return numberWithSpaces(Math.round(value))
            }
        } 
    })
    .attr("x", function(d){
        return geoPath.centroid(d)[0];
    })
    .attr("y", function(d){
        if (d.properties['name:ru'] != 'Киевская область') {
            return geoPath.centroid(d)[1]+5;
        } else {
            return geoPath.centroid(d)[1]+20;
        }
        
    })
    .attr("text-anchor","middle")
    .attr('font-family','Arial')
    .attr('fill',function(d) {
        if (d.properties.name == 'Автономна Республіка Крим'){
            return 'white'
        } else {
            var items = json.filter(k => k.region == d.properties.name)
            if (items.length != 0) {
                var value = items[0][id]
                return colorText(value)
            }        
        } 
    })
    .attr('opacity','.9')
    .attr("font-size",'10px')
    
    //}
}
    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    
    var weeklyVax = [
    {"date":"2005-01-01","value":125},
{"date":"2006-01-01","value":131.8},
{"date":"2007-01-01","value":137.3},
{"date":"2008-01-01","value":180.8},
{"date":"2009-01-01","value":260.2},
{"date":"2010-01-01","value":295.8},
{"date":"2011-01-01","value":350.8},
{"date":"2012-01-01","value":539},
{"date":"2013-01-01","value":563.5},
{"date":"2014-01-01","value":727.6},
{"date":"2015-01-01","value":862},
{"date":"2016-01-01","value":1093.4},
{"date":"2017-01-01","value":1369},
{"date":"2018-01-01","value":1613.4},
{"date":"2019-01-01","value":2594},
{"date":"2020-01-01","value":3378}
]
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
    function multiFormat(date) {
        return (d3.timeSecond(date) < date ? formatMillisecond
            : d3.timeMinute(date) < date ? formatSecond
            : d3.timeHour(date) < date ? formatMinute
            : d3.timeDay(date) < date ? formatHour
            : d3.timeMonth(date) < date ? (d3.timeWeek(date) < date ? formatDay : formatWeek)
            : d3.timeYear(date) < date ? formatMonth
            : formatYear)(date);
    }
    var formatMillisecond = locale.format(".%L"),
        formatSecond = locale.format(":%S"),
        formatMinute = locale.format("%I:%M"),
        formatHour = locale.format("%I %p"),
        formatDay = locale.format("%a %d"),
        formatWeek = locale.format("%d %b"),
        formatMonth = locale.format("%b %Y"),
        formatYear = locale.format("%Y");
    function makeBarChart(w,uploaded_data,id) {
        if (w>600) {
            var windowW = 600
        } else {
            var windowW = w-20
        }
        // set the dimensions and margins of the graph
        var margin = {top: 60, right: 30, bottom: 70, left: 60},
            width = windowW - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;
        
        // append the svg object to the body of the page
        d3.select("#"+id).html('')
        var svg = d3.select("#"+id)
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");
        if (width > 500) {
            var tickValue = 7
            var fontSize = '18px'
            var titleMargin = 0
        } else {
            var tickValue = 6
            var fontSize = '16px'
            var titleMargin = 20
        }
        
        svg.append("text")
            .attr("x", (width / 2) - titleMargin) 
            .attr("y", 0 - (margin.top / 1.5))
            .attr("text-anchor", "middle")  
            .style("font-size", fontSize)
            .style("font-family", "Georgia")
            .text('Як змінювалась ціна на оренду с/г землі за 1 га');

    var parseDate = d3.timeParse("%Y-%m-%d");
    var formatDay = locale.format("%Y")
    var tickValues = uploaded_data.map(function(d) { return parseDate(d.date); }).filter(function(d,i) {
        if (i % 3 == 1) {
            return d
        }
        
    })
    var x = d3.scaleBand()
      .range([ 0, width ])
      .domain(uploaded_data.map(function(d) { return parseDate(d.date); }))
      .padding(0.2);

    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).tickValues(tickValues).tickFormat(formatDay))
      .selectAll("text")
        .style("text-anchor", "end");
    
    // Add Y axis
    var y = d3.scaleLinear()
      .domain([0, d3.max(uploaded_data.map(function(d) { return d.value; }))])
      .range([ height, 0]);
    svg.append("g")
      .call(d3.axisLeft(y));
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
    // Bars
    svg.selectAll("mybar")
      .data(uploaded_data)
      .enter()
      .append("rect")
        .attr("x", function(d) { return x(parseDate(d.date)); })
        .attr("y", function(d) { return y(d.value); })
        .attr("width", x.bandwidth())
        .attr("height", function(d) { return height - y(d.value); })
        .attr("fill","rgb(0,68,27)")
        .on("mouseover", function(d,i) {
            tooltipBee.html("<h4>"+formatDay(parseDate(d.date))+'</h4><p>'+numberWithSpaces(d.value)+' грн за 1 га</p>')
            tooltipBee.style("visibility", "visible")
            })
        .on("mousemove", function() {
            return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
        })
        .on("mouseout", function(d){
            return tooltipBee.style("visibility", "hidden");
        });
    svg.append("g").selectAll("text")
        .data(uploaded_data)
        .enter()
        .append("text")
        .attr("x", function(d) { return x(parseDate(d.date))+12; })
        .attr("y", function(d) { return y(d.value)-7; })
        .attr("text-anchor","middle")
        .attr('font-family','Circe')
        .attr('fill','black')
        .attr('font-size','10px')
        .text(function(d,i) {
            if (i % 2 == 0 && i != 0 ) {
                return numberWithSpaces(d.value)
            } else if (i == 15) {
                return numberWithSpaces(d.value)
            }
            
        });
} 

    function getData(id){
        var value = $.ajax({ 
            url: id+'.json', 
            async: false
        }).responseJSON;
        return value;
    }
    var ukraine = getData('https://cdn.jsdelivr.net/gh/liga-net/few-projects/local_elections/ukraine');
    //var places = getData('places');
    function makeTable() {
        d3.select("#table")
            .append("tbody")//position: sticky;
            .html("<tr><td class='left'>Країна</td><td>Ціна після лібералізації</td><td>Через 10 років</td><td></td></tr>")
            .selectAll('trd')
            .data(countryInfo)
            .enter()
            .append("tr")
            .html(function(d,i) {
                return '<td class="left">' + d.ua + '</td>'+
                        '<td>€' + numberWithSpaces(d.first) + '</td>'+
                        '<td>€' + numberWithSpaces(d.last) + '</td>'+
                        '<td class="chart"><div id="'+d.country.replace(' ','')+'"></div></td>'
            })
    }
    makeTable()
    var countries = countryInfo.map(d=>d.country)
    countries.forEach(function(country) {
        makeSmallBarChart(country)
    })
    //makeAreaChart('Albania')
    function makeSmallBarChart(country){
        var cell_width = d3.select('#'+country.replace(' ','')).node().offsetWidth
        if (cell_width == 0) {
            var cell_width = 150
        }
        var margin = {top: 0, right: 4, bottom: 15, left: 0},
            width = cell_width - margin.left - margin.right,
            height = 70 - margin.top - margin.bottom;
        
        var data = vaxData.filter(d=>d.country == country)
        var parseDate = d3.timeParse("%Y-%m-%d")
        var data = data.map(function(d) {
            return {date: d.date, vac: d.vac};
        });
    
        var svg = d3.select("#"+country.replace(' ',''))
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");
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
        var parseDate = d3.timeParse("%Y-%m-%d");
        var formatDay = locale.format("%Y")
        var tickValues = data.map(function(d) { return d.date; })

        var x = d3.scaleBand()
        .range([ 0, width ])
        .domain(data.map(function(d) { return d.date; }))
        .padding(0.2);

        svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickValues(tickValues))
        
        // Add Y axis
        var y = d3.scaleLinear()
        .domain([0, d3.max(data.map(function(d) { return d.vac; }))+1000])
        .range([ height, 0]);
        /* svg.append("g")
        .call(d3.axisLeft(y)); */
        function make_y_gridlines() {		
            return d3.axisLeft(y)
                .ticks(5)
        }
        svg.append("g")
            .attr('class','grid')
            .call(make_y_gridlines()
                .tickSize(-width)
                .ticks(5)
            )
        svg.selectAll('.grid line')
            .style('stroke','#eeeeee')
            .style('stroke-opacity','1')
            .style('shape-rendering','crispEdges')
        svg.selectAll('.domain')
            .style('opacity','0')
        // Bars
        svg.selectAll("mybar")
        .data(data)
        .enter()
        .append("rect")
            .attr("x", function(d) { return x(d.date); })
            .attr("y", function(d) { return y(d.vac); })
            .attr("width", x.bandwidth())
            .attr("height", function(d) { return height - y(d.vac); })
            .attr("fill","rgb(0,68,27)")
            .on("mouseover", function(d,i) {
                tooltipBee.html("<h4>"+d.date+' років після лібералізації</h4><p>€'+numberWithSpaces(d.vac)+' за 1 га</p>')
                tooltipBee.style("visibility", "visible")
                })
            .on("mousemove", function() {
                return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
            })
            .on("mouseout", function(d){
                return tooltipBee.style("visibility", "hidden");
            });
        svg.append("g").selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .attr("x", function(d) { return x(d.date)+9; })
            .attr("y", function(d) { return y(d.vac)-2; })
            .attr("text-anchor","middle")
            .attr('fill','black')
            .attr('font-size','6px')
            .text(function(d,i) {
                if (i % 3 == 0 && i != 0 ) {
                    return numberWithSpaces(d.vac)
                }
                
            });

    }
    
    makeBarChart(window.innerWidth,weeklyVax,'weeklyVax')
    makeChoroplethMap('quantity',window.innerWidth)
    makeChoroplethMap('square',window.innerWidth)
    makeChoroplethMap('avgPrice',window.innerWidth)
window.onresize = function(event) { 
    makeBarChart(window.innerWidth,weeklyVax,'weeklyVax')
    makeChoroplethMap('square',window.innerWidth)
    makeChoroplethMap('avgPrice',window.innerWidth)
    makeChoroplethMap('quantity',window.innerWidth)
};