function getData(id){
    var value = $.ajax({ 
        url: id+'.json', 
        async: false
    }).responseJSON;
    return value;
}
var ukraine = getData('https://cdn.jsdelivr.net/gh/liga-net/few-projects/local_elections/ukraine');
var oblasni = getData('https://cdn.jsdelivr.net/gh/liga-net/few-projects/oblasni');
var oblasni_koalition = getData('https://cdn.jsdelivr.net/gh/liga-net/few-projects/lera_oblasni');

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

        if (id == 'oblasni') {
            var json = oblasni.features
            var parties = ["Слуга Народу","Євросолідарність","Батьківщина","За Майбутнє","Наш Край","ОПЗЖ"]
            var colors = ["#43a047","#fdd835","#e53935","#5e35b1","#3949ab",'#1976d2']
        } else {
            var json = oblasni_koalition.features
            var parties = ["Слуга Народа","Евросолидарность","ВО Свобода","ВО Черкащане","Украинская стратегия (Гройсман)","За майбутнє",'Довира']
            var colors = ["#43a047","#fdd835","#4db6ac","#880e4f",'#1976d2',"#5e35b1",'#607d8b']
        }
            
        var no_rayon = ['Волноваський район', 'Горлівський район', 'Донецький район', 'Кальміуський район','Алчевський район', 'Довжанський район', 'Луганський район', 'Ровеньківський район',"Донецька область","Луганська область"]
        var krym = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '24', '25', '26', '707', '708', '473', '476', '475']
            
            svg.selectAll("mydots")
                .data(parties)
                .enter()
                .append("circle")
                    .attr("cx", legend_x)
                    .attr("cy", function(d,i){ return legend_y + i*25}) 
                    .attr("r", 7)
                    .style("fill", function(d,i){ return colors[i]})

            svg.selectAll("mylabels")
                .data(parties)
                .enter()
                .append("text")
                    .attr("x", legend_x+10)
                    .attr("y", function(d,i){ return legend_y + i*25}) 
                    .style("fill", 'black')
                    .text(function(d){ return d})
                    .attr("text-anchor", "left")
                    .attr("font-size", "10px")
                    .style("alignment-baseline", "middle")       
            function mouseOverOblasni(d) {
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
            function mouseOverRayon(d) {
                var d_results = d.results
                if ($.isEmptyObject(d_results) == false) {
                    var keys = Object.keys(d_results)
                    var results = '<p><b>Глава совета: '+parties[colors.indexOf(d.fill)]+'</b></p><p><i>Кто входит в коалицию:</i></p>'
                    keys.forEach(function(k) {
                        results += '<p>'+d_results[k].party+'</p>'
                    })
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
                } else if (d.name == "Дніпропетровська область"&&d.name == "Запорізька область"&&d.name == "Чернівецька область") {
                    tooltipBee.html(
                        '<h4>'+d.name+'</h4><p>Результатов еще нет</p>'
                    )
                } else {
                    tooltipBee.html(
                        '<h4>'+d.name.replace('область', 'обласной совет')+'</h4>'+results
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
                    if (id == 'oblasni') {
                        mouseOverOblasni(d)
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
makeMiskiMap('oblasni_koalition',window.innerWidth)
makeMiskiMap('oblasni',window.innerWidth)
window.onresize = function(event) {
    makeMiskiMap('oblasni_koalition',window.innerWidth)
    makeMiskiMap('oblasni',window.innerWidth)
};