function makeBarChart(w,id) {
    if (w < 600) {
        var start_width = w,
        left = 30;
    } else {
        var start_width = 600,
        left = 60
    } 
    var margin = {top: 30, right: 30, bottom: 70, left: left},
        width = start_width - margin.left - margin.right,
        height = 450 - margin.top - margin.bottom;

    d3.select("#"+id).html('')
    if (id == 'ukraine112') {
        var title = 'Ежедневные упоминания В.Медведчука на сайте 112 Украина'
    } else {
        var title = 'Ежедневные упоминания В.Медведчука на сайте NewsOne'
    }
    if (width > 500) {
        var fontSize = '18px'
        } else {
            var fontSize = '12px'
        }
    var svg = d3.select("#"+id)
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
    svg.append("text")
                .attr("x", width/2) 
                .attr("y", 0 - (margin.top / 2))
                .attr("text-anchor", "middle")  
                .style("font-size", fontSize)
                .style("font-family", "sans-serif")
                .style('font-family','Circe')
                .text(title);
    // Parse the Data
    d3.csv("https://cdn.jsdelivr.net/gh/liga-net/few-projects/"+id+".csv", function(data) {

    // X axis
    var parseTime = d3.timeParse("%Y-%m-%d");

    var dates = data.map(function(d) { return d.Country; })
    var x = d3.scaleBand()
    .range([ 0, width ])
    .domain(dates)
    .padding(0.2);
    svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickValues(dates.filter(
        function(d,i) {
            if (i % 200 == 1 ) {
                return parseTime(d)
            }
        }
    ))) 
    
    var y = d3.scaleLinear()
    .domain([0, d3.max(data.map(function(d) { return parseInt(d.Value); }))])
    .range([ height, 0]);
    svg.append("g")
    .call(d3.axisLeft(y));

    // Bars
    svg.selectAll("mybar")
    .data(data)
    .enter()
    .append("rect")
        .attr("x", function(d) { return x(d.Country); })
        .attr("y", function(d) { return y(d.Value); })
        .attr("width", x.bandwidth())
        .attr("height", function(d) { return height - y(d.Value); })
        .attr("fill", "#69b3a2")

    })
}
makeBarChart(window.innerWidth,'ukraine112')
makeBarChart(window.innerWidth,'newsone')
window.onresize = function(event) {
    makeBarChart(window.innerWidth,'newsone')
}