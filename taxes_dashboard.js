if(document.createStyleSheet) {
    document.createStyleSheet('https://cdn.jsdelivr.net/gh/liga-net/few-projects/taxes_dashboard.css');
}
else {
    var styles = "@import url('https://cdn.jsdelivr.net/gh/liga-net/few-projects/taxes_dashboard.css');";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
}
Highcharts.chart('sankey', {
    chart: {style:{fontFamily:'Roboto'}},
    title: {
        text: 'В какие бюджеты идут налоги'
    },
    subtitle: {
        text: 'Данные на 2020 год. Наведите для детализации'
    },
    credits: {
        enabled: false
    },
    tooltip: {
        formatter: function() {
            if (this.key.includes('highcharts')) {
                return '<b>'+this.point.from + '</b> направляют в ' +this.point.to+' на <b>'+this.point.percent+'%</b>'
            } else if (this.key.includes('Бюджет')) {
                return this.point.sum+' налогов поступает в '+this.key
            } else {
                return this.key+': направляется в '+this.point.sum+' бюджетов'
            }
            
            
        }
    }, 
    series: [{
        keys: ['from', 'to', 'weight','percent','color'],
        dataLabels: {
            enabled: true,
            color: 'black',
            align: 'right',
            style: {
                fontSize: '14px'
            }
        },
        data: [
            ['ПДФЛ', 'Бюджет Киева', 1,40],
            ['ПДФЛ', 'Областные бюджеты', 1,15],
            ['ПДФЛ', 'Бюджеты городов областного значения', 1,46],
            ['ПДФЛ', 'Бюджеты ОТГ', 1,60],
            ['ПДФЛ','Районные бюджеты',1,60],
            
            ['Налог на прибыль', 'Бюджет Киева', 1,10],
            ['Налог на прибыль', 'Областные бюджеты', 1, 10],
    
            ['Налог на прибыль комунальных предприятий', 'Бюджет Киева', 1,100],
            ['Налог на прибыль комунальных предприятий', 'Областные бюджеты', 1,100],
            ['Налог на прибыль комунальных предприятий', 'Бюджеты городов областного значения', 1,100],
            ['Налог на прибыль комунальных предприятий', 'Бюджеты ОТГ', 1,100],
            ['Налог на прибыль комунальных предприятий','Районные бюджеты',1,100],
            ['Налог на прибыль комунальных предприятий','Бюджеты городов районного значения',1,100],
            ['Налог на прибыль комунальных предприятий','Бюджеты сел',1,100],
    
            ['Рента на древесину', 'Бюджет Киева', 1,37],
            ['Рента на древесину', 'Бюджеты городов областного значения', 1,37],
            ['Рента на древесину', 'Бюджеты ОТГ', 1,37],
            ['Рента на древесину','Районные бюджеты',1,37],
    
            ['Рента на лес (кроме древесины)', 'Бюджет Киева', 1,100],
            ['Рента на лес (кроме древесины)', 'Бюджеты городов областного значения', 1,100],
            ['Рента на лес (кроме древесины)', 'Бюджеты ОТГ', 1,100],
            ['Рента на лес (кроме древесины)','Районные бюджеты',1,100],
            ['Рента на лес (кроме древесины)','Бюджеты сел',1,100],
    
            ['Рента за воду', 'Бюджет Киева', 1,45],
            ['Рента за воду', 'Бюджеты городов областного значения', 1,45],
    
            ['Рента за воду местного значения', 'Бюджет Киева', 1,100],
            ['Рента за воду местного значения', 'Бюджеты городов областного значения', 1,100],
            ['Рента за воду местного значения', 'Бюджеты ОТГ', 1,100],
            ['Рента за воду местного значения','Районные бюджеты',1,100],
            ['Рента за воду местного значения','Бюджеты сел',1,100],
    
            ['Рента за ископаемые нац. уровня', 'Бюджет Киева', 1,25],
            ['Рента за ископаемые нац. уровня', 'Областные бюджеты', 1,25],
            ['Рента за ископаемые нац. уровня', 'Бюджеты городов областного значения', 1,5],
            ['Рента за ископаемые нац. уровня', 'Бюджеты ОТГ', 1,5],
            ['Рента за ископаемые нац. уровня','Бюджеты городов районного значения',1,5],
            ['Рента за ископаемые нац. уровня','Бюджеты сел',1,5],
    
            ['Рента за ископаемые местного уровня', 'Бюджет Киева', 1,100],
            ['Рента за ископаемые местного уровня', 'Бюджеты городов областного значения', 1,100],
            ['Рента за ископаемые местного уровня', 'Бюджеты ОТГ', 1,100],
            ['Рента за ископаемые местного уровня','Бюджеты городов районного значения',1,100],
            ['Рента за ископаемые местного уровня','Бюджеты сел',1,100],
    
            ['Рента за использование недр нефти и газа', 'Областные бюджеты', 1,2],
            ['Рента за использование недр нефти и газа', 'Бюджеты городов областного значения', 1,3],
            ['Рента за использование недр нефти и газа', 'Бюджеты ОТГ', 1,3],
            ['Рента за использование недр нефти и газа','Районные бюджеты',1,2],
            ['Рента за использование недр нефти и газа','Бюджеты городов районного значения',1,1],
            ['Рента за использование недр нефти и газа','Бюджеты сел',1,1],
    
            ['Рента за использование других природных ресурсов', 'Бюджет Киева', 1,100],
            ['Рента за использование других природных ресурсов', 'Областные бюджеты', 1,100],
    
            ['Акцизы', 'Бюджет Киева', 1,100],
            ['Акцизы', 'Бюджеты городов областного значения', 1,100],
            ['Акцизы', 'Бюджеты ОТГ', 1,100],
            ['Акцизы','Бюджеты городов районного значения',1,100],
            ['Акцизы','Бюджеты сел',1,100],
    
            ['Часть акцизов на топливо', 'Бюджет Киева', 1,13.44],
            ['Часть акцизов на топливо', 'Бюджеты городов областного значения', 1,13.44],
            ['Часть акцизов на топливо', 'Бюджеты ОТГ', 1,13.44],
            ['Часть акцизов на топливо','Бюджеты городов районного значения',1,13.44],
            ['Часть акцизов на топливо','Бюджеты сел',1,13.44],
        ],
        type: 'sankey',
        name: 'Sankey demo series'
    }]
    
    });
    
    
        Highcharts.chart('spend', {
        chart: {
            type: 'bar',style: {fontFamily: 'Roboto'}
        },
        title: {
            text: 'Статьи расходов бюджета'
        },
        subtitle: {
            text: 'Данные: Cost.ua'
        },
        xAxis: {
            categories: ['Образование','Пенсии','Медицина','Правоохранительные органы','Проценты по долгам','Транспорт','Социальная защита','ВСУ','Чиновники','Другое','Культура','Комунальное хозяйство','Сельское хозяйство','Охрана окружающей среды','Энергетика']
        },
        yAxis: {
            min: 0,
            title: null,
            labels: {
                enabled: true,
                format: '{value} млрд грн'
            }
        },
        tooltip: {
            valueSuffix: ' млрд грн'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    format: '{y} млрд грн'
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Расходы',
            showInLegend: false,color: '#d32f2f',
            data: [238.8,191.2,128.4,141.5,120.1,77.5,130.6,106.6,83,58,31.6,34.5,14.4,9.7,4.3]
        }]
    });
    Highcharts.chart('lgot', {
        chart: {
            type: 'column',style: {fontFamily: 'Roboto'}
        },
        title: {
            text: 'Потери бюджетов от предоставления льгот, млрд грн'
        },
        subtitle: {
            text: 'Данные: КШЭ'
        },
        yAxis: {
            min: 0,
            title: null,
            labels: {
                enabled: true,
                format: '{value} млрд грн'
            },
            stackLabels: {
                enabled: true
            }
        },
        credits: {enabled: false},
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true
                },
                pointStart: 2015
            }
        },
        series: [{
            name: 'Госбюджет',
            color:'#e90c29',
            data: [51.59, 24.83, 19.9, 26.55, 33.49]
        }, {
            name: 'Местные бюджеты',
            color:'#00123f',
            data: [3.76, 5.43, 6.18, 9.19, 9.24]
        }]
    });
    Highcharts.chart('debt', {
        chart: {
            type: 'bar',style: {fontFamily: 'Roboto'}
        },
        title: {
            text: 'Статьи расходов бюджета'
        },
        subtitle: {
            text: 'Данные: ГНС'
        },
        xAxis: {
            categories: ["Укрнафта", "Триолан.Мани", "Парком Транс", "Петра-Резерв", "Полтаванафтогаз", "Надра Геоцент", "Концерн Стирол", "Росава", "Тандем-Финанс", "Днипроолия"]
        },
        yAxis: {
            min: 0,
            title: null,
            labels: {
                enabled: true,
                format: '{value} млрд грн'
            }
        },
        tooltip: {
            valueSuffix: ' млрд грн'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    format: '{y} млрд грн'
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Должники',
            showInLegend: false,color: '#d32f2f',
            data: [15.76, 3.69, 2.04, 1.84, 1.69, 1.57, 1.33, 1.28, 1.19, 1.09]
        }]
    });
    Highcharts.chart('tax', {
        chart: {
            type: 'column',style: {fontFamily: 'Roboto'}
        },
        title: {
            text: 'Суммарный процент прибыли, который идет на налоги'
        },
        subtitle: {
            text: 'Данные: Doing Business'
        },
        xAxis: {
            categories: ["Дания","Германия","Польща","Латвия","Украина","Литва","Россия","Беларусь","Словакия"]
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
        series: [{
            name: 'Расходы',
            showInLegend: false,color: '#d32f2f',
            data: [23.8,48.8,40.8,38.1,45.2,42.6,46.2,53.3,49.7]
        }]
    });
    function log10(n){
        return Math.round(100*Math.log(n)/Math.log(10))/100;
    }
    var data = [
        {"id":'tax_stavk','type':'area','title':'Доля налогов в сводном бюджете Украины','subtitle':'','stacking':'normal','dataLabels':false,'pointStart':1992,'prefix':'','suffix':'%','series':[{name: 'Налог на прибыль',color:'#fbc02d',data: [null,null,null,38.5,33.4,27.8,28.8,27.8,24.6,22.6,20.7,24.4,25.6,24.4,20.8,21.3,21.1,15.9,17.2,16.5,14.1,13.9,9.9,6.7,8,7.7,8.1,9.4]}, {name: 'Налог на доходы физлиц',color:'#ff5722',data: [null,null,null,12.6,15.7,16.5,15.9,16.5,20.5,24,23.8,24.9,20.9,17.6,18.1,21.3,20.2,21.4,21.8,18,17.2,18.3,18.5,17.3,18.6,19.6,20.3,24.3]},{name: 'НДС',color:'#4caf50',data: [43.2,42.2,28.8,26.8,25.2,38,34.1,33.5,30.01,28.2,29.7,23.2,26.5,34.5,40.1,36.8,39.8,40.7,36.8,39,46.9,46,46.7,42.9,44.3,45.8,45.5,37.5]}, {name: 'Акцизы',color:'#607d8b',data: [0.53,0.62,0.37,0.23,2.6,5.56,5.9,7.11,7.15,7.23,9.03,9.66,10.61,8.10,6.85,6.5,5.3,10.39,12.08,10.13,9.8,9.3,11.1,12.3,13.7,12.8,12.4,13.3]}]}
    ]
    function makeChart(num) {
        var data = data[num]
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
    for (i=0;i<data.length;i++) {
        makeChart(i)
    }