var locale = d3.timeFormatLocale({
    "dateTime": "%A, %e %B %Y г. %X",
    "date": "%d.%m.%Y",
    "time": "%H:%M:%S",
    "periods": ["AM", "PM"],
    "days": ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
    "shortDays": ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
    "months": ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
    "shortMonths": ["січ", "лют", "бер", "квіт", "трав", "черв", "лип", "серп", "вер", "жов", "лист", "груд"]
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
    formatMonth = locale.format("%b %y"),
    formatYear = locale.format("%b");

function numberWithSpaces(x) {
    return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
function createDataset(data,value) {
    var dataset = []
    data.forEach(function(row) {
        if (row[value] != ''){
            dataset.push({'date':row['date'],'value':row[value]})
        } else {
            dataset.push({'date':row['date'],'value':0})
        }
    })
    return dataset
}
var usernameTitle = {'ASupersharij': 'Анатолий Шарий',
    'legitimniy': 'Легитимный',
    'rezident_ua': 'Резидент',
    'montyan2': '#МОНТЯН!',
    'first_political': 'First Новости Войны',
    'Novoeizdanie': 'Новое Издание',
    'ZeRada1': 'ЗеРада',
    'ghost_of_novorossia': 'ПриZрак Новороссии',
    'spletnicca': 'Сплетница',
    'OlgaSharij': 'ОЛЬГА ШАРИЙ',
    'ZE_kartel': 'Картель',
    'nabludatels': 'Наблюдатель',
    'MediaKiller2021': 'MediaKiller',
    'skosoi': 'Женщина с косой',
    'Media_Post_UA': 'MediaPost',
    'skeptik_21': 'Скептик',
    'krioggen': 'Криоген',
    'sheptoon': 'Шептун🇺🇦Украина Война',
    'za_grany': 'ЗА ГРАНЬЮ /Новости войны',
    'nach_shtabu': 'НачШтабу',
    'truexanewsua': 'Труха⚡️Украина',
    'u_now': 'Украина Сейчас',
    'UAonlii': 'Украина Online',
    'insiderUKR': 'Инсайдер UA',
    'voynareal': 'Реальная Война | Украина',
    '4kAkN49IKJBhZDk6': 'Телеграмна служба новин',
    'oko_xx': 'Всевидящее ОКО 🇺🇦 Украина',
    'U3r_kPBc7PpgiYP7': 'Top News',
    'UkraineNow': 'Ukraine NOW',
    'TVbmPYPLV_f00SF3': 'Український телеграм: новини'}

function makeAreaChart(data,index) {
    var dataset = createDataset(data,channels_list[index])
    var w = d3.select('#big_charts').node().getBoundingClientRect().width
    if (w>=600) {
        var windowW = 189
        if (index == 0 || index % 3 == 0 && index < 20) {
            var left = 36
        } else if (index >= 20 && (index-20) % 3 == 0) {
            var left = 36
        }else {
            var left = 2
        }
        var right = 0
    } else {
        var windowW = (w/2)-10
        if (index == 0 || index % 2 == 0 && index < 20) {
            var left = 36
        } else if (index >= 20 && (index-20) % 2 == 0) {
            var left = 36
        }else {
            var left = 2
        }
        var right = 0
    } 
    var margin = {top: 60, right:right, bottom: 50, left: left},
        width = windowW - margin.left - margin.right,
        height = 200 - margin.top - margin.bottom;
    
    d3.select("#chart"+index).html('')
    
    var svg = d3.select("#chart"+index)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    if (width >= 600) {
        var fontSize = '18px'
        var textSize = '12px'
        var xBand = 22
    } else {
        var fontSize = '10px'
        var textSize = '10px'
        var xBand = 12
    }
    
    svg.append("text")
        .attr("x", (width / 2) - 10) 
        .attr("y", -5 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", fontSize)
        .style("font-family", "sans-serif")
        .text(usernameTitle[channels_list[index]]);
    
    var parseDate = d3.timeParse("%Y-%m-%d")
    var parseFormatDate = d3.timeFormat("%d.%m.%Y")

    var dataset = dataset.map(function(d,i) {
        var sum = dataset.slice(0,i).map(x => parseFloat(x.value)).reduce((a, b) => a + b, 0)
        if (i > 0 && d.value == 0 && sum != 0) {
            indexNull = 1
            while (parseFloat(dataset[i-indexNull].value) == 0) {
                indexNull += 1
            }
            return {date: parseDate(d.date), value: parseFloat(dataset[i-indexNull].value)};
        } else {
            return {date: parseDate(d.date), value: parseFloat(d.value)};
        }
        
        
    });
    var x = d3.scaleTime()
        .domain(d3.extent(dataset, function(d) { return d.date; }))
        .range([ 0, width ]);

    if (w>=600) {
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).ticks(5).tickSizeOuter(0).tickFormat(formatMonth));
    } else {
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).ticks(4).tickSizeOuter(0).tickFormat(formatYear));
    } 

    function drawAxis(changeValue) {
        if (index == 0 || index % changeValue == 0 && index < 20) {
            var maxValue1 = d3.max(dataset.map(d=>d.value))
            var newDataSet = createDataset(data,channels_list[index+1])
            var maxValue2 = d3.max(newDataSet.map(d=>parseFloat(d.value)))
            if (index+2 != 20){
                var newDataSet = createDataset(data,channels_list[index+2])
                var maxValue3 = d3.max(newDataSet.map(d=>parseFloat(d.value)))
                var max = d3.max([maxValue1,maxValue2,maxValue3])
            } else {
                var max = d3.max([maxValue1,maxValue2])
            }
            var y = d3.scaleLinear()
                .domain([0,max] )
                .range([ height, 0 ]);
            svg.append("g")
                .attr("transform", "translate(-5,0)")
                .call(d3.axisLeft(y).ticks(3,'s').tickSizeOuter(0));

        } else if (index >= 20 && (index-20) % changeValue == 0) {
            var maxValue1 = d3.max(dataset.map(d=>d.value))
            var newDataSet = createDataset(data,channels_list[index+1])
            var maxValue2 = d3.max(newDataSet.map(d=>parseFloat(d.value)))
            var newDataSet = createDataset(data,channels_list[index+2])
            var maxValue3 = d3.max(newDataSet.map(d=>parseFloat(d.value)))
            var max = d3.max([maxValue1,maxValue2,maxValue3])
            var y = d3.scaleLinear()
                .domain([0,max] )
                .range([ height, 0 ]);
            svg.append("g")
                .attr("transform", "translate(-5,0)")
                .call(d3.axisLeft(y).ticks(3,'s').tickSizeOuter(0));
        } else {
            var maxValue1 = d3.max(dataset.map(d=>d.value))
            var newDataSet = createDataset(data,channels_list[index-1])
            var maxValue2 = d3.max(newDataSet.map(d=>parseFloat(d.value)))
            if (index+1 != 20){
                var newDataSet = createDataset(data,channels_list[index+1])
                var maxValue3 = d3.max(newDataSet.map(d=>parseFloat(d.value)))
                var max = d3.max([maxValue1,maxValue2,maxValue3])
            } else {
                var max = d3.max([maxValue1,maxValue2])
            }
        }
        return max
    }
    
    if (w>=600) {
        var max = drawAxis(3)
        var y = d3.scaleLinear()
            .domain([0,max] )
            .range([ height, 0 ]);
    } else {
        var max = drawAxis(2)
        var y = d3.scaleLinear()
            .domain([0,max] )
            .range([ height, 0 ]);
    } 
    
    // Add Y axis
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

    svg.append("path")
        .datum(dataset)
        .attr("fill", "#28618C")
        .attr("fill-opacity", .3)
        .attr("stroke", "none")
        .attr("class", "line")
        .attr("d", d3.area()
            .x(function(d) { return x(d.date) })
            .y0( height )
            .y1(function(d) { return y(d.value) })
        )
        .on("mousemove", handleMouseMove)
        .on("mouseout", function(d){
            return tooltipBee.style("visibility", "hidden");
        })
    const bisectDate = d3.bisector(dataPoint => dataPoint.date).left;

    function handleMouseMove(data) {
        const currentXPosition = d3.mouse(this)[0];
        // Get the x value of the current X position
        const xValue = x.invert(currentXPosition);
        
        // Get the index of the xValue relative to the dataSet
        const dataIndex = bisectDate(data, xValue, 1);
        const rightData = data[dataIndex];
        
        var html = '<h4>'+usernameTitle[channels_list[index]]+'</h4><p><b>'+parseFormatDate(xValue)+'</b>: '+numberWithSpaces(rightData.value)+' підписників</p>'
        tooltipBee.html(html)
        tooltipBee.style("visibility", "visible")
        tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
    }
        // Add the line
    svg.append("path")
        .datum(dataset)
        .attr("fill", "none")
        .attr("stroke", "#28618C")
        .attr("stroke-width", 3)
        .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return y(d.value) })
        );
        
    } 

d3.csv('https://cdn.jsdelivr.net/gh/liga-net/few-projects/channels_growth.csv', function(data) {
    channels_list = data.columns.slice(1,)
    channels_list.forEach(function(channel,index) {
        makeAreaChart(data,index)
    })
})

window.onresize = function(event) {
    d3.csv('https://cdn.jsdelivr.net/gh/liga-net/few-projects/channels_growth.csv', function(data) {
        channels_list = data.columns.slice(1,)
        channels_list.forEach(function(channel,index) {
            makeAreaChart(data,index)
        })
    })
}