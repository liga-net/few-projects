var housing = [
    {"group": "Дніпропетровська","value1": 71557491,"value2": 82732270},
{"group": "Харківська","value1": 53862600,"value2": 67366824},
{"group": "Київська","value1": 39733309,"value2": 65013109},
{"group": "Львівська","value1": 43918219,"value2": 64633587},
{"group": "Одеська","value1": 45009624,"value2": 59279602},
{"group": "Київ","value1": 44187799,"value2": 58764774},
{"group": "Донецька","value1": 95033270,"value2": 52060956},
{"group": "Вінницька","value1": 39906169,"value2": 49132404},
{"group": "Запорізька","value1": 36667996,"value2": 40677402},
{"group": "Івано-Франківська","value1": 25288984,"value2": 38901944},
{"group": "Хмельницька","value1": 28873997,"value2": 38176054},
{"group": "Полтавська","value1": 32686622,"value2": 35967703},
{"group": "Черкаська","value1": 30879842,"value2": 34621696},
{"group": "Житомирська","value1": 28233618,"value2": 33699280},
{"group": "Закарпатська","value1": 21532463,"value2": 32959919},
{"group": "Чернігівська","value1": 26224042,"value2": 30531145},
{"group": "Тернопільська","value1": 20793899,"value2": 28730173},
{"group": "Сумська","value1": 25615485,"value2": 28546821},
{"group": "Рівненська","value1": 20864383,"value2": 27821521},
{"group": "Херсонська","value1": 21625097,"value2": 26727806},
{"group": "Кіровоградська","value1": 23506777,"value2": 25776089},
{"group": "Волинська","value1": 18423092,"value2": 25506893},
{"group": "Миколаївська","value1": 23228125,"value2": 25272634},
{"group": "Чернівецька","value1": 16605379,"value2": 23090435},
{"group": "Луганська","value1": 52102711,"value2": 18784383}
    ];
    var population = [
        {"group": "Донецька","value1": 5346700,"value2": 4131808},
        {"group": "Дніпропетровська","value1": 3908700,"value2": 3176648},
        {"group": "Київ","value1": 2643400,"value2": 2967360},
        {"group": "Харківська","value1": 3194800,"value2": 2658461},
        {"group": "Львівська","value1": 2764400,"value2": 2512084},
        {"group": "Одеська","value1": 2635300,"value2": 2377230},
        {"group": "Луганська","value1": 2871100,"value2": 2135913},
        {"group": "Київська","value1": 1946400,"value2": 1781044},
        {"group": "Запорізька","value1": 2099600,"value2": 1687401},
        {"group": "Вінницька","value1": 1914400,"value2": 1545416},
        {"group": "Полтавська","value1": 1756900,"value2": 1386978},
        {"group": "Івано-Франківська","value1": 1442900,"value2": 1368097},
        {"group": "Хмельницька","value1": 1520600,"value2": 1254702},
        {"group": "Закарпатська","value1": 1265900,"value2": 1253791},
        {"group": "Житомирська","value1": 1510700,"value2": 1208212},
        {"group": "Черкаська","value1": 1530900,"value2": 1192137},
        {"group": "Рівненська","value1": 1176800,"value2": 1152961},
        {"group": "Миколаївська","value1": 1342400,"value2": 1119862},
        {"group": "Сумська","value1": 1430200,"value2": 1068247},
        {"group": "Тернопільська","value1": 1175100,"value2": 1038695},
        {"group": "Волинська","value1": 1069000,"value2": 1031421},
        {"group": "Херсонська","value1": 1258700,"value2": 1027913},
        {"group": "Чернігівська","value1": 1405800,"value2": 991294},
        {"group": "Кіровоградська","value1": 1245300,"value2": 933109},
        {"group": "Чернівецька","value1": 938600,"value2": 901632}
    ]
makeLolChart('housing',window.innerWidth,housing)
makeBarChart(window.innerWidth)
//makeLolChart('population',window.innerWidth,population)
window.onresize = function(event) {
    makeLolChart('housing',window.innerWidth,housing)
    //makeLolChart('population',window.innerWidth,population)
    makeBarChart(window.innerWidth)
}

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
function makeLolChart(id,w,data) {
    if (w>600) {
        var windowW = 600
    } else {
        var windowW = w
    }
    var margin = {top: 45, right: 30, bottom: 55, left: 100},
    width = windowW - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
    if (id == 'housing') {
        var subtitle = "* - без АР Крим окупованих територій Донецької і Луганської областей"
        var subtitle2 = "Дані: Держстат, Cedos"
        //"Дані: Держстат, Cedos"
        var title = 'Обсяг житла в Україні у 1991-2020 роках*, м2'
        //'Обсяг житла в Україні за 1991-2020, м2'
        var max_column = 'value1'
        var value1_color = "#0d47a1"
        var value2_color = "#b71c1c"
    } else {
        var subtitle = "* - без АР Крим окупованих територій Донецької і Луганської областей"
        var subtitle2 = "Дані: Держстат"
        var title = 'Населення в областях України в 1991 та 2020 роках*'
        var max_column = 'value1'
        var value1_color = "#d8b365"
        var value2_color = "#01665e"
    }
    // append the svg object to the body of the page
    d3.select("#"+id).html('')
    var svg = d3.select("#"+id)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
    svg.append("text")
        .attr("x", (width / 2) - 10) 
        .attr("y", -5 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", '16px')
        .style("font-family", "Georgia")
        .text(title);
    svg.append("text")
        .attr("x", 0) 
        .attr("y", height + margin.bottom-20)
        .attr("text-anchor", "left")  
        .style("font-size", "12px")
        .style("font-family", "sans-serif")
        .attr("fill", "#9e9e9e")
        .text(subtitle)
    
    svg.append("text")
        .attr("x", 0) 
        .attr("y", height + margin.bottom-5)
        .attr("text-anchor", "left")  
        .style("font-size", "12px")
        .style("font-family", "sans-serif")
        .attr("fill", "#9e9e9e")
        .text(subtitle2)
    
    

    var x = d3.scaleLinear()
        .domain([0, d3.max(data.map(d => d[max_column]))])
        .range([ 0, width]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).ticks(10, "s"))

    // Y axis
    var y = d3.scaleBand()
        .range([ 0, height ])
        .domain(data.map(function(d) { return d.group; }))
        .padding(1);
    svg.append("g")
        .call(d3.axisLeft(y))

    // Lines
    svg.selectAll("myline")
        .data(data)
        .enter()
        .append("line")
        .attr("x1", function(d) { return x(d.value1); })
        .attr("x2", function(d) { return x(d.value2); })
        .attr("y1", function(d) { return y(d.group); })
        .attr("y2", function(d) { return y(d.group); })
        .attr("stroke", "grey")
        .attr("stroke-width", "1px")

    // Circles of variable 1
    svg.selectAll("mycircle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function(d) { return x(d.value1); })
        .attr("cy", function(d) { return y(d.group); })
        .attr("r", "6")
        .style("fill", value1_color)

    // Circles of variable 2
    svg.selectAll("mycircle")
        .data(data)
        .enter()
        .append("text")
        .attr("x", function(d) {
            if (id == 'housing') {
                if(d.group != "Донецька" && d.group != "Луганська"){
                    return x(d.value2)+22; 
                } else {
                    return x(d.value2)-20; 
                }
            } else {
                var value = (1-(d.value2/d.value1))*100
                if (value > 0) {
                    return x(d.value2)-20; 
                } else {
                    return x(d.value2)+22; 
                }
                
            }
        })
        .attr("y", function(d) { return y(d.group)+2; })
        .attr("text-anchor", "middle")  
            .style("font-size", '9px')
            .style("font-family", "sans-serif")
            .attr('fill','black')
            .text(function(d) {
                if (id == 'housing') {
                    if(d.group != "Донецька" && d.group != "Луганська"){
                        return '+'+(Math.round(d.value2/d.value1*100)-100)+"%"; 
                    } else {
                        return '-'+(100-Math.round(d.value2/d.value1*100))+"%"; 
                    }
                } else {
                    var value = (1-(d.value2/d.value1))*100
                    if (value > 0) {
                        return '-'+Math.round(value)+'%'
                    } else {
                        return '+'+Math.round(value*-1)+'%'
                    }
                    
                }
            })
    svg.selectAll("mycircle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function(d) { return x(d.value2); })
        .attr("cy", function(d) { return y(d.group); })
        .attr("r", "6")
        .style("fill", value2_color)

    var subgroups = ['1991','2020']
    var color = d3.scaleThreshold()
        .domain(subgroups)
        .range(['#b71c1c',value1_color,value2_color]);
    var legend = svg.append("g")
        .style("font-family", "sans-serif")
        .attr("font-size", 10)
        .selectAll("g")
        .data(subgroups)
        .enter().append("g")
        .attr("transform", function(d, i) { return "translate(0," + i * 18 + ")"; });
    legend.append("circle")
            .attr("cx", width-80)
            .attr("cy", height/2)
            .attr("r", 6)
            .attr("fill", color);
    legend.append("text")
        .attr("x", width-70)
        .attr("y", height/2)
        .attr("dy", "0.32em")
        .text(function(d) { return d; });            
}
function makeBarChart(w) {
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
    
    var parseTodayDate = d3.timeParse("%Y");
    var dayMonth = locale.format("%Y")
    var dates = ["1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"]
    var x_date = dates.map(d => parseTodayDate(d))
    var json = [51944400, 52056600, 52244100, 52114400, 51728400, 51297100, 50818400, 50370800, 49918100, 49429800, 48923200, 48457100, 48003500, 47622400, 47280800, 46929500, 46646000, 46372700, 46143700, 45962900, 45778500, 45633600, 45553000, 45426200, 42929300, 42760500, 42584500, 42386400, 42153200, 41902400]
    var plusMax = 5000000
    var color = '#e57373'
    var tooltipText = ' жителей</p>'
    var importedTickValues = x_date.filter(function(d,i) {
        if (i % 3 == 0) {
            return d
        }
    })
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
    d3.select("#linechart").html('')
    var svg = d3.select("#linechart")
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
        .text("Население Украины");

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
        .domain([30000000, d3.max(json)+plusMax])
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
        .attr("fill", '#0d47a1')
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
    svg.selectAll("mybar")
    .data(json)
    .enter()
    .append("text")
        .attr("x", function(d,i) { return x(x_date[i])+7; })
        .attr("y", function(d,i) { return y(json[i])-5; })
        .attr("text-anchor", "middle")  
    .style("font-size", '9px')
    .style("font-family", "sans-serif")
    .attr('fill','black')
    .text(function(d,i) {
        if(dates[i] == "1991" || dates[i] == "1993" || dates[i] == "2014" || dates[i] == "2020"){
            return d3.format(".3s")(d)
        } 
        
    })

    }