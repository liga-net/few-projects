if(document.createStyleSheet) {
    document.createStyleSheet('https://cdn.jsdelivr.net/gh/liga-net/few-projects/taxes_dashboard2.css');
}
else {
    var styles = "@import url('https://cdn.jsdelivr.net/gh/liga-net/few-projects/taxes_dashboard2.css');";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
}
Highcharts.chart('chart_sankey', {
    chart: {style:{fontFamily:'Roboto'}},
    title: {
        text: 'У які бюджети йдут податки'
    },
    subtitle: {
        text: 'Дані на 2020 рік. Наведіть для деталізації'
    },
    credits: {
        enabled: false
    },
    tooltip: {
        formatter: function() {
            if (this.key.includes('highcharts')) {
                return '<b>'+this.point.from + '</b> направляють у ' +this.point.to.toLowerCase().replace('києва','Києва').replace('отг','ОТГ')+' на <b>'+this.point.percent+'%</b>'
            } else if (this.key.includes('Бюджет')) {
                return this.point.sum+' податків надходить у '+this.key.toLowerCase().replace('києва','Києва').replace('отг','ОТГ')
            } else {
                if (this.point.sum ==1) {
                    return this.key+': надходить у '+this.point.sum+' бюджет'
                } else if (this.point.sum < 5) {
                    return this.key+': надходить у '+this.point.sum+' бюджети'
                } else {
                    return this.key+': надходить у '+this.point.sum+' бюджетів'
                }
                
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
            ['ПДФО', 'Бюджет Києва', 1,40],
            ['ПДФО', 'Обласні бюджети', 1,15],
            ['ПДФО', 'Бюджети міст обласного значення', 1,46],
            ['ПДФО', 'Бюджети ОТГ', 1,60],
            ['ПДФО','Районні бюджети',1,60],
            
            ['Податок на прибуток', 'Бюджет Києва', 1,10],
            ['Податок на прибуток', 'Обласні бюджети', 1, 10],
    
            ['Податок на прибуток комунальних підприємств', 'Бюджет Києва', 1,100],
            ['Податок на прибуток комунальних підприємств', 'Обласні бюджети', 1,100],
            ['Податок на прибуток комунальних підприємств', 'Бюджети міст обласного значення', 1,100],
            ['Податок на прибуток комунальних підприємств', 'Бюджети ОТГ', 1,100],
            ['Податок на прибуток комунальних підприємств','Районні бюджети',1,100],
            ['Податок на прибуток комунальних підприємств','Бюджети міст районного значення',1,100],
            ['Податок на прибуток комунальних підприємств','Бюджети сіл',1,100],
    
            ['Рента на деревину', 'Бюджет Києва', 1,37],
            ['Рента на деревину', 'Бюджети міст обласного значення', 1,37],
            ['Рента на деревину', 'Бюджети ОТГ', 1,37],
            ['Рента на деревину','Районні бюджети',1,37],
    
            ['Рента на ліс (крім деревини)', 'Бюджет Києва', 1,100],
            ['Рента на ліс (крім деревини)', 'Бюджети міст обласного значення', 1,100],
            ['Рента на ліс (крім деревини)', 'Бюджети ОТГ', 1,100],
            ['Рента на ліс (крім деревини)','Районні бюджети',1,100],
            ['Рента на ліс (крім деревини)','Бюджети сіл',1,100],
    
            ['Рента за воду', 'Бюджет Києва', 1,45],
            ['Рента за воду', 'Бюджети міст обласного значення', 1,45],
    
            ['Рента за воду місцевого значення', 'Бюджет Києва', 1,100],
            ['Рента за воду місцевого значення', 'Бюджети міст обласного значення', 1,100],
            ['Рента за воду місцевого значення', 'Бюджети ОТГ', 1,100],
            ['Рента за воду місцевого значення','Районні бюджети',1,100],
            ['Рента за воду місцевого значення','Бюджети сіл',1,100],
    
            ['Рента за копалини нац. рівня', 'Бюджет Києва', 1,25],
            ['Рента за копалини нац. рівня', 'Обласні бюджети', 1,25],
            ['Рента за копалини нац. рівня', 'Бюджети міст обласного значення', 1,5],
            ['Рента за копалини нац. рівня', 'Бюджети ОТГ', 1,5],
            ['Рента за копалини нац. рівня','Бюджети міст районного значення',1,5],
            ['Рента за копалини нац. рівня','Бюджети сіл',1,5],
    
            ['Рента за копалини місц. рівня', 'Бюджет Києва', 1,100],
            ['Рента за копалини місц. рівня', 'Бюджети міст обласного значення', 1,100],
            ['Рента за копалини місц. рівня', 'Бюджети ОТГ', 1,100],
            ['Рента за копалини місц. рівня','Бюджети міст районного значення',1,100],
            ['Рента за копалини місц. рівня','Бюджети сіл',1,100],
    
            ['Рента за використання надр нафти та газу', 'Обласні бюджети', 1,2],
            ['Рента за використання надр нафти та газу', 'Бюджети міст обласного значення', 1,3],
            ['Рента за використання надр нафти та газу', 'Бюджети ОТГ', 1,3],
            ['Рента за використання надр нафти та газу','Районні бюджети',1,2],
            ['Рента за використання надр нафти та газу','Бюджети міст районного значення',1,1],
            ['Рента за використання надр нафти та газу','Бюджети сіл',1,1],
    
            ['Рента за використання інших природних ресурсів', 'Бюджет Києва', 1,100],
            ['Рента за використання інших природних ресурсів', 'Обласні бюджети', 1,100],
    
            ['Акцизи', 'Бюджет Києва', 1,100],
            ['Акцизи', 'Бюджети міст обласного значення', 1,100],
            ['Акцизи', 'Бюджети ОТГ', 1,100],
            ['Акцизи','Бюджети міст районного значення',1,100],
            ['Акцизи','Бюджети сіл',1,100],
    
            ['Частина акцизів на паливо', 'Бюджет Києва', 1,13.44],
            ['Частина акцизів на паливо', 'Бюджети міст обласного значення', 1,13.44],
            ['Частина акцизів на паливо', 'Бюджети ОТГ', 1,13.44],
            ['Частина акцизів на паливо','Бюджети міст районного значення',1,13.44],
            ['Частина акцизів на паливо','Бюджети сіл',1,13.44],
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
            text: 'Найбільші видатки зведеного бюджету'
        },
        subtitle: {
            text: 'Дані: Cost.ua'
        },
        xAxis: {
            categories: ['Освіта', 'Пенсії', 'Медицина', 'Правоохоронні органи', 'Відсотки за боргами', 'Транспорт', 'Соціальний захист', 'ЗСУ', 'Чиновники', 'Інше', 'Культура', 'Комунальне господарство','Сільське господарство','Охорона навколишнього середовища','Енергетика']
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
            name: 'Видатки',
            showInLegend: false,color: '#d32f2f',
            data: [238.8,191.2,128.4,141.5,120.1,77.5,130.6,106.6,83,58,31.6,34.5,14.4,9.7,4.3]
        }]
    });
    Highcharts.chart('lgot', {
        chart: {
            type: 'column',style: {fontFamily: 'Roboto'}
        },
        title: {
            text: 'Втрати бюджетів від надання пільг, млрд грн'
        },
        subtitle: {
            text: 'Дані: КШЕ'
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
            name: 'Держбюджет',
            color:'#e90c29',
            data: [51.59, 24.83, 19.9, 26.55, 33.49]
        }, {
            name: 'Місцеві бюджети',
            color:'#00123f',
            data: [3.76, 5.43, 6.18, 9.19, 9.24]
        }]
    });
    Highcharts.chart('debt', {
        chart: {
            type: 'bar',style: {fontFamily: 'Roboto'}
        },
        title: {
            text: 'Найбільші податкові боржники'
        },
        subtitle: {
            text: 'Дані: ДПС'
        },
        xAxis: {
            categories: ["Укрнафта", "Тріолан.Мані", "Парком Транс", "Петра-Резерв", "Полтаванафтогаз", "Надра Геоцент", "Концерн Стирол", "Росава", "Тандем-Фінанс", "Дніпроолія"]
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
            name: 'Боржники',
            showInLegend: false,color: '#d32f2f',
            data: [15.76, 3.69, 2.04, 1.84, 1.69, 1.57, 1.33, 1.28, 1.19, 1.09]
        }]
    });
    Highcharts.chart('tax', {
        chart: {
            type: 'column',style: {fontFamily: 'Roboto'}
        },
        title: {
            text: 'Загальна ставка податків і внесків (% від прибутку)'
        },
        subtitle: {
            text: 'Дані: Doing Business'
        },
        xAxis: {
            categories: ["Данія", "Німеччина", "Польща", "Латвія", "Україна", "Литва", "Росія", "Білорусь", "Словаччина"]
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
            name: 'Видатки',
            showInLegend: false,color: '#d32f2f',
            data: [23.8,48.8,40.8,38.1,45.2,42.6,46.2,53.3,49.7]
        }]
    });
    function log10(n){
        return Math.round(100*Math.log(n)/Math.log(10))/100;
    }
    var load_data = [
        {"id":'tax_stavk','type':'area','title':'Частка податків у зведеному бюджеті України','subtitle':'','stacking':'normal','dataLabels':false,'pointStart':1992,'prefix':'','suffix':'%','series':[{name: 'Податок на прибуток',color:'#fbc02d',data: [null,null,null,38.5,33.4,27.8,28.8,27.8,24.6,22.6,20.7,24.4,25.6,24.4,20.8,21.3,21.1,15.9,17.2,16.5,14.1,13.9,9.9,6.7,8,7.7,8.1,9.4]}, {name: 'Податок на доходи фізосіб',color:'#ff5722',data: [null,null,null,12.6,15.7,16.5,15.9,16.5,20.5,24,23.8,24.9,20.9,17.6,18.1,21.3,20.2,21.4,21.8,18,17.2,18.3,18.5,17.3,18.6,19.6,20.3,24.3]},{name: 'ПДВ',color:'#4caf50',data: [43.2,42.2,28.8,26.8,25.2,38,34.1,33.5,30.01,28.2,29.7,23.2,26.5,34.5,40.1,36.8,39.8,40.7,36.8,39,46.9,46,46.7,42.9,44.3,45.8,45.5,37.5]}, {name: 'Акцизи',color:'#607d8b',data: [0.53,0.62,0.37,0.23,2.6,5.56,5.9,7.11,7.15,7.23,9.03,9.66,10.61,8.10,6.85,6.5,5.3,10.39,12.08,10.13,9.8,9.3,11.1,12.3,13.7,12.8,12.4,13.3]}]}
    ]
    function makeChart(num) {
        var data = load_data[num]
        function getLabel(val) {
            var value_length = log10(val)
    
            if (value_length == '-Infinity' || value_length < 3){
                return data.prefix+val+data.suffix
            } else if (value_length != '-Infinity'){
                if (data.id == 'temp_vvp') {
                    return data.prefix+val+data.suffix
                }
                else if (value_length >= 3 && value_length < 6) {
                    var suffix = ' тис.'
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
    for (i=0;i<load_data.length;i++) {
        makeChart(i)
    }