if(document.createStyleSheet) {
    document.createStyleSheet('https://cdn.jsdelivr.net/gh/liga-net/few-projects/half_donut.css');
   }
   else {
    var styles = "@import url('https://cdn.jsdelivr.net/gh/liga-net/few-projects/half_donut.css');";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
  }
  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
var fullData = [
    {"name": "Дизель","Потребление": 7446.6,"Импорт из России": 2613.9},
    {"name": "Бензин","Потребление": 2143.8,"Импорт из России": 0},
    {"name": "Автогаз","Потребление": 1982.3,"Импорт из России": 689.5},
    {"name": "Уголь","Потребление": 380003061,"Импорт из России": 11872893}]
fullData.forEach(function(d,i) {
createDonut(i)
})

function createDonut(number) {
var width = 300
var height = 150
var svgLegend = d3.select('#legend').attr("width", width).attr("height", 70)
svgLegend.append("circle").attr("cx",10).attr("cy",14).attr("r", 6).style("fill", "#ef5350")
svgLegend.append("circle").attr("cx",10).attr("cy",30).attr("r", 6).style("fill", "#0d47a1")
svgLegend.append("text").attr("x", 20).attr("y", 19).text("Потребление").style("font-size", "14px").attr("alignment-baseline","left")
svgLegend.append("text").attr("x", 20).attr("y", 35).text("Импорт из России").style("font-size", "14px").attr("alignment-baseline","left")
var full_data = fullData[number]
var text = full_data['name']
var data = [full_data['Потребление'],full_data['Импорт из России']]


var anglesRange = 0.5 * Math.PI
var radis = Math.min(width, 2 * height) / 2
var thickness = 70
var colors = ["#ef5350", '#0d47a1']

var pies = d3.layout.pie()
.value( d => d)
.sort(null)
.startAngle(anglesRange * -1)
.endAngle( anglesRange)

var arc = d3.svg.arc()
.outerRadius(radis)
.innerRadius(radis - thickness)

var translation = (x, y) => `translate(${x}, ${y})`

var svg = d3.select("#donut"+number)
.append("svg")
.attr("width", width)
.attr("height", height)
.attr("class", "half-donut")
.append("g")
.attr("transform", translation(width / 2, height))
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

svg.selectAll("path")
.data(pies(data))
.enter()
.append("path")
.attr("fill", (d, i) => colors[i])
.attr("d", arc)
.on("mouseover", function(d,i) {
    var name = Object.keys(full_data)[i+1]
    
    if (name == 'Импорт из России') {
        var perc = Math.round(d.data / full_data['Потребление'] * 100)
        tooltipBee.html("<h4>"+text+'</h4><p>'+name+': '+numberWithSpaces(Math.round(d.data))+' тыс. тонн ('+perc+'%)</p>')
    } else {
        tooltipBee.html("<h4>"+text+'</h4><p>'+name+': '+numberWithSpaces(Math.round(d.data))+' тыс. тонн</p>')
    }
    
    tooltipBee.style("visibility", "visible")
    })
.on("mousemove", function() {
    return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
})
.on("mouseout", function(d){
    return tooltipBee.style("visibility", "hidden");
});

svg.append("text")
.text( d => text)
.attr("dy", "-1em")
.attr('font-size','16px')
.attr("text-anchor", "middle")
.attr("font-family", "sans-serif")
}