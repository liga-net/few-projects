if(document.createStyleSheet) {
 document.createStyleSheet('https://cdn.jsdelivr.net/gh/liga-net/few-projects/parliament_candidates_tooltip.css');
}
else {
 var styles = "@import url('https://cdn.jsdelivr.net/gh/liga-net/few-projects/parliament_candidates_tooltip.css');";
 var newSS=document.createElement('link');
 newSS.rel='stylesheet';
 newSS.href='data:text/css,'+escape(styles);
 document.getElementsByTagName("head")[0].appendChild(newSS);
}
function getValue(){
   var value = $.ajax({ 
      url: 'https://cdn.jsdelivr.net/gh/liga-net/few-projects/parliament_candidates_tooltip.json', 
      async: false
   }).responseJSON.feed.entry;
   return value;
}
var data = getValue()

var id_main = ['sluha','op','bpp','bat','golos','syla'];

function showData(){
  for (b=0; b < id_main.length; b++){
    var arr1 = data.filter(d => d['gsx$office']['$t'] == id_main[b])
    for (i=0; i < arr1.length; i++) {
      if (parseInt(arr1[i]['gsx$num']['$t']) <= parseInt(arr1[i]['gsx$orient']['$t']) / 2) {
        var orient = 'right'
      } else {
        var orient = 'left'
      }
      $('#'+id_main[b]).append($('<div id="member" class="member section-link '+arr1[i]['gsx$class']['$t']+'"><div class="tooltip">'+ '<div class="tint '+arr1[i]['gsx$office']['$t']+'"><img src="https://project.liga.net/projects/static/parliament_candidates_tooltip/img/'+arr1[i]['gsx$img']['$t']+'"></div><div class="name">'+arr1[i]['gsx$name']['$t'].split(' ')[1]
        +'<div class="tooltiptext '+orient+'"><b style="font-size:12px;">'+arr1[i]['gsx$name']['$t']+'</b><br>'+arr1[i]['gsx$text']['$t']+'</div></div></div>'));
    }
  }
}
showData();

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("section-link");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "showBlock");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "showBlock");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add party_active class to the current button (highlight it)
var party_buttonContainer = document.getElementById("party_buttons");
var party_buttons = party_buttonContainer.getElementsByClassName("party_button");
for (var i = 0; i < party_buttons.length; i++) {
  party_buttons[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("party_active");
    current[0].className = current[0].className.replace(" party_active", "");
    this.className += " party_active";
  });
}