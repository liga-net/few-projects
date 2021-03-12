function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
var lineOptions = {
    'id':'linechart',
    "title":"",
    'subtitle':"",
    'col': ['value'],
    'colors': ["#d32f2f"],
    'lineTitle': ''
};

var linechartdata = [
{"date":"01/01/2008 00:00","value":"6177000000"},
{"date":"01/01/2009 00:00","value":"5370000000"},
{"date":"01/01/2010 00:00","value":"5862000000"},
{"date":"01/01/2011 00:00","value":"7019000000"},
{"date":"01/01/2012 00:00","value":"7526000000"},
{"date":"01/01/2013 00:00","value":"8537000000"},
{"date":"01/01/2014 00:00","value":"6489000000"},
{"date":"01/01/2015 00:00","value":"6959000000"},
{"date":"01/01/2016 00:00","value":"7535000000"},
{"date":"01/01/2017 00:00","value":"9264000000"},
{"date":"01/01/2018 00:00","value":"11111000000"},
{"date":"01/01/2019 00:00","value":"11921000000"},
{"date":"01/01/2020 00:00","value":"12121000000"}
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

var monthRU = [{'id':1,'month':'января'},
    {'id':2,'month':'февраля'},
    {'id':3,'month':'марта'},
    {'id':4,'month':'апреля'},
    {'id':5,'month':'мая'},
    {'id':6,'month':'июня'},
    {'id':7,'month':'июля'},
    {'id':8,'month':'августа'},
    {'id':9,'month':'сентября'},
    {'id':10,'month':'октября'},
    {'id':11,'month':'ноября'},
    {'id':12,'month':'декабря'}];
    

function makeLineChart(w,chartOptions,uploaded_data) { 
    if (w>600) {
        var windowW = 800
    } else {
        var windowW = w-20
    }
    var margin =  {top: 50, right: 20, bottom: 50, left: 40},
        width = windowW - margin.left + margin.right,
        height = 350 - margin.top - margin.bottom+30;
    
    d3.select("#"+chartOptions.id).html("")
    
    var svg = d3.select("#"+chartOptions.id)
        .append("svg")
        .attr("id", 'svg_linechart')
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
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", fontSize)
        .style("font-family", "Georgia")
        .text(chartOptions.title);
    
    svg.append("text")
        .attr("x", 0) 
        .attr("y", height + margin.bottom-10)
        .attr("text-anchor", "left")  
        .style("font-size", "12px")
        .style("font-family", "Georgia")
        .attr("fill", "#9e9e9e")
        .text(chartOptions.subtitle)

    var parseDate = d3.timeParse("%m/%d/%Y %H:%M");
        
    var x = d3.scaleTime().range([0, width]),
        y = d3.scaleLinear().range([height, 0]);

    var sources = uploaded_data.map(function(d) {
        return {date: parseDate(d.date), kW: parseFloat(d[chartOptions.col])};
    });
    
    x.domain(d3.extent(sources, function(d) { return d.date; }))
    y.domain([0,d3.max(sources, function(d) { return +d.kW; })]);
    
    xAxis = svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickFormat(multiFormat).ticks(tickValue));
        
    yAxis = svg.append("g")
        .call(d3.axisLeft(y)
            .ticks(5).ticks(10, "s"));
        
    svg.append("path")
        .datum(sources)
        .attr("fill", "none")
        .attr("stroke", '#8FC0D2')
        .attr("stroke-width", 2.5)
        .attr("d", d3.line()
            .x(function(d) {return x(d.date) })
            .y(function(d) {return y(d.kW) })
        )
    svg.append("g").selectAll("text")
    .data(sources)
    .enter()
    .append("text")
    .attr("x", function(d) {
        return x(d.date)
    })
    .attr("y", function(d) {
        return y(d.kW) - 7
    })
    .attr("text-anchor","middle")
    .attr('font-family','Circe')
    .attr('fill','black')
    .attr('font-size','10px')
    .text(function(d,i) {
        if (i % 2 == 0 && i != 0) {
            return '$'+String((d.kW / 1000000000).toFixed(1))+' млрд'
        }
        
    });

}
function makeMultiLineChart(w,id) {
    if (w < 600) {
        var start_width = w,
        start_height = w/1.2;
    } else {
        var start_width = 800,
        start_height = 450;
    } 
    var margin = {top: 70, right: 20, bottom: 30, left: 55},
        width = start_width - margin.left - margin.right,
        height = start_height - margin.top - margin.bottom;
    if (width > 500) {
        var fontSize = '18px'
        var textX = width / 2
    } else {
        var fontSize = '11px'
        var textX = 140
    }
    // parse the date / time
    //var parseTime = d3.timeParse("%d-%b-%y");
    var parseTime = d3.timeParse("%m/%d/%Y");

    // set the ranges
    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    


    d3.select("#"+id).html('')
    var svg = d3.select("#"+id).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");
    // Get the data
    d3.csv('https://cdn.jsdelivr.net/gh/liga-net/few-projects/'+id+".csv", function(error, data) {
    if (error) throw error;
    // format the data
    if (id == 'apple_mobility') {
        data.forEach(function(d) {
            d.date = parseTime(d.date);
            d.driving = +d.driving;
            d.walking = +d.walking;
        });
        var subgroups = ["Вождение",'Прогулки']
        y.domain([0, d3.max(data, function(d) {
            return Math.max(d.driving, d.walking); })]);
        // define the 1st line
        var valueline = d3.line()
            .x(function(d) { return x(d.date); })
            .y(function(d) { return y(d.driving); });

        // define the 2nd line
        var valueline2 = d3.line()
            .x(function(d) { return x(d.date); })
            .y(function(d) { return y(d.walking); });
    } else {
        data.forEach(function(d) {
            d.date = parseTime(d.date);
            d.born = +d.born;
            d.died = +d.died;
        });
        var subgroups = ["Рождаемость",'Смертность']
        y.domain([0, d3.max(data, function(d) {
        return Math.max(d.born, d.died); })]);
        // define the 1st line
        var valueline = d3.line()
            .x(function(d) { return x(d.date); })
            .y(function(d) { return y(d.died); });

        // define the 2nd line
        var valueline2 = d3.line()
            .x(function(d) { return x(d.date); })
            .y(function(d) { return y(d.born); });
    }
    var color = d3.scaleOrdinal()
        .domain(subgroups)
        .range(['#8FC0D2','#d32f2f'])
        //['#004c6d', '#ec9c9d']

    var legend = svg.append("g")
        .attr("font-family", "Georgia")
        .attr("font-size", 10)
        .selectAll("g")
        .data(subgroups)
        .enter().append("g")
        .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

    legend.append("rect")
        .attr("x", width-100)
        .attr("y", height-51)
        .attr("width", 12)
        .attr("height", 12)
        .attr("fill", color);

    legend.append("text")
        .attr("x", width-85)
        .attr("y", height-45)
        .attr("dy", "0.32em")
        .text(function(d) { return d; });

    // Scale the range of the data
    x.domain(d3.extent(data, function(d) { return d.date; }));
    
    
    svg.append("path")
        .data([data])
        .attr("class", "line")
        .style("fill", "none")
        .style("stroke-width", "3px")
        .style("stroke", "#8FC0D2")
        .attr("d", valueline2);
    // Add the valueline path.
    svg.append("path")
        .data([data])
        .attr("class", "line")
        .style("stroke", "#d32f2f")
        .style("fill", "none")
        .style("stroke-width", "3px")
        .attr("d", valueline);

    // Add the valueline2 path.
    

    // Add the X Axis
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).ticks(6));

    // Add the Y Axis
    svg.append("g")
        .call(d3.axisLeft(y));

    });
}

makeMultiLineChart(window.innerWidth,'apple_mobility')
makeMultiLineChart(window.innerWidth,'ukr_fertility')
makeLineChart(window.innerWidth,lineOptions,linechartdata)
window.onresize = function(event) {
    makeMultiLineChart(window.innerWidth,'apple_mobility')
    makeMultiLineChart(window.innerWidth,'ukr_fertility')
    makeLineChart(window.innerWidth,lineOptions,linechartdata)
};