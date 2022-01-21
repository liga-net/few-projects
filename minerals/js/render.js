const range = (start, stop, step = 1) =>
        Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)
function makeDomain(min, max, step) {
    return range(min, max, step)
}
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
function bubbleChart(w) {
    if (w < 600) {
        var diameter = w-10;
        var fontSize = '14px'
    } else {
        var diameter = 600;
        var fontSize = '16px'
    }
    
    var keys = [
    'Держава',
    'Ахметов Рінат Леонідович',
    'БОРДО МЕНЕДЖМЕНТ ЛІМІТЕД, БРІДЖМОНТ ВЕНЧЕРЗ ЛІМІТЕД, Держава, ЛІТТОП ЕНТЕРПРАЙЗЕС ЛІМІТЕД',
    'Злочевська Анна Миколаївна, Злочевська Каріна Миколаївна',
    'Minerfin a.s. н/д, АТ "КСК Консалтінг" (KSK Consulting a.s.) н/д, ПАТ "ЗАПОРІЗЬКИЙ МЕТАЛУРГІЙНИЙ КОМБІНАТ "ЗАПОРІЖСТАЛЬ"',
    'Новинський Вадим Владиславович',
    'Arcelor Mittal Duisburh Gmph',
    'Ferrexpo Plc (Великобританія)',
    'DERIPON COMMERCIAL LTD, JKX Ukraine B.V., АРЕС СИСТЕМС ЛТД., АРІАНА БІЗНЕС ЛІМІТЕД, ДЕРІПОН КОММЕРШАЛ ЛТД',
    'Інші'
    ]
    var keysRu = [
        'Государство',
        'Ахметов Ринат Леонидович',
        'БОРДО МЕНЕДЖМЕНТ ЛИМИТЕД, БРИДЖМОНТ ВЕНЧЕРЗ ЛИМИТЕД, Государство, ЛИТТОП ЭНТЕРПРАЙЗЕС ЛИМИТЕД',
        'Злочевская Анна Николаевна, Злочевская Карина Николаевна',
        'Minerfin a.s. н/д, АО "КСК Консалтинг" (KSK Consulting a.s.) н/д, ПАО "ЗАПОРОЖСКИЙ МЕТАЛЛУРГИЧЕСКИЙ КОМБИНАТ "ЗАПОРОЖСТАЛЬ"',
        'Новинский Вадим Владиславович',
        'Arcelor Mittal Duisburh Gmph',
        'Ferrexpo Plc (Великобритания)',
        'DERIPON COMMERCIAL LTD, JKX Ukraine B.V., АРЕС СИСТЕМС ЛТД., АРИАНА БИЗНЕС ЛИМИТЕД, ДЕРИПОН КОММЕРШАЛ ЛТД',
        'Другие'
    ]
    
    var colorPalette = ['#1192e8','#da1e28','#33b1ff', '#fa4d56', '#82cfff', '#ff8389', '#bae6ff', '#ffb3b8', '#e5f6ff','#bdbdbd']
    var color = d3.scaleOrdinal()
        .domain(keys)
        .range(colorPalette)

    var bubble = d3.pack(dataset)
        .size([diameter, diameter])
        .padding(1.5);
    
    d3.select("#bubble_chart").html('')
    var svg = d3.select("#bubble_chart")
        .append("svg")
        .attr("width", diameter)
        .attr("height", diameter)
        .attr("class", "bubble");
    svg.append("text")
        .attr("x", (diameter / 2) ) 
        .attr("y", 20)
        .attr("text-anchor", "middle")  
        .style("font-size", fontSize)
        .style("font-family", "sans-serif")
        .text('Крупнейшие плательщики ренты за пользование недрами');
    var nodes = d3.hierarchy(dataset)
        .sum(function(d) { return d.rentTax; });
    var g = svg.append('g').attr('transform',"translate(0,30)")
    var node = g.selectAll(".node")
        .data(bubble(nodes).descendants())
        .enter()
        .filter(function(d){
            return  !d.children
        })
        .append("g")
        .attr("class", "node")
        .attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
        });
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
    var points2 = d3.format(".3n")
    function okruglit(value) {
        var length = String(value).length
        if (length > 9) {
            var returnValue = points2(value / 1000000000) +" млрд"
        } else {
            var returnValue = points2(value / 1000000) + ' млн'
        }
        return returnValue
    }
    node.append("circle")
        .attr("r", function(d) {
            return d.r;
        })
        .style("fill", function(d,i) {
            return color(d.data.type);
        })
        .on("mouseover", function(d) {
            var rent = okruglit(d.data.rentTax)
            var ben = d.data.beneficiary
            if (ben.includes(',')) {
                var ben_html = '<h4>Бенефициары: </h4>'
                var splited = ben.split(', ')
                splited.forEach(function(value) {
                    ben_html += '<p>'+value+'</p>'
                })
            } else {
                var ben_html = '<h4>'+d.data.beneficiary+'</h4>'
            }
            
            var html = ben_html+'<p><b>Уплаченной ренты:</b> '+rent+' грн</p><p><b>Количество месторождений: </b>'+d.data.rod_count+'</p>'
            tooltipBee.html(html)
            tooltipBee.style("visibility", "visible")
            })
        .on("mousemove", function() {
            return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
        })
        .on("mouseout", function(d){
            return tooltipBee.style("visibility", "hidden");
        });

    node.append("text")
        .attr("dy", ".2em")
        .style("text-anchor", "middle")
        .text(function(d) {
            var size = d.r/8
            if (size > 3) {
                var ben = d.data.beneficiary
                if (keys.includes(ben)) {
                    var index = keys.indexOf(ben)
                    return keysRu[index].substring(0, d.r / 3);
                }
            }
            
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", function(d){
            var size = d.r/8
            if (size > 5) {
                return size ;
            } else {
                return size + 3;
            }
        })
        .attr("fill", "white");
}

function getData(id){
    var value = $.ajax({ 
        url: id, 
        async: false
    }).responseJSON;
    return value;
}

width = getWidth(d3.select('#graph').node().offsetWidth),
height = getHeight(d3.select('#graph').node().offsetWidth)
function getWidth(w) {
    if (w < 800) {
        return w-10
    } else {
        return 800
    }
}
function getHeight(w) {
    if (w < 800) {
        return 480
    } else {
        return 600
    }
}
function getProjection(width,height) {
    if (width < 800) {var scale = 980} else {var scale = 2450}
    return d3.geoMercator()
    .scale(scale)
    .rotate([-30.02,0])
    .center([0, 49.9])
    .translate([width/2.2,height/3]);
}
function drawMap(g,projection) {
    return g.selectAll("path")
    .data(ukraine)
    .enter()
    .append("path")
    .attr("fill", "#fafafa")
    .attr("stroke", "#9e9e9e")
    .attr("stroke-width", "0.5px")
    .attr("d", d3.geoPath().projection(projection) )
    .attr("class", "district");
}
function getRadius(width,id) {
    if (width < 1200 || id == 2) {var radiusMaxValue = 4} else {var radiusMaxValue = 8}
    if (id == 3) {
        var values = export_json.map(d=>d.pop)
    } else {
        var values = export_json.map(d => d.per1000)
    }
    return d3.scaleLinear()
        .domain([d3.min(values), d3.max(values)])
        .range([3,radiusMaxValue]) 
}
function showColor(value) {
    var list = colorId.filter(d => d.id == value)
    if (list.length > 0) {
        return list[0].col
    }
    
}
var legendInfo = [{'col': '#99d2f2', 'id': 1, 'label': 'Газ, нефть, конденсат'},
{'col': '#c47166', 'id': 2, 'label': 'Руды черных металлов'},
{'col': '#9e9e9e', 'id': 3, 'label': 'Уголь и торф'},
{'col': '#d1bcd2', 'id': 5, 'label': 'Драгоценные камни (янтарь)'},
{'col': '#43a2ca', 'id': 9, 'label': 'Вода подземная'},
{'col': '#D7AD6F', 'id': 13, 'label': 'Нерудные ископаемые для строительства'},
{'col': '#f6a1ad', 'id': 15, 'label': 'Золото та драгоценные металы'},
{'col': '#f5b5c8', 'id': 17, 'label': 'Уран'}]
function drawPaths(projection,id,tooltipBee,svg) {
    var keys = legendInfo.map(x => x.label)
    var colorPalette = legendInfo.map(x => x.col)
     var color = d3.scaleOrdinal()
      .domain(keys)
      .range(colorPalette);
    
    var size = 10
    svg.selectAll("mydots")
      .data(keys)
      .enter()
      .append("rect")
        .attr("x", 50)
        .attr("y", function(d,i){ return 350 + i*(size+10)}) 
        .attr("width", size)
        .attr("height", size)
        .style("fill", function(d){ return color(d)})
    
    svg.selectAll("mylabels")
      .data(keys)
      .enter()
      .append("text")
        .attr("x", 50 + size*1.3)
        .attr("y", function(d,i){ return 355 + i*(size+10) + (size/2)}) 
        .style("fill", 'black')
        .text(function(d){ return d})
        .attr("text-anchor", "left")
        .attr("font-size", "12px")
        .attr("font-family", "sans-serif")
        
    var cities_mer = svg.append("g").attr('class','cities_mer');

    var path = d3.geoPath()
        .projection(projection);
    
    appendPath('other')
    appendPath('voda')
    function appendPath(filterValue) {
        if (width < 600) {
            var radiusSize = 2
        } else {
            var radiusSize = 4
        }
        if (filterValue == 'voda') {
            var projection = getProjection(width,height)
            var inputData = export_json.filter(x => x.color == 9 || x.color == 18)
            var paths = cities_mer.selectAll('circle')
                .data(inputData)
                .enter()
                .append('circle')
                .attr("cx", function(d){ 
                    var pro = projection([d.geometry.coordinates[0][0], d.geometry.coordinates[0][1]])[0] 
                    if (isNaN(pro) == false) {
                        return pro
                    }
                })
                .attr("cy", function(d){ 
                    var pro = projection([d.geometry.coordinates[0][0], d.geometry.coordinates[0][1]])[1] 
                    if (isNaN(pro) == false) {
                        return pro
                    }
                })
                .attr("r", function(d) {
                    var pro = projection([d.geometry.coordinates[0][0], d.geometry.coordinates[0][1]])[0] 
                    if (isNaN(pro) == false) {
                        return radiusSize
                    } else {
                        return 0
                    }
                })
        } else {
            var inputData = export_json.filter(x => x.color != 9 && x.color != 18)
            var paths = cities_mer.selectAll('path')
                .data(inputData)
                .enter()
                .append('path')
                .attr('d', path)
        }
        
        paths
            .attr('class',function(d) {
                return 'field id'+String(d.color)+" d"+String(d.dob)
            })
            .attr('fill',function(d) {return showColor(d.color)})
            .attr('stroke-width',function (d) {
                var square = d3.polygonArea(d.geometry.coordinates[0])
                if (square < 0.03) {
                    return '3'
                } else {
                    return '.5'
                }
            })
            .attr('stroke',function (d) {
                var square = d3.polygonArea(d.geometry.coordinates[0])
                if (square < 0.03) {
                    return showColor(d.color)
                } else {
                    return 'white'
                }
            })
            .on("mouseover", function(d) {
                var item = details.filter(x => x.id == d.id)[0]
                var this_item_style = this.getAttribute('style')
                if (this_item_style == null || this_item_style == 'opacity: 1;') {
                    tooltipBee.html(
                        '<h4>'+item.name+'</h4>'+
                        '<p>'+item.reg+' область</p>'+
                        '<p>Бенефициар: '+item.ben+'</p>'+
                        '<p>Ископаемое: '+item.mineral+'</p>'
                        )
                    tooltipBee.style("visibility", "visible")
                }
                
            })
            .on("mousemove", function() {
                return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
            })
            .on("mouseout", function(d){
                return tooltipBee.style("visibility", "hidden");
            });
    }   
}

function drawCircles(projection,tooltipBee) {
    var svg = d3.select(".container-2 #graph1 svg")
    var cities_mer = svg.append("g").attr('class','cities_mer');
    if (width < 600) {
        var min = 1
        var max = 10
        var stroke_width = ".2px"
    } else {
        var min = 2
        var max = 20
        var stroke_width = ".5px"
    }
    var radius = d3.scaleLinear()
        .domain([0, 1969071414])
        .range([min,max]) 
    cities_mer.selectAll(".container-2 circle")
        .data(com_renta)
        .enter()
        .append("circle")
        .attr("fill", '#f1c21b')
        .attr("stroke-width", stroke_width)
        .attr("stroke", "#684e00")
        .attr("r", function(d) {return radius(d.renta)})
        .attr("cx", function(d){ 
            return projection([d.geometry.coordinates[0], d.geometry.coordinates[1]])[0] 
        })
        .attr("cy", function(d){ return projection([d.geometry.coordinates[0], d.geometry.coordinates[1]])[1] })
        .attr("class", "dot")
        .on("mouseover", function(d) {
            var name = d.name.replace('_1',' селищна громада').replace('_2',' міська громада').replace('_3',' сільська громада')
            tooltipBee.html(
                '<h4>'+name+', '+d.region+' область</h4>'+
                '<p>Количество разрешений: '+d.permission+'</p>'+
                '<p>Количество пользователей недр: '+d.allCompanies+'</p>'+
                '<p>Разработанных месторождений: '+d.fields+'</p>'+
                '<p>Уплаченой ренты: '+numberWithSpaces(d.renta)+' грн</p>'+
                '<p>Ренты на одного жителя: '+numberWithSpaces(parseInt(d.renta_per_pers))+' грн</p>'
                )
            tooltipBee.style("visibility", "visible")
        })
        .on("mousemove", function() {
            return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
        })
        .on("mouseout", function(d){
            return tooltipBee.style("visibility", "hidden");
        });
    var showTextCities = ['Краснокутська_1','Криворізька_2','Сколівська_2',"Рожнятівська_1","Донецька_1","Мачухівська_1","Сенчанська_3","Талалаївська_1"]
    cities_mer.selectAll(".container-2 text")
        .data(com_renta)
        .enter()
        .append('text')
        .text(function(d,i){
            if (showTextCities.includes(d.name)) {
                return d.name.replace('_1',' с.г.').replace('_2',' м.г.').replace('_3',' с.г.')
            }
            
        })
        .attr("y", function(d,i) { 
            if (showTextCities.includes(d.name)) {
            return projection([d.geometry.coordinates[0], d.geometry.coordinates[1]])[1]  }})
        .attr("x", function(d,i) { 
            if (showTextCities.includes(d.name)) {return projection([d.geometry.coordinates[0], d.geometry.coordinates[1]])[0] }
        })
        .attr("text-anchor","middle")
        .attr('font-family','Arial')
        .attr('fill','black')
        .attr('font-size','8px');
    
}
function mapZooming(id,zoom) {
    if (id == 1) {
        var city = [30.02,50],
            delta_height = 3,
            svgScale = 1
    } else if (id == 2) {
        var city = [35.0775939,50.0559554],
            delta_height = 3
            svgScale = 2.5
    } else if (id == 3) {
        if (width < 600) {
            var delta_height = 2
        } else {
            delta_height = 3
        }
        var city = [33.0863315,47.9074811],
            svgScale = 2.5
    }
    function transform(x,y,scale) {
        return d3.zoomIdentity
            .translate(width/2.2, height / delta_height)
            .scale(scale) 
            .translate(-x,-y);
        
    }
    var projection = getProjection(width,height)
    var coordinates = projection(city);
    
    var svg = d3.select(".container-2 #graph1 svg .ukraine_map2")
    svg.transition()
        .delay(50)
        .duration(1000)
        .call(zoom.transform, transform(coordinates[0],coordinates[1],svgScale))
    
}