if(document.createStyleSheet) {
    document.createStyleSheet('https://cdn.jsdelivr.net/gh/liga-net/few-projects/shkarlet.css');
   }
   else {
    var styles = "@import url('https://cdn.jsdelivr.net/gh/liga-net/few-projects/shkarlet.css');";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
}
function clickOnButton(element) {
    var className = element.className.split(' ')[1]
    $('#'+className+'_text').css('display','block')
    $('#'+className+'_2_text').css('display','block')
    $('.'+className).css('display','none')
 }
 $('.sh_details').click(function() {
    clickOnButton(this)
 })