if(document.createStyleSheet) {
    document.createStyleSheet('https://cdn.jsdelivr.net/gh/liga-net/few-projects/rewards.css');
   }
   else {
    var styles = "@import url('https://cdn.jsdelivr.net/gh/liga-net/few-projects/rewards.css');";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
  }
function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
var yearlyData = [
    {"date":"1992","value":1450},
    {"date":"1993","value":2593},
    {"date":"1994","value":2146},
    {"date":"1995","value":2299},
    {"date":"1996","value":3550},
    {"date":"1997","value":3648},
    {"date":"1998","value":3849},
    {"date":"1999","value":4042},
    {"date":"2000","value":2228},
    {"date":"2001","value":2849},
    {"date":"2002","value":3450},
    {"date":"2003","value":3327},
    {"date":"2004","value":6276},
    {"date":"2005","value":2318},
    {"date":"2006","value":4307},
    {"date":"2007","value":5335},
    {"date":"2008","value":8487},
    {"date":"2009","value":30923},
    {"date":"2010","value":21857},
    {"date":"2011","value":36463},
    {"date":"2012","value":40332},
    {"date":"2013","value":25559},
    {"date":"2014","value":7814},
    {"date":"2015","value":13385},
    {"date":"2016","value":11605},
    {"date":"2017","value":5916},
    {"date":"2018","value":5587},
    {"date":"2019","value":4748},
    {"date":"2020","value":4199},
{"date":"2021","value":1537}
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
var nagrada_cost = [{"date":"1999-01-01","value":1906500},
{"date":"2000-01-01","value":1900000},
{"date":"2001-01-01","value":1500000},
{"date":"2002-01-01","value":4000000},
{"date":"2003-01-01","value":4094500},
{"date":"2004-01-01","value":17000000},
{"date":"2005-01-01","value":40000000},
{"date":"2006-01-01","value":4150000},
{"date":"2007-01-01","value":2500000},
{"date":"2008-01-01","value":2000000},
{"date":"2009-01-01","value":517100},
{"date":"2010-01-01","value":47750500},
{"date":"2011-01-01","value":19107000},
{"date":"2012-01-01","value":9246600},
{"date":"2013-01-01","value":6277400},
{"date":"2014-01-01","value":2313700},
{"date":"2015-01-01","value":16011000},
{"date":"2016-01-01","value":16011000},
{"date":"2017-01-01","value":20450900},
{"date":"2018-01-01","value":47560900},
{"date":"2019-01-01","value":20572800},
{"date":"2020-01-01","value":10381500},
{"date":"2021-01-01","value":23613700},]
function makeBarChart(w,uploaded_data,id) {
    if (w>600) {
        var windowW = 600
    } else {
        var windowW = w-20
    }
    // set the dimensions and margins of the graph
    var margin = {top: 60, right: 10, bottom: 40, left: 60},
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
        
        .text('Траты бюджета на изготовление наград');
    svg.append("text")
        .attr("x", 0) 
        .attr("y", height + margin.bottom-5)
        .attr("text-anchor", "left")  
        .style("font-size", "12px")
        .attr("fill", "#9e9e9e")
        .text("Данные: Госбюджет")

var parseDate = d3.timeParse("%Y-%m-%d");
var formatYear = locale.format("%Y")
var tickValues = uploaded_data.map(function(d) { return parseDate(d.date); }).filter(function(d,i) {
    if (i % 4 == 0) {
        return d
    }
    
})
var x = d3.scaleBand()
  .range([ 0, width ])
  //.domain(data.map(function(d) { return d.Country; }))
  .domain(uploaded_data.map(function(d) { return parseDate(d.date); }))
  .padding(0.2);

svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x).tickValues(tickValues).tickFormat(formatYear))

// Add Y axis
var y = d3.scaleLinear()
  .domain([0, d3.max(uploaded_data.map(function(d) { return d.value; }))])
  .range([ height, 0]);

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
    .attr("fill", "#0094c4")
    .on("mouseover", function(d,i) {
        tooltipBee.html("<h4>"+formatYear(parseDate(d.date))+'</h4><p>'+numberWithSpaces(d.value)+' грн</p>')
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
    .attr("x", function(d) { return x(parseDate(d.date))+6; })
    .attr("y", function(d) { return y(d.value)-7; })
    .attr("text-anchor","middle")
    .attr('font-family','sans-serif')
    .attr('fill','black')
    .attr('font-size','10px')
    .text(function(d,i) {
        if (i % 2 == 1 && i != 0 ) {
            return Math.round(d.value/1000000)+' млн'
        } else if (i == 22) {
            return Math.round(d.value/1000000)+' млн'
        }
        
    });
} 
function makeHorizontalBarChart(w,id) { 
    d3.select("#"+id).html('')
    if (id == 'presidents') {
        if (w < 600) {
            var start_width = w,
            left = 70;
        } else {
            var start_width = 600,
            left = 120
        } 
        var json = [4043, 31388, 57646, 124211, 44307, 8947]
        var date = ["Кравчук","Кучма","Ющенко","Янукович","Порошенко","Зеленский"]
        var title = 'Награды и президенты'
        var yPadding = 24
        var he = 350
        var subtitle = ''
    } else if (id == 'rewards_type') {
        if (w < 600) {
            var start_width = w,
            left = 120;
        } else {
            var start_width = 600,
            left = 120
        } 
        var yPadding = 20
        var json = [15260,14472,9843,4777,4511,4268,3806,3195,2998,2540]
        var date = ["За заслуги","Мати-героїня","За мужність","Медаль захиснику вітчизни","Медаль за працю і звитягу","Орден Княгині Ольги","Медаль за військову службу України","Орден Богдана Хмельницького","Медаль за бездоганну службу","Заслужений лікар України"]
        var title = 'Самые популярные награды'
        var he = 450
        var subtitle = 'Данные: открытые данные Верховной Рады'
    }
    
    // set the dimensions and margins of the graph
    var margin = {top: 50, right: 30, bottom: 40, left: left},
        width = start_width - margin.left - margin.right,
        height = he - margin.top - margin.bottom;

    // append the svg object to the body of the page
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
        .text(title);
    svg.append("text")
        .attr("x", 0) 
        .attr("y", height + margin.bottom-5)
        .attr("text-anchor", "left")  
        .style("font-size", "12px")
        .attr("fill", "#9e9e9e")
        .text(subtitle)
        var x = d3.scaleLinear()
            .domain([0, d3.max(json)])
            .range([ 0, width]);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).ticks(5))
            .selectAll("text")
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
    /* svg.append("g")
        .call(d3.axisLeft(y))
        .attr('font-size','12px')
        .attr('font-family','sans-serif'); */
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
    .selectAll(".tick text")
        .call(wrap, 100);
        
    svg.selectAll('.grid line')
        .style('stroke','#eeeeee')
        .style('stroke-opacity','0')
        .style('shape-rendering','crispEdges')
    svg.selectAll('.domain')
        .style('opacity','0')
    
        function wrap(text, width) {
            text.each(function() {
                var text = d3.select(this),
                    words = text.text().split(/\s+/).reverse(),
                    word,
                    line = [],
                    lineNumber = 0,
                    lineHeight = 1.1, // ems
                    y = text.attr("y")-5,
                    dy = parseFloat(text.attr("dy")),
                    tspan = text.text(null).append("tspan").attr("x", -5).attr("y", y).attr("dy", dy + "em")
                while (word = words.pop()) {
                line.push(word)
                tspan.text(line.join(" "))
                if (tspan.node().getComputedTextLength() > width) {
                    line.pop()
                    tspan.text(line.join(" "))
                    line = [word]
                    tspan = text.append("tspan").attr("x", -5).attr("y", y).attr("dy", `${++lineNumber * lineHeight + dy}em`).text(word)
                }
                }
            })
            }
    var formatTime = d3.timeFormat("%d %B");
    
    svg.selectAll("mybar")
    .data(json)
    .enter()
    .append("rect")
        .attr("y", function(d,i) { return y(date[i]); })
        .attr("x", x(0) )
        .attr("width", function(d,i) { return x(json[i])})
        .attr("height", y.bandwidth())
        .attr("fill", "#0094c4")
        .on("mouseover", function(d,i) {
            if (id == 'presidents') {
                tooltipBee.html('<p>'+date[i]+' наградил '+numberWithSpaces(d)+' человек')
            } else if (id == 'rewards_type') {
                tooltipBee.html('<p>Награду "'+date[i]+'" получили '+numberWithSpaces(d)+' человек')
            }
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
        .text(function(d,i){return numberWithSpaces(d)})
        .attr("y", function(d,i) { return y(date[i])+yPadding-3; })
        .attr("x", function(d,i) {
            if (date[i] == 'Кравчук') {
                return x(json[i])+20; 
            } else {
                return x(json[i])-25; 
            }
        })
        .attr("text-anchor","middle")
        .attr('font-family','sans-serif')
        .attr("fill", function(d,i) {
            if (date[i] == 'Кравчук') {
                return 'black'
            } else {
                return 'white'
            }
        })
        .attr('font-size','12px');
    }
var data = [{"name": "Заслужений Працівник Сільського Господарства України", "group": "Кравчук", "weight": "332" },
{"name": "Заслужений Працівник Транспорту України", "group": "Кравчук", "weight": "131" },
{"name": "Заслужений Шахтар України", "group": "Кравчук", "weight": "58" },
{"name": "Заслужений Юрист України", "group": "Кравчук", "weight": "39" },
{"name": "Заслужений Металург України", "group": "Кравчук", "weight": "39" },
{"name": "За Заслуги ІІІ Ступеня", "group": "Кучма", "weight": "4438" },
{"name": "За Бездоганну Службу ІІІ Ступеня", "group": "Кучма", "weight": "1584" },
{"name": "За Працю І Звитягу", "group": "Кучма", "weight": "1265" },
{"name": "Заслужений Працівник Промисловості України", "group": "Кучма", "weight": "1168" },
{"name": "Заслужений Будівельник України", "group": "Кучма", "weight": "949" },
{"name": "Мати-Героїня", "group": "Ющенко", "weight": "6801" },
{"name": "За Заслуги ІІІ Ступеня", "group": "Ющенко", "weight": "3989" },
{"name": "За Працю І Звитягу", "group": "Ющенко", "weight": "1450" },
{"name": "Княгині Ольги ІІІ Ступеня", "group": "Ющенко", "weight": "1258" },
{"name": "Заслужений Працівник Культури України", "group": "Ющенко", "weight": "853" },
{"name": "Мати-Героїня", "group": "Янукович", "weight": "7310" },
{"name": "За Заслуги ІІІ Ступеня", "group": "Янукович", "weight": "2049" },
{"name": "За Працю І Звитягу", "group": "Янукович", "weight": "1028" },
{"name": "Ювілейною 20 Років Незалежності України", "group": "Янукович", "weight": "941" },
{"name": "Княгині Ольги ІІІ Ступеня", "group": "Янукович", "weight": "807" },
{"name": "За Мужність ІІІ Ступеня", "group": "Порошенко", "weight": "7266" },
{"name": "Захиснику Вітчизни", "group": "Порошенко", "weight": "4139" },
{"name": "За Військову Службу Україні", "group": "Порошенко", "weight": "2303" },
{"name": "Богдана Хмельницького ІІІ Ступеня", "group": "Порошенко", "weight": "1902" },
{"name": "За Заслуги ІІІ Ступеня", "group": "Порошенко", "weight": "1668" },
{"name": "За Мужність ІІІ Ступеня", "group": "Зеленский", "weight": "444" },
{"name": "Мати-Героїня", "group": "Зеленский", "weight": "359" },
{"name": "Захиснику Вітчизни", "group": "Зеленский", "weight": "306" },
{"name": "За Військову Службу Україні", "group": "Зеленский", "weight": "302" },
{"name": "За Заслуги ІІІ Ступеня", "group": "Зеленский", "weight": "277" },]
function manyCharts(w,id,pres_name) { 
    d3.select("#"+id).html('')
    if (w < 600) {
        var start_width = w,
        left = 120;
    } else {
        var start_width = 600,
        left = 220
    } 
    var yPadding = 20
    var json = data.filter(d => d.group == pres_name).map(k => parseInt(k.weight))
    var date = data.filter(d => d.group == pres_name).map(k => k.name)
    var he = 350
    
    // set the dimensions and margins of the graph
    var margin = {top: 40, right: 40, bottom: 70, left: 0},
        width = start_width - margin.left - margin.right,
        height = he - margin.top - margin.bottom;

    // append the svg object to the body of the page
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
        
        .text(pres_name);
        var x = d3.scaleLinear()
            .domain([0, d3.max(json)])
            .range([ 0, width]);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).ticks(3))
            .selectAll("text")
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

    var formatTime = d3.timeFormat("%d %B");
    
    svg.selectAll("mybar")
    .data(json)
    .enter()
    .append("rect")
        .attr("y", function(d,i) { return y(date[i]); })
        .attr("x", x(0) )
        .attr("width", function(d,i) { return x(json[i])})
        .attr("height", y.bandwidth())
        .attr("fill", "#D4C44E")
        .on("mouseover", function(d,i) {
            tooltipBee.html('<p>Награду "'+date[i]+'" получили '+numberWithSpaces(d)+' человек')
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
        .html(function(d,i){
            if (x(json[i]) > 160) {
                return date[i].split().slice(2)+'<br>'
            } else {
                return date[i]
            }
            
        }) // x(json[i])
        .attr("y", function(d,i) { return y(date[i])+yPadding+3; })
        .attr("x", function(d,i) { return 5; })
        .attr("text-anchor","start")
        .attr('font-family','sans-serif')
        .attr('fill','black')
        .attr('class','lab')
        .attr('font-size','10px')
        
    }
var pres = ['Кравчук', "Кучма",'Ющенко','Янукович','Порошенко','Зеленский']
var pres_id = ['krav', "kuch","yush","yan","poro","zel"]
pres.forEach(function(d,i) {
    manyCharts(200,pres_id[i],d)
})
function stackedBar(w) {
    if (w < 600) {
        var start_width = w,
        left = 40;
    } else {
        var start_width = 600,
        left = 50
    } 

d3.select("#bot_vax").html('')
var margin = {top: 50, right: 30, bottom: 40, left: left},
    width = start_width - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#bot_vax")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
          if (width > 500) {
        var fontSize = '18px'
    } else {
        var fontSize = '12px'
    }
svg.append("text")
        .attr("x", (width / 2) ) 
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", fontSize)
        
        .text('Количество награжденных людей по годам');
    svg.append("text")
        .attr("x", 0) 
        .attr("y", height + margin.bottom-5)
        .attr("text-anchor", "left")  
        .style("font-size", "12px")
        .attr("fill", "#9e9e9e")
        .text("Данные: ОП")

        var botdata = [
            {"group": "1992","Зеленский": 0,"Кравчук": 1450,"Кучма": 0,"Порошенко": 0,"Ющенко": 0,"Янукович": 0},
    {"group": "1993","Зеленский": 0,"Кравчук": 2593,"Кучма": 0,"Порошенко": 0,"Ющенко": 0,"Янукович": 0},
    {"group": "1994","Зеленский": 0,"Кравчук": 1073,"Кучма": 1073,"Порошенко": 0,"Ющенко": 0,"Янукович": 0},
    {"group": "1995","Зеленский": 0,"Кравчук": 0,"Кучма": 2299,"Порошенко": 0,"Ющенко": 0,"Янукович": 0},
    {"group": "1996","Зеленский": 0,"Кравчук": 0,"Кучма": 3550,"Порошенко": 0,"Ющенко": 0,"Янукович": 0},
    {"group": "1997","Зеленский": 0,"Кравчук": 0,"Кучма": 3648,"Порошенко": 0,"Ющенко": 0,"Янукович": 0},
    {"group": "1998","Зеленский": 0,"Кравчук": 0,"Кучма": 3849,"Порошенко": 0,"Ющенко": 0,"Янукович": 0},
    {"group": "1999","Зеленский": 0,"Кравчук": 0,"Кучма": 4042,"Порошенко": 0,"Ющенко": 0,"Янукович": 0},
    {"group": "2000","Зеленский": 0,"Кравчук": 0,"Кучма": 2228,"Порошенко": 0,"Ющенко": 0,"Янукович": 0},
    {"group": "2001","Зеленский": 0,"Кравчук": 0,"Кучма": 2849,"Порошенко": 0,"Ющенко": 0,"Янукович": 0},
    {"group": "2002","Зеленский": 0,"Кравчук": 0,"Кучма": 3450,"Порошенко": 0,"Ющенко": 0,"Янукович": 0},
    {"group": "2003","Зеленский": 0,"Кравчук": 0,"Кучма": 3327,"Порошенко": 0,"Ющенко": 0,"Янукович": 0},
    {"group": "2004","Зеленский": 0,"Кравчук": 0,"Кучма": 3138,"Порошенко": 0,"Ющенко": 3138,"Янукович": 0},
    {"group": "2005","Зеленский": 0,"Кравчук": 0,"Кучма": 0,"Порошенко": 0,"Ющенко": 2318,"Янукович": 0},
    {"group": "2006","Зеленский": 0,"Кравчук": 0,"Кучма": 0,"Порошенко": 0,"Ющенко": 4307,"Янукович": 0},
    {"group": "2007","Зеленский": 0,"Кравчук": 0,"Кучма": 0,"Порошенко": 0,"Ющенко": 5335,"Янукович": 0},
    {"group": "2008","Зеленский": 0,"Кравчук": 0,"Кучма": 0,"Порошенко": 0,"Ющенко": 8487,"Янукович": 0},
    {"group": "2009","Зеленский": 0,"Кравчук": 0,"Кучма": 0,"Порошенко": 0,"Ющенко": 30923,"Янукович": 0},
    {"group": "2010","Зеленский": 0,"Кравчук": 0,"Кучма": 0,"Порошенко": 0,"Ющенко": 10928,"Янукович": 10928},
    {"group": "2011","Зеленский": 0,"Кравчук": 0,"Кучма": 0,"Порошенко": 0,"Ющенко": 0,"Янукович": 36463},
    {"group": "2012","Зеленский": 0,"Кравчук": 0,"Кучма": 0,"Порошенко": 0,"Ющенко": 0,"Янукович": 40332},
    {"group": "2013","Зеленский": 0,"Кравчук": 0,"Кучма": 0,"Порошенко": 0,"Ющенко": 0,"Янукович": 25559},
    {"group": "2014","Зеленский": 0,"Кравчук": 0,"Кучма": 0,"Порошенко": 7814,"Ющенко": 0,"Янукович": 306},
    {"group": "2015","Зеленский": 0,"Кравчук": 0,"Кучма": 0,"Порошенко": 13385,"Ющенко": 0,"Янукович": 0},
    {"group": "2016","Зеленский": 0,"Кравчук": 0,"Кучма": 0,"Порошенко": 11605,"Ющенко": 0,"Янукович": 0},
    {"group": "2017","Зеленский": 0,"Кравчук": 0,"Кучма": 0,"Порошенко": 5916,"Ющенко": 0,"Янукович": 0},
    {"group": "2018","Зеленский": 0,"Кравчук": 0,"Кучма": 0,"Порошенко": 5587,"Ющенко": 0,"Янукович": 0},
    {"group": "2019","Зеленский": 2374,"Кравчук": 0,"Кучма": 0,"Порошенко": 2374,"Ющенко": 0,"Янукович": 0},
    {"group": "2020","Зеленский": 4199,"Кравчук": 0,"Кучма": 0,"Порошенко": 0,"Ющенко": 0,"Янукович": 0}
    ]
  
  //var subgroups = ['Зеленский','Кравчук','Кучма','Порошенко','Ющенко','Янукович']
  var subgroups = ["Кравчук","Кучма","Ющенко","Янукович","Порошенко","Зеленский"]
  var color = d3.scaleOrdinal()
    .domain(subgroups)
    //.range(["#2e7d32", "#9e9d24", "#0097a7", "#ad1457", "#ff8f00", "#1565c0"])
    .range([ "#9e9d24", "#0097a7", "#ff8f00", "#1565c0", "#ad1457","#2e7d32"])
  
  var groups = d3.map(botdata, function(d){return(d.group)}).keys()
  var ticks = groups.map(function(d,i) {if (i % 7 == 1) {return d}})
  var ticks = ticks.filter(d => d != undefined)
  var legend = svg.append("g")
    .attr("font-family", "Georgia")
    .attr("font-size", 10)
    .selectAll("g")
    .data(subgroups)
    .enter().append("g")
    .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

legend.append("rect")
        .attr("x", 50)
        .attr("width", 19)
        .attr("height", 19)
        .attr("fill", color);

legend.append("text")
        .attr("x", 75)
        .attr("y", 9.5)
        .attr("dy", "0.32em")
        .text(function(d) { return d; });
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
  // Add X axis
  var x = d3.scaleBand()
      .domain(groups)
      .range([0, width])
      .padding([0.2])
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickSizeOuter(0).tickValues(ticks));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 42000])
    .range([ height, 0 ]);
  svg.append("g")
    .call(d3.axisLeft(y));

  var stackedData = d3.stack()
    .keys(subgroups)
    (botdata)

  // Show the bars
  svg.append("g")
    .selectAll("g")
    .data(stackedData)
    .enter().append("g")
      .attr("fill", function(d) { return color(d.key); })
      .selectAll("rect")
      .data(function(d) { return d; })
      .enter().append("rect")
        .attr("x", function(d) { return x(d.data.group); })
        .attr("y", function(d) { return y(d[1]); })
        .attr("height", function(d) { return y(d[0]) - y(d[1]); })
        .attr("width",x.bandwidth())
    .on("mouseover", function(d) {
        var data_json = d.data
        var html = '<h4>'+d.data.group+'</h4>'
        var number = 0
        subgroups.forEach(function(k) {
            if (data_json[k] != 0) {
                number += 1
                //html += '<p>'+k+' наградил '+data_json[k]+' человек</p>'
            }
        })
        if (number == 1) {
            subgroups.forEach(function(k) {
                if (data_json[k] != 0) {
                    html += '<p>'+k+' наградил '+data_json[k]+' человек</p>'
                }
            })
        } else {
            var last_name = ''
            var people = 0
            subgroups.forEach(function(k) {
                if (data_json[k] != 0) {
                    last_name += k+' и '
                    people += data_json[k]
                }
            })
            var last_name = last_name.slice(0,last_name.length-2)
            html += '<p>'+last_name+'наградили '+people+' человек</p>'
        }
        tooltipBee.html(html)
        tooltipBee.style("visibility", "visible")
    })
    .on("mousemove", function() {
        return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
    })
    .on("mouseout", function(d){
        return tooltipBee.style("visibility", "hidden");
    });
}

stackedBar(window.innerWidth)
makeHorizontalBarChart(window.innerWidth,'presidents')
makeHorizontalBarChart(window.innerWidth,'rewards_type')
makeBarChart(window.innerWidth,nagrada_cost,'nagrada_cost')
window.onresize = function(event) {
    makeHorizontalBarChart(window.innerWidth,'presidents')
    makeHorizontalBarChart(window.innerWidth,'rewards_type')
    stackedBar(window.innerWidth)
    makeBarChart(window.innerWidth,nagrada_cost,'nagrada_cost')
};