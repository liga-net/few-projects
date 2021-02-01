function makeAreaChart(w) {
    if (w>600) {
        var windowW = 600
    } else {
        var windowW = w
    }
    var margin = {top: 60, right:25, bottom: 50, left: 25},
        width = windowW - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;
    
    d3.select("#areachart").html('')
    var svg = d3.select("#areachart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    if (width > 500) {
        var fontSize = '18px'
        var textSize = '12px'
            var xBand = 22
    } else {
        var fontSize = '12px'
        var textSize = '10px'
        var xBand = 12
    }
    svg.append("text")
        .attr("x", (width / 2) - 10) 
        .attr("y", -5 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", fontSize)
        .style("font-family", "Georgia")
        .text('Индекс потребительских цен в Украине');
        svg.append("text")
            .attr("x", 0) 
            .attr("y", height + margin.bottom-10)
            .attr("text-anchor", "left")  
            .style("font-size", "12px")
            .style("font-family", "sans-serif")
            .attr("fill", "#9e9e9e")
            .text("Данные: Госстат")
    var parseDate = d3.timeParse("%m/%d/%Y")

    var data = [
        {"date": "01/01/2000", "value": 25.8},
        {"date": "01/01/2001", "value": 6.1},
        {"date": "01/01/2002", "value": -0.6},
        {"date": "01/01/2003", "value": 8.2},
        {"date": "01/01/2004", "value": 12.3},
        {"date": "01/01/2005", "value": 10.3},
        {"date": "01/01/2006", "value": 11.6},
        {"date": "01/01/2007", "value": 16.6},
        {"date": "01/01/2008", "value": 22.3},
        {"date": "01/01/2009", "value": 12.3},
        {"date": "01/01/2010", "value": 9.1},
        {"date": "01/01/2011", "value": 4.6},
        {"date": "01/01/2012", "value": -0.2},
        {"date": "01/01/2013", "value": 0.5},
        {"date": "01/01/2014", "value": 24.9},
        {"date": "01/01/2015", "value": 43.3},
        {"date": "01/01/2016", "value": 12.4},
        {"date": "01/01/2017", "value": 13.7},
        {"date": "01/01/2018", "value": 9.8},
        {"date": "01/01/2019", "value": 4.1},
        {"date": "01/01/2020", "value": 5}]
    var data = data.map(function(d) {
        return {date: parseDate(d.date), value: parseFloat(d.value)};
    });
        // Add X axis --> it is a date format
        var x = d3.scaleTime()
          .domain(d3.extent(data, function(d) { return d.date; }))
          .range([ 0, width ]);
        svg.append("g")
          .attr("transform", "translate(0," + (height+5) + ")")
          .call(d3.axisBottom(x).ticks(5).tickSizeOuter(0));
    
        // Add Y axis
        var y = d3.scaleLinear()
          .domain( d3.extent(data, function(d) { return d.value; }) )
          .range([ height, 0 ]);
        svg.append("g")
          .attr("transform", "translate(-5,0)")
          .call(d3.axisLeft(y).tickSizeOuter(0));
    
        // Add the area
        svg.append("path")
          .datum(data)
          .attr("fill", "#ff7043")
          .attr("fill-opacity", .3)
          .attr("stroke", "none")
          .attr("d", d3.area()
            .x(function(d) { return x(d.date) })
            .y0( height )
            .y1(function(d) { return y(d.value) })
            )
    
        // Add the line
        svg.append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", "#ff7043")
          .attr("stroke-width", 3)
          .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return y(d.value) })
            )
    
        // Add the line
        svg.selectAll("myCircles")
          .data(data)
          .enter()
          .append("circle")
            .attr("fill", "#ff7043")
            .attr("stroke", "none")
            .attr("cx", function(d) { return x(d.date) })
            .attr("cy", function(d) { return y(d.value) })
            .attr("r", 3)
        
        svg.selectAll("myCircles")
            .data(data)
            .enter()
            .append("text")
            .text(function(d,i){
                if (i % 2 == 1 || i == 20) {
                    return d.value+'%'
                }
            })
            .attr("y", function(d,i) { 
                if (i % 2 == 1 || i == 20) {
                    return y(d.value)-10
                } 
            })
            .attr("x", function(d,i) {
                if (i % 2 == 1 || i == 20) {
                     return x(d.date); 
                }
            })
            .attr("text-anchor","middle")
            .attr('font-family','Circe')
            .attr('fill','black')
            .attr('font-size',textSize)
    
    
    } 
    function makeMultiLineChart(w,level) {
        if (w < 600) {
            var start_width = w,
            start_height = 600;
        } else {
            var start_width = 600,
            start_height = 600;
        } 
        var margin = {top: 70, right: 100, bottom: 50, left: 75},
            width = start_width - margin.left - margin.right,
            height = start_height - margin.top - margin.bottom;
        if (width > 400) {
            var fontSize = '18px'
            var textX = width / 1.7
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

        var subgroups = ["Бензин А-95","Бензин А-92","Дизель","Свекла","Капуста","Картошка","Пщено","Лук","Сахар","Гречка","Яйца","Сигареты","Подсолнечное масло","Жаропонижающие и обезболивающие препараты отечественные","Стоматология","Манные крупы"]
        function makeLine(index) {
            var valueline = d3.line()
            .x(function(d) { return x(d.date); })
            .y(function(d) {
                 return y(d[subgroups[index]]); 
                });
            return valueline
        }

        d3.select("#multiline_"+level).html('')
        var svg = d3.select("#multiline_"+level).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")");
        // Get the data
        d3.csv("https://cdn.jsdelivr.net/gh/liga-net/few-projects/inflation_2021.csv", function(error, data) {
        if (error) throw error;

        // format the data
        data.forEach(function(d) {
            d.date = parseTime(d.date);
        });
        if (level == 'low') {
            subgroups = ["Бензин А-95","Бензин А-92","Дизель","Свекла","Капуста","Картошка","Пшено","Лук"]
            var yLevel = 2.06
            var title = 'Какие товары подешевели больше всего с декабря 2019'
            
        } else {
            subgroups = ["Сахар","Гречка","Яйца","Сигареты","Подсолнечное масло","Жаропонижающие и обезболивающие препараты отечественные","Стоматология","Манные крупы"]
            var yLevel = 1.6
            var title = 'Какие товары подорожали больше всего с декабря 2019'
        }
        svg.append("text")
            .attr("x", textX) 
            .attr("y", 0 - (margin.top / 2))
            .attr("text-anchor", "middle")  
            .style("font-size", fontSize)
            .style("font-family", "sans-serif")
            .style('font-family','Circe')
            .text(title);
        svg.append("text")
            .attr("x", 0) 
            .attr("y", height + margin.bottom-10)
            .attr("text-anchor", "left")  
            .style("font-size", "12px")
            .style("font-family", "sans-serif")
            .attr("fill", "#9e9e9e")
            .text("Данные: Госстат")
        // Scale the range of the data
        x.domain(d3.extent(data, function(d) { return d.date; }));
        y.domain([0, yLevel]);

        var myColor = d3.scaleLinear().domain([0,subgroups.length+1])
        .range(["#7f0000", "#ffebee"])
        
        for (i=0;i<subgroups.length;i++) {
            var line = svg.append("path")
            .data([data])
            .attr("class", "line")
            .attr("id", "line"+String(i))
            .style('fill','none')
            .style("stroke-width", "3px")
            .style("stroke", myColor(i))
            .attr("d", makeLine(i))
            if (subgroups[i]!= "Бензин А-92" && subgroups[i]!= "Дизель" && subgroups[i] != "Сигареты" && subgroups[i] != "Жаропонижающие и обезболивающие препараты отечественные" && subgroups[i] != "Манные крупы") {
                svg.append('text')
                .data([data])
                .attr('fill','black')
                .style('font-size','10px')
                .style("font-family", "sans-serif")
                .attr('x',function(d) {return x(data[data.length-1].date) +10 })
                .attr("y", function(d) { return y(data[data.length-1][subgroups[i]]) + 5; })
                .text(subgroups[i]);
            }
            
        }
        // Add the X Axis
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).ticks(6));

        // Add the Y Axis
        var formatPercent = d3.format(".0%");
        svg.append("g")
            .call(d3.axisLeft(y).tickFormat(formatPercent));

        });
    }
    makeAreaChart(window.innerWidth)
    makeMultiLineChart(window.innerWidth,'low')
    makeMultiLineChart(window.innerWidth,'up')
    window.onresize = function(event) {
        makeAreaChart(window.innerWidth)
        makeMultiLineChart(window.innerWidth,'low')
        makeMultiLineChart(window.innerWidth,'up')
    }