function getValue(){
    var value = $.ajax({ 
       url: 'https://spreadsheets.google.com/feeds/list/1BiDhy4MY4gGI9GSZhpwX1qv8ULRie3Q9akubebF2UMM/1/public/values?alt=json', 
       async: false
    }).responseJSON.feed.entry;
    return value;
 }
 
 var data = getValue();
 function cityCandidates(city,poll) {
     $("#dashboard table").remove()
     var candidates_name = '',
         candidates_img = '',
         exit = '',
         results = '';
     var filter_city = data.filter(d => d['gsx$candidatecity']['$t'] == city)
     var filter_city = filter_city.filter(d => d['gsx$candidateexitname']['$t'] == poll)
     if (filter_city.length == 0) {
         var filter_city = data.filter(d => d['gsx$candidatecity']['$t'] == city)
         var filter_city = filter_city.filter(d => d['gsx$candidateexitname']['$t'] == 'Шустер LIVE')
         $('#exit_option').text('Шустер LIVE')
         $('#bullet_text').text('Экзитпол ')
     } else {
         if (data[0]['gsx$bullet']['$t'] == '') {
             var filter = data.filter(d => d['gsx$candidatecity']['$t'] == city)
             var exitname = [...new Set(filter.map(d => d['gsx$candidateexitname']['$t']))]
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
                 $('#exit_option').html('<select id="exit_select">'+exitname_buttons+'</select>')
             } else {
                 $('#exit_option').text(poll)
             }
             $('#bullet_text').text('Экзитпол ')
         }
     } 
     var candidate_count = 3
     if (window.innerWidth > 973) {
         for (l=0; l < candidate_count; l++) {
             candidates_img += '<td class="pn"><div class="candidate_img"><img src="https://cdn.jsdelivr.net/gh/liga-net/few-projects/local_elections/img/'+filter_city[l]['gsx$candidateimg']['$t']+'"></div></td>'
             candidates_name += '<td class="pn"><div class="candidate_name">'+filter_city[l]['gsx$candidate']['$t']+'</div></td>'
             exit += '<td class="tdblock">'+filter_city[l]['gsx$candidateexit']['$t']+'</td>'
             results += '<td class="results">'+filter_city[l]['gsx$candidatepercent']['$t']+'%</td>'
         }
     } else {
         for (l=0; l < candidate_count; l++) {
             candidates_name += '<tr><td>'+filter_city[l]['gsx$candidate']['$t']+'</td>'
             if (data[0]['gsx$bullet']['$t'] != '') {
                 candidates_name += '<td class="results">'+filter_city[l]['gsx$candidatepercent']['$t']+'%</td></tr>'
             } else {
                 candidates_name += '<td class="tdblock">'+filter_city[l]['gsx$candidateexit']['$t']+'</td></tr>'
             }
             
         }
     }
     if (window.innerWidth > 973) {
         var inner = '<tr id="cand_img">'+candidates_img+'</tr>' 
         inner += '<tr>'+candidates_name+'</tr>' 
         if (data[0]['gsx$bullet']['$t'] != '') {
             inner += results
         } else {
             inner += exit
         }
         var council_amout = 5
     } else {
         var council_amout = 3
         if (data[0]['gsx$bullet']['$t'] != '') {
             var inner = candidates_name
         } else {
             var inner = '<tr><td class="tdleft" id="candidates_name"></td><td>Экзитпол</td></tr>' +candidates_name
         }
         
     }
     var table_candidates = '<table>' +inner +'</table>'
     if (data[0]['gsx$showmap']['$t'] == '' && data[0]['gsx$council']['$t'] == '') {
         $('#dashboard').append(table_candidates);
     } else if (data[0]['gsx$council']['$t'] != '') {
         if (data[0]['gsx$bullet']['$t'] != '') {
             var party_inner = '<tr><td></td><td></td>'
         } else {
             var party_inner = '<tr><td></td><td>Экзитпол</td>'
         }
         var party_exit = '',
             party_results = '',
             filter_council = data.filter(d => d['gsx$councilcity']['$t'] == city)
         var filter_council = filter_council.filter(d => d['gsx$councilexitname']['$t'] == poll)
         if (filter_council.length == 0) {
             var filter_council = data.filter(d => d['gsx$councilcity']['$t'] == city)
         }
         for (l=0; l < council_amout; l++) {
             var tr = '<tr><td>'+filter_council[l]['gsx$council']['$t']+'</td>'//+'<td>'+filter_council[l]['gsx$councilexit']['$t']+'</td>'
             if (data[0]['gsx$bullet']['$t'] != '') {
                 tr += '<td>'+filter_council[l]['gsx$councilpercent']['$t']+'</td>'
             } else {
                 tr += '<td>'+filter_council[l]['gsx$councilexit']['$t']+'</td>'
             }
             party_inner += tr
         }
         var table_party = '<table class="council"><caption class="table_title">Городской совет</caption>' +party_inner +'</table>'
         var table_candidates = '<table id="mer"><caption class="table_title">Мэр</caption>' +inner +'</table>'
         $('#table_results').html(table_party);
         $('#dashboard').append(table_candidates);
     }
     if (data[0]['gsx$bullet']['$t'] == '' || data[0]['gsx$showmap']['$t'] == '') { 
             $('#dashboard_part1').css('display','inline-block');
             $('#dashboard_part1').css('vertical-align','top');
             $('#mer').css('display','inline-block');
             $('#mer').css('vertical-align','top');
             if (window.innerWidth > 978) {
                 $('#mer').css('margin-left','50px');
             } else {
                 $('#mer').css('margin-left','30px');
             }
             $('#button').css('margin-top','0px');
     }
     

     
 }
 function makeMap() {
     var data2 = [["ua-vi", 153],["ua-vo", 152],["ua-dp", 147],["ua-dt", 145],["ua-zt", 150],["ua-zk", 137],["ua-zp", 142],["ua-if", 154],["ua-kv", 149],["ua-kh", 147],["ua-kr", null],["ua-lh", 145],["ua-lv", 163],["ua-kc", 163],["ua-mk", 142],["ua-my", 147],["ua-pl", 149],["ua-rv", 152],["ua-sc", null],["ua-sm", 156],["ua-tp", 156],["ua-kk", 152],["ua-ks", 144],["ua-km", 149],["ua-ck", 149],["ua-cv", 144],["ua-ch", 149]];
     Highcharts.mapChart('map2', {
         chart: {
             map: 'countries/ua/ua-all'
         },
         title: {
             text: ''
         },

         colorAxis: {
             min: 137,
             max: 163,
             minColor: 'white',
             maxColor: '#4caf50'
         },
         legend: {
             enabled: false
         },
         credits: {
             enabled: false
         },
         series: [{
             data: data2,
             name: 'Количество мест',
             states: {
                 hover: {
                     borderColor: 'black'
                 }
             },
             dataLabels: {
                 enabled: false,
                 format: '{point.value}'
             }
         }]
     });
 }
 function runPage() {
     if (data[0]['gsx$show']['$t'] == '') {
         $('#start_block').css("display","block")
         $('#yavka_bar').css("width",parseFloat(data[0]['gsx$yavka']['$t'])+'%');
         $('#narush1').text(data[0]['gsx$narushtime']['$t'])
         $('#yavka1').text(data[0]['gsx$yavka']['$t'])
         $('#yavka1_2').text('Явка на ' + data[0]['gsx$yavka2']['$t']);
     } else {
         $('#full').css("display","block")
         if (data[0]['gsx$bullet']['$t'] != '') {
             $('#bullet').text('Обработано ' + data[0]['gsx$bullet']['$t']+'%, ');
             var yavka_text = 'явка: '
             $('#bullet_text').text('Результаты в городе ')
             if (data[0]['gsx$showmap']['$t'] != '') {
                 makeMap()
             }
         } else {
             var yavka_text = 'Явка: '
         }
         if (data[0]['gsx$yavka']['$t'] != '') $('#yavk').text(yavka_text +data[0]['gsx$yavka']['$t']);
         
         var cities = [...new Set(data.map(d => d['gsx$candidatecity']['$t']))]
         const index = cities.indexOf('');
         if (index > -1) {
             cities.splice(index, 1);
         }
         var cities_buttons = ''
         if (cities.length > 1) {
             for (r=0;r<cities.length; r++) {
                 cities_buttons += '<option Value="'+cities[r]+'">'+cities[r]+'</option>'
             }
             $('#cities_option').html(cities_buttons)
         }
         cityCandidates('Киев','Шустер LIVE')
         
     }
 }
 runPage()
 $('#cities_option').on('change',function() {
     var exit_select = document.getElementById("exit_select")
     if (exit_select != null ) {
         cityCandidates(document.getElementById("cities_option").value,document.getElementById("exit_select").value)
     } else {
         cityCandidates(document.getElementById("cities_option").value,'Шустер LIVE')
     }
     
 })
 $('#exit_option').on('change',function() {
     console.log(document.getElementById("exit_select").value)
     cityCandidates(document.getElementById("cities_option").value,document.getElementById("exit_select").value)
 })