Highcharts.chart('chart1', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Рис 1а. Частка видатків на дороги у ВВП з Державного бюджету та місцевих бюджетів, %'
    },
    credits: {
        enabled: false
    },
    xAxis: {
        categories: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020 план*', '2021 план*']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Частка видатків на дороги у ВВП, %'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        shared: true,
        pointFormat: '<b>{series.name}</b>: {point.y}<br/>%<br>'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: false
            }
        }
    },
    series: [{
        name: 'з державного бюджету',
        data: [1.48, 0.78, 1.15, 1.45, 0.86, 1.16, 0.88, 1.08, 0.90, 0.94, 0.90, 1.15, 0.63, 0.68, 0.77, 0.90, 2.43, 0.75],
        color: '#0e002e'
    }, {
        name: 'з місцевих бюджетів',
        data: [0.19, 0.18, 0.27, 0.23, 0.17, 0.16, 0.18, 0.23, 0.22, 0.17, 0.20, 0.28, 0.42, 0.75, 0.93, 0.80, 1.00, 0.43],
        color: '#ff6333'
    }]
});
Highcharts.chart('chart2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Рис.1б. Видатки на дороги з державного та місцевих бюджетів в цінах 2020 року, млрд.грн'
    },
    subtitle: {
        text: 'Джерело: звіти Держказначейства, Закон про державний бюджет на 2021 рік, IMF World economic outlook '
    },
    credits: {
        enabled: false
    },
    xAxis: {
        categories: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021 план*']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'видатки на дороги, млрд.грн.'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        shared: true,
        pointFormat: '<b>{series.name}</b>: {point.y}<br/> млрд грн<br>'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: false
            }
        }
    },
    series: [{
        name: 'з державного бюджету',
        data: [33.9, 20.1, 33.7, 50, 31.3, 34.8, 27.4, 37.7, 33.5, 36.9, 33.9, 36.7, 21.2, 24.8, 30.3, 36.9, 93.9, 43.1],
        color: '#0e002e'
    }, {
        name: 'з місцевих бюджетів',
        data: [4.2, 4.6, 7.9, 8.1, 6.3, 4.7, 5.6, 7.9, 8, 6.8, 7.4, 9.1, 14, 27.5, 36.7, 32.6, 38.9, 16.9],
        color: '#ff6333'
    }]
});
Highcharts.chart('chart3', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Рис 2. Середня вартість 1 км робіт за типом робіт, млн грн'
    },
    credits: {
        enabled: false
    },
    subtitle: {
        text: 'Джерело: CoST'
    },
    xAxis: {
        categories: [
            'Будівництво',
            'Реконструкція',
            'Капітальний ремонт',
            'Поточний середній ремонт',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Середня вартість 1 км, млн.грд.'
        }
    },
    tooltip: {
        headerFormat: '<b><span style="font-size:10px">{point.key}</span></b><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0"><b>{series.name}:</b> </td>' +
            '<td style="padding:0">{point.y:.1f} млн.грн.</td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: '2018',
        data: [15.39, 13.06, 13.56, 4.83],
        color: '#ff6333',
    }, {
        name: '2019',
        data: [105.32, 65.18, 24.23, 5.84],
        color: '#0e002e'

    }, {
        name: '2020',
        data: [90.22, 37.04, 25.08, 10.85],
        color: '#72ff06'
    }]
});
Highcharts.chart('chart4', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Рис 3. Загальні витрати на  виконання робіт кожного типу, млрд грн'
    },
    credits: {
        enabled: false
    },
    subtitle: {
        text: 'Джерело: CoST'
    },
    xAxis: {
        categories: [
            'Будівництво',
            'Реконструкція',
            'Капітальний ремонт',
            'Поточний середній ремонт',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Загальні витрати на  виконання робіт кожного типу, млрд.грн.'
        }
    },
    tooltip: {
        headerFormat: '<b><span style="font-size:10px">{point.key}</span></b><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0"><b>{series.name}:</b> </td>' +
            '<td style="padding:0">{point.y:.1f} млрд.грн.</td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: '2018',
        data: [0.76, 0.57, 2.56, 20.68],
        color: '#ff6333',
    }, {
        name: '2019',
        data: [1.64, 3.04, 2.85, 11.96],
        color: '#0e002e'

    }, {
        name: '2020',
        data: [1.29, 3.01, 12.79, 54.47],
        color: '#72ff06'
    }]
});
Highcharts.chart('chart5', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Рис.4. Середня вартість поточного середнього ремонту 1 км доріг за областями, млн грн.'
    },
    credits: {
        enabled: false
    },
    subtitle: {
        text: 'Джерело: CoST'
    },
    xAxis: {
        categories: ['Вінницька',
            'Волинська',
            'Дніпропетровська',
            'Донецька',
            'Житомирська',
            'Закарпатська',
            'Запорізька',
            'Івано-Франківська',
            'Київська',
            'Кіровоградська',
            'Луганська',
            'Львівська',
            'Миколаївська',
            'Одеська',
            'Полтавська',
            'Рівненська',
            'Тернопільська',
            'Харківська',
            'Херсонська',
            'Хмельницька',
            'Черкаська',
            'Чернівецька',
            'Чернігівська',
            'Сумська'
        ],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: "Середня вартість ПСР 1км, млн.грн.",
            align: 'middle'
        }
    },
    tooltip: {
        valueSuffix: 'млн.грн.'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: false
            }
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: '2018',
        data: [2.29, 3.50, 3.39, 9.33, 9.64, 18.79, 1.33, 3.46, 8.45, 8.20, 6.87, 3.02, 14.96, 8.05, 4.55, 7.99, 9.11, 0.00, 10.79, 8.59, 7.65, 5.00, 2.63, 0.00],
        color: '#0e002e'
    }, {
        name: '2019',
        data: [2.87, 1.23, 0.99, 0.00, 7.07, 16.47, 15.91, 1.91, 2.65, 18.14, 7.44, 8.26, 20.49, 5.61, 0.13, 12.58, 14.00, 0.00, 9.21, 3.91, 16.75, 9.45, 1.71, 0.00,
        ],
        color: '#ff6333'
    }, {
        name: '2020',
        data: [18.62, 3.06, 26.74, 14.08, 2.41, 16.03, 15.15, 8.55, 13.45, 17.88, 23.64, 9.51, 19.59, 12.90, 1.55, 17.04, 13.61, 3.60, 7.67, 6.15, 15.58, 25.90, 15.59, 12.77],
        color: '#72ff06'
    }]
});