function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
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
var codesUkr = [{'name': 'robe_current', 'ukr': 'Халати ізоляційні одноразові'},
{'name': 'respirator_ffp3_current',
'ukr': 'Респіратори класу FFP2'},
{'name': 'mask_disposable_current',
'ukr': 'Одноразові хірургічні маски'},
{'name': 'mask_reusable_current',
'ukr': 'Багаторазові хірургічні маски'},
{'name': 'glasses_disposable_current',
'ukr': 'Одноразові захисні щитки та окуляри'},
{'name': 'glasses_reusable_current',
'ukr': 'Багаторазові захисні щитки та окуляри'},
{'name': 'gloves_current',
'ukr': 'Рукавички нітрилові'},
{'name': 'total_ivl_work', 'ukr': 'Загальна кількість справних ШВЛ'},
{'name': 'equipment_oxygen_concentrator',
'ukr': 'Кількість кисневих концентраторів'},
{'name': 'centralized_oxygen_system',
'ukr': 'Наявність системи централізованого постачання кисню'},
{'name': 'equipment_ivl_oxygen_concentrator',
'ukr': 'Кількість кисневих генераторів до ШВЛ'}]
var codes = ['robe_current', 'respirator_ffp3_current', 'mask_disposable_current', 'mask_reusable_current', 'glasses_disposable_current', 'glasses_reusable_current', 'gloves_current']
var conzData = [{"date":"2020-02-01","value":0},
{"date":"2020-03-01","value":0},
{"date":"2020-04-01","value":245},
{"date":"2020-05-01","value":583},
{"date":"2020-06-01","value":299},
{"date":"2020-07-01","value":303},
{"date":"2020-08-01","value":270},
{"date":"2020-09-01","value":657},
{"date":"2020-10-01","value":2147},
{"date":"2020-11-01","value":7800},
{"date":"2020-12-01","value":11370},
{"date":"2021-01-01","value":188},
{"date":"2021-02-01","value":101},
{"date":"2021-03-01","value":1899},
{"date":"2021-04-01","value":2787},
{"date":"2021-05-01","value":11078},
{"date":"2021-06-01","value":1044},
{"date":"2021-07-01","value":221},
{"date":"2021-08-01","value":27},
{"date":"2021-09-01","value":15},
{"date":"2021-10-01","value":52}]

function makeBee(w,filtered_value) {
if (w>600) {
    var windowW = 600
} else {
    var windowW = w-20
}
var margin = {top: 40, right: 10, bottom: 10, left: 10},
    width = windowW - margin.left - margin.right,
    height = 210 - margin.top + margin.bottom;

var svg = d3.select("#graph")
    .append('svg')
    .attr("width", width)
    .attr("height", height)
    .attr("id", filtered_value)
if (width > 500) {
    var dYvalue = -40
    var fontSize = '14px'
} else {
    var dYvalue = -20
    var fontSize = '12px'
}


var formatValue = d3.format(",d");

var x = d3.scaleLog()
    .rangeRound([0, width]);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + (margin.top-50) + ")");

d3.csv("export_zapas.csv", type, function(error, data) {
if (error) throw error;
    var data = data.filter(k => k.name == filtered_value)

    var title = codesUkr.filter(k=>k.name == filtered_value)[0].ukr 
    title += '. Прозвітували '+data.length+' лікарень'

    svg.append("text")
        .attr("x", (width / 2)) 
        .attr("y", 14)
        .attr("text-anchor", "middle")  
        .style("font-size", fontSize)
        .style("font-family", "Georgia")
        .text(title);

    x.domain(d3.extent(data, function(d) { return d.value; }));

    var simulation = d3.forceSimulation(data)
        .force("x", d3.forceX(function(d) { return x(d.value); }).strength(1))
        .force("y", d3.forceY(height / 2))
        .force("collide", d3.forceCollide(4))
        .stop();

    for (var i = 0; i < 120; ++i) simulation.tick();

    g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + (height-10) + ")")
        .call(d3.axisBottom(x).tickFormat(d3.format(".0s")).tickValues([1,10,30,60,100,400,1000,5000,10000]));

    var cell = g.append("g")
        .attr("class", "cells")
        .selectAll("g").data(d3.voronoi()
            .extent([[-margin.left, -margin.top], [width + margin.right, height + margin.top]])
            .x(function(d) { return d.x; })
            .y(function(d) { return d.y; })
        .polygons(data)).enter().append("g");
    
    

    cell.append("circle")
        .attr("r", 3)
        .attr("cx", function(d) { return d.data.x; })
        .attr("cy", function(d) { return d.data.y; });

    cell.append("path")
        .attr("d", function(d) { return "M" + d.join("L") + "Z"; });
    d3.selectAll('.cells path').style('fill','none')
    d3.selectAll('.axis line').style('fill','none')
    if (filtered_value == 'robe_current') {
        var selectCircle = data.filter(k=>k.value > 5)
        var selectCircle = selectCircle.filter(k=>k.value < 10)
        
        var annotations = [{
            note: {
                title: 'Одна точка - одна лікарня'
            },
            color: 'black',
            x: selectCircle[0].x+3, y: selectCircle[0].y-4,
            dy: dYvalue,
            dx: 0,
        }]
        const makeAnnotations = d3.annotation()
            .editMode(false)
            .notePadding(5)
            .type(d3.annotationLabel)
            .annotations(annotations)

        d3.select('#'+filtered_value)
            .append("g")
            .style('font-size','10px')
            .style('font-family','sans-serif')
            .call(makeAnnotations)
    }
    

});

function type(d) {
    if (!d.value) return;
    d.value = +d.value;
    return d;
}
}
function makeBarChart(w,uploaded_data,id) {
    if (w>600) {
        var windowW = 600
    } else {
        var windowW = w-20
    }
    // set the dimensions and margins of the graph
    var margin = {top: 60, right: 30, bottom: 70, left: 60},
        width = windowW - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;
    
    // append the svg object to the body of the page
    d3.select("#"+id).html('')
    var svg = d3.select("#"+id)
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
    if (width > 500) {
        var tickValue = 7
        var fontSize = '18px'
        var titleMargin = 0
    } else {
        var tickValue = 6
        var fontSize = '16px'
        var titleMargin = 20
    }
    
    svg.append("text")
        .attr("x", (width / 2) - titleMargin) 
        .attr("y", 0 - (margin.top / 1.5))
        .attr("text-anchor", "middle")  
        .style("font-size", fontSize)
        .style("font-family", "Georgia")
        .text('Кількість закуплених концентраторів на Prozorro');

var parseDate = d3.timeParse("%Y-%m-%d");
var formatDay = locale.format("%m.%Y")
var tickValues = uploaded_data.map(function(d) { return parseDate(d.date); }).filter(function(d,i) {
    if (i % 3 == 1) {
        return d
    }
    
})
var x = d3.scaleBand()
  .range([ 0, width ])
  //.domain(data.map(function(d) { return d.Country; }))
  .domain(uploaded_data.map(function(d) { return parseDate(d.date); }))
  .padding(0.2);

svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x).tickValues(tickValues).tickFormat(formatDay))
  .selectAll("text")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear()
  .domain([0, d3.max(uploaded_data.map(function(d) { return d.value; }))])
  .range([ height, 0]);
svg.append("g")
  .call(d3.axisLeft(y));
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
// Bars
svg.selectAll("mybar")
  .data(uploaded_data)
  .enter()
  .append("rect")
    .attr("x", function(d) { return x(parseDate(d.date)); })
    .attr("y", function(d) { return y(d.value); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d.value); })
    .attr("fill","#00441b")
    .on("mouseover", function(d,i) {
        tooltipBee.html("<h4>"+formatDay(parseDate(d.date))+'</h4><p>'+numberWithSpaces(d.value)+' шт</p>')
        tooltipBee.style("visibility", "visible")
        })
    .on("mousemove", function() {
        return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
    })
    .on("mouseout", function(d){
        return tooltipBee.style("visibility", "hidden");
    });
svg.append("g").selectAll("text")
    .data(uploaded_data)
    .enter()
    .append("text")
    .attr("x", function(d) { return x(parseDate(d.date))+12; })
    .attr("y", function(d) { return y(d.value)-7; })
    .attr("text-anchor","middle")
    .attr('font-family','Circe')
    .attr('fill','black')
    .attr('font-size','10px')
    .text(function(d,i) {
        if (i % 2 == 0 && i != 0 ) {
            return numberWithSpaces(d.value)
        } else if (i == 15) {
            return numberWithSpaces(d.value)
        }
        
    });
} 
var chartOptions = {
    'id':'areachart',
    "title":"Кількість виділених та зайнятих ліжок",
    'subtitle':"",
    'col': ['amount','used'],
    'colors': ['#00441b','#EA3B3B'],
    'rowName':['Виділено','Зайнято']
}

var uploaded_data = [
{"date":"2020-11-16","amount":43766,"used":27167},
{"date":"2020-11-17","amount":44659,"used":26630},
{"date":"2020-11-18","amount":45936,"used":26249},
{"date":"2020-11-19","amount":46420,"used":26021},
{"date":"2020-11-20","amount":46697,"used":26315},
{"date":"2020-11-21","amount":46787,"used":25996},
{"date":"2020-11-22","amount":46787,"used":26398},
{"date":"2020-11-23","amount":46798,"used":27167},
{"date":"2020-11-24","amount":46939,"used":26495},
{"date":"2020-11-25","amount":47159,"used":25960},
{"date":"2020-11-26","amount":47286,"used":25977},
{"date":"2020-11-27","amount":47646,"used":26253},
{"date":"2020-11-28","amount":47681,"used":25510},
{"date":"2020-11-29","amount":47681,"used":26268},
{"date":"2020-11-30","amount":49628,"used":27701},
{"date":"2020-12-01","amount":49601,"used":26902},
{"date":"2020-12-02","amount":50182,"used":26049},
{"date":"2020-12-03","amount":51312,"used":26024},
{"date":"2020-12-04","amount":52645,"used":26298},
{"date":"2020-12-05","amount":52795,"used":25324},
{"date":"2020-12-06","amount":52875,"used":25926},
{"date":"2020-12-07","amount":53023,"used":26564},
{"date":"2020-12-08","amount":53025,"used":25806},
{"date":"2020-12-09","amount":53147,"used":25232},
{"date":"2020-12-10","amount":53491,"used":25370},
{"date":"2020-12-11","amount":53750,"used":25027},
{"date":"2020-12-12","amount":53894,"used":24014},
{"date":"2020-12-13","amount":54012,"used":25119},
{"date":"2020-12-14","amount":54002,"used":25698},
{"date":"2020-12-15","amount":54077,"used":25088},
{"date":"2020-12-16","amount":54282,"used":24776},
{"date":"2020-12-17","amount":54319,"used":24526},
{"date":"2020-12-18","amount":54323,"used":24658},
{"date":"2020-12-19","amount":54663,"used":23683},
{"date":"2020-12-20","amount":54723,"used":24261},
{"date":"2020-12-21","amount":54663,"used":24783},
{"date":"2020-12-22","amount":54833,"used":24248},
{"date":"2020-12-23","amount":54965,"used":23620},
{"date":"2020-12-24","amount":55025,"used":23325},
{"date":"2020-12-25","amount":55039,"used":22101},
{"date":"2020-12-26","amount":55174,"used":22824},
{"date":"2020-12-27","amount":55254,"used":23343},
{"date":"2020-12-28","amount":55262,"used":23922},
{"date":"2020-12-29","amount":55457,"used":22897},
{"date":"2020-12-30","amount":55882,"used":21845},
{"date":"2020-12-31","amount":55927,"used":20755},
{"date":"2021-01-02","amount":56427,"used":20089},
{"date":"2021-01-03","amount":56482,"used":20878},
{"date":"2021-01-04","amount":56482,"used":21502},
{"date":"2021-01-05","amount":56322,"used":21143},
{"date":"2021-01-06","amount":56232,"used":20397},
{"date":"2021-01-07","amount":56577,"used":19535},
{"date":"2021-01-08","amount":56610,"used":19927},
{"date":"2021-01-09","amount":56610,"used":19794},
{"date":"2021-01-10","amount":56608,"used":20342},
{"date":"2021-01-11","amount":56634,"used":20827},
{"date":"2021-01-12","amount":56627,"used":20027},
{"date":"2021-01-13","amount":56624,"used":19289},
{"date":"2021-01-14","amount":56628,"used":18844},
{"date":"2021-01-15","amount":56518,"used":18838},
{"date":"2021-01-16","amount":56518,"used":18142},
{"date":"2021-01-17","amount":56521,"used":18311},
{"date":"2021-01-18","amount":56521,"used":18546},
{"date":"2021-01-19","amount":56521,"used":18017},
{"date":"2021-01-20","amount":56611,"used":17570},
{"date":"2021-01-21","amount":56661,"used":17467},
{"date":"2021-01-22","amount":56661,"used":17557},
{"date":"2021-01-23","amount":56721,"used":16801},
{"date":"2021-01-24","amount":56721,"used":17190},
{"date":"2021-01-25","amount":56721,"used":17511},
{"date":"2021-01-26","amount":56731,"used":17421},
{"date":"2021-01-27","amount":56868,"used":17064},
{"date":"2021-01-28","amount":56856,"used":17004},
{"date":"2021-01-29","amount":56901,"used":17101},
{"date":"2021-01-30","amount":56901,"used":16405},
{"date":"2021-01-31","amount":56901,"used":16720},
{"date":"2021-02-01","amount":56731,"used":17014},
{"date":"2021-02-02","amount":56851,"used":16725},
{"date":"2021-02-03","amount":56876,"used":16366},
{"date":"2021-02-04","amount":56977,"used":16369},
{"date":"2021-02-05","amount":57107,"used":16365},
{"date":"2021-02-06","amount":57170,"used":15751},
{"date":"2021-02-07","amount":57130,"used":16081},
{"date":"2021-02-08","amount":57246,"used":16480},
{"date":"2021-02-09","amount":57295,"used":16342},
{"date":"2021-02-10","amount":57315,"used":16000},
{"date":"2021-02-11","amount":57333,"used":16161},
{"date":"2021-02-12","amount":57419,"used":16357},
{"date":"2021-02-13","amount":57459,"used":15878},
{"date":"2021-02-14","amount":57469,"used":16276},
{"date":"2021-02-15","amount":57469,"used":16722},
{"date":"2021-02-16","amount":57280,"used":16819},
{"date":"2021-02-17","amount":57575,"used":16862},
{"date":"2021-02-18","amount":57695,"used":17082},
{"date":"2021-02-19","amount":58018,"used":17499},
{"date":"2021-02-20","amount":58001,"used":17238},
{"date":"2021-02-21","amount":58081,"used":17894},
{"date":"2021-02-22","amount":58315,"used":18625},
{"date":"2021-02-23","amount":58326,"used":19225},
{"date":"2021-02-24","amount":58561,"used":19555},
{"date":"2021-02-25","amount":58666,"used":20139},
{"date":"2021-02-26","amount":58898,"used":20876},
{"date":"2021-02-27","amount":59005,"used":20968},
{"date":"2021-02-28","amount":59005,"used":21683},
{"date":"2021-03-01","amount":59056,"used":22418},
{"date":"2021-03-02","amount":59178,"used":23035},
{"date":"2021-03-03","amount":59266,"used":23449},
{"date":"2021-03-04","amount":59393,"used":24164},
{"date":"2021-03-05","amount":59415,"used":24860},
{"date":"2021-03-06","amount":59514,"used":24980},
{"date":"2021-03-07","amount":59545,"used":25892},
{"date":"2021-03-08","amount":59589,"used":26932},
{"date":"2021-03-09","amount":59732,"used":27954},
{"date":"2021-03-10","amount":59920,"used":28351},
{"date":"2021-03-11","amount":60033,"used":28421},
{"date":"2021-03-12","amount":60355,"used":29022},
{"date":"2021-03-13","amount":60427,"used":28986},
{"date":"2021-03-14","amount":60462,"used":30081},
{"date":"2021-03-15","amount":60558,"used":31210},
{"date":"2021-03-16","amount":60675,"used":32009},
{"date":"2021-03-17","amount":60971,"used":32552},
{"date":"2021-03-18","amount":61332,"used":33375},
{"date":"2021-03-19","amount":62173,"used":34109},
{"date":"2021-03-20","amount":62617,"used":34337},
{"date":"2021-03-21","amount":62818,"used":35799},
{"date":"2021-03-22","amount":62974,"used":37108},
{"date":"2021-03-23","amount":63231,"used":37606},
{"date":"2021-03-24","amount":63388,"used":37983},
{"date":"2021-03-25","amount":63530,"used":38778},
{"date":"2021-03-26","amount":63770,"used":39559},
{"date":"2021-03-27","amount":63881,"used":38956},
{"date":"2021-03-28","amount":63921,"used":40170},
{"date":"2021-03-29","amount":64476,"used":41573},
{"date":"2021-03-30","amount":65175,"used":41382},
{"date":"2021-03-31","amount":65319,"used":41360},
{"date":"2021-04-01","amount":65606,"used":41692},
{"date":"2021-04-02","amount":65861,"used":42349},
{"date":"2021-04-03","amount":65991,"used":41807},
{"date":"2021-04-04","amount":66046,"used":43059},
{"date":"2021-04-05","amount":66257,"used":44249},
{"date":"2021-04-06","amount":66485,"used":43883},
{"date":"2021-04-07","amount":66967,"used":43657},
{"date":"2021-04-08","amount":67196,"used":44007},
{"date":"2021-04-09","amount":67661,"used":44402},
{"date":"2021-04-10","amount":68040,"used":42947},
{"date":"2021-04-11","amount":68066,"used":43749},
{"date":"2021-04-12","amount":68189,"used":44776},
{"date":"2021-04-13","amount":68250,"used":43524},
{"date":"2021-04-14","amount":68345,"used":42272},
{"date":"2021-04-15","amount":68112,"used":41792},
{"date":"2021-04-16","amount":68128,"used":41570},
{"date":"2021-04-17","amount":68152,"used":39590},
{"date":"2021-04-18","amount":68173,"used":40195},
{"date":"2021-04-19","amount":68034,"used":41178},
{"date":"2021-04-20","amount":67921,"used":39936},
{"date":"2021-04-21","amount":68009,"used":38629},
{"date":"2021-04-22","amount":67741,"used":38081},
{"date":"2021-04-23","amount":67548,"used":37806},
{"date":"2021-04-24","amount":67761,"used":35926},
{"date":"2021-04-25","amount":67945,"used":36409},
{"date":"2021-04-26","amount":67963,"used":36968},
{"date":"2021-04-27","amount":67896,"used":35495},
{"date":"2021-04-28","amount":67794,"used":33911},
{"date":"2021-04-29","amount":67843,"used":32926},
{"date":"2021-04-30","amount":67869,"used":31994},
{"date":"2021-05-01","amount":67554,"used":29256},
{"date":"2021-05-02","amount":67542,"used":29304},
{"date":"2021-05-03","amount":67556,"used":29754},
{"date":"2021-05-04","amount":67552,"used":30439},
{"date":"2021-05-05","amount":67540,"used":30892},
{"date":"2021-05-06","amount":67335,"used":28965},
{"date":"2021-05-07","amount":67288,"used":27201},
{"date":"2021-05-08","amount":67303,"used":24846},
{"date":"2021-05-09","amount":67303,"used":24990},
{"date":"2021-05-10","amount":67243,"used":25446},
{"date":"2021-05-11","amount":67226,"used":25881},
{"date":"2021-05-12","amount":66901,"used":24233},
{"date":"2021-05-13","amount":67016,"used":22972},
{"date":"2021-05-14","amount":66946,"used":22421},
{"date":"2021-05-15","amount":66896,"used":20987},
{"date":"2021-05-16","amount":66886,"used":21234},
{"date":"2021-05-17","amount":66833,"used":21545},
{"date":"2021-05-18","amount":66723,"used":20698},
{"date":"2021-05-19","amount":66593,"used":19788},
{"date":"2021-05-20","amount":66238,"used":19260},
{"date":"2021-05-21","amount":66053,"used":18906},
{"date":"2021-05-22","amount":66103,"used":17611},
{"date":"2021-05-23","amount":66103,"used":17714},
{"date":"2021-05-24","amount":66018,"used":17977},
{"date":"2021-05-25","amount":65970,"used":17094},
{"date":"2021-05-26","amount":65950,"used":15992},
{"date":"2021-05-27","amount":65848,"used":15322},
{"date":"2021-05-28","amount":65853,"used":14833},
{"date":"2021-05-29","amount":65853,"used":13378},
{"date":"2021-05-30","amount":65813,"used":13331},
{"date":"2021-05-31","amount":65684,"used":13398},
{"date":"2021-06-01","amount":64869,"used":11833},
{"date":"2021-06-02","amount":63835,"used":10898},
{"date":"2021-06-03","amount":63553,"used":10296},
{"date":"2021-06-04","amount":63226,"used":9922},
{"date":"2021-06-05","amount":63256,"used":8991},
{"date":"2021-06-06","amount":63255,"used":9072},
{"date":"2021-06-07","amount":63065,"used":9135},
{"date":"2021-06-08","amount":41155,"used":7316},
{"date":"2021-06-09","amount":60908,"used":7894},
{"date":"2021-06-10","amount":60182,"used":7693},
{"date":"2021-06-11","amount":59920,"used":7448},
{"date":"2021-06-12","amount":59633,"used":6811},
{"date":"2021-06-13","amount":59633,"used":6914},
{"date":"2021-06-14","amount":59282,"used":7148},
{"date":"2021-06-15","amount":59092,"used":6673},
{"date":"2021-06-16","amount":58907,"used":6345},
{"date":"2021-06-17","amount":58947,"used":6128},
{"date":"2021-06-18","amount":58738,"used":5949},
{"date":"2021-06-19","amount":58663,"used":5404},
{"date":"2021-06-20","amount":44875,"used":5435},
{"date":"2021-06-21","amount":44875,"used":5609},
{"date":"2021-06-22","amount":44735,"used":5830},
{"date":"2021-06-23","amount":44552,"used":5415},
{"date":"2021-06-24","amount":44177,"used":4911},
{"date":"2021-06-25","amount":43837,"used":4740},
{"date":"2021-06-26","amount":40667,"used":4159},
{"date":"2021-06-27","amount":40652,"used":4259},
{"date":"2021-06-28","amount":40652,"used":4430},
{"date":"2021-06-29","amount":40491,"used":4639},
{"date":"2021-06-30","amount":40491,"used":4274},
{"date":"2021-07-01","amount":40218,"used":3897},
{"date":"2021-07-02","amount":40078,"used":3656},
{"date":"2021-07-03","amount":40098,"used":3390},
{"date":"2021-07-04","amount":39638,"used":3513},
{"date":"2021-07-05","amount":39662,"used":3642},
{"date":"2021-07-06","amount":39577,"used":3511},
{"date":"2021-07-07","amount":39477,"used":3281},
{"date":"2021-07-08","amount":39722,"used":3195},
{"date":"2021-07-09","amount":39459,"used":3145},
{"date":"2021-07-10","amount":39166,"used":2957},
{"date":"2021-07-11","amount":39166,"used":3032},
{"date":"2021-07-12","amount":39166,"used":3136},
{"date":"2021-07-13","amount":39166,"used":2986},
{"date":"2021-07-14","amount":39166,"used":2876},
{"date":"2021-07-15","amount":39041,"used":2844},
{"date":"2021-07-16","amount":38960,"used":2918},
{"date":"2021-07-17","amount":38935,"used":2710},
{"date":"2021-07-18","amount":38935,"used":2852},
{"date":"2021-07-19","amount":38951,"used":3032},
{"date":"2021-07-20","amount":38539,"used":3008},
{"date":"2021-07-21","amount":38539,"used":2909},
{"date":"2021-07-22","amount":38761,"used":2905},
{"date":"2021-07-23","amount":38847,"used":2929},
{"date":"2021-07-24","amount":38823,"used":2852},
{"date":"2021-07-25","amount":38823,"used":2930},
{"date":"2021-07-26","amount":38783,"used":3088},
{"date":"2021-07-27","amount":38783,"used":3050},
{"date":"2021-07-28","amount":38783,"used":3033},
{"date":"2021-07-29","amount":38783,"used":3060},
{"date":"2021-07-30","amount":38683,"used":3122},
{"date":"2021-07-31","amount":38683,"used":3088},
{"date":"2021-08-01","amount":38683,"used":3273},
{"date":"2021-08-02","amount":38683,"used":3477},
{"date":"2021-08-03","amount":38723,"used":3426},
{"date":"2021-08-04","amount":38743,"used":3412},
{"date":"2021-08-05","amount":38779,"used":3481},
{"date":"2021-08-06","amount":38759,"used":3492},
{"date":"2021-08-07","amount":38759,"used":3461},
{"date":"2021-08-08","amount":38759,"used":3632},
{"date":"2021-08-09","amount":38599,"used":3788},
{"date":"2021-08-10","amount":38743,"used":3864},
{"date":"2021-08-11","amount":38625,"used":3796},
{"date":"2021-08-12","amount":38625,"used":3896},
{"date":"2021-08-13","amount":38625,"used":4033},
{"date":"2021-08-14","amount":38625,"used":3988},
{"date":"2021-08-15","amount":38610,"used":4153},
{"date":"2021-08-16","amount":38610,"used":4391},
{"date":"2021-08-17","amount":38610,"used":4437},
{"date":"2021-08-18","amount":38720,"used":4455},
{"date":"2021-08-19","amount":38747,"used":4470},
{"date":"2021-08-20","amount":38885,"used":4561},
{"date":"2021-08-21","amount":38950,"used":4531},
{"date":"2021-08-22","amount":38850,"used":4645},
{"date":"2021-08-23","amount":38850,"used":4920},
{"date":"2021-08-24","amount":38850,"used":4977},
{"date":"2021-08-25","amount":38850,"used":5217},
{"date":"2021-08-26","amount":38850,"used":5285},
{"date":"2021-08-27","amount":38956,"used":5314},
{"date":"2021-08-28","amount":39217,"used":5261},
{"date":"2021-08-29","amount":39217,"used":5441},
{"date":"2021-08-30","amount":39217,"used":5743},
{"date":"2021-08-31","amount":39093,"used":5927},
{"date":"2021-09-01","amount":39251,"used":5996},
{"date":"2021-09-02","amount":39391,"used":6179},
{"date":"2021-09-03","amount":39391,"used":6368},
{"date":"2021-09-04","amount":39391,"used":6406},
{"date":"2021-09-05","amount":39391,"used":6700},
{"date":"2021-09-06","amount":39391,"used":7047},
{"date":"2021-09-07","amount":39406,"used":7124},
{"date":"2021-09-08","amount":39376,"used":7131},
{"date":"2021-09-09","amount":39356,"used":7459},
{"date":"2021-09-10","amount":39488,"used":7826},
{"date":"2021-09-11","amount":39518,"used":8045},
{"date":"2021-09-12","amount":39518,"used":8463},
{"date":"2021-09-13","amount":39624,"used":8931},
{"date":"2021-09-14","amount":39622,"used":9421},
{"date":"2021-09-15","amount":39621,"used":9787},
{"date":"2021-09-16","amount":39786,"used":10322},
{"date":"2021-09-17","amount":39946,"used":11077},
{"date":"2021-09-18","amount":39946,"used":11439},
{"date":"2021-09-19","amount":39967,"used":12169},
{"date":"2021-09-20","amount":40037,"used":12989},
{"date":"2021-09-21","amount":39857,"used":13724},
{"date":"2021-09-22","amount":40052,"used":14336},
{"date":"2021-09-23","amount":40177,"used":14951},
{"date":"2021-09-24","amount":40412,"used":15541},
{"date":"2021-09-25","amount":40474,"used":15995},
{"date":"2021-09-26","amount":40474,"used":16764},
{"date":"2021-09-27","amount":40407,"used":17701},
{"date":"2021-09-28","amount":41242,"used":18494},
{"date":"2021-09-29","amount":41630,"used":19008},
{"date":"2021-09-30","amount":42525,"used":19853},
{"date":"2021-10-01","amount":42825,"used":20565},
{"date":"2021-10-02","amount":43492,"used":21456},
{"date":"2021-10-03","amount":44344,"used":22591},
{"date":"2021-10-04","amount":46596,"used":24006},
{"date":"2021-10-05","amount":47140,"used":24936},
{"date":"2021-10-06","amount":50982,"used":26012},
{"date":"2021-10-07","amount":53678,"used":27015},
{"date":"2021-10-08","amount":55272,"used":28268},
{"date":"2021-10-09","amount":56250,"used":28550},
{"date":"2021-10-10","amount":56387,"used":29878},
{"date":"2021-10-11","amount":56742,"used":31233},
{"date":"2021-10-12","amount":57636,"used":32504},
{"date":"2021-10-13","amount":58681,"used":33566},
{"date":"2021-10-14","amount":59777,"used":34792},
{"date":"2021-10-15","amount":59892,"used":36287},
{"date":"2021-10-16","amount":59962,"used":36845},
{"date":"2021-10-17","amount":60062,"used":38198},
{"date":"2021-10-18","amount":63907,"used":40096},
{"date":"2021-10-19","amount":64950,"used":40500},
{"date":"2021-10-20","amount":65785,"used":40987},
{"date":"2021-10-21","amount":66734,"used":42041},
{"date":"2021-10-22","amount":67397,"used":43828},
{"date":"2021-10-23","amount":69291,"used":44203},
{"date":"2021-10-24","amount":69281,"used":45744},
{"date":"2021-10-25","amount":69884,"used":47215},
{"date":"2021-10-26","amount":70478,"used":47468},
{"date":"2021-10-27","amount":70732,"used":47814},
{"date":"2021-10-28","amount":71351,"used":48643}
];


var monthRU = [{'id':1,'month':'января'},
    {'id':2,'month':'февраля'},
    {'id':3,'month':'марта'},
    {'id':4,'month':'апреля'},
    {'id':5,'month':'мая'},
    {'id':6,'month':'июня'},
    {'id':7,'month':'июля'},
    {'id':8,'month':'августа'},
    {'id':9,'month':'сентября'},
    {'id':10,'month':'октября'},
    {'id':11,'month':'ноября'},
    {'id':12,'month':'декабря'}];


function makeAreaChart(w) { 
    if (w>600) {
        var windowW = 600
    } else {
        var windowW = w-35
    }
    var margin =  {top: 50, right: 20, bottom: 50, left: 40},
        width = windowW + margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;
    
    d3.select("#"+chartOptions.id).html("")
    
    var svg = d3.select("#"+chartOptions.id)
        .append("svg")
        .attr("id", 'svg_chart')
        .attr("width", width)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    if (width > 500) {
        var tickValue = 7
        var fontSize = '18px'
        var titleMargin = 0
    } else {
        var tickValue = 6
        var fontSize = '16px'
        var titleMargin = 20
    }
    
    svg.append("text")
        .attr("x", (width / 2) - titleMargin) 
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", fontSize)
        .style("font-family", "sans-serif")
        .text(chartOptions.title);
    
    svg.append("text")
        .attr("x", 0) 
        .attr("y", height + margin.bottom-10)
        .attr("text-anchor", "left")  
        .style("font-size", "12px")
        .style("font-family", "sans-serif")
        .attr("fill", "#9e9e9e")
        .text(chartOptions.subtitle)
    var parseDate = d3.timeParse("%Y-%m-%d");

    var bisectDate = d3.bisector(function(d) {
        return parseDate(d.date);
    }).left;

    var color = d3.scaleOrdinal()
        .domain(chartOptions.col)
        .range(chartOptions.colors);

    //var parseDate = d3.timeParse("%m/%d/%Y %H:%M");
    
        
    var x = d3.scaleTime().range([0, width]),
        y = d3.scaleLinear().range([height, 0]);

    var area = d3.area()
        .curve(d3.curveCardinal)
        .x(function(d) { return x(d.date); })
        .y0(y(0))
        .y1(function(d) { return y(d.kW); });
    
    var new_data = uploaded_data.map(d=> parseDate(d.date))
    
    var sources = chartOptions.col.map(function(id) {
        return {
            id: id,
            values: uploaded_data.map(function(d) {
                return {date: parseDate(d.date), kW: parseInt(d[id])};
            })
        };
    });
    
    x.domain(d3.extent(uploaded_data, function(d) { return parseDate(d.date); }));
    y.domain([0,
        d3.max(sources, function(c) { return d3.max(c.values, function(d) { return d.kW; }); })
    ]);
    color.domain(sources.map(function(c) { return c.id; }));
    
    
    xAxis = svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickFormat(multiFormat).ticks(tickValue));
    
    yAxis = svg.append("g")
        .call(d3.axisLeft(y)
            .ticks(5));
    
    var div = d3.select("body").append("div")
            .attr("class", "tooltipBubbleNEW")
            .style("display", "none");
    
    var g = svg.append('g')

    var source = g.selectAll(".area")
        .data(sources)
        .enter()
        .append("g")
        .attr("class", function(d) { return `area ${d.id}`; });
    
    source.append("path")
        .attr("d", function(d) { return area(d.values); })
        .style("fill", function(d) { return color(d.id); });
        
    var legend = svg.append("g")
        .attr("font-family", "Georgia")
        .attr("font-size", 10)
        .selectAll("g")
        .data(chartOptions.rowName)
        .enter().append("g")
        .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

    legend.append("rect")
        .attr("x", 10)
        .attr("y", 0)
        .attr("width", 12)
        .attr("height", 12)
        .attr("fill", color);

    legend.append("text")
        .attr("x", 25)
        .attr("y", 7)
        .attr("dy", "0.32em")
        .text(function(d) { return d; });

}
function horizontalChart(w) {
var data = {
    labels: [
    "лікування COVID-19","вакцини","соцвиплати","виплати по безробіттю","освіта","ліки від COVID-19","лікарняні","доплати для структур МВС","кисень для лікарень","виплати закладам НАМН"
],
series: [
    {label: 'Витрачені',values: [11800000000,9800000000,2900000000,1100000000,18300000,800000000,800000000,800000000,500000000,14000000]},
    {label: 'Заплановані',values: [17500000000,10500000000,2900000000,1100000000,1000000000,800000000,800000000,800000000,750000000,55000000]
}]
};
if (w>600) {
    var windowW = 600
    marginLeft = 200;
} else {
    var windowW = w-20
    marginLeft = 165;
}
var chartWidth = windowW,
barHeight = 20,
groupHeight = barHeight * data.series.length,
gapBetweenGroups = 10

// Zip the series data together (first values, second values, etc.)
var zippedData = [];
for (var i=0; i<data.labels.length; i++) {
for (var j=0; j<data.series.length; j++) {
    zippedData.push(data.series[j].values[i]);
}
}
// Color scale
var color = d3.scaleOrdinal()
    .domain(chartOptions.col)
    .range(['#EA3B3B','#00441b']);
var chartHeight = barHeight * zippedData.length + gapBetweenGroups * data.labels.length;

var x = d3.scaleLinear()
    .domain([0, d3.max(zippedData)])
    .range([0, chartWidth-marginLeft-10]);

var y = d3.scaleBand()
    .range([chartHeight + gapBetweenGroups, 0]);


d3.select("#horchart").html('')
var chart = d3.select("#horchart").append('svg')
    .attr("width", chartWidth)
    .attr("height", chartHeight);

var bar = chart.selectAll("g")
    .data(zippedData)
    .enter().append("g")
    .attr("transform", function(d, i) {
    return "translate(" + marginLeft + "," + (i * barHeight + gapBetweenGroups * (0.5 + Math.floor(i/data.series.length))) + ")";
});

bar.append("rect")
    .attr("fill", function(d,i) { return color(i % data.series.length); })
    .attr("class", "bar")
    .attr("width", function(d) {console.log(x(d)); return x(d)})
    .attr("height", barHeight - 1);

bar.append("text")
    .attr("x", function(d,i) { 
        if (x(d) < 90) {
            return x(d) + 43; 
        } if (i == 0 && chartWidth < 600) {
            return x(d) - 40; 
        }else {
            return x(d) - 5; 
        }
    })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .style('text-anchor','end')
    .style('font','10px sans-serif')
    .style('fill',function(d) {
        if (x(d) < 90) {
            return 'black'
        } else {
            return 'white'
        }
    })
    .text(function(d) { 
        if (String(d).length >= 9) {
            return d / 1000000000 +' млрд'; 
        } else {
            return d / 1000000 +' млн'; 
        }
    });

bar.append("text")
    .attr("class", "label")
    .attr("x", function(d) { return - 10; })
    .attr("y", groupHeight / 2)
    .attr("dy", ".35em")
    .style('font','12px sans-serif')
    .style('text-anchor','end')
    .text(function(d,i) {
    if (i % data.series.length === 0) {
        return data.labels[Math.floor(i/data.series.length)];
    } else {
        return ""
    }
    })

  
var legend = chart.append("g")
        .selectAll("g")
        .data(data.series)
        .enter().append("g")
        .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

    legend.append("rect")
        .attr("x", chartWidth-115)
        .attr("y", chartHeight-200)
        .attr("width", 12)
        .attr("height", 12)
        .attr("fill", function(d) {return color(d.label)});

    legend.append("text")
    .attr("x", chartWidth-100)
        .attr("y", chartHeight-193)
        .style('font','14px sans-serif')
        .attr("dy", "0.32em")
        .text(function(d) { return d.label; });

}
horizontalChart(window.innerWidth)
makeAreaChart(window.innerWidth)    
makeBarChart(window.innerWidth,conzData,'conzData')
codes.forEach(function(value){
makeBee(window.innerWidth,value)
})
d3.select(window).on("resize", function() {
horizontalChart(window.innerWidth)
makeAreaChart(window.innerWidth)    
makeBarChart(window.innerWidth,conzData,'conzData')
codes.forEach(function(value){
    makeBee(window.innerWidth,value)
})
})