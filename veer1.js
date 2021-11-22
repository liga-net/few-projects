function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

var dynamic = [
    {"date":"2021-08-30","value":2,"full":"30.08-05.09"},
    {"date":"2021-09-06","value":14,"full":"06.09-12.09"},
    {"date":"2021-09-13","value":16,"full":"13.09-19.09"},
    {"date":"2021-09-20","value":12,"full":"20.09-26.09"},
    {"date":"2021-09-27","value":72,"full":"27.09-03.10"},
    {"date":"2021-10-04","value":300,"full":"04.10-10.10"},
    {"date":"2021-10-11","value":94,"full":"11.10-17.10"},
    {"date":"2021-10-18","value":339,"full":"18.10-24.10"},
    {"date":"2021-10-25","value":679,"full":"25.10-31.10"},
    {"date":"2021-11-01","value":494,"full":"01.11-07.11"},
    {"date":"2021-11-08","value":1483,"full":"08.11-14.11"},
    {"date":"2021-11-15","value":440,"full":"15.11-21.11"}
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
        .style("font-family", "sans-serif")
        .text('Кількість повідомлень про віяльні відключення');

var parseDate = d3.timeParse("%Y-%m-%d");
var formatDay = locale.format("%d.%m")
var tickValues = uploaded_data.map(function(d) { return parseDate(d.date); }).filter(function(d,i) {
    if (i % 3 == 1) {
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
        tooltipBee.html("<h4>"+d.full+'</h4><p>'+numberWithSpaces(d.value)+' публікацій</p>')
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

var sources_ton = [
{"State": "ТК Прямий","Позитив": 0,"Негатив": 42,"Нейтрал": 69,"total": 111},
{"State": "ТК Перший Незалежний","Позитив": 1,"Негатив": 48,"Нейтрал": 56,"total": 105},
{"State": "ТК 24","Позитив": 0,"Негатив": 23,"Нейтрал": 60,"total": 83},
{"State": "Перший Незалежний (YouTube)","Позитив": 0,"Негатив": 24,"Нейтрал": 50,"total": 74},
{"State": "ТК НАШ","Позитив": 1,"Негатив": 24,"Нейтрал": 41,"total": 66},
{"State": "ТК 5 канал","Позитив": 0,"Негатив": 22,"Нейтрал": 39,"total": 61},
{"State": "Телеканал ZIK (YouTube)","Позитив": 1,"Негатив": 16,"Нейтрал": 34,"total": 51},
{"State": "ТК Эспрессо TV","Позитив": 0,"Негатив": 13,"Нейтрал": 31,"total": 44},
{"State": "112 Украина (YouTube)","Позитив": 1,"Негатив": 11,"Нейтрал": 31,"total": 43},
{"State": "5 Канал (YouTube)","Позитив": 0,"Негатив": 19,"Нейтрал": 23,"total": 42},
{"State": "NEWSONE (YouTube)","Позитив": 0,"Негатив": 18,"Нейтрал": 23,"total": 41},
{"State": "5 канал (YouTube)","Позитив": 0,"Негатив": 7,"Нейтрал": 27,"total": 34},
{"State": "ТК Україна 24","Позитив": 0,"Негатив": 9,"Нейтрал": 23,"total": 32},
{"State": "ТК Київ","Позитив": 0,"Негатив": 9,"Нейтрал": 22,"total": 31},
{"State": "ZIK UA TV (YouTube)","Позитив": 0,"Негатив": 7,"Нейтрал": 16,"total": 23},
{"State": "Телеканал новин 24","Позитив": 0,"Негатив": 7,"Нейтрал": 14,"total": 21},
{"State": "PNK.TV","Позитив": 0,"Негатив": 8,"Нейтрал": 9,"total": 17},
{"State": "НАШ (YouTube)","Позитив": 0,"Негатив": 5,"Нейтрал": 12,"total": 17},
{"State": "Перший Діловий","Позитив": 0,"Негатив": 7,"Нейтрал": 9,"total": 16},
{"State": "Ua24.pro","Позитив": 0,"Негатив": 4,"Нейтрал": 12,"total": 16},
{"State": "Новини Тернопіль","Позитив": 0,"Негатив": 4,"Нейтрал": 11,"total": 15},
{"State": "Цензор.Нет","Позитив": 0,"Негатив": 3,"Нейтрал": 11,"total": 14},
{"State": "Politeka","Позитив": 0,"Негатив": 8,"Нейтрал": 5,"total": 13}
]
function horizontalBarChart(w,data,id) {
    if (w < 600) {
        var start_width = w,
        left = 20;
    } else {
        var start_width = 600,
        left = 50
    } 
    if (id == 'sources_ton'){
        start_height = 600
        var left = 160;
        var title = 'Тональність повідомлень у медіа'
        var keys = ["Позитив","Негатив","Нейтрал"]
        var colorPalette = ['#4caf50','#607d8b','#f44336']
    }
    
    d3.select("#"+id).html('')
    var margin = {top: 50, right: 30, bottom: 20, left: left},
        width = start_width - margin.left - margin.right,
        height = start_height - margin.top - margin.bottom;
    
    if (start_width > 500) {
        var fontSize = '18px'
    } else {
        var fontSize = '12px'
    }
    var svg = d3.select("#"+id)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
    svg.append("text")
        .attr("x", (width / 2) ) 
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", fontSize)
        .style("font-family", "sans-serif")
        .text(title);  

    g = svg.append("g")
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

    var y = d3.scaleBand()
        .rangeRound([0, height])
        .paddingInner(0.05)
        .align(0.1);

    var x = d3.scaleLinear()
        .range([0, width]);

    var z = d3.scaleOrdinal()
        .range(colorPalette);

    

    data.sort(function(a, b) { return b.total - a.total; });
    y.domain(data.map(function(d) { return d.State; }));
    x.domain([0, d3.max(data, function(d) { return d.total; })]).nice();
    var ticks = [0, 3000000]
    z.domain(keys);

    g.append("g")
        .selectAll("g")
        .data(d3.stack().keys(keys)(data))
        .enter().append("g")
        .attr("fill", function(d) { return z(d.key); })
        .selectAll("rect")
        .data(function(d) { return d; })
        .enter().append("rect")
        .attr("y", function(d) { return y(d.data.State); })
        .attr("x", function(d) { return x(d[0]); })
        .attr("width", function(d) { return x(d[1]) - x(d[0]); })
        .attr("height", y.bandwidth())
        .on("mouseover", function(d) {
            tooltipBee.html('<h3>'+d.data.State+'</h3>'+
                    '<p>Позитив: '+d['data']['Позитив']+'</p>'+
                    '<p>Негатив: '+d['data']['Негатив']+'</p>'+
                    '<p>Нейтрал: '+d['data']['Нейтрал']+'</p>')
            tooltipBee.style("visibility", "visible")
            })
        .on("mousemove", function() {
            return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
        })
        .on("mouseout", function(d){
            return tooltipBee.style("visibility", "hidden");
        });;

    g.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0,0)")
        .call(d3.axisLeft(y));
        
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).ticks(5))
        .selectAll("text")
        .style("text-anchor", "middle");
    
    // Usually you have a color scale in your chart already
    var color = d3.scaleOrdinal()
    .domain(keys)
    .range(colorPalette);

    // Add one dot in the legend for each name.
    svg.selectAll("mydots")
    .data(keys)
    .enter()
    .append("circle")
        .attr("cx", width-110)
        .attr("cy", function(d,i){ return 300 + i*25}) // 100 is where the first dot appears. 25 is the distance between dots
        .attr("r", 7)
        .style("fill", function(d){ return color(d)})

    // Add one dot in the legend for each name.
    svg.selectAll("mylabels")
    .data(keys)
    .enter()
    .append("text")
        .attr("x", width-100)
        .attr("y", function(d,i){ return 304 + i*25}) // 100 is where the first dot appears. 25 is the distance between dots
        .style("fill", function(d){ return color(d)})
        .text(function(d){ return d})
        .attr("text-anchor", "left")
        .style("font-family", "sans-serif")
        .style("font-size", "12px")
        .style("alignment-baseline", "middle")
}

makeBarChart(window.innerWidth,dynamic,'dynamic')
horizontalBarChart(window.innerWidth,sources_ton,'sources_ton')
window.onresize = function(event) { 
makeBarChart(window.innerWidth,dynamic,'dynamic')
horizontalBarChart(window.innerWidth,sources_ton,'sources_ton')
};