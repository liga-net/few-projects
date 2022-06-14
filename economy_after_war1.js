
var agriculture_production = [
    {"State": "картопля","Підприємства": 2,"Населення": 98,"total": 100},
    {"State": "овочі","Підприємства": 13.7,"Населення": 86.3,"total": 100},
    {"State": "вівс","Підприємства": 33.1,"Населення": 66.9,"total": 100},
    {"State": "ячмень яра","Підприємства": 36.4,"Населення": 63.6,"total": 100},
    {"State": "гречка","Підприємства": 51.1,"Населення": 48.9,"total": 100},
    {"State": "ячмень","Підприємства": 59.3,"Населення": 40.7,"total": 100},
    {"State": "прос","Підприємства": 72.5,"Населення": 27.5,"total": 100},
    {"State": "пшениця яра","Підприємства": 73.4,"Населення": 26.6,"total": 100},
    {"State": "жито озима","Підприємства": 75.4,"Населення": 24.6,"total": 100},
    {"State": "пшениця","Підприємства": 79.8,"Населення": 20.2,"total": 100},
    {"State": "пшениця озима","Підприємства": 80,"Населення": 20,"total": 100},
    {"State": "зернові і зернобобові","Підприємства": 80.3,"Населення": 19.7,"total": 100},
    {"State": "ячмень озима","Підприємства": 81,"Населення": 19,"total": 100},
    {"State": "зернобобові","Підприємства": 85.9,"Населення": 14.1,"total": 100},
    {"State": "кукурудза","Підприємства": 86.3,"Населення": 13.7,"total": 100},
    {"State": "соняшник","Підприємства": 86.6,"Населення": 13.4,"total": 100},
    {"State": "соя","Підприємства": 89.4,"Населення": 10.6,"total": 100},
    {"State": "горох","Підприємства": 92.6,"Населення": 7.4,"total": 100},
    {"State": "кукурудза кормова","Підприємства": 93.9,"Населення": 6.1,"total": 100},
    {"State": "буряк цукровий","Підприємства": 94.9,"Населення": 5.1,"total": 100},
    {"State": "кольза","Підприємства": 98.1,"Населення": 1.9,"total": 100},
    {"State": "ріпак озима","Підприємства": 99,"Населення": 1,"total": 100},
    {"State": "рис","Підприємства": 100,"Населення": 0,"total": 100}
    ]
            
            function horizontalBarChart(w,data,id) {
                if (w < 600) {
                    var start_width = w,
                    left = 70;
                } else {
                    var start_width = 600,
                    left = 130
                } 
                if (id == 'agriculture_production'){
                    start_height = 600
                    var title = 'Виробництва агрокультур: бізнес vs населення'
                    var keys = ["Підприємства","Населення"]
                    var colorPalette = ['#B07AA1','#72A3C9']
                }
                var vacKeys = ["картопля", "овочі", "вівс", "ячмень яра", "гречка", "ячмень", "прос", "пшениця яра", "жито озима", "пшениця", "пшениця озима", "зернові і зернобобові", "ячмень озима", "зернобобові", "кукурудза", "соняшник", "соя", "горох", "кукурудза кормова", "буряк цукровий", "кольза", "ріпак озима", "рис"]
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
                    .style("font-family", "Georgia")
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
                        if (vacKeys.includes(d.data.State)) {
                            var key = d.data.State
                        }
                        if (vacKeys.includes(d.data.State)) {
                            var value = d[1] - d[0]
                            var vacName = null
                            keys.forEach(function(x,i) {
                                if(d.data[x] == value) {
                                    vacName = x
                                }
                            })
                            var html = '<h4>'+key+'</h4><p>'+vacName+': '+d.data[vacName]+'%</p>'
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
    
                g.append("g")
                    .attr("class", "axis")
                    .attr("transform", "translate(0,0)")
                    .call(d3.axisLeft(y));
                    
                svg.append("g")
                    .attr("transform", "translate(0," + height + ")")
                    .call(d3.axisBottom(x).ticks(5))
                    .selectAll("text")
                    .style("text-anchor", "middle");
            }
            
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
                .text('Облікова ставка НБУ');
                svg.append("text")
                    .attr("x", 0) 
                    .attr("y", height + margin.bottom-10)
                    .attr("text-anchor", "left")  
                    .style("font-size", "12px")
                    .style("font-family", "sans-serif")
                    .attr("fill", "#9e9e9e")
                    .text("Дані: НБУ")
            var parseDate = d3.timeParse("%m/%d/%Y")
        
            var data = [{"date": "7/17/2014", "value": 12.5},
    {"date": "11/13/2014", "value": 14},
    {"date": "2/6/2015", "value": 19.5},
    {"date": "3/4/2015", "value": 30},
    {"date": "3/31/2015", "value": 30},
    {"date": "4/25/2015", "value": 30},
    {"date": "5/29/2015", "value": 30},
    {"date": "6/26/2015", "value": 30},
    {"date": "7/30/2015", "value": 30},
    {"date": "8/28/2015", "value": 27},
    {"date": "9/25/2015", "value": 22},
    {"date": "10/30/2015", "value": 22},
    {"date": "12/18/2015", "value": 22},
    {"date": "1/29/2016", "value": 22},
    {"date": "3/4/2016", "value": 22},
    {"date": "4/22/2016", "value": 19},
    {"date": "5/27/2016", "value": 18},
    {"date": "6/24/2016", "value": 16.5},
    {"date": "7/29/2016", "value": 15.5},
    {"date": "9/16/2016", "value": 15},
    {"date": "10/28/2016", "value": 14},
    {"date": "12/9/2016", "value": 14},
    {"date": "1/27/2017", "value": 14},
    {"date": "3/3/2017", "value": 14},
    {"date": "4/14/2017", "value": 13},
    {"date": "5/26/2017", "value": 12.5},
    {"date": "7/7/2017", "value": 12.5},
    {"date": "8/4/2017", "value": 12.5},
    {"date": "9/15/2017", "value": 12.5},
    {"date": "10/27/2017", "value": 13.5},
    {"date": "12/15/2017", "value": 14.5},
    {"date": "1/26/2018", "value": 16},
    {"date": "3/2/2018", "value": 17},
    {"date": "4/13/2018", "value": 17},
    {"date": "5/25/2018", "value": 17},
    {"date": "7/13/2018", "value": 17.5},
    {"date": "9/7/2018", "value": 18},
    {"date": "10/26/2018", "value": 18},
    {"date": "12/14/2018", "value": 18},
    {"date": "2/1/2019", "value": 18},
    {"date": "3/15/2019", "value": 18},
    {"date": "4/26/2019", "value": 17.5},
    {"date": "6/7/2019", "value": 17.5},
    {"date": "7/19/2019", "value": 17},
    {"date": "9/6/2019", "value": 16.5},
    {"date": "10/25/2019", "value": 15.5},
    {"date": "12/13/2019", "value": 13.5},
    {"date": "1/31/2020", "value": 11},
    {"date": "3/13/2020", "value": 10},
    {"date": "4/24/2020", "value": 8},
    {"date": "6/12/2020", "value": 6},
    {"date": "7/24/2020", "value": 6},
    {"date": "9/4/2020", "value": 6},
    {"date": "10/23/2020", "value": 6},
    {"date": "12/11/2020", "value": 6},
    {"date": "1/22/2021", "value": 6},
    {"date": "3/5/2021", "value": 6.5},
    {"date": "4/16/2021", "value": 7.5},
    {"date": "6/18/2021", "value": 7.5},
    {"date": "7/23/2021", "value": 8},
    {"date": "9/10/2021", "value": 8.5},
    {"date": "10/22/2021", "value": 8.5},
    {"date": "12/10/2021", "value": 9},
    {"date": "1/21/2022", "value": 10},
    {"date": "3/4/2022", "value": 10},
    {"date": "6/3/2022", "value": 25}]
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
                  .attr("fill", "#B07AA1")
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
                  .attr("stroke", "#B07AA1")
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
                    .attr("fill", "#B07AA1")
                    .attr("stroke", "none")
                    .attr("cx", function(d) { return x(d.date) })
                    .attr("cy", function(d) { return y(d.value) })
                    .attr("r", 3)
                
                svg.selectAll("myCircles")
                    .data(data)
                    .enter()
                    .append("text")
                    .text(function(d,i){
                        //console.log(data[i-1].value)
                        if (i > 0 && (d.value - data[i-1].value) > 1.5 ) {
                            return d.value+'%'
                        }
                    })
                    .attr("y", function(d,i) { 
                        if (i > 0 && (d.value - data[i-1].value) > 1.5) {
                            return y(d.value)-10
                        } 
                    })
                    .attr("x", function(d,i) {
                        if (i > 0 && (d.value - data[i-1].value) > 1.5) {
                             return x(d.date); 
                        }
                    })
                    .attr("text-anchor","middle")
                    .attr('font-family','Circe')
                    .attr('fill','black')
                    .attr('font-size',textSize)
            
            
            } 
            function negativeGroupedBarChart(w) {
        if (w < 600) {
            var start_width = w
        } else {
            var start_width = 600
        } 
        var margin = {top: 50, right: 30, bottom: 20, left: 50},
            width = start_width - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;
      // append the svg object to the body of the page
      d3.select("#deficit").html('')
      var svg = d3.select("#deficit")
        .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");
        if (start_width > 500) {
            var fontSize = '16px'
            var textSize = '12px'
        } else {
            var fontSize = '12px'
            var textSize = '10px'
        }
        svg.append("text")
            .attr("x", (width / 2) ) 
            .attr("y", 0 - (margin.top / 2))
            .attr("text-anchor", "middle")  
            .style("font-size", fontSize)
            .style("font-family", "Georgia")
            .text('Місячний дефіцит/профіцит державного бюджету, млрд грн');  
    
        var data = [{2021: '-5.7', 2022: '15.9', group: 'січень'}, {2021: '-20.7', 2022: '23.7', group: 'лютий'}, {2021: '-25.4', 2022: '-56.1', group: 'березень'}, {2021: '-29.1', 2022: '-147.4', group: 'квітень'}]
        var subgroups = ['2021', '2022']//data.columns.slice(1)
      
        var groups = d3.map(data, function(d){return(d.group)}).keys()
      
        // Add X axis
        var x = d3.scaleBand()
            .domain(groups)
            .range([0, width])
            .padding([0.2])
      
      var y = d3.scaleLinear()
            .domain([-150, 30])
            .range([height,0])
            .nice();
    
        svg.append("g")
          .call(d3.axisLeft(y));
      
        // Another scale for subgroup position?
        var xSubgroup = d3.scaleBand()
          .domain(subgroups)
          .range([0, x.bandwidth()])
          .padding([0.05])
      
        // color palette = one color per subgroup
        var color = d3.scaleOrdinal()
          .domain(subgroups)
          .range(['#B07AA1','#72A3C9'])
    
        // Add one dot in the legend for each name.
        svg.selectAll("mydots")
          .data(subgroups)
          .enter()
          .append("rect")
            .attr("x", 80)
            .attr("y", function(d,i){ return 193 + i*25}) // 100 is where the first dot appears. 25 is the distance between dots
            .attr("width", 12)
            .attr("height", 12)
            .style("fill", function(d){ return color(d)})
    
      
        svg.selectAll("mylabels")
          .data(subgroups)
          .enter()
          .append("text")
            .attr("x", 97)
            .attr("y", function(d,i){ return 200 + i*25}) 
            .style("fill", function(d){ return color(d)})
            .text(function(d){ return d})
            .attr("text-anchor", "left")
            .style("alignment-baseline", "middle")
      
        
        svg.append("g")
          .selectAll("g")
          .data(data)
          .enter()
          .append("g")
            .attr("transform", function(d) { return "translate(" + x(d.group) + ",0)"; })
          .selectAll("rect")
          .data(function(d) { return subgroups.map(function(key) { return {key: key, value: d[key]}; }); })
          .enter().append("rect")
            .attr("x", function(d) { return xSubgroup(d.key); })
            .attr("y", function(d) {return y(Math.max(0, d.value)); })
            .attr("width", xSubgroup.bandwidth())
            .attr("height", function(d) { return Math.abs(y(d.value) - y(0)); })
            .attr("fill", function(d) { return color(d.key); })
            
        svg.append("g")
          .selectAll("g")
          .data(data)
          .enter()
          .append("g")
            .attr("transform", function(d) { return "translate(" + x(d.group) + ",0)"; })
          .selectAll("text")
          .data(function(d) { return subgroups.map(function(key) { return {key: key, value: d[key]}; }); })
          .enter()
            .append("text")
            .text(function(d,i){
                return d.value
            })
            .attr("y", function(d,i) { 
              if (d.value > 0) {
                return Math.abs(y(d.value) - y(0))
              } else {
                return Math.abs(y(d.value)) - 10
              }
                
            })
            .attr("x", function(d,i) {
                return xSubgroup(d.key) + (xSubgroup.bandwidth()/2);
            })
            .attr("text-anchor","middle")
            .attr('font-family','Circe')
            .attr('fill',function(d) {
              if (Math.abs(y(d.value) - y(0)) < 27) {
                return 'black'
              } else {
                return 'white'
              }
            })
            .attr('font-size',textSize);
    
          svg.append("g")
            .attr("transform",function(d) {
              return  "translate(0," + 66 + ")"
            })
            .call(d3.axisBottom(x).tickSize(0));
    
      }
      negativeGroupedBarChart(window.innerWidth)
            horizontalBarChart(window.innerWidth,agriculture_production,'agriculture_production')
            makeAreaChart(window.innerWidth)
            window.onresize = function(event) {
                horizontalBarChart(window.innerWidth,agriculture_production,'agriculture_production')
                makeAreaChart(window.innerWidth)
            }