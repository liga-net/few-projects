if(document.createStyleSheet) {
    document.createStyleSheet('https://cdn.jsdelivr.net/gh/liga-net/few-projects/russian_sanctions/graph_scroll.css');  
} else {
    var styles = "@import url('https://cdn.jsdelivr.net/gh/liga-net/few-projects/russian_sanctions/graph_scroll.css');";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
}

var oldWidth = 0
function scroll_render(){
  if (oldWidth == innerWidth) return
  oldWidth = innerWidth

  var width = height = d3.select('#graph').node().offsetWidth
  var r = 40


  if (innerWidth <= 925){
    width = innerWidth
    height = innerHeight*.7
  }

  // return console.log(width, height)

  var svg = d3.select('#graph').html('')
    .append('svg')
      .attrs({width: width, height: height})

  var circle = svg.append('circle')
      .attrs({cx: 0, cy: 0, r: r})

  var colors = ['orange', 'purple', 'steelblue', 'pink', 'black']
  var gs = d3.graphScroll()
      .container(d3.select('.scroll-container-1'))
      .graph(d3.selectAll('scroll-container-1 #graph'))
      .eventId('uniqueId1')  // namespace for scroll and resize events
      .sections(d3.selectAll('.scroll-container-1 #scroll-sections > div'))
      // .offset(innerWidth < 900 ? innerHeight - 30 : 200)
      .on('active', function(i){
        var pos = [ {cx: width - r, cy: r},
                    {cx: r,         cy: r},
                    {cx: width - r, cy: height - r},
                    {cx: width/2,   cy: height/2} ][i]
        
        circle.transition().duration(1000)
            .attrs(pos)
          .transition()
            .style('fill', colors[i])
      })


  
  d3.select('#source')
      .styles({'margin-bottom': window.innerHeight - 450 + 'px', padding: '100px'})
}
scroll_render()
d3.select(window).on('resize', scroll_render)

