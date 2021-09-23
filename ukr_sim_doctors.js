function getData(id){
    var value = $.ajax({ 
        url: id, 
        async: false
    }).responseJSON;
    return value;
}
var ukraine = getData('https://cdn.jsdelivr.net/gh/liga-net/few-projects/local_elections/ukraine.json');
function numberWithSpaces(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }
const range = (start, stop, step = 1) =>
            Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)
        function makeDomain(min, max, step) {
            return range(min, max, max/step)
        }
        
        function makeChoroplethMap(id,w) {
    if (w < 600) {
        var width = w,
        height = w/1.3,
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
        .rotate([-30.68,0])
        .center([0, 50.12])
        .translate( [width/2.2,height/3] );

    var geoPath = d3.geoPath()
        .projection(albersProjection);
    
    d3.select("#"+id).html('')
    
    var svg = d3.select("#"+id).append("svg")
        .attr("width", width)
        .attr("height", height);
        if (width > 500) {
                var fontSize = '18px'
            } else {
                var fontSize = '16px'
            }
    svg.append("text")
        .attr("x", (width / 2) ) 
        .attr("y", 20)
        .attr("text-anchor", "middle")  
        .style("font-size", fontSize)
        .style("font-family", "Georgia")
        .text('Середня зарплата сімених лікарів по регіонам');
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
        
    var json = [{"region":"Вінницька область", "value":16368.7, "value2020":16537.1},
{"region":"Волинська область", "value":16161.8, "value2020":15710.1},
{"region":"Дніпропетровська область", "value":17301.7, "value2020":16301.1},
{"region":"Донецька область", "value":16004.6, "value2020":15071.8},
{"region":"Житомирська область", "value":16698.2, "value2020":15311.2},
{"region":"Закарпатська область", "value":16472.6, "value2020":16685},
{"region":"Запорізька область", "value":15758.1, "value2020":15339},
{"region":"Івано-Франківська область", "value":11832.8, "value2020":11285.9},
{"region":"Київська область", "value":18021, "value2020":17010.3},
{"region":"Кіровоградська область", "value":16973.6, "value2020":16257.6},
{"region":"Луганська область", "value":17255.3, "value2020":15884.4},
{"region":"Львівська область", "value":14119.5, "value2020":14183.2},
{"region":"м. Київ", "value":20157.4, "value2020":18646.8},
{"region":"Миколаївська область", "value":15404.3, "value2020":15128.3},
{"region":"Одеська область", "value":15772.5, "value2020":14994.3},
{"region":"Полтавська область", "value":16838.5, "value2020":15858.2},
{"region":"Рівненська область", "value":15484.1, "value2020":14976},
{"region":"Сумська область", "value":15758.7, "value2020":15965.5},
{"region":"Тернопільська область", "value":15438.5, "value2020":15696.5},
{"region":"Харківська область", "value":15332.3, "value2020":15286.6},
{"region":"Херсонська область", "value":16417.1, "value2020":15176.6},
{"region":"Хмельницька область", "value":15549, "value2020":15335.3},
{"region":"Черкаська область", "value":16795, "value2020":14986.7},
{"region":"Чернівецька область", "value":16067, "value2020":15482.4},
{"region":"Чернігівська область", "value":15258.3, "value2020":15239.6}]   
    function makeColorRange(id) {
        return json.map(d => parseInt(d.value))
    }
    var vax_values = makeColorRange(id)
    var color = d3.scaleThreshold()
        .domain(
            makeDomain(d3.min(vax_values),d3.max(vax_values),8)
        )
        .range(["rgb(247,252,253)","rgb(229,245,249)","rgb(204,236,230)","rgb(153,216,201)","rgb(102,194,164)","rgb(65,174,118)","rgb(35,139,69)","rgb(0,109,44)","rgb(0,68,27)"]);

    var colorText = d3.scaleThreshold()
        .domain(
            makeDomain(d3.min(vax_values),d3.max(vax_values),8)
        )
        .range(["rgb(0,68,27)","rgb(0,109,44)","rgb(35,139,69)","rgb(65,174,118)","rgb(62,88,82)","rgb(153,216,201)","rgb(204,236,230)","rgb(229,245,249)","rgb(247,252,253)"])
    
    g.selectAll("path")
        .data(ukraine.features)
        .enter()
        .append("path")
        .attr("fill", function(d) {
            if (d.properties.name == 'Автономна Республіка Крим'){
                return '#cecece'
            } else {
                var items = json.filter(k => k.region == d.properties.name)
                if (items.length != 0) {
                    var value = items[0].value
                    return color(value)
                } else {
                    return '#cecece'
                }
            }
        })
        .attr("stroke", "#f5f5f5")
        .attr("stroke-width", ".1px")
        .attr("d", geoPath )
        .attr("class", "district")
        .on("mouseover", function(d) {
            if (d.properties.name == 'Автономна Республіка Крим'){
                tooltipBee.html(
                    '<h4>'+d.properties['name:uk']+'</h4><p>Временно оккупированная территория РФ</p>'
                )
            } else {
                var items = json.filter(k => k.region == d.properties.name)
                
                var html = '<h4>'+d.properties['name:uk']+'</h4><p>2020: '+numberWithSpaces(items[0].value2020)+' грн</p><p>2021: '+numberWithSpaces(items[0].value)+' грн</p>'
                tooltipBee.html(html)
            }
            var dist = d3.select(this)
            dist.attr("stroke", "black")
                .attr("stroke-width", "1.5px")
            return tooltipBee.style("visibility", "visible")
        })
        .on("mousemove", function() {
            return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
        })
        .on("mouseout", function(d){
            var dist = d3.select(this)
            dist.attr("stroke", "#f5f5f5")
                .attr("stroke-width", ".1px")
            return tooltipBee.style("visibility", "hidden");
        })
    g.selectAll("text")
        .data(ukraine.features)
        .enter()
        .append("svg:text")
        .html(function(d,i){
            if (d.properties.name != 'Автономна Республіка Крим'){
                var items = json.filter(k => k.region == d.properties.name)
                if (items.length != 0) {
                    var value = items[0].value
                    return numberWithSpaces(Math.round(value))
                }
            } 
        })
        .attr("x", function(d){
            return geoPath.centroid(d)[0];
        })
        .attr("y", function(d){
            if (d.properties['name:ru'] != 'Киевская область') {
                return geoPath.centroid(d)[1]+5;
            } else {
                return geoPath.centroid(d)[1]+20;
            }
            
        })
        .attr("text-anchor","middle")
        .attr('font-family','Arial')
        .attr('fill',function(d) {
            if (d.properties.name == 'Автономна Республіка Крим'){
                return 'white'
            } else {
                var items = json.filter(k => k.region == d.properties.name)
                if (items.length != 0) {
                    var value = items[0].value
                    return colorText(value)
                }        
            } 
        })
        .attr('opacity','.9')
        .attr("font-size",'10px')
        var kyiv = json.filter(d =>d.region == "м. Київ")
        if (w < 400) {
            var kyiv_trasforme = [168.0325342476886, 92.10098342813808]
        } else {
            var kyiv_trasforme = [260.0325342476886,128.10098342813808]
        }
        var cities_mer = svg.append("g");  
        cities_mer.selectAll("circle")
                .data(kyiv)
                .enter()
                .append("circle")
                .attr("stroke", "#cecece")
                .attr("stroke-width", ".5px")
                .attr("fill", function(d) {
                    return color(kyiv[0].value)
                })
                .attr("r",10)
                .attr("transform", function(d) { 
                    return "translate(" + kyiv_trasforme + ")"; 
                })
                .attr("class", "dot")
                .on("mouseover", function(d) {
                    if (id == 'ukraine'){
                        tooltipBee.html('<h4>Киев</h4><p>Осталось '+numberWithSpaces(kyiv[0].value)+' вакцин</p>')
                    } 
                    var dist = d3.select(this)
                    dist.attr("stroke", "black")
                        .attr("stroke-width", "1.5px")
                    tooltipBee.style("visibility", "visible")
                })
                .on("mousemove", function(d) {
                    return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
                })
                .on("mouseout", function(d){
                    var dist = d3.select(this)
                    dist.attr("stroke", "#f5f5f5")
                        .attr("stroke-width", ".1px")
                    return tooltipBee.style("visibility", "hidden");
                });
            cities_mer.selectAll("text")
                .data(kyiv)
                .enter()
                .append("svg:text")
                .html(function(d) {
                    return numberWithSpaces(kyiv[0].value) 
                })
                .attr("x", kyiv_trasforme[0])
                .attr("y", kyiv_trasforme[1]+5)
                .attr("text-anchor","middle")
                .attr('font-family','Arial')
                .attr('fill',function(d) {
                    return colorText(kyiv[0].value)
                })
                .attr('opacity','.9')
                .attr("font-size",'10px')
        //}
}