if(document.createStyleSheet) {
    document.createStyleSheet('https://cdn.jsdelivr.net/gh/liga-net/few-projects/covid_travel1.css');  
} else {
    var styles = "@import url('https://cdn.jsdelivr.net/gh/liga-net/few-projects/covid_travel1.css');";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
}
function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
function getValue(){
    var value = $.ajax({ 
    url: 'https://tripadvisor.mfa.gov.ua/index.php?rest_route=/wp/v2/pages/1973',
    async: false
    }).responseJSON.content.rendered;
    value = $(value)[0]
    value = value.getAttribute('data-mapdata')
    value = JSON.parse(value)['levels'][0]['locations']
    return value;
}
var data = getValue()

var exclude = ['Туреччина','Єгипет','Іспанія','Велика Британія','Німеччина','Франція',"Україна"]

data.forEach(function(result) {
    if (exclude.includes(result.title) == false) {
        $('#countries').append('<li value="'+result.title+'">'+result.title+'</li>')
    }
    
})
function filterList() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("countries");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        txtValue = li[i].textContent;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
$('#myInput').keyup(filterList)
$('#countries li').on('click',function(li){
    $('#countries li').attr('checked',false)
    $(this).attr('checked',true)
    $('li').css({'background-color':'rgb(246, 246, 246)'})
    $(this).css('background-color','#78909c')
    var country = li.currentTarget.attributes.value.value
    var country_data = data.filter(d=>d.title == country)[0]
    var date = country_data.update_date.split('-')
    if ($('input:checked').length == 0) {
        $('#typeForm').append('<p style="color:red">Оберіть тип подорожі</p>')
    } else {
        if ($('#type_error').length != 0) {
            $('#type_error').css('display','none')
        }
        var input = $('input:checked')[0]
        var inputName = input.nextElementSibling.textContent
        var type = parseInt(input.value)
        $('#country_info').html('')
        $('#country_info').append('<h4>'+country+': '+inputName.toLowerCase()+'</h4>')
        $('#country_info').append('<p><i>Останнє оновлення: '+date[2]+'.'+date[1]+'.'+date[0]+'</i></p>')
        $('#country_info').append('<p>'+country_data.accordion_filled[type]+'</p>')
    }
    
})
$('#typeForm input').on('click',function(li){
    if ($('#country_info').html() != '') {
        var country = $("li[checked='checked']" )[0].textContent
        var country_data = data.filter(d=>d.title == country)[0]
        var date = country_data.update_date.split('-')
        var input = $('input:checked')[0]
        var inputName = input.nextElementSibling.textContent
        var type = parseInt(input.value)
        $('#country_info').html('')
        $('#country_info').append('<h4>'+country+': '+inputName.toLowerCase()+'</h4>')
        $('#country_info').append('<p><i>Останнє оновлення: '+date[2]+'.'+date[1]+'.'+date[0]+'</i></p>')
        $('#country_info').append('<p>'+country_data.accordion_filled[type]+'</p>')
    }
})