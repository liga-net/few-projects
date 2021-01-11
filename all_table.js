if(document.createStyleSheet) {
    document.createStyleSheet('https://cdn.jsdelivr.net/gh/liga-net/few-projects/1m_style.css');
   }
   else {
    var styles = "@import url('https://cdn.jsdelivr.net/gh/liga-net/few-projects/1m_style.css');";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
}