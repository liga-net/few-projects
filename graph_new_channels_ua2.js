var color1 = d3.scaleOrdinal(["#f9a825", '#c0c015',"#37474f",'#1565c0', '#4527a0']);

const graph = {
    "nodes": [{'id': 1,
    'name': 'First',
    'group': 1,
    'value': 712,
    'reposted': '<p><b>Хто репостив: </b></p><p>Резидент: 137</p><p>Наблюдатель: 114</p><p>Легитимный: 81</p><p>Картель: 34</p><p>ЗеРада: 29</p>'},
   {'id': 2,
    'name': 'Криоген',
    'group': 1,
    'value': 346,
    'reposted': '<p><b>Хто репостив: </b></p><p>First: 197</p><p>Резидент: 56</p><p>Наблюдатель: 24</p>'},
   {'id': 3,
    'name': 'Скептик',
    'group': 1,
    'value': 994,
    'reposted': '<p><b>Хто репостив: </b></p><p>First: 544</p><p>Резидент: 158</p><p>Наблюдатель: 61</p><p>Легитимный: 48</p>'},
   {'id': 4,
    'name': 'Наблюдатель',
    'group': 1,
    'value': 2230,
    'reposted': '<p><b>Хто репостив: </b></p><p>Резидент: 294</p><p>Klymenko Time: 289</p><p>First: 174</p><p>Шептун: 121</p><p>UKRMedia: 87</p>'},
   {'id': 5,
    'name': 'MediaKiller',
    'group': 1,
    'value': 148,
    'reposted': '<p><b>Хто репостив: </b></p><p>Резидент: 20</p><p>WASH: 10</p><p>Легитимный: 10</p>'},
   {'id': 6,
    'name': 'WASH',
    'group': 1,
    'value': 634,
    'reposted': '<p><b>Хто репостив: </b></p><p>Резидент: 94</p><p>Легитимный: 53</p><p>Секретов.НЕТ: 36</p><p>nan: 31</p><p>Шептун: 26</p>'},
   {'id': 7,
    'name': '🏴\u200d☠️Бунтарь',
    'group': 1,
    'value': 67,
    'reposted': '<p><b>Хто репостив: </b></p><p>⚖️Справедливость: 10</p>'},
   {'id': 8,
    'name': 'Резидент',
    'group': 3,
    'value': 1,
    'reposted': '<p><b>Хто репостив: </b></p><p>Наблюдатель: 294</p><p>Скептик: 158</p><p>First: 137</p><p>WASH: 94</p>'},
   {'id': 9,
    'name': 'Киевский Кейс',
    'group': 2,
    'value': 1,
    'reposted': '<p><b>Хто репостив: </b></p><p>Наблюдатель: 20</p><p>First: 19</p>'},
   {'id': 10,
    'name': 'Легитимный',
    'group': 3,
    'value': 1,
    'reposted': '<p><b>Хто репостив: </b></p><p>First: 81</p><p>Наблюдатель: 65</p><p>WASH: 53</p><p>Скептик: 48</p>'},
   {'id': 11,
    'name': 'ЗеРада',
    'group': 2,
    'value': 1,
    'reposted': '<p><b>Хто репостив: </b></p><p>Наблюдатель: 72</p><p>First: 29</p><p>WASH: 23</p><p>Скептик: 13</p>'},
   {'id': 12,
    'name': 'Киев Власть',
    'group': 2,
    'value': 1,
    'reposted': '<p><b>Хто репостив: </b></p><p>Наблюдатель: 12</p><p>First: 10</p>'},
   {'id': 13,
    'name': 'Сплетница',
    'group': 3,
    'value': 1,
    'reposted': '<p><b>Хто репостив: </b></p><p>Наблюдатель: 37</p><p>First: 16</p><p>Скептик: 13</p>'},
   {'id': 14,
    'name': 'Шептун',
    'group': 2,
    'value': 1,
    'reposted': '<p><b>Хто репостив: </b></p><p>Наблюдатель: 121</p><p>WASH: 26</p><p>First: 22</p>'},
   {'id': 15,
    'name': 'Картель',
    'group': 3,
    'value': 1,
    'reposted': '<p><b>Хто репостив: </b></p><p>First: 34</p><p>Наблюдатель: 22</p>'},
   {'id': 16,
    'name': 'Женщина с косой',
    'group': 2,
    'value': 1,
    'reposted': '<p><b>Хто репостив: </b></p><p>First: 29</p><p>Наблюдатель: 27</p>'},
   {'id': 17,
    'name': 'Одесский фраер',
    'group': 2,
    'value': 1,
    'reposted': '<p><b>Хто репостив: </b></p><p>Наблюдатель: 26</p>'},
   {'id': 18,
    'name': 'Тень на плетень',
    'group': 2,
    'value': 1,
    'reposted': '<p><b>Хто репостив: </b></p><p>Наблюдатель: 10</p>'},
   {'id': 19,
    'name': 'Чёрный Квартал',
    'group': 3,
    'value': 1,
    'reposted': '<p><b>Хто репостив: </b></p><p>Скептик: 18</p><p>Наблюдатель: 14</p>'},
   {'id': 20,
    'name': 'Klymenko Time',
    'group': 2,
    'value': 1,
    'reposted': '<p><b>Хто репостив: </b></p><p>Наблюдатель: 289</p><p>WASH: 11</p>'},
   {'id': 21,
    'name': 'Легитимный live',
    'group': 2,
    'value': 1,
    'reposted': '<p><b>Хто репостив: </b></p><p>Наблюдатель: 23</p>'},
   {'id': 22,
    'name': 'UKRMedia',
    'group': 2,
    'value': 1,
    'reposted': '<p><b>Хто репостив: </b></p><p>Наблюдатель: 87</p>'},
   {'id': 23, 'name': 'ЗА ГРАНЬЮ', 'group': 2, 'value': 6, 'reposted': ''},
   {'id': 24,
    'name': 'наглый',
    'group': 2,
    'value': 1,
    'reposted': '<p><b>Хто репостив: </b></p><p>Наблюдатель: 16</p>'},
   {'id': 26,
    'name': 'Шарий.net',
    'group': 2,
    'value': 1,
    'reposted': '<p><b>Хто репостив: </b></p><p>Наблюдатель: 12</p>'},
   {'id': 28,
    'name': 'PavlovskyNews',
    'group': 2,
    'value': 1,
    'reposted': '<p><b>Хто репостив: </b></p><p>Наблюдатель: 69</p>'},
   {'id': 32,
    'name': 'Крокодил',
    'group': 2,
    'value': 1,
    'reposted': '<p><b>Хто репостив: </b></p><p>Наблюдатель: 28</p>'},
   {'id': 33,
    'name': 'Макс Бужанский',
    'group': 2,
    'value': 1,
    'reposted': '<p><b>Хто репостив: </b></p><p>Наблюдатель: 12</p>'},
   {'id': 39,
    'name': 'цибуля',
    'group': 2,
    'value': 1,
    'reposted': '<p><b>Хто репостив: </b></p><p>Наблюдатель: 30</p>'},
   {'id': 40,
    'name': 'Зрада чи Перемога',
    'group': 2,
    'value': 1,
    'reposted': '<p><b>Хто репостив: </b></p><p>Наблюдатель: 27</p>'},
   {'id': 41,
    'name': 'Инсайдер UA',
    'group': 2,
    'value': 1,
    'reposted': '<p><b>Хто репостив: </b></p><p>Наблюдатель: 18</p>'},
   {'id': 42,
    'name': 'VESTI',
    'group': 2,
    'value': 1,
    'reposted': '<p><b>Хто репостив: </b></p><p>Наблюдатель: 17</p>'},
   {'id': 43,
    'name': 'XUA',
    'group': 2,
    'value': 1,
    'reposted': '<p><b>Хто репостив: </b></p><p>Наблюдатель: 15</p>'},
   {'id': 44,
    'name': 'Заговорщик',
    'group': 2,
    'value': 1,
    'reposted': '<p><b>Хто репостив: </b></p><p>Наблюдатель: 11</p>'},
   {'id': 56,
    'name': 'Секретов.НЕТ',
    'group': 2,
    'value': 1,
    'reposted': '<p><b>Хто репостив: </b></p><p>WASH: 36</p>'},
   {'id': 57,
    'name': 'Разведчик',
    'group': 2,
    'value': 1,
    'reposted': '<p><b>Хто репостив: </b></p><p>WASH: 12</p>'},
   {'id': 58,
    'name': 'Тёмный Рыцарь',
    'group': 2,
    'value': 1,
    'reposted': '<p><b>Хто репостив: </b></p><p>WASH: 10</p>'},
   {'id': 64,
    'name': '⚖️Справедливость',
    'group': 2,
    'value': 1,
    'reposted': '<p><b>Хто репостив: </b></p><p>🏴\u200d☠️Бунтарь: 10</p>'}],
  "links": [{'source': 1, 'target': 8, 'value': 26},
  {'source': 1, 'target': 9, 'value': 19},
  {'source': 1, 'target': 10, 'value': 17},
  {'source': 1, 'target': 11, 'value': 11},
  {'source': 1, 'target': 4, 'value': 11},
  {'source': 1, 'target': 12, 'value': 10},
  {'source': 1, 'target': 8, 'value': 137},
  {'source': 1, 'target': 4, 'value': 114},
  {'source': 1, 'target': 10, 'value': 81},
  {'source': 1, 'target': 15, 'value': 34},
  {'source': 1, 'target': 11, 'value': 29},
  {'source': 1, 'target': 16, 'value': 29},
  {'source': 1, 'target': 14, 'value': 22},
  {'source': 1, 'target': 7, 'value': 20},
  {'source': 1, 'target': 13, 'value': 16},
  {'source': 1, 'target': 5, 'value': 12},
  {'source': 2, 'target': 8, 'value': 18},
  {'source': 2, 'target': 1, 'value': 197},
  {'source': 2, 'target': 8, 'value': 56},
  {'source': 2, 'target': 4, 'value': 24},
  {'source': 3, 'target': 8, 'value': 34},
  {'source': 3, 'target': 1, 'value': 24},
  {'source': 3, 'target': 10, 'value': 15},
  {'source': 3, 'target': 1, 'value': 544},
  {'source': 3, 'target': 8, 'value': 158},
  {'source': 3, 'target': 4, 'value': 61},
  {'source': 3, 'target': 10, 'value': 48},
  {'source': 3, 'target': 19, 'value': 18},
  {'source': 3, 'target': 11, 'value': 13},
  {'source': 3, 'target': 13, 'value': 13},
  {'source': 4, 'target': 22, 'value': 87},
  {'source': 4, 'target': 8, 'value': 86},
  {'source': 4, 'target': 14, 'value': 53},
  {'source': 4, 'target': 10, 'value': 38},
  {'source': 4, 'target': 11, 'value': 34},
  {'source': 4, 'target': 21, 'value': 23},
  {'source': 4, 'target': 13, 'value': 23},
  {'source': 4, 'target': 9, 'value': 20},
  {'source': 4, 'target': 15, 'value': 19},
  {'source': 4, 'target': 20, 'value': 18},
  {'source': 4, 'target': 1, 'value': 17},
  {'source': 4, 'target': 16, 'value': 15},
  {'source': 4, 'target': 19, 'value': 14},
  {'source': 4, 'target': 23, 'value': 14},
  {'source': 4, 'target': 17, 'value': 14},
  {'source': 4, 'target': 12, 'value': 12},
  {'source': 4, 'target': 8, 'value': 294},
  {'source': 4, 'target': 20, 'value': 289},
  {'source': 4, 'target': 1, 'value': 174},
  {'source': 4, 'target': 14, 'value': 121},
  {'source': 4, 'target': 11, 'value': 72},
  {'source': 4, 'target': 28, 'value': 69},
  {'source': 4, 'target': 10, 'value': 65},
  {'source': 4, 'target': 13, 'value': 37},
  {'source': 4, 'target': 7, 'value': 31},
  {'source': 4, 'target': 39, 'value': 30},
  {'source': 4, 'target': 32, 'value': 28},
  {'source': 4, 'target': 16, 'value': 27},
  {'source': 4, 'target': 40, 'value': 27},
  {'source': 4, 'target': 17, 'value': 26},
  {'source': 4, 'target': 15, 'value': 22},
  {'source': 4, 'target': 41, 'value': 18},
  {'source': 4, 'target': 42, 'value': 17},
  {'source': 4, 'target': 24, 'value': 16},
  {'source': 4, 'target': 43, 'value': 15},
  {'source': 4, 'target': 2, 'value': 14},
  {'source': 4, 'target': 33, 'value': 12},
  {'source': 4, 'target': 26, 'value': 12},
  {'source': 4, 'target': 44, 'value': 11},
  {'source': 4, 'target': 18, 'value': 10},
  {'source': 5, 'target': 8, 'value': 20},
  {'source': 5, 'target': 10, 'value': 10},
  {'source': 5, 'target': 6, 'value': 10},
  {'source': 5, 'target': 8, 'value': 11},
  {'source': 6, 'target': 8, 'value': 94},
  {'source': 6, 'target': 10, 'value': 53},
  {'source': 6, 'target': 14, 'value': 26},
  {'source': 6, 'target': 11, 'value': 23},
  {'source': 6, 'target': 5, 'value': 13},
  {'source': 6, 'target': 56, 'value': 13},
  {'source': 6, 'target': 57, 'value': 12},
  {'source': 6, 'target': 20, 'value': 11},
  {'source': 6, 'target': 58, 'value': 10},
  {'source': 6, 'target': 56, 'value': 36},
  {'source': 6, 'target': 14, 'value': 22},
  {'source': 6, 'target': 8, 'value': 20},
  {'source': 6, 'target': 10, 'value': 19},
  {'source': 6, 'target': 5, 'value': 15},
  {'source': 7, 'target': 64, 'value': 10}]
  }
  
  
function run(w) {
  if (w < 600) {
    var width = w-20
    var mobiledistanse = width/3.7;
    strengthMobile = -400
    var height = 600
  } else{
    width = 600
    strengthMobile = -250
    var mobiledistanse = width/1.7;
    var height = 600
  }
  
  
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
        .text('Карта зв\'язків нових каналів по репостах');
    svg.append("text")
        .attr("x", 10 ) 
        .attr("y", 55)
        .attr("text-anchor", "start")  
        .style("font-size", '11px')
        .style("font-family", "sans-serif")
        .style("fill", "#bdbdbd")
        .text('Розмір кругу - кількість репостів постів каналу');
      svg.append("text")
        .attr("x", 10 ) 
        .attr("y", height - 10)
        .attr("text-anchor", "start")  
        .style("font-size", '10px')
        .style("font-family", "sans-serif")
        .style("fill", "#bdbdbd")
        .text('Дані: 1 січня - 20 грудня');
        var legendX = height - 80
        var legendY = legendX + 20
        svg.append("circle").attr("cx",15).attr("cy",legendX).attr("r", 6).style("fill", "#42a5f5")
        svg.append("circle").attr("cx",15).attr("cy",legendY).attr("r", 6).style("fill", "#673ab7")
        svg.append("circle").attr("cx",15).attr("cy",legendY+20).attr("r", 6).style("fill", "#ffab91")
        svg.append("text").attr("x", 25).attr("y", legendX+5).text("Нові канали").style("font-size", "14px").attr("alignment-baseline","left")
        svg.append("text").attr("x", 25).attr("y", legendY+5).text("Канали, що викрила СБУ").style("font-size", "14px").attr("alignment-baseline","left")
        svg.append("text").attr("x", 25).attr("y", legendY+25).text("Інші").style("font-size", "14px").attr("alignment-baseline","left")

    var color = d3.scaleOrdinal()
    .domain([1,20,50,100,200,328])
    .range(['#f7f7f7','#d9d9d9','#bdbdbd','#969696','#636363','#252525']);
    var colorGroup = d3.scaleOrdinal()
    .domain([1,2,3])
    .range(["#42a5f5",'#ffab91','#673ab7']);
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
        if (d.value == 1) {
          tooltip1.html("<h3>"+d.name+"</h3>"+d.reposted);
        } else {
          tooltip1.html("<h3>"+d.name+"</h3><p><b>Скільки разів репостили</b>: "+d.value+"</p>"+d.reposted);
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
      .attr("class", "label")
      .text(function(d) { 
        var value = d.reposted.split('</p>')[0]
        value = value.split(': ')[2]
        if(d.group == 1) {
            return d.name; 
        } else if (value != undefined && parseInt(value) > 15) {
          return d.name
        }
        });

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