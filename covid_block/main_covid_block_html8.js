var html='<section id="corona"><div id="corona_head"><a href="https://www.liga.net/vaccination-in-ukraine">Вакцинация в Украине: важная и актуальная информация ></a></div><div class="corona_wrapper"><a href="https://www.liga.net/vaccination-in-ukraine"><div class="coronatable0"><p class="grey_text">Узнайте полную статистику на <span style="border-bottom: 1px solid #868686;">дашборде</span></p><table><tr><td class="tableeleft"></td><td>Уколов</td><td>1 доза</td><td>2 доза</td></tr><tr><td class="tableeleft" id="date1"></td><td id="vax0_day" class="td_bold"></td><td id="vax1_day" class="td_bold"></td><td id="vax2_day" class="td_bold"></td></tr><tr><td class="tableeleft">Все население</td><td></td><td><div class="progress_bar" id="progress_bar01"></div></td><td><div class="progress_bar" id="progress_bar02"></div></td></tr></table></div></a><a href="https://www.liga.net/vaccination-in-ukraine"><div class="coronatable1 which_vac"><p class="grey_text">Чем вакцинируют</p><table><tr><td class="tableeleft"></td><td>AstraZeneca</td><td>Pfizer</td><td>CoronaVac</td></tr><tr><td class="tableeleft" id="date2"></td><td id="AstraZeneca" class="td_bold"></td><td id="Pfizer-BioNTech" class="td_bold"></td><td id="SinovacBiotech" class="td_bold"></td></tr><tr><td class="tableeleft">% среди вакцин</td><td><div class="progress_bar" id="progress_bar_AstraZeneca"></div></td><td><div class="progress_bar" id="progress_bar_Pfizer-BioNTech"></div></td><td><div class="progress_bar" id="progress_bar_SinovacBiotech"></div></td></tr></table></div></a><a href="https://www.liga.net/vaccination-in-ukraine"><div class="coronatable2 which_vac"><p class="grey_text">Вакцинация в регионах, на 100 000 нас.</p><table><tr><td class="tableeleft"></td><td id="oblast_name0"></td><td id="oblast_name1"></td><td id="oblast_name2"></td></tr><tr><td class="tableeleft" id="date3"></td><td id="oblast_per0" class="td_bold"></td><td id="oblast_per1" class="td_bold"></td><td id="oblast_per2" class="td_bold"></td></tr><tr><td class="tableeleft">% населения обл.</td><td><div class="progress_bar" id="progress_bar_oblast0"></div></td><td><div class="progress_bar" id="progress_bar_oblast1"></div></td><td><div class="progress_bar" id="progress_bar_oblast2"></div></td></tr></table></div></a> </div></section>'
var block=document.querySelector("body > main > div.container");
block.insertAdjacentHTML('afterBegin', html);
