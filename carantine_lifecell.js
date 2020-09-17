function getLabel(val) {
    var value_length = log10(val)
    if (value_length == '-Infinity' || value_length < 3){
        return val
    } else if (value_length != '-Infinity'){
        if (value_length >= 3 && value_length < 6) {
            var suffix = ' тыс.'
            var final_value = val / 1000
        } else if (value_length >= 6 && value_length <= 9){
            var suffix = ' млн'
            var final_value = val/ 1000000
        } else if (value_length >9){
            var suffix = ' млрд'
            var final_value = val / 1000000000
        }
        if (final_value != undefined){
            return final_value.toFixed(1) + suffix
        }
        
    } else {
        return val
    }
}
Highcharts.chart('ukrtelecom', {
chart: {
type: 'column',
style:{fontFamily: 'Roboto'}
},
title: {
text: 'Как вырос траффик абонентов Укртелекома по сравнению с 2019'
},
xAxis: {
categories: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль'
]
},
yAxis: {
title: null,
labels: {
    format: '{value}%'
}
},
credits: {
enabled: false
},
series: [{
dataLabels: {enabled: true,format:'{y}%'},
name: 'Траффик абонентов Укртелекома по сравнению с 2019',
color: '#e90c29',
showInLegend: false,
data: [-2,6,24,39,39,19,19]

}]
});
function log10(n){
return Math.round(100*Math.log(n)/Math.log(10))/100;
}
Highcharts.chart('zakaz', {
chart: {
type: 'area',
style:{fontFamily: 'Roboto'}
},
title: {
text: 'Количество уникальных посетителей Zakaz.ua'
},
xAxis: {
categories: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль'
]
},
yAxis: {
title: null,
labels: {
    formatter: function() {
        var value = getLabel(this.value)
        return value
    }
}
},
plotOptions: {
series: {
    dataLabels: {
        enabled: true,
        formatter: function() {
            var value = getLabel(this.y)
            return value
        }
            
    }
}
},
credits: {
enabled: false
},
series: [{
name: 'Количество уникальных посетителей Zakaz.ua',
color: '#e90c29',
showInLegend: false,
data: [787752,766408,1138313,1062948,1235538,997316,999753]

}]
});
Highcharts.chart('lifecell', {
chart: {
type: 'column',
style:{fontFamily: 'Roboto'}
},
title: {
text: 'Как менялась длительность звонков абонентов Lifecell по сравнению с 2019'
},
xAxis: {
categories: [
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль'
]
},
yAxis: {
title: null,
labels: {
    format: '{value}%'
}
},
credits: {
enabled: false
},
legend: {
align: 'center',
verticalAlign: 'top',
layout: 'horizontal'
},
series: [{
dataLabels: {enabled: true,format:'{y}%'},
name: '5-10 минут',
color: '#D4C44E',
data: [-2,6,-12,12,0,1]
},{
dataLabels: {enabled: true,format:'{y}%'},
name: '10-30 минут',
color: '#204AD4',
data: [0,15,-10,8,-2,1]
},{
dataLabels: {enabled: true,format:'{y}%'},
name: '30-60 минут',
color: '#AF0000',
data: [1,22,-4,4,-8,0]
},{
dataLabels: {enabled: true,format:'{y}%'},
name: '60-120 минут',
color: '#008F91',
data: [1,26,4,1,-17,-2]
},{
dataLabels: {enabled: true,format:'{y}%'},
name: '120+ минут',
color: '#D9A7A7',
data: [-1,27,12,-5,-22,-2]
}]
});