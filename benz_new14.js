$('#select').on('change',function() {
    var num = $(this)[0].value
    makeMap(num)
})
var data = [
    [["ua-vi", 23.78],["ua-vo", 23.92],["ua-dp", 22.96],["ua-dt", 24.76],["ua-zt", 23.25],["ua-zk", 23.56],["ua-zp", 23.11],["ua-if", 24.66],["ua-kv", 24.53],["ua-kh", 23.46],["ua-kr", null],["ua-lh", 25.99],["ua-lv", 24.48],["ua-kc", null],["ua-mk", 23.94],["ua-my", 23.86],["ua-pl", 23.28],["ua-rv", 23.7],["ua-sc", null],["ua-sm", 22.27],["ua-tp", 24.16],["ua-kk", 22.91],["ua-ks", 23.2],["ua-km", 23.61],["ua-ck", 23.53],["ua-cv", 23.74],["ua-ch", 22.82]],	[["ua-vi", 24.82],["ua-vo", 24.87],["ua-dp", 24.03],["ua-dt", 25.91],["ua-zt", 24.27],["ua-zk", 24.65],["ua-zp", 24.24],["ua-if", 25.64],["ua-kv", 25.69],["ua-kh", 24.63],["ua-kr", null],["ua-lh", 26.86],["ua-lv", 25.51],["ua-kc", null],["ua-mk", 25.05],["ua-my", 24.86],["ua-pl", 24.31],["ua-rv", 24.68],["ua-sc", null],["ua-sm", 23.27],["ua-tp", 25.2],["ua-kk", 23.92],["ua-ks", 24.37],["ua-km", 24.67],["ua-ck", 24.53],["ua-cv", 24.77],["ua-ch", 23.82]],	[["ua-vi", 26.29],["ua-vo", 25.9],["ua-dp", 26.26],["ua-dt", 26.72],["ua-zt", 26.92],["ua-zk", 26.19],["ua-zp", 27.04],["ua-if", 25.89],["ua-kv", 26.42],["ua-kh", 26.97],["ua-kr", null],["ua-lh", 26.56],["ua-lv", 26.85],["ua-kc", null],["ua-mk", 25.8],["ua-my", 26.05],["ua-pl", 26.31],["ua-rv", 26.23],["ua-sc", null],["ua-sm", 25.81],["ua-tp", 26.23],["ua-kk", 26.32],["ua-ks", 26.36],["ua-km", 25.92],["ua-ck", 26.15],["ua-cv", 26.24],["ua-ch", 26.23]],	[["ua-vi", 23.97],["ua-vo", 24.43],["ua-dp", 23.66],["ua-dt", 24.92],["ua-zt", 23.7],["ua-zk", 23.53],["ua-zp", 23.79],["ua-if", 24.97],["ua-kv", 24.54],["ua-kh", 24.08],["ua-kr", null],["ua-lh", 26.13],["ua-lv", 24.8],["ua-kc", null],["ua-mk", 24.17],["ua-my", 24.01],["ua-pl", 23.63],["ua-rv", 24.05],["ua-sc", null],["ua-sm", 22.81],["ua-tp", 24.52],["ua-kk", 22.94],["ua-ks", 23.64],["ua-km", 24.07],["ua-ck", 23.86],["ua-cv", 24.4],["ua-ch", 23.67]],	[["ua-vi", 12.43],["ua-vo", 12.69],["ua-dp", 12.67],["ua-dt", 12.83],["ua-zt", 12.37],["ua-zk", 12.73],["ua-zp", 12.73],["ua-if", 12.81],["ua-kv", 12.66],["ua-kh", 12.69],["ua-kr", null],["ua-lh", 12.95],["ua-lv", 12.86],["ua-kc", null],["ua-mk", 12.49],["ua-my", 12.93],["ua-pl", 12.73],["ua-rv", 12.69],["ua-sc", null],["ua-sm", 12.52],["ua-tp", 12.77],["ua-kk", 12.38],["ua-ks", 12.66],["ua-km", 12.66],["ua-ck", 12.75],["ua-cv", 12.77],["ua-ch", 12.47]],
];

var titles = ['Средние цены на бензин марки А92 по областям, 14.12.2020',
    'Средние цены на бензин марки А95 по областям, 14.12.2020',
    'Средние цены на бензин марки А95+ по областям, 14.12.2020',
    'Средние цены на дизельное топливо по областям, 14.12.2020',
    'Средние цены на автогаз по областям, 14.12.2020']
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