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
function makeCovidStat(value) {
    var pid_count = value.map(d => parseFloat(d['gsx$measurevalues']['$t']))
    var pid_count = pid_count.map(function(d,i) {
        if (i != pid_count.length-1) {
            return pid_count[i+1] - d
        }
    })
    var pid_count = pid_count.slice(0,pid_count.length-1)
    return pid_count
}
function makeBarChart(id,w) {
    var locale = d3.timeFormatLocale({
        "dateTime": "%A, %e %B %Y г. %X",
        "date": "%d.%m.%Y",
        "time": "%H:%M:%S",
        "periods": ["AM", "PM"],
        "days": ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
        "shortDays": ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
        "months": ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"],
        "shortMonths": ["січ", "лют", "бер", "кв", "трав", "черв", "лип", "серп", "вер", "жовт", "лист", "груд"]
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
        var tooltipText = ' захворілих за добу</p>'
        var title = 'Кількість виявлених хворих на COVID-19 за день'
    } else {
        var json = death_count
        var plusMax = 50
        var color = '#455a64'
        var tooltipText = ' загиблих за добу</p>'
        var title = 'Кількість загиблих від COVID-19 за день'
    }

    var margin = {top: 30, right: 5, bottom: 40, left: 40},
        width = start_width - margin.left - margin.right,
        height = start_height - margin.top - margin.bottom;

    // append the svg object to the body of the page
    d3.select("#"+id+"_chart").html('')
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
        .style("font-size", '15px')
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
        .tickFormat(locale.format("%b")))
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
var export_json = []
var parseDate = d3.timeParse("%m/%d/%Y");
var pid = getData('https://cdn.jsdelivr.net/gh/liga-net/few-projects/pid.json')
var death = getData('https://cdn.jsdelivr.net/gh/liga-net/few-projects/death.json')
var pid_count = makeCovidStat(pid)
var death_count = makeCovidStat(death)
var date = pid.map(d => parseDate(d['gsx$date']['$t']));
var date = date.slice(1,date.length)
var tickValues = date.filter(function(d,i) {if (i%30 == 1) {return d}})

makeBarChart('pid',window.innerWidth) 
makeBarChart('death',window.innerWidth) 

window.onresize = function(event) {
    makeBarChart('pid',window.innerWidth) 
    makeBarChart('death',window.innerWidth)
};