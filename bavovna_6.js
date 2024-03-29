if(document.createStyleSheet) {
    document.createStyleSheet('https://cdn.jsdelivr.net/gh/liga-net/few-projects/bavovna.css');  
} else {
    var styles = "@import url('https://cdn.jsdelivr.net/gh/liga-net/few-projects/bavovna.css');";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
}
var locale = d3.timeFormatLocale({
    "dateTime": "%A, %e %B %Y г. %X",
    "date": "%d.%m.%Y",
    "time": "%H:%M:%S",
    "periods": ["AM", "PM"],
    "days": ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
    "shortDays": ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
    "months": ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
    "shortMonths": ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]
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
    formatMonth = locale.format("%b %Y"),
    formatYear = locale.format("%Y");
function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
var bavovna = [{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [38.2061724, 46.6888943]},'name': 'Ейськ','region': 'Військовий об\'єкт','days': '2023-02-28','balance': 'Аеродром','file':'military.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [39.092943, 44.1000228]},'name': 'Туапсе','region': 'НПЗ','days': '2023-02-28','balance': 'Нафтосховище','file':'factory.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [36.6553894, 50.5520308]},'name': 'Разумне','region': 'НПЗ','days': '2023-03-04','balance': 'Підстанція нафтопроводу ','file':'factory.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [37.761544, 55.5504722]},'name': 'Видне','region': 'Об\'єкт інфраструктури','days': '2023-03-05','balance': 'Коксогазовий завод','file':'strtructure.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [39.6856252, 47.2241105]},'name': 'Ростов-на-Дону','region': 'Адмінбудівля','days': '2023-03-16','balance': 'Прикордонне управління ФСБ ','file':'admin.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [35.0897638, 53.0993255]},'name': 'Карачев','region': 'НПЗ','days': '2023-03-21','balance': 'Нафтоперекачувальна станція','file':'factory.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [36.4706157, 50.5626725]},'name': 'Бєлгород','region': 'Об\'єкт інфраструктури','days': '2023-03-27','balance': 'Газова станція','file':'strtructure.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [34.2548096, 53.2634783]},'name': 'Севський район','region': 'Військовий об\'єкт','days': '2023-04-03','balance': 'Військкомат','file':'military.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [32.4007014, 52.9675035]},'name': 'Лісне','region': 'Адмінбудівля','days': '2023-04-05','balance': 'Комбінат Росрезерва','file':'admin.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [36.568019, 50.6451148]},'name': 'Бєлгород','region': 'Об\'єкт інфраструктури','days': '2023-04-11','balance': 'Аеропорт','file':'strtructure.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [36.3506614, 50.5258144]},'name': 'Бєлгородська область','region': 'Об\'єкт інфраструктури','days': '2023-04-12','balance': 'Газопровід','file':'strtructure.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [36.6930249, 50.6169289]},'name': 'Ближня Ігуменка','region': 'Об\'єкт електроенергетики','days': '2023-04-16','balance': 'Електрична підстанція','file':'power.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [36.4293689, 50.6482198]},'name': 'Драгунське','region': 'Об\'єкт електроенергетики','days': '2023-04-16','balance': 'Електрична підстанція','file':'power.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [36.1660043, 50.5232048]},'name': 'Бєлгородський район','region': 'Об\'єкт електроенергетики','days': '2023-04-16','balance': 'Електрична підстанція','file':'power.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [36.0305462, 54.4669999]},'name': 'Воротинськ','region': 'Поїзд','days': '2023-04-16','balance': 'Релейна панель','file':'train.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [31.9290193, 52.5418042]},'name': 'Новозибков','region': 'Військовий об\'єкт','days': '2023-04-18','balance': 'Військкомат','file':'military.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [36.1660043, 50.5232048]},'name': 'Бєлгородський район','region': 'Об\'єкт електроенергетики','days': '2023-04-23','balance': 'Дизельний трансформатор','file':'power.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [36.672776, 50.307054]},'name': 'Муром','region': 'Об\'єкт інфраструктури','days': '2023-04-23','balance': 'Комунікаційна вишка','file':'strtructure.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [38.2009103, 55.5333706]},'name': 'Бронниці','region': 'Поїзд','days': '2023-04-23','balance': 'Релейна панель','file':'train.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [36.838286, 55.4303557]},'name': 'Бекасово-1','region': 'Поїзд','days': '2023-04-25','balance': 'Релейна панель','file':'train.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [30.9301517, 52.2702805]},'name': 'Климовський район','region': 'Об\'єкт електроенергетики','days': '2023-04-27','balance': 'ЛЕП','file':'power.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [29.4774757, 59.3476944]},'name': 'Гатчинський район','region': 'Об\'єкт електроенергетики','days': '2023-05-01','balance': 'Опора ЛЕП','file':'power.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [32.7291498, 52.845321]},'name': 'Унеча','region': 'Поїзд','days': '2023-05-01','balance': 'Вантажний поїзд','file':'train.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [35.3920811, 50.875752]},'name': 'Прилісся','region': 'Військовий об\'єкт','days': '2023-05-02','balance': 'Місце будівництва захисних споруд','file':'military.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [33.8608971, 52.3436999]},'name': 'Алєс','region': 'Об\'єкт інфраструктури','days': '2023-05-02','balance': 'Місце будівництва','file':'strtructure.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [34.5105885, 53.2136472]},'name': 'Сніжетська','region': 'Поїзд','days': '2023-05-02','balance': 'Вантажний поїзд','file':'train.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [37.6165246, 55.7530409]},'name': 'Москва','region': 'Адмінбудівля','days': '2023-05-03','balance': 'Кремль','file':'admin.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [33.338889, 53.715278]},'name': 'Сєща','region': 'Військовий об\'єкт','days': '2023-05-03','balance': 'Військовий аеродром','file':'military.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [36.6752597, 45.1306404]},'name': 'Волна','region': 'НПЗ','days': '2023-05-03','balance': 'Резервуар з нафтою','file':'factory.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [35.4983089, 50.7866888]},'name': 'В\'язове','region': 'Об\'єкт інфраструктури','days': '2023-05-03','balance': 'Водонапірна вежа','file':'strtructure.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [38.5677449, 44.8384015]},'name': 'Ільський','region': 'НПЗ','days': '2023-05-04','balance': 'Ільський НПЗ','file':'factory.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [39.8204096, 47.8260173]},'name': 'Киселеве','region': 'НПЗ','days': '2023-05-04','balance': 'Новошахтинський завод нафтопродуктів','file':'factory.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [38.5677449, 44.8384015]},'name': 'Ільський','region': 'НПЗ','days': '2023-05-05','balance': 'Ільський НПЗ','file':'factory.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [33.7992119, 52.3890914]},'name': 'Новеньке','region': 'Об\'єкт інфраструктури','days': '2023-05-05','balance': 'Місце будівництва','file':'strtructure.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [32.8555704, 52.3045004]},'name': 'Азарівка','region': 'Військовий об\'єкт','days': '2023-05-08','balance': 'Прикордонники','file':'military.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [37.7326434, 50.7302303]},'name': 'Ольховатка','region': 'Об\'єкт електроенергетики','days': '2023-05-10','balance': 'ЛЕП','file':'power.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [39.1129806, 51.4764097]},'name': 'Воронезька область','region': 'Військовий об\'єкт','days': '2023-05-10','balance': 'Полігон','file':'military.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [34.3533527, 53.1407914]},'name': 'Свень','region': 'НПЗ','days': '2023-05-10','balance': 'Нафтопровід "Дружба"','file':'factory.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [32.7182865, 52.5841525]},'name': 'Стародуб','region': 'Військовий об\'єкт','days': '2023-05-10','balance': 'Військкомат','file':'military.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [32.7487564, 52.5821565]},'name': 'Стародуб','region': 'Військовий об\'єкт','days': '2023-05-13','balance': 'Завод з виробництва сухпайків','file':'military.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [32.2075985, 52.7552928]},'name': 'Клинці','region': 'Військовий об\'єкт','days': '2023-05-13','balance': 'Вертоліт','file':'military.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [32.4684869, 52.5111778]},'name': 'Стародубський район','region': 'Військовий об\'єкт','days': '2023-05-13','balance': 'Літак Су-34','file':'military.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [31.5629883, 52.8203656]},'name': 'Унецький район','region': 'Військовий об\'єкт','days': '2023-05-13','balance': 'Вертоліт','file':'military.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [34.1266841, 52.4144385]},'name': 'Суземський район','region': 'Військовий об\'єкт','days': '2023-05-14','balance': 'Склад військової техніки','file':'military.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [35.3367045, 51.1031436]},'name': 'Плехово','region': 'Військовий об\'єкт','days': '2023-05-15','balance': 'Місце будівництва захисних споруд','file':'military.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [34.6104335, 51.3359321]},'name': 'Глушково','region': 'Військовий об\'єкт','days': '2023-05-15','balance': 'Прикордонне управління ФСБ ','file':'military.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [36.9199074, 50.3521656]},'name': 'Шебекіно','region': 'Військовий об\'єкт','days': '2023-05-17','balance': 'Прикордонний пункт','file':'military.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [30.4836998, 60.013374]},'name': 'Всеволожськ','region': 'Поїзд','days': '2023-05-17','balance': 'Релейна панель','file':'train.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [32.7351001, 52.7219919]},'name': 'Жеча','region': 'НПЗ','days': '2023-05-17','balance': 'Нафтоливна станція','file':'factory.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [35.7676074, 50.5364567]},'name': 'Головчино','region': 'Адмінбудівля','days': '2023-05-21','balance': 'Будівля адміністрації','file':'admin.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [37.3855235, 55.582026]},'name': 'Москва','region': 'Місто','days': '2023-02-28','balance': '','file':'city.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [36.5731346, 50.5895025]},'name': 'Бєлгород','region': 'Місто','days': '2023-02-28','balance': '','file':'city.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [39.4631937, 47.2611234]},'name': 'Ростов-на-Дону','region': 'Місто','days': '2023-02-28','balance': '','file':'city.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [34.182157, 53.2801207]},'name': 'Брянськ','region': 'Місто','days': '2023-02-28','balance': '','file':'city.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [36.0335802, 54.5358193]},'name': 'Калуга','region': 'Місто','days': '2023-02-28','balance': '','file':'city.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [28.8469604, 59.9352119]},'name': 'Санкт-Петербург','region': 'Місто','days': '2023-02-28','balance': '','file':'city.svg'},
{'type': 'Feature','geometry': {'type': 'Point', 'coordinates': [38.9152735, 45.0578531]},'name': 'Краснодар','region': 'Місто','days': '2023-02-28','balance': '','file':'city.svg'},


]

function getData(id){
    var value = $.ajax({ 
        url: id, 
        async: false
    }).responseJSON;
    return value;
}
var world = getData('https://cdn.jsdelivr.net/gh/liga-net/few-projects/world-topo.json')
function makeMap(w,json) {
  
    if (w < 600) {
        var width = w,
        height = w/1.3,
        scale = 470;
        to = 14;
        icon_width = 12
    } else {
        var width = 800,
        scale = 1000
        height = 550;
        to = 14;
        icon_width = 20
    }   
    var projection = d3.geoMercator()
        .scale(scale)
        .rotate([-44.32,0])
        .center([0, 50.96])
        .translate([width / 2, height / 1.7]);

    var geoPath = d3.geoPath()
        .projection(projection);
    
    
    d3.select("#bavovna").html('')
    
    var svg = d3.select("#bavovna").append("svg")
        .attr("width", width)
        .attr("height", height)
        .on("dblclick.zoom", null)
        .on("click.zoom", null);
    
    svg.append("text")
        .attr("x", (width / 2) ) 
        .attr("y", 20)
        .attr("text-anchor", "middle")  
        .style("font-size", fontSize)
        .style("font-family", "Georgia")
        .text();
    if (width > 500) {
        var fontSize = '18px'
    } else {
        var fontSize = '16px'
    }

    var g = svg.append("g").attr('y','20');
    
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
        .data(topojson.feature(world, world.objects.countries).features.filter(d => d.properties.admin != 'Antarctica'))
        .enter()
        .append("path")
        .attr("fill", function(d) {
            if(d.properties.admin == 'Russia') {
                return "#3182bd"
            } else {
                return "#EEEEEE"    
            }
            } )
        .attr('fill-opacity','0.6')
        .attr("stroke", '#666')
        .attr("stroke-width", '1px')
        .attr("stroke-linecap", 'round')
        .attr("stroke-linejoin", 'round')
        .attr("d", geoPath )
        .attr("class", "district");
   
    var cities_mer = svg.append("g").attr('class','images_icons');

    var points = cities_mer.selectAll(".point")
        .data(bavovna.filter(d => d.days == '2023-02-26'))
        .enter()
        .append("image")
        .attr("class", function(d) {
            if (d.file == 'city.svg') {
                return 'dot city'
            } else {
                return 'dot'
            }
        })
        .attr("xlink:href", function(d) { return 'https://cdn.jsdelivr.net/gh/liga-net/few-projects/SVG/'+d.file; })
        .attr("width", function(d) {
            if (d.file == 'city.svg') {
                return 5
            } else {
                return icon_width
            }
        })
        .attr("height", function(d) {
            if (d.file == 'city.svg') {
                return 5
            } else {
                return icon_width
            }
        })
        .attr("transform", function(d) { return "translate(" + geoPath.centroid(d) + ")"; })
        .style("opacity", 1);

    cities_mer.selectAll("text")
        .data(bavovna.filter(d => d.days == '2023-02-26'))
        .enter()
        .append("svg:text")
        .text(function(d,i){
            if (d.file == 'city.svg') {
                return d.name
            }
        })
        .attr("x", function(d){
            return geoPath.centroid(d)[0]+4;
        })
        .attr("y", function(d){
            return geoPath.centroid(d)[1]-5;
        })
        .attr("text-anchor","middle")
        .attr('fill','black')
        .attr("font-size",'12px')
        .attr("class", "dot_text");

    d3.selectAll('.dot')
        .on("mouseover", function(d) {
            if (d.file == 'city.svg') {
                tooltipBee.html('<h4>'+d.name+'</h4>')
            } else {
                var day = d.days.replace('2023-','').split('-')
                var html = '<h4>'+d.name+'</h4>'+ 
                '<p>'+day[1]+'.'+day[0]+', '+d.balance+' </p>'
                tooltipBee.html(html)
            }
            return tooltipBee.style("visibility", "visible")
        })
        .on("mousemove", function() {
            return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
        })
        .on("mouseout", function(d){
            return tooltipBee.style("visibility", "hidden");
        })
        
        var zoom = d3.zoom()
            .scaleExtent([1, 10])
            .on('zoom', handleZoom);

        function handleZoom(e) {
            d3.selectAll('.district')
                .attr('transform', d3.event.transform);

            d3.selectAll('.images_icons')
                .attr('transform', d3.event.transform)
            
            d3.selectAll('.images_icons image')
                .attr('width', 12-d3.event.transform.k)
                .attr('height', 12-d3.event.transform.k)

            d3.selectAll('.images_icons .city')
                .attr('width', 5)
                .attr('height', 5)

            d3.selectAll("text.dot_text")
                .attr("font-size",12-(d3.event.transform.k/2))
            
        }
        
        d3.select('#bavovna svg')
            .call(zoom)
        function zoomIn() {
            zoom.scaleBy(svg.transition().duration(750), 2);
            /* d3.selectAll('.district')
                .transition()
                .call(zoom.scaleBy, 2);

            d3.selectAll('.images_icons')
            .transition()
                .call(zoom.scaleBy, 2); */
        }

        function zoomOut() {
            /* d3.selectAll('.district')
                .transition()
                .call(zoom.scaleBy, 0.5);
            d3.selectAll('.images_icons')
                .transition()
                .call(zoom.scaleBy, 0.5); */
            zoom.scaleBy(svg.transition().duration(750), 0.4);
        }
        d3.select('#zoom_in').on('click',zoomIn)
        d3.select('#zoom_out').on('click',zoomOut)

        var margin = { top: 50, right: 50, bottom: 0, left: 50 },
        width = 300 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

//var formatTickDate = d3.timeFormat("%d %b");
//var formatTooltipDate = d3.timeFormat("%d %b");
var formatTooltipDate = locale.format("%d.%m")
var formatTickDate = locale.format("%d.%m")

var startDate = new Date("2023-02-26");
var endDate = new Date("2023-05-07");

var moving = false;
var targetValue = width;
var timer;

var playButton = d3.select("#play-button");

var sliderTime = d3.sliderHorizontal()
.min(startDate)
.max(endDate)
.step(86400000)
.width(width + margin.left + margin.right - 20)
.tickFormat(formatTickDate)
//.tickValues(tickVals)
.fill('#2196f3')
.displayFormat(formatTooltipDate)
//.default(Date.now())
.handle(d3.symbol().type(d3.symbolCircle).size(200)())
.on("drag", function (val) {
update()
resetTimer();
}).on("onchange", function (val) { 
d3.select(".tick text").attr("opacity", "1");
var offset = sliderTime.value().valueOf() + 86400000;
var value = new Date(offset).toISOString().split('T')[0]

d3.select("#value-time").text("Бавовна в Росії з 26 лютого 2023: "+bavovna.filter(d => d.file != 'city.svg' && new Date(d.days) <= new Date(value)).length)
});
//nell'onchange aggiorna i layers

d3.select("#slider-time").html('')
var gTime = d3
.select("div#slider-time")
.append("svg")
.attr("width", 340)
.attr("height", 100)
.append("g")
.attr("transform", "translate(30,30)");

gTime.call(sliderTime);
d3.select("#value-time").text('Кількість бавовн в Росії з 26 лютого');
d3.select(".parameter-value text").attr("y", "-29");
d3.selectAll(".tick text").style("text-anchor", "start");
document.querySelector(".parameter-value path").removeAttribute("tabindex");

playButton.on("click", function () {
var button = d3.select(this);
if (button.text() == "Пауза") {
resetTimer();
} else {
moving = true;
timer = setInterval(update, 300);
button.text("Пауза");
}
});


function update() {

var offset = sliderTime.value().valueOf() + 86400000;
sliderTime.value(offset);
cities_mer.selectAll(".dot")
.style("opacity", 0)
var value = new Date(offset).toISOString().split('T')[0]

cities_mer.selectAll(".point")
.data(bavovna.filter(d => new Date(d.days) <= new Date(value)))
.enter()
.append("image")
.attr("class", "dot")
.attr("xlink:href", function(d) { return 'https://cdn.jsdelivr.net/gh/liga-net/few-projects/SVG/'+d.file; })
.attr("width", function(d) {
            if (d.file == 'city.svg') {
                return 5
            } else {
                return icon_width
            }
        })
.attr("height", function(d) {
            if (d.file == 'city.svg') {
                return 5
            } else {
                return icon_width
            }
        })
.attr("transform", function(d) { return "translate(" + geoPath.centroid(d) + ")"; })
.style("opacity", 1)
d3.selectAll('.dot')
        .on("mouseover", function(d) {
            if (d.file == 'city.svg') {
                tooltipBee.html('<h4>'+d.name+'</h4>')
            } else {
                var day = d.days.replace('2023-','').split('-')
                var html = '<h4>'+d.name+'</h4>'+ 
                '<p>'+day[1]+'.'+day[0]+', '+d.balance+' </p>'
                tooltipBee.html(html)
            }
            return tooltipBee.style("visibility", "visible")
        })
        .on("mousemove", function() {
            return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
        })
        .on("mouseout", function(d){
            return tooltipBee.style("visibility", "hidden");
        })

//pause, uncomment to restart
if(offset >= endDate.valueOf()) {
resetTimer();
// sliderTime.value(startDate.valueOf());
}
}

function resetTimer() {
moving = false;
clearInterval(timer);
playButton.text("Старт");
}
}

makeMap(window.innerWidth)


window.onresize = function(event) { 

makeMap(window.innerWidth)
};