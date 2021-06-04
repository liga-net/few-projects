Highcharts.chart('chart1', {
    chart: {
        type: 'bar',
        style: {
        	fontFamily: 'Roboto'
        }
    },
    title: {
        text: 'Рейтинги кандидатов в президенты, по возрасту'
    },
    subtitle: {
        text: 'Данные: Деминициативы'
    },
    credits: {
    	enabled: false
    },
    xAxis: [{
        categories: ['18-29','30-39', '40-49', '50-59', '60 +'],
        reversed: false,
        labels: {
            step: 1
        }
    }, { // mirror axis on right side
        opposite: true,
        reversed: false,
        categories: ['18-29','30-39', '40-49', '50-59', '60 +'],
        linkedTo: 0,
        labels: {
            step: 1
        }
    }],
    yAxis: {
    	max: 70,
        title: {
            text: null
        },
        labels: {
            formatter: function () {
                return Math.abs(this.value) + '%';
            }
        }
    },

    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + ', возраст ' + this.point.category + '</b><br/>' +
                'Поддержка: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0)+'%';
        }
    },

    series: [{
        name: 'Владимир Зеленский',
        color: '#66bb6a',
        data: [
            -56.6,-45.3, -35.7, -21.8, -12.5
        ]
    }, {
        name: 'Петр Порошенко',
        color: '#ce93d8',
        data: [
            14.3, 17.1, 18.5,19.0,18.2
        ]
    }]
});
Highcharts.chart('chart2', {
    chart: {
        type: 'column',
        style: {
        	fontFamily: 'Roboto'
        }
    },
    title: {
        text: 'Рейтинги кандидатов в президенты, по образованию'
    },
    subtitle: {
        text: 'Данные: Деминициативы'
    },
    xAxis: {
        categories: ['Неполное среднее', 'Полное среднее общее', 'Среднее специальное', 'Неоконченное высшее', 'Высшее'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: null,
            align: 'high'
        },
        labels: {
            formatter: function () {
                return this.value + '%';
            }
        }
    },
    tooltip: {
        valueSuffix: ' %'
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
        name: 'Владимир Зеленский',
        color: '#66bb6a',
        data: [26.1, 31.4, 29.0, 42.3, 30.8]
    }, {
        name: 'Петр Порошенко',
        color: '#ce93d8',
        data: [14.7,14.2,15.5,17.2,21.8]
    }]
});
Highcharts.chart('chart3', {
    chart: {
        type: 'column',
        style: {
        	fontFamily: 'Roboto'
        }
    },
    title: {
        text: 'Рейтинги кандидатов в президенты, по населенному пункту'
    },
    subtitle: {
        text: 'Данные: Деминициативы'
    },
    xAxis: {
        categories: ['Обласной центр','Город с населением 100 тыс +','Город с населением 50-100 тыс','Город с населением 20-49 тыс','Город с населением <20 тыс','Село городского типа','Село'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: null,
            align: 'high'
        },
        labels: {
            formatter: function () {
                return this.value + '%';
            }
        }
    },
    tooltip: {
        valueSuffix: ' %'
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
        name: 'Владимир Зеленский',
        color: '#66bb6a',
        data: [31.5,39.1,32.5,28.8,33.4,31.8,27.2]
    }, {
        name: 'Петр Порошенко',
        color: '#ce93d8',
        data: [20.9,8.6,11.9,17.5,17.3,14.5,18.0]
    }]
});