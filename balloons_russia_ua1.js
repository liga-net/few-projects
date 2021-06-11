function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
const range = (start, stop, step = 1) =>
    Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)
function makeDomain(min, max, step) {
    return range(min, max, step)
}
function getData(id){
    var value = $.ajax({ 
        url: id, 
        async: false
    }).responseJSON;
    return value;
}

var world = getData('https://cdn.jsdelivr.net/gh/liga-net/few-projects/world-topo.json')
var world_data = [{"country":"Afghanistan","value":0,"rus":"Афганистан"},
{"country":"Albania","value":1,"rus":"Албания"},
{"country":"Algeria","value":0,"rus":"Алжир"},
{"country":"Andorra","value":0,"rus":"андорра"},
{"country":"Angola","value":0,"rus":"Ангола"},
{"country":"Antigua and Barbuda","value":0,"rus":"Антигуа и Барбуда"},
{"country":"Argentina","value":0,"rus":"Аргентина"},
{"country":"Armenia","value":0,"rus":"Армения"},
{"country":"Australia","value":0,"rus":"Австралия"},
{"country":"Austria","value":0,"rus":"Австрия"},
{"country":"Azerbaijan","value":0,"rus":"Азербайджан"},
{"country":"Bahamas","value":0,"rus":"Багамские о-ва"},
{"country":"Bahrain","value":0,"rus":"Бахрейн"},
{"country":"Bangladesh","value":0,"rus":"Бангладеш"},
{"country":"Barbados","value":0,"rus":"Барбадос"},
{"country":"Belarus","value":0,"rus":"Беларусь"},
{"country":"Belgium","value":1,"rus":"Бельгия"},
{"country":"Belize","value":0,"rus":"Белиз"},
{"country":"Benin","value":0,"rus":"Бенин"},
{"country":"Bhutan","value":0,"rus":"Бутан"},
{"country":"Bolivia","value":0,"rus":"Боливия"},
{"country":"Bosnia and Herzegovina","value":0,"rus":"Босния и Герцеговина"},
{"country":"Botswana","value":0,"rus":"Ботсвана"},
{"country":"Brazil","value":0,"rus":"Бразилия"},
{"country":"Brunei","value":0,"rus":"Бруней"},
{"country":"Bulgaria","value":1,"rus":"Болгария"},
{"country":"Burkina Faso","value":0,"rus":"Буркина-Фасо"},
{"country":"Burma","value":0,"rus":"Бирма"},
{"country":"Burundi","value":0,"rus":"Бурунди"},
{"country":"Cabo Verde","value":0,"rus":"Кабо-Верде"},
{"country":"Cambodia","value":0,"rus":"Камбоджа"},
{"country":"Cameroon","value":0,"rus":"Камерун"},
{"country":"Canada","value":1,"rus":"Канада"},
{"country":"Cape Verde","value":0,"rus":"Кабе Верде"},
{"country":"Central African Republic","value":0,"rus":"Центрально-Африканская Республика"},
{"country":"Chad","value":0,"rus":"Чад"},
{"country":"Chile","value":0,"rus":"Чили"},
{"country":"China","value":0,"rus":"Китай"},
{"country":"Colombia","value":0,"rus":"Колумбия"},
{"country":"Comoros","value":0,"rus":"Коморские острова"},
{"country":"Congo (Brazzaville)","value":0,"rus":"Конго (Браззавиль)"},
{"country":"Congo (Kinshasa)","value":0,"rus":"Конго (Киншаса)"},
{"country":"Costa Rica","value":0,"rus":"Коста-Рика"},
{"country":"Cote d'Ivoire","value":0,"rus":"Берег Слоновой Кости"},
{"country":"Croatia","value":1,"rus":"Хорватия"},
{"country":"Cuba","value":0,"rus":"Куба"},
{"country":"Cyprus","value":0,"rus":"Кипр"},
{"country":"Czechia","value":1,"rus":"Чехія"},
{"country":"Denmark","value":1,"rus":"Дания"},
{"country":"Diamond Princess","value":0,"rus":"Алмазная Принцесса"},
{"country":"Djibouti","value":0,"rus":"Джибути"},
{"country":"Dominica","value":0,"rus":"Доминика"},
{"country":"Dominican Republic","value":0,"rus":"Доминиканская Респблика"},
{"country":"East Timor","value":0,"rus":"Восточный Тимор"},
{"country":"Ecuador","value":0,"rus":"Эквадор"},
{"country":"Egypt","value":0,"rus":"Египет"},
{"country":"El Salvador","value":0,"rus":"Сальвадор"},
{"country":"Equatorial Guinea","value":0,"rus":"Экваториальная Гвинея"},
{"country":"Eritrea","value":0,"rus":"Эритрея"},
{"country":"Estonia","value":1,"rus":"Эстония"},
{"country":"Eswatini","value":0,"rus":"Eswatini"},
{"country":"Ethiopia","value":0,"rus":"Эфиопия"},
{"country":"Falkland Islands","value":0,"rus":"Фолклендские острова"},
{"country":"Fiji","value":0,"rus":"Фиджи"},
{"country":"Finland","value":0,"rus":"Финляндия"},
{"country":"France","value":1,"rus":"Франция"},
{"country":"French Southern and Antarctic Lands","value":0,"rus":"Французкие территории"},
{"country":"Gabon","value":0,"rus":"Габон"},
{"country":"Gambia","value":0,"rus":"Гамбия"},
{"country":"Georgia","value":0,"rus":"Грузия"},
{"country":"Germany","value":1,"rus":"Німеччина"},
{"country":"Ghana","value":0,"rus":"Гана"},
{"country":"Greece","value":1,"rus":"Греция"},
{"country":"Greenland","value":0,"rus":"Гренландия"},
{"country":"Grenada","value":0,"rus":"Гренада"},
{"country":"Guatemala","value":0,"rus":"Гватемала"},
{"country":"Guinea","value":0,"rus":"Гвинея"},
{"country":"Guinea Bissau","value":0,"rus":"Гвинея"},
{"country":"Guinea-Bissau","value":0,"rus":"Гвинея-Бисау"},
{"country":"Guyana","value":0,"rus":"Гайана"},
{"country":"Haiti","value":0,"rus":"Гаити"},
{"country":"Holy See","value":0,"rus":"Святой Престол"},
{"country":"Honduras","value":0,"rus":"Гондурас"},
{"country":"Hungary","value":1,"rus":"Угорщина"},
{"country":"Iceland","value":1,"rus":"Исландия"},
{"country":"India","value":0,"rus":"Индия"},
{"country":"Indonesia","value":0,"rus":"Индонезия"},
{"country":"Iran","value":0,"rus":"Иран"},
{"country":"Iraq","value":0,"rus":"Ирак"},
{"country":"Ireland","value":0,"rus":"Ирландия"},
{"country":"Israel","value":0,"rus":"Израиль"},
{"country":"Italy","value":1,"rus":"Италия"},
{"country":"Ivory Coast","value":0,"rus":"Кот-д’Ивуар"},
{"country":"Jamaica","value":0,"rus":"Ямайка"},
{"country":"Japan","value":0,"rus":"Япония"},
{"country":"Jordan","value":0,"rus":"Иордания"},
{"country":"Kazakhstan","value":0,"rus":"Казахстан"},
{"country":"Kenya","value":0,"rus":"Кения"},
{"country":"Korea","value":0,"rus":"Южная Корея"},
{"country":"Kosovo","value":0,"rus":"Косово"},
{"country":"Kuwait","value":0,"rus":"Кувейт"},
{"country":"Kyrgyzstan","value":0,"rus":"Киргизия"},
{"country":"Laos","value":0,"rus":"Лаос"},
{"country":"Latvia","value":1,"rus":"Латвия"},
{"country":"Lebanon","value":0,"rus":"Ливан"},
{"country":"Lesotho","value":0,"rus":"Лесото"},
{"country":"Liberia","value":0,"rus":"Либерия"},
{"country":"Libya","value":0,"rus":"Ливия"},
{"country":"Liechtenstein","value":0,"rus":"Лихтенштейн"},
{"country":"Lithuania","value":1,"rus":"Литва"},
{"country":"Luxembourg","value":1,"rus":"Люксембург"},
{"country":"Madagascar","value":0,"rus":"Мадагаскар"},
{"country":"Malawi","value":0,"rus":"Малави"},
{"country":"Malaysia","value":0,"rus":"Малайзия"},
{"country":"Maldives","value":0,"rus":"Мальдивы"},
{"country":"Mali","value":0,"rus":"Мали"},
{"country":"Malta","value":0,"rus":"Мальта"},
{"country":"Marshall Islands","value":0,"rus":"Маршалловы острова"},
{"country":"Mauritania","value":0,"rus":"Мавритания"},
{"country":"Mauritius","value":0,"rus":"Маврикий"},
{"country":"Mexico","value":0,"rus":"Мексика"},
{"country":"Moldova","value":0,"rus":"Молдова"},
{"country":"Monaco","value":0,"rus":"Монако"},
{"country":"Mongolia","value":0,"rus":"Монголия"},
{"country":"Montenegro","value":1,"rus":"Черногория"},
{"country":"Morocco","value":0,"rus":"Марокко"},
{"country":"Mozambique","value":0,"rus":"Мозамбик"},
{"country":"MS Zaandam","value":0,"rus":"MS Зандам"},
{"country":"Namibia","value":0,"rus":"Намибия"},
{"country":"Nepal","value":0,"rus":"Непал"},
{"country":"Netherlands","value":1,"rus":"Нидерланды"},
{"country":"New Caledonia","value":0,"rus":"Новая Каледония"},
{"country":"New Zealand","value":0,"rus":"Новая Зеландия"},
{"country":"Nicaragua","value":0,"rus":"Никарагуа"},
{"country":"Niger","value":0,"rus":"Нигер"},
{"country":"Nigeria","value":0,"rus":"Нигерия"},
{"country":"North Korea","value":0,"rus":"Северная Корея"},
{"country":"North Macedonia","value":1,"rus":"Северная Македония"},
{"country":"Northern Cyprus","value":0,"rus":"Северный Кипр"},
{"country":"Norway","value":1,"rus":"Норвегия"},
{"country":"Oman","value":0,"rus":"Оман"},
{"country":"Pakistan","value":0,"rus":"Пакистан"},
{"country":"Palestine","value":0,"rus":"Палестина"},
{"country":"Panama","value":0,"rus":"Панама"},
{"country":"Papua New Guinea","value":0,"rus":"Папуа - Новая Гвинея"},
{"country":"Paraguay","value":0,"rus":"Парагвай"},
{"country":"Peru","value":0,"rus":"Перу"},
{"country":"Philippines","value":0,"rus":"Филиппины"},
{"country":"Poland","value":1,"rus":"Польща"},
{"country":"Portugal","value":1,"rus":"Португалия"},
{"country":"Puerto Rico","value":0,"rus":"Пуэрто Рико"},
{"country":"Qatar","value":0,"rus":"Катар"},
{"country":"Romania","value":1,"rus":"Румунія"},
{"country":"Russia","value":3,"rus":"Россия"},
{"country":"Rwanda","value":0,"rus":"Руанда"},
{"country":"Saint Kitts and Nevis","value":0,"rus":"Сент-Китс и Невис"},
{"country":"Saint Lucia","value":0,"rus":"Сент-Люсия"},
{"country":"Saint Vincent and the Grenadines","value":0,"rus":"Святой Винсент и Гренадины"},
{"country":"Samoa","value":0,"rus":"Самоа"},
{"country":"San Marino","value":0,"rus":"Сан - Марино"},
{"country":"Sao Tome and Principe","value":0,"rus":"Сан-Томе и Принсипи"},
{"country":"Saudi Arabia","value":0,"rus":"Саудовская Аравия"},
{"country":"Senegal","value":0,"rus":"Сенегал"},
{"country":"Serbia","value":0,"rus":"Сербия"},
{"country":"Seychelles","value":0,"rus":"Сейшельские острова"},
{"country":"Siachen Glacier","value":0,"rus":""},
{"country":"Sierra Leone","value":0,"rus":"Сьерра-Леоне"},
{"country":"Singapore","value":0,"rus":"Сингапур"},
{"country":"Slovakia","value":1,"rus":"Словакия"},
{"country":"Slovenia","value":1,"rus":"Словения"},
{"country":"Solomon Islands","value":0,"rus":"Соломоновы острова"},
{"country":"Somalia","value":0,"rus":"Сомали"},
{"country":"Somaliland","value":0,"rus":"Сомали"},
{"country":"South Africa","value":0,"rus":"Южная Африка"},
{"country":"South Georgia and South Sandwich Islands","value":0,"rus":""},
{"country":"South Sudan","value":0,"rus":"южный Судан"},
{"country":"Spain","value":1,"rus":"Іспанія"},
{"country":"Sri Lanka","value":0,"rus":"Шри Ланка"},
{"country":"Sudan","value":0,"rus":"Судан"},
{"country":"Suriname","value":0,"rus":"Суринам"},
{"country":"Swaziland","value":0,"rus":"Свазиленд"},
{"country":"Sweden","value":0,"rus":"Швеция"},
{"country":"Switzerland","value":0,"rus":"Швейцария"},
{"country":"Syria","value":0,"rus":"Сирия"},
{"country":"Taiwan*","value":0,"rus":"Тайвань*"},
{"country":"Tajikistan","value":0,"rus":"Таджикистан"},
{"country":"Tanzania","value":0,"rus":"Танзания"},
{"country":"Thailand","value":0,"rus":"Таиланд"},
{"country":"The Bahamas","value":0,"rus":"Багамы"},
{"country":"Timor-Leste","value":0,"rus":"Восточный Тимор"},
{"country":"Togo","value":0,"rus":"Идти"},
{"country":"Trinidad and Tobago","value":0,"rus":"Тринидад и Тобаго"},
{"country":"Tunisia","value":0,"rus":"Тунис"},
{"country":"Turkey","value":1,"rus":"Туреччина"},
{"country":"Turkmenistan","value":0,"rus":"Туркменистан"},
{"country":"Uganda","value":0,"rus":"Уганда"},
{"country":"Ukraine","value":2,"rus":"Украина"},
{"country":"United Arab Emirates","value":0,"rus":"Объединенные Арабские Эмираты"},
{"country":"United Kingdom","value":1,"rus":"Объединенное Королевство"},
{"country":"Uruguay","value":0,"rus":"Уругвай"},
{"country":"US","value":1,"rus":"США"},
{"country":"Uzbekistan","value":0,"rus":"Узбекистан"},
{"country":"Vanuatu","value":0,"rus":"Вануату"},
{"country":"Venezuela","value":0,"rus":"Венесуэла"},
{"country":"Vietnam","value":0,"rus":"Вьетнам"},
{"country":"Western Sahara","value":0,"rus":"Северная Сахара"},
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
        var width = w-10,
        height = 450,
        scale = 340;
    } else {
        var width = 600,
        scale = 450
        height = 550;
    }   
    var projection = d3.geoMercator()
        .scale(scale)
        .rotate([-25.32,0])
        .center([0, 52.96])
        .translate([width / 2, height / 1.7]);

    var geoPath = d3.geoPath()
        .projection(projection);
    
    d3.select("#"+id+"_map").html('')

    var svg = d3.select("#"+id+"_map").append("svg")
        .attr("width", width)
        .attr("height", height);
    
    if (width > 500) {
        var fontSize = '18px'
    } else {
        var fontSize = '16px'
    }
        
    var g = svg.append("g");
    var values = world_data.map(d => d.value)
    

    function colorRange(value) {
        if (value == 0) {
            return "#eeeeee" 
        } else if (value == 1) {
            return "#01579b" 
        } else if (value == 2) {
            return "#fdd835" 
        }else if (value == 3) {
            return "#d84315" 
        }
    }
    var keys = ['Інші країни',"Країна НАТО", "Україна", "Росія"]
    svg.selectAll("mydots")
        .data(keys)
        .enter()
        .append("rect")
            .attr("x", 0)
            .attr("y", function(d,i){ return 102 + i*18}) // 100 is where the first dot appears. 25 is the distance between dots
            .attr("width", 10)
            .attr("height", 10)
            .style("fill", function(d,i){ return colorRange(i)})

    // Add one dot in the legend for each name.
    svg.selectAll("mylabels")
    .data(keys)
    .enter()
    .append("text")
        .attr("x", 15)
        .attr("y", function(d,i){ return 110 + i*18.5}) // 100 is where the first dot appears. 25 is the distance between dots
        .style("fill", 'black')
        .text(function(d){ return d})
        .attr("text-anchor", "left")
        .attr("font-size", "12px")
        .attr("font-family", "sans-serif")
        .style("alignment-baseline", "middle")
        
    g.selectAll("path")
        .data(topojson.feature(world, world.objects.countries).features.filter(d => d.properties.admin != 'Antarctica'))
        .enter()
        .append("path")
        .attr("fill", function(d) {
            var country = replaceCountry(d.properties.admin)
            if (country.length>0 && country[0]['value'] > 0){
                return colorRange(country[0]['value'])
            } else {
                return "#eeeeee" 
            }
        } )
        .attr("stroke", '#e0e0e0')
        .attr("stroke-width", '0.5px')
        .attr("d", geoPath )
        .attr("class", "countries")
        
    moscow = [36.8251335,55.5815245];
    kyiv = [30.2525134,50.4021368];
        
    riga = [23.9890811,56.9715833];
    tallinn = [24.5981604, 59.4717925];
    vilnius = [25.112952,54.7008021];
    neiden = [29.3016108,69.696462]
    var points = [moscow,kyiv,riga,tallinn,vilnius,neiden]
    var pointsText = ['Москва',"Київ","Рига","Таллінн","Вільнюс",'Нейден, Норвегія']
    data = [[kyiv,moscow],[riga,moscow],[tallinn,moscow],[vilnius,moscow],[neiden,moscow]];
    time = [660000.0,757350.0,780777.0,711072.0,1495134.0]
    

    svg.selectAll("circle")
        .data(points)
        .enter()
        .append("circle")
        .attr("cx", function (d) {return projection(d)[0]; })
        .attr("cy", function (d) { return projection(d)[1]; })
        .attr("r", "4px")
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", "1.5px")
    
    d3.xml("https://cdn.jsdelivr.net/gh/liga-net/few-projects/balloon.svg", function(xml) {  
        var importedNode = document.importNode(xml.documentElement, true);
        var scale = 0.04
        var dataset = [[kyiv,moscow],[kyiv,moscow],[riga,moscow],[tallinn,moscow],[vilnius,moscow],[neiden,moscow]];
        svg.selectAll("g")
            .data(dataset)
            .enter()
            .append("g")
            .attr('class','balloons')
            .attr("transform", function(d, i){ 
                return "translate(" + (projection(d[0])[0]-5) + "," + (projection(d[0])[1]-10)   + ")"+"scale("+ scale +")";
            })
            .each(function(d, i){ 
                var balloons = this.appendChild(importedNode.cloneNode(true)); 
                d3.select(balloons).select("path").attr("fill", "black");
            })
        var start_button = d3.select('#start_button')
        start_button.on("click", function() {
        var line = svg.selectAll("line")
            .data(data)
            .enter()
            .append("line")
            .attr("stroke-width", 1.5)
            .attr('opacity',.5)
            .attr("stroke", "black")
            .attr("id", function(d,i){return "path"+String(i)})
            .attr("x1", d=>projection(d[0])[0])
            .attr("y1", d=>projection(d[0])[1])
            .attr("x2", d=>projection(d[0])[0])
            .attr("y2", d=>projection(d[0])[1])
            .transition()
            .duration(function(d,i) {return time[i]/50})
            .attr("x2", d=>projection(d[1])[0])
            .attr("y2", d=>projection(d[1])[1])
        

        var balloons = d3.selectAll('.balloons')
            .transition()
            .duration(1)
            .attr("transform", function(d, i){ 
                return "translate(" + (projection(d[0])[0]-5) + "," + (projection(d[0])[1]-10)   + ")"+"scale("+ scale +")";
            })
            .transition()
            .duration(function(d,i) {return time[i]/50})
            .attr("transform", function(d, i){ 
                return "translate(" + (projection(d[1])[0]-5) + "," + (projection(d[1])[1]-10)   + ")"+"scale("+ scale +")";
            })
        })
        
        
    });
    svg.selectAll("pointsText")
        .data(points)
        .enter()
        .append("text")
        .attr("x", function (d) {return projection(d)[0]; })
        .attr("y", function (d) { return projection(d)[1]-10; })
        .text(function(d,i) {return pointsText[i]})
        .attr('font-size',12)
        .attr('font-family','sans-serif')
        .style('font-weight','bold')
        .attr('fill','white')
        .attr('border','1px solid white')
        .attr('text-anchor','middle')
        .style('text-shadow','0 0 4px rgba(0, 0, 0, 0.8), 0 0 4px rgba(0, 0, 0, 0.8)')

    counties_list = ['Польща', "Чехія", "Угорщина", "Туреччина", "Румунія", "Іспанія", "Німеччина"]
    svg.selectAll("text")
        .data(topojson.feature(world, world.objects.countries).features.filter(d => d.properties.admin != 'Antarctica'))
        .enter()
        .append("svg:text")
            .text(function(d,i){
                var country = replaceCountry(d.properties.admin)
                if (country.length>0 && counties_list.includes(country[0]['rus'])){
                    return country[0]['rus']
                } else if (country.length>0 && country[0]['rus'] == "Франция"){
                    return country[0]['rus']
                }
            })
            .attr("x", function(d){
                var country = replaceCountry(d.properties.admin)
                if (country.length>0 && counties_list.includes(country[0]['rus'])){
                    return geoPath.centroid(d)[0];
                } else if (country.length>0 && country[0]['rus'] == "Франция"){
                    return geoPath.centroid(d)[0]+30;
                }
            })
            .attr("y", function(d){
                var country = replaceCountry(d.properties.admin)
                if (country.length>0 && counties_list.includes(country[0]['rus'])){
                    return geoPath.centroid(d)[1];
                }else if (country.length>0 && country[0]['rus'] == "Франция"){
                    return geoPath.centroid(d)[1]-30;
                }
            })
            .attr("text-anchor","middle")
            .attr('font-family','sans-serif')
            .attr('fill','white')
            .attr('font-size','10px');


}
makeWorldMap('world',window.innerWidth)
window.onresize = function(event) { 
    makeWorldMap('world',window.innerWidth)
};