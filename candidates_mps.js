if(document.createStyleSheet) {
    document.createStyleSheet('https://cdn.jsdelivr.net/gh/liga-net/few-projects/candidates_mps.css');  
} else {
    var styles = "@import url('https://cdn.jsdelivr.net/gh/liga-net/few-projects/candidates_mps.css');";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
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
function numberWithSpaces(x) {
   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
function createBee(w) {
    if (w < 600) {
        var start_width = w-10
        var height = 550
    } else {
        var start_width = 600
        var height = 400
    }  
    d3.select("#bee2").html('')   
    var bee = d3.select("#bee2")
        .append("svg")
        .attr("width", start_width)
        .attr("height", height);

    start_pointX = 10
    start_pointY = 32
    stepY = 18
    textStep = 5
    bee.append("circle").attr("cx",start_pointX).attr("cy",start_pointY).attr("r", 6).style("fill", "#006064")
    bee.append("circle").attr("cx",start_pointX).attr("cy",start_pointY+stepY).attr("r", 6).style("fill", "#f9a825")
    bee.append("circle").attr("cx",start_pointX).attr("cy",start_pointY+(stepY*2)).attr("r", 6).style("fill", "#ad1457")

    bee.append("text").attr("x", start_pointX+10).attr("y", start_pointY+textStep).text("Нардепы").style("font-size", "14px").attr("alignment-baseline","left")
    bee.append("text").attr("x", start_pointX+10).attr("y", start_pointY+stepY+textStep).text("Кабмин").style("font-size", "14px").attr("alignment-baseline","left")
    bee.append("text").attr("x", start_pointX+10).attr("y", start_pointY+(stepY*2)+textStep).text("Однофамильцы").style("font-size", "14px").attr("alignment-baseline","left")
    
    var marginCh = {top: 40, right: 40, bottom: 40, left: 40},
        widthCh = bee.attr("width") - marginCh.left - marginCh.right,
        heightCh = bee.attr("height") - marginCh.top - marginCh.bottom;
        
    if (start_width > 500) {
        var tickValue = 7
        var fontSize = '14px'
        var titleMargin = (widthCh / 6)
    } else {
        var tickValue = 6
        var fontSize = '10px'
        var titleMargin = 40
    }

    bee.append("text")
        .attr("x", titleMargin) 
        .attr("y", 10)
        .style("font-size", fontSize)
        .style("font-family", "Georgia")
        .text("Дата защиты нардепов и однофамильцев")

    var formatValue = d3.format(",d");

    var xCh = d3.scaleLog()
        .rangeRound([0, widthCh]);
    var size = d3.scaleLinear()
        .domain([2010, 2022])
        .range([8,28]) 
    var g = bee.append("g")
        .attr("transform", "translate(" + marginCh.left + "," + marginCh.top + ")");
    var color = d3.scaleOrdinal()
            .domain([1, 2, 3, 4,5,6,7])
            .range(["#006064", "#f9a825", "#ad1457", '#512da8', "#1976d2", "#0097a7", '#e57373']);

    d3.csv("https://cdn.jsdelivr.net/gh/liga-net/few-projects/candidates_mps.csv", type, function(error, data) {
        if (error) throw error;

        xCh.domain(d3.extent(data, function(d) { return d.value; }));

        var tooltipBee = d3.select("#bee2")
            .append("div")
            .style("position", "absolute")
            .style("z-index", "10")
            .style("visibility", "hidden")
            .style("padding", "14px")
            .style("background-color", "#f5f5f5")
            .style("color", "black")
            .style("border-radius", "6px")
            .style("border-color", "black")
            .style("font", "12px sans-serif")
            .text("tooltip");
        var simulationBee = d3.forceSimulation(data)
            .force('charge', d3.forceManyBody().strength(.1))
            .force("x", d3.forceX(function(d) { return xCh(d.value); }).strength(1))
            .force("y", d3.forceY(heightCh / 2))
            .force('collision', d3.forceCollide().radius(function(d) {
                return size(d.value);
            }));

        for (var i = 0; i < data.length; ++i) simulationBee.tick();

        g.append("g")
            .attr("class", "axis axis--x")
            .attr('fill','none')
            .attr("transform", "translate(0," + heightCh + ")")
            .style('font','10px sans-serif')
            .call(d3.axisBottom(xCh)
            .tickValues([2012,2014,2016,2018,2021])
            .tickFormat(d3.format(".0f")));

        var cell = g.append("g")
            .attr("class", "cells")
            .attr('fill','none')
            .selectAll("g").data(d3.voronoi()
                .extent([[-marginCh.left, -marginCh.top], [widthCh + marginCh.right, heightCh + marginCh.top]])
                .x(function(d) { return d.x; })
                .y(function(d) { return d.y; })
            .polygons(data)).enter().append("g");

        cell.append("circle")
            .style("fill", function(d){ return color(d.data.group)})
            .style("fill-opacity", 0.8)
            .attr("stroke", "black")
            .style("stroke-width", 2)
            .attr("r", function(d) {return 8})
            .attr("cx", function(d) { return d.data.x; })
            .attr("cy", function(d) { return d.data.y; });

        cell
            .on("mouseover", function(d) {
                tooltipBee.html("<h4>"+d.data.id + "</h4>"+
                '<p>Место работы: '+d.data.group + '</p>'+
                '<p>Год защиты: '+d.data.value + '</p>'+
                '<p>Отрасль науки: '+d.data.science + '</p>'+
                '<p>Университет: '+d.data.uni_name + '</p>'+
                '<p>Классификация научной деятельности: '+d.data.speciality_name + '</p>'+
                '<p>Защита во время исполнения должности: '+d.data.on_positiom.replace('FALSE','нет').replace('TRUE','да') + '</p>'
                )
                tooltipBee.style("visibility", "visible");
            })
            .on("mousemove", function() {
                return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
            })
            .on("mouseout", function(){return tooltipBee.style("visibility", "hidden");});

        cell.append("path")
            .attr("d", function(d) { return "M" + d.join("L") + "Z"; });
    });

    function type(d) {
        if (!d.value) return;
        d.value = +d.value;
        d.year = +d.year;
        return d;
    }
}
function makeColumnChart(id, w) { 
    if (w < 600) {
        var start_width = w
    } else {
        var start_width = 600
    } 

    d3.select("#"+id).html('')
    if (id == 'nauki') {
        var date = ["Технические", "Экономические", "Юридические","Медицинские","Педагогические", "Филологические", "Физико-математические","Исторические", "Биологические", "Сельскохозяйственные"]
        var json = [8408, 7999, 6648, 5630, 4968, 2689, 2030, 1874, 1591, 1556]
        var tooltipHtml = '<p>'
        var left = 170
        var id_height = 450
    }
    if (start_width > 500) {
        var tickValue = 7
        var fontSize = '13px'
        var titleMargin = -140
    } else {
        var tickValue = 6
        var fontSize = '12px'
        var titleMargin = -170
    }
    var margin = {top: 40, right: 15, bottom: 70, left: left},
        width = start_width - margin.left - margin.right,
        height = id_height - margin.top - margin.bottom;

    var svg = d3.select("#"+id)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
    svg.append("text")
        .attr("x", titleMargin) 
        .attr("y", 0 - (margin.top / 2))
        .style("font-size", fontSize)
        .style("font-family", "Georgia")
        .text("Главные науки для кандидатских диссертаций за 9 лет")
    var x = d3.scaleLinear()
            .domain([0, d3.max(json)])
            .range([ 0, width]);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).ticks(5))
            .selectAll("text")
            .style("text-anchor", "middle");
    
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
        .attr('font-size','14px')
        .attr('font-family','Arial');
    
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
        .attr("fill", "#006064")
        .on("mouseover", function(d,i) {
            tooltipBee.html('<p>'+date[i]+' науки: '+numberWithSpaces(d)+' кандидатов с 2011 года')
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
            return numberWithSpaces(d)
        })
        .attr("y", function(d,i) { return y(date[i])+21; })
        .attr("x", function(d,i) { 
            if (x(json[i]) < 55) {
                return x(json[i])+26; 
            } else{ 
                return x(json[i])-30; 
            }  
        })
        .attr("text-anchor","middle")
        .attr('font-family','Arial')
        .attr('fill',function(d,i) { 
            if (x(json[i]) < 55) {
                return 'black'
            } else{ 
                return 'white'
            }  
        })
        .attr('font-size','14px');
} 
function makeBarChart(id,w) {
        
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
        
        var parseTodayDate = d3.timeParse("%Y");
        var dayMonth = locale.format("%Y")
        var dates = ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
        var x_date = dates.map(d => parseTodayDate(d))
        var json = [7156, 6680, 7512, 5642, 6435, 5086, 4057, 3561, 3023, 1385]
        var plusMax = 1000
        var color = '#e57373'
        var tooltipText = ' кандидатов наук за год</p>'
        var importedTickValues = x_date
        if (w < 450) {
            var start_width = w-10,
            start_height = w/1.5;
        } else {
            var start_width = 600,
            start_height = 350;
        }  
        if (w > 500) {
            var tickValue = 7
            var fontSize = '18px'
            var titleMargin = 0
        } else {
            var tickValue = 6
            var fontSize = '10px'
            var titleMargin = 20
        }
        var margin = {top: 40, right: 15, bottom: 40, left: 35},
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
            .attr("x", (width / 2.1)) 
            .attr("y", 0 - (margin.top / 2))
            .attr("text-anchor", "middle")  
            .style("font-size", fontSize)
            .style("font-family", "Georgia")
            .text("Количество людей, которые получили кандидата наук, по годам");

        var x = d3.scaleBand()
            .range([ 0, width ])
            .domain(x_date)
            .padding(0.2);
        svg.append("g")
            .attr("transform", "translate(0," + (height) + ")")
            .call(d3.axisBottom(x).tickValues(importedTickValues)
            .tickFormat(locale.format("%Y")))
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
        
        
        
        svg.selectAll("mybar")
        .data(json)
        .enter()
        .append("rect")
            .attr("x", function(d,i) { return x(x_date[i]); })
            .attr("y", function(d,i) { return y(json[i]); })
            .attr("width", x.bandwidth())
            .attr("height", function(d,i) { return height - y(json[i]); })
            .attr('class','every_day')
            .attr("fill", '#006064')
            .on("mouseover", function(d,i) {
                tooltipBee.html('<p>'+dayMonth(x_date[i])+':</p><p>'+numberWithSpaces(d)+tooltipText)
                tooltipBee.style("visibility", "visible")
            })
            .on("mousemove", function() {
                return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
            })
            .on("mouseout", function(d){
                return tooltipBee.style("visibility", "hidden");
            })

    }
    createBee(window.innerWidth)
    makeBarChart('years',window.innerWidth)
    makeColumnChart('nauki',window.innerWidth)
    d3.select(window).on('resize', function () {
        createBee(window.innerWidth)
        makeBarChart('years',window.innerWidth)
        makeColumnChart('nauki',window.innerWidth)
    })