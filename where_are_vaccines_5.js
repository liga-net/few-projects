function makeTable(objects) {
    d3.select("#vacc_table").html('<input id="vacc_search" type="text" placeholder="Наприклад: Харків">')
    var table = d3.select('#vacc_table')
        .append('table')
    var thead = table.append('thead')

    thead.selectAll('tr')
        .data([1])
        .enter()
        .append('tr')
        .html(function(d) {
            return '<th>Нас.пункт</th><th>Адреса</th><th>Телефон</th><th>Лікарня</th>'
        })
    var tbody = table.append('tbody')
        .attr('id','tbody_search')
    
    
    var clean_json = JSON.parse(JSON.stringify(objects));
    
    clean_json.forEach(function(d) {
        d.properties.communityName = d.properties.communityName.split(' ')[0]
    })
    clean_json.sort(function(a, b) {
        return (a.communityName > b.communityName) ? 1 : ((a.communityName < b.communityName) ? -1 : 0);
    })
    
    tbody.selectAll('tr')
        .data(clean_json)
        .enter()
        .append('tr')
        .html(function(d) {
            var address = d.properties.attributes.address.split(', ')
            if (d.properties.attributes.address.includes('район')) {
                var street = address.slice(3,).join(' ').replace('вулиця ','')
            } else {
                var street = address.slice(2,).join(' ').replace('вулиця ','')
            }
            var punkt = address.filter(function(x) {
                if (x.includes('місто') || x.includes('село')|| x.includes('смт')) {
                    return x
                }
            })
            if (punkt.length > 0) {
                var punkt = punkt[0].replace('місто ','').replace('село ','').replace('смт. ','')
                return '<td>'+capitalizeFirstLetter(punkt)+'</td>'+'<td>'+street+'</td>'+'<td>'+d.properties.attributes.registryPhone+'</td>'+'<td>'+d.properties.entityName+'</td>'
            }
            
            
        })
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
var todayDateFormat = d3.timeFormat("%Y-%m-%d");

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
const range = (start, stop, step = 1) =>
        Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)
function makeDomain(min, max, step) {
    return range(min, max, max/step)
}
const reducer = (accumulator, currentValue) => accumulator + currentValue;
function getData(id){
    if (window.innerWidth > 600) {
        var requestURL = id
    } else {
        var requestURL = id.replace('https://health','https://m-health')
    }
    var time = d3.timeFormat("%H");
    var today = new Date()
    if (parseInt(time(today)) >= 0 && parseInt(time(today)) < 9 && id.includes('date')) {
        var yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1) 
        var value = $.ajax({ 
            url: requestURL+todayDateFormat(yesterday), 
            async: false
        }).responseJSON;
        return value;
    } else if (id.includes('date') && parseInt(time(today)) >= 9){
        var value = $.ajax({ 
            url: requestURL+todayDateFormat(today), 
            async: false
        }).responseJSON;
        return value;
    } else {
        var value = $.ajax({ 
            url: requestURL, 
            async: false
        }).responseJSON;
        return value;
    }   
}

var rnboLinks = {
    'reserves':'https://health-security.rnbo.gov.ua/api/vaccination/distribution//ranking?aggregateBy=regions&indicator=balance&warehouseLevel=local&vaccine=total&regionId=&communityId=&date=',
    'objects':'https://health-security.rnbo.gov.ua/api/vaccination/infra/stationary/map?aggregateBy=objects&regionId=&communityId=',
    'balance_objects':'https://health-security.rnbo.gov.ua/api/vaccination/distribution//map?aggregateBy=objects&indicator=balance&warehouseLevel=local&vaccine=total&date='
}
var todayDateFormat = d3.timeFormat("%Y-%m-%d");
var parseTodayDate = d3.timeParse("%Y-%m-%d");
var dayMonth = locale.format("%d %B")
var parseTime = d3.timeParse("%m/%d/%Y");

var today = new Date()

var ukraine = getData('https://cdn.jsdelivr.net/gh/liga-net/few-projects/local_elections/ukraine.json');
var reserves = getData(rnboLinks.reserves);
makeChoroplethMap('reserves',window.innerWidth)
function capitalizeFirstLetter(string) {
    var str = string.toLowerCase()
    return str.charAt(0).toUpperCase() + str.slice(1);
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
        
    if (id == 'reserves') {
        var json = []
        reserves.items.forEach(function(d,i) {
            json.push({
                'region':d.label,
                'value':d.daily[0]
            })
        })
    }     
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
                    '<h4>'+d.properties['name:ru']+'</h4><p>Временно оккупированная территория РФ</p>'
                )
            } else {
                var items = json.filter(k => k.region == d.properties.name)
                if (items.length != 0) {
                    var value = items[0].value
                    var html = '<h4>'+d.properties['name:ru']+'</h4><p>Осталось '+numberWithSpaces(value)+' вакцин</p>'
                } else {
                    var html = '<h4>'+d.properties['name:ru']+'</h4><p>Неизвестно</p>'
                }
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
                    return numberWithSpaces(value)
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
                    if (id == 'reserves'){
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
function createLegend(values){

    var height = 80
    var width = 200
    d3.select("#maps_legend").html('')
    var svg = d3.select("#maps_legend")
    .append("svg")
        .attr("width", width)
        .attr("height", height)

    var size = d3.scaleSqrt()
    .domain([1, d3.max(values.slice(0,values.length-3))])  
    .range([3, 15]) 

    var valuesToShow = [Math.round(d3.max(values)/10),d3.max(values)/2, d3.max(values)]
    var xCircle = 10
    var xLabel = 170
    var yCircle = 65
    svg
    .selectAll("legend")
    .data(valuesToShow)
    .enter()
    .append("circle")
        .attr("cx", function(d,i) {return (xCircle+20) * (i+1)})
        .attr("cy", function(d){ return yCircle - size(d) } )
        .attr("r", function(d){ return size(d) })
        .style("fill", "#a5d6a7")
        .attr("stroke", "#4caf50")

    svg
    .selectAll("legend")
    .data(valuesToShow)
    .enter()
    .append("text")
        .attr('x', function(d,i) {return (xCircle+20) * (i+.7)})
        .attr('y', 75)
        .text( function(d){ return d } )
        .attr("font-size", '10px')
        .attr('alignment-baseline', 'middle')
}
function makeRegionMap(w) {
    var width = 290,
        scale = 6000,
        height = 250;
    
    var oblasts = ['Дніпропетровська область', 'Вінницька область', 'Харківська область', 'Кіровоградська область', 'Сумська область', 'Рівненська область', 'Запорізька область', 'Київська область', 'Черкаська область', 'Чернігівська область', 'Львівська область', 'Донецька область','Житомирська область', 'Миколаївська область', 'Полтавська область', 'Херсонська область', 'Волинська область', 'Тернопільська область', 'Хмельницька область', 'Закарпатська область', 'Івано-Франківська область', 'Одеська область', 'Чернівецька область', 'Луганська область']
    
    var objects = getData(rnboLinks.objects);
    makeTable(objects)
    var balance_objects = getData(rnboLinks.balance_objects);
    
    var balance_objects_unique = balance_objects.filter((arr, index, self) =>
            index === self.findIndex((t) => (t.properties.koatuu === arr.properties.koatuu)))
    var values = []
    balance_objects_unique.forEach(function(d) {
        var vaccines = balance_objects.filter(k => k.properties.koatuu == d.properties.koatuu)
        values.push(vaccines.map(x => x.properties.daily.total.cumulative).reduce(reducer))
    })
    createLegend(values)
    var radiusSize = d3.scaleLinear()
        .domain([d3.min(values), d3.max(values)])
        .range([3,60])     

    oblasts.forEach(function(region,id) {
    d3.select("#objects"+id).html('')
    
    var svg = d3.select("#objects"+id).append("svg")
        .attr("width", width)
        .attr("height", height);

    svg.append("text")
        .attr("x", 0) 
        .attr("y", 15)
        .attr("text-anchor", "start")  
        .style("font-size", '15px')
        .style("font-family", "sans-serif")
        .style('font-family','Circe')
        .text(region.replace("область",''));

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
    
    
    // Create a unit projection.
    var projection = d3.geoAlbers()
        .rotate([-31.68,0])
        .scale(1)
        .translate([0, 0]);

    // Create a path generator.
    var geoPath = d3.geoPath()
        .projection(projection);
    
    var oblast = ukraine.features.filter(d => d.properties.name == region)
    
    var b = geoPath.bounds(oblast[0]),
        s = .88 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height),
        t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];
    
    projection
        .scale(s)
        .translate(t);
    
    g.selectAll("path")
        .data(oblast)
        .enter()
        .append("path")
        .attr("fill", '#f5f5f5')
        .attr("stroke", "#e0e0e0")
        .attr("stroke-width", "1px")
        .attr("d", geoPath)
    
    var json = objects.filter(d => d.properties.regionName == region)
    
    var text_json = json.filter((arr, index, self) =>
        index === self.findIndex((t) => (t.properties.communityName === arr.properties.communityName)))
    

    function getStreet(address) {
        if (address.includes('район')) {
            var street = address.slice(3,).join(' ').replace('вулиця ','')
        } else {
            var street = address.slice(2,).join(' ').replace('вулиця ','')
        }
        return street
    }
    function getVaccines(koatuu){
        var vaccines_koatuu = balance_objects.filter(k => k.properties.koatuu == koatuu)
        var vaccines = vaccines_koatuu.map(x => x.properties.daily.total.cumulative)
        if (vaccines.length>0){
            vaccines = vaccines.reduce(reducer)
        }
        return numberWithSpaces(vaccines)
    }
    function arrangeLabels() {
        var move = .5;
        while(move > 0) {
            move = 0;
            svg.selectAll(".place-label")
            .each(function() {
                var that = this,
                    a = this.getBoundingClientRect();
                svg.selectAll(".place-label")
                    .each(function() {
                    if(this != that) {
                        var b = this.getBoundingClientRect();
                        if((Math.abs(a.left - b.left) * 3 < (a.width + b.width)) &&
                        (Math.abs(a.top - b.top) * 3 < (a.height + b.height))) {
                        // overlap, move labels
                        var dx = (Math.max(0, a.right - b.left) +
                                Math.min(0, a.left - b.right)) * 0.01,
                            dy = (Math.max(0, a.bottom - b.top) +
                                Math.min(0, a.top - b.bottom)) * 0.02,
                            tt = d3.select(this).attr("transform").replace('translate(','').replace(')','').split(',')
                            to = d3.select(that).attr("transform").replace('translate(','').replace(')','').split(',')
                        move += Math.abs(dx) + Math.abs(dy);
                        var to = to.map(x => parseFloat(x))
                        var tt = tt.map(x => parseFloat(x))
                        
                        to = [ to[0] + dx, to[1] + dy ];
                        tt = [ tt[0] - dx, tt[1] - dy ];
                        d3.select(this).attr("transform", "translate(" + tt + ")");
                        d3.select(that).attr("transform", "translate(" + to + ")");
                        a = this.getBoundingClientRect();
                        }
                    }
                    });
            });
        }
    }
    var cities_mer = svg.append("g");  
    cities_mer.selectAll("circle")
        .data(text_json)
        .enter()
        .append("circle")
        .attr("stroke", "#4caf50")
        .attr("stroke-width", ".5px")
        .attr("fill", '#a5d6a7')
        .attr("r",function(d) {
            var koatuu = d.properties.koatuu
            //var koatuu = d.properties.koatuu
            var vaccines = balance_objects.filter(k => k.properties.koatuu == koatuu)
            if (vaccines.length > 0) {
                var vaccines = vaccines.map(x => x.properties.daily.total.cumulative).reduce(reducer)
                return radiusSize(vaccines)
            } 
        })
        .attr("transform", function(d) {return "translate(" + geoPath.centroid(d) + ")"; })
        .attr("class", "dot")
        .on("mouseover", function(d) {
            var koatuu = d.properties.koatuu
            var hromada = json.filter(x => x.properties.koatuu == koatuu)
            var street = getStreet(d.properties.attributes.address.split(', '))
            var vaccines = getVaccines(koatuu)
            
            var html = '<h3>'+d.properties.communityName+': <span style="font-weight: normal">'+vaccines+' вакцин</span></h3></p><h4>По лікарнях:</h4>'
            
            var text_hromada = hromada.filter((arr, index, self) =>
                    index === self.findIndex((t) => (t.properties.entityName === arr.properties.entityName)))
            var vaccines_per_hospital = balance_objects.filter(k => k.properties.koatuu == koatuu)
            
            text_hromada.forEach(function(value){
                vacc = vaccines_per_hospital.filter(v => v.properties.name == value.properties.entityName)
                if (vacc.length > 0) {
                    html += '<p>'+value.properties.entityName+': <b>'+numberWithSpaces(vacc[0].properties.daily.total.cumulative)+' вакцин</b></p>'
                }
            })
            tooltipBee.html(html) 
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
        
    var text = cities_mer.selectAll("text")
        .data(text_json)
        .enter()
        .append("svg:text")
        .html(function(d,i) {
            if (d.properties.attributes.address.includes('місто')) {
                var address = d.properties.attributes.address.split(', ')
                var punkt = address.filter(function(x) {
                    if (x.includes('місто')) {
                        return x
                    }
                })
                var vaccines_per_hospital = balance_objects.filter(k => k.properties.koatuu == d.properties.koatuu)
                
                var hospitals = 0
                if (vaccines_per_hospital.length > 0) {
                    var hospitals = balance_objects.filter(k => k.properties.regionId == vaccines_per_hospital[0].properties.regionId)                    
                    var unique_koatuu = hospitals.filter((arr, index, self) =>
                        index === self.findIndex((t) => (t.properties.koatuu === arr.properties.koatuu)))
                    var unique_koatuu = unique_koatuu.map(k => k.properties.koatuu)
                    var koatuu_vaccines = []
                    unique_koatuu.forEach(function(value) {
                        var vaccines = balance_objects.filter(k => k.properties.koatuu == value)
                        if (vaccines.length > 0) {
                            var vaccines = vaccines.map(x => x.properties.daily.total.cumulative).reduce(reducer)
                            koatuu_vaccines.push({'value':vaccines,'koatuu':value})
                        }
                    })
                    var koatuu_vaccines = koatuu_vaccines.sort(function(a, b){
                        return b.value - a.value;
                    })
                    var koatuu_vaccines = koatuu_vaccines.slice(0,3)
                    var koatuu_vaccines = koatuu_vaccines.filter(x => x.koatuu == d.properties.koatuu)
                    if (koatuu_vaccines.length >0) {
                        return capitalizeFirstLetter(punkt[0].replace('місто ',''))
                    }
                    
                } 
                
            }
        })
        .attr("transform", function(d) {return "translate(" + geoPath.centroid(d) + ")"; })
        .attr("text-anchor","start")
        .attr('font-family','Arial')
        .attr('font-weight','bold')
        .attr('fill','black')
        .attr('class','place-label')
        .attr('opacity','.9')
        .attr("font-size",'12px');
        arrangeLabels()
    })
}

makeRegionMap(window.innerWidth)
$("#vacc_search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#tbody_search tr").filter(function() { 
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});
window.onresize = function(event) {
    makeChoroplethMap('reserves',window.innerWidth)
    makeRegionMap(window.innerWidth)
}; 