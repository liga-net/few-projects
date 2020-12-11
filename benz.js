$('#select').on('change',function() {
    var num = $(this)[0].value
    makeMap(num)
})
var data = [
    [["ua-vi", 22.5],["ua-vo", 22.56],["ua-dp", 22.44],["ua-dt", 23.39],["ua-zt", 22.91],["ua-zk", 22.37],["ua-zp", 22.86],["ua-if", 22.85],["ua-kv", 22.76],["ua-kh", 23.22],["ua-kr", null],["ua-lh", 23.5],["ua-lv", 22.95],["ua-kc", null],["ua-mk", 22.25],["ua-my", 23.08],["ua-pl", 22.57],["ua-rv", 22.92],["ua-sc", null],["ua-sm", 22.1],["ua-tp", 22.52],["ua-kk", 22.4],["ua-ks", 22.33],["ua-km", 22.51],["ua-ck", 23.01],["ua-cv", 22.97],["ua-ch", 23.48]],
    [["ua-vi", 23.6],["ua-vo", 23.7],["ua-dp", 23.6],["ua-dt", 24.5],["ua-zt", 24.1],["ua-zk", 23.4],["ua-zp", 24.2],["ua-if", 24],["ua-kv", 23.9],["ua-kh", 24.5],["ua-kr", null],["ua-lh", 24.5],["ua-lv", 24.1],["ua-kc", null],["ua-mk", 23.4],["ua-my", 24.2],["ua-pl", 23.7],["ua-rv", 23.9],["ua-sc", null],["ua-sm", 23.1],["ua-tp", 23.6],["ua-kk", 23.5],["ua-ks", 23.6],["ua-km", 23.7],["ua-ck", 24],["ua-cv", 24.2],["ua-ch", 24.5]],
    [["ua-vi", 25.4],["ua-vo", 24.7],["ua-dp", 24.7],["ua-dt", 26.2],["ua-zt", 26],["ua-zk", 25.1],["ua-zp", 26],["ua-if", 24.7],["ua-kv", 25.7],["ua-kh", 25.9],["ua-kr", null],["ua-lh", 25.2],["ua-lv", 25.7],["ua-kc", null],["ua-mk", 24.7],["ua-my", 25.4],["ua-pl", 25],["ua-rv", 25.2],["ua-sc", null],["ua-sm", 24.6],["ua-tp", 25.2],["ua-kk", 25.1],["ua-ks", 24.8],["ua-km", 25.1],["ua-ck", 24.8],["ua-cv", 25.1],["ua-ch", 25.2]],
    [["ua-vi", 22.4],["ua-vo", 22.8],["ua-dp", 22.5],["ua-dt", 23.6],["ua-zt", 23.1],["ua-zk", 22.1],["ua-zp", 23],["ua-if", 23.1],["ua-kv", 22.7],["ua-kh", 23.5],["ua-kr", null],["ua-lh", 23.7],["ua-lv", 23],["ua-kc", null],["ua-mk", 22.4],["ua-my", 23.3],["ua-pl", 22.5],["ua-rv", 23.3],["ua-sc", null],["ua-sm", 21.8],["ua-tp", 22.7],["ua-kk", 22.3],["ua-ks", 22.7],["ua-km", 22.8],["ua-ck", 23],["ua-cv", 23.4],["ua-ch", 23.7]],
    [["ua-vi", 12.6],["ua-vo", 12.7],["ua-dp", 12.5],["ua-dt", 12.8],["ua-zt", 12.5],["ua-zk", 12.6],["ua-zp", 12.6],["ua-if", 12.5],["ua-kv", 12.5],["ua-kh", 12.6],["ua-kr", null],["ua-lh", 12.5],["ua-lv", 12.7],["ua-kc", null],["ua-mk", 12.4],["ua-my", 12.9],["ua-pl", 12.6],["ua-rv", 12.6],["ua-sc", null],["ua-sm", 12.4],["ua-tp", 12.6],["ua-kk", 12.4],["ua-ks", 12.4],["ua-km", 12.6],["ua-ck", 12.5],["ua-cv", 12.6],["ua-ch", 12.4]]
];

var titles = ['Средние цены на бензин марки А92 по областям, 26.10.2020',
    'Средние цены на бензин марки А95 по областям, 26.10.2020',
    'Средние цены на бензин марки А95+ по областям, 26.10.2020',
    'Средние цены на дизельное топливо по областям, 26.10.2020',
    'Средние цены на автогаз по областям, 26.10.2020']
makeMap(0)
function makeMap(num) {
    var yValues = data[num].map(d => d[1])
Highcharts.mapChart('heat', {
    chart: {
        map: 'countries/ua/ua-all'
    },

    title: {
        text: titles[num]
    },

    colorAxis: {
        min: Math.min(...yValues.filter(d => d != null)),
        minColor: 'white',
        maxColor: '#0097a7'
    },
    credits: {enabled: false},

    series: [{
        data: data[num],
        name: 'Random data',
        states: {
            hover: {
                borderColor: 'black'
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function() {
                var key = this.key
                if (key != 'Sevastopol' && key != 'Crimea' && key != 'Kiev City') {
                    return this.point.value +' грн'
                }
                
            }
        }
    }]
});
}