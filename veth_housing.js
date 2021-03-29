function getData(id){
    var value = $.ajax({ 
        url: id+'.json', 
        async: false
    }).responseJSON;
    return value;
}
function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
var ukraine = getData('https://cdn.jsdelivr.net/gh/liga-net/few-projects/ukraine');
function makeBarChart(w) { 
    if (w < 600) {
        var start_width = w,
        left = 120;
    } else {
        var start_width = 600,
        left = 150
    } 

    d3.select("#sum_avar").html('')
    var json = [0.87, 0.84, 0.78, 0.78, 0.7, 0.68, 0.61, 0.59, 0.49, 0.4]
    var date = ["Одесская", "Харьковская", "Полтавская", "Житомирская", "Сумская", "Донецкая", "Черкасская", "Винницкая", "Днепропетровская", "Ровненская"]
    // set the dimensions and margins of the graph
    var margin = {top: 30, right: 37, bottom: 70, left: left},
        width = start_width - margin.left - margin.right,
        height = 450 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#sum_avar")
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
        .text('Процент аварийного и ветхого жилья от всего жилого фонда');
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

function makeMap(id,w) {
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
    var color = d3.scaleThreshold()
        .domain([300, 13913, 27526, 41139, 54752, 68366, 81979, 95592, 109205])
        .range(["rgb(255,245,235)","rgb(254,230,206)","rgb(253,208,162)","rgb(253,174,107)","rgb(253,141,60)","rgb(241,105,19)","rgb(217,72,1)","rgb(166,54,3)","rgb(127,39,4)"]);
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
        var fontSize = '12px'
    }
    
    if (id == 'veth') {
        var json = [
        {"name":"Харьковская область", "value":503105, "city":429673},
        {"name":"Одесская область", "value":390981, "city":142168},
        {"name":"Днепропетровская область", "value":328003, "city":290575},
        {"name":"Донецкая область", "value":233057, "city":133305},
        {"name":"Житомирская область", "value":214140, "city":91720},
        {"name":"Полтавская область", "value":209165, "city":64578},
        {"name":"Винницкая область", "value":206580, "city":15124},
        {"name":"Сумская область", "value":162406, "city":14065},
        {"name":"Черкасская область", "value":147880, "city":10735},
        {"name":"Киевская область", "value":178298, "city":60767},
        {"name":"Хмельницкая область", "value":101406, "city":23270},
        {"name":"Ровненская область", "value":98822, "city":33681},
        {"name":"Запорожская область", "value":92987, "city":81660},
        {"name":"Львовская область", "value":89785, "city":42966},
        {"name":"Черниговская область", "value":57740, "city":18563},
        {"name":"Волынская область", "value":53052, "city":27058},
        {"name":"Херсонская область", "value":49511, "city":1490},
        {"name":"Ивано-Франковская область", "value":48072, "city":12696},
        {"name":"Киев", "value":43736, "city":43736},
        {"name":"Тернопольская область", "value":41971, "city":7417},
        {"name":"Луганская область", "value":38271, "city":28359},
        {"name":"Закарпатская область", "value":30387, "city":11764},
        {"name":"Николаевская область", "value":23036, "city":4374},
        {"name":"Черновицкая область", "value":11776, "city":9513},
        {"name":"Кировоградская область", "value":7474, "city":6750},
        {"name":"Автономная Республика Крым", "value":null, "city":null}]
        
        var title = 'Общая площадь ветхого жилья в регионах Украины, м²'
        var tooltip1 = '<p>Количество ветхого жилья: '
        var tooltip2 = '<p>Ветхого жилья в городах: '
    } else {
        var json = [
                            {"name":"Донецкая область", "value":122518, "city":61777},
            {"name":"Одесская область", "value":117148, "city":25625},
            {"name":"Винницкая область", "value":82260, "city":7506},
            {"name":"Полтавская область", "value":75548, "city":349},
            {"name":"Днепропетровская область", "value":71277, "city":36834},
            {"name":"Черкасская область", "value":66302, "city":11168},
            {"name":"Харьковская область", "value":53685, "city":10033},
            {"name":"Житомирская область", "value":49865, "city":9933},
            {"name":"Киевская область", "value":46116, "city":5933},
            {"name":"Львовская область", "value":44427, "city":24316},
            {"name":"Сумская область", "value":37529, "city":849},
            {"name":"Тернопольская область", "value":34735, "city":4685},
            {"name":"Херсонская область", "value":33496, "city":3578},
            {"name":"Черновицкая область", "value":29462, "city":2859},
            {"name":"Запорожская область", "value":26726, "city":5109},
            {"name":"Хмельницкая область", "value":25028, "city":1854},
            {"name":"Луганская область", "value":24025, "city":17735},
            {"name":"Черниговская область", "value":23488, "city":6416},
            {"name":"Ивано-Франковская область", "value":21230, "city":3637},
            {"name":"Николаевская область", "value":19086, "city":6828},
            {"name":"Ровненская область", "value":17495, "city":379},
            {"name":"Киев", "value":12118, "city":12118},
            {"name":"Волынская область", "value":8001, "city":619},
            {"name":"Закарпатская область", "value":6193, "city":3226},
            {"name":"Кировоградская область", "value":5178, "city":5178},
            {"name":"Автономная Республика Крым", "value":null, "city":null}]
        
        var title = 'Общая площадь аварийного жилья в регионах Украины, м²'
        var tooltip1 = '<p>Количество аварийного жилья: '
        var tooltip2 = '<p>Аварийного жилья в городах: '
    }
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
        .attr("fill", function(d) {
            console.log(d.properties['name:ru'])
            return color(json.filter(k => k.name == d.properties['name:ru'])[0].value)
        })
        .attr("stroke", "#f5f5f5")
        .attr("stroke-width", ".1px")
        .attr("d", geoPath )
        .attr("class", "district")
        .on("mouseover", function(d) {
            tooltipBee.html(
                '<h4>'+d.properties.name+'</h4>'+
                tooltip1+String(numberWithSpaces(json.filter(k => k.name == d.properties['name:ru'])[0].value))+' м2</p>'+
                tooltip2+String(numberWithSpaces(json.filter(k => k.name == d.properties['name:ru'])[0].city))+' м2</p>'
            )
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
            var name = d.properties['name:ru']
            var value = json.filter(k => k.name == name)[0].value
            if (value != null) {
                if (width > 450) {
                    var returnValue = '<tspan  x="'+geoPath.centroid(d)[0]+'" y="'+geoPath.centroid(d)[1]+'">'+name.replace(' область', '')+"</tspan>"+
                                    "<tspan x='"+geoPath.centroid(d)[0]+"' y='"+(geoPath.centroid(d)[1]+15)+"'>"+String((value/1000).toFixed(0))+' тис.</tspan>'
                } else {
                    var returnValue = '<tspan  x="'+geoPath.centroid(d)[0]+'" y="'+geoPath.centroid(d)[1]+'">'+String((value/1000).toFixed(0))+' тис.</tspan>'
                }
            }
            if (width > 450) {
                if (name != 'Тернопольская область' && name != 'Ивано-Франковская область') {
                    return returnValue
                }
            } else {
                return returnValue
            }
        })
        .attr("x", function(d){
            return geoPath.centroid(d)[0];
        })
        .attr("y", function(d){
            return geoPath.centroid(d)[1]+5;
        })
        .attr("text-anchor","middle")
        .attr('font-family','Circe')
        .attr('fill',function(d) {
            if (d.properties['name:ru'] == 'Одеська область') {
                return 'black'
            } else if (json.filter(k => k.name == d.properties['name:ru'])[0].value > 24000) {
                return 'white'
            } else {
                return 'rgb(127,39,4)'
            }
        })
        .attr("font-size",function(d) {
            if (width > 450) {
                return '12px'
            } else {
                return '10px'
            }
        })
        
}
makeMap('veth',window.innerWidth)
makeMap('avar',window.innerWidth)
makeBarChart(window.innerWidth)
window.onresize = function(event) {
    makeMap('veth',window.innerWidth)
    makeMap('avar',window.innerWidth)
    makeBarChart(window.innerWidth)
};