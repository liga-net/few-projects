if(document.createStyleSheet) {
    document.createStyleSheet('https://firebasestorage.googleapis.com/v0/b/fgfgg-f6f8a.appspot.com/o/citizenship.css?alt=media&token=e9d75a0c-e8a7-4ed2-b05b-69cf4bf88ebf');
   }
   else {
    var styles = "@import url('https://firebasestorage.googleapis.com/v0/b/fgfgg-f6f8a.appspot.com/o/citizenship.css?alt=media&token=e9d75a0c-e8a7-4ed2-b05b-69cf4bf88ebf');";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
}
var table_head = '<div class="row"><div class="cell">Країна</div><div class="cell">Мінімальна сума</div><div class="cell">Термін очікування, місяців</div><div class="cell">Доступ країн</div></div>'
    var row1 = '<div class="row"><div class="cell">Австрія</div><div class="cell">€10,5 млн</div><div class="cell">24-26</div><div class="cell">150+</div></div>'
    var row2 = '<div class="row"><div class="cell">Кіпр</div><div class="cell">€2,5 млн</div><div class="cell">6-7</div><div class="cell">173</div></div>'
    var row3 = '<div class="row"><div class="cell">Чорногорія</div><div class="cell">€350 тис.</div><div class="cell">3-4 </div><div class="cell">122+</div></div>'
    var row4 = '<div class="row"><div class="cell">Туреччина</div><div class="cell">€250 тис.</div><div class="cell">2-3</div><div class="cell">115</div></div>'
    var row5 = '<div class="row"><div class="cell">Мальта</div><div class="cell">€888 тис.</div><div class="cell">12-16</div><div class="cell">160+</div></div>'
    var row6 = '<div class="row"><div class="cell">Вануату</div><div class="cell">$130 тис.</div><div class="cell">1-2</div><div class="cell">120+</div></div>'
    var row7 = '<div class="row"><div class="cell">Антигуа і Барбуда</div><div class="cell">$100 тис.</div><div class="cell">3-6</div><div class="cell">150+</div></div>'
    var row8 = '<div class="row"><div class="cell">Гренада</div><div class="cell">$150 тис.</div><div class="cell">4-6</div><div class="cell">140+</div></div>'
    var row9 = '<div class="row"><div class="cell">Домініка</div><div class="cell">$100 тис.</div><div class="cell">2-6</div><div class="cell">135+</div></div>'
    var row10 = '<div class="row"><div class="cell">Сент Кітс і Невіс</div><div class="cell">$150 тис.</div><div class="cell">3-6</div><div class="cell">138+</div></div>'
    var row11 = '<div class="row"><div class="cell">Сент Люсія</div><div class="cell">$100 тис.</div><div class="cell">3-5</div><div class="cell">130+</div></div>'

    var row1_add = '<div class="text"><p>€2,5 млн благодійний внесок та €8 млн в бізнес (пріоритет - соціальний бізнес)</p><p>Непрозорі умови, пріорітет за соціальний бізнес</p></div>'
    var row2_add = '<div class="text"><p>€2 млн капіталовкладень в економіку та придбання нерухомості на суму від 500 тис. євро (зберігати пожиттєво)</p></div>'
    var row3_add = '<div class="text"><p>Якщо нерухомість перебуває в столиці або на узбережжі - від €450 тис., в інших регіонах - від €250 тис. У обох випадках треба ще зробити благодійний внесок до державного фонд розмірі €100 тис. і оплатити держмита.</p><p>Поки не запрацювала</p></div>'
    var row4_add = '<div class="text"><p>Придбання нерухомості вартістю від $250 тис., банківський вклад або відкриття бізнесу на території Туреччини від $500 тис (створити 500 робочих місць)</p></div>'
    var row5_add = '<div class="text"><p>Безповоротний платіж до Фонду нацрозвитку Мальти (від € 650 тис.), або вкластися на 5 років в держоблігації (від €150 тис.), придбати чи орендувати на 5 років нерухомість (від €350 тис.)</p><p>лише 1800 пастортів</p></div>'
    var row6_add = '<div class="text"><p>$150 тис. за одного заявника до $200 тис. за сім\'ю з чотирьох. Довгострокові візи до США та Канади</p><p>слабка довіра</p></div>'
    var row7_add = '<div class="text"><p>$100 благодійного внеску або $400 в нерухомість чи $1,5 млн в бізнес. Безвізовий доступ до країн Шенгену, Великої Британії, Сінгапуру та Гонконгу</p><p>безвізовий доступ до 140, в точу числі Шенген</p></div>'
    var row8_add = '<div class="text"><p>Пожертва від $150 тис. Фонду Національної Трансформації (NTF), придбання нерухомості в схваленому урядом проекті від $350 тис.(обов\'язкова власність на 5 років), інвестиції в проект в туристичному секторі не менше $220 тис. Безвізовий доступ до країн Шенгену, Великої Британії, Сінгапуру та Гонконгу</p></div>'
    var row9_add = '<div class="text"><p>Безповоротний внесок в урядовий фонд від $100 тис. або купівля нерухомості вартістю не менше $200 тис. без права продажу впродовж 3 років. Безвізовий доступ до країн Шенгену, Великої Британії</p></div>'
    var row10_add = '<div class="text"><p>Пожертва до держфонду від $150 тис., купівля нерухомості від $400 тис. (об\'єкт повинен залишатися у власності протягом 5 років). Податки: спадок, дарування, а також приріст капіталу не оподатковуються, а прибутковий стягується тільки з доходів громадян, отриманих на території островів. Безвізовий доступ до країн Шенгену, Великої Британії, Сінгапуру та Бразилії.</p><p>Сент-Кітс і Невіс славиться політичною, економічною стабільністю і м\'яким податковим кліматом, при якому спадок, дарування, а також приріст капіталу не оподатковуються, а прибутковий стягується тільки з доходів громадян, які отримані на території островів.</p></div>'
    var row11_add = '<div class="text"><p>Безповоротний внесок в урядовий фонд від $100 тис. або купівля нерухомості вартістю не менше $300 тис. без права продажу впродовж 5 років. До січня 2021 року можливість вкластися в держоблігації - від $250 тис. Безвізовий доступ до країн Шенгену, Великої Британії, Сінгапуру.</p></div>'

    $('#showmore').on('click', function() {
        $('.tbl').html(table_head+
        row1+row1_add+
        row2+row2_add+
        row3+row3_add+
        row4+row4_add+
        row5+row5_add+
        row6+row6_add+
        row7+row7_add+
        row8+row8_add+
        row9+row9_add+
        row10+row10_add+
        row11+row11_add)
        $('#showmore').css('display','none')
    })