function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
function getData(id){
    var value = $.ajax({ 
        url: id, 
        async: false
    }).responseJSON;
    return value;
}
var lineOptions = {
    'id':'linechart',
    "title":"Бюджет фонда \"Відродження\" в Украине",
    'subtitle':"Данные: Фонд Відродження",
    'col': ['value'],
    'colors': ["#27D192"],
    'lineTitle': ''
};

var linechartdata = [
{"date":"01/01/1999 00:00","value":"5200000"},
{"date":"01/01/2000 00:00","value":"5400000"},
{"date":"01/01/2001 00:00","value":"6400000"},
{"date":"01/01/2002 00:00","value":"6200000"},
{"date":"01/01/2003 00:00","value":"5300000"},
{"date":"01/01/2004 00:00","value":"6200000"},
{"date":"01/01/2005 00:00","value":"5200000"},
{"date":"01/01/2006 00:00","value":"6200000"},
{"date":"01/01/2007 00:00","value":"6700000"},
{"date":"01/01/2008 00:00","value":"5700000"},
{"date":"01/01/2009 00:00","value":"6500000"},
{"date":"01/01/2010 00:00","value":"9700000"},
{"date":"01/01/2011 00:00","value":"7800000"},
{"date":"01/01/2012 00:00","value":"7900000"},
{"date":"01/01/2013 00:00","value":"6300000"},
{"date":"01/01/2014 00:00","value":"8700000"},
{"date":"01/01/2015 00:00","value":"9100000"},
{"date":"01/01/2016 00:00","value":"6900000"},
{"date":"01/01/2017 00:00","value":"8900000"},
{"date":"01/01/2018 00:00","value":"9300000"},
{"date":"01/01/2019 00:00","value":"13000000"}
]
var locale = d3.timeFormatLocale({
    "dateTime": "%A, %e %B %Y г. %X",
    "date": "%d.%m.%Y",
    "time": "%H:%M:%S",
    "periods": ["AM", "PM"],
    "days": ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
    "shortDays": ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
    "months": ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
    "shortMonths": ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]
});
function multiFormat(date) {
    return (d3.timeSecond(date) < date ? formatMillisecond
        : d3.timeMinute(date) < date ? formatSecond
        : d3.timeHour(date) < date ? formatMinute
        : d3.timeDay(date) < date ? formatHour
        : d3.timeMonth(date) < date ? (d3.timeWeek(date) < date ? formatDay : formatWeek)
        : d3.timeYear(date) < date ? formatMonth
        : formatYear)(date);
}
var formatMillisecond = locale.format(".%L"),
    formatSecond = locale.format(":%S"),
    formatMinute = locale.format("%I:%M"),
    formatHour = locale.format("%I %p"),
    formatDay = locale.format("%a %d"),
    formatWeek = locale.format("%d %b"),
    formatMonth = locale.format("%b %Y"),
    formatYear = locale.format("%Y");

var monthRU = [{'id':1,'month':'января'},
    {'id':2,'month':'февраля'},
    {'id':3,'month':'марта'},
    {'id':4,'month':'апреля'},
    {'id':5,'month':'мая'},
    {'id':6,'month':'июня'},
    {'id':7,'month':'июля'},
    {'id':8,'month':'августа'},
    {'id':9,'month':'сентября'},
    {'id':10,'month':'октября'},
    {'id':11,'month':'ноября'},
    {'id':12,'month':'декабря'}];
    
function makeLineChart(w,chartOptions,uploaded_data) { 
    if (w>600) {
        var windowW = 600
    } else {
        var windowW = w-20
    }
    var margin =  {top: 50, right: 20, bottom: 50, left: 40},
        width = windowW - margin.left + margin.right,
        height = 350 - margin.top - margin.bottom+30;
    
    d3.select("#"+chartOptions.id).html("")
    
    var svg = d3.select("#"+chartOptions.id)
        .append("svg")
        .attr("id", 'svg_linechart')
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    if (width > 500) {
        var tickValue = 7
        var fontSize = '18px'
        var titleMargin = 0
    } else {
        var tickValue = 6
        var fontSize = '16px'
        var titleMargin = 20
    }
    
    svg.append("text")
        .attr("x", (width / 2) - titleMargin) 
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", fontSize)
        .style("font-family", "Georgia")
        .text(chartOptions.title);
    
    svg.append("text")
        .attr("x", 0) 
        .attr("y", height + margin.bottom-10)
        .attr("text-anchor", "left")  
        .style("font-size", "12px")
        .style("font-family", "Georgia")
        .attr("fill", "#9e9e9e")
        .text(chartOptions.subtitle)

    var parseDate = d3.timeParse("%m/%d/%Y %H:%M");
        
    var x = d3.scaleTime().range([0, width]),
        y = d3.scaleLinear().range([height, 0]);

    var sources = uploaded_data.map(function(d) {
        return {date: parseDate(d.date), kW: parseFloat(d[chartOptions.col])};
    });
    
    x.domain(d3.extent(sources, function(d) { return d.date; }))
    y.domain([0,d3.max(sources, function(d) { return +d.kW; })]);
    
    xAxis = svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickFormat(multiFormat).ticks(tickValue));
        
    yAxis = svg.append("g")
        .call(d3.axisLeft(y)
            .ticks(5).ticks(10, "s"));
        
    svg.append("path")
        .datum(sources)
        .attr("fill", "none")
        .attr("stroke", '#0094c4')
        .attr("stroke-width", 2.5)
        .attr("d", d3.line()
            .x(function(d) {return x(d.date) })
            .y(function(d) {return y(d.kW) })
        )
    svg.append("g").selectAll("text")
    .data(sources)
    .enter()
    .append("text")
    .attr("x", function(d) {
        return x(d.date)
    })
    .attr("y", function(d) {
        return y(d.kW) - 7
    })
    .attr("text-anchor","middle")
    .attr('font-family','Circe')
    .attr('fill','black')
    .attr('font-size','10px')
    .text(function(d,i) {
        if (i % 2 == 0 && i != 0) {
            return '$'+String(d.kW / 1000000)+' млн'
        }
        
    });

}
function makeBarChart(w) {
    // set the dimensions and margins of the graph
    function wrap(text, width) {
        text.each(function() {
            var text = d3.select(this),
                words = text.text().split(/\s+/).reverse(),
                word,
                line = [],
                lineNumber = 0,
                lineHeight = 1.1, // ems
                y = text.attr("y"),
                dy = parseFloat(text.attr("dy")),
                tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
            while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
            }
            }
        });
    }
    if (w>600) {
        var windowW = 600
    } else {
        var windowW = w-20
    }
    var margin =  {top: 50, right: 20, bottom: 50, left: 40},
        width = windowW - margin.left + margin.right,
        height = 500 - margin.top - margin.bottom+30;

    // append the svg object to the body of the page
    d3.select("#barchart").html("")
    var svg = d3.select("#barchart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
            if (width > 500) {
                var fontSize = '18px'
            } else {
                var fontSize = '12px'
            }
            
            svg.append("text")
                .attr("x", (width / 2) - 10) 
                .attr("y", 0 - (margin.top / 2))
                .attr("text-anchor", "middle")  
                .style("font-size", fontSize)
                .style("font-family", "Georgia")
                .text('Основные направления финансирование фонда в 2020 по регионам');
    // Parse the Data
    d3.csv("https://cdn.jsdelivr.net/gh/liga-net/few-projects/soros_barchart.csv", function(data) {

    // List of subgroups = header of the csv files = soil condition here
    var subgroups = data.columns.slice(2)
    

    // List of groups = species here = value of the first column called group -> I show them on the X axis
    var groups = d3.map(data, function(d){return(d.group)}).keys()

    // Add X axis
    var x = d3.scaleBand()
        .domain(groups)
        .range([0, width])
        .padding([0.1])
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickSize(0))
        .selectAll(".tick text")
        .call(wrap, x.bandwidth());

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, 53583920])
        .range([ height, 0 ]);
    svg.append("g")
        .call(d3.axisLeft(y).ticks(20, "s"));

    // Another scale for subgroup position?
    var xSubgroup = d3.scaleBand()
        .domain(subgroups)
        .range([0, x.bandwidth()])
        .padding([0.05])

    // color palette = one color per subgroup
    var color = d3.scaleOrdinal()
        .domain(subgroups)
        .range(['#004c6d', '#376e88', '#6191a3', '#8cb5bf', '#badade', '#e9ffff','#f1f1f1','#f1d4d4','#f0b8b8','#ec9c9d','#e67f83','#de6069'])
    
var legend = svg.append("g")
    .attr("font-family", "Georgia")
    .attr("font-size", 10)
    .selectAll("g")
    .data(subgroups.slice().reverse())
    .enter().append("g")
    .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

legend.append("rect")
    .attr("x", windowW -275)
    .attr("width", 19)
    .attr("height", 19)
    .attr("fill", color);

legend.append("text")
    .attr("x", windowW - 250)
    .attr("y", 9.5)
    .attr("dy", "0.32em")
    .text(function(d) { return d; });

var onePoint = d3.format(".1f");
var tooltipBee = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("z-index", "10")
        .style("visibility", "hidden")
        .style("padding", "14px")
        .style("background-color", "white")
        .style("border", "1px solid #f5f5f5")
        .style("color", "black")
        .style("border-radius", "6px")
        .style("border-color", "black")
        .style("font", "12px sans-serif")
        .text("tooltip");
    // Show the bars
    svg.append("g")
        .selectAll("g")
        // Enter in data = loop group per group
        .data(data)
        .enter()
        .append("g")
        .attr("transform", function(d) { return "translate(" + x(d.group) + ",0)"; })
        .selectAll("rect")
        .data(function(d) { return subgroups.map(function(key) { return {group:d.group,key: key, value: d[key],total:d.total}; }); })
        .enter().append("rect")
        .attr("x", function(d) { return xSubgroup(d.key); })
        .attr("y", function(d) { return y(d.value); })
        .attr("width", xSubgroup.bandwidth())
        .attr("height", function(d) { return height - y(d.value); })
        .attr("fill", function(d) { return color(d.key); })
        .on("mouseover", function(d) {
            tooltipBee.html('<h4>'+d.group+'</h4><p>'+d.key+': $'+ onePoint(d.value/ 1000000)+' млн</p>'+'<p>Общий бюджет на регион: $'+ onePoint(d.total/ 1000000)+' млн</p>')
            tooltipBee.style("visibility", "visible")
            })
        .on("mousemove", function() {
            return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
        })
        .on("mouseout", function(d){
            return tooltipBee.style("visibility", "hidden");
        });

    })

}
var world = getData('https://cdn.jsdelivr.net/gh/liga-net/few-projects/world-topo.json')
var world_data = [{"country":"US","value":1,"rus":"США"},
{"country":"India","value":0,"rus":"Индия"},
{"country":"Brazil","value":1,"rus":"Бразилия"},
{"country":"Russia","value":0,"rus":"Россия"},
{"country":"France","value":0,"rus":"Франция"},
{"country":"Italy","value":0,"rus":"Италия"},
{"country":"Spain","value":1,"rus":"Испания"},
{"country":"United Kingdom","value":1,"rus":"Объединенное Королевство"},
{"country":"Argentina","value":0,"rus":"Аргентина"},
{"country":"Colombia","value":1,"rus":"Колумбия"},
{"country":"Germany","value":1,"rus":"Германия"},
{"country":"Mexico","value":1,"rus":"Мексика"},
{"country":"Poland","value":0,"rus":"Польша"},
{"country":"Iran","value":0,"rus":"Иран"},
{"country":"Peru","value":0,"rus":"Перу"},
{"country":"Turkey","value":0,"rus":"Турция"},
{"country":"Ukraine","value":1,"rus":"Украина"},
{"country":"South Africa","value":1,"rus":"Южная Африка"},
{"country":"Belgium","value":1,"rus":"Бельгия"},
{"country":"Indonesia","value":0,"rus":"Индонезия"},
{"country":"Netherlands","value":0,"rus":"Нидерланды"},
{"country":"Iraq","value":0,"rus":"Ирак"},
{"country":"Chile","value":0,"rus":"Чили"},
{"country":"Czechia","value":0,"rus":"Чехия"},
{"country":"Romania","value":0,"rus":"Румыния"},
{"country":"Bangladesh","value":0,"rus":"Бангладеш"},
{"country":"Canada","value":0,"rus":"Канада"},
{"country":"Philippines","value":0,"rus":"Филиппины"},
{"country":"Pakistan","value":1,"rus":"Пакистан"},
{"country":"Morocco","value":0,"rus":"Марокко"},
{"country":"Switzerland","value":0,"rus":"Швейцария"},
{"country":"Saudi Arabia","value":0,"rus":"Саудовская Аравия"},
{"country":"Israel","value":0,"rus":"Израиль"},
{"country":"Portugal","value":0,"rus":"Португалия"},
{"country":"Austria","value":0,"rus":"Австрия"},
{"country":"Sweden","value":0,"rus":"Швеция"},
{"country":"Hungary","value":0,"rus":"Венгрия"},
{"country":"Jordan","value":1,"rus":"Иордания"},
{"country":"Serbia","value":1,"rus":"Сербия"},
{"country":"Nepal","value":0,"rus":"Непал"},
{"country":"Ecuador","value":0,"rus":"Эквадор"},
{"country":"Panama","value":0,"rus":"Панама"},
{"country":"Kazakhstan","value":1,"rus":"Казахстан"},
{"country":"United Arab Emirates","value":0,"rus":"Объединенные Арабские Эмираты"},
{"country":"Georgia","value":1,"rus":"Грузия"},
{"country":"Bulgaria","value":0,"rus":"Болгария"},
{"country":"Japan","value":0,"rus":"Япония"},
{"country":"Croatia","value":0,"rus":"Хорватия"},
{"country":"Azerbaijan","value":0,"rus":"Азербайджан"},
{"country":"Belarus","value":0,"rus":"Беларусь"},
{"country":"Dominican Republic","value":0,"rus":"Доминиканская Респблика"},
{"country":"Costa Rica","value":0,"rus":"Коста-Рика"},
{"country":"Bolivia","value":0,"rus":"Боливия"},
{"country":"Kuwait","value":0,"rus":"Кувейт"},
{"country":"Armenia","value":1,"rus":"Армения"},
{"country":"Lebanon","value":0,"rus":"Ливан"},
{"country":"Qatar","value":0,"rus":"Катар"},
{"country":"Guatemala","value":0,"rus":"Гватемала"},
{"country":"Oman","value":0,"rus":"Оман"},
{"country":"Slovakia","value":0,"rus":"Словакия"},
{"country":"Moldova","value":1,"rus":"Молдова"},
{"country":"Greece","value":0,"rus":"Греция"},
{"country":"Egypt","value":0,"rus":"Египет"},
{"country":"Ethiopia","value":0,"rus":"Эфиопия"},
{"country":"Honduras","value":0,"rus":"Гондурас"},
{"country":"Tunisia","value":1,"rus":"Тунис"},
{"country":"Burma","value":1,"rus":"Бирма"},
{"country":"Denmark","value":0,"rus":"Дания"},
{"country":"Bosnia and Herzegovina","value":1,"rus":"Босния и Герцеговина"},
{"country":"China","value":0,"rus":"Китай"},
{"country":"Slovenia","value":0,"rus":"Словения"},
{"country":"Paraguay","value":0,"rus":"Парагвай"},
{"country":"Algeria","value":0,"rus":"Алжир"},
{"country":"Kenya","value":1,"rus":"Кения"},
{"country":"Libya","value":0,"rus":"Ливия"},
{"country":"Bahrain","value":0,"rus":"Бахрейн"},
{"country":"Lithuania","value":0,"rus":"Литва"},
{"country":"Malaysia","value":0,"rus":"Малайзия"},
{"country":"Kyrgyzstan","value":1,"rus":"Киргизия"},
{"country":"Ireland","value":0,"rus":"Ирландия"},
{"country":"Nigeria","value":1,"rus":"Нигерия"},
{"country":"North Macedonia","value":1,"rus":"Северная Македония"},
{"country":"Singapore","value":0,"rus":"Сингапур"},
{"country":"Ghana","value":0,"rus":"Гана"},
{"country":"Afghanistan","value":1,"rus":"Афганистан"},
{"country":"Albania","value":1,"rus":"Албания"},
{"country":"Kosovo","value":1,"rus":"Косово"},
{"country":"Korea, South","value":0,"rus":"Корея, Юг"},
{"country":"El Salvador","value":0,"rus":"Сальвадор"},
{"country":"Montenegro","value":0,"rus":"Черногория"},
{"country":"Luxembourg","value":0,"rus":"Люксембург"},
{"country":"Norway","value":0,"rus":"Норвегия"},
{"country":"Sri Lanka","value":0,"rus":"Шри Ланка"},
{"country":"Finland","value":0,"rus":"Финляндия"},
{"country":"Australia","value":0,"rus":"Австралия"},
{"country":"Uganda","value":1,"rus":"Уганда"},
{"country":"Cameroon","value":0,"rus":"Камерун"},
{"country":"Latvia","value":0,"rus":"Латвия"},
{"country":"Cote d'Ivoire","value":0,"rus":"Берег Слоновой Кости"},
{"country":"Sudan","value":0,"rus":"Судан"},
{"country":"Madagascar","value":0,"rus":"Мадагаскар"},
{"country":"Senegal","value":1,"rus":"Сенегал"},
{"country":"Estonia","value":0,"rus":"Эстония"},
{"country":"Mozambique","value":0,"rus":"Мозамбик"},
{"country":"Angola","value":1,"rus":"Ангола"},
{"country":"Namibia","value":0,"rus":"Намибия"},
{"country":"Congo (Kinshasa)","value":1,"rus":"Конго (Киншаса)"},
{"country":"Cyprus","value":0,"rus":"Кипр"},
{"country":"Guinea","value":1,"rus":"Гвинея"},
{"country":"Maldives","value":0,"rus":"Мальдивы"},
{"country":"Tajikistan","value":1,"rus":"Таджикистан"},
{"country":"Botswana","value":0,"rus":"Ботсвана"},
{"country":"Jamaica","value":0,"rus":"Ямайка"},
{"country":"Cabo Verde","value":0,"rus":"Кабо-Верде"},
{"country":"Malta","value":0,"rus":"Мальта"},
{"country":"Mauritania","value":0,"rus":"Мавритания"},
{"country":"Haiti","value":1,"rus":"Гаити"},
{"country":"Gabon","value":0,"rus":"Габон"},
{"country":"Cuba","value":0,"rus":"Куба"},
{"country":"Belize","value":0,"rus":"Белиз"},
{"country":"Syria","value":0,"rus":"Сирия"},
{"country":"Bahamas","value":0,"rus":"Багамские о-ва"},
{"country":"Andorra","value":0,"rus":"андорра"},
{"country":"Trinidad and Tobago","value":0,"rus":"Тринидад и Тобаго"},
{"country":"Eswatini","value":0,"rus":"Eswatini"},
{"country":"Rwanda","value":0,"rus":"Руанда"},
{"country":"Malawi","value":0,"rus":"Малави"},
{"country":"Congo (Brazzaville)","value":0,"rus":"Конго (Браззавиль)"},
{"country":"Nicaragua","value":0,"rus":"Никарагуа"},
{"country":"Guyana","value":0,"rus":"Гайана"},
{"country":"Djibouti","value":0,"rus":"Джибути"},
{"country":"Mali","value":0,"rus":"Мали"},
{"country":"Iceland","value":0,"rus":"Исландия"},
{"country":"Suriname","value":0,"rus":"Суринам"},
{"country":"Equatorial Guinea","value":0,"rus":"Экваториальная Гвинея"},
{"country":"Central African Republic","value":0,"rus":"Центрально-Африканская Республика"},
{"country":"Somalia","value":0,"rus":"Сомали"},
{"country":"Thailand","value":0,"rus":"Таиланд"},
{"country":"Gambia","value":0,"rus":"Гамбия"},
{"country":"Burkina Faso","value":0,"rus":"Буркина-Фасо"},
{"country":"Togo","value":0,"rus":"Идти"},
{"country":"South Sudan","value":0,"rus":"южный Судан"},
{"country":"Benin","value":0,"rus":"Бенин"},
{"country":"Guinea-Bissau","value":0,"rus":"Гвинея-Бисау"},
{"country":"Sierra Leone","value":1,"rus":"Сьерра-Леоне"},
{"country":"Lesotho","value":0,"rus":"Лесото"},
{"country":"Niger","value":0,"rus":"Нигер"},
{"country":"New Zealand","value":0,"rus":"Новая Зеландия"},
{"country":"San Marino","value":0,"rus":"Сан - Марино"},
{"country":"Chad","value":0,"rus":"Чад"},
{"country":"Liberia","value":1,"rus":"Либерия"},
{"country":"Liechtenstein","value":0,"rus":"Лихтенштейн"},
{"country":"Sao Tome and Principe","value":0,"rus":"Сан-Томе и Принсипи"},
{"country":"Mongolia","value":1,"rus":"Монголия"},
{"country":"Taiwan*","value":0,"rus":"Тайвань*"},
{"country":"Burundi","value":0,"rus":"Бурунди"},
{"country":"Diamond Princess","value":0,"rus":"Алмазная Принцесса"},
{"country":"Papua New Guinea","value":0,"rus":"Папуа - Новая Гвинея"},
{"country":"Monaco","value":0,"rus":"Монако"},
{"country":"Eritrea","value":0,"rus":"Эритрея"},
{"country":"Comoros","value":0,"rus":"Коморские острова"},
{"country":"Mauritius","value":0,"rus":"Маврикий"},
{"country":"Tanzania","value":1,"rus":"Танзания"},
{"country":"Bhutan","value":0,"rus":"Бутан"},
{"country":"Cambodia","value":0,"rus":"Камбоджа"},
{"country":"Barbados","value":0,"rus":"Барбадос"},
{"country":"Saint Lucia","value":0,"rus":"Сент-Люсия"},
{"country":"Seychelles","value":0,"rus":"Сейшельские острова"},
{"country":"Brunei","value":0,"rus":"Бруней"},
{"country":"Antigua and Barbuda","value":0,"rus":"Антигуа и Барбуда"},
{"country":"Saint Vincent and the Grenadines","value":0,"rus":"Святой Винсент и Гренадины"},
{"country":"Dominica","value":0,"rus":"Доминика"},
{"country":"Fiji","value":0,"rus":"Фиджи"},
{"country":"Grenada","value":0,"rus":"Гренада"},
{"country":"Laos","value":0,"rus":"Лаос"},
{"country":"Timor-Leste","value":0,"rus":"Восточный Тимор"},
{"country":"Holy See","value":0,"rus":"Святой Престол"},
{"country":"Saint Kitts and Nevis","value":0,"rus":"Сент-Китс и Невис"},
{"country":"Solomon Islands","value":0,"rus":"Соломоновы острова"},
{"country":"MS Zaandam","value":0,"rus":"MS Зандам"},
{"country":"Marshall Islands","value":0,"rus":"Маршалловы острова"},
{"country":"Samoa","value":0,"rus":"Самоа"},
{"country":"French Southern and Antarctic Lands","value":0,"rus":"Французкие территории"},
{"country":"The Bahamas","value":0,"rus":"Багамы"},
{"country":"Ivory Coast","value":0,"rus":"Кот-д’Ивуар"},
{"country":"Cape Verde","value":0,"rus":"Кабе Верде"},
{"country":"Northern Cyprus","value":0,"rus":"Северный Кипр"},
{"country":"Falkland Islands","value":0,"rus":"Фолклендские острова"},
{"country":"Guinea Bissau","value":0,"rus":"Гвинея"},
{"country":"Greenland","value":0,"rus":"Гренландия"},
{"country":"Siachen Glacier","value":0,"rus":""},
{"country":"New Caledonia","value":0,"rus":"Новая Каледония"},
{"country":"Puerto Rico","value":0,"rus":"Пуэрто Рико"},
{"country":"North Korea","value":0,"rus":"Северная Корея"},
{"country":"Palestine","value":0,"rus":"Палестина"},
{"country":"Western Sahara","value":0,"rus":"Северная Сахара"},
{"country":"South Georgia and South Sandwich Islands","value":0,"rus":""},
{"country":"Somaliland","value":0,"rus":"Сомали"},
{"country":"Swaziland","value":0,"rus":"Свазиленд"},
{"country":"Turkmenistan","value":0,"rus":"Туркменистан"},
{"country":"East Timor","value":0,"rus":"Восточный Тимор"},
{"country":"Uruguay","value":0,"rus":"Уругвай"},
{"country":"Uzbekistan","value":0,"rus":"Узбекистан"},
{"country":"Venezuela","value":0,"rus":"Венесуэла"},
{"country":"Vietnam","value":0,"rus":"Вьетнам"},
{"country":"Vanuatu","value":0,"rus":"Вануату"},
{"country":"Yemen","value":0,"rus":"Йемен"},
{"country":"Zambia","value":0,"rus":"Замбия"},
{"country":"Zimbabwe","value":0,"rus":"Зимбабве"}]

var all_countries = topojson.feature(world, world.objects.countries).features
var all_countries = all_countries.map(d => d.properties.admin)
function replaceCountry(k) {
    var country = world_data.filter(d => d['country'] == k)
    if (country.length == 0) {
        var replaced = k.replace('Democratic Republic of the Congo','Congo (Kinshasa)')
                    .replace('Republic of Congo','Congo (Brazzaville)')
                    .replace('Czech Republic','Czechia')
                    .replace('South Korea','Korea, South')
                    .replace('Macedonia','North Macedonia')
                    .replace('Myanmar','Burma')
                    .replace('Republic of Serbia','Serbia')
                    .replace('Taiwan','Taiwan*')
                    .replace('United Republic of Tanzania','Tanzania')
                    .replace('United States of America','US')
        var country = world_data.filter(d => d['country'] == replaced)
    }
    return country
}
function makeWorldMap(id,w) {
    if (w < 600) {
        var width = w,
        height = w/1.3,
        scale = 70;
    } else {
        var width = 800,
        scale = 150
        height = 550;
    }   
    
    var projection = d3.geoEquirectangular()
        .scale(scale)
        .translate([width / 2.1, height / 2]);

    var geoPath = d3.geoPath()
        .projection(projection);
    
    var color = d3.scaleThreshold()
        .domain([0, 1])
        .range(["rgb(127,0,0)","#eeeeee"]);
    
    d3.select("#"+id+"_map").html('')

    var svg = d3.select("#"+id+"_map").append("svg")
        .attr("width", width)
        .attr("height", height);
    
    if (width > 500) {
        var fontSize = '18px'
    } else {
        var fontSize = '16px'
    }
    
    svg.append("text")
        .attr("x", (width / 2) ) 
        .attr("y", 20)
        .attr("text-anchor", "middle")  
        .style("font-size", fontSize)
        .style("font-family", "Georgia")
        .text('Офисы фонда Сороса');
    var g = svg.append("g");
    
    g.selectAll("path")
        .data(topojson.feature(world, world.objects.countries).features.filter(d => d.properties.admin != 'Antarctica'))
        .enter()
        .append("path")
        //.attr("fill", "#eeeeee" )
        .attr("fill", function(d) {
            var country = replaceCountry(d.properties.admin)
            if (country.length>0 && country[0]['value'] == 1){
                return '#0094c4'
            } else {
                
                return "#eeeeee" 
            }
        } )
        .attr("stroke", '#e0e0e0')
        .attr("stroke-width", '0.5px')
        .attr("d", geoPath )
        .attr("class", "countries")
        .on("mouseover", function(d) {
            var country = replaceCountry(d.properties.admin)
            if (country.length>0){
                var country = country[0]
                if (country['value'] == 1) {
                    tooltipBee.html(
                        '<h4>'+country['rus']+'</h4>'
                    )
                } else {
                    tooltipBee.html(
                        '<h4>'+country['rus']+'</h4><p>Представительства нет</p>'
                    )
                }
                
            } else {
                tooltipBee.html('<h4>'+d.properties.admin+'</h4><p>Представительства нет</p>')
            }
            tooltipBee.style("visibility", "visible")
            })
        .on("mousemove", function() {
            return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
        })
        .on("mouseout", function(d){
            return tooltipBee.style("visibility", "hidden");
        });
    
    var tooltipBee = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("z-index", "10")
        .style("visibility", "hidden")
        .style("padding", "14px")
        .style("background-color", "white")
        .style("border", "1px solid #f5f5f5")
        .style("color", "black")
        .style("border-radius", "6px")
        .style("border-color", "black")
        .style("font", "12px sans-serif")
        .text("tooltip");
}
makeWorldMap('world',window.innerWidth)
makeBarChart(window.innerWidth)
var lineChartWidth = d3.select('#'+lineOptions.id).node().getBoundingClientRect().width
makeLineChart(lineChartWidth,lineOptions,linechartdata)
window.onresize = function(event) { 
    makeWorldMap('world',window.innerWidth)
    var lineChartWidth = d3.select('#'+lineOptions.id).node().getBoundingClientRect().width
    makeLineChart(lineChartWidth,lineOptions,linechartdata)
    makeBarChart(window.innerWidth)
};