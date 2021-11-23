const graph = {
    "nodes": [
    {'id':1,'name': 'Легитимный','group': 1,'value': 3486,'reposted': "<p>Резидент: 359</p><p>Женщина с косой: 272</p><p>Картель: 169</p><p>ЗеРада: 125</p><p>Klymenko Time: 90</p>"},
  {'id':2,'name': 'Резидент','group': 1,'value': 2722,'reposted': "<p>Легитимный: 485</p><p>ЗеРада: 324</p><p>Сплетница: 213</p><p>Макс Бужанский: 154</p><p>Наблюдатель: 149</p>"},
  {'id':3,'name': 'Картель','group': 1,'value': 1423,'reposted': "<p>Легитимный: 216</p><p>Резидент: 80</p><p>Женщина с косой: 63</p><p>ЗеРада: 47</p><p>Наблюдатель: 47</p>"},
  {'id':4,'name': 'Сплетница','group': 1,'value': 2007,'reposted': "<p>Резидент: 137</p><p>ЗеРада: 107</p><p>наглый: 47</p><p>Легитимный: 46</p><p>Наблюдатель: 36</p>"},
  {'id':5,'name': 'Чёрный Квартал','group': 1,'value': 435,'reposted': "<p>Легитимный live: 74</p><p>Шептун: 26</p><p>Легитимный: 25</p><p>Резидент: 24</p><p>Наблюдатель: 20</p>"},
  {'id':6,'name': 'Женщина с косой','group': 2,'value': 1051,'reposted': "<p>Легитимный: 318</p><p>Резидент: 91</p><p>Картель: 73</p><p>ЗеРада: 41</p><p>Наблюдатель: 38</p>"},
  {'id':7,'name': 'Наблюдатель','group': 2,'value': 2217,'reposted': "<p>Резидент: 359</p><p>Klymenko Time: 307</p><p>Шептун: 174</p><p>First: 168</p><p>ЗеРада: 97</p>"},
  {'id':8,'name': 'ЗеРада','group': 2,'value': 3392,'reposted': "<p>Резидент: 238</p><p>Наблюдатель: 143</p><p>Сплетница: 124</p><p>Легитимный: 115</p><p>Тень на плетень: 100</p>"},
  {'id':9,'name': 'First','group': 2,'value': 6262,'reposted': "<p>Резидент: 157</p><p>Наблюдатель: 124</p><p>Легитимный: 90</p><p>Картель: 38</p><p>Женщина с косой: 33</p>"},
  {'id':10,'name': 'Анатолий Шарий','group': 2,'value': 0,'reposted': "<p>Аналізовані канали репостнули його 119 раз</p>"},
  {'id':11,'name': 'ОЛЬГА ШАРИЙ','group': 2,'value': 0,'reposted': "<p>Аналізовані канали репостнули його 573 рази</p>"},
  {'id':12,'name': 'Klymenko Time','group': 2,'value': 0,'reposted': "<p>Аналізовані канали репостнули його 573 рази</p>"},
  {'id':13,'name': 'Шептун','group': 2,'value': 0,'reposted': "<p>Аналізовані канали репостнули його 369 раз</p>"},
  {'id':14,'name': 'НЕЗЫГАРЬ','group': 2,'value': 0,'reposted': "<p>Аналізовані канали репостнули його 25 раз</p>"},
  {'id':15,'name': 'Макс Бужанский','group': 2,'value': 0,'reposted': "<p>Аналізовані канали репостнули його 225 раз</p>"},
  {'id':16,'name': 'Тёмный Рыцарь','group': 2,'value': 0,'reposted': "<p>Аналізовані канали репостнули його 57 раз</p>"},
  {'id':17,'name': 'наглый','group': 2,'value': 0,'reposted': "<p>Аналізовані канали репостнули його 208 раз</p>"},
  {'id':18,'name': 'Тень на плетень','group': 2,'value': 0,'reposted': "<p>Аналізовані канали репостнули його 127 раз</p>"},
  {'id':19,'name': 'Легитимный live','group': 2,'value': 0,'reposted': "<p>Аналізовані канали репостнули його 153 рази</p>"},
  {'id':20,'name': '🏴‍☠️Бунтарь','group': 2,'value': 0,'reposted': "<p>Аналізовані канали репостнули його 74 раз</p>"},
  {'id':21,'name': 'MediaKiller','group': 2,'value': 0,'reposted': "<p>Аналізовані канали репостнули його 35 раз</p>"},
  {'id':22,'name': 'Скептик','group': 2,'value': 0,'reposted': "<p>Аналізовані канали репостнули його 13 раз</p>"},
  {'id':23,'name': 'Криоген','group': 2,'value': 0,'reposted': "<p>Аналізовані канали репостнули його 20 раз</p>"},
  {'id':24,'name': 'Одесский фраер','group': 2,'value': 0,'reposted': "<p>Аналізовані канали репостнули його 12 раз</p>"},
  {'id':25,'name': 'Киев Власть','group': 2,'value': 0,'reposted': "<p>Аналізовані канали репостнули його 21 раз</p>"},
  {'id':26,'name': 'UKRMedia','group': 2,'value': 0,'reposted': "<p>Аналізовані канали репостнули його 87 раз</p>"},
  {'id':27,'name': 'Киевский Кейс','group': 2,'value': 0,'reposted': "<p>Аналізовані канали репостнули його 39 раз</p>"},
  {'id':28,'name': 'PavlovskyNews','group': 2,'value': 0,'reposted': "<p>Аналізовані канали репостнули його 69 раз</p>"},
  {'id':29,'name': 'цибуля','group': 2,'value': 0,'reposted': "<p>Аналізовані канали репостнули його 30 раз</p>"}
    ],
    "links": [
    {'source': 4, 'target': 22, 'value': 13},
  {'source': 4, 'target': 8, 'value': 107},
  {'source': 4, 'target': 9, 'value': 22},
  {'source': 4, 'target': 1, 'value': 46},
  {'source': 4, 'target': 20, 'value': 11},
  {'source': 4, 'target': 17, 'value': 47},
  {'source': 4, 'target': 21, 'value': 30},
  {'source': 4, 'target': 12, 'value': 9},
  {'source': 4, 'target': 3, 'value': 31},
  {'source': 4, 'target': 11, 'value': 20},
  {'source': 4, 'target': 2, 'value': 137},
  {'source': 4, 'target': 10, 'value': 25},
  {'source': 4, 'target': 13, 'value': 32},
  {'source': 4, 'target': 7, 'value': 36},
  {'source': 6, 'target': 12, 'value': 23},
  {'source': 6, 'target': 7, 'value': 38},
  {'source': 6, 'target': 11, 'value': 11},
  {'source': 6, 'target': 3, 'value': 73},
  {'source': 6, 'target': 2, 'value': 91},
  {'source': 6, 'target': 19, 'value': 24},
  {'source': 6, 'target': 25, 'value': 11},
  {'source': 6, 'target': 8, 'value': 41},
  {'source': 6, 'target': 24, 'value': 12},
  {'source': 6, 'target': 4, 'value': 19},
  {'source': 6, 'target': 13, 'value': 6},
  {'source': 6, 'target': 9, 'value': 5},
  {'source': 6, 'target': 1, 'value': 318},
  {'source': 6, 'target': 23, 'value': 7},
  {'source': 2, 'target': 10, 'value': 73},
  {'source': 2, 'target': 18, 'value': 27},
  {'source': 2, 'target': 16, 'value': 57},
  {'source': 2, 'target': 17, 'value': 56},
  {'source': 2, 'target': 5, 'value': 37},
  {'source': 2, 'target': 1, 'value': 485},
  {'source': 2, 'target': 7, 'value': 149},
  {'source': 2, 'target': 12, 'value': 110},
  {'source': 2, 'target': 3, 'value': 111},
  {'source': 2, 'target': 6, 'value': 122},
  {'source': 2, 'target': 8, 'value': 324},
  {'source': 2, 'target': 4, 'value': 213},
  {'source': 2, 'target': 15, 'value': 154},
  {'source': 7, 'target': 29, 'value': 30},
  {'source': 7, 'target': 2, 'value': 359},
  {'source': 7, 'target': 27, 'value': 20},
  {'source': 7, 'target': 12, 'value': 307},
  {'source': 7, 'target': 13, 'value': 174},
  {'source': 7, 'target': 9, 'value': 168},
  {'source': 7, 'target': 26, 'value': 87},
  {'source': 7, 'target': 8, 'value': 97},
  {'source': 7, 'target': 4, 'value': 58},
  {'source': 7, 'target': 19, 'value': 23},
  {'source': 7, 'target': 28, 'value': 69},
  {'source': 7, 'target': 3, 'value': 18},
  {'source': 7, 'target': 20, 'value': 31},
  {'source': 7, 'target': 1, 'value': 97},
  {'source': 1, 'target': 11, 'value': 35},
  {'source': 1, 'target': 2, 'value': 359},
  {'source': 1, 'target': 13, 'value': 80},
  {'source': 1, 'target': 4, 'value': 54},
  {'source': 1, 'target': 10, 'value': 55},
  {'source': 1, 'target': 7, 'value': 60},
  {'source': 1, 'target': 9, 'value': 18},
  {'source': 1, 'target': 15, 'value': 18},
  {'source': 1, 'target': 12, 'value': 90},
  {'source': 1, 'target': 8, 'value': 125},
  {'source': 1, 'target': 3, 'value': 169},
  {'source': 1, 'target': 6, 'value': 272},
  {'source': 1, 'target': 14, 'value': 25},
  {'source': 9, 'target': 20, 'value': 20},
  {'source': 9, 'target': 27, 'value': 19},
  {'source': 9, 'target': 4, 'value': 23},
  {'source': 9, 'target': 25, 'value': 10},
  {'source': 9, 'target': 5, 'value': 6},
  {'source': 9, 'target': 3, 'value': 38},
  {'source': 9, 'target': 13, 'value': 30},
  {'source': 9, 'target': 2, 'value': 157},
  {'source': 9, 'target': 6, 'value': 33},
  {'source': 9, 'target': 8, 'value': 33},
  {'source': 9, 'target': 7, 'value': 124},
  {'source': 9, 'target': 1, 'value': 90},
  {'source': 5, 'target': 19, 'value': 74},
  {'source': 5, 'target': 7, 'value': 20},
  {'source': 5, 'target': 13, 'value': 26},
  {'source': 5, 'target': 23, 'value': 13},
  {'source': 5, 'target': 4, 'value': 18},
  {'source': 5, 'target': 3, 'value': 12},
  {'source': 5, 'target': 9, 'value': 12},
  {'source': 5, 'target': 17, 'value': 18},
  {'source': 5, 'target': 8, 'value': 15},
  {'source': 5, 'target': 2, 'value': 24},
  {'source': 5, 'target': 1, 'value': 25},
  {'source': 8, 'target': 18, 'value': 100},
  {'source': 8, 'target': 4, 'value': 124},
  {'source': 8, 'target': 17, 'value': 87},
  {'source': 8, 'target': 7, 'value': 143},
  {'source': 8, 'target': 2, 'value': 238},
  {'source': 8, 'target': 10, 'value': 81},
  {'source': 8, 'target': 1, 'value': 115},
  {'source': 8, 'target': 5, 'value': 28},
  {'source': 8, 'target': 13, 'value': 21},
  {'source': 8, 'target': 12, 'value': 29},
  {'source': 8, 'target': 11, 'value': 53},
  {'source': 8, 'target': 15, 'value': 53},
  {'source': 8, 'target': 9, 'value': 72},
  {'source': 3, 'target': 9, 'value': 33},
  {'source': 3, 'target': 21, 'value': 5},
  {'source': 3, 'target': 12, 'value': 5},
  {'source': 3, 'target': 1, 'value': 216},
  {'source': 3, 'target': 19, 'value': 32},
  {'source': 3, 'target': 2, 'value': 80},
  {'source': 3, 'target': 4, 'value': 44},
  {'source': 3, 'target': 8, 'value': 47},
  {'source': 3, 'target': 7, 'value': 47},
  {'source': 3, 'target': 10, 'value': 19},
  {'source': 3, 'target': 6, 'value': 63},
  {'source': 3, 'target': 20, 'value': 12},
  {'source': 3, 'target': 5, 'value': 4}
    ]
  }
    
    
  function run(w) {
    if (w < 600) {
      var width = w-20
      var mobiledistanse = width/1.7;
      strengthMobile = -500
    } else{
      width = 600
      strengthMobile = -1200
      var mobiledistanse = width/1.7;
    }
    var height = 600
    
    d3.select("#bee1").html('')
    var svg = d3.select("#bee1")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
    svg.append("text")
          .attr("x", 10) 
          .attr("y", 30)
          .attr("text-anchor", "start")  
          .style("font-size", '18px')
          .style("font-family", "sans-serif")
          .style("font-weight", "bold")
          .text("Карта зв'язків викритих каналів");
      svg.append("text")
          .attr("x", 10 ) 
          .attr("y", 55)
          .attr("text-anchor", "start")  
          .style("font-size", '11px')
          .style("font-family", "sans-serif")
          .style("fill", "#bdbdbd")
          .text('Розмір кола – кількість репостів записів каналу');
        svg.append("text")
          .attr("x", 10 ) 
          .attr("y", height - 10)
          .attr("text-anchor", "start")  
          .style("font-size", '10px')
          .style("font-family", "sans-serif")
          .style("fill", "#bdbdbd")
          .text('Дані: 1 лютого - 18 листопада');
          var legendX = height - 60
          var legendY = legendX + 20
          svg.append("circle").attr("cx",15).attr("cy",legendX).attr("r", 6).style("fill", "#42a5f5")
          svg.append("circle").attr("cx",15).attr("cy",legendY).attr("r", 6).style("fill", "#ffab91")
          svg.append("text").attr("x", 25).attr("y", legendX+5).text("Канали зі списку СБУ").style("font-size", "14px").attr("alignment-baseline","left")
          svg.append("text").attr("x", 25).attr("y", legendY+5).text("Інші").style("font-size", "14px").attr("alignment-baseline","left")
  
      var color = d3.scaleOrdinal()
      .domain([1,20,50,100,200,328])
      .range(['#f7f7f7','#d9d9d9','#bdbdbd','#969696','#636363','#252525']);
      var colorGroup = d3.scaleOrdinal()
      .domain([1,2])
      .range(["#42a5f5",'#ffab91']);
      var radius = d3.scaleSqrt()
      .domain([0,315,1115,3344,6783,12891])
      .range([ 10, 15]);
      var textRadius = d3.scaleSqrt()
      .domain([0,315,1115,3344,6783,12891])
      .range([ 9, 11]);
    var link = svg.append("g")
      .selectAll("line")
      .data(graph.links)
      .enter()
      .append("path")
      .style("stroke", "#e0e0e0")
      .attr("fill", "none");
  
  var tooltip1 = d3.select("body")
      .append("div")
      .style("position", "absolute")
      .style("z-index", "10")
      .style("visibility", "hidden")
      .style("padding", "14px")
      .style("background-color", "#f5f5f5")
      .style("color", "black")
      .style('width', '250px')
      .style("border-radius", "6px")
      .style("border-color", "black")
      .style("font", "12px sans-serif")
      .text("tooltip");
  
      
  var simulation1 = d3.forceSimulation()
      .force("link", d3.forceLink().id(function(d) { return d.id; }))
      .force('charge', d3.forceManyBody()
        .strength(strengthMobile)
        .theta(0.2)
        .distanceMax(mobiledistanse)
      )
      .force("center", d3.forceCenter(width/2, height/2));
  
    var node = svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(graph.nodes)
      .enter().append("circle")
      .style("fill", function(d){return colorGroup(d.group)})
      .on("mouseover", function(d) {
          if (d.value == 0) {
            tooltip1.html("<h3>"+d.name+"</h3>"+d.reposted);
          } else {
            tooltip1.html("<h3>"+d.name+"</h3><p><b>Скільки разів репостили</b>: "+d.value+"</p><p><b>Кого репостив канал: </b>"+d.reposted);
          }
          
          tooltip1.style("visibility", "visible");
      })
      .on("mousemove", function() {
          return tooltip1.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
      })
      .on("mouseout", function(){return tooltip1.style("visibility", "hidden");});
      var label = svg.append("g")
        .attr("class", "labels")
        .selectAll("text")
        .data(graph.nodes)
        .enter().append("text")
        .attr("font-size", function(d) {return textRadius(d.value)})
        .attr('font-family','sans-serif')
        .attr("class", "label").text(function(d) { if(d.group != 10) {return d.name; }});
    
    
  
    simulation1
        .nodes(graph.nodes)
        .on("tick", ticked);
  
    simulation1.force("link")
        .links(graph.links);
  
        function positionLink(d) {
          var dx = d.target.x - d.source.x,
          dy = d.target.y - d.source.y,
          dr = Math.sqrt(dx * dx + dy * dy);
      return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
      }
    function ticked() {
      link
          .attr("d", positionLink)
  
      node
          .attr("r", function(d) {return radius(d.value)})
           .attr("cx", function (d) { return d.x; })
           .attr("cy", function(d) { return d.y; });
      label
          .attr("x", function (d) {return d.x-(this.getComputedTextLength()/2)})
          .attr("y", function(d) { return d.y; });
    }
  }
  
          run(window.innerWidth);
          window.onresize = function(event) {
              run(window.innerWidth);
          };