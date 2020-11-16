function getData(id){
    var value = $.ajax({ 
        url: id, 
        async: false
    }).responseJSON;
    return value;
}
var ukraine = getData('https://cdn.jsdelivr.net/gh/liga-net/few-projects/local_elections/ukraine.json');
var npz = {"features": [{"type": "Feature", "geometry": {"type": "Point", "coordinates": [35.8240017,48.5296339]}, "properties": {"city": "Павлоград", "region":"Днепропетровская", "owner":"Транскомплект-В", "ori":"100", "status":"эпизодическая", "licence":""}},
{"type": "Feature", "geometry": {"type": "Point", "coordinates": [35.1554731,48.6381527]}, "properties": {"city": "Новомосковск", "region":"Днепропетровская", "owner":"Блек Ойл", "ori":"2500", "status":"эпизодическая", "licence":""}},
{"type": "Feature", "geometry": {"type": "Point", "coordinates": [33.0863325,47.9074811]}, "properties": {"city": "Кривой Рог", "region":"Днепропетровская", "owner":"н/и", "ori":"2000", "status":"активная", "licence":""}},
{"type": "Feature", "geometry": {"type": "Point", "coordinates": [34.4705847,48.5391058]}, "properties": {"city": "Каменское", "region":"Днепропетровская", "owner":"Трейд Коммодити", "ori":"2000", "status":"стабильная ", "licence":""}},
{"type": "Feature", "geometry": {"type": "Point", "coordinates": [35.2212506,48.8079257]}, "properties": {"city": "Губиниха", "region":"Днепропетровская", "owner":"Алекспром", "ori":"3000", "status":"активная", "licence":"+"}},
{"type": "Feature", "geometry": {"type": "Point", "coordinates": [31.9618262,48.5157364]}, "properties": {"city": "Шестаковка", "region":"Кировоградская", "owner":"Кировоградская нефтяная компания", "ori":"7000", "status":"активная", "licence":"+"}},
{"type": "Feature", "geometry": {"type": "Point", "coordinates": [33.6066276,48.7004608]}, "properties": {"city": "Долинское", "region":"Кировоградская", "owner":"Металл Юнион", "ori":"100", "status":"стабильная", "licence":""}},
{"type": "Feature", "geometry": {"type": "Point", "coordinates": [30.5873483,48.1639879]}, "properties": {"city": "Побужское", "region":"Кировоградская", "owner":"Спец-Энергомаш", "ori":"100", "status":"стабильная", "licence":""}},
{"type": "Feature", "geometry": {"type": "Point", "coordinates": [34.1225481,49.6442319]}, "properties": {"city": "Жовтневе", "region":"Полтавская", "owner":"Фирма «Гарант»", "ori":"100", "status":"эпизодическая", "licence":""}},
{"type": "Feature", "geometry": {"type": "Point", "coordinates": [33.9455003,50.3673122]}, "properties": {"city": "Гадяч", "region":"Полтавская", "owner":"Стандарт Ойл-2000 (БРСМ-Нафта)", "ori":"8000", "status":"активная", "licence":"+"}},
{"type": "Feature", "geometry": {"type": "Point", "coordinates": [33.9568303,49.728523]}, "properties": {"city": "Сагайдак", "region":"Полтавская", "owner":"Пасипол", "ori":"4500", "status":"активная", "licence":""}},
{"type": "Feature", "geometry": {"type": "Point", "coordinates": [33.1771299,50.1621537]}, "properties": {"city": "Окип", "region":"Полтавская", "owner":"Эко-Оил", "ori":"100", "status":"стабильная", "licence":""}},
{"type": "Feature", "geometry": {"type": "Point", "coordinates": [33.8773937,49.8371242]}, "properties": {"city": "Яреськи", "region":"Полтавская", "owner":"Зернопродукт", "ori":"1000", "status":"стабильная", "licence":""}},
{"type": "Feature", "geometry": {"type": "Point", "coordinates": [34.4871987,49.6021346]}, "properties": {"city": "Полтава", "region":"Полтавская", "owner":"МТН-Полтава ", "ori":"2000", "status":"активная", "licence":""}},
{"type": "Feature", "geometry": {"type": "Point", "coordinates": [34.0420169,49.5548944]}, "properties": {"city": "Решетиловка", "region":"Полтавская", "owner":"н/и", "ori":"100", "status":"стабильная", "licence":""}},
{"type": "Feature", "geometry": {"type": "Point", "coordinates": [33.2991057,49.0935026]}, "properties": {"city": "Кременчуг", "region":"Полтавская", "owner":"НВО «Исток» (Сан Ойл)", "ori":"100", "status":"активная", "licence":"+"}},
{"type": "Feature", "geometry": {"type": "Point", "coordinates": [34.4494981,50.5784295]}, "properties": {"city": "Лебедин", "region":"Сумская", "owner":"Агровелий", "ori":"2500", "status":"стабильная", "licence":""}},
{"type": "Feature", "geometry": {"type": "Point", "coordinates": [35.9896368,49.8198952]}, "properties": {"city": "Мерефа", "region":"Харьковская", "owner":"н/и", "ori":"6000", "status":"активная", "licence":""}},
{"type": "Feature", "geometry": {"type": "Point", "coordinates": [36.2694001,49.8350381]}, "properties": {"city": "Васищеве", "region":"Харьковская", "owner":"НВО «Исток» (Сан Ойл)", "ori":"100", "status":"активная", "licence":"+"}},
{"type": "Feature", "geometry": {"type": "Point", "coordinates": [35.490527,50.1617377]}, "properties": {"city": "Богодухов", "region":"Харьковская", "owner":"НВО «Исток» (Сан Ойл)", "ori":"100", "status":"активная", "licence":"+"}},
{"type": "Feature", "geometry": {"type": "Point", "coordinates": [35.3484778,49.94246]}, "properties": {"city": "Сонцедаровка", "region":"Харьковская", "owner":"Матрапак Украина", "ori":"3000", "status":"активная", "licence":"+"}},
{"type": "Feature", "geometry": {"type": "Point", "coordinates": [35.8945276,49.948361]}, "properties": {"city": "Люботин", "region":"Харьковская", "owner":"н/и", "ori":"2000", "status":"стабильная", "licence":""}},
{"type": "Feature", "geometry": {"type": "Point", "coordinates": [32.0816367,50.1422077]}, "properties": {"city": "Шрамковка", "region":"Черкасская", "owner":"н/и", "ori":"1500", "status":"активная", "licence":""}},
{"type": "Feature", "geometry": {"type": "Point", "coordinates": [31.3512476,50.7500481]}, "properties": {"city": "Бобровица", "region":"Черниговская", "owner":"Агро Нафта", "ori":"800", "status":"эпизодическая", "licence":""}}]};

function makeMap(id,w) {
    if (w < 600) {
        var width = w,
        height = w/1.6,
        scale = w*4.4,
        from = .01,
        to = .015;
    } else {
        var width = 600,
        scale = 2800
        height = 400,
        from = .01,
        to = .025
    }
        
    var albersProjection = d3.geoAlbers()
        .scale(scale)
        .rotate([-30.48,0])
        .center([0, 49.86])
        .translate( [width/2.2,height/3] );

    var geoPath = d3.geoPath()
        .projection(albersProjection);
    
    d3.select("#"+id+"_map").html('')
    
    var svg = d3.select("#"+id+"_map").append("svg")
        .attr("width", width)
        .attr("height", height);
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
        //d3.json(id+".json", function (error,mer) {
    var json = npz.features
    var radius = d3.scaleSqrt()
        .domain([0, from])
        .range([0, to]);

    cities_mer.selectAll("path")
        .data(json)
        .enter()
        .append("circle")
        .attr("fill", '#4db6ac')
        .attr("stroke", '#009688')
        .attr("r",function(d) { return radius(d.properties.ori) })
        .attr("transform", function(d) { return "translate(" + geoPath.centroid(d) + ")"; })
        .attr("class", "dot");
    cities_mer.selectAll("text")
        .data(json)
        .enter()
        .append("svg:text")
        .text(function(d,i){
            var prop = d.properties
            if (parseInt(prop.ori) > 2000 && prop.city != 'Сонцедаровка'&& prop.city != 'Лебедин'&& prop.city != 'Новомосковск') {
                return prop.city;
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
        .attr('fill','black')
        .attr("font-size",function(d) { return radius(d.properties.ori) })
        .attr("class", "dot");
    cities_mer.selectAll('.dot')
        .on("mouseover", function(d) {
            tooltipBee.html(
                '<h4>'+d.properties.city+', '+d.properties.region+' область</h4>'+
                '<p>Собственник/оператор: <b>'+d.properties.owner+'</b></p>'+
                '<p>Ориентировочная мощность, т/мес.: <b>'+d.properties.ori.replace('100','неизвестно')+'</b></p>'+
                '<p>Статус работы: <b>'+d.properties.status+'</b></p>'+
                '<p>Лицензия: <b>'+d.properties.licence+'</b></p>'
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
makeMap('npz',window.innerWidth)
window.onresize = function(event) {
    makeMap('npz',window.innerWidth)
};