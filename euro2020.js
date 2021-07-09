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
function makeColumnChart(id, w) { 
    if (w < 600) {
        var start_width = w
    } else {
        var start_width = 600
    } 
    d3.select("#"+id).html('')
    if (id == 'team_revenue') {
        var change_format = d3.format(".1f")
        var date = ["Италия","Англия","Испания","Дания","Бельгия","Чехия","Швейцария","Украина","Нидерланды","Швеция","Австрия","Франция","Германия","Португалия","Уэльс","Хорватия","Венгрия","Россия","Словакия","Финляндия","Польша","Шотландия","Македония","Турция"]
        var json = [24000000,23250000,22500000,21000000,19000000,16750000,16750000,16000000,15750000,15000000,14250000,14250000,13500000,13500000,13500000,13500000,10750000,10750000,10750000,10750000,10000000,10000000,9250000,9250000]
        var tooltipHtml = '<p>'
        var left = 170
        var id_height = 600
        var title = "Сколько сборные уже заработали за Евро (не считая финала)"
    } else if (id == 'team_price') {
        var change_format = d3.format("")
        var date = ['Англия', 'Франция', 'Испания', 'Германия', 'Португалия', 'Италия', 'Бельгия', 'Нидерланды', 'Хорватия', 'Турция']
        var json = [1263000000, 1028000000, 915000000, 896500000, 827500000, 751000000, 664400000, 607050000, 376800000, 325000000]
        var tooltipHtml = '<p>'
        var left = 170
        var id_height = 420
        var title = 'Суммарная стоимость футболистов сборной'
    }
    if (start_width > 500) {
        var tickValue = 7
        var fontSize = '16px'
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
        .text(title)
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
            tooltipBee.html('<p>'+date[i]+': €'+numberWithSpaces(d)+' ')
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
            return numberWithSpaces(change_format(d/1000000))+'M'
        })
        .attr("y", function(d,i) { return y(date[i])+15; })
        .attr("x", function(d,i) { 
            if (x(json[i]) < 55) {
                return x(json[i])+20; 
            } else{ 
                return x(json[i])-25; 
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
    var dates = ['1988','1992','1996','2000','2004','2008','2012','2016']
    var x_date = dates.map(d => parseTodayDate(d))
    var json = [850000,429000,1279000,1126000,1149000,1140000,1440000,2427000]
    var plusMax = 100000
    var color = '#e57373'
    var tooltipText = ' посетителей</p>'
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
    var margin = {top: 40, right: 15, bottom: 40, left: 55},
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
        .text("Посещаемость стадионов на чемпионатах Европы");

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
    makeBarChart('stadium',window.innerWidth)
    makeColumnChart('team_revenue',window.innerWidth)
    makeColumnChart('team_price',window.innerWidth)
    d3.select(window).on('resize', function () {
        makeBarChart('stadium',window.innerWidth)
        makeColumnChart('team_revenue',window.innerWidth)
        makeColumnChart('team_price',window.innerWidth)
    })