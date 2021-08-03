if(document.createStyleSheet) {
    document.createStyleSheet('https://cdn.jsdelivr.net/gh/liga-net/few-projects/simple_table.css');  
} else {
    var styles = "@import url('https://cdn.jsdelivr.net/gh/liga-net/few-projects/simple_table.css');";
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
function numberWithSpaces(x) {
   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
function makeColumnChart(id, w) { 
    if (w < 600) {
        var start_width = w
    } else {
        var start_width = 600
    } 
    d3.select("#"+id).html('')
    if (id == 'team_revenue') {
        var change_format = d3.format(".1f")
        var date = ["Токіо","Пхеньян","Ріо","Сочі","Лондон","Ванкувер","Пекін","Турін","Афіни","Солт Лейк Сіті","Сідней","Нагано","Атланта","Ліллехаммер","Барселона"]
        var json = [28,12.9,13.7,21.9,15,2.5,6.8,4.4,2.9,2.5,5,2.2,4.2,2.2,9.7]
        var tooltipHtml = '<p>'
        var left = 170
        var id_height = 600
        var title = "Великі трати на організацію Олімпійських ігор"
    } 
    if (start_width > 500) {
        var tickValue = 7
        var fontSize = '16px'
        var titleMargin = -140
    } else {
        var tickValue = 6
        var fontSize = '12px'
        var titleMargin = -170
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
        .attr("x", 10) 
        .attr("y", 0 - (margin.top / 2))
        .style("font-size", fontSize)
        .style("font-family", "Georgia")
        .text(title)
    var x = d3.scaleLinear()
            .domain([0, d3.max(json)])
            .range([ 0, width]);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).ticks(5))
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

    // Add Y axis
    var y = d3.scaleBand()
        .range([ 0, height ])
        .domain(date)
        .padding(.1);
    svg.append("g")
        .call(d3.axisLeft(y))
        .attr('font-size','14px')
        .attr('font-family','Arial');
    
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
        .attr("fill", "#006064")
        .on("mouseover", function(d,i) {
            tooltipBee.html('<p>'+date[i]+': €'+numberWithSpaces(d)+' ')
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
            return '$'+d+' млрд'
        })
        .attr("y", function(d,i) { return y(date[i])+19; })
        .attr("x", function(d,i) { 
            if (x(json[i]) < 80) {
                return x(json[i])+35; 
            } else{ 
                return x(json[i])-40; 
            }  
        })
        .attr("text-anchor","middle")
        .attr('font-family','Arial')
        .attr('fill',function(d,i) { 
            if (x(json[i]) < 80) {
                return 'black'
            } else{ 
                return 'white'
            }  
        })
        .attr('font-size','14px');
} 

    makeColumnChart('team_revenue',window.innerWidth)
    d3.select(window).on('resize', function () {
        makeColumnChart('team_revenue',window.innerWidth)
    })