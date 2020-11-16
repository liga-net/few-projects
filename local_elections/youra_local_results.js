if(document.createStyleSheet) {
    document.createStyleSheet('https://cdn.jsdelivr.net/gh/liga-net/few-projects/local_elections/youra_results_style.css');
   }
else {
    var styles = "@import url('https://cdn.jsdelivr.net/gh/liga-net/few-projects/local_elections/youra_results_style.css');";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
}
function getData(id){
    var value = $.ajax({ 
        url: 'https://cdn.jsdelivr.net/gh/liga-net/few-projects@1611/local_elections/'+id+'.json', 
        async: false
    }).responseJSON;
    return value;
}
var ukraine = getData('ukraine');
        var oblasni = getData('oblasni');
        var miski_rada = getData('miski_rada');
        var mers = getData('mers');
        var obl_cities = ["Вінниця","Дніпро","Донецьк","Житомир","Запоріжжя","Івано-Франківськ","Київ","Краматорськ","Кропивницький","Луцьк","Львів","Миколаїв","Одеса","Полтава","Рівне","Суми","Тернопіль","Ужгород","Харків","Херсон","Хмельницький","Черкаси","Чернівці","Чернігів"];
        var mers = mers.data.filter(d => obl_cities.includes(d.properties.city))
        var add = [{"type": "Feature", "geometry": {"type": "Point", "coordinates": [27.2030967566, 49.4212809012]}, "properties": {"city": "Хмельницький", "results": {}, "region": "Хмельницька область"}, "fill": "red"},
                {"type": "Feature", "geometry": {"type": "Point", "coordinates": [25.8913390558, 48.2871806664]}, "properties": {"city": "Чернівці", "results": {}, "region": "Чернівецька область"}, "fill": "red"}]
        if (mers.map(d => d.properties.city).includes('Хмельницький') == false) {
            mers.push(add[0])
        } 
        if (mers.map(d => d.properties.city).includes('Чернівці') == false) {
            mers.push(add[1])
        }
        
        function makeMiskiMap(id,w) {
            if (w < 600) {
                var width = w,
                height = w/1.3,
                legend_y = 150,
                legend_x = 20,
                rad = 8
                scale = w*4.3;
            } else {
                var width = 600,
                scale = 2800,
                legend_y = 280,
                legend_x = 100,
                rad = 13
                height = 450;
            }
                
            var albersProjection = d3.geoAlbers()
                .scale(scale)
                .rotate([-30.08,0])
                .center([0, 49.26])
                .translate( [width/2.2,height/3] );

            var geoPath = d3.geoPath()
                .projection(albersProjection);
            
            d3.select("#"+id+"_map").html('')
            
            var svg = d3.select("#"+id+"_map").append("svg")
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
            
                var mapdata = ukraine.features

                g.selectAll("path")
                    .data(mapdata)
                    .enter()
                    .append("path")
                    .attr("fill", "#eeeeee" )
                    .attr("stroke", "#bdbdbd")
                    .attr("d", geoPath )
                    .attr("class", "district");

                var cities_mer = svg.append("g");
                if (id == 'mers') {
                    var json = mers
                    var keys = ["Євросолідарність","Пропозиція","Батьківщина","За Майбутнє","ОПЗЖ","Місцеві партії"]
                    var colors = ["#fdd835","#880e4f","#e53935","#5e35b1",'#1976d2',"#607d8b"]
                    
                } else if (id == 'oblasni') {
                    var json = oblasni.features
                    var keys = ["Слуга Народу","Євросолідарність","Батьківщина","За Майбутнє","ОПЗЖ","Місцеві партії"]
                    var colors = ["#43a047","#fdd835","#e53935","#5e35b1",'#1976d2',"#607d8b"]
                }
                
                    
                    var no_rayon = ['Волноваський район', 'Горлівський район', 'Донецький район', 'Кальміуський район','Алчевський район', 'Довжанський район', 'Луганський район', 'Ровеньківський район',"Донецька область","Луганська область"]
                    var krym = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '24', '25', '26', '707', '708', '473', '476', '475']
                    
                    svg.selectAll("mydots")
                        .data(keys)
                        .enter()
                        .append("circle")
                            .attr("cx", legend_x)
                            .attr("cy", function(d,i){ return legend_y + i*25}) 
                            .attr("r", 7)
                            .style("fill", function(d,i){ return colors[i]})

                    svg.selectAll("mylabels")
                        .data(keys)
                        .enter()
                        .append("text")
                            .attr("x", legend_x+10)
                            .attr("y", function(d,i){ return legend_y + i*25}) 
                            .style("fill", 'black')
                            .text(function(d){ return d})
                            .attr("text-anchor", "left")
                            .attr("font-size", "10px")
                            .style("alignment-baseline", "middle")       
                    function mouseOverMer(d) {
                        
                        var html = '<p style="font-size: 14px"><b>'+d.properties.city+', '+d.properties.region+'</b></p>'
                        var html = html.replace(', м.Київ',"")
                        var d_results = d.properties.results
                        var keys = Object.keys(d_results)
                        var miski_rada_city = miski_rada.data.filter(f=>f.properties.city == d.properties.city)
                        
                        //console.log(miski_rada_city)
                        if ($.isEmptyObject(d_results) == false) {
                            var results = ''
                            keys.forEach(function(k,i) {
                                if (i == 0 && parseFloat(d_results[k].percent) >= 50) {
                                    results += '<h4>Вибори мера</h4>'
                                    results += '<p>Переможець: '+d_results[k].name+' (' +d_results[k].party+'): '+d_results[k].percent +'%</p>'
                                } else if (parseFloat(d_results[0].percent) < 50 && i < 2) {
                                    if (parseFloat(d_results[0].percent) < 50  && i == 0) {
                                        results += '<h4>Вибори мера</h4>'
                                    }
                                    results += '<p>'+d_results[k].name+' ('+d_results[k].party+'): '+d_results[k].percent +'%</p>'
                                }
                            })
                            if (miski_rada_city.length>0){ 
                                results += '<h4>Вибори міськради</h4>'
                                var d_results = miski_rada_city[0].properties.results
                                var keys = Object.keys(d_results)
                                keys.forEach(function(k) {
                                    if (d_results[k].places > 0) {
                                        if (d_results[k].places == 1) {
                                            var place_text = ' депутат'
                                        } else if (d_results[k].places > 1 && d_results[k].places < 5) {
                                            var place_text = ' депутати'
                                        } else if (d_results[k].places >= 5) {
                                            var place_text = ' депутатів'
                                        }
                                        results += '<p>'+d_results[k].party+': '+String(d_results[k].places) +place_text+'</p>'
                                    }
                                })   
                            }
                            html += results
                        } else {
                            html += '<p>Результатів ще немає</p>'
                        }
                        tooltipBee.html(html)
                    }          
                    function mouseOverRayon(d) {
                        var d_results = d.results
                        if ($.isEmptyObject(d_results) == false) {
                            var keys = Object.keys(d_results)
                            var results = '<table>'
                            keys.forEach(function(k) {
                                if (d_results[k].places == 1) {
                                    var place_text = ' место'
                                } else if (d_results[k].places > 1 && d_results[k].places < 5) {
                                    var place_text = ' места'
                                } else if (d_results[k].places >= 5) {
                                    var place_text = ' мест'
                                }
                                results += '<tr><td>'+d_results[k].party+'</td><td>'+String(d_results[k].places) +place_text+'</td></tr>'
                            })
                            results += '</table'
                        } else{
                            var results = '<p>Результатов еще нет</p>'
                        }
                        if (no_rayon.includes(d.name)) {
                            tooltipBee.html(
                                '<p><b>'+d.name.replace('область', 'обласна рада')+'</b></p><p>Выборы не проводились</p>'
                            )
                        } else if (d.name == "Автономна Республіка Крим"||krym.includes(d.rayon_id)) {
                            tooltipBee.html(
                                '<p><b>'+d.name+'</b></p><p>Выборы не проводились из-за оккупации Крыма Россией</p>'
                            )
                        } else {
                            tooltipBee.html(
                                '<p><b>'+d.name.replace('область', 'обласна рада')+'</b></p>'+results
                            )
                        }
                        
                    }   
                    cities_mer.selectAll("path")
                        .data(json)
                        .enter()
                        .append("path")
                        .attr("fill",function(d) {
                            if (id == 'mers') {
                                var miski_rada_city = miski_rada.data.filter(f=>f.properties.city == d.properties.city)
                            }
                            if (id == 'mers' && miski_rada_city != undefined && miski_rada_city.length > 0) {
                                return miski_rada_city[0].properties.fill
                            } else if (id == 'mers') {
                                return 'black'
                            } else if (no_rayon.includes(d.name) || krym.includes(d.rayon_id)){
                                return '#9e9e9e'
                            } else {
                                if (id == 'oblasni') {
                                    return d.fill
                                } else if (d.results['1'] != undefined) {
                                    return d.results['0'].color
                                } else {
                                    return d.fill
                                }
                                
                            }
                        })
                        .attr("stroke",function(d) {
                            if (id == 'mers') {
                                var miski_rada_city = miski_rada.data.filter(f=>f.properties.city == d.properties.city)
                            }
                            if (id == 'mers' && miski_rada_city != undefined && miski_rada_city.length > 0) {
                                return miski_rada_city[0].properties.fill
                            } else if (id == 'mers') {
                                return 'black'
                            } else {
                                return "#bdbdbd"
                            }
                        })
                        .attr("stroke-width",function(d) {
                            if (id == 'mers') {
                                return rad
                            } 
                        })
                        .attr("d", geoPath )
                        .attr("class", "dot")
                        .on("mouseover", function(d) {
                            if (id == 'mers') {
                                mouseOverMer(d)
                                tooltipBee.style("visibility", "visible")
                            } else {
                                mouseOverRayon(d)
                                tooltipBee.style("visibility", "visible")
                            }
                        })
                        .on("mousemove", function() {
                            return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
                        })
                        .on("mouseout", function(d){
                            return tooltipBee.style("visibility", "hidden");
                        });
                    cities_mer.selectAll("text")
                        .data(json)
                        .enter()
                        .append("svg:text")
                        .text(function(d,i){
                            if (width == 600) {
                                if (id == 'mers') {
                                    return d.properties.city;
                                } else if (width > 600) {
                                    if (id == 'oblasni'){
                                        return d.name.replace('область', '');
                                    }
                                }
                            }
                        })
                        .attr("x", function(d){
                            return geoPath.centroid(d)[0];
                        })
                        .attr("y", function(d){
                            return geoPath.centroid(d)[1]+20;
                        })
                        .attr("text-anchor","middle")
                        .attr('font-family','Circe')
                        .attr('fill','black')
                        .attr('font-size','10px');
        }
        makeMiskiMap('mers',window.innerWidth)
        makeMiskiMap('oblasni',window.innerWidth)
        function makeBarChart(w) {
            if (w < 600) {
                var start_width = w,
                sizeleft = 130,
                fontsize = '14px',
                titlesize = '14px',
                starttitle = 50,
                titletext = 'Кто берет больше всех мест на выборах в сельских радах',
                start_height = 500;
            } else {
                var start_width = 600,
                sizeleft = 150,
                titlesize = '18px',
                fontsize = '14px',
                starttitle = 150,
                titletext = 'Кто берет больше всех мест на выборах в сельских и поселковых громадах',
                start_height = 500;
            } 
            /* var mand = [31,30,14,12,12,12,9]
            var json = [20.52,19.98,8.74,7.81,7.53,7.49,5.97]
            var date = ['Євросолідарність','УДАР','Єдність','ОПЗЖ','Слуга народу','Батьківщина','Голос'] */
            d3.select("#otg_chart").html('')
            var json = [6353, 3115, 2495, 2301, 1471, 1288, 962]
            var date = ['Самовыдвиженцы','Слуга Народа','Батькивщина','За Майбутнє','ОПЗЖ','Євросолідарність','Наш Край']
            // set the dimensions and margins of the graph
            var margin = {top: 30, right: 10, bottom: 70, left: sizeleft},
                width = start_width - margin.left - margin.right,
                height = start_height - margin.top - margin.bottom;

            // append the svg object to the body of the page
            var svg = d3.select("#otg_chart")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")");
            svg.append("text")
                .attr("x", starttitle) 
                .attr("y", 0 - (margin.top / 2))
                .attr("text-anchor", "middle")  
                .style("font-size", titlesize)
                .style("font-family", "sans-serif")
                .style('font-family','Circe')
                .text(titletext);
                var x = d3.scaleLinear()
                    .domain([0, d3.max(json)+1000])
                    .range([ 0, width]);
                svg.append("g")
                    .attr("transform", "translate(0," + height + ")")
                    .call(d3.axisBottom(x))
                    .selectAll("text")
                    .attr("transform", "translate(-10,0)rotate(-45)")
                    .style("text-anchor", "end");
            
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
                .attr('font-size',fontsize)
                .attr('font-family','Circe');
            
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
                .attr("fill", "#d32f2f")
                .on("mouseover", function(d,i) {
                    tooltipBee.html('<p>'+date[i]+':</p><p>'+d +' или '+json[i]+' мандатов')
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
                .text(function(d,i){return d})
                .attr("y", function(d,i) { return y(date[i])+29; })
                .attr("x", function(d,i) { return x(json[i])-22; })
                .attr("text-anchor","middle")
                .attr('font-family','Circe')
                .attr('fill','white')
                .attr('font-size','16px');
            }
            makeBarChart(window.innerWidth)
        window.onresize = function(event) {
            makeMiskiMap('oblasni',window.innerWidth)
            makeMiskiMap('mers',window.innerWidth)
            makeBarChart(window.innerWidth)
        };