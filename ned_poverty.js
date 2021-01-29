if(document.createStyleSheet) {
    document.createStyleSheet('https://cdn.jsdelivr.net/gh/liga-net/few-projects/ned_poverty.css');
   }
   else {
    var styles = "@import url('https://cdn.jsdelivr.net/gh/liga-net/few-projects/ned_poverty.css');";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
}
function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
function makeBarChart(w) { 
    if (w < 600) {
        var start_width = w,
        left = 120;
    } else {
        var start_width = 600,
        left = 150
    } 

    d3.select("#poverty_country_chart").html('')
    var json = [92.7, 92, 89.3, 54.8, 53.2, 50.9, 42.5, 42.5, 28.2, 27.6, 26.2, 24.2, 23.1, 22.8, 22.7, 22.3, 19.8, 15.9, 13.9, 12.8, 12.6, 12.2, 11.2, 8.5, 8.4, 3.7, 3.4, 3, 0.4]
    var date = ["Сьерра-Леоне", "Нигерия", "Ангола", "Кыргызстан", "Индонезия", "Гондурас", "Армения", "Грузия", "Колумбия", "Монголия", "Сальвадор", "Эквадор", "Вьетнам", "Боливия", "Мексика", "Перу", "Бразилия", "Парагвай", "Доминикана", "Молдова", "Панама", "Аргентина", "Коста-Рика", "Турция", "Таиланд", "Россия", "Украина", "Уругвай", "Беларусь"]
    // set the dimensions and margins of the graph
    var margin = {top: 30, right: 37, bottom: 70, left: left},
        width = start_width - margin.left - margin.right,
        height = 650 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#poverty_country_chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
    if (width > 500) {
        var xtitle = 130
        var fontSize = '18px'
    } else {
        var xtitle = 60
        var fontSize = '14px'
    }
       svg.append("text")
        .attr("x", xtitle) 
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", fontSize)
        .style("font-family", "sans-serif")
        .style('font-family','Circe')
        .text('Уровень бедности в странах по шкале ниже $5.5 по ППС');
        var x = d3.scaleLinear()
            .domain([0, d3.max(json)])
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
            tooltipBee.html('<p>'+date[i]+':</p><p>'+d+'% населения')
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
        .text(function(d,i){return String(d)+'%'})
        .attr("y", function(d,i) { return y(date[i])+12; })
        .attr("x", function(d,i) { return x(json[i])+20; })
        .attr("text-anchor","middle")
        .attr('font-family','Circe')
        .attr('fill','black')
        .attr('font-size','12px');
    }

function makeHorizontalBarChart(w,id) {
    // set the dimensions and margins of the graph
    function wrap(text, width) {
        text.each(function() {
            var text = d3.select(this),
                words = text.text().split(/\s+/).reverse(),
                word,
                line = [],
                lineNumber = 0,
                lineHeight = 1.1, // ems
                y = text.attr("y"),
                dy = parseFloat(text.attr("dy")),
                tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
            while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
            }
            }
        });
    }
    if (w>600) {
        var windowW = 600
    } else {
        var windowW = w-30
    }
    var margin =  {top: 50, right: 0, bottom: 30, left: 40},
        width = windowW - margin.left + margin.right,
        height = 450 - margin.top - margin.bottom+30;

    // append the svg object to the body of the page
    d3.select("#"+id).html("")
    var svg = d3.select("#"+id)
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
    if (width > 500) {
        var fontSize = '18px'
        var textSize = '12px'
        var xBand = 22
    } else {
        var fontSize = '12px'
        var textSize = '10px'
        var xBand = 12
    }
    if (id == 'zp_work') {
        var max = 26000
        var title = 'Рост и падение зарплат по секторам в 2020, данные Work.ua'
        var end = ' грн</p>'
    } else {
        
        var max = 100
        var title = 'Динамика уровня бедности, 9 месяцев 2015-2019'
        var end = '%</p>'
    }
    
    svg.append("text")
        .attr("x", (width / 2) - 10) 
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", fontSize)
        .style("font-family", "Georgia")
        .text(title);
    // Parse the Data
    d3.csv('https://cdn.jsdelivr.net/gh/liga-net/few-projects/'+id+".csv", function(data) {

    // List of subgroups = header of the csv files = soil condition here
    var subgroups = data.columns.slice(1,3)
    // List of groups = species here = value of the first column called group -> I show them on the X axis
    var groups = d3.map(data, function(d){return(d.group)}).keys()
    // Add X axis
    var x = d3.scaleBand()
        .domain(groups)
        .range([0, width])
        .padding([0.15])
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickSize(0))
        .selectAll(".tick text")
        .call(wrap, x.bandwidth())
        .attr("font-size", "9px");

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, max])
        .range([ height, 0 ]);
    svg.append("g")
        .call(d3.axisLeft(y).ticks(10, "f"));

    // Another scale for subgroup position?
    var xSubgroup = d3.scaleBand()
        .domain(subgroups)
        .range([0, x.bandwidth()])
        .padding([0.05])

    // color palette = one color per subgroup
    var color = d3.scaleOrdinal()
        .domain(subgroups)
        .range(['#004c6d', '#d32f2f'])
    
var legend = svg.append("g")
    .attr("font-family", "Georgia")
    .attr("font-size", 10)
    .selectAll("g")
    .data(subgroups.slice())
    .enter().append("g")
    .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

legend.append("rect")
    .attr("x", windowW -275)
    .attr("width", 19)
    .attr("height", 19)
    .attr("fill", color);

legend.append("text")
    .attr("x", windowW - 250)
    .attr("y", 9.5)
    .attr("dy", "0.32em")
    .text(function(d) { return d; });

var onePoint = d3.format(".1f");
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
    // Show the bars
    svg.append("g")
        .selectAll("g")
        // Enter in data = loop group per group
        .data(data)
        .enter()
        .append("g")
        .attr("transform", function(d) { return "translate(" + x(d.group) + ",0)"; })
        .selectAll("rect")
        .data(function(d) { return subgroups.map(function(key) { return {group:d.group,key: key, value: d[key],total:d.change}; }); })
        .enter()
        .append("text")
        .text(function(d,i){
            if (id == 'poverty') {
                return d.value+'%'
            }
            })
        .attr("y", function(d,i) { 
            if (id == 'poverty') {
                return y(d.value)-7
            } 
        })
        .attr("x", function(d,i) {
            if (id == 'poverty') {
                 return xSubgroup(d.key)+xBand; 
            }
        })
        .attr("text-anchor","middle")
        .attr('font-family','Circe')
        .attr('fill','black')
        .attr('font-size',textSize)
    svg.append("g")
        .selectAll("g")
        .data(data)
        .enter()
        .append("g")
        .attr("transform", function(d) { return "translate(" + x(d.group) + ",0)"; })
        .selectAll("rect")
        .data(function(d) { return subgroups.map(function(key) { return {group:d.group,key: key, value: d[key],total:d.change}; }); })
        .enter()
        .append("rect")
        .attr("x", function(d) { return xSubgroup(d.key); })
        .attr("y", function(d) { return y(d.value); })
        .attr("width", xSubgroup.bandwidth())
        .attr("height", function(d) { return height - y(d.value); })
        .attr("fill", function(d) { return color(d.key); })
        .on("mouseover", function(d) {
            tooltipBee.html('<h4>'+d.group+'</h4><p>'+d.key+': '+ numberWithSpaces(d.value)+end)
            tooltipBee.style("visibility", "visible")
            })
        .on("mousemove", function() {
            return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
        })
        .on("mouseout", function(d){
            return tooltipBee.style("visibility", "hidden");
        })
        
    })

}



function makeMultiLineChart(w) {
    if (w < 600) {
        var start_width = w,
        start_height = w/1.2;
    } else {
        var start_width = 600,
        start_height = 450;
    } 
    var margin = {top: 70, right: 20, bottom: 30, left: 35},
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

    // define the 1st line
    var valueline = d3.line()
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y(d.close); });

    // define the 2nd line
    var valueline2 = d3.line()
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y(d.open); });


    d3.select("#multiline").html('')
    var svg = d3.select("#multiline").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");
    svg.append("text")
        .attr("x", textX) 
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", fontSize)
        .style("font-family", "sans-serif")
        .style('font-family','Circe')
        .text('Размер законодательного и фактического прожиточных минимумом');
    // Get the data
    d3.csv("https://cdn.jsdelivr.net/gh/liga-net/few-projects/minimum.csv", function(error, data) {
    if (error) throw error;

    // format the data
    data.forEach(function(d) {
        d.date = parseTime(d.date);
        d.close = +d.close;
        d.open = +d.open;
    });
    var subgroups = ["Законодательный",'Фактический']
    var color = d3.scaleOrdinal()
        .domain(subgroups)
        .range(['#004c6d','#d32f2f'])
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
    y.domain([0, d3.max(data, function(d) {
        return Math.max(d.close, d.open); })]);

    // Add the valueline path.
    svg.append("path")
        .data([data])
        .attr("class", "line")
        .style("stroke", "#d32f2f")
        .style("stroke-width", "3px")
        .attr("d", valueline);

    // Add the valueline2 path.
    svg.append("path")
        .data([data])
        .attr("class", "line")
        .style("stroke-width", "3px")
        .style("stroke", "#004c6d")
        .attr("d", valueline2);

    // Add the X Axis
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).ticks(6));

    // Add the Y Axis
    svg.append("g")
        .call(d3.axisLeft(y));

    });
}

makeBarChart(window.innerWidth)
makeHorizontalBarChart(window.innerWidth,'zp_work')
makeHorizontalBarChart(window.innerWidth,'poverty')
makeMultiLineChart(window.innerWidth)
window.onresize = function(event) {
    makeBarChart(window.innerWidth)
    makeHorizontalBarChart(window.innerWidth,'zp_work')
    makeHorizontalBarChart(window.innerWidth,'poverty')
    makeMultiLineChart(window.innerWidth)
};