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

var world_data = [
    {"country":"US","value":4,"rus":"США","desc":"Більше 1 500 тонн озброєння та боєприпасів (у тому числі Javelin та гранатомети SMAW-D)","delivery":"1"},
    {"country":"US","value":5,"rus":"США","desc":"2 катери Island","delivery":"1"},
    {"country":"US","value":5,"rus":"США","desc":"Гелікоптери Мі-17","delivery":"0"},
    {"country":"US","value":4,"rus":"США","desc":"Ще близько 20 рейсів із озброєнням та боєприпасами по 80 тонн у середньому","delivery":"0"},
    {"country":"United Kingdom","value":1,"rus":"Великобританія","desc":"Амуніція (у тому числі бронежилети та каски)","delivery":"1"},
    {"country":"United Kingdom","value":5,"rus":"Великобританія","desc":"Військова техніка та амуніція (у тому числі бронежилети та каски)","delivery":"1"},
    {"country":"United Kingdom","value":4,"rus":"Великобританія","desc":"2 000 протитанкових гранатометів NLAW","delivery":"1"},
    {"country":"United Kingdom","value":2,"rus":"Великобританія","desc":"30 бійців спецназу для навчання українських військових","delivery":"1"},
    {"country":"Czechia","value":4,"rus":"Чехія","desc":"4 000 артилерійських снарядів калібру 152 мм","delivery":"0"},
    {"country":"Canada","value":2,"rus":"Канада","desc":"Розширення місії інструкторів до 260 військових","delivery":"1"},
    {"country":"Canada","value":1,"rus":"Канада","desc":"Засоби індивідуального захисту, розвідки та логістичного забезпечення","delivery":"1"},
    {"country":"Canada","value":2,"rus":"Канада","desc":"Кулемети, пістолети, карабіни, 1,5 млн патронів, снайперські гвинтівки та супутнє обладнання на суму понад $5,5 млн","delivery":"0"},
    {"country":"Canada","value":4,"rus":"Канада","desc":"Розширення місії інструкторів до 400 військових","delivery":"1"},
    {"country":"Lithuania","value":5,"rus":"Литва","desc":"Понад 500 бронежилетів та балістичні пояси","delivery":"1"},
    {"country":"Lithuania","value":1,"rus":"Литва","desc":"Американські переносні зенітно-ракетні комплекси Stinger та боєприпаси","delivery":"1"},
    {"country":"Lithuania","value":4,"rus":"Литва","desc":"Автомобілі HMMWV (мінімум п'ять)","delivery":"1"},
    {"country":"Latvia","value":4,"rus":"Латвія","desc":"Американські Stinger","delivery":"0"},
    {"country":"Latvia","value":1,"rus":"Латвія","desc":"Сухпайки","delivery":"0"},
    {"country":"Latvia","value":1,"rus":"Латвія","desc":"Екіпірування","delivery":"0"},
    {"country":"Estonia","value":4,"rus":"Естонія","desc":"Javelin","delivery":"1"},
    {"country":"Estonia","value":5,"rus":"Естонія","desc":"Польовий шпиталь типу Role 2","delivery":"1"},
    {"country":"Estonia","value":4,"rus":"Естонія","desc":"Гаубиці калібру 122 мм та боєприпаси до них (проте потрібен дозвіл Німеччини та Фінляндії)","delivery":"0"},
    {"country":"Poland","value":4,"rus":"Польща","desc":"ПЗРК Piorun","delivery":"0"},
    {"country":"Poland","value":4,"rus":"Польща","desc":"Легкі піхотні міномети LMP-2017 калібру 60 мм","delivery":"0"},
    {"country":"Poland","value":4,"rus":"Польща","desc":"Ручні гранатомети RPG-40","delivery":"0"},
    {"country":"Poland","value":4,"rus":"Польща","desc":"Безпілотники","delivery":"0"},
    {"country":"Poland","value":4,"rus":"Польща","desc":"Боєприпаси","delivery":"0"},
    {"country":"Germany","value":5,"rus":"Німеччина","desc":"Польовий шпиталь типу Role 2","delivery":"1"},
    {"country":"Germany","value":1,"rus":"Німеччина","desc":"5000 касок","delivery":"0"},
    {"country":"Denmark","value":3,"rus":"Данія","desc":"Вирішила виділити 22 млн євро на зміцнення обороноздатності України","delivery":"0"},
    {"country":"Belgium","value":3,"rus":"Бельгія","desc":"Євросоюз вирішив виділити 31 млн. євро на зміцнення обороноздатності України","delivery":"0"},
{"country":"Afghanistan","value":0,"rus":"Афганістан"},
{"country":"Albania","value":0,"rus":"Албания"},
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
{"country":"Belize","value":0,"rus":"Белиз"},
{"country":"Benin","value":0,"rus":"Бенин"},
{"country":"Bhutan","value":0,"rus":"Бутан"},
{"country":"Bolivia","value":0,"rus":"Боливия"},
{"country":"Bosnia and Herzegovina","value":0,"rus":"Босния и Герцеговина"},
{"country":"Botswana","value":0,"rus":"Ботсвана"},
{"country":"Brazil","value":0,"rus":"Бразилия"},
{"country":"Brunei","value":0,"rus":"Бруней"},
{"country":"Bulgaria","value":0,"rus":"Болгария"},
{"country":"Burkina Faso","value":0,"rus":"Буркина-Фасо"},
{"country":"Burma","value":0,"rus":"Бирма"},
{"country":"Burundi","value":0,"rus":"Бурунди"},
{"country":"Cabo Verde","value":0,"rus":"Кабо-Верде"},
{"country":"Cambodia","value":0,"rus":"Камбоджа"},
{"country":"Cameroon","value":0,"rus":"Камерун"},
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
{"country":"Croatia","value":0,"rus":"Хорватия"},
{"country":"Cuba","value":0,"rus":"Куба"},
{"country":"Cyprus","value":0,"rus":"Кипр"},
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
{"country":"Eswatini","value":0,"rus":"Eswatini"},
{"country":"Ethiopia","value":0,"rus":"Эфиопия"},
{"country":"Falkland Islands","value":0,"rus":"Фолклендские острова"},
{"country":"Fiji","value":0,"rus":"Фиджи"},
{"country":"Finland","value":0,"rus":"Финляндия"},
{"country":"France","value":0,"rus":"Франция"},
{"country":"French Southern and Antarctic Lands","value":0,"rus":"Французкие территории"},
{"country":"Gabon","value":0,"rus":"Габон"},
{"country":"Gambia","value":0,"rus":"Гамбия"},
{"country":"Georgia","value":0,"rus":"Грузия"},
{"country":"Ghana","value":0,"rus":"Гана"},
{"country":"Greece","value":0,"rus":"Греция"},
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
{"country":"Hungary","value":0,"rus":"Венгрия"},
{"country":"Iceland","value":0,"rus":"Исландия"},
{"country":"India","value":0,"rus":"Индия"},
{"country":"Indonesia","value":0,"rus":"Индонезия"},
{"country":"Iran","value":0,"rus":"Иран"},
{"country":"Iraq","value":0,"rus":"Ирак"},
{"country":"Ireland","value":0,"rus":"Ирландия"},
{"country":"Israel","value":0,"rus":"Израиль"},
{"country":"Italy","value":0,"rus":"Италия"},
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
{"country":"Lebanon","value":0,"rus":"Ливан"},
{"country":"Lesotho","value":0,"rus":"Лесото"},
{"country":"Liberia","value":0,"rus":"Либерия"},
{"country":"Libya","value":0,"rus":"Ливия"},
{"country":"Liechtenstein","value":0,"rus":"Лихтенштейн"},
{"country":"Luxembourg","value":0,"rus":"Люксембург"},
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
{"country":"Montenegro","value":0,"rus":"Черногория"},
{"country":"Morocco","value":0,"rus":"Марокко"},
{"country":"Mozambique","value":0,"rus":"Мозамбик"},
{"country":"MS Zaandam","value":0,"rus":"MS Зандам"},
{"country":"Namibia","value":0,"rus":"Намибия"},
{"country":"Nepal","value":0,"rus":"Непал"},
{"country":"Netherlands","value":0,"rus":"Нидерланды"},
{"country":"New Caledonia","value":0,"rus":"Новая Каледония"},
{"country":"New Zealand","value":0,"rus":"Новая Зеландия"},
{"country":"Nicaragua","value":0,"rus":"Никарагуа"},
{"country":"Niger","value":0,"rus":"Нигер"},
{"country":"Nigeria","value":0,"rus":"Нигерия"},
{"country":"North Korea","value":0,"rus":"Северная Корея"},
{"country":"North Macedonia","value":0,"rus":"Северная Македония"},
{"country":"Northern Cyprus","value":0,"rus":"Северный Кипр"},
{"country":"Norway","value":0,"rus":"Норвегия"},
{"country":"Oman","value":0,"rus":"Оман"},
{"country":"Pakistan","value":0,"rus":"Пакистан"},
{"country":"Palestine","value":0,"rus":"Палестина"},
{"country":"Panama","value":0,"rus":"Панама"},
{"country":"Papua New Guinea","value":0,"rus":"Папуа - Новая Гвинея"},
{"country":"Paraguay","value":0,"rus":"Парагвай"},
{"country":"Peru","value":0,"rus":"Перу"},
{"country":"Philippines","value":0,"rus":"Филиппины"},
{"country":"Portugal","value":0,"rus":"Португалия"},
{"country":"Puerto Rico","value":0,"rus":"Пуэрто Рико"},
{"country":"Qatar","value":0,"rus":"Катар"},
{"country":"Romania","value":0,"rus":"Румыния"},
{"country":"Russia","value":0,"rus":"Росія"},
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
{"country":"Slovakia","value":0,"rus":"Словакия"},
{"country":"Slovenia","value":0,"rus":"Словения"},
{"country":"Solomon Islands","value":0,"rus":"Соломоновы острова"},
{"country":"Somalia","value":0,"rus":"Сомали"},
{"country":"Somaliland","value":0,"rus":"Сомали"},
{"country":"South Africa","value":0,"rus":"Южная Африка"},
{"country":"South Georgia and South Sandwich Islands","value":0,"rus":""},
{"country":"South Sudan","value":0,"rus":"южный Судан"},
{"country":"Spain","value":0,"rus":"Испания"},
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
{"country":"Turkey","value":0,"rus":"Турция"},
{"country":"Turkmenistan","value":0,"rus":"Туркменистан"},
{"country":"Uganda","value":0,"rus":"Уганда"},
{"country":"Ukraine","value":0,"rus":"Украина"},
{"country":"United Arab Emirates","value":0,"rus":"Объединенные Арабские Эмираты"},
{"country":"Uruguay","value":0,"rus":"Уругвай"},
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
                var replaced = k.replace('Democratic Republic of the Congo','Congo Kinshasa')
                            .replace('Republic of Congo','Congo Brazzaville')
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
                scale = 170;
            } else {
                var width = 600,
                scale = 170
                height = 550;
            }   
            var projection = d3.geoMercator()
                .scale(scale)
                .rotate([30.32,0])
                .center([0, 40.96])
                .translate([width / 2, height / 1.7]);

            var geoPath = d3.geoPath()
                .projection(projection);
            
            d3.select("#"+id+"_map").html('')

            var svg = d3.select("#"+id+"_map").append("svg")
                .attr("width", width)
                .attr("height", height);
            const zoom = d3.zoom()
            .scaleExtent([1, 8])
            .on('zoom', zoomed);
            svg.call(zoom);
            function zoomed() {
                g.selectAll('path') // To prevent stroke width from scaling
                    .attr('transform', d3.event.transform);
            }
            if (width > 500) {
                var fontSize = '18px'
            } else {
                var fontSize = '16px'
            }
            var g = svg.append("g").attr('id','strana');
            var values = world_data.map(d => d.value)
            
            var color = d3.scaleThreshold()
                .domain([1,2,3,4,5])
                .range(["#57000E","#3B97EA","#186564","#A2155D","#F45261",'#132C51']);
            
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
            var topoMap = topojson.feature(world, world.objects.countries).features.filter(d => d.properties.admin != 'Antarctica' )
            g.selectAll("path")
                .data(topoMap)
                .enter()
                .append("path")
                .attr('id',function(d) {
                    var country = replaceCountry(d.properties.admin)
                    if (country.length>0 && country[0]['value'] > 0){
                        return country[0]['country'].replace(' ','').replace('(','').replace(')','').replace("'",'').replace("*",'')
                    } else {
                        return "none" 
                    }
                } )
                .attr("fill",'#eeeeee')
                .attr("stroke", 'white')
                .attr("stroke-width", '1px')
                .attr("d", geoPath )
                .attr("class", "countries")
                .on("mouseover", function(d) {
                    var country = replaceCountry(d.properties.admin)
                    if (country.length>0){
                        var country = country[0]
                        if (country['value'] > 0) {
                            var filt = world_data.filter(x => x.country == country.country)
                            var delivery = [...new Set(filt.map(x => x.delivery))]
                            var returnValue1 = filt.filter(x => x.delivery == '1').map(x => x.desc).join('</li><li>')
                            if (returnValue1.length != 0) {
                                var returnValue1 = 'Поставлено: <ul><li>'+returnValue1+'</li></ul>'
                            }
                            var returnValue2 = filt.filter(x => x.delivery == '0').map(x => x.desc).join('</li><li>')
                            if (returnValue2.length != 0) {
                                var returnValue2 = 'Пообіцяли: <ul><li>'+returnValue2+'</li></ul>'
                            }
                            
                            tooltipBee.html(
                                '<h4>'+country['rus']+'</h4>'+returnValue1+returnValue2
                                )
                            
                            
                        } else {
                            if (country['rus'] != 'Росія') {
                                tooltipBee.html(
                                    '<h4>'+country['rus']+'</h4><p>У відкритих джерелах немає інформації про надану Україні допомогу</p>'
                                )
                            } else {
                                tooltipBee.html(
                                    '<h4>'+country['rus']+'</h4>'
                                )
                            }
                            
                        }
                        
                    } else {
                        tooltipBee.html('<h4>'+d.properties.admin+'</h4><p>У відкритих джерелах немає інформації про надану Україні допомогу</p>')
                    }
                    tooltipBee.style("visibility", "visible")
                    })
                .on("mousemove", function() {
                    return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
                })
                .on("mouseout", function(d){
                    return tooltipBee.style("visibility", "hidden");
                })
            function createGradient(idd) {
                var svg = d3.select('#'+idd.replace(' ','').replace('(','').replace(')','').replace("'",'').replace("*",''));
                var g = d3.select('#strana');
                var svgDefs = g.append('defs');

                var mainGradient = svgDefs.append('linearGradient')
                    .attr('id', 'gradient_'+idd.replace(' ','').replace('(','').replace(')','').replace("'",'').replace("*",''))
                    .attr("gradientTransform", "rotate(90)");;

                var filt = world_data.filter(d => d.country == idd)
                var offset = 100/filt.length
                filt.forEach(function(value,index) {
                    mainGradient.append('stop')
                        .attr('stop-color',color(value.value))
                        .attr('offset', String(offset*(index+1))+'%');
                })

                svg.style('fill','url(#gradient_'+idd.replace(' ','')+')')
            }

            
            var unique = [...new Set(world_data.map(v => v.country))]
        
            unique.forEach(function(value) {
                createGradient(value)
            })
            

            
            var keys = ['Амуніція', 'Військові інструктори', 'Гроші', 'Зброя та боєприпаси', 'Техніка'];

            var colorLegend = d3.scaleThreshold()
                .domain(keys)
                .range(["#57000E","#3B97EA","#186564","#A2155D","#F45261",'#132C51']);

            var legendSvg = svg.append('g')
            
            var size = 10
            legendSvg.selectAll("mydots")
            .data(keys)
            .enter()
            .append("rect")
                .attr("x", 50)
                .attr("y", function(d,i){ return (height-120) + i*(size+5)}) 
                .attr("width", size)
                .attr("height", size)
                .style("fill", function(d){ return colorLegend(d)})
                
            legendSvg.selectAll("mylabels")
            .data(keys)
            .enter()
            .append("text")
                .attr("x", 51 + size*1.2)
                .attr("y", function(d,i){ return (height-116) + i*(size+5) + (size/2)}) 
                .attr('font-family','sans-serif')
                .attr('fill','black')
                .attr('font-size','10px')
                .text(function(d){ return d})
                .attr("text-anchor", "left")
                .style("alignment-baseline", "middle")
        }
        makeWorldMap('world',window.innerWidth)
        window.onresize = function(event) { 
            makeWorldMap('world',window.innerWidth)
        };