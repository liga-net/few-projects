function getData(id){
    var value = $.ajax({ 
        url: id+'.json', 
        async: false
    }).responseJSON;
    return value;
}
var ukraine = getData('https://cdn.jsdelivr.net/gh/liga-net/few-projects/local_elections/ukraine');
var roads_map = getData('https://cdn.jsdelivr.net/gh/liga-net/few-projects/roads_map');

function makeMap(w) {
    if (w < 600) {
        var width = w,
        height = w/1.6,
        scale = w*4.4,
        from = 260827968,
        to = 14;
    } else {
        var width = 600,
        scale = 2800,
        from = 260827968,
        to = 18,
        height = 450;
    }
        
    var albersProjection = d3.geoAlbers()
        .scale(scale)
        .rotate([-30.18,0])
        .center([0, 50.12])
        .translate( [width/2.2,height/3] );

    var geoPath = d3.geoPath()
        .projection(albersProjection);
    
    d3.select("#roads_map").html('')
    
    var svg = d3.select("#roads_map").append("svg")
        .attr("width", width)
        .attr("height", height);
    if (width > 500) {
        var fontSize = '18px'
    } else {
        var fontSize = '16px'
    }
    var title = ''
    
    svg.append("text")
        .attr("x", (width / 2) ) 
        .attr("y", 20)
        .attr("text-anchor", "middle")  
        .style("font-size", fontSize)
        .style("font-family", "Georgia")
        .text(title);
    var g = svg.append("g");
    
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
    
    g.selectAll("path")
        .data(ukraine.features)
        .enter()
        .append("path")
        .attr("fill", "#eeeeee" )
        .attr("stroke", "#bdbdbd")
        .attr("d", geoPath )
        .attr("class", "district");
    
    var cities_mer = svg.append("g");
    var json = roads_map.features
    var radius = d3.scaleSqrt()
        .domain([0, from])
        .range([0, to]);

    cities_mer.selectAll("path")
        .data(json)
        .enter()
        .append("circle")
        .attr("fill", '#4db6ac')
        .attr("stroke", '#009688')
        .attr("r",function(d) { 
            if (d.properties.m2019 != '' && d.properties.m2020 != '') {
                return radius(parseInt(d.properties.m2020)+parseInt(d.properties.m2019)) 
            } else if (d.properties.m2020 != '') {
                return radius(parseInt(d.properties.m2020))
            } else if (d.properties.m2019 != '') {
                return radius(parseInt(d.properties.m2019))
            }
        })
        .attr("transform", function(d) { return "translate(" + geoPath.centroid(d) + ")"; })
        .attr("class", "dot");
    
    cities_mer.selectAll('.dot')
        .on("mouseover", function(d) {
            var rev2020 = Math.round(parseInt(d.properties.m2020) / 1000000)
            var rev2019 = Math.round(parseInt(d.properties.m2019) / 1000000)
            if (d.properties.m2019 != '' && d.properties.m2020 != '') {
                var revenue = '<p>Сума 2019: <b>'+String(rev2019)+' млн грн</b></p>'+'<p>Сума 2020: <b>'+String(rev2020)+' млн грн</b></p>'
            } else if (d.properties.m2020 != '') {
                var revenue = '<p>Сума 2020: <b>'+String(rev2020)+' млн грн</b></p>'
            } else if (d.properties.m2019 != '') {
                var revenue = '<p>Сума 2019: <b>'+String(rev2019)+' млн грн</b></p>'
            }
            
            
            tooltipBee.html(
                '<h4>'+d.properties.road+'</h4>'+
                '<p>'+d.properties.vyd+'</p>'+
                '<p>Замовник: <b>'+d.properties.zam+'</b></p>'+
                '<p>Підрядник: <b>'+d.properties.pid+'</b></p>'+
                revenue
            )
            return tooltipBee.style("visibility", "visible")
        })
        .on("mousemove", function() {
            return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
        })
        .on("mouseout", function(d){
            return tooltipBee.style("visibility", "hidden");
        })
}
makeMap('firtash_obl',window.innerWidth,'Облгаз')
window.onresize = function(event) {
    makeMap('firtash_obl',window.innerWidth,'Облгаз')
};