const margin = {top:10, right:20, left:20, bottom:0};
d3.select('#vis').html()
const $chart = d3.select('#vis');
const width =  parseInt($chart.node().offsetWidth) - margin.left - margin.right;
const height = parseInt(width * .55) - margin.top - margin.bottom;

const parliament = d3.parliament()
  .width(width)
  .innerRadiusCoef(0.4);

parliament.enter
  .fromCenter(false)
  .smallToBig(false);

let symbol = d3.symbol().size([20]);

const $svg = d3.select('#vis')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)

const $g = $svg.append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`)

const $g_annotation = $svg
  .append('g')
  .attr('class', 'annotation')
  .attr('transform', `translate(${margin.left}, 0)`)
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
function setupChart(data) {
  const parties = data.map(d => {
    let alliance = null;
    if (d.winning_party_alliance === 'Социал-демократическая партия') {
      alliance = 'SPD'
    } else if (d.winning_party_alliance === 'Блок ХДС/ХСС') {
      alliance = 'HDS'
    } else if (d.winning_party_alliance === 'Зеленые') {
      alliance = 'ZEL'
    } else if (d.winning_party_alliance === 'Свободная демократическая партия') {
      alliance = 'VDP'
    } else if (d.winning_party_alliance === 'Альтернатива для Германии') {
      alliance = 'AFD'
    } else if (d.winning_party_alliance === 'Левые') {
      alliance = 'LEFT'
    } else if (d.winning_party_alliance === 'Союз избирателей Южного Шлезвига') {
      alliance = 'Other'
    }
    return {
      ...d,
      alliance: alliance
    }
  })
  
  const nest = d3.nest()
    .key(d => d.alliance)
    .entries(parties)
    .map(g => ({
      id: g.key,
      seats: g.values
    }));
  
  $g.datum(nest)
    .call(parliament);

}

function init() {
  d3.csv('https://cdn.jsdelivr.net/gh/liga-net/few-projects/german.csv').then(setupChart);
	}
init();
window.onresize = function(event) { 
    init();
};
var coalition = 0
d3.selectAll('.party').on('click',function(d) {
    if (this.style.cssText == '') {
        this.style.cssText = 'border: 2px solid black'
        var party_seats = parseInt(this.children[1].textContent)
        coalition += party_seats
    } else {
        this.style.cssText = ''
        var party_seats = parseInt(this.children[1].textContent)
        coalition -= party_seats
    }
    if (coalition >= 368) {
        d3.select('#result').html('Большинство - 368 мест. Выбранное количество мест в коалиции: <span style="color: green">'+coalition+'</span>')
    } else {
        d3.select('#result').html('Большинство - 368 мест. Выбранное количество мест в коалиции: <span style="color :red">'+coalition+'</span>')
    }
    
    
    
})