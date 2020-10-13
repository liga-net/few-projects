if(document.createStyleSheet) {
 document.createStyleSheet('https://cdn.jsdelivr.net/gh/liga-net/few-projects/bus_sovet.css');
}
else {
 var styles = "@import url('https://cdn.jsdelivr.net/gh/liga-net/few-projects/bus_sovet.css');";
 var newSS=document.createElement('link');
 newSS.rel='stylesheet';
 newSS.href='data:text/css,'+escape(styles);
 document.getElementsByTagName("head")[0].appendChild(newSS);
}
function readMore(str) {
	//var dots = document.getElementById("dots");
	var moreText = document.getElementById("more"+str);
	var btnText = document.getElementById("moreBtn"+str);

	  if (moreText.style.display === "none") {
	    //dots.style.display = "inline";
	    btnText.innerHTML = "Читать детальнее"; 
	    //moreText.style.display = "none";
	  } else {
	    //dots.style.display = "none";
	    btnText.style.display = "none";
	    moreText.style.display = "inline";
	  }
}