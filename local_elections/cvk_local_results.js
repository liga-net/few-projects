if(document.createStyleSheet) {
    document.createStyleSheet('https://cdn.jsdelivr.net/gh/liga-net/few-projects/local_elections/cvk_local_results1.css');
   }
else {
    var styles = "@import url('https://cdn.jsdelivr.net/gh/liga-net/few-projects/local_elections/cvk_local_results1.css');";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
}
function getData(id){
    var value = $.ajax({ 
        url: 'https://cdn.jsdelivr.net/gh/liga-net/few-projects@1811/local_elections/'+id+'.json', 
        async: false
    }).responseJSON;
    return value;
}
var ukraine = getData('ukraine');
var mers = getData('mers');
var oblasni = getData('oblasni');
var rayon = null
var miski_rada = getData('miski_rada');
function makeTable(scraped, num) {
    var table = document.getElementById('tablecoro'+String(num));
    table.innerHTML = ''
    var tr = document.createElement('tr');
    if (num == 0) {
        var fillValue = scraped.features.filter(a=>$.isEmptyObject(a.results) == false)
        tr.innerHTML = '<th style="text-align:left;">Область</th>' +
                                '<th>Партія №1</th>'+'<th>Партія №2</th>'+'<th>Партія №3</th>' ;
    } else if (num == 1) {
        var fillValue = scraped.features.filter(a=>$.isEmptyObject(a.results) == false)
        tr.innerHTML = '<th style="text-align:left;">Адм. район</th>' +
                                '<th>Партія №1</th>'+'<th>Партія №2</th>'+'<th>Партія №3</th>' ;
    } else if (num == 2){
        var fillValue = scraped.data.filter(a=>$.isEmptyObject(a.properties.results) == false)
        
        tr.innerHTML = '<th style="text-align:left;"Місто</th>' +
                                '<th>Кандидат №1</th>'+'<th>Кандидат №2</th>';
    } else {
        var fillValue = scraped.data.filter(a=>$.isEmptyObject(a.properties.results) == false)
        tr.innerHTML = '<th style="text-align:left;">Місцева рада</th>' +
                                '<th>Партія №1</th>'+'<th>Партія №2</th>'+'<th>Партія №3</th>' 
    }
    table.appendChild(tr);

    for (r=0;r < fillValue.length; r++) {
        var tr = document.createElement('tr');
        if (r>10) {
            var clas = 'tablerow'+String(num);
        } else {
            var clas = 'norm'
        }
        tr.className = clas
        if (num == 0) {
            tr.innerHTML = '<td>' + fillValue[r].name + '</td>' +
                            '<td>' + fillValue[r].results[1].party +'<br>('+fillValue[r].results[1].places  + ' м.)</td>'+
                            '<td>' + fillValue[r].results[2].party +'<br>('+fillValue[r].results[2].places  + ' м.)</td>'
                    if (fillValue[r].results[3] != undefined){
                        tr.innerHTML +='<td>' + fillValue[r].results[3].party +'<br>('+fillValue[r].results[3].places  + ' м.)</td>'  
                    }
        } else if (num == 1) {
            tr.innerHTML = '<td>' + fillValue[r].name + '</td>' +
                    '<td>' + fillValue[r].results['0'].party +'<br>('+fillValue[r].results['0'].places  + ' місць)</td>'+
                    '<td>' + fillValue[r].results['1'].party +'<br>('+fillValue[r].results['1'].places  + ' місць)</td>' +
                    '<td>' + fillValue[r].results['2'].party.replace('ПОЛІТИЧНА ПАРТІЯ "БЛОК ВІЛКУЛА "УКРАЇНСЬКА ПЕРСПЕКТИВА"','Блок Вілкула') +'<br>('+fillValue[r].results['2'].places  + ' місць)</td>'  
        } else if (num ==2 ){
            tr.innerHTML = '<td>' + fillValue[r].properties.city + '</td>' +
                    '<td style="color:white;background-color:'+fillValue[r].properties.results['0'].color+'">' + fillValue[r].properties.results['0'].name +' ('+fillValue[r].properties.results['0'].party+ '):<br>'+fillValue[r].properties.results['0'].percent  + '%</td>'+
                    '<td>' + fillValue[r].properties.results['1'].name +' ('+fillValue[r].properties.results['1'].party+ '):<br>'+fillValue[r].properties.results['1'].percent  + '%</td>'
        } else {
            tr.innerHTML = '<td>' + fillValue[r].properties.results[0].rada + '</td>' +
                            '<td>' + fillValue[r].properties.results[0].party +'<br>('+fillValue[r].properties.results[0].places  + ' м.)</td>'+
                            '<td>' + fillValue[r].properties.results[1].party +'<br>('+fillValue[r].properties.results[1].places  + ' м.)</td>'
                    if (fillValue[r].properties.results[2] != undefined){
                        tr.innerHTML +='<td>' + fillValue[r].properties.results['2'].party +'<br>('+fillValue[r].properties.results['2'].places  + ' м.)</td>'  
                    }
                    
        }
        table.appendChild(tr);
    }
}
function makeMiskiMap(id,w) {
    if (w < 900) {
        var width = w,
        height = w/1.5,
        scale = w*4.4;
    } else {
        var width = 900,
        scale = 4000
        height = 600;
    }
        
    var albersProjection = d3.geoAlbers()
        .scale(scale)
        .rotate([-30.48,0])
        .center([0, 49.96])
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
    
    if (id == 'rayon') {
        var mapdata = rayon.features
    } else {
        var mapdata = ukraine.features
    }
    g.selectAll("path")
        .data(mapdata)
        .enter()
        .append("path")
        .attr("fill", "#eeeeee" )
        .attr("stroke", "#bdbdbd")
        .attr("d", geoPath )
        .attr("class", "district");

    var cities_mer = svg.append("g");
        //d3.json(id+".json", function (error,mer) {
            if (id == 'mers') {
                var json = mers.data
            } else if (id == 'miski_rada') {
                var json = miski_rada.data
            } else if (id == 'rayon') {
                var json = rayon.features
            } else if (id == 'oblasni') {
                var json = oblasni.features
            }
            //var json = mer.data
        
            var keys = ["Слуга Народу","Євросолідарність","Батьківщина","За Майбутнє","Наш Край","ОПЗЖ"]
            var no_rayon = ['Волноваський район', 'Горлівський район', 'Донецький район', 'Кальміуський район','Алчевський район', 'Довжанський район', 'Луганський район', 'Ровеньківський район',"Донецька область","Луганська область"]
            var krym = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '24', '25', '26', '707', '708', '473', '476', '475']
            var colors = ["#43a047","#fdd835","#e53935","#5e35b1","#3949ab",'#1976d2']
            svg.selectAll("mydots")
                .data(keys)
                .enter()
                .append("circle")
                    .attr("cx", 100)
                    .attr("cy", function(d,i){ return 380 + i*25}) 
                    .attr("r", 7)
                    .style("fill", function(d,i){ return colors[i]})

            svg.selectAll("mylabels")
                .data(keys)
                .enter()
                .append("text")
                    .attr("x", 110)
                    .attr("y", function(d,i){ return 380 + i*25}) 
                    .style("fill", 'black')
                    .text(function(d){ return d})
                    .attr("text-anchor", "left")
                    .attr("font-size", "10px")
                    .style("alignment-baseline", "middle")       
            function mouseOverMer(d) {
                    var html = '<p style="font-size: 14px"><b>'+d.properties.city+', '+d.properties.region+'</b></p><p>Результати: </p>'
                    var d_results = d.properties.results
                    var keys = Object.keys(d_results)
                    if ($.isEmptyObject(d_results) == false) {
                        var results = ''
                        if (id == 'mers') {
                            keys.forEach(function(k,i) {
                                if (i == 0) {
                                    if (parseFloat(d_results[k].percent) != parseFloat(d_results[String(i+2)].percent)) {
                                        results += '<p><b>'+d_results[k].name+'</b> (' +d_results[k].party+'): '+d_results[k].percent +'%</p>'
                                    } else{
                                        results += '<p>'+d_results[k].name+' ('+d_results[k].party+'): '+d_results[k].percent +'%</p>'
                                    }
                                } else if (i < 3) {
                                    results += '<p>'+d_results[k].name+' ('+d_results[k].party+'): '+d_results[k].percent +'%</p>'
                                }
                            })  
                        } else {
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
                tooltipBee.html(
                    '<p><b>'+d.name.replace('область', 'обласна рада')+'</b></p>'+results
                )
            }   
            cities_mer.selectAll("path")
                .data(json)
                .enter()
                .append("path")
                .attr("fill",function(d) {
                    if (id == 'mers' || id == 'miski_rada') {
                        return d.properties.fill
                    } else if (no_rayon.includes(d.name) || krym.includes(d.rayon_id) || d.name == 'Автономна Республіка Крим'){
                        return '#9e9e9e'
                    }  else {
                        if (id == 'oblasni') {
                            return d.fill
                        } else if (d.results['1'] != undefined) {
                            return d.results['0'].color
                        }else {
                            return d.fill
                        }
                        
                    }
                })
                .attr("stroke",function(d) {
                    if (id == 'mers' || id == 'miski_rada') {
                        return d.properties.fill
                    } else {
                        return "#bdbdbd"
                    }
                })
                .attr("d", geoPath )
                .attr("class", "dot")
                .on("mouseover", function(d) {
                    if (id == 'mers' || id == 'miski_rada') {
                        var html = '<p style="font-size: 14px"><b>'+d.properties.city+', '+d.properties.region+'</b></p><p>Результати: </p>'
                        var d_results = d.properties.results
                        var keys = Object.keys(d_results)
                        if ($.isEmptyObject(d_results) == false) {
                            var results = ''
                            if (id == 'mers') {
                                keys.forEach(function(k,i) {
                                    if (i == 0) {
                                        if (parseFloat(d_results[k].percent) != parseFloat(d_results[String(i+2)].percent)) {
                                            results += '<p><b>'+d_results[k].name+'</b> (' +d_results[k].party+'): '+d_results[k].percent +'%</p>'
                                        } else{
                                            results += '<p>'+d_results[k].name+' ('+d_results[k].party+'): '+d_results[k].percent +'%</p>'
                                        }
                                    } else if (i < 3) {
                                        results += '<p>'+d_results[k].name+' ('+d_results[k].party+'): '+d_results[k].percent +'%</p>'
                                    }
                                })  
                            } else {
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
                        }
                        tooltipBee.html(html)
                        tooltipBee.style("visibility", "visible")
                    } else {
                        var d_results = d.results
                    
                        if ($.isEmptyObject(d_results) == false) {
                            var keys = Object.keys(d_results)
                            var results = '<table>'
                            keys.forEach(function(k) {
                                if (d_results[k].places == 1) {
                                    var place_text = ' місце'
                                } else if (d_results[k].places > 1 && d_results[k].places < 5) {
                                    var place_text = ' місця'
                                } else if (d_results[k].places >= 5) {
                                    var place_text = ' місць'
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
                if (width == 900) {
                    if (id == 'mers' || id == 'miski_rada') {
                        if (json.length < 100 && i % 2 == 1) {
                            return d.properties.city;
                        } else if (json.length >= 100 && i % 4 == 1) {
                            return d.properties.city;
                        }
                    } else if (width > 900) {
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
                return geoPath.centroid(d)[1]+15;
            })
            .attr("text-anchor","middle")
            .attr('font-family','Circe')
            .attr('fill','black')
            .attr('font-size','10px');
}
makeMiskiMap('mers',window.innerWidth)
makeMiskiMap('oblasni',window.innerWidth)
makeMiskiMap('miski_rada',window.innerWidth)
makeTable(oblasni, 0) 
if (rayon== null) {
    var rayon = getData('rayon');
}
makeTable(rayon, 1) 
makeTable(mers, 2) 
makeTable(miski_rada, 3) 
if (window.innerWidth > 800) {
    if (rayon== null) {
        var rayon = getData('rayon');
    }
    makeMiskiMap('rayon',window.innerWidth)
}
window.onresize = function(event) {
    makeMiskiMap('mers',window.innerWidth)
    makeMiskiMap('oblasni',window.innerWidth)
    makeMiskiMap('miski_rada',window.innerWidth)
    if (window.innerWidth > 800) {
        if (rayon== null) {
            var rayon = getData('rayon');
        }
        makeMiskiMap('rayon',window.innerWidth)
    }
};
$(document).ready(function(){
    $('#tablebutton0').on('click',function(){   
        $('.tablerow0').toggle();
        $('#tablebutton0').css('display','none')
    });
    $('#tablebutton1').on('click',function(){   
        $('.tablerow1').toggle();
        $('#tablebutton1').css('display','none')
    });
    $('#tablebutton2').on('click',function(){   
        $('.tablerow2').toggle();
        $('#tablebutton2').css('display','none')
    });
    $('#tablebutton3').on('click',function(){   
        $('.tablerow3').toggle();
        $('#tablebutton3').css('display','none')
    });

});