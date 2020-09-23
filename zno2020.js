if(document.createStyleSheet) {
    document.createStyleSheet('https://cdn.jsdelivr.net/gh/liga-net/few-projects/zno2020.css');
   }
   else {
    var styles = "@import url('https://cdn.jsdelivr.net/gh/liga-net/few-projects/zno2020.css');";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
}
Highcharts.chart('median_gender', {
    chart: {
        type: 'column',
        style: {fontFamily: 'Roboto'}
    },
    title: {
        text: 'Средний балл ЗНО у девушек и парней'
    },
    subtitle: {
        text: ''
    },
    credits: {
        enabled: false
    },
    xAxis: {
        categories: ["Украинский", "История", "Математика", "Физика", "Химия", "Биология", "География", "Английский", "Французкий", "Немецкий", "Испанский"]
    },
    yAxis: {
        title: null
    },
    plotOptions: {
        series: {
            dataLabels: {enabled: true}
        }
    },
    series: [{
        name: 'Девушки',
        color: '#4caf50',
        data: [157, 135, 139, 138, 139, 138, 139, 151, 153, 159, 149]

    }, {
        name: 'Парни',
        color:'#03a9f4',
        data: [138, 123, 137, 135, 143, 130, 139, 146, 135, 151, 143]

    }]
});

var data2 = [["ua-vi", 153],["ua-vo", 152],["ua-dp", 147],["ua-dt", 145],["ua-zt", 150],["ua-zk", 137],["ua-zp", 142],["ua-if", 154],["ua-kv", 149],["ua-kh", 147],["ua-kr", null],["ua-lh", 145],["ua-lv", 163],["ua-kc", 163],["ua-mk", 142],["ua-my", 147],["ua-pl", 149],["ua-rv", 152],["ua-sc", null],["ua-sm", 156],["ua-tp", 156],["ua-kk", 152],["ua-ks", 144],["ua-km", 149],["ua-ck", 149],["ua-cv", 144],["ua-ch", 149]];

Highcharts.mapChart('map2', {
    chart: {
        map: 'countries/ua/ua-all'
    },
    title: {
        text: 'Средний балл ЗНО по украинскому по областям'
    },

    subtitle: {
        text: 'Источник: УЦОКО'
    },

    colorAxis: {
    	min: 137,
        max: 163,
        minColor: 'white',
        maxColor: '#4caf50'
    },
    credits: {
    	enabled: false
    },
    series: [{
        data: data2,
        name: 'ЗНО по украинскому',
        states: {
            hover: {
                borderColor: 'black'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.value}'
        }
    }]
});