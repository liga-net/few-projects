function getValue(){
    var value = $.ajax({ 
       url: 'https://spreadsheets.google.com/feeds/list/1Q0ZpV4cGYjpINGRDbMHrCxvq_MnrC3Lj2ElDKnZSFhA/1/public/values?alt=json', 
       async: false
    }).responseJSON.feed.entry;
    return value;
 }
 
 var data = getValue();
 function cityCandidates(city) {
     $("#dashboard table").remove()
     var candidates_name = '',
         candidates_img = '',
         exit = '',
         results = '';
     var filter_city = data.filter(d => d['gsx$candidatecity']['$t'] == city)
     if (data[0]['gsx$bullet']['$t'] == '') {
        $('#exit_option').text(filter_city[0]['gsx$exitname']['$t'])
        $('#bullet_text').text('Экзитполы ')
    } 
    var candidate_count = 3
     if (window.innerWidth > 999) {
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
     if (window.innerWidth > 999) {
         var inner = '<tr id="cand_img">'+candidates_img+'</tr>' 
         inner += '<tr>'+candidates_name+'</tr>' 
         if (data[0]['gsx$bullet']['$t'] != '') {
             inner += results
         } else {
             inner += exit
         }
         var council_amout = 4
     } else {
         var council_amout = 3
         if (data[0]['gsx$bullet']['$t'] != '') {
             var inner = candidates_name
         } else {
             var inner = '<tr><td class="tdleft" id="candidates_name">Кандидаты</td><td>Экзитпол</td></tr>' +candidates_name
         }
         
     }
     var table_candidates = '<table>' +inner +'</table>'
     if (data[0]['gsx$showmap']['$t'] == '' && data[0]['gsx$council']['$t'] == '') {
         $('#dashboard').append(table_candidates);
     } else if (data[0]['gsx$council']['$t'] != '') {
         if (data[0]['gsx$bullet']['$t'] != '') {
             var party_inner = '<tr><td>Городской совет</td><td></td>'
         } else {
             var party_inner = '<tr><td>Городской совет</td><td>Экзитпол</td>'
         }
         var filter_council = data.filter(d => d['gsx$councilcity']['$t'] == city)
         for (l=0; l < council_amout; l++) {
             var tr = '<tr><td>'+filter_council[l]['gsx$council']['$t']+'</td>'//+'<td>'+filter_council[l]['gsx$councilexit']['$t']+'</td>'
             if (data[0]['gsx$bullet']['$t'] != '') {
                 tr += '<td>'+filter_council[l]['gsx$councilpercent']['$t']+'</td>'
             } else {
                 tr += '<td>'+filter_council[l]['gsx$councilexit']['$t']+'</td>'
             }
             party_inner += tr
         }//<caption class="table_title">Городской совет</caption>
         var table_party = '<table class="council">' +party_inner +'</table>'
         var table_candidates = '<table id="mer"><caption class="table_title">Мэр</caption>' +inner +'</table>'
         $('#table_results').html(table_party);
         $('#dashboard').append(table_candidates);
     }
     if (data[0]['gsx$bullet']['$t'] == '' || data[0]['gsx$showmap']['$t'] == '') { 
        $('#dashboard_part1').css('display','inline-block');
        $('#dashboard_part1').css('vertical-align','top');
        $('#mer').css('display','inline-block');
        $('#mer').css('vertical-align','top');
        $('#button').css('margin-top','0px');
   }
   if (data[0]['gsx$showmap']['$t'] != '') { 
        $('#mer').css('margin-left','0px');
        //$('#button').css('margin-top','3px');
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
         $('#bar').css("width",parseFloat(data[0]['gsx$yavka']['$t'])+'%');
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
            
             $('#bullet_text').text('Экзитпол по городу ')
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
         
         cityCandidates('Киев')
        
     }
 }
 runPage()
 $('#cities_option').on('change',function() {
     cityCandidates(document.getElementById("cities_option").value)
 })