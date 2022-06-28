if(document.createStyleSheet) {
    document.createStyleSheet('https://cdn.jsdelivr.net/gh/liga-net/few-projects/terrorism1.css');
   }
   else {
    var styles = "@import url('https://cdn.jsdelivr.net/gh/liga-net/few-projects/terrorism1.css');";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
}
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

var world_data = [{"country":"Afghanistan","value":12607,"rus":"Афганістан"},
{"country":"Albania","value":15,"rus":"Албанія"},
{"country":"Algeria","value":1350,"rus":"Алжир"},
{"country":"Andorra","value":0,"rus":"андорра"},
{"country":"Angola","value":79,"rus":"Ангола"},
{"country":"Antigua and Barbuda","value":0,"rus":"Антигуа та Барбуда"},
{"country":"Argentina","value":24,"rus":"Аргентина"},
{"country":"Armenia","value":11,"rus":"Вірменія"},
{"country":"Australia","value":46,"rus":"Австралія"},
{"country":"Austria","value":18,"rus":"Австрія"},
{"country":"Azerbaijan","value":18,"rus":"Азербайджан"},
{"country":"Bahamas","value":1,"rus":"Багамські о-ви"},
{"country":"Bahrain","value":168,"rus":"Бахрейн"},
{"country":"Bangladesh","value":1079,"rus":"Бангладеш"},
{"country":"Barbados","value":0,"rus":"Барбадос"},
{"country":"Belarus","value":9,"rus":"Білорусь"},
{"country":"Belgium","value":25,"rus":"Бельгія"},
{"country":"Belize","value":2,"rus":"Беліз"},
{"country":"Benin","value":1,"rus":"Бенін"},
{"country":"Bhutan","value":6,"rus":"Бутан"},
{"country":"Bolivia","value":9,"rus":"Болівія"},
{"country":"Bosnia and Herzegovina","value":0,"rus":"Боснія і Герцеговина"},
{"country":"Botswana","value":0,"rus":"Ботсвана"},
{"country":"Brazil","value":26,"rus":"Бразилія"},
{"country":"Brunei","value":0,"rus":"Бруней"},
{"country":"Bulgaria","value":17,"rus":"Болгарія"},
{"country":"Burkina Faso","value":49,"rus":"Буркіна-Фасо"},
{"country":"Burma","value":0,"rus":"Бірма"},
{"country":"Burundi","value":365,"rus":"Бурунді"},
{"country":"Cabo Verde","value":0,"rus":"Кабо-Верде"},
{"country":"Cambodia","value":19,"rus":"Камбоджа"},
{"country":"Cameroon","value":313,"rus":"Камерун"},
{"country":"Canada","value":53,"rus":"Канада"},
{"country":"Cape Verde","value":0,"rus":"Кабе Верде"},
{"country":"Central African Republic","value":274,"rus":"Центрально-Африканська Республіка"},
{"country":"Chad","value":73,"rus":"Чад"},
{"country":"Chile","value":95,"rus":"Чилі"},
{"country":"China","value":137,"rus":"Китай"},
{"country":"Colombia","value":2103,"rus":"Колумбія"},
{"country":"Comoros","value":0,"rus":"Коморські острови"},
{"country":"Congo (Brazzaville)","value":0,"rus":"Конго (Браззавіль)"},
{"country":"Congo (Kinshasa)","value":0,"rus":"Конго (Кіншаса)"},
{"country":"Costa Rica","value":1,"rus":"Коста-Ріка"},
{"country":"Cote d'Ivoire","value":0,"rus":"Берег Слонової Кістки"},
{"country":"Croatia","value":11,"rus":"Хорватія"},
{"country":"Cuba","value":1,"rus":"Куба"},
{"country":"Cyprus","value":25,"rus":"Кіпр"},
{"country":"Czechia","value":0,"rus":"Чехія"},
{"country":"Denmark","value":8,"rus":"Данія"},
{"country":"Diamond Princess","value":0,"rus":"Алмазна Принцеса"},
{"country":"Djibouti","value":4,"rus":"Джібуті"},
{"country":"Dominica","value":0,"rus":"Домініка"},
{"country":"Dominican Republic","value":3,"rus":"Домініканська Республіка"},
{"country":"East Timor","value":10,"rus":"Східний Тимор"},
{"country":"Ecuador","value":30,"rus":"Еквадор"},
{"country":"Egypt","value":2004,"rus":"Єгипет"},
{"country":"El Salvador","value":0,"rus":"Сальвадор"},
{"country":"Equatorial Guinea","value":1,"rus":"Екваторіальна Гвінея"},
{"country":"Eritrea","value":7,"rus":"Еритрея"},
{"country":"Estonia","value":4,"rus":"Естонія"},
{"country":"Eswatini","value":0,"rus":"Eswatini"},
{"country":"Ethiopia","value":100,"rus":"Ефіопія"},
{"country":"Falkland Islands","value":0,"rus":"Фолклендські острови"},
{"country":"Fiji","value":5,"rus":"Фіджі"},
{"country":"Finland","value":16,"rus":"Фінляндія"},
{"country":"France","value":444,"rus":"Франція"},
{"country":"French Southern and Antarctic Lands","value":0,"rus":"Французькі території"},
{"country":"Gabon","value":4,"rus":"Габон"},
{"country":"Gambia","value":1,"rus":"Гамбія"},
{"country":"Georgia","value":112,"rus":"Грузія"},
{"country":"Germany","value":204,"rus":"Німеччина"},
{"country":"Ghana","value":2,"rus":"Гана"},
{"country":"Greece","value":548,"rus":"Греція"},
{"country":"Greenland","value":0,"rus":"Гренландія"},
{"country":"Grenada","value":0,"rus":"Гренада"},
{"country":"Guatemala","value":19,"rus":"Гватемала"},
{"country":"Guinea","value":18,"rus":"Гвінея"},
{"country":"Guinea Bissau","value":0,"rus":"Гвінея"},
{"country":"Guinea-Bissau","value":9,"rus":"Гвінея-Бісау"},
{"country":"Guyana","value":9,"rus":"Гайана"},
{"country":"Haiti","value":28,"rus":"Гаїті"},
{"country":"Holy See","value":0,"rus":"Святий Престол"},
{"country":"Honduras","value":16,"rus":"Гондурас"},
{"country":"Hungary","value":7,"rus":"Угорщина"},
{"country":"Iceland","value":2,"rus":"Ісландія"},
{"country":"India","value":8918,"rus":"Індія"},
{"country":"Indonesia","value":549,"rus":"Індонезія"},
{"country":"Iran","value":154,"rus":"Іран"},
{"country":"Iraq","value":24475,"rus":"Ірак"},
{"country":"Ireland","value":167,"rus":"Ірландія"},
{"country":"Israel","value":1173,"rus":"Ізраїль"},
{"country":"Italy","value":123,"rus":"Італія"},
{"country":"Ivory Coast","value":59,"rus":"Кот-д’Івуар"},
{"country":"Jamaica","value":4,"rus":"Ямайка"},
{"country":"Japan","value":41,"rus":"Японія"},
{"country":"Jordan","value":40,"rus":"Йорданія"},
{"country":"Kazakhstan","value":19,"rus":"Казахстан"},
{"country":"Kenya","value":605,"rus":"Кенія"},
{"country":"Korea","value":0,"rus":"Південна Корея"},
{"country":"Kosovo","value":157,"rus":"Косово"},
{"country":"Kuwait","value":12,"rus":"Кувейт"},
{"country":"Kyrgyzstan","value":27,"rus":"Киргизія"},
{"country":"Laos","value":19,"rus":"Лаос"},
{"country":"Latvia","value":5,"rus":"Латвія"},
{"country":"Lebanon","value":609,"rus":"Ліван"},
{"country":"Lesotho","value":3,"rus":"Лесото"},
{"country":"Liberia","value":13,"rus":"Ліберія"},
{"country":"Libya","value":2235,"rus":"Лівія"},
{"country":"Liechtenstein","value":0,"rus":"Ліхтенштейн"},
{"country":"Lithuania","value":0,"rus":"Литва"},
{"country":"Luxembourg","value":0,"rus":"Люксембург"},
{"country":"Madagascar","value":13,"rus":"Мадагаскар"},
{"country":"Malawi","value":2,"rus":"Малаві"},
{"country":"Malaysia","value":62,"rus":"Малайзія"},
{"country":"Maldives","value":21,"rus":"Мальдіви"},
{"country":"Mali","value":533,"rus":"Малі"},
{"country":"Malta","value":5,"rus":"Мальта"},
{"country":"Marshall Islands","value":0,"rus":"Маршаллові острови"},
{"country":"Mauritania","value":13,"rus":"Мавританія"},
{"country":"Mauritius","value":0,"rus":"Маврикій"},
{"country":"Mexico","value":120,"rus":"Мексика"},
{"country":"Moldova","value":5,"rus":"Молдова"},
{"country":"Monaco","value":0,"rus":"Монако"},
{"country":"Mongolia","value":0,"rus":"Монголія"},
{"country":"Montenegro","value":5,"rus":"Чорногорія"},
{"country":"Morocco","value":13,"rus":"Марокко"},
{"country":"Mozambique","value":143,"rus":"Мозамбік"},
{"country":"MS Zaandam","value":0,"rus":"MS Зандам"},
{"country":"Namibia","value":27,"rus":"Намібія"},
{"country":"Nepal","value":1172,"rus":"Непал"},
{"country":"Netherlands","value":24,"rus":"Нідерланди"},
{"country":"New Caledonia","value":0,"rus":"Нова Каледонія"},
{"country":"New Zealand","value":11,"rus":"Нова Зеландія"},
{"country":"Nicaragua","value":3,"rus":"Нікарагуа"},
{"country":"Niger","value":114,"rus":"Нігер"},
{"country":"Nigeria","value":3826,"rus":"Нігерія"},
{"country":"North Korea","value":0,"rus":"Північна Корея"},
{"country":"North Macedonia","value":0,"rus":"Північна Македонія"},
{"country":"Northern Cyprus","value":0,"rus":"північний Кіпр"},
{"country":"Norway","value":8,"rus":"Норвегія"},
{"country":"Oman","value":0,"rus":"Оман"},
{"country":"Pakistan","value":12551,"rus":"Пакистан"},
{"country":"Palestine","value":0,"rus":"Палестина"},
{"country":"Panama","value":3,"rus":"Панама"},
{"country":"Papua New Guinea","value":10,"rus":"Папуа Нова Гвінея"},
{"country":"Paraguay","value":81,"rus":"Парагвай"},
{"country":"Peru","value":73,"rus":"Перу"},
{"country":"Philippines","value":4920,"rus":"Філіппіни"},
{"country":"Poland","value":5,"rus":"Польща"},
{"country":"Portugal","value":2,"rus":"Португалія"},
{"country":"Puerto Rico","value":0,"rus":"Пуерто Ріко"},
{"country":"Qatar","value":4,"rus":"Катар"},
{"country":"Romania","value":1,"rus":"Румунія"},
{"country":"Russia","value":1866,"rus":"Росія"},
{"country":"Rwanda","value":31,"rus":"Руанда"},
{"country":"Saint Kitts and Nevis","value":0,"rus":"Сент-Кітс та Невіс"},
{"country":"Saint Lucia","value":0,"rus":"Сент-Люсія"},
{"country":"Saint Vincent and the Grenadines","value":0,"rus":"Святий Вінсент та Гренадини"},
{"country":"Samoa","value":0,"rus":"Самоа"},
{"country":"San Marino","value":0,"rus":"Сан - Маріно"},
{"country":"Sao Tome and Principe","value":0,"rus":"Сан-Томе та Прінсіпі"},
{"country":"Saudi Arabia","value":352,"rus":"Саудівська Аравія"},
{"country":"Senegal","value":46,"rus":"Сенегал"},
{"country":"Serbia","value":12,"rus":"Сербія"},
{"country":"Seychelles","value":0,"rus":"Сейшельські острови"},
{"country":"Siachen Glacier","value":0,"rus":""},
{"country":"Sierra Leone","value":28,"rus":"Сьєрра-Леоне"},
{"country":"Singapore","value":0,"rus":"Сінгапур"},
{"country":"Slovakia","value":0,"rus":"Словаччина"},
{"country":"Slovenia","value":1,"rus":"Словенія"},
{"country":"Solomon Islands","value":3,"rus":"Соломонові острови"},
{"country":"Somalia","value":3973,"rus":"Сомалі"},
{"country":"Somaliland","value":0,"rus":"Сомалі"},
{"country":"South Africa","value":130,"rus":"Південна Африка"},
{"country":"South Georgia and South Sandwich Islands","value":0,"rus":""},
{"country":"South Sudan","value":225,"rus":"південний Судан"},
{"country":"Spain","value":421,"rus":"Іспанія"},
{"country":"Sri Lanka","value":858,"rus":"Шрі Ланка"},
{"country":"Sudan","value":891,"rus":"Судан"},
{"country":"Suriname","value":0,"rus":"Сурінам"},
{"country":"Swaziland","value":5,"rus":"Свазіленд"},
{"country":"Sweden","value":84,"rus":"Швеція"},
{"country":"Switzerland","value":15,"rus":"Швейцарія"},
{"country":"Syria","value":2055,"rus":"Сирія"},
{"country":"Taiwan*","value":10,"rus":"Тайвань*"},
{"country":"Tajikistan","value":29,"rus":"Таджикистан"},
{"country":"Tanzania","value":52,"rus":"Танзанія"},
{"country":"Thailand","value":3623,"rus":"Таїланд"},
{"country":"The Bahamas","value":0,"rus":"Багами"},
{"country":"Timor-Leste","value":0,"rus":"Східний Тимор"},
{"country":"Togo","value":1,"rus":"Йти"},
{"country":"Trinidad and Tobago","value":7,"rus":"Трінідад і Тобаго"},
{"country":"Tunisia","value":97,"rus":"Туніс"},
{"country":"Turkey","value":1803,"rus":"Туреччина"},
{"country":"Turkmenistan","value":2,"rus":"Туркменістан"},
{"country":"Uganda","value":183,"rus":"Уганда"},
{"country":"Ukraine","value":1683,"rus":"Україна"},
{"country":"United Arab Emirates","value":5,"rus":"Об'єднані Арабські Емірати"},
{"country":"United Kingdom","value":1061,"rus":"Об'єднане Королівство"},
{"country":"Uruguay","value":2,"rus":"Уругвай"},
{"country":"US","value":475,"rus":"США"},
{"country":"Uzbekistan","value":10,"rus":"Узбекистан"},
{"country":"Vanuatu","value":0,"rus":"Вануату"},
{"country":"Venezuela","value":56,"rus":"Венесуела"},
{"country":"Vietnam","value":6,"rus":"В'єтнам"},
{"country":"Western Sahara","value":1,"rus":"Північна Сахара"},
{"country":"Yemen","value":3240,"rus":"Ємен"},
{"country":"Zambia","value":11,"rus":"Замбія"},
{"country":"Zimbabwe","value":29,"rus":"Зімбабве"}]
        
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
                height = w/1.2,
                scale = 90;
            } else {
                var width = 600,
                scale = 150
                height = 550;
            }   
            var projection = d3.geoNaturalEarth1()
                .scale(scale)
                .rotate([-10.32,0])
                .center([0, 10.96])
                .translate([width / 2, height / 2.6]);

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
            
            var color = d3.scaleThreshold()
                .domain(makeDomain(1000,d3.max(values),d3.max(values)/8))
                .range(["#fff1f1","#ffd7d9","#ffb3b8","#ff8389","#fa4d56","#da1e28","#a2191f","#750e13"]);

            g.selectAll("path")
                .data(topojson.feature(world, world.objects.countries).features.filter(d => d.properties.admin != 'Antarctica'))
                .enter()
                .append("path")
                .attr("fill", function(d) {
                    var country = replaceCountry(d.properties.admin)
                    if (country.length>0 && country[0]['value'] > 0){
                        return color(country[0]['value'])
                    } else {
                        return "#eeeeee" 
                    }
                } )
                .attr("stroke", 'black')
                .attr("stroke-width", '.2px')
                .attr("d", geoPath )
                .attr("class", "countries")
                .on("mouseover", function(d) {
                    var country = replaceCountry(d.properties.admin)
                    if (country.length>0){
                        var country = country[0]
                        if (country['value'] > 0) {
                            tooltipBee.html(
                                '<h4>'+country['rus']+'</h4><p>'+country['value']+'</p>'
                            )
                        } else {
                            tooltipBee.html(
                                '<h4>'+country['rus']+'</h4><p>Данных нет</p>'
                            )
                        }
                        
                    } else {
                        tooltipBee.html('<h4>'+d.properties.admin+'</h4><p>Данных нет</p>')
                    }
                    tooltipBee.style("visibility", "visible")
                    })
                .on("mousemove", function() {
                    return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
                })
                .on("mouseout", function(d){
                    return tooltipBee.style("visibility", "hidden");
                })
            svg.selectAll("text")
                .data(topojson.feature(world, world.objects.countries).features.filter(d => d.properties.admin != 'Antarctica'))
                .enter()
                .append("svg:text")
                    .text(function(d,i){
                        var country = replaceCountry(d.properties.admin)
                        if (country.length>0 && country[0]['value'] > 1000 && width >= 600){
                            return country[0]['value']
                        }
                    })
                    .attr("x", function(d){
                        var country = replaceCountry(d.properties.admin)
                        if (country.length>0 && country[0]['value'] > 1000 && width >= 600) {
                            return geoPath.centroid(d)[0];
                        }
                        
                    })
                    .attr("y", function(d){
                        var country = replaceCountry(d.properties.admin)
                        if (country.length>0 && country[0]['value'] > 1000 && width >= 600) {
                            return geoPath.centroid(d)[1];
                        }
                    })
                    .attr("text-anchor","middle")
                    .attr('font-family','Circe')
                    .attr('fill','black')
                    .attr('font-size','10px');

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
        window.onresize = function(event) { 
            makeWorldMap('world',window.innerWidth)
        };