function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

var registered = [{"date": "2012-09-01", "value": 416100},
{"date": "2012-10-01", "value": 399862},
{"date": "2012-11-01", "value": 441291},
{"date": "2012-12-01", "value": 506800},
{"date": "2013-01-01", "value": 564530},
{"date": "2013-02-01", "value": 589077},
{"date": "2013-03-01", "value": 571641},
{"date": "2013-04-01", "value": 534675},
{"date": "2013-05-01", "value": 500990},
{"date": "2013-06-01", "value": 465300},
{"date": "2013-07-01", "value": 451500},
{"date": "2013-08-01", "value": 435400},
{"date": "2013-09-01", "value": 422100},
{"date": "2013-10-01", "value": 394605},
{"date": "2013-11-01", "value": 423793},
{"date": "2013-12-01", "value": 487691},
{"date": "2014-01-01", "value": 504900},
{"date": "2014-02-01", "value": 515700},
{"date": "2014-03-01", "value": 492300},
{"date": "2014-04-01", "value": 474700},
{"date": "2014-05-01", "value": 456100},
{"date": "2014-06-01", "value": 437511},
{"date": "2014-07-01", "value": 433488},
{"date": "2014-08-01", "value": 426100},
{"date": "2014-09-01", "value": 418100},
{"date": "2014-10-01", "value": 402700},
{"date": "2014-11-01", "value": 450601},
{"date": "2014-12-01", "value": 512196},
{"date": "2015-01-01", "value": 524400},
{"date": "2015-02-01", "value": 523100},
{"date": "2015-03-01", "value": 506791},
{"date": "2015-04-01", "value": 486351},
{"date": "2015-05-01", "value": 469408},
{"date": "2015-06-01", "value": 443938},
{"date": "2015-07-01", "value": 427494},
{"date": "2015-08-01", "value": 414672},
{"date": "2015-09-01", "value": 407383},
{"date": "2015-10-01", "value": 394099},
{"date": "2015-11-01", "value": 433532},
{"date": "2015-12-01", "value": 490775},
{"date": "2016-01-01", "value": 508596},
{"date": "2016-02-01", "value": 508199},
{"date": "2016-03-01", "value": 467500},
{"date": "2016-04-01", "value": 434704},
{"date": "2016-05-01", "value": 416367},
{"date": "2016-06-01", "value": 388931},
{"date": "2016-07-01", "value": 369728},
{"date": "2016-08-01", "value": 355657},
{"date": "2016-09-01", "value": 341511},
{"date": "2016-10-01", "value": 316198},
{"date": "2016-11-01", "value": 337850},
{"date": "2016-12-01", "value": 390787},
{"date": "2017-01-01", "value": 429012},
{"date": "2017-02-01", "value": 439376},
{"date": "2017-03-01", "value": 406757},
{"date": "2017-04-01", "value": 374169},
{"date": "2017-05-01", "value": 352602},
{"date": "2017-06-01", "value": 330200},
{"date": "2017-07-01", "value": 319896},
{"date": "2017-08-01", "value": 311915},
{"date": "2017-09-01", "value": 302966},
{"date": "2017-10-01", "value": 281918},
{"date": "2017-11-01", "value": 309000},
{"date": "2017-12-01", "value": 354394},
{"date": "2018-01-01", "value": 378869},
{"date": "2018-02-01", "value": 383736},
{"date": "2018-03-01", "value": 366881},
{"date": "2018-04-01", "value": 326767},
{"date": "2018-05-01", "value": 316000},
{"date": "2018-06-01", "value": 303900},
{"date": "2018-07-01", "value": 298000},
{"date": "2018-08-01", "value": 292800},
{"date": "2018-09-01", "value": 287100},
{"date": "2018-10-01", "value": 271400},
{"date": "2018-11-01", "value": 301001},
{"date": "2018-12-01", "value": 341652},
{"date": "2019-01-01", "value": 364300},
{"date": "2019-02-01", "value": 367011},
{"date": "2019-03-01", "value": 340728},
{"date": "2019-04-01", "value": 311352},
{"date": "2019-05-01", "value": 300875},
{"date": "2019-06-01", "value": 287086},
{"date": "2019-07-01", "value": 280825},
{"date": "2019-08-01", "value": 274988},
{"date": "2019-09-01", "value": 268188},
{"date": "2019-10-01", "value": 259338},
{"date": "2019-11-01", "value": 288872},
{"date": "2019-12-01", "value": 338163},
{"date": "2020-01-01", "value": 373176},
{"date": "2020-02-01", "value": 376779},
{"date": "2020-03-01", "value": 349424},
{"date": "2020-04-01", "value": 457005},
{"date": "2020-05-01", "value": 511388},
{"date": "2020-06-01", "value": 517704},
{"date": "2020-07-01", "value": 505975},
{"date": "2020-08-01", "value": 473961},
{"date": "2020-09-01", "value": 433382},
{"date": "2020-10-01", "value": 399486},
{"date": "2020-11-01", "value": 408837},
{"date": "2020-12-01", "value": 459200},
{"date": "2021-01-01", "value": 488038},
{"date": "2021-02-01", "value": 489600},
{"date": "2021-03-01", "value": 449676},
{"date": "2021-04-01", "value": 404643},
{"date": "2021-05-01", "value": 378914},
{"date": "2021-06-01", "value": 344788},
{"date": "2021-07-01", "value": 321233},
{"date": "2021-08-01", "value": 303958},
{"date": "2021-09-01", "value": 285922},
{"date": "2021-10-01", "value": 260668},
{"date": "2021-11-01", "value": 261023},
{"date": "2021-12-01", "value": 294968},
{"date": "2022-01-01", "value": 315394},
{"date": "2022-02-01", "value": 313787},
{"date": "2022-03-01", "value": 286879},
{"date": "2022-04-01", "value": 283356},
{"date": "2022-05-01", "value": 310964},
{"date": "2022-06-01", "value": 316448},
{"date": "2022-07-01", "value": 296668}]

var pressure = [{"date": "2012-09-01", "value": 6},
{"date": "2012-10-01", "value": 5.7},
{"date": "2012-11-01", "value": 7.4},
{"date": "2012-12-01", "value": 10.8},
{"date": "2013-01-01", "value": 10.4},
{"date": "2013-02-01", "value": 10},
{"date": "2013-03-01", "value": 8.4},
{"date": "2013-04-01", "value": 7.7},
{"date": "2013-05-01", "value": 6.7},
{"date": "2013-06-01", "value": 5.9},
{"date": "2013-07-01", "value": 5.7},
{"date": "2013-08-01", "value": 4.9},
{"date": "2013-09-01", "value": 4.8},
{"date": "2013-10-01", "value": 5.1},
{"date": "2013-11-01", "value": 6.3},
{"date": "2013-12-01", "value": 10.3},
{"date": "2014-01-01", "value": 9.7},
{"date": "2014-02-01", "value": 9.4},
{"date": "2014-03-01", "value": 7.9},
{"date": "2014-04-01", "value": 9.5},
{"date": "2014-05-01", "value": 9},
{"date": "2014-06-01", "value": 9},
{"date": "2014-07-01", "value": 8.9},
{"date": "2014-08-01", "value": 7.8},
{"date": "2014-09-01", "value": 7.9},
{"date": "2014-10-01", "value": 7.5},
{"date": "2014-11-01", "value": 9.9},
{"date": "2014-12-01", "value": 14.5},
{"date": "2015-01-01", "value": 12.8},
{"date": "2015-02-01", "value": 12.1},
{"date": "2015-03-01", "value": 9},
{"date": "2015-04-01", "value": 9.7},
{"date": "2015-05-01", "value": 9.7},
{"date": "2015-06-01", "value": 10.2},
{"date": "2015-07-01", "value": 10.3},
{"date": "2015-08-01", "value": 8.6},
{"date": "2015-09-01", "value": 9.9},
{"date": "2015-10-01", "value": 9.9},
{"date": "2015-11-01", "value": 12.7},
{"date": "2015-12-01", "value": 18.9},
{"date": "2016-01-01", "value": 16.2},
{"date": "2016-02-01", "value": 13.1},
{"date": "2016-03-01", "value": 9.4},
{"date": "2016-04-01", "value": 11},
{"date": "2016-05-01", "value": 9.2},
{"date": "2016-06-01", "value": 9.5},
{"date": "2016-07-01", "value": 8.7},
{"date": "2016-08-01", "value": 6.6},
{"date": "2016-09-01", "value": 6},
{"date": "2016-10-01", "value": 5.5},
{"date": "2016-11-01", "value": 6.3},
{"date": "2016-12-01", "value": 10.8},
{"date": "2017-01-01", "value": 9.1},
{"date": "2017-02-01", "value": 7.7},
{"date": "2017-03-01", "value": 5.5},
{"date": "2017-04-01", "value": 5.8},
{"date": "2017-05-01", "value": 5.1},
{"date": "2017-06-01", "value": 5},
{"date": "2017-07-01", "value": 4.9},
{"date": "2017-08-01", "value": 4},
{"date": "2017-09-01", "value": 4.1},
{"date": "2017-10-01", "value": 3.9},
{"date": "2017-11-01", "value": 4.6},
{"date": "2017-12-01", "value": 7},
{"date": "2018-01-01", "value": 6},
{"date": "2018-02-01", "value": 5},
{"date": "2018-03-01", "value": 4},
{"date": "2018-04-01", "value": 4},
{"date": "2018-05-01", "value": 4},
{"date": "2018-06-01", "value": 4},
{"date": "2018-07-01", "value": 3},
{"date": "2018-08-01", "value": 3},
{"date": "2018-09-01", "value": 3},
{"date": "2018-10-01", "value": 3},
{"date": "2018-11-01", "value": 4},
{"date": "2018-12-01", "value": 6},
{"date": "2019-01-01", "value": 5},
{"date": "2019-02-01", "value": 4},
{"date": "2019-03-01", "value": 3},
{"date": "2019-04-01", "value": 3},
{"date": "2019-05-01", "value": 3},
{"date": "2019-06-01", "value": 3},
{"date": "2019-07-01", "value": 3},
{"date": "2019-08-01", "value": 3},
{"date": "2019-09-01", "value": 3},
{"date": "2019-10-01", "value": 3},
{"date": "2019-11-01", "value": 4},
{"date": "2019-12-01", "value": 6},
{"date": "2020-01-01", "value": 5},
{"date": "2020-02-01", "value": 5},
{"date": "2020-03-01", "value": 5},
{"date": "2020-04-01", "value": 9},
{"date": "2020-05-01", "value": 9},
{"date": "2020-06-01", "value": 9},
{"date": "2020-07-01", "value": 8},
{"date": "2020-08-01", "value": 6},
{"date": "2020-09-01", "value": 6},
{"date": "2020-10-01", "value": 6},
{"date": "2020-11-01", "value": 7},
{"date": "2020-12-01", "value": 11},
{"date": "2021-01-01", "value": 9},
{"date": "2021-02-01", "value": 8},
{"date": "2021-03-01", "value": 6},
{"date": "2021-04-01", "value": 6},
{"date": "2021-05-01", "value": 5},
{"date": "2021-06-01", "value": 5},
{"date": "2021-07-01", "value": 4},
{"date": "2021-08-01", "value": 4},
{"date": "2021-09-01", "value": 4},
{"date": "2021-10-01", "value": 4},
{"date": "2021-11-01", "value": 4},
{"date": "2021-12-01", "value": 7},
{"date": "2022-01-01", "value": 6},
{"date": "2022-02-01", "value": 6},
{"date": "2022-03-01", "value": 9},
{"date": "2022-04-01", "value": 11},
{"date": "2022-05-01", "value": 12},
{"date": "2022-06-01", "value": 13},
{"date": "2022-07-01", "value": 12}]
function makeAreaChart(w,id,data) {
if (w>600) {
    var windowW = 600
} else {
    var windowW = w
}
if (id == 'registered') {
    var title = 'Количество зарегистрированных безработных'
    var scaleValue = 150000
    var difference = 10000
    var left = 50
} else if (id == 'pressure') {
    var title = 'Нагрузка на одно свободное рабочее место'
    var scaleValue = 5
    var difference = 1.5
    var left = 25
} 
var margin = {top: 60, right:25, bottom: 50, left: left},
    width = windowW - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

d3.select("#"+id).html('')
var svg = d3.select("#"+id)
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
    .style("font-family", "sans-serif")
    .text(title);
    svg.append("text")
        .attr("x", 0) 
        .attr("y", height + margin.bottom-10)
        .attr("text-anchor", "left")  
        .style("font-size", "12px")
        .style("font-family", "sans-serif")
        .attr("fill", "#9e9e9e")
        .text("Данные: НБУ")

var parseDate = d3.timeParse("%Y-%m-%d")
var parseFormatDate = d3.timeFormat("%d.%m.%Y")

var data = data.map(function(d) {
    return {date: parseDate(d.date), value: parseFloat(d.value)};
});
    // Add X axis --> it is a date format
    var x = d3.scaleTime()
      .domain(d3.extent(data, function(d) { return d.date; }))
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", "translate(0," + (height) + ")")
      .call(d3.axisBottom(x).ticks(5).tickSizeOuter(0));

    // Add Y axis
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

    var y = d3.scaleLinear()
      .domain([0,d3.max(data.map(d=>d.value))+scaleValue] )
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
      .attr("class", "line")
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
        .on("mouseover", function(d) {
            var html = '<p><b>'+parseFormatDate(d.date)+'</b>: '+numberWithSpaces(d.value)+'</p>'
            tooltipBee.html(html)
            tooltipBee.style("visibility", "visible")
            })
        .on("mousemove", function() {
            return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
        })
        .on("mouseout", function(d){
            return tooltipBee.style("visibility", "hidden");
        });
    
    
    var maxValues = data.map(d => d.value)
    
    const findMaxima = (arr = []) => {
        let positions = []
        let maximas = []
        for (let i = 1; i < arr.length - 1; i++) {
            if (arr[i] > arr[i - 1]) {
                if (arr[i] > arr[i + 1]) {
                    positions.push(i)
                    maximas.push(arr[i])
                } else if (arr[i] === arr[i + 1]) {
                    let temp = i
                    while (arr[i] === arr[temp]) i++
                        if (arr[temp] > arr[i]) {
                            positions.push(temp)
                            maximas.push(arr[temp])
                        }
                }
            }
        }
    return { maximas, positions };
    };
    var maxValues = findMaxima(maxValues);
    

    svg.selectAll("myCircles")
        .data(data)
        .enter()
        .append("text")
        .text(function(d,i){
            if (maxValues.positions.includes(i) && d.value != 316448) {
                return numberWithSpaces(d.value)
            }
        })
        .attr("y", function(d,i) { 
            if (maxValues.positions.includes(i)) {
                return y(d.value)-10
            } 
        })
        .attr("x", function(d,i) {
            if (maxValues.positions.includes(i)) {
                 return x(d.date); 
            }
        })
        .attr("text-anchor","middle")
        .attr('fill','black')
        .attr('font-size',textSize)


} 

makeAreaChart(window.innerWidth,'registered',registered)
makeAreaChart(window.innerWidth,'pressure',pressure)
window.onresize = function(event) {
    makeAreaChart(window.innerWidth,'registered',registered)
    makeAreaChart(window.innerWidth,'pressure',pressure)
}