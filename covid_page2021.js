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
    
    if (parseInt(time(today)) >= 0 && parseInt(time(today)) < 9 && id.includes('date') && id.includes('api/beds/') == false) {
        var yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1) 
        var value = $.ajax({ 
            url: requestURL+todayDateFormat(yesterday), 
            async: false
        }).responseJSON;
        return value;
    } else if (id.includes('date') && id.includes('api/beds/') == true) {
        var yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1) 
        var value = $.ajax({ 
            url: requestURL+todayDateFormat(yesterday), 
            async: false
        }).responseJSON;
        return value;
    } else if (id.includes('date') && parseInt(time(today)) >= 9 && id.includes('api/beds/') == false){
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
function makeBarChart(id,w) {
            
        var formatMillisecond = locale.format(".%L"),
            formatSecond = locale.format(":%S"),
            formatMinute = locale.format("%I:%M"),
            formatHour = locale.format("%I %p"),
            formatDay = locale.format("%a %d"),
            formatWeek = locale.format("%d %b"),
            formatMonth = locale.format("%b %Y"),
            formatYear = locale.format("%Y");

        function multiFormat(date) {
            return (d3.timeSecond(date) < date ? formatMillisecond
                : d3.timeMinute(date) < date ? formatSecond
                : d3.timeHour(date) < date ? formatMinute
                : d3.timeDay(date) < date ? formatHour
                : d3.timeMonth(date) < date ? (d3.timeWeek(date) < date ? formatDay : formatWeek)
                : d3.timeYear(date) < date ? formatMonth
                : formatYear)(date);
        }
        
        if (id == 'confirmed') {
            var x_date = covid_timeline.dates.map(d => parseTodayDate(d))
            var json = makeDailyStatistics(id)
            var plusMax = 1000
            var color = '#e57373'
            var tooltipText = ' заболевших за сутки</p>'
            var importedTickValues = x_date.filter(function(d,i) {if (i%50 == 0) {return d}})
        } else if (id=='deaths'){
            var json = makeDailyStatistics(id)
            var x_date = covid_timeline.dates.map(d => parseTodayDate(d))
            var plusMax = 100
            var color = '#455a64'
            var tooltipText = ' погибших за сутки</p>'
            var importedTickValues = x_date.filter(function(d,i) {if (i%50 == 0) {return d}})
        } else if (id=='hosp'){
            var json = hosp_timeline.count.i1
            var x_date = hosp_timeline.dates.map(d => parseTodayDate(d))
            var plusMax = 2000
            var color = '#d32f2f'
            var tooltipText = ' госпитализаций за сутки</p>'
            var importedTickValues = x_date.filter(function(d,i) {if (i%20 == 0) {return d}})
        } else if (id=='discharged'){
            var json = hosp_timeline.count.i2
            var x_date = hosp_timeline.dates.map(d => parseTodayDate(d))
            var plusMax = 2000
            var color = '#43a047'
            var tooltipText = ' выписок за сутки</p>'
            var importedTickValues = x_date.filter(function(d,i) {if (i%20 ==0 ) {return d}})
        }
        if (w < 600) {
            var start_width = w-10,
            start_height = w/1.5;
        } else {
            var start_width = 600,
            start_height = 400;
        }  
        var margin = {top: 10, right: 15, bottom: 40, left: 35},
            width = start_width - margin.left - margin.right,
            height = start_height - margin.top - margin.bottom;

        // append the svg object to the body of the page
        d3.select("#"+id+"_chart").html('')
        var svg = d3.select("#"+id+"_chart")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

        var x = d3.scaleBand()
            .range([ 0, width ])
            .domain(x_date)
            .padding(0.2);
        svg.append("g")
            .attr("transform", "translate(0," + (height) + ")")
            .call(d3.axisBottom(x).tickValues(importedTickValues)
            .tickFormat(locale.format("%d %b")))
            .selectAll("text")
        
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
        var y = d3.scaleLinear()
            .domain([0, d3.max(json)+plusMax])
            .range([ height, 0]);
        
       
        function make_y_gridlines() {		
            return d3.axisLeft(y)
                .ticks(5)
        }
        svg.append("g")
            .attr('class','grid')
            .call(make_y_gridlines()
                .tickSize(-width)
                .ticks(5)
            )
        svg.selectAll('.grid line')
            .style('stroke','#eeeeee')
            .style('stroke-opacity','1')
            .style('shape-rendering','crispEdges')
        svg.selectAll('.domain')
            .style('opacity','0')
        
        
        var annotations = [{
            note: {
                title: json[json.length-1]
            },
            color: 'black',
            x: width+29, y: y(json[json.length-1]),
            dy: -100,
            dx: 0,
        }]
        const makeAnnotations = d3.annotation()
            .editMode(false)
            .notePadding(5)
            .type(d3.annotationLabel)
            .annotations(annotations)

        d3.select("#"+id+"_chart svg")
            .append("g")
            .style('font-size','14px')
            .style('font-family','sans-serif')
            .call(makeAnnotations)
        //}
        svg.selectAll("mybar")
        .data(json)
        .enter()
        .append("rect")
            .attr("x", function(d,i) { return x(x_date[i]); })
            .attr("y", function(d,i) { return y(json[i]); })
            .attr("width", x.bandwidth())
            .attr("height", function(d,i) { return height - y(json[i]); })
            .attr('class','every_day')
            .attr("fill", color)
            .on("mouseover", function(d,i) {
                tooltipBee.html('<p>'+dayMonth(x_date[i])+':</p><p>'+numberWithSpaces(d)+tooltipText)
                tooltipBee.style("visibility", "visible")
            })
            .on("mousemove", function() {
                return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
            })
            .on("mouseout", function(d){
                return tooltipBee.style("visibility", "hidden");
            })

    }
function makeChoroplethMap(id,w,red_zones_data) {
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
        if (id != 'red_zones') {
            if (id == 'region_beds') {
                var json = []
                red_zones_data.data.forEach(function(d,i) {
                    json.push({
                        'region':d.region,
                        'used_perc':d.used_perc,
                        'value':d.used,
                        'week':d.used_weekly_growth
                    })
                })
                var colorPositivity = 'red'
            } else if (id == 'region_hosp') {
                var json = []
                red_zones_data.forEach(function(d,i) {
                    json.push({
                        'region':d.properties.name,
                        'perc':d.properties.i1_growth_perc,
                        'value':d.properties.i1
                    })
                })
                var colorPositivity = 'red'
                var tooltip_text = ' госпитализировано ('
            } else if (id == 'region_discharged') {
                var json = []
                red_zones_data.forEach(function(d,i) {
                    json.push({
                        'region':d.properties.name,
                        'perc':d.properties.i2_growth_perc,
                        'value':d.properties.i2
                    })
                })
                var tooltip_text = ' выписано ('
                var colorPositivity = 'green'
            } 
            function makeColorRange() {
                return json.map(d => parseInt(d.value))
            }
            var vax_values = makeColorRange()
            if (colorPositivity == 'red') {
                var colorRange = ["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"]
                var textRange = ["#67000d","#fb6a4a","#fff5f0"]
            } else if (colorPositivity == 'green') {
                var colorRange = ["rgb(247,252,253)","rgb(229,245,249)","rgb(204,236,230)","rgb(153,216,201)","rgb(102,194,164)","rgb(65,174,118)","rgb(35,139,69)","rgb(0,109,44)","rgb(0,68,27)"]
                var textRange = ["rgb(0,68,27)","rgb(0,109,44)","rgb(35,139,69)","rgb(65,174,118)","rgb(62,88,82)","rgb(153,216,201)","rgb(204,236,230)","rgb(229,245,249)","rgb(247,252,253)"]
            }
            var color = d3.scaleThreshold()
                .domain(
                    makeDomain(d3.min(vax_values),d3.max(vax_values),8)
                )
                .range(colorRange);
        
            var colorText = d3.scaleThreshold()
                .domain(
                    makeDomain(d3.min(vax_values),d3.max(vax_values),8)
                )
                .range(textRange)
        }  else {
            var json = red_zones_data
        }
        g.selectAll("path")
            .data(ukraine.features)
            .enter()
            .append("path")
            .attr("fill", function(d) {
                if (id == 'red_zones') {
                    var value = json.filter(k => k['gsx$name']['$t'] == d.properties['name:ru'])[0]['gsx$redzonevalue']['$t']
                    if (value == 1) {
                        return '#4caf50'
                    } else if (value == 2) {
                        return '#fdd835'
                    } else if (value == 3) {
                        return '#fb8c00'
                    } else if (value == 4) {
                        return '#b71c1c'
                    } else {
                        return '#cecece'
                    }
                } else {//if (id == 'vaccinated') {
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
                }
                
            })
            .attr("stroke", "#f5f5f5")
            .attr("stroke-width", ".1px")
            .attr("d", geoPath )
            .attr("class", "district")
            .on("mouseover", function(d) {
                if (id == 'red_zones') {
                    var value = json.filter(k => k['gsx$name']['$t'] == d.properties['name:ru'])[0]['gsx$redzonevalue']['$t']
                    var value = parseInt(value)
                    if (value == 1) {
                        var zone = 'Зеленая зона'
                    } else if (value == 2) {
                        var zone = 'Желтая зона'
                    } else if (value == 3) {
                        var zone = 'Оранжевая зона'
                    } else if (value == 4) {
                        var zone = 'Красная зона'
                    } else {
                        var zone = 'Временно оккупированная территория РФ'
                    }
                    tooltipBee.html(
                        '<h4>'+d.properties['name:ru']+'</h4><p>'+zone+'</p>'
                    )
                } else if (id == 'region_beds'){
                    if (d.properties.name == 'Автономна Республіка Крим'){
                        tooltipBee.html(
                            '<h4>'+d.properties['name:ru']+'</h4><p>Временно оккупированная территория РФ</p>'
                        )
                    } else {
                        var items = json.filter(k => k.region == d.properties.name)
                        if (items.length != 0) {
                            var value = items[0].value
                            var html = '<h4>'+d.properties['name:ru']+'</h4>'+
                                '<p>Занято '+numberWithSpaces(value)+' коек ('+Math.round(items[0].used_perc)+'%)</p>'+
                                '<p>Прирост за неделю: '+numberWithSpaces(items[0].week)+' коек</p>'
                        } else {
                            var html = '<h4>'+d.properties['name:ru']+'</h4><p>Неизвестно</p>'
                        }
                        tooltipBee.html(html)
                    }   
                } else if (id == 'region_hosp' || id == 'region_discharged'){ 
                    if (d.properties.name == 'Автономна Республіка Крим'){
                        tooltipBee.html(
                            '<h4>'+d.properties['name:ru']+'</h4><p>Временно оккупированная территория РФ</p>'
                        )
                    } else {
                        var items = json.filter(k => k.region == d.properties.name)
                        if (items.length != 0) {
                            var value = items[0].value
                            var html = '<h4>'+d.properties['name:ru']+'</h4>'+
                                '<p>'+numberWithSpaces(value)+tooltip_text+Math.round(items[0].perc)+' по сравнению с сутками ранее)</p>'
                        } else {
                            var html = '<h4>'+d.properties['name:ru']+'</h4><p>Неизвестно</p>'
                        }
                        tooltipBee.html(html)
                    }   
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
                if (id == 'red_zones' && w > 400) {
                    var name = d.properties['name:ru'].replace(' область','').replace('Автономная Республика ','')
                    return name
                } else if (id == 'region_beds') {//if (id == 'vaccinated') {
                    if (d.properties.name != 'Автономна Республіка Крим'){
                        var items = json.filter(k => k.region == d.properties.name)
                        if (items.length != 0) {
                            var value = Math.round(items[0].used_perc)
                            return numberWithSpaces(value)+'%'
                        }
                    } 
                } else if (id == 'region_hosp' || id == 'region_discharged'){ 
                    if (d.properties.name != 'Автономна Республіка Крим'){
                        var items = json.filter(k => k.region == d.properties.name)
                        if (items.length != 0) {
                            var value = Math.round(items[0].value)
                            return numberWithSpaces(value)
                        }
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
                if (id == 'red_zones') {
                    return 'white'
                } else {//if (id == 'vaccinated') {
                    if (d.properties.name == 'Автономна Республіка Крим'){
                        return 'white'
                    } else {
                        var items = json.filter(k => k.region == d.properties.name)
                        if (items.length != 0) {
                            var value = items[0].value
                            return colorText(value)
                        }
                        
                    } 
                } 
                
            })
            .attr('opacity','.9')
            .attr("font-size",'10px')
            if (id != 'red_zones') {
                var kyiv = json.filter(d =>d.region == "м. Київ")
            } else {
                var kyiv = json.filter(k => k['gsx$nameuk']['$t'] == "м. Київ")//[0]['gsx$redzonevalue']['$t']
            }
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
                        if (id == 'red_zones') {
                            var value = kyiv[0]['gsx$redzonevalue']['$t']
                            if (value == 1) {
                                return '#4caf50'
                            } else if (value == 2) {
                                return '#fdd835'
                            } else if (value == 3) {
                                return '#fb8c00'
                            } else if (value == 4) {
                                return '#b71c1c'
                            } else {
                                return '#cecece'
                            }
                        } else {
                            return color(kyiv[0].value)
                        }
                    })
                    .attr("r",10)
                    .attr("transform", function(d) { 
                        return "translate(" + kyiv_trasforme + ")"; 
                    })
                    .attr("class", "dot")
                    .on("mouseover", function(d) {
                        if (id == 'region_beds') {
                            tooltipBee.html('<h4>Киев</h4><p>Занято '+numberWithSpaces(kyiv[0].value)+' коек</p>')
                        } else if (id == 'red_zones'){
                            var value = kyiv[0]['gsx$redzonevalue']['$t']
                            var value = parseInt(value)
                            if (value == 1) {
                                var zone = 'Зеленая зона'
                            } else if (value == 2) {
                                var zone = 'Желтая зона'
                            } else if (value == 3) {
                                var zone = 'Оранжевая зона'
                            } else if (value == 4) {
                                var zone = 'Красная зона'
                            } else {
                                var zone = 'Временно оккупированная территория РФ'
                            }
                            tooltipBee.html('<h4>Киев</h4><p> '+zone+'</p>')
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
                        if (id != 'red_zones') {
                            return numberWithSpaces(kyiv[0].value) 
                        } else {
                            return 'Киев'
                        }
                    })
                    .attr("x", kyiv_trasforme[0])
                    .attr("y", kyiv_trasforme[1]+5)
                    .attr("text-anchor","middle")
                    .attr('font-family','Arial')
                    .attr('fill','white')
                    .attr('opacity','.9')
                    .attr("font-size",'10px')
            //}
    }
function makeMultiLineChart(w,id) {
    if (w < 600) {
        var start_width = w-20,
        start_height = w/1.2;
    } else {
        var start_width = 600,
        start_height = 450;
    } 
    var margin = {top: 35, right: 20, bottom: 30, left: 35},
        width = start_width - margin.left - margin.right,
        height = start_height - margin.top - margin.bottom;
    if (width > 500) {
        var fontSize = '18px'
        var textX = width / 2
    } else {
        var fontSize = '11px'
        var textX = 140
    }

    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    d3.select("#"+id).html('')
    var svg = d3.select("#"+id).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");
    function median(values){
        if(values.length ===0) return 0;

        values.sort(function(a,b){
            return a-b;
        });

        var half = Math.floor(values.length / 2);

        if (values.length % 2)
            return values[half];

        return (values[half - 1] + values[half]) / 2.0;
    }
    Date.prototype.addDays = function(days) {
        var dat = new Date(this.valueOf())
        dat.setDate(dat.getDate() + days);
        return dat;
    }

    function getDates(startDate, stopDate) {
        var dateArray = new Array();
        var currentDate = startDate;
        while (currentDate <= stopDate) {
            dateArray.push(currentDate)
            currentDate = currentDate.addDays(1);
        }
        return dateArray;
        }

    var multiLineData = timeline_all.filter(d => d['gsx$covid']['$t'] != '')
    function createLines(first_line, second_line) {
        if (typeof(multiLineData[0]['gsx$date']['$t']) == 'string') {
            multiLineData.forEach(function(d) {
                d['gsx$date']['$t'] = parseTime(d['gsx$date']['$t']);
            }); 
        }
        if (id == 'temps50') {
            var AstraZeneca = timelineVaxData.daily.quantity.AstraZeneca
            var sinovac = timelineVaxData.daily.quantity['Sinovac (CoronaVac)']
            var pfizer = timelineVaxData.daily.quantity['Pfizer-BioNTech']
            var vax_temps = AstraZeneca.map(function(d,i) {
                return d + sinovac[i] + pfizer[i]
            })
            var vax_sum = vax_temps.reduce(reducer)
            var new_range1 = range(vax_sum, 20777418, median(vax_temps))
            var json = vax_temps.concat(new_range1)
            var new_range2 = range(vax_sum, 20777418, vax_temps[vax_temps.length-1])
            var json2 = vax_temps.concat(new_range2)
            var dateArray = getDates(new Date(), (new Date()).addDays(new_range1.length));
            var x_date =timelineVaxData.daily.dates.map(d => parseTodayDate(d))
            
            var x_date = x_date.concat(dateArray)
            var plusMax = 1000
            var color = '#43a047'
            var tooltipText = ' вакцинированных за сутки</p>'
            var title = ''
            var yDomain = d3.max(json)
            var xDomain = d3.extent(x_date)
            
            x.domain(xDomain);

            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x).ticks(6).tickFormat(locale.format("%b %Y")));

            y.domain([0,yDomain]);
            // Add the Y Axis
            /* svg.append("g")
                .call(d3.axisLeft(y)); */
            function make_y_gridlines() {		
                return d3.axisLeft(y)
                    .ticks(3)
            }
            svg.append("g")
                .attr('class','grid')
                .call(make_y_gridlines()
                        .tickSize(-width)
                        .ticks(5)
                )
            svg.selectAll('.grid line')
                .style('stroke','#eeeeee')
                .style('stroke-opacity','1')
                .style('shape-rendering','crispEdges')
            svg.selectAll('.domain')
                .style('opacity','0')
            // define the 2nd line
            var valueline = d3.line()
                .x(function(d,i) { 
                    return x(
                        x_date[i]
                    )
                })
                .y(function(d,i) { 
                    return y(d); 
                });
            // Add the valueline path.
            svg.append("path")
                .data([json])
                .attr("class", "line")
                .style("stroke", "#d32f2f")
                .style("fill", "none")
                .style("stroke-width", "3px")
                .attr("d", valueline);
            var valueline2 = d3.line()
                .x(function(d,i) { 
                    return x(
                        x_date[i]
                    )
                })
                .y(function(d,i) { 
                    return y(d); 
                });

            svg.append("path")
                .data([json2])
                .attr("class", "line")
                .style("fill", "none")
                .style("stroke-width", "3px")
                .style("stroke", "#8FC0D2")
                .attr("d", valueline2);
            createLastNumber('json',json,x_date)
            createLastNumber('json2',json2,x_date)
        } else {
            var xDomain = d3.extent(multiLineData, function(d) { return d['gsx$date']['$t']; })
            
            var yDomain = d3.max(multiLineData, function(d) {
                        return Math.max(d['gsx$'+first_line]['$t'], d['gsx$'+second_line]['$t']); })
            
            x.domain(xDomain);

            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x).ticks(6).tickFormat(locale.format("%b %Y")));

            y.domain([0,yDomain]);
            // Add the Y Axis
                function make_y_gridlines() {		
                    return d3.axisLeft(y)
                        .ticks(5)
                }
                svg.append("g")
                    .attr('class','grid')
                    .call(make_y_gridlines()
                        .tickSize(-width)
                        .ticks(5)
                    )
                svg.selectAll('.grid line')
                    .style('stroke','#eeeeee')
                    .style('stroke-opacity','1')
                    .style('shape-rendering','crispEdges')
                
                svg.selectAll('.domain')
                    .style('opacity','0')
            // define the 1st line
            var valueline2 = d3.line()
                .x(function(d) { 
                    return x(d['gsx$date']['$t']); 
                })
                .y(function(d) { return y(d['gsx$'+first_line]['$t']); });

            // define the 2nd line
            var valueline = d3.line()
                .x(function(d) { return x(d['gsx$date']['$t']); })
                .y(function(d) { return y(d['gsx$'+second_line]['$t']); });

            svg.append("path")
                .data([multiLineData])
                .attr("class", "line")
                .style("fill", "none")
                .style("stroke-width", "3px")
                .style("stroke", "#8FC0D2")
                .attr("d", valueline2);
            // Add the valueline path.
            svg.append("path")
                .data([multiLineData])
                .attr("class", "line")
                .style("stroke", "#d32f2f")
                .style("fill", "none")
                .style("stroke-width", "3px")
                .attr("d", valueline);
            if (id=='lizh') {
                createLastNumber(second_line)
                createLastNumber(first_line)
            } 
        }
    }
    function createLastNumber(last_name,json,x_date) {
        if (last_name == 'json') {
            var cx = x_date[x_date.length-1]
            var minus = 30
            var cy = json[json.length-1]
            var returnText = cx.getDate()+'.'+(parseInt(cx.getMonth())+1)+'.'+cx.getFullYear()
            
        } else if (last_name == 'json2') {
            var cx = x_date[json.length-1]
            var minus = 0
            var cy = json[json.length-1]
            var returnDate = x_date[json.length]
            var returnText = returnDate.getDate()+'.'+(parseInt(returnDate.getMonth())+1)+'.'+returnDate.getFullYear()
            
        } else {
            var minus = 0
            var cx = multiLineData[multiLineData.length-1]['gsx$date']['$t']
            var cy = multiLineData[multiLineData.length-1]['gsx$'+last_name]['$t']
            var returnText = cy
        }
        
        svg.append('circle')
            .datum(multiLineData)
            .attr('r', 6.5)
            .attr('fill',color(last_name))
            .attr('cx',function(d) {return x(cx)})
            .attr("cy", function(d) { return y(cy); });
        svg.append('text')
            .datum(multiLineData)
            .attr('fill','#')
            .style('font-size','14px')
            .style("font-family", "sans-serif")
            .attr('x',function(d) {return x(cx) -25-minus })
            .attr("y", function(d) { return y(cy) - 15; })
            .text(returnText);
    }
    if (id == 'lizh') {
        var subgroups = ['Занято COVID',"Выведелено под COVID"]
        var color = d3.scaleOrdinal()
            .domain(subgroups)
            .range(['#d32f2f','#8FC0D2'])
        
        createLines('covid','busycovid')
        var minusLegendRect = 120
        var minusLegendText = minusLegendRect-15
    } else {
        var AstraZeneca = timelineVaxData.daily.quantity.AstraZeneca
        var sinovac = timelineVaxData.daily.quantity['Sinovac (CoronaVac)']
        var pfizer = timelineVaxData.daily.quantity['Pfizer-BioNTech']
        var vax_temps = AstraZeneca.map(function(d,i) {
            return d + sinovac[i] + pfizer[i]
        })
        var value1 = 'Медианный темп ('+numberWithSpaces(median(vax_temps))+' человек в день)'
        var value2 = 'Темп как сегодня ('+numberWithSpaces(vax_temps[vax_temps.length-1])+' человек в день)'
        var minusLegendRect = 200
        var minusLegendText = minusLegendRect-15
        var subgroups = [value1,value2]
        var color = d3.scaleOrdinal()
            .domain(subgroups)
            .range(['#d32f2f','#8FC0D2'])
        
        createLines('covid','busycovid')
    }
    
    var legend = svg.append("g")
        .attr("font-family", "Georgia")
        .attr("font-size", 10)
        .selectAll("g")
        .data(subgroups)
        .enter().append("g")
        .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

    legend.append("rect")
        .attr("x", width-minusLegendRect)
        .attr("y", height-37)
        .attr("width", 12)
        .attr("height", 12)
        .attr("fill", color);

    legend.append("text")
        .attr("x", width-minusLegendText)
        .attr("y", height-31)
        .attr("dy", "0.32em")
        .text(function(d) { return d; });
    

}
function makeColumnChart(id, w) { 
    if (w < 600) {
        var start_width = w
    } else {
        var start_width = 600
    } 

    d3.select("#"+id).html('')
    if (id == 'vax_age') {
        var groupsLoop = ["18_20","20_39","40_49","50_59","60_69","70_79","80_"]
        var json = groupsLoop.map(d => vax_age.daily.cumulative[d].slice(-1)[0])
        var date = ["18-20","20-39","40-49","50-59","60-69","70-79","80+"]
        var tooltipHtml = '<p>В возрасте '
        var left = 50
        var id_height = 450
    } else if (id =='vax_group') {
        var groupsLoop = ['medic','military','centenarians','social','education','celebrities','security','other']
        var json = groupsLoop.map(d => vax_group.daily.cumulative[d].slice(-1)[0])
        var date = ["Медики","Военные","80+","Соц. работники","Образование","Знаменитости","Госбезопасность","Другие"]
        var tooltipHtml = '<p>В группе '
        var left = 120
        var id_height = 450
    } else if (id =='vax_name') {
        var sorted_data = []
        var cumulative = timelineVaxData.daily.cumulative
        var date = Object.keys(cumulative)
        date.forEach(function(d,i) {
            sorted_data.push({
                'vax':d,
                'value':timelineVaxData.daily.cumulative[d].slice(-1)[0]
            })
        })
        sorted_data = sorted_data.sort(function(a, b){
            return b.value - a.value;
        })
        var date = sorted_data.map(d => d.vax)
        var json = date.map(d => timelineVaxData.daily.cumulative[d].slice(-1)[0])
        var tooltipHtml = '<p>Вакциной '
        var left = 120
        var id_height = 100*date.length
    }
    var margin = {top: 10, right: 15, bottom: 70, left: left},
        width = start_width - margin.left - margin.right,
        height = id_height - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#"+id)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
    
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
        .attr("fill", "#45ad50")
        .on("mouseover", function(d,i) {
            var total = json.reduce(reducer)
            var percent = Math.round(d/total*100)
            tooltipBee.html(tooltipHtml+date[i]+' привито '+numberWithSpaces(d)+' человек ('+String(percent)+'% от всех)')
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
            return numberWithSpaces(d)
        })
        .attr("y", function(d,i) { return y(date[i])+27; })
        .attr("x", function(d,i) { 
            if (x(json[i]) < 55) {
                return x(json[i])+26; 
            } else{ 
                return x(json[i])-30; 
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
function makeNegaviveBarChart(w,id,oblast) { 
    
    var region = timeline_all.filter(d => d['gsx$name']['$t'] == oblast)[0]
    var death_keys = Object.keys(region).filter(d => d.includes('death'))
    
    var x_date = death_keys.map(d => d.replace('gsx$extra','').replace('death','/01/'))
    var x_date = x_date.map(d => parseTime(d))
    var values = death_keys.map(d => parseFloat(region[d]['$t']))
    var importedTickValues = x_date.filter(function(d,i) {if (i%3 == 1) {return d}})
    
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
    var margin = {top: 30, right: 10, bottom: 15, left: 15},
        width = w - margin.left - margin.right,
        height = 190 - margin.top - margin.bottom;
    d3.select("#"+id).html('')
    var svg = d3.select("#"+id).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
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
    svg.append("text")
        .attr("x", 40) 
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", '11px')
        .style("font-family", "Georgia")
        .text(oblast.replace(' область',''));
    
    
    var color = d3.scaleThreshold()
        .domain(
            makeDomain(d3.min(values),d3.max(values),8)
        )
        .range(["#1a9850","#66bd63","#a6d96a","#d9ef8b","#ffffbf","#fee08b","#fdae61","#f46d43","#d73027"])
    
    var y = d3.scaleLinear()
        .domain([d3.min(values)-2, d3.max(values)+2])
        .range([ height, 0]);
    /* svg.append("g")
        .style('opacity','.5')
        .call(d3.axisLeft(y).ticks(5)) */
        function make_y_gridlines() {		
            return d3.axisLeft(y)
                .ticks(3)
        }
        svg.append("g")
            .attr('class','grid')
            .call(make_y_gridlines()
                    .tickSize(-width)
                    .ticks(5)
            )
        svg.selectAll('.grid line')
            .style('stroke','#eeeeee')
            .style('stroke-opacity','1')
            .style('shape-rendering','crispEdges')
    var x = d3.scaleBand()
        .range([ 0, width ])
        .domain(x_date)
        .padding(0.2);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .style('opacity','.5')
        .call(d3.axisBottom(x).tickValues(importedTickValues).tickSize(1)
        .tickFormat(locale.format("%b")))
        .selectAll("text")
    svg.selectAll('.domain')
        .style('opacity','0')
        
    svg.selectAll(".bar")
        .data(values)
    .enter().append("rect")
        .attr("class", function(d) { return d < 0 ? "bar negative" : "bar positive"; })
        .attr("y", function(d) { return y(Math.max(0, d)); })
        .attr("x", function(d, i) { return x(x_date[i]); })
        .attr("height", function(d) { return Math.abs(y(d) - y(0)); })
        .attr('fill',color)
        .attr("width", x.bandwidth())
        .on("mouseover", function(d,i) {
            tooltipBee.html('<p><b>'+oblast+'</b>, '+dayMonth(x_date[i])+':</p><p>Избыточная смертность: <b>'+d+'%</b></p>')
            tooltipBee.style("visibility", "visible")
        })
        .on("mousemove", function() {
            return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
        })
        .on("mouseout", function(d){
            return tooltipBee.style("visibility", "hidden");
        });

    svg.append("g")
        .attr("class", "y axis")
    .append("line")
        .attr("y1", y(0))
        .attr("y2", y(0))
        .attr("x1", 0)
        .attr("x2", width);

}
var rnboLinks = {
    'covid_timeline':"https://api-covid19.rnbo.gov.ua/charts/main-data?mode=ukraine",
    'hosp_timeline':'https://health-security.rnbo.gov.ua/api/beds/hospitalization/chart?bedType=hospitalized',
    'beds': 'https://health-security.rnbo.gov.ua/api/beds/covid/table?bedType=total&aggLevel=regions&regionId=&hospitalType=base&otgId=&perPage=50&page=1&orderBy=used_perc&orderDir=desc&date=',
    'region_hosp':'https://health-security.rnbo.gov.ua/api/beds/hospitalization/map?aggLevel=regions&bedType=hospitalized&hospitalType=base&date='
}
var todayDateFormat = d3.timeFormat("%Y-%m-%d");
var parseTodayDate = d3.timeParse("%Y-%m-%d");
var dayMonth = locale.format("%d %B")
var parseTime = d3.timeParse("%m/%d/%Y");


function makeDailyStatistics(column) {
    var days = []
    covid_timeline[column].map(function(d,i) {
        if (i < covid_timeline[column].length-1) {
            days.push(covid_timeline[column][i+1]-covid_timeline[column][i])
        }
    })
    return days
}
function addDashboard(id) {
    var value = numberWithSpaces(myDashboard[id])
    d3.select('#page_'+id).text(value)
}
var today = new Date()

var covid_timeline = getData(rnboLinks.covid_timeline);
var hosp_timeline = getData(rnboLinks.hosp_timeline);
var beds = getData(rnboLinks.beds);
var region_hosp = getData(rnboLinks.region_hosp);

//var ukraine = getData('https://cdn.jsdelivr.net/gh/liga-net/few-projects/local_elections/ukraine.json');
var ukraine = getData('ukraine.json');
if (covid_timeline.confirmed.slice(-1)[0] - covid_timeline.confirmed.slice(-2)[0] == 0) {
    var requestURL = 'https://api-covid19.rnbo.gov.ua/data?to='
    var yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    var requestURL = requestURL+todayDateFormat(yesterday)
    var new_data = $.ajax({ 
        url: requestURL, 
        async: false
    }).responseJSON;
    var regions_data = new_data.ukraine
    var confirmed_sum = regions_data.map(d=>d.delta_confirmed).reduce(reducer)
    var deaths_sum = regions_data.map(d=>d.delta_deaths).reduce(reducer)
    var myDashboard = {
        "date":dayMonth(yesterday),
        "allill":covid_timeline.confirmed.slice(-1)[0],
        "illtoday":confirmed_sum,
        "alldied":covid_timeline.deaths.slice(-1)[0],
        "diedtoday":deaths_sum,
        "hosp":hosp_timeline.count.i1.slice(-1)[0]
    }
} else {
    var myDashboard = {
        "date":dayMonth(new Date()),
        "allill":covid_timeline.confirmed.slice(-1)[0],
        "illtoday":covid_timeline.confirmed.slice(-1)[0]-covid_timeline.confirmed.slice(-2)[0],
        "alldied":covid_timeline.deaths.slice(-1)[0],
        "diedtoday":covid_timeline.deaths.slice(-1)[0]-covid_timeline.deaths.slice(-2)[0],
        "hosp":hosp_timeline.count.i1.slice(-1)[0]
    }
}
var table_ids = ["date","allill","illtoday","alldied","diedtoday","hosp"]

table_ids.forEach(function(i) {
    addDashboard(i)
})

makeBarChart('confirmed',window.innerWidth) 
makeBarChart('deaths',window.innerWidth)
makeBarChart('hosp',window.innerWidth)
makeBarChart('discharged',window.innerWidth)
makeChoroplethMap('region_beds',window.innerWidth,beds)
makeChoroplethMap('region_hosp',window.innerWidth,region_hosp)
makeChoroplethMap('region_discharged',window.innerWidth,region_hosp)
window.onresize = function(event) {
    makeBarChart('confirmed',window.innerWidth) 
    makeBarChart('deaths',window.innerWidth)
    makeBarChart('hosp',window.innerWidth)
    makeBarChart('discharged',window.innerWidth)
    makeChoroplethMap('region_beds',window.innerWidth,beds)
    
}; 