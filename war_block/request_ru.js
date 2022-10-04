var names = ['personnel_units','aa_warfare_systems','armoured_fighting_vehicles','artillery_systems','atgm_srbm_systems','cruise_missiles','helicopters','mlrs','planes','special_military_equip','tanks','uav_systems','vehicles_fuel_tanks','warships_cutters']
d3.json('https://www.liga.net/files/general/data/coronavirus/500.json',function(data) {
    d3.select('#war_head').text(data.data.day+' день войны России против Украины. Потери врага')
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