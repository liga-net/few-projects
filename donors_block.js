if(document.createStyleSheet) {
    document.createStyleSheet('https://cdn.jsdelivr.net/gh/liga-net/few-projects/donors_block.css');
   }
   else {
    var styles = "@import url('https://cdn.jsdelivr.net/gh/liga-net/few-projects/donors_block.css');";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
}
function getData(id){
    var value = $.ajax({ 
        url: id, 
        async: false
    }).responseJSON;
    return value;
}
var donators_list = getData('https://spreadsheets.google.com/feeds/list/1-tm88NDgor8j_Otd7beChprwwKbCcuffmSDtx-cmZO4/1/public/values?alt=json').feed.entry;
function sortByValue(jsObj){
    var sortedArray = [];
    for(var i in jsObj) {
        sortedArray.push([jsObj[i]['gsx$surname']['$t'].replace('І','ИИ').replace('Є','ЕЕ'),jsObj[i]['gsx$name']['$t'],jsObj[i]['gsx$image']['$t']]);
    }
    return sortedArray.sort();
}
var sortedDonators_list = sortByValue(donators_list);

function createPersonDiv(el) {
    var html = '<div class="person_div"><p><img src="'+el[2]+'" /></p><p class="person_name">'+el[1]+'<br>'+el[0].replace('ИИ','І').replace('ЕЕ','Є').replace('Невідомо','')+ '</p></div>'
    return html
}
sortedDonators_list.forEach(element => 
    $('#donators_block').append(createPersonDiv(element))
)