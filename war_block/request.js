d3.json('https://cdn.jsdelivr.net/gh/liga-net/few-projects/war_block/latest.json',function(data) {
    d3.select('#war_head').text(data.data.day+' день війни Росії проти України. Втрати ворога')
    names.forEach(function(value) {
        var stat = data.data.stats[value]
        if (stat == 0) {
            d3.select('#'+value).text(stat)
        } else {
            d3.select('#'+value).text('~'+stat)
        }
        var increase = data.data.increase[value]
        if (increase == 0) {
            d3.select('#'+value+'_in').text(increase)
        } else {
            d3.select('#'+value+'_in').text('+'+increase)
        }
    })
})