var ukraine = getData('https://cdn.jsdelivr.net/gh/liga-net/few-projects/local_elections/ukraine.json').features;
    
    var oldWidth = 0
    function render(){
        if (oldWidth == innerWidth) return
        oldWidth = innerWidth

        var width = height = d3.select('#graph').node().offsetWidth
        var r = 40

        width = getWidth(d3.select('#graph').node().offsetWidth),
        height = getHeight(d3.select('#graph').node().offsetWidth)
        //makeColumnChart('deaths',width)
        var svg = d3.select('#graph').html('')
            .append('svg')
            .attrs({width: width, height: height})
        var projection = getProjection(width,height)

        var svg = d3.select(".container-1 #graph svg")
        width = getWidth(d3.select('#graph').node().offsetWidth),
        height = getHeight(d3.select('#graph').node().offsetWidth)
        svg.append("text")
            .attr("x", (width / 2) ) 
            .attr("y", 20)
            .attr("text-anchor", "middle")
            .attr("class", "title")
            .attr("id", "head_title")
            .style("font-size", '16px')
            .style("font-family", 'sans-serif')
            .text('Карта украинских месторождений');
        svg.append("text")
            .attr("x", width-50) 
            .attr("y", height-35)
            .attr("text-anchor", "middle")  
            .attr("class", "subtitle title")
            .style("font-size", '10px')
            .style("font-family", 'sans-serif')
            .style("fill", "#9e9e9e")
            .text('Данные: СНБО');
        var g = svg.append("g").attr('class','ukraine_map');
        var tooltipBee = d3.select("body")
            .append("div")
            .style("position", "absolute")
            .attr('class','tooltip')
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
        drawMap(g,projection)
        
        var gs = d3.graphScroll()
            .offset(1000)
            .container(d3.select('.container-1'))
            .graph(d3.selectAll('container-1 #graph'))
            .eventId('uniqueId1') 
            .sections(d3.selectAll('.container-1 #sections > div'))
            .on('active', function(index){
                width = getWidth(d3.select('#graph').node().offsetWidth),
                height = getHeight(d3.select('#graph').node().offsetWidth)
                if (index <= 1) {
                    var ukraine_map = document.getElementsByClassName('ukraine_map')
                    var svg = d3.select(".container-1 #graph svg")
                    if (ukraine_map.length == 0) {
                        var projection = getProjection(width,height)
                        drawPaths(projection,1,tooltipBee,svg)
                        d3.selectAll('path.field')
                            .transition().duration(250)
                            .delay(function(d,i){ return i * 2 })
                            .style('opacity','1')
                    } else {
                        var projection = getProjection(width,height)

                        var cities_mer_circles = document.getElementsByClassName('cities_mer')
                        if (cities_mer_circles.length == 0) {
                            drawPaths(projection,1,tooltipBee,svg)
                        }
                        d3.selectAll('path.field')
                            .transition().duration(150)
                            .delay(function(d,i){ return i * 2 })
                            .style('opacity','1')
                        
                    }
                } else if (index == 2) {
                    
                    var svg = d3.select(".container-1 #graph svg")
                    var projection = getProjection(width,height)
                    d3.select("#container #tooltip").html('')
                    var cities_mer_circles = document.getElementsByClassName('cities_mer')
                    if (cities_mer_circles.length == 0) {
                        drawPaths(projection,1,tooltipBee,svg)
                        d3.selectAll('path.field')
                            .transition().duration(50)
                            .delay(function(d,i){ return i * 2 })
                            .style('opacity','0')
                    }
                    var ukraine_map = document.getElementsByClassName('ukraine_map')
                        
                    if (ukraine_map.length == 1) {
                        //var svg = d3.select(".container-1 #graph svg")
                        d3.selectAll('path.field')
                            .transition().duration(50)
                            .delay(function(d,i){ return i * 2 })
                            .style('opacity','0')
                        d3.selectAll('circle.id9')
                            .transition().duration(150)
                            .delay(function(d,i){ return i * 2 })
                            .style('opacity','0')
                        d3.selectAll('circle.id18')
                            .transition().duration(150)
                            .delay(function(d,i){ return i * 2 })
                            .style('opacity','0')
                        d3.selectAll('path.id13')
                            .transition().duration(50)
                            .delay(function(d,i){ return i * 2 })
                            .style('opacity','1')
                        
                    } 
                    
                } else if (index == 3){
                    var svg = d3.select(".container-1 #graph svg")
                    var projection = getProjection(width,height)
                    var cities_mer_circles = document.getElementsByClassName('cities_mer')
                    if (cities_mer_circles.length == 0) {
                        drawPaths(projection,1,tooltipBee,svg)
                        d3.selectAll('path.field')
                            .transition().duration(50)
                            .delay(function(d,i){ return i * 2 })
                            .style('opacity','0')
                    }
                    var ukraine_map = document.getElementsByClassName('ukraine_map')
                    if (ukraine_map.length == 1) {
                        var svg = d3.select(".container-1 #graph svg")
                        d3.selectAll('path.id15')
                            .transition().duration(150)
                            .delay(function(d,i){ return i * 2 })
                            .style('opacity','0')
                        d3.selectAll('path.id17')
                            .transition().duration(150)
                            .delay(function(d,i){ return i * 2 })
                            .style('opacity','0')
                        d3.selectAll('circle.id9')
                            .transition().duration(150)
                            .delay(function(d,i){ return i * 2 })
                            .style('opacity','1')
                        d3.selectAll('path.id13')
                            .transition().duration(150)
                            .delay(function(d,i){ return i * 2 })
                            .style('opacity','0')
                        d3.selectAll('circle.id18')
                            .transition().duration(150)
                            .delay(function(d,i){ return i * 2 })
                            .style('opacity','1')

                    } 
                    
                    
                } else if (index == 4){
                    var svg = d3.select(".container-1 #graph svg")
                    var projection = getProjection(width,height)
                    var cities_mer_circles = document.getElementsByClassName('cities_mer')
                    if (cities_mer_circles.length == 0) {
                        drawPaths(projection,1,tooltipBee,svg)
                        d3.selectAll('path.field')
                            .transition().duration(50)
                            .delay(function(d,i){ return i * 2 })
                            .style('opacity','0')
                    }
                    var ukraine_map = document.getElementsByClassName('ukraine_map')
                    
                    if (ukraine_map.length == 1) {
                        var svg = d3.select(".container-1 #graph svg")
                        d3.selectAll('circle.id9')
                            .transition().duration(150)
                            .delay(function(d,i){ return i * 2 })
                            .style('opacity','0')
                        d3.selectAll('circle.id18')
                            .transition().duration(150)
                            .delay(function(d,i){ return i * 2 })
                            .style('opacity','0')
                        d3.selectAll('path.d0')
                            .transition().duration(150)
                            .delay(function(d,i){ return i * 2 })
                            .style('opacity','0')
                        d3.selectAll('path.id15')
                            .transition().duration(150)
                            .delay(function(d,i){ return i * 2 })
                            .style('opacity','1')
                        d3.selectAll('path.id17')
                            .transition().duration(150)
                            .delay(function(d,i){ return i * 2 })
                            .style('opacity','1')
                    } 
                    
                    var cities_mer_circles = document.getElementsByClassName('cities_mer')
                    if (cities_mer_circles.length == 0) {
                        drawPaths(projection,1,tooltipBee,svg)
                    }
                    
                } else if (index >= 5){
                    var svg = d3.select(".container-1 #graph svg")
                    var projection = getProjection(width,height)
                    
                    var ukraine_map = document.getElementsByClassName('ukraine_map')
                    var cities_mer_circles = document.getElementsByClassName('cities_mer')
                    if (cities_mer_circles.length == 0) {
                        drawPaths(projection,1,tooltipBee,svg)
                        d3.selectAll('path.field')
                            .transition().duration(150)
                            .delay(function(d,i){ return i * 2 })
                            .style('opacity','0')
                        d3.selectAll('path.d0')
                            .transition().duration(150)
                            .delay(function(d,i){ return i * 2 })
                            .style('opacity','1')
                        d3.selectAll('circle.d0')
                            .transition().duration(150)
                            .delay(function(d,i){ return i * 2 })
                            .style('opacity','1')
                    }
                    if (ukraine_map.length == 1) {
                        var svg = d3.select(".container-1 #graph svg")
                        d3.selectAll('path.id15')
                            .transition().duration(150)
                            .delay(function(d,i){ return i * 2 })
                            .style('opacity','0')
                        d3.selectAll('path.id17')
                            .transition().duration(150)
                            .delay(function(d,i){ return i * 2 })
                            .style('opacity','0')
                        d3.selectAll('circle.d0')
                            .transition().duration(150)
                            .delay(function(d,i){ return i * 2 })
                            .style('opacity','1')
                        d3.selectAll('path.d0')
                            .transition().duration(150)
                            .delay(function(d,i){ return i * 2 })
                            .style('opacity','1')
                    } else {
                        d3.selectAll('path.field')
                            .transition().duration(150)
                            .delay(function(d,i){ return i * 2 })
                            .style('opacity','0')
                        d3.selectAll('path.d0')
                            .transition().duration(150)
                            .delay(function(d,i){ return i * 2 })
                            .style('opacity','1')
                        d3.selectAll('circle.d0')
                            .transition().duration(150)
                            .delay(function(d,i){ return i * 2 })
                            .style('opacity','1')
                    }
                    
                } 
            })
        
        var svg2 = d3.select('#graph1').html('')
            .append('svg')
            .attrs({width: width, height: height})
        var projection = getProjection(width,height)

        var svg2 = d3.select(".container-2 #graph1 svg")
        width = getWidth(d3.select('#graph').node().offsetWidth),
        height = getHeight(d3.select('#graph').node().offsetWidth)
        
        var g2 = svg2.append("g").attr('class','ukraine_map2');
        var tooltipBee2 = d3.select("body")
            .append("div")
            .style("position", "absolute")
            .attr('class','tooltip')
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
        drawMap(g2,projection)

        var gs2 = d3.graphScroll()
            .offset(1000)
            .container(d3.select('.container-2'))
            .graph(d3.selectAll('container-2 #graph1'))
            .eventId('uniqueId2') 
            .sections(d3.selectAll('.container-2 #sections > div'))
            .on('active', function(second_index){
                width = getWidth(d3.select('#graph1').node().offsetWidth),
                height = getHeight(d3.select('#graph1').node().offsetWidth)
                if (second_index == 0) {
                    var svg2 = d3.select(".container-2 #graph1 svg")
                    svg2.append("text")
                    .attr("x", (width / 2) ) 
                    .attr("y", 20)
                    .attr("text-anchor", "middle")
                    .attr("class", "title")
                    .attr("id", "head_title")
                    .style("font-size", '16px')
                    .style("font-family", 'sans-serif')
                    .text('Уплата ренты по громадам');
                    svg2.append("text")
                    .attr("x", width-50) 
                    .attr("y", height-35)
                    .attr("text-anchor", "middle")  
                    .attr("class", "subtitle title")
                    .style("font-size", '10px')
                    .style("font-family", 'sans-serif')
                    .style("fill", "#9e9e9e")
                    .text('Данные: СНБО');

                    d3.selectAll('.title')
                        .style('opacity','1')
                    var projection = getProjection(width,height)
                    
                    var cities_mer_circles = d3.select('.container-2 .cities_mer')['_groups'][0]
                    
                    if (cities_mer_circles[0] == null) {
                        drawCircles(projection,tooltipBee2)
                    }

                    const zoom = d3.zoom()
                        .on('zoom', zoomed);

                    function zoomed() {
                        
                        var svg = d3.select(".container-2 #graph1 svg")
                        var g = svg.select(".ukraine_map2");
                        g.selectAll('path')
                            .attr('transform', d3.event.transform);
                        
                        var cities_mer = svg.select(".container-2 .cities_mer");
                        cities_mer.selectAll(".container-2 circle")
                            .attr('transform', d3.event.transform);
                        cities_mer.selectAll(".container-2 text")
                            .attr('transform', d3.event.transform);

                    }
                    
                    mapZooming(1,zoom)
                } else if (second_index == 1) {

                    if (width < 600) {
                        var height = 500
                        d3.select(".container-2 #graph1 svg").attr('height',500)
                    }

                    d3.selectAll('.title')
                        .style('opacity','0')
                    var cities_mer_circles = d3.select('.container-2 .cities_mer')['_groups'][0]
                    if (cities_mer_circles[0] == null) {
                        var projection = getProjection(width,height)
                        drawCircles(projection,tooltipBee2)
                    }
                    
                    const zoom = d3.zoom()
                        .on('zoom', zoomed);

                    function zoomed() {
                        
                        var svg = d3.select(".container-2 #graph1 svg")
                        var g = svg.select(".ukraine_map2");
                        g.selectAll('path')
                            .attr('transform', d3.event.transform);
                        
                        var cities_mer = svg.select(".container-2 .cities_mer");
                        cities_mer.selectAll(".container-2 circle")
                            .attr('transform', d3.event.transform);
                        cities_mer.selectAll(".container-2 text")
                            .attr('transform', d3.event.transform);

                    }
                    
                    mapZooming(2,zoom)
                } else if (second_index == 2) {
                    d3.selectAll('.title')
                        .style('opacity','0')
                    var cities_mer_circles = d3.select('.container-2 .cities_mer')['_groups'][0]
                    if (cities_mer_circles[0] == null) {
                        var projection = getProjection(width,height)
                        drawCircles(projection,tooltipBee2)
                    }
                    
                    const zoom = d3.zoom()
                        .on('zoom', zoomed);

                    function zoomed() {
                        
                        var svg = d3.select(".container-2 #graph1 svg")
                        var g = svg.select(".ukraine_map2");
                        g.selectAll('path')
                            .attr('transform', d3.event.transform);
                        
                        var cities_mer = svg.select(".container-2 .cities_mer");
                        cities_mer.selectAll(".container-2 circle")
                            .attr('transform', d3.event.transform);
                        cities_mer.selectAll(".container-2 text")
                            .attr('transform', d3.event.transform);

                    }
                    
                    mapZooming(3,zoom)
                } else if (second_index == 3) {

                    if (width < 600) {
                        var height = 500
                        d3.select(".container-2 #graph1 svg").attr('height',500)
                    }

                    d3.selectAll('.title')
                        .style('opacity','1')
                    var cities_mer_circles = d3.select('.container-2 .cities_mer')['_groups'][0]
                    if (cities_mer_circles[0] == null) {
                        var projection = getProjection(width,height)
                        drawCircles(projection,tooltipBee2)
                    }
                    
                    const zoom = d3.zoom()
                        .on('zoom', zoomed);

                    function zoomed() {
                        
                        var svg = d3.select(".container-2 #graph1 svg")
                        var g = svg.select(".ukraine_map2");
                        g.selectAll('path')
                            .attr('transform', d3.event.transform);
                        
                        var cities_mer = svg.select(".container-2 .cities_mer");
                        cities_mer.selectAll(".container-2 circle")
                            .attr('transform', d3.event.transform);
                        
                        cities_mer.selectAll(".container-2 text")
                            .attr('transform', d3.event.transform);

                    }
                    
                    mapZooming(1,zoom)
                    

                    
                } 
            })
    d3.select('#source')
        .styles({'margin-bottom': window.innerHeight - 450 + 'px', padding: '100px'})
    }

    render()
    d3.select(window).on('resize', render)
    bubbleChart(window.innerWidth)
    d3.select(window).on('resize', bubbleChart(window.innerWidth))