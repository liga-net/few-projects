function getData(id){
    var value = $.ajax({ 
        url: id, 
        async: false
    }).responseJSON;
    return value;
}
function numberWithSpaces(x) {
    return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
var ukraine = getData('https://cdn.jsdelivr.net/gh/liga-net/few-projects/local_elections/ukraine.json');

function makeMap(id,w) {
    if (w < 600) {
        var width = w+50,
        height = w/1.3,
        scale = w*5,
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
        .domain([-2959,-1859,-859, 859, 1859, 2859, 3859, 4859])
        .range(["#8c510a","#bf812d","#dfc27d","#f6e8c3","#c7eae5","#80cdc1","#35978f","#01665e"]);
    var albersProjection = d3.geoAlbers()
        .scale(scale)
        .rotate([-30.68,0])
        .center([0, 50.32])
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
        {"name":"Львівська область", "value":4859, "jur":1416},
        {"name":"Дніпропетровська область", "value":2436, "jur":986},
        {"name":"Одеська область", "value":681, "jur":828},
        {"name":"Київська область", "value":2435, "jur":789},
        {"name":"Харківська область", "value":1600, "jur":659},
        {"name":"Івано-Франківська область", "value":1313, "jur":487},
        {"name":"Закарпатська область", "value":918, "jur":433},
        {"name":"Запорізька область", "value":-37, "jur":366},
        {"name":"Хмельницька область", "value":1061, "jur":349},
        {"name":"Вінницька область", "value":1683, "jur":325},
        {"name":"Житомирська область", "value":832, "jur":292},
        {"name":"Полтавська область", "value":1085, "jur":289},
        {"name":"Чернівецька область", "value":706, "jur":282},
        {"name":"Тернопільська область", "value":929, "jur":280},
        {"name":"Волинська область", "value":1471, "jur":267},
        {"name":"Рівненська область", "value":1013, "jur":264},
        {"name":"Миколаївська область", "value":7, "jur":240},
        {"name":"Черкаська область", "value":932, "jur":211},
        {"name":"Кіровоградська область", "value":445, "jur":172},
        {"name":"Чернігівська область", "value":706, "jur":117},
        {"name":"Сумська область", "value":239, "jur":94},
        {"name":"Луганська область", "value":-1101, "jur":-61},
        {"name":"Херсонська область", "value":-719, "jur":-146},
        {"name":"Донецька область", "value":-2938, "jur":-218},
        {"name":"Автономна Республіка Крим", "value":null, "jur":null}]
        
        var title = 'Количество новых ФОП'
        var tooltip1 = '<p>Прирост ФОП: '
        var tooltip2 = '<p>Приррст юридических лиц: '
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
            return color(json.filter(k => k.name == d.properties['name'])[0].value)
        })
        .attr("stroke", "#f5f5f5")
        .attr("stroke-width", ".1px")
        .attr("d", geoPath )
        .attr("class", "district")
        .on("mouseover", function(d) {
            if (d.properties.name != 'Автономна Республіка Крим') {
                    tooltipBee.html(
                    '<h4>'+d.properties['name:ru']+'</h4>'+
                    tooltip1+String(numberWithSpaces(json.filter(k => k.name == d.properties['name'])[0].value))+'</p>'+
                    tooltip2+String(numberWithSpaces(json.filter(k => k.name == d.properties['name'])[0].jur))+'</p>'
                )
            } else {
                tooltipBee.html(
                '<h4>'+d.properties.name+'</h4>'+
                '<p>Временно оккупированная территория РФ</p>'
            )
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
    var kyiv = [30.32,49.96]
    var projection = d3.geoMercator()
        .scale(scale)
        .rotate([-30.32,0])
        .center([0, 49.96])
        .translate([width/2.2,height/3]);
    var coordinates = projection(kyiv);
    svg.selectAll("circle")
        .data(kyiv)
        .enter()
        .append("circle")
        .attr("fill", function(d) {
            return color(6530)
        })
        .attr("stroke", '#009688')
        .attr("r",function(d) { 
            return 10
        })
        .attr("transform", function(d) { return "translate(" + coordinates + ")"; })
        .on("mouseover", function(d) {
            tooltipBee.html(
                    '<h4>Киев</h4>'+
                    tooltip1+'6530</p>'+
                    tooltip2+'4776</p>'
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
    svg.selectAll("text")
        .data(kyiv)
        .enter()
        .append("svg:text")
        .html(function(d) {
            if (width > 450) {
                var returnValue = '<tspan x="0" y="15">6530</tspan>'
            } else {
                var returnValue = '<tspan  x="'+geoPath.centroid(d)[0]+'" y="'+geoPath.centroid(d)[1]+'">6530</tspan>'
            }
            return returnValue
        })
        .attr("transform", function(d) { return "translate(" + (coordinates[0]+20)+','+(coordinates[1]-5) + ")"; })
        .attr("text-anchor","middle")
        .attr('font-family','Arial')
        .attr('fill','white')
        .attr("font-size",function(d) {
            if (width > 450) {
                return '12px'
            } else {
                return '10px'
            }
        })
    g.selectAll("text")
        .data(ukraine.features)
        .enter()
        .append("svg:text")
        .html(function(d,i){
            var name = d.properties['name']
            var value = json.filter(k => k.name == name)[0].value
            if (String(value) != 'null') {
                if (width > 450) {
                    var returnValue = "<tspan x='"+geoPath.centroid(d)[0]+"' y='"+(geoPath.centroid(d)[1]+15)+"'>"+String(value)+'</tspan>'
                } else {
                    var returnValue = '<tspan  x="'+geoPath.centroid(d)[0]+'" y="'+geoPath.centroid(d)[1]+'">'+String(value)+'</tspan>'
                }
            } 
            if (width > 450) {
                if (name != 'Київська область') {
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
        .attr('font-family','Arial')
        .attr('fill',function(d) {
            if (d.properties['name'] == 'Одеська область') {
                return 'black'
            } else if (json.filter(k => k.name == d.properties['name'])[0].value > 3000) {
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
function makeColumnChart(id, w) { 
    if (w < 600) {
        var start_width = w
    } else {
        var start_width = 600
    } 
    d3.select("#"+id).html('')
    if (id == 'kved1') {
        var date = ["ІТ и телеком","Профессиональная деятельность","Логистика","Хозяйство","Перерабатывающая промышленность","Операции с недвижимостью","Строительство","Здравоохранение и соц. помощь","Адм. и доп . обслуживание","Образование"]
        var json = [18202,5300,2996,1371,877,836,737,608,572,234]
        var left = 240
        var id_height = 600
        var title = "Десять наибольших приростов количества ФОП по категориям"
    } else if (id == 'kved2') {
        var date = ["Деятельность домашних хозяйств", "Отели, рестораны и кафе", "Прочие виды услуг", "Отсутствует вид экон. деятельности", "Торговля и ремонт авто и мотоциклов"]
        var json = [-20,-199,-566,-824,-4015]
        var left = 250
        var id_height = 420
        var title = 'Категории ФОП, показавшие падение'
    } else if (id == 'kved3') {
        var date = ["Сбор дикорастущих недревесных продуктов","Перевозка вещей","Лизинг интеллектуальной собственности","Общее среднее образование","Другая социальная помощь","Уход для пожилых людей и инвалидов","Другие финансовые услуги","Дизайн", "Производство макарон","Связи с общественностью"]
        var json = [31,22,20,18,17,17,16,15,14,14]
        var left = 300
        var id_height = 600
        var title = 'Десять наиболее динамичных приростов количества ФОП'
    } else if (id == 'kved4') {
        var date = ["ООО","Благотворительная организация","ГО","Фермерское хозяйство","ОСББ"]
        var json = [8105,3592,1496,454,396]
        var left = 180
        var id_height = 420
        var title = 'Прирост количества юр. лиц по организационно-правовым формам'
    } else if (id == 'kved5') {
        var date = ["Здравоохранение и социальная помощь","Торговля и ремонт т/с","Предоставление других видов услуг","Сельское, лесное и рыбное хозяйство","Перерабатывающая промышленность","Административное и вспомогательное обслуживание","Логистика" ,"ІТ и телеком","Строительство","Профессиональная деятельность"]
        var json = [3191,1035,298,292,271,185,176,154,121,86]
        var left = 315
        var id_height = 600
        var title = 'Рост количества юр. лиц по видам деятельности (II квартал 2022-го)'
    } else if (id == 'kved6') {
        var date = ["Социальная помощь","Добыча соли","Производство столовых приборов","Деятельность экстерриториальных организаций","Розничная торговля аудио- и видеозаписями","Производство военных т/с","Производство товаров для собственного потребления","Производство машин для изготовления бумаги","Ремонт воздушных и космических летательных аппаратов","Производство бижутерии"]
        var json = [19,12,9,9,8,6,6,5,5,4]
        var tooltipHtml = '<p>%'
        var left = 335
        var id_height = 600
        var title = 'Десять наиболее динамичных приростов количества юр. лиц (II квартал 2022-го)'
    }
    if (start_width > 500) {
        var fontSize = '16px'
    } else {
        var fontSize = '14px'
    }
    var margin = {top: 40, right: 15, bottom: 70, left: left},  
        width = start_width - margin.left - margin.right,
        height = id_height - margin.top - margin.bottom;

    var svg = d3.select("#"+id)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
    svg.append("text")
        .text(title)
        .attr("x", function(){
            var length = (start_width-this.getComputedTextLength())/2
            return -(left-length)
        }) 
        .attr("y", 0 - (margin.top / 2))
        .style("font-size", fontSize)
        .style("font-family", "Georgia")
        
    if (id == 'kved2') {
        var x = d3.scaleLinear()
        .domain([d3.min(json)-200,0])
        .range([width,0]);
    } else {
        var x = d3.scaleLinear()
        .domain([0, d3.max(json)])
        .range([ 0, width]);
    }
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).ticks(4).tickFormat(function(x) {
            if (id =='kved3' || id =='kved6') {
                return x+'%'
            } else {
                return x
            }
        }))
        .selectAll("text")
        .style("text-anchor", "middle");
    
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
        .range([ 0, height ])
        .domain(date)
        .padding(.1);
    svg.append("g")
        .call(d3.axisLeft(y))
        .attr('font-size','14px')
        .attr('font-family','Arial');
    
    svg.selectAll("mybar")
    .data(json)
    .enter()
    .append("rect")
        .attr("y", function(d,i) { return y(date[i]); })
        .attr("x", x(0) )
        .attr("width", function(d,i) { return x(json[i])})
        .attr("height", y.bandwidth())
        .attr('class','every_day')
        .attr("fill", "#006064")
        .on("mouseover", function(d,i) {
            if (id =='kved3' || id =='kved6') {
                tooltipBee.html('<p>'+date[i]+': '+numberWithSpaces(d) +'%')
            } else {
                tooltipBee.html('<p>'+date[i]+': '+numberWithSpaces(d))
            }
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
        .text(function(d,i){
            if (id =='kved3' || id =='kved6') {
                return d+'%'
            } else {
                return d
            }
            
        })
        .attr("y", function(d,i) {
            return y(date[i])+(y.bandwidth()/1.6); })
        .attr("x", function(d,i) { 
            if (x(json[i]) < 55) {
                return x(json[i])+20; 
            } else{ 
                return x(json[i])-25; 
            }  
        })
        .attr("text-anchor","middle")
        .attr('font-family','Arial')
        .attr('fill',function(d,i) { 
            if (x(json[i]) < 55) {
                return 'black'
            } else{ 
                return 'white'
            }  
        })
        .attr('font-size','14px');
} 
makeMap('veth',window.innerWidth)
makeColumnChart('kved1',window.innerWidth)
makeColumnChart('kved2',window.innerWidth)
makeColumnChart('kved3',window.innerWidth)
makeColumnChart('kved4',window.innerWidth)
makeColumnChart('kved5',window.innerWidth)
makeColumnChart('kved6',window.innerWidth)
window.onresize = function(event) {
    makeMap('veth',window.innerWidth)
    makeColumnChart('kved1',window.innerWidth)
    makeColumnChart('kved2',window.innerWidth)
    makeColumnChart('kved3',window.innerWidth)
    makeColumnChart('kved4',window.innerWidth)
    makeColumnChart('kved5',window.innerWidth)
    makeColumnChart('kved6',window.innerWidth)
};