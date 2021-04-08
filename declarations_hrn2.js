if(document.createStyleSheet) {
    document.createStyleSheet('https://cdn.jsdelivr.net/gh/liga-net/few-projects/declarations_hrn.css');
   }
   else {
    var styles = "@import url('https://cdn.jsdelivr.net/gh/liga-net/few-projects/declarations_hrn.css');";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
}
var data = [
    {"date": "01/01/2016 00:00", "value0": 0.14412,"name": "Президент","id":"president"},
{"date": "01/01/2016 00:00", "value0": 10.279307,"name": "Премьер","id":"premier"},
{"date": "01/01/2016 00:00", "value0": 0.187118,"name": "Глава НБУ","id":"nbu"},
{"date": "01/01/2016 00:00", "value0": 0.607719,"name": "Замглавы НБУ (валютный блок)","id":"zam_val"},
{"date": "01/01/2016 00:00", "value0": 67.141442,"name": "Замглавы НБУ (макроэконом. блок)","id":"zam_makr"},
{"date": "01/01/2016 00:00", "value0": 2.357967,"name": "Замглавы НБУ (надзор за банками)","id":"zam_bank"},
{"date": "01/01/2016 00:00", "value0": 0,"name": "Министр финансов","id":"finance"},
{"date": "01/01/2016 00:00", "value0": 34.38362,"name": "Спикер ВРУ","id":"vru"},
{"date": "01/01/2016 00:00", "value0": 34.979609,"name": "Глава ОП","id":"office"},
{"date": "01/01/2016 00:00", "value0": 9.478751,"name": "Министр экономики","id":"economics"},
{"date": "01/01/2016 00:00", "value0": 14.840128,"name": "Глава финкомитета Рады","id":"fincom"},
{"date": "01/01/2016 00:00", "value0": 61.887831,"name": "Глава экономического комитета Рады","id":"finecom"},
{"date": "01/01/2016 00:00", "value0": 35.974506,"name": "Глава Нацкомиссии по фонд. рынку","id":"fond"},
{"date": "01/01/2017 00:00", "value0": 16.217346,"name": "Президент","id":"president"},
{"date": "01/01/2017 00:00", "value0": 44.136057,"name": "Премьер","id":"premier"},
{"date": "01/01/2017 00:00", "value0": 5.979785,"name": "Глава НБУ","id":"nbu"},
{"date": "01/01/2017 00:00", "value0": 0.011716,"name": "Замглавы НБУ (валютный блок)","id":"zam_val"},
{"date": "01/01/2017 00:00", "value0": 82.801981,"name": "Замглавы НБУ (макроэконом. блок)","id":"zam_makr"},
{"date": "01/01/2017 00:00", "value0": 3.985901,"name": "Замглавы НБУ (надзор за банками)","id":"zam_bank"},
{"date": "01/01/2017 00:00", "value0": 100,"name": "Министр финансов","id":"finance"},
{"date": "01/01/2017 00:00", "value0": 29.466411,"name": "Спикер ВРУ","id":"vru"},
{"date": "01/01/2017 00:00", "value0": 16.647063,"name": "Глава ОП","id":"office"},
{"date": "01/01/2017 00:00", "value0": 8.295083,"name": "Министр экономики","id":"economics"},
{"date": "01/01/2017 00:00", "value0": 18.802169,"name": "Глава финкомитета Рады","id":"fincom"},
{"date": "01/01/2017 00:00", "value0": 63.311566,"name": "Глава экономического комитета Рады","id":"finecom"},
{"date": "01/01/2017 00:00", "value0": 47.069045,"name": "Глава Нацкомиссии по фонд. рынку","id":"fond"},
{"date": "01/01/2018 00:00", "value0": 22.987604,"name": "Президент","id":"president"},
{"date": "01/01/2018 00:00", "value0": 77.558715,"name": "Премьер","id":"premier"},
{"date": "01/01/2018 00:00", "value0": 7.027383,"name": "Глава НБУ","id":"nbu"},
{"date": "01/01/2018 00:00", "value0": 29.147818,"name": "Замглавы НБУ (валютный блок)","id":"zam_val"},
{"date": "01/01/2018 00:00", "value0": 76.087705,"name": "Замглавы НБУ (макроэконом. блок)","id":"zam_makr"},
{"date": "01/01/2018 00:00", "value0": 4.958447,"name": "Замглавы НБУ (надзор за банками)","id":"zam_bank"},
{"date": "01/01/2018 00:00", "value0": 100,"name": "Министр финансов","id":"finance"},
{"date": "01/01/2018 00:00", "value0": 32.393704,"name": "Спикер ВРУ","id":"vru"},
{"date": "01/01/2018 00:00", "value0": 16.635169,"name": "Глава ОП","id":"office"},
{"date": "01/01/2018 00:00", "value0": 7.783915,"name": "Министр экономики","id":"economics"},
{"date": "01/01/2018 00:00", "value0": 9.746535,"name": "Глава финкомитета Рады","id":"fincom"},
{"date": "01/01/2018 00:00", "value0": 100,"name": "Глава экономического комитета Рады","id":"finecom"},
{"date": "01/01/2018 00:00", "value0": 48.775045,"name": "Глава Нацкомиссии по фонд. рынку","id":"fond"},
{"date": "01/01/2019 00:00", "value0": 25.497901,"name": "Президент","id":"president"},
{"date": "01/01/2019 00:00", "value0": 15.990768,"name": "Премьер","id":"premier"},
{"date": "01/01/2019 00:00", "value0": 7.931495,"name": "Глава НБУ","id":"nbu"},
{"date": "01/01/2019 00:00", "value0": 20.854432,"name": "Замглавы НБУ (валютный блок)","id":"zam_val"},
{"date": "01/01/2019 00:00", "value0": 96.07239,"name": "Замглавы НБУ (макроэконом. блок)","id":"zam_makr"},
{"date": "01/01/2019 00:00", "value0": 7.475972,"name": "Замглавы НБУ (надзор за банками)","id":"zam_bank"},
{"date": "01/01/2019 00:00", "value0": 100,"name": "Министр финансов","id":"finance"},
{"date": "01/01/2019 00:00", "value0": 17.136317,"name": "Спикер ВРУ","id":"vru"},
{"date": "01/01/2019 00:00", "value0": 15.950486,"name": "Глава ОП","id":"office"},
{"date": "01/01/2019 00:00", "value0": 61.693397,"name": "Министр экономики","id":"economics"},
{"date": "01/01/2019 00:00", "value0": 17.450902,"name": "Глава финкомитета Рады","id":"fincom"},
{"date": "01/01/2019 00:00", "value0": 10.924081,"name": "Глава экономического комитета Рады","id":"finecom"},
{"date": "01/01/2019 00:00", "value0": 23.079131,"name": "Глава Нацкомиссии по фонд. рынку","id":"fond"},
{"date": "01/01/2020 00:00", "value0": 17.373579,"name": "Президент","id":"president"},
{"date": "01/01/2020 00:00", "value0": 1.420544,"name": "Премьер","id":"premier"},
{"date": "01/01/2020 00:00", "value0": 5.136135,"name": "Глава НБУ","id":"nbu"},
{"date": "01/01/2020 00:00", "value0": 64.026002,"name": "Замглавы НБУ (валютный блок)","id":"zam_val"},
{"date": "01/01/2020 00:00", "value0": 89.429224,"name": "Замглавы НБУ (макроэконом. блок)","id":"zam_makr"},
{"date": "01/01/2020 00:00", "value0": 38.328669,"name": "Замглавы НБУ (надзор за банками)","id":"zam_bank"},
{"date": "01/01/2020 00:00", "value0": 97.470755,"name": "Министр финансов","id":"finance"},
{"date": "01/01/2020 00:00", "value0": 93.580036,"name": "Спикер ВРУ","id":"vru"},
{"date": "01/01/2020 00:00", "value0": 4.030358,"name": "Глава ОП","id":"office"},
{"date": "01/01/2020 00:00", "value0": 11.592176,"name": "Министр экономики","id":"economics"},
{"date": "01/01/2020 00:00", "value0": 17.61726,"name": "Глава финкомитета Рады","id":"fincom"},
{"date": "01/01/2020 00:00", "value0": 13.317232,"name": "Глава экономического комитета Рады","id":"finecom"},
{"date": "01/01/2020 00:00", "value0": 23.023838,"name": "Глава Нацкомиссии по фонд. рынку","id":"fond"},
{"date": "01/01/2016 00:00", "value0": 10.279307,"name": "Медиана гривневых сбережений украинских чиновников, %","id":"mediana"},
{"date": "01/01/2017 00:00", "value0": 18.802169,"name": "Медиана гривневых сбережений украинских чиновников, %","id":"mediana"},
{"date": "01/01/2018 00:00", "value0": 29.147818,"name": "Медиана гривневых сбережений украинских чиновников, %","id":"mediana"},
{"date": "01/01/2019 00:00", "value0": 17.450902,"name": "Медиана гривневых сбережений украинских чиновников, %","id":"mediana"},
{"date": "01/01/2020 00:00", "value0": 17.61726,"name": "Медиана гривневых сбережений украинских чиновников, %","id":"mediana"},
    ];

    var categories = ['Медиана гривневых сбережений украинских чиновников, %',"Президент","Премьер","Глава НБУ","Замглавы НБУ (валютный блок)","Замглавы НБУ (макроэконом. блок)","Замглавы НБУ (надзор за банками)","Министр финансов","Спикер ВРУ","Глава ОП","Министр экономики","Глава финкомитета Рады","Глава экономического комитета Рады","Глава Нацкомиссии по фонд. рынку"]
    if (window.innerWidth < 600) {
        for (cat in categories.slice(1,8)) {
            makeAreaChart(window.innerWidth,categories[cat])
        }
    } else {
        for (cat in categories) {
            makeAreaChart(265,categories[cat])
        }
    }
    makeAreaChart(window.innerWidth,'Медиана гривневых сбережений украинских чиновников, %')
    function makeAreaChart(w,id) { 
        var uploaded_data = data.filter(d => d.name == id)
        var div_id = uploaded_data[0].id
        if (w>600) {
            if (id == 'Медиана гривневых сбережений украинских чиновников, %') {
                var windowW = 600
            } else {
                var windowW = w
            }
        } else {
            var windowW = w-60
        }
        var margin =  {top: 20, right: 15, bottom: 25, left: 25},
            width = windowW + margin.left - margin.right;
        if (id == 'Медиана гривневых сбережений украинских чиновников, %') {
            var height = 200
        } else {
            var height = 100
        }
        
        
        d3.select("#"+div_id).html("")
        
        var svg = d3.select("#"+div_id)
            .append("svg")
            .attr("id", 'svg_chart')
            .attr("width", width+ margin.left + margin.right)
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
        
        var bisectDate = d3.bisector(function(d) {
            return parseDate(d.date);
        }).left;

        var color = d3.scaleOrdinal()
            .domain(['value0'])
            .range(["#377eb8"]);

        var parseDate = d3.timeParse("%m/%d/%Y %H:%M");
            
        var x = d3.scaleTime().range([0, width]),
            y = d3.scaleLinear().range([height, 0]);

        var area = d3.area()
            .curve(d3.curveCardinal)
            .x(function(d) { return x(d.date); })
            .y0(y(0))
            .y1(function(d) { return y(d.kW); });
        
        var new_data = uploaded_data.map(d=> parseDate(d.date))
        
        var sources = ['value0'].map(function(id) {
            return {
                id: id,
                values: uploaded_data.map(function(d) {
                    return {date: parseDate(d.date), kW: parseInt(d[id])};
                })
            };
        });
        x.domain(d3.extent(uploaded_data, function(d) { return parseDate(d.date); }));
        y.domain([0,100]);
        /* y.domain([0,
            d3.max(sources, function(c) { return d3.max(c.values, function(d) { return d.kW; }); })
        ]); */
        color.domain(sources.map(function(c) { return c.id; }));
        
        
        xAxis = svg.append("g")
            .attr("class", "x-axis")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).ticks(tickValue));
        
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
        

        function drawtooltipBubble() {

            let tooltipBubble = svg.append('g').attr('class', 'tooltipBubble tooltipBubble1')
            
            // append circle on the line path
            tooltipBubble.append('circle')
                .attr('r', 7.5)
                .style("opacity", 0)

            // create an overlay rectangle to draw the above objects on top of
            svg.append('rect')
                .attr('class', 'overlay')
                .attr('width', width)
                .style('fill', 'none')
                .style('pointer-events', 'all')
                .attr('height', height)
                .on('mouseover', function(){
                    tooltipBubble.style('display', null)
                })
                .on('mouseout', function(){
                    tooltipBubble.style('display', 'none')
                    div.style('display','none')
                })
                .on('mousemove', tipMove);
            // so it only serves the purpose of detecting mouse events
            

            // select tooltipBubble objects and set opacity
            d3.selectAll('.tooltipBubble')
                .style('opacity', 1);

            // select the hover lines and style them
            d3.selectAll('.tooltipBubble line')
                .style("fill", "none")
                .style("stroke", "black")
                .style("opacity", 0.4)
                .style("stroke-width", '1px');

            // function that adds tooltipBubble on hover
            function tipMove() {
                var row = 'value0'
                var circle_color = '#377eb8'
                var x0 = x.invert(d3.mouse(this)[0]);
                var i = bisectDate(uploaded_data, x0, 1);
                var d0 = uploaded_data[i - 1];
                var d1 = uploaded_data[i];
                var d = x0 - d0.date > d1.date - x0 ? d1 : d0;
                var date = new Date(String(d['date']));
                var day = date.getFullYear();
                if (day == 2019 && x0.getMonth() >= 5) {
                    var i = 5
                    var d = uploaded_data[i - 1];
                    var date = new Date(String(d['date']));
                    var day = date.getFullYear();
                }
                tooltipBubble.attr('transform', `translate(${x(parseDate(d.date))}, ${y(d[row])})`);

                // position the x line
                tooltipBubble.select('line.x')
                    .attr('x1', 0)
                    .attr('x2', x(parseDate(d.date)))
                    .attr('y1', 0)
                    .attr('y2', 0);

                // position the y line
                tooltipBubble.select('line.y')
                    .attr('x1', 0)
                    .attr('x2', 0)
                    .attr('y1', 0)
                    .attr('y2', height - y(d[row]));
                
                div.style('display','block')
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY) + "px")
                    .html('<h4>'+day+'</h4><p>Сбережений в гривне: '+d[row].toFixed(0)+'%</p>');

                d3.selectAll('.tooltipBubble1 circle')
                    .style("fill", circle_color)
                    .style('stroke','white')
                    .style('stroke-width','1')
                    .style("opacity", 0)
                // show the circle on the path
                tooltipBubble.selectAll('.tooltipBubble circle')
                    .style("opacity", 1)
                
            };

        }
        
        drawtooltipBubble();
        svg.append("text")
            .attr("x", 10) 
            .attr("y", -10)
            .attr("text-anchor", "left")  
            .style("font-size", "12px")
            .style("font-family", "sans-serif")
            .attr("fill", "black")
            .text(id) 
    }
    d3.select(window).on("resize", function() {
        if (window.innerWidth < 600) {
            for (cat in categories.slice(0,7)) {
                makeAreaChart(window.innerWidth,categories[cat])
            }
        } else {
            for (cat in categories) {
                makeAreaChart(295,categories[cat])
            }
        }
    });