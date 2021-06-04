if(document.createStyleSheet) {
 document.createStyleSheet('https://cdn.jsdelivr.net/gh/liga-net/few-projects/poroshenko_last_ukaz.css');
}
else {
 var styles = "@import url('https://cdn.jsdelivr.net/gh/liga-net/few-projects/poroshenko_last_ukaz.css');";
 var newSS=document.createElement('link');
 newSS.rel='stylesheet';
 newSS.href='data:text/css,'+escape(styles);
 document.getElementsByTagName("head")[0].appendChild(newSS);
}
function getValue(){
   var value = $.ajax({ 
      url: 'https://cdn.jsdelivr.net/gh/liga-net/few-projects/poroshenko_last_ukaz.json', 
      async: false
   }).responseJSON.feed.entry;
   return value;
}
var data = getValue()
var id_main = ['in','out'];
var id_list = ['vsu','ray','hosp','okru'];
var name_list = ['Судьи Верховного Суда: ', 'Местные общие суды: ', 'Местные хозяйственные суды: ', 'Окружной административный суд: '];

function showData(){
	for (b=0; b < id_main.length; b++){
		var arr1 = data.filter(d => d['gsx$office']['$t'] == id_main[b])
		for (i=0; i < arr1.length; i++) {
			$('#'+id_main[b]).append($('<div id="member" class="section-link">'+ '<img src="https://project.liga.net/projects/static/ukaz/img/'+arr1[i]['gsx$img']['$t']+'"">' + '<div class="p">' + arr1[i]['gsx$name']['$t'].split(' ')[1] + ' '+ arr1[i]['gsx$name']['$t'].split(' ')[0] + '</div></div>'));
		}
	}
	for (k=0; k < id_list.length; k++){
		var arr4 = data.filter(d => d['gsx$office']['$t'] == id_list[k])
		$('#part3').append($('<div class="p">'+name_list[k]+'</div><div id="'+id_list[k]+'"></div>'));
		for (i=0; i < arr4.length; i++) {
			$('#'+id_list[k]).append($('<div class="section-link '+arr4[i]['gsx$class']['$t']+'"><img src="https://project.liga.net/projects/static/ukaz/img/'+arr4[i]['gsx$img']['$t']+'"></div>'));
		}
	}
}
showData();
var modal = document.getElementById('myModal');
var $divs = $(".section-link");

$divs.on("click", function(){
	modal.style.display = "block";
	if (id_main.includes($(this)[0]['parentElement']['id'])) {
		$(".name", modal).html(data.filter(d => d['gsx$office']['$t'] == $(this)[0]['parentElement']['id'])[$(this).index()]['gsx$name']['$t']);
		$(".position", modal).html(data.filter(d => d['gsx$office']['$t'] == $(this)[0]['parentElement']['id'])[$(this).index()]['gsx$position']['$t']);
		$(".full_text", modal).html(data.filter(d => d['gsx$office']['$t'] == $(this)[0]['parentElement']['id'])[$(this).index()]['gsx$text']['$t']);
	} else {	
		$(".name", modal).html(data.filter(d => d['gsx$office']['$t'] == $(this)[0]['parentElement']['id'])[$(this).index()]['gsx$name']['$t']);
		$(".position", modal).html(data.filter(d => d['gsx$office']['$t'] == $(this)[0]['parentElement']['id'])[$(this).index()]['gsx$position']['$t']);
	  	$(".full_text", modal).html(data.filter(d => d['gsx$office']['$t'] == $(this)[0]['parentElement']['id'])[$(this).index()]['gsx$text']['$t']);
	}
});
var span = document.getElementsByClassName('close')[0];
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}