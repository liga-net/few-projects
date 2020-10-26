if(document.createStyleSheet) {
    document.createStyleSheet('https://cdn.jsdelivr.net/gh/liga-net/few-projects/local_elections/local_results.css');
   }
   else {
    var styles = "@import url('https://cdn.jsdelivr.net/gh/liga-net/few-projects/local_elections/local_results.css');";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
}
var city_replace = [
    {'id':'Киев','name':'kyiv','rotate':-30.48,'center':50.46,'scale':55000},
    {'id':'Харьков','name':'kharkiv','rotate':-36.24,'center':50.03,'scale':95000},
    {'id':'Днепр','name':'dnipro','rotate':-34.97,'center':48.48,'scale':80000},
    {'id':'Львов','name':'lviv','rotate':-24.0,'center':49.86,'scale':100000},
    {'id':'Одесса','name':'odesa','rotate':-30.70,'center':46.44,'scale':110000}]
var rayon_replace = [
    {'name': 'Голосіївський район', 'id': '479'},
    {'name': 'Дарницький район', 'id': '480'},
    {'name': 'Деснянський район', 'id': '481'},
    {'name': 'Дніпровський район', 'id': '482'},
    {'name': 'Оболонський район', 'id': '483'},
    {'name': 'Печерський район', 'id': '484'},
    {'name': 'Подільський район', 'id': '485'},
    {'name': 'Святошинський район', 'id': '486'},
    {'name': 'Солом’янський район', 'id': '487'},
    {'name': 'Шевченківський район', 'id': '488'},
    {'name': 'Амур-Нижньодніпровський район', 'id': '713'},
    {'name': 'Індустріальний район', 'id': '716'},
    {'name': 'Новокодацький район', 'id': '719'},
    {'name': 'Самарський район', 'id': '720'},
    {'name': 'Соборний район', 'id': '715'},
    {'name': 'Центральний район', 'id': '717'},
    {'name': 'Чечелівський район', 'id': '718'},
    {'name': 'Шевченківський район', 'id': '714'},
    {'name': 'Новобаварський район', 'id': '789'},
    {'name': 'Індустріальний район', 'id': '794'},
    {'name': 'Київський район', 'id': '790'},
    {'name': 'Слобідський район', 'id': '791'},
    {'name': 'Московський район', 'id': '793'},
    {'name': 'Немишлянський район', 'id': '795'},
    {'name': 'Холодногірський район', 'id': '792'},
    {'name': 'Основ’янський район', 'id': '796'},
    {'name': 'Шевченківський район', 'id': '788'},
    {'name': 'Київський район', 'id': '777'},
    {'name': 'Малиновський район', 'id': '778'},
    {'name': 'Приморський район', 'id': '779'},
    {'name': 'Галицький район', 'id': '767'},
    {'name': 'Залізничний район', 'id': '768'},
    {'name': 'Личаківський район', 'id': '769'},
    {'name': 'Сихівський район', 'id': '772'},
    {'name': 'Франківський район', 'id': '770'},
    {'name': 'Шевченківський район', 'id': '771'}];
    function getValue(){
        var value = $.ajax({ 
            url: 'https://spreadsheets.google.com/feeds/list/1Q0ZpV4cGYjpINGRDbMHrCxvq_MnrC3Lj2ElDKnZSFhA/1/public/values?alt=json', 
            async: false
        }).responseJSON.feed.entry;
        return value;
    }
    function toggle(element_id) {
        var x = document.getElementsByClassName(element_id);
        for (item=0; item<x.length;item++){
            x[item].style.display = "table-row"
        }
    }
    function cityCandidates(city,type,poll) {
        var filter_city = data.filter(d => d['gsx$'+type+'city']['$t'] == city)
        var filter_city = filter_city.filter(d => d['gsx$'+type+'exitname']['$t'] == poll)
        var id = city_replace.filter(d => d['id'] == city)[0].name;
        if (type =='candidate') {
            var column_name = 'Кандидат'
        } else {
            var column_name = 'Партия'
        }
        
        if (data[0]['gsx$bullet']['$t'] != '') {
            var city_table = '<tr><td>'+column_name+'</td><td>Голосов</td><td></td></tr>'
        } else {
            var element = document.getElementById('select_'+id+'_'+type)
            if (element == null) {
            var filter = data.filter(d => d['gsx$'+type+'city']['$t'] == city)
            var exitname = [...new Set(filter.map(d => d['gsx$'+type+'exitname']['$t']))]
            
            var exitname = exitname.filter(d => d != poll)
            const index = exitname.indexOf('');
            if (index > -1) {
                exitname.splice(index, 1);
            }
            var exitname_buttons = ''
            if (exitname.length >= 1) {
                exitname_buttons += '<option Value="'+poll+'">'+poll+'</option>'
                for (r=0;r<exitname.length; r++) {
                    exitname_buttons += '<option Value="'+exitname[r]+'">'+exitname[r]+'</option>'
                }
                if (type == 'candidate') {
                    $('#'+id+'_text').append('. Экзитполы: <select id="select_'+id+'_'+type+'" class="exit_select">'+exitname_buttons+'</select>')
                } else {
                    $('#'+id+'_council_text').append('. Экзитполы: <select id="select_'+id+'_'+type+'" class="exit_select">'+exitname_buttons+'</select>')
                }
            } else {
                if (type == 'candidate') {
                    $('#'+id+'_text').append('. Экзитпол: '+poll)
                } else {
                    $('#'+id+'_council_text').append('. Экзитпол: '+poll)
                }
            }
            }
            var city_table = '<tr><td>'+column_name+'</td><td>Экзитпол</td><td></td></tr>'
        }
        filter_city.forEach(function(element,index) {
            if (data[0]['gsx$bullet']['$t'] != '') {
                var add_element = '<td>'+element['gsx$'+type]['$t']+'</td><td class="number">'+element['gsx$'+type+'percent']['$t']+'%</td><td class="barline"><div class="bar" style="width: '+element['gsx$'+type+'bar']['$t']+'%; position: relative; background-color: #00123f; left: 0%; height: 6px;"></div></td></tr>'
            } else {
                var add_element = '<td>'+element['gsx$'+type]['$t']+'</td><td class="number">'+element['gsx$'+type+'exit']['$t']+'</td><td class="barline"><div class="bar" style="width: '+element['gsx$'+type+'bar']['$t']+'%; position: relative; background-color: #00123f; left: 0%; height: 6px;"></div></td></tr>'
            }
            if (index <= 2) {
                city_table += '<tr>'+add_element
            } else {
                city_table += '<tr class="'+id+'_'+type+'_hide" style="display:none">'+add_element
            }
        });
        $('#'+id+'_'+type).html('<tbody>'+city_table+'</tbody>');
        $('.'+id+'_'+type+'_button').css('display','block')
    }

    var data = getValue();

    $('#yavk_bar').css("width",parseFloat(data[0]['gsx$yavka']['$t'])+'%');
    $('#narush1').text(data[0]['gsx$narushtime']['$t'])
    $('#yavka1').text(data[0]['gsx$yavka']['$t'])
    $('#yavka1_2').text('Явка на ' + data[0]['gsx$yavka2']['$t']);
    if (data[0]['gsx$bullet']['$t'] != '') {
        $('#bul_bar').css("width",parseFloat(data[0]['gsx$bullet']['$t'])+'%');
        $('#bullet1').text(data[0]['gsx$bullet']['$t']+'%')
        $('#bullet1_2').text('Обработано');
        $('#bullet_block').css("display","inline-block")
    }
    $('#start_block').css("display","block")
    function checkColumn(column) {
        var cities = [...new Set(data.map(d => d['gsx$'+column]['$t']))];
        const index = cities.indexOf('');
            if (index > -1) {
            cities.splice(index, 1);
        }
        return cities
    }
    var cities = checkColumn('candidatecity')
    cities.forEach(function(d) {cityCandidates(d,'candidate','Шустер LIVE')})
    cities.forEach(function(d) {cityCandidates(d,'council','Шустер LIVE')})
    var null_cities = city_replace.filter(k => cities.includes(k.id) == false)
    null_cities.forEach(function(d) {
        var city_id = city_replace.filter(k => k.id == d.id)[0].name
        $('#'+city_id+'_text').append(': результаты ожидаются после 20:00')
        $('#'+city_id+'_council_text').append(': результаты ожидаются после 20:00')
    }); 

    var mapCities = checkColumn('map')
    mapCities.forEach(function(d) {makeCityMap(d)})

    $('.table_button').on('click',function() {
        var splited = $(this)[0].className.split(' ')[1]
        toggle(splited.replace('_button','_hide'))
        $('.'+splited).css('display','none')
    }) 
    $('.exit_select').on('change',function() {
        var splited = $(this)[0].id.split('_')
        var id = city_replace.filter(d => d['name'] == splited[1])[0].id;
        cityCandidates(id,splited[2],$(this)[0].value)
    })