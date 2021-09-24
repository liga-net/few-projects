const range = (start, stop, step = 1) =>
            Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)
        function makeDomain(min, max, step) {
            return range(min, max, max/step)
        }
        
        function numberWithSpaces(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }
        var bad_days = [{'type': 'Feature',
  'geometry': {'type': 'Point', 'coordinates': [34.632371, 50.94004]},
  'name': 'Амбулаторія ЗПСМ смт. Степанівка',
  'region': 'Сумська область',
  'days': 124,
  'balance': 914},
 {'type': 'Feature',
  'geometry': {'type': 'Point', 'coordinates': [30.012383, 49.982572]},
  'name': 'Ковалівський ЦПМСД',
  'region': 'Київська область',
  'days': 146,
  'balance': 300},
 {'type': 'Feature',
  'geometry': {'type': 'Point', 'coordinates': [25.047157, 48.127548]},
  'name': 'Мариничівська амбулаторія ЗПСМ',
  'region': 'Чернівецька область',
  'days': 134,
  'balance': 298},
 {'type': 'Feature',
  'geometry': {'type': 'Point', 'coordinates': [35.243025, 47.783627]},
  'name': 'Запорізька обласна лікарня',
  'region': 'Запорізька область',
  'days': 160,
  'balance': 589},
 {'type': 'Feature',
  'geometry': {'type': 'Point', 'coordinates': [31.62869, 47.1391]},
  'name': 'Амбулаторія групової практики Михайлівської сільради ',
  'region': 'Миколаївська область',
  'days': 153,
  'balance': 1002},
 {'type': 'Feature',
  'geometry': {'type': 'Point', 'coordinates': [23.236281, 49.501973]},
  'name': 'Самбірський районний ЦПМСД',
  'region': 'Львівська область',
  'days': 111,
  'balance': 762},
 {'type': 'Feature',
  'geometry': {'type': 'Point', 'coordinates': [25.190046, 47.875799]},
  'name': 'Селятинська амбулаторія ЗПСМ',
  'region': 'Чернівецька область',
  'days': 138,
  'balance': 302},
 {'type': 'Feature',
  'geometry': {'type': 'Point', 'coordinates': [30.935808, 50.724907]},
  'name': 'Калитянський ЦПМСД',
  'region': 'Київська область',
  'days': 170,
  'balance': 572},
 {'type': 'Feature',
  'geometry': {'type': 'Point', 'coordinates': [38.099082, 48.676518]},
  'name': 'ЦПМСД Соледарської міськради',
  'region': 'Донецька область',
  'days': 110,
  'balance': 4135},
 {'type': 'Feature',
  'geometry': {'type': 'Point', 'coordinates': [33.781636, 46.678251]},
  'name': 'Амбулаторія ЗПСМ Зеленопідьської сільради',
  'region': 'Херсонська область',
  'days': 152,
  'balance': 485},
 {'type': 'Feature',
  'geometry': {'type': 'Point', 'coordinates': [22.996853, 49.07663]},
  'name': 'Боринська районна лікарня',
  'region': 'Львівська область',
  'days': 132,
  'balance': 220},
 {'type': 'Feature',
  'geometry': {'type': 'Point', 'coordinates': [31.318741, 51.513091]},
  'name': 'Чернігівська дитяча поліклініка №2 ',
  'region': 'Чернігівська область',
  'days': 167,
  'balance': 620},
 {'type': 'Feature',
  'geometry': {'type': 'Point', 'coordinates': [23.127911, 49.615985]},
  'name': 'Воле-Баранецька амбулаторія ЗПСМ',
  'region': 'Львівська область',
  'days': 117,
  'balance': 50},
 {'type': 'Feature',
  'geometry': {'type': 'Point', 'coordinates': [27.131835, 51.613954]},
  'name': 'Старосільський ЦПМД',
  'region': 'Рівненська область',
  'days': 117,
  'balance': 610},
 {'type': 'Feature',
  'geometry': {'type': 'Point', 'coordinates': [26.63776, 49.51686]},
  'name': 'ЦПМСД Наркевицької селищної ради',
  'region': 'Хмельницька область',
  'days': 162,
  'balance': 1400},
 {'type': 'Feature',
  'geometry': {'type': 'Point', 'coordinates': [25.883919, 48.778539]},
  'name': 'Більче-Золотецька амбулаторія ЗПСМ',
  'region': 'Тернопільська область',
  'days': 145,
  'balance': 395},
 {'type': 'Feature',
  'geometry': {'type': 'Point', 'coordinates': [25.9828, 49.8862]},
  'name': 'Борсуківська амбулаторія ЗПСМ',
  'region': 'Тернопільська область',
  'days': 155,
  'balance': 364},
 {'type': 'Feature',
  'geometry': {'type': 'Point', 'coordinates': [23.08086, 49.807126]},
  'name': 'Волицька амбулаторія ЗПСМ',
  'region': 'Львівська область',
  'days': 124,
  'balance': 80},
 {'type': 'Feature',
  'geometry': {'type': 'Point', 'coordinates': [31.616652, 50.201089]},
  'name': 'Амбулаторія ЗПСМ Студениківської сільради',
  'region': 'Київська область',
  'days': 166,
  'balance': 521},
 {'type': 'Feature',
  'geometry': {'type': 'Point', 'coordinates': [25.943064, 48.268005]},
  'name': 'Чернівецька міська дитяча поліклініка',
  'region': 'Чернівецька область',
  'days': 152,
  'balance': 678}]
        var weeklyVax = [
        {"date":"2021-02-22","value":3141},
{"date":"2021-03-01","value":14806},
{"date":"2021-03-08","value":35208},
{"date":"2021-03-15","value":57870},
{"date":"2021-03-22","value":87440},
{"date":"2021-03-29","value":93359},
{"date":"2021-04-05","value":86445},
{"date":"2021-04-12","value":72381},
{"date":"2021-04-19","value":77383},
{"date":"2021-04-26","value":227358},
{"date":"2021-05-03","value":108698},
{"date":"2021-05-10","value":94463},
{"date":"2021-05-17","value":95587},
{"date":"2021-05-24","value":93442},
{"date":"2021-05-31","value":240543},
{"date":"2021-06-07","value":330375},
{"date":"2021-06-14","value":367993},
{"date":"2021-06-21","value":398274},
{"date":"2021-06-28","value":440614},
{"date":"2021-07-05","value":563952},
{"date":"2021-07-12","value":609316},
{"date":"2021-07-19","value":713852},
{"date":"2021-07-26","value":820283},
{"date":"2021-08-02","value":905935},
{"date":"2021-08-09","value":922048},
{"date":"2021-08-16","value":747268},
{"date":"2021-08-23","value":723606},
{"date":"2021-08-30","value":857861},
{"date":"2021-09-06","value":921443},
{"date":"2021-09-13","value":739636},
]
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
                .text('Количество вакцинированных понедельно');

        var parseDate = d3.timeParse("%Y-%m-%d");
        var formatDay = locale.format("%d.%m")
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
            .attr("fill", "#0094c4")
            .on("mouseover", function(d,i) {
                if (i+1 == 30) {
                    next_date = '2021-09-20'
                } else {
                    next_date = uploaded_data[i+1].date
                }
                
                tooltipBee.html("<h4>"+formatDay(parseDate(d.date))+'-'+formatDay(parseDate(next_date))+'</h4><p>'+numberWithSpaces(d.value)+' вакцинированных</p>')
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
            .attr("x", function(d) { return x(parseDate(d.date))+6; })
            .attr("y", function(d) { return y(d.value)-7; })
            .attr("text-anchor","middle")
            .attr('font-family','Circe')
            .attr('fill','black')
            .attr('font-size','10px')
            .text(function(d,i) {
                if (i % 3 == 0 && i != 0 ) {
                    return numberWithSpaces(Math.round(d.value/1000))+' т.'
                } else if (i == 29) {
                    return numberWithSpaces(Math.round(d.value/1000))+' т.'
                }
                
            });
    } 
    
        function getData(id){
            var value = $.ajax({ 
                url: id, 
                async: false
            }).responseJSON;
            return value;
        }
        var ukraine = getData('https://cdn.jsdelivr.net/gh/liga-net/few-projects/local_elections/ukraine.json');
        var places = getData('https://cdn.jsdelivr.net/gh/liga-net/few-projects/local_elections/places.json');
        
        function makeMap(w,id) {
            if (w < 600) {
                var width = w,
                height = w/1.6,
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
                .rotate([-30.18,0])
                .center([0, 50.12])
                .translate( [width/2.2,height/3] );

            var geoPath = d3.geoPath()
                .projection(albersProjection);
            
            d3.select("#"+id).html('')
            
            var svg = d3.select("#"+id).append("svg")
                .attr("width", width)
                .attr("height", height);
            
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
            if (id == 'places') {
                var json = places
                var max_value = 118
                var min_value = 1
                var title = 'Количество пунктов вакцинации, по населенным пунктам'
            } else if (id == 'bad_days') {
                var json = bad_days
                var max_value = 170
                var min_value = 105
                var title = 'Пунктов вакцинации, где не было вакцин больше 105 дней'
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
                .attr("fill", "#eeeeee" )
                .attr("stroke", "#bdbdbd")
                .attr("d", geoPath )
                .attr("class", "district");
            
            var cities_mer = svg.append("g");
            
            var radius = d3.scaleSqrt()
                .domain([min_value, max_value])
                .range([0, to]);

            cities_mer.selectAll("path")
                .data(json)
                .enter()
                .append("circle")
                .attr("fill", '#0094c4')
                .attr("stroke", '#1976d2')
                .attr("r",function(d) { 
                    if (id == 'places') {
                        return radius(d.values)
                    } else if (id == 'bad_days') {
                        return radius(d.days)
                    }
                })
                .attr("transform", function(d) { return "translate(" + geoPath.centroid(d) + ")"; })
                .attr("class", "dot");
            
            cities_mer.selectAll('.dot')
                .on("mouseover", function(d) {
                    if (id == 'places') {
                        var html = '<h4>'+d.name+'</h4>'+
                            '<p>'+d.region+'</p>'+
                            '<p>Пунктів вакцинації: <b>'+d.values+'</b></p>'
                    } else if (id == 'bad_days') {
                        var html = '<h4>'+d.name+'</h4>'+
                            '<p>'+d.region+'</p>'+
                            '<p>Кількість днів без вакцин: <b>'+d.days+'</b></p>'+
                            '<p>Запас вакцин на 22 вересня: <b>'+d.balance+'</b></p>'
                    }
                    tooltipBee.html(html)
                    return tooltipBee.style("visibility", "visible")
                })
                .on("mousemove", function() {
                    return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
                })
                .on("mouseout", function(d){
                    return tooltipBee.style("visibility", "hidden");
                })
        }
        makeMap(window.innerWidth,'places')
        makeMap(window.innerWidth,'bad_days')
        makeBarChart(window.innerWidth,weeklyVax,'weeklyVax')
    window.onresize = function(event) { 
        makeBarChart(window.innerWidth,weeklyVax,'weeklyVax')
        makeMap(window.innerWidth,'places')
        makeMap(window.innerWidth,'bad_days')
    };