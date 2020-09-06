Highcharts.chart('tax_country', {
    chart: {
        type: 'column',
        style: {fontFamily: 'Arial'}
    },
    title: {
        text: 'Ставки основных налогов в Украине и у ее соседей'
    },
    subtitle: {
        text: 'Источник: PWC'
    },
    xAxis: {
        categories: ['Украина','Грузия','Казахстан','Польша','Румыния','Турция'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        max: 30,
        title: null,
        labels: {
            enabled: true,
            format: '{value}%'
        }
    },
    tooltip: {
        valueSuffix: '%'
    },
    plotOptions: {
        column: {
            dataLabels: {
                enabled: true,
                format: '{y}%'
            }
        }
    },
    credits: {
        enabled: false
    },
    series: [
        {name: 'НДС',color: '#d32f2f',data: [20,18,12,23,19,18]},
        {name: 'Налог на прибыль',color: '#607d8b',data: [18,15,20,19,16,22]},
        {name: 'Налог на доходы',color: '#4caf50',data: [18,20,10,17,10,15]}
    ]
});
Highcharts.chart('survey', {
    chart: {
        type: 'bar',
        style: {fontFamily: 'Arial'}
    },
    title: {
        text: 'На что тратится наибольшая часть ваших налогов?'
    },
    subtitle: {
        text: 'Источник: опрос Ціна Держави'
    },
    xAxis: {
        categories: ['Оборону и армию','Выплату внешнего долга','Пенсии','На полицию, СБУ и госохрану','Субсидии','Здравоохранение','Образование','Затрудняюсь ответить/не знаю'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: null,
        labels: {
            enabled: true,
            format: '{value}%'
        }
    },
    tooltip: {
        valueSuffix: '%'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true,
                format: '{y}%'
            }
        }
    },
    credits: {
        enabled: false
    },
    series: [
        {name: 'Ответ',showInLegend: false,color: '#d32f2f',data: [18.0,16.4,9.9,9.1,8.4,1.4,0.4,36.5]}
    ]
});
Highcharts.chart('vat', {
    chart: {
        type: 'bar',style: {fontFamily: 'Arial'}
    },
    title: {
        text: 'Стандартная ставка НДС в странах Европы'
    },
    xAxis: {
        categories: ['Венгрия','Швеция','Греция','Польша','Голландия','Латвия','Литва','Чехия','Австрия','Армения','Беларусь','Болгария','Молдова','Словакия','Украина','Франция','Эстония','Германия','Румыния','Азербайджан','Средняя в Европе','Среднияя в ЕС','Средняя в мире']
    },
    yAxis: {
        min: 0,
        title: null,
        labels: {
            enabled: true,
            format: '{value}%'
        }
    },
    tooltip: {
        valueSuffix: '%'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true,
                format: '{y}%'
            }
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'НДС',
        showInLegend: false,color: '#d32f2f',
        data: [27,25,24,23,21,21,21,21,20,20,20,20,20,20,{y:20,color:'#fbc02d'},20,20,19,19,18,19.87,21.46,15.51]   
    }]
});
var belarus_data = [
    {"id":'tax_stavk','type':'area','title':'Доля налогов в сводном бюджете Украины','subtitle':'','stacking':'normal','dataLabels':false,'pointStart':1992,'prefix':'','suffix':'%','series':[{name: 'Налог на прибыль',color:'#fbc02d',data: [null,null,null,38.5,33.4,27.8,28.8,27.8,24.6,22.6,20.7,24.4,25.6,24.4,20.8,21.3,21.1,15.9,17.2,16.5,14.1,13.9,9.9,6.7,8,7.7,8.1,9.4]}, {name: 'Налог на доходы физлиц',color:'#ff5722',data: [null,null,null,12.6,15.7,16.5,15.9,16.5,20.5,24,23.8,24.9,20.9,17.6,18.1,21.3,20.2,21.4,21.8,18,17.2,18.3,18.5,17.3,18.6,19.6,20.3,24.3]},{name: 'НДС',color:'#4caf50',data: [43.2,42.2,28.8,26.8,25.2,38,34.1,33.5,30.01,28.2,29.7,23.2,26.5,34.5,40.1,36.8,39.8,40.7,36.8,39,46.9,46,46.7,42.9,44.3,45.8,45.5,37.5]}, {name: 'Акцизы',color:'#607d8b',data: [0.53,0.62,0.37,0.23,2.6,5.56,5.9,7.11,7.15,7.23,9.03,9.66,10.61,8.10,6.85,6.5,5.3,10.39,12.08,10.13,9.8,9.3,11.1,12.3,13.7,12.8,12.4,13.3]}]},
    {"id":'pdfl','type':'line','title':'Сбор налога на доходы граждан','subtitle':'Данные: Госказначейство','dataLabels':true,'pointStart':2007,'stacking':undefined,'prefix':'','suffix':' грн','series':[{name: 'ПДФЛ',showInLegend: false,color:'#fbc02d',data: [34782068903,45895759401,44485269162,51029251812,60224521945,68092388364,72151072383,75202945342,99983173983,138781786550,185686131593,229900604431,275458458226]}]},
    {"id":'pdfl_rate','type':'line','title':'Как изменялась ставка налога на доходы граждан','subtitle':'','dataLabels':true,'pointStart':1994,'stacking':undefined,'prefix':'','suffix':'%','series':[{name: 'Ставка ПДФЛ',showInLegend: false,color:'#fbc02d',data: [10,10,10,10,10,10,10,10,10,13,13,13,13,15,15,15,15,17,17,17,17,20,20,18,18,18,18]}]},
    {"id":'profit_rate','type':'line','title':'Как изменялась ставка налога на прибыль','subtitle':'','dataLabels':true,'pointStart':1994,'stacking':undefined,'prefix':'','suffix':'%','series':[{name: 'Ставка налога на прибыль',showInLegend: false,color:'#fbc02d',data: [30,30,30,30,30,30,30,30,30,30,25,25,25,25,25,25,25,25,21,19,18,18,18,18,18,18,18]}]},
    {"id":'tax_rev','type':'line','title':'Доходы госбюджета от налогов от ВВП','subtitle':'Данные: Всемирный банк','dataLabels':false,'stacking':undefined,'pointStart':1999,'prefix':'','suffix':'%','series':[{name: 'Украина',color:'#fbc02d',data: [13,14.1,12.1,13.1,13.7,13.3,17.1,17.8,16.5,17.9,16.4,15.6,18.5,18.3,17.6,17.3,20.5,19.6,20,20.1]}, {name: 'Грузия',color:'#ff5722',data: [7.9,7.7,7.4,7.6,7,9.9,12.1,15.4,17.7,23.8,23.1,21,22.8,23.2,22,22,22.2,22.3,22.1,21.7]},{name: 'Польша',color:'#4caf50',data: [18.1,17,16.1,16.9,16.7,15.7,16.5,17.2,18.1,18.2,15.9,16.5,16.6,15.9,15.5,15.5,15.7,16.2,16.8,17.4]}, {name: 'Румыния',color:'#607d8b',data: [17.1,18,16.6,16.5,17.8,17.4,17.5,17.9,17.5,16.8,15.3,16.6,18.1,18,17.7,17.9,19,16.8,15.5,14.6]}]},
    {"id":'temp_vvp','type':'column','title':'Темп роста/падения ВВП в % к предыдущему году','subtitle':'Данные: Госстат','stacking':undefined,'dataLabels':true,'pointStart':1992,'prefix':'','suffix':'%','series':[{name: 'Темп',showInLegend: false,color:'#d32f2f',data: [-9.7,-14.8,-22.8,-12.1,-9.9,-3.2,-1.8,-0.2,5.9,5.2,5.3,9.5,11.8,3.1,7.6,8.2,2.2,-15.1,4.1,5.5,0.2,0,-6.6,-9.8,2.4,2.5,3.3,3.2,-7.7,3.6]}]},
    {"id":'tax_hour','type':'column','title':'Среднее время на уплату налогов и подачу отчетов в Украине, часов в год','subtitle':'Источник: Doing Business','stacking':undefined,'dataLabels':true,'pointStart':2006,'prefix':'','suffix':'','series':[{name: 'Среднее время на уплату налогов и подачу отчетов в Украине',showInLegend: false,color:'#d32f2f',data: [2085,2085,2085,860,736,657,657,488,386,346,346,356,328,328,328]}]},
    {"id":'fop','type':'column','title':'Количество физических лиц-предпринимателей в Украине','subtitle':'Данные: Госстат, OpenDataBot','stacking':undefined,'dataLabels':true,'pointStart':2010,'prefix':'','suffix':'','series':[{name: 'Количество ФОП',showInLegend: false,color:'#d32f2f',data: [1805118,1325925,1235192,1328743,1591160,1630878,1559161,1466803,1483716,1876604]}]},
    {"id":'ten','type':'column','title':'Объём теневой экономики в Украине','subtitle':'Данные: Минэкономики','stacking':undefined,'dataLabels':true,'pointStart':2010,'prefix':'','suffix':'%','series':[{name: 'Теневая экономика',showInLegend: false,color:'#d32f2f',data: [38,34,34,35,43,40,35,32,31,28]}]},
    {"id":'doingbusiness','type':'column','title':'Рейтинг легкости администрирования налогов','subtitle':'Источник: Doing Business','stacking':undefined,'dataLabels':false,'pointStart':2007,'prefix':'','suffix':'','series':[{name: 'Всего мест',color:'#fbc02d',data: [175,178,181,183,183,183,185,189,189,189,190,190,190,190]}, {name: 'Место Украины',color:'#ff5722',data: [174,177,180,181,181,181,165,164,108,107,84,43,54,65]}]},
    {"id":'revenue_fop','type':'line','title':'Доходы от единого налога с ФОП в сведенном бюджете','subtitle':'Данные: Госказначейство','dataLabels':false,'pointStart':2007,'stacking':undefined,'prefix':'','suffix':' грн','series':[{name: 'Украина',showInLegend: false,color:'#fbc02d',data: [{y:875436168,dataLabels:{enabled:true}},1062759522,1103693019,1162936614,{y:1027122205,dataLabels:{enabled:true}},3608477537,4896213482,5404395280,{y:6744439759,dataLabels:{enabled:true}},10326543406,14254260713,19875616050,{y:24952737624,dataLabels:{enabled:true}}]}]},
    /* {"id":'vvp','type':'line','title':'ВВП Украины','subtitle':'Данные: Всемирный банк','dataLabels':false,'pointStart':1992,'stacking':undefined,'prefix':'$','suffix':'','series':[{name: 'Украина',showInLegend: false,color:'#fbc02d',data: [{y:73942235330.44,dataLabels:{enabled:true}},65648559903.06,52549555149.20,48213868178.09,44558077827.14,{y:50150399791.65,dataLabels:{enabled:true}},41883241471.74,31580639045.45,31261527363.14,37972301334.67,42351593887.28,50084197498.45,64819702951.68,86057915585.30,107647920792.08,142579603960.40,{y:179816790704.74,dataLabels:{enabled:true}},{y:117113410001.03,dataLabels:{enabled:true}},136013155905.04,163159671670.27,175781379051.43,{y:183310146378.08,dataLabels:{enabled:true}},133503411375.74,{y:91030959454.70,dataLabels:{enabled:true}},93355993628.50,112190355158.18,130901858421.72,{y:153781069118.15,dataLabels:{enabled:true}}]}]},
    {"id":'constant_vvp','type':'line','title':'ВВП Украины в ценах 2010 года','subtitle':'Данные: Всемирный банк','dataLabels':false,'pointStart':1990,'stacking':undefined,'prefix':'$','suffix':'','series':[{name: 'Украина',showInLegend: false,color:'#fbc02d',data: [{y:205771623145.78,dataLabels:{enabled:true}},188464904701.15,170185696267.18,145974897217.58,112496947821.41,98772320162.32,88895088171.29,86228235502.09,84589899041.09,{y:84420719245.18,dataLabels:{enabled:true}},89401541680.30,97629786737.41,102754706789.83,112532765633.16,126159098825.02,129940465635.03,139607929641.79,150209086270.69,{y:153669941036.72,dataLabels:{enabled:true}},{y:130990467246.88,dataLabels:{enabled:true}},136013155905.04,143446957451.62,143789339118.05,{y:143750950398.36,dataLabels:{enabled:true}},134331480637.63,{y:121203317705.38,dataLabels:{enabled:true}},123912293812.63,126968015121.44,131291655063.90,{y:135536959161.57,dataLabels:{enabled:true}}]}]},
    {"id":'constant_vvp_percapita','type':'line','title':'Среднеговодой доход украинцев в ценах 2010 года','subtitle':'Данные: Всемирный банк','dataLabels':false,'pointStart':1995,'stacking':undefined,'prefix':'$','suffix':'','series':[{name: 'Украина',showInLegend: false,color:'#fbc02d',data: [{y:1317.8,dataLabels:{enabled:true}},1162.2,1177.5,1201.3,1258.2,1342.9,1483.9,1590.4,1742.1,2030.3,2124.2,2370.5,2767.6,{y:2985.2,dataLabels:{enabled:true}},{y:2230.2,dataLabels:{enabled:true}},2424.2,2641.2,2798.4,2825.2,{y:2867.3,dataLabels:{enabled:true}},2582.6,2672,2845.4,{y:2977.6,dataLabels:{enabled:true}}]}]},
    {"id":'inflation','type':'line','title':'Рост экономики и инфляция','subtitle':'Данные: Госстат, Всемирный банк','dataLabels':false,'pointStart':2007,'stacking':undefined,'prefix':'','suffix':'%','series':[{name: 'Инфляция',color:'#fbc02d',data: [16.6,22.3,12.3,9.1,4.6,-0.2,0.5,24.9,43.4,12.4,13.7,9.8,4.1]}, {name: 'Рост ВВП',color:'#ff5722',data: [8.2,2.2,-15.1,4.1,5.5,0.2,0,-6.6,-9.8,2.4,2.5,3.3,3.2]}]},
    {"id":'tax_business','type':'line','title':'Суммарная налоговая нагрузка на бизнес, % от прибыли','subtitle':'Данные: Doing Business','stacking':undefined,'dataLabels':false,'pointStart':2006,'prefix':'','suffix':'%','series':[{name: 'Украина',color: '#fbc02d',data: [57.3,57,56.6,57.2,57.2,55.5,57.1,55.4,54.4,52.7,52.2,52.3,37.8,41.7,45.2]},{name: 'Грузия',color: '#ff5722',data: [57,38.6,38.6,38.6,15.3,15.3,16.5,16.5,16.4,16.4,16.4,16.4,16.4,9.9,9.9]},{name: 'Польша',color: '#4caf50',data: [43.2,43.2,43.4,45.1,42.2,40.6,40.1,40.3,40.1,40.1,40.3,40.4,40.5,40.7,40.8]},{name: 'Румыния',color: '#607d8b',data: [55.8,48.2,45.6,45.4,45.5,44,43.5,43.3,43.2,43.2,42,40,40,40,20]},{name: 'Казахстан',color: '#00bcd4',data: [45,45,41.9,42,36.2,29.8,29,29,28.9,28.9,29.2,29.2,29.2,29.4,28.4]},{name: 'Турция',color: '#e91e63',data: [46.1,45.7,44.3,44,42.9,42.9,39.7,39.7,39.4,39.8,40.5,40.5,40.4,40.4,42.3]}]}, */
    
];
function log10(n){
    return Math.round(100*Math.log(n)/Math.log(10))/100;
}

function makeChart(num) {
    var data = belarus_data[num]
    function getLabel(val) {
        var value_length = log10(val)

        if (value_length == '-Infinity' || value_length < 3){
            return data.prefix+val+data.suffix
        } else if (value_length != '-Infinity'){
            if (data.id == 'temp_vvp') {
                return data.prefix+val+data.suffix
            }
            else if (value_length >= 3 && value_length < 6) {
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
                return data.prefix + final_value.toFixed(1) + suffix
            }
            
        } else {
            return data.prefix+val
        }
    }
    Highcharts.chart(data.id, {
        chart: {
            type: data.type,
            style: {fontFamily: 'Arial'}
        },
        title: {
            text: data.title
        },

        subtitle: {
            text: data.subtitle
        },
        xAxis: {
            tickInterval: 3
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
        credits:{
            enabled: false
        },
        tooltip: {
            valueSuffix: data.suffix,
            valuePrefix: data.prefix
        },
        plotOptions: {
            series: {
                stacking: data.stacking,
                dataLabels: {
                    enabled: data.dataLabels,
                    formatter: function() {
                        var value = getLabel(this.y)
                        var pdfl_years = [1994,2003,2007,2011,2015,2017];
                        var profit_years = [1994,2004,2012,2013,2014];
                        if (data.id == 'pdfl_rate' && pdfl_years.includes(this.x)) {
                            return String(this.x) +': '+ value    
                        } else if (data.id == 'profit_rate' && profit_years.includes(this.x)) {
                            return String(this.x) +': '+ value    
                        } else if (data.id != 'pdfl_rate' && data.id != 'profit_rate') {
                            return value
                        }
                        
                        
                    }
                },
                label: {
                    connectorAllowed: false
                },
                pointStart: data.pointStart
            }
        },

        series: data.series
        });
}
for (i=0;i<belarus_data.length;i++) {
    makeChart(i)
}