$('#select').on('change',function() {
    var num = $(this)[0].value
    makeMap(num)
})
var data = [
    [["ua-vi", 23.76],["ua-vo", 23.9],["ua-dp", 22.94],["ua-dt", 24.71],["ua-zt", 23.23],["ua-zk", 23.54],["ua-zp", 23.11],["ua-if", 24.66],["ua-kv", 24.49],["ua-kh", 23.44],["ua-kr", null],["ua-lh", 25.99],["ua-lv", 24.47],["ua-kc", null],["ua-mk", 23.94],["ua-my", 23.81],["ua-pl", 23.27],["ua-rv", 23.7],["ua-sc", null],["ua-sm", 22.23],["ua-tp", 24.16],["ua-kk", 22.85],["ua-ks", 23.2],["ua-km", 23.61],["ua-ck", 23.51],["ua-cv", 23.74],["ua-ch", 22.82]],	[["ua-vi", 24.81],["ua-vo", 24.84],["ua-dp", 24.01],["ua-dt", 25.88],["ua-zt", 24.25],["ua-zk", 24.63],["ua-zp", 24.24],["ua-if", 25.64],["ua-kv", 25.65],["ua-kh", 24.61],["ua-kr", null],["ua-lh", 26.86],["ua-lv", 25.5],["ua-kc", null],["ua-mk", 25.05],["ua-my", 24.81],["ua-pl", 24.3],["ua-rv", 24.68],["ua-sc", null],["ua-sm", 23.23],["ua-tp", 25.2],["ua-kk", 23.87],["ua-ks", 24.37],["ua-km", 24.67],["ua-ck", 24.51],["ua-cv", 24.77],["ua-ch", 23.82]],	[["ua-vi", 26.25],["ua-vo", 25.9],["ua-dp", 26.2],["ua-dt", 26.72],["ua-zt", 26.92],["ua-zk", 26.19],["ua-zp", 27.04],["ua-if", 25.89],["ua-kv", 26.4],["ua-kh", 26.97],["ua-kr", null],["ua-lh", 26.56],["ua-lv", 26.85],["ua-kc", null],["ua-mk", 25.8],["ua-my", 26.02],["ua-pl", 26.27],["ua-rv", 26.23],["ua-sc", null],["ua-sm", 25.73],["ua-tp", 26.23],["ua-kk", 26.26],["ua-ks", 26.36],["ua-km", 25.92],["ua-ck", 26.11],["ua-cv", 26.24],["ua-ch", 26.23]],	[["ua-vi", 23.94],["ua-vo", 24.4],["ua-dp", 23.63],["ua-dt", 24.83],["ua-zt", 23.68],["ua-zk", 23.51],["ua-zp", 23.79],["ua-if", 24.97],["ua-kv", 24.48],["ua-kh", 23.97],["ua-kr", null],["ua-lh", 26.13],["ua-lv", 24.79],["ua-kc", null],["ua-mk", 24.16],["ua-my", 23.92],["ua-pl", 23.61],["ua-rv", 24.05],["ua-sc", null],["ua-sm", 22.76],["ua-tp", 24.52],["ua-kk", 22.87],["ua-ks", 23.63],["ua-km", 24.07],["ua-ck", 23.83],["ua-cv", 24.4],["ua-ch", 23.67]],	[["ua-vi", 12.43],["ua-vo", 12.69],["ua-dp", 12.67],["ua-dt", 12.83],["ua-zt", 12.38],["ua-zk", 12.73],["ua-zp", 12.73],["ua-if", 12.81],["ua-kv", 12.66],["ua-kh", 12.68],["ua-kr", null],["ua-lh", 12.95],["ua-lv", 12.86],["ua-kc", null],["ua-mk", 12.49],["ua-my", 12.93],["ua-pl", 12.73],["ua-rv", 12.69],["ua-sc", null],["ua-sm", 12.52],["ua-tp", 12.82],["ua-kk", 12.38],["ua-ks", 12.66],["ua-km", 12.66],["ua-ck", 12.75],["ua-cv", 12.77],["ua-ch", 12.47]]
];

var titles = ['Средние цены на бензин марки А92 по областям, 11.12.2020',
    'Средние цены на бензин марки А95 по областям, 11.12.2020',
    'Средние цены на бензин марки А95+ по областям, 11.12.2020',
    'Средние цены на дизельное топливо по областям, 11.12.2020',
    'Средние цены на автогаз по областям, 11.12.2020']
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