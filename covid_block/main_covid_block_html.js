var html='<section id="corona"><div id="corona_head"><a href="https://www.liga.net/politics/articles/vsya-aktualnaya-informatsiya-o-koronaviruse-v-ukraine-i-mire-v-odnom-meste-i-v-udobnom-vide">COVID-19 в Украине ></a></div><div class="corona_daily">    <a href="https://www.liga.net/politics/articles/vsya-aktualnaya-informatsiya-o-koronaviruse-v-ukraine-i-mire-v-odnom-meste-i-v-udobnom-vide">    <div class="display">        <p id="date" class="grey_text">Данные МОЗ Украины на </p>        <div class="covid_wrapper1">            <div class="numb">                <div class="corona_numbers">                    <div id="ill_day" class="big_number"></div>                    <div id="ill_all" class="small_number"></div>                </div>                <div id="ill_day_spark" class="sparkline"></div>                <div class="stat_name">Заболело</div>            </div>            <div class="numb">                <div class="corona_numbers">                    <div id="hosp_day" class="big_number"></div>                    <div id="hosp_all" class="small_number"></div>                </div>                <div id="hosp_day_spark" class="sparkline"></div>                <div class="stat_name" id="hosp_name">Госпитализировано</div>            </div>            <div class="numb">                <div class="corona_numbers">                    <div id="dead_day" class="big_number"></div>                    <div id="dead_all" class="small_number"></div>                </div>                <div id="dead_day_spark" class="sparkline"></div>                <div class="stat_name">Умерло</div>            </div>            <div class="numb">                <div class="corona_numbers">                    <div id="vax_day" class="big_number"></div>                    <div id="vax_all" class="small_number"></div>                </div>                <div id="vax_day_spark" class="sparkline"></div>                <div class="stat_name" id="vax_name">Вакцинировано</div>            </div>                                </div>    </div>    </a>    <a href="https://www.liga.net/politics/articles/vsya-aktualnaya-informatsiya-o-koronaviruse-v-ukraine-i-mire-v-odnom-meste-i-v-udobnom-vide">    <div class="display margin">        <p class="grey_text">Дневной прирост заболевших в областях</p>        <div class="covid_wrapper2">            <div class="numb">                <div class="corona_numbers">                    <div id="region0_day" class="big_number"></div>                    <div id="region0_all" class="small_number"></div>                </div>                <div class="stat_name" id="region0_text"></div>            </div>            <div class="numb">                <div class="corona_numbers">                    <div id="region1_day" class="big_number"></div>                    <div id="region1_all" class="small_number"></div>                </div>                <div class="stat_name" id="region1_text"></div>            </div>            <div class="numb">                <div class="corona_numbers">                    <div id="region2_day" class="big_number"></div>                    <div id="region2_all" class="small_number"></div>                </div>                <div class="stat_name" id="region2_text"></div>            </div>        </div>    </div>    </a>    <div class="display">        <div class="grey_text link"><a href="https://www.liga.net/politics/articles/vsya-aktualnaya-informatsiya-o-koronaviruse-v-ukraine-i-mire-v-odnom-meste-i-v-udobnom-vide">Красные зоны</a></div>        <div id="ukraine_confirmed" style="height: 100px; width: 150px; display: inline-block; vertical-align: top;"></div>    </div></div></section>'
var block=document.querySelectorAll("body > main section.liga-bussines.mt-10")[0];
block.insertAdjacentHTML('afterBegin', html);
