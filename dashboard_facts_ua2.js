if(document.createStyleSheet) {
    document.createStyleSheet('https://cdn.jsdelivr.net/gh/liga-net/few-projects/simple_table.css');
   }
   else {
    var styles = "@import url('https://cdn.jsdelivr.net/gh/liga-net/few-projects/simple_table.css');";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
}
function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
var dynamic = [
{"group": "25.02","AstraZeneca": "1179","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "26.02","AstraZeneca": "1713","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "27.02","AstraZeneca": "90","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "28.02","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "01.03","AstraZeneca": "1764","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "02.03","AstraZeneca": "1983","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "03.03","AstraZeneca": "2680","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "04.03","AstraZeneca": "2913","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "05.03","AstraZeneca": "3277","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "06.03","AstraZeneca": "1279","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "07.03","AstraZeneca": "910","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "08.03","AstraZeneca": "1171","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "09.03","AstraZeneca": "4362","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "10.03","AstraZeneca": "5898","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "11.03","AstraZeneca": "8859","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "12.03","AstraZeneca": "9304","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "13.03","AstraZeneca": "3596","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "14.03","AstraZeneca": "2018","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "15.03","AstraZeneca": "8928","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "16.03","AstraZeneca": "9839","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "17.03","AstraZeneca": "9832","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "18.03","AstraZeneca": "10959","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "19.03","AstraZeneca": "11628","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "20.03","AstraZeneca": "3968","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "21.03","AstraZeneca": "2715","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "22.03","AstraZeneca": "10904","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "23.03","AstraZeneca": "15097","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "24.03","AstraZeneca": "18561","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "25.03","AstraZeneca": "18738","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "26.03","AstraZeneca": "17939","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "27.03","AstraZeneca": "4616","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "28.03","AstraZeneca": "1585","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "29.03","AstraZeneca": "14432","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "30.03","AstraZeneca": "18668","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "31.03","AstraZeneca": "17170","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "01.04","AstraZeneca": "19097","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "02.04","AstraZeneca": "18814","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "03.04","AstraZeneca": "3919","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "04.04","AstraZeneca": "1258","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "05.04","AstraZeneca": "12856","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "06.04","AstraZeneca": "15585","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "07.04","AstraZeneca": "14313","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "08.04","AstraZeneca": "18566","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "09.04","AstraZeneca": "19858","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "10.04","AstraZeneca": "4048","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "11.04","AstraZeneca": "1216","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "12.04","AstraZeneca": "10135","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "13.04","AstraZeneca": "15147","Pfizer-BioNTech": "0","Sinovac Biotech": "5"},
{"group": "14.04","AstraZeneca": "15536","Pfizer-BioNTech": "0","Sinovac Biotech": "208"},
{"group": "15.04","AstraZeneca": "12725","Pfizer-BioNTech": "0","Sinovac Biotech": "795"},
{"group": "16.04","AstraZeneca": "11617","Pfizer-BioNTech": "0","Sinovac Biotech": "1427"},
{"group": "17.04","AstraZeneca": "2271","Pfizer-BioNTech": "0","Sinovac Biotech": "1062"},
{"group": "18.04","AstraZeneca": "689","Pfizer-BioNTech": "366","Sinovac Biotech": "398"},
{"group": "19.04","AstraZeneca": "5420","Pfizer-BioNTech": "3504","Sinovac Biotech": "3220"},
{"group": "20.04","AstraZeneca": "5231","Pfizer-BioNTech": "4848","Sinovac Biotech": "4963"},
{"group": "21.04","AstraZeneca": "3855","Pfizer-BioNTech": "4578","Sinovac Biotech": "5611"},
{"group": "22.04","AstraZeneca": "4090","Pfizer-BioNTech": "5028","Sinovac Biotech": "7051"},
{"group": "23.04","AstraZeneca": "4418","Pfizer-BioNTech": "3456","Sinovac Biotech": "6465"},
{"group": "24.04","AstraZeneca": "1070","Pfizer-BioNTech": "1710","Sinovac Biotech": "1751"},
{"group": "25.04","AstraZeneca": "210","Pfizer-BioNTech": "522","Sinovac Biotech": "382"},
{"group": "26.04","AstraZeneca": "1906","Pfizer-BioNTech": "3588","Sinovac Biotech": "5602"},
{"group": "27.04","AstraZeneca": "7440","Pfizer-BioNTech": "4918","Sinovac Biotech": "7232"},
{"group": "28.04","AstraZeneca": "60017","Pfizer-BioNTech": "4658","Sinovac Biotech": "5793"},
{"group": "29.04","AstraZeneca": "64198","Pfizer-BioNTech": "3856","Sinovac Biotech": "5202"},
{"group": "30.04","AstraZeneca": "43566","Pfizer-BioNTech": "3056","Sinovac Biotech": "3233"},
{"group": "01.05","AstraZeneca": "1840","Pfizer-BioNTech": "234","Sinovac Biotech": "557"},
{"group": "02.05","AstraZeneca": "130","Pfizer-BioNTech": "12","Sinovac Biotech": "35"},
{"group": "03.05","AstraZeneca": "460","Pfizer-BioNTech": "102","Sinovac Biotech": "357"},
{"group": "04.05","AstraZeneca": "2600","Pfizer-BioNTech": "468","Sinovac Biotech": "344"},
{"group": "05.05","AstraZeneca": "20080","Pfizer-BioNTech": "1728","Sinovac Biotech": "2570"},
{"group": "06.05","AstraZeneca": "32936","Pfizer-BioNTech": "2142","Sinovac Biotech": "2880"},
{"group": "07.05","AstraZeneca": "31386","Pfizer-BioNTech": "2304","Sinovac Biotech": "2338"},
{"group": "08.05","AstraZeneca": "3634","Pfizer-BioNTech": "780","Sinovac Biotech": "429"},
{"group": "09.05","AstraZeneca": "880","Pfizer-BioNTech": "0","Sinovac Biotech": "124"},
{"group": "10.05","AstraZeneca": "1490","Pfizer-BioNTech": "219","Sinovac Biotech": "236"},
{"group": "11.05","AstraZeneca": "13798","Pfizer-BioNTech": "1234","Sinovac Biotech": "1999"},
{"group": "12.05","AstraZeneca": "15289","Pfizer-BioNTech": "938","Sinovac Biotech": "2259"},
{"group": "13.05","AstraZeneca": "13379","Pfizer-BioNTech": "553","Sinovac Biotech": "3125"},
{"group": "14.05","AstraZeneca": "15063","Pfizer-BioNTech": "1044","Sinovac Biotech": "2228"},
{"group": "15.05","AstraZeneca": "2200","Pfizer-BioNTech": "117","Sinovac Biotech": "422"},
{"group": "16.05","AstraZeneca": "650","Pfizer-BioNTech": "166","Sinovac Biotech": "106"},
{"group": "17.05","AstraZeneca": "6499","Pfizer-BioNTech": "352","Sinovac Biotech": "1321"},
{"group": "18.05","AstraZeneca": "7258","Pfizer-BioNTech": "266","Sinovac Biotech": "1378"},
{"group": "19.05","AstraZeneca": "5622","Pfizer-BioNTech": "384","Sinovac Biotech": "1393"},
{"group": "20.05","AstraZeneca": "4557","Pfizer-BioNTech": "358","Sinovac Biotech": "1372"},
{"group": "21.05","AstraZeneca": "4068","Pfizer-BioNTech": "645","Sinovac Biotech": "1378"},
{"group": "22.05","AstraZeneca": "509","Pfizer-BioNTech": "50","Sinovac Biotech": "244"},
{"group": "23.05","AstraZeneca": "240","Pfizer-BioNTech": "4","Sinovac Biotech": "77"},
{"group": "24.05","AstraZeneca": "1758","Pfizer-BioNTech": "349","Sinovac Biotech": "1511"},
{"group": "25.05","AstraZeneca": "1806","Pfizer-BioNTech": "487","Sinovac Biotech": "2923"},
{"group": "26.05","AstraZeneca": "1106","Pfizer-BioNTech": "508","Sinovac Biotech": "3384"},
{"group": "27.05","AstraZeneca": "997","Pfizer-BioNTech": "665","Sinovac Biotech": "5221"},
{"group": "28.05","AstraZeneca": "594","Pfizer-BioNTech": "659","Sinovac Biotech": "8532"},
{"group": "29.05","AstraZeneca": "63","Pfizer-BioNTech": "109","Sinovac Biotech": "6947"},
{"group": "30.05","AstraZeneca": "60","Pfizer-BioNTech": "42","Sinovac Biotech": "5726"},
{"group": "31.05","AstraZeneca": "145","Pfizer-BioNTech": "726","Sinovac Biotech": "9361"},
{"group": "01.06","AstraZeneca": "65","Pfizer-BioNTech": "3019","Sinovac Biotech": "12774"},
{"group": "02.06","AstraZeneca": "17","Pfizer-BioNTech": "15861","Sinovac Biotech": "13021"},
{"group": "03.06","AstraZeneca": "31","Pfizer-BioNTech": "31439","Sinovac Biotech": "15398"},
{"group": "04.06","AstraZeneca": "14","Pfizer-BioNTech": "33882","Sinovac Biotech": "19648"},
{"group": "05.06","AstraZeneca": "0","Pfizer-BioNTech": "23783","Sinovac Biotech": "15446"},
{"group": "06.06","AstraZeneca": "0","Pfizer-BioNTech": "11293","Sinovac Biotech": "13113"},
{"group": "07.06","AstraZeneca": "6","Pfizer-BioNTech": "22877","Sinovac Biotech": "20254"},
{"group": "08.06","AstraZeneca": "114","Pfizer-BioNTech": "22474","Sinovac Biotech": "21337"},
{"group": "09.06","AstraZeneca": "476","Pfizer-BioNTech": "15833","Sinovac Biotech": "20189"},
{"group": "10.06","AstraZeneca": "469","Pfizer-BioNTech": "13361","Sinovac Biotech": "16914"},
{"group": "11.06","AstraZeneca": "857","Pfizer-BioNTech": "17813","Sinovac Biotech": "17010"},
{"group": "12.06","AstraZeneca": "104","Pfizer-BioNTech": "7421","Sinovac Biotech": "20859"},
{"group": "13.06","AstraZeneca": "44","Pfizer-BioNTech": "2101","Sinovac Biotech": "18182"},
{"group": "14.06","AstraZeneca": "392","Pfizer-BioNTech": "15357","Sinovac Biotech": "12351"},
{"group": "15.06","AstraZeneca": "580","Pfizer-BioNTech": "20102","Sinovac Biotech": "14780"},
{"group": "16.06","AstraZeneca": "706","Pfizer-BioNTech": "32826","Sinovac Biotech": "17288"},
{"group": "17.06","AstraZeneca": "477","Pfizer-BioNTech": "32998","Sinovac Biotech": "24495"},
{"group": "18.06","AstraZeneca": "316","Pfizer-BioNTech": "29051","Sinovac Biotech": "19289"},
{"group": "19.06","AstraZeneca": "76","Pfizer-BioNTech": "7239","Sinovac Biotech": "14301"},
{"group": "20.06","AstraZeneca": "0","Pfizer-BioNTech": "1148","Sinovac Biotech": "2567"},
{"group": "21.06","AstraZeneca": "0","Pfizer-BioNTech": "2242","Sinovac Biotech": "4329"},
{"group": "22.06","AstraZeneca": "321","Pfizer-BioNTech": "11648","Sinovac Biotech": "10557"},
{"group": "23.06","AstraZeneca": "493","Pfizer-BioNTech": "23775","Sinovac Biotech": "14594"},
{"group": "24.06","AstraZeneca": "312","Pfizer-BioNTech": "21903","Sinovac Biotech": "18755"},
{"group": "25.06","AstraZeneca": "361","Pfizer-BioNTech": "17954","Sinovac Biotech": "18225"},
{"group": "26.06","AstraZeneca": "64","Pfizer-BioNTech": "6957","Sinovac Biotech": "15307"},
{"group": "27.06","AstraZeneca": "13","Pfizer-BioNTech": "1123","Sinovac Biotech": "9905"},
{"group": "28.06","AstraZeneca": "3","Pfizer-BioNTech": "3075","Sinovac Biotech": "4513"},
{"group": "29.06","AstraZeneca": "214","Pfizer-BioNTech": "9283","Sinovac Biotech": "11978"},
{"group": "30.06","AstraZeneca": "262","Pfizer-BioNTech": "16241","Sinovac Biotech": "15211"},
{"group": "24.02","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "25.02","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "26.02","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "27.02","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "28.02","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "01.03","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "02.03","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "03.03","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "04.03","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "05.03","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "06.03","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "07.03","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "08.03","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "09.03","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "10.03","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "11.03","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "12.03","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "13.03","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "14.03","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "15.03","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "16.03","AstraZeneca": "1","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "17.03","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "18.03","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "19.03","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "20.03","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "21.03","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "22.03","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "23.03","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "24.03","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "25.03","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "26.03","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "27.03","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "28.03","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "29.03","AstraZeneca": "1","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "30.03","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "31.03","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "01.04","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "02.04","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "03.04","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "04.04","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "05.04","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "06.04","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "07.04","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "08.04","AstraZeneca": "3","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "09.04","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "10.04","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "11.04","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "12.04","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "13.04","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "14.04","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "15.04","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "16.04","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "17.04","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "18.04","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "19.04","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "20.04","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "21.04","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "22.04","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "23.04","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "24.04","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "25.04","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "26.04","AstraZeneca": "4","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "27.04","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "28.04","AstraZeneca": "1","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "29.04","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "120"},
{"group": "30.04","AstraZeneca": "1","Pfizer-BioNTech": "0","Sinovac Biotech": "129"},
{"group": "01.05","AstraZeneca": "30","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "02.05","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "03.05","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "04.05","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "13"},
{"group": "05.05","AstraZeneca": "4","Pfizer-BioNTech": "0","Sinovac Biotech": "112"},
{"group": "06.05","AstraZeneca": "1","Pfizer-BioNTech": "0","Sinovac Biotech": "8"},
{"group": "07.05","AstraZeneca": "8","Pfizer-BioNTech": "0","Sinovac Biotech": "10"},
{"group": "08.05","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "09.05","AstraZeneca": "0","Pfizer-BioNTech": "0","Sinovac Biotech": "0"},
{"group": "10.05","AstraZeneca": "0","Pfizer-BioNTech": "249","Sinovac Biotech": "0"},
{"group": "11.05","AstraZeneca": "2","Pfizer-BioNTech": "1082","Sinovac Biotech": "149"},
{"group": "12.05","AstraZeneca": "74","Pfizer-BioNTech": "1474","Sinovac Biotech": "352"},
{"group": "13.05","AstraZeneca": "81","Pfizer-BioNTech": "3149","Sinovac Biotech": "1300"},
{"group": "14.05","AstraZeneca": "75","Pfizer-BioNTech": "3300","Sinovac Biotech": "1928"},
{"group": "15.05","AstraZeneca": "20","Pfizer-BioNTech": "2637","Sinovac Biotech": "768"},
{"group": "16.05","AstraZeneca": "100","Pfizer-BioNTech": "986","Sinovac Biotech": "222"},
{"group": "17.05","AstraZeneca": "225","Pfizer-BioNTech": "4832","Sinovac Biotech": "4003"},
{"group": "18.05","AstraZeneca": "348","Pfizer-BioNTech": "5146","Sinovac Biotech": "4692"},
{"group": "19.05","AstraZeneca": "1218","Pfizer-BioNTech": "3720","Sinovac Biotech": "5606"},
{"group": "20.05","AstraZeneca": "2063","Pfizer-BioNTech": "4682","Sinovac Biotech": "5881"},
{"group": "21.05","AstraZeneca": "2542","Pfizer-BioNTech": "3681","Sinovac Biotech": "5269"},
{"group": "22.05","AstraZeneca": "431","Pfizer-BioNTech": "1176","Sinovac Biotech": "874"},
{"group": "23.05","AstraZeneca": "160","Pfizer-BioNTech": "516","Sinovac Biotech": "328"},
{"group": "24.05","AstraZeneca": "2164","Pfizer-BioNTech": "2789","Sinovac Biotech": "5485"},
{"group": "25.05","AstraZeneca": "2774","Pfizer-BioNTech": "2405","Sinovac Biotech": "5987"},
{"group": "26.05","AstraZeneca": "2294","Pfizer-BioNTech": "2642","Sinovac Biotech": "5197"},
{"group": "27.05","AstraZeneca": "2054","Pfizer-BioNTech": "2485","Sinovac Biotech": "4871"},
{"group": "28.05","AstraZeneca": "2386","Pfizer-BioNTech": "1984","Sinovac Biotech": "2660"},
{"group": "29.05","AstraZeneca": "777","Pfizer-BioNTech": "334","Sinovac Biotech": "362"},
{"group": "30.05","AstraZeneca": "230","Pfizer-BioNTech": "0","Sinovac Biotech": "110"},
{"group": "31.05","AstraZeneca": "1015","Pfizer-BioNTech": "1087","Sinovac Biotech": "1603"},
{"group": "01.06","AstraZeneca": "605","Pfizer-BioNTech": "923","Sinovac Biotech": "1498"},
{"group": "02.06","AstraZeneca": "1523","Pfizer-BioNTech": "1155","Sinovac Biotech": "2904"},
{"group": "03.06","AstraZeneca": "739","Pfizer-BioNTech": "1050","Sinovac Biotech": "2183"},
{"group": "04.06","AstraZeneca": "646","Pfizer-BioNTech": "1045","Sinovac Biotech": "2039"},
{"group": "05.06","AstraZeneca": "220","Pfizer-BioNTech": "360","Sinovac Biotech": "292"},
{"group": "06.06","AstraZeneca": "70","Pfizer-BioNTech": "270","Sinovac Biotech": "114"},
{"group": "07.06","AstraZeneca": "1474","Pfizer-BioNTech": "2152","Sinovac Biotech": "1398"},
{"group": "08.06","AstraZeneca": "6996","Pfizer-BioNTech": "181","Sinovac Biotech": "2059"},
{"group": "09.06","AstraZeneca": "16386","Pfizer-BioNTech": "260","Sinovac Biotech": "2429"},
{"group": "10.06","AstraZeneca": "21069","Pfizer-BioNTech": "317","Sinovac Biotech": "2199"},
{"group": "11.06","AstraZeneca": "23735","Pfizer-BioNTech": "599","Sinovac Biotech": "2048"},
{"group": "12.06","AstraZeneca": "6003","Pfizer-BioNTech": "121","Sinovac Biotech": "362"},
{"group": "13.06","AstraZeneca": "1706","Pfizer-BioNTech": "9","Sinovac Biotech": "177"},
{"group": "14.06","AstraZeneca": "19436","Pfizer-BioNTech": "701","Sinovac Biotech": "1820"},
{"group": "15.06","AstraZeneca": "24443","Pfizer-BioNTech": "404","Sinovac Biotech": "2282"},
{"group": "16.06","AstraZeneca": "22712","Pfizer-BioNTech": "430","Sinovac Biotech": "2576"},
{"group": "17.06","AstraZeneca": "19298","Pfizer-BioNTech": "1590","Sinovac Biotech": "2855"},
{"group": "18.06","AstraZeneca": "15286","Pfizer-BioNTech": "643","Sinovac Biotech": "2516"},
{"group": "19.06","AstraZeneca": "3364","Pfizer-BioNTech": "171","Sinovac Biotech": "452"},
{"group": "20.06","AstraZeneca": "640","Pfizer-BioNTech": "4","Sinovac Biotech": "31"},
{"group": "21.06","AstraZeneca": "1339","Pfizer-BioNTech": "858","Sinovac Biotech": "198"},
{"group": "22.06","AstraZeneca": "22956","Pfizer-BioNTech": "3316","Sinovac Biotech": "4988"},
{"group": "23.06","AstraZeneca": "23607","Pfizer-BioNTech": "11338","Sinovac Biotech": "6114"},
{"group": "24.06","AstraZeneca": "21406","Pfizer-BioNTech": "25198","Sinovac Biotech": "8606"},
{"group": "25.06","AstraZeneca": "19418","Pfizer-BioNTech": "28652","Sinovac Biotech": "12520"},
{"group": "26.06","AstraZeneca": "2407","Pfizer-BioNTech": "14700","Sinovac Biotech": "4225"},
{"group": "27.06","AstraZeneca": "507","Pfizer-BioNTech": "5244","Sinovac Biotech": "1839"},
{"group": "28.06","AstraZeneca": "947","Pfizer-BioNTech": "7126","Sinovac Biotech": "1401"},
{"group": "29.06","AstraZeneca": "19193","Pfizer-BioNTech": "25049","Sinovac Biotech": "15920"},
{"group": "30.06","AstraZeneca": "18862","Pfizer-BioNTech": "26408","Sinovac Biotech": "16202"}
]

var doses = [
{"group": "24.02","Доза 1": "160","Доза 2": "2"},
{"group": "25.02","Доза 1": "1180","Доза 2": "2"},
{"group": "26.02","Доза 1": "1714","Доза 2": "2"},
{"group": "27.02","Доза 1": "91","Доза 2": "2"},
{"group": "28.02","Доза 1": "1","Доза 2": "2"},
{"group": "01.03","Доза 1": "1765","Доза 2": "2"},
{"group": "02.03","Доза 1": "1984","Доза 2": "2"},
{"group": "03.03","Доза 1": "2681","Доза 2": "2"},
{"group": "04.03","Доза 1": "2914","Доза 2": "2"},
{"group": "05.03","Доза 1": "3278","Доза 2": "2"},
{"group": "06.03","Доза 1": "1280","Доза 2": "2"},
{"group": "07.03","Доза 1": "911","Доза 2": "2"},
{"group": "08.03","Доза 1": "1172","Доза 2": "2"},
{"group": "09.03","Доза 1": "4363","Доза 2": "2"},
{"group": "10.03","Доза 1": "5899","Доза 2": "2"},
{"group": "11.03","Доза 1": "8860","Доза 2": "2"},
{"group": "12.03","Доза 1": "9305","Доза 2": "2"},
{"group": "13.03","Доза 1": "3597","Доза 2": "2"},
{"group": "14.03","Доза 1": "2019","Доза 2": "2"},
{"group": "15.03","Доза 1": "8929","Доза 2": "2"},
{"group": "16.03","Доза 1": "9840","Доза 2": "3"},
{"group": "17.03","Доза 1": "9833","Доза 2": "2"},
{"group": "18.03","Доза 1": "10960","Доза 2": "2"},
{"group": "19.03","Доза 1": "11629","Доза 2": "2"},
{"group": "20.03","Доза 1": "3969","Доза 2": "2"},
{"group": "21.03","Доза 1": "2716","Доза 2": "2"},
{"group": "22.03","Доза 1": "10905","Доза 2": "2"},
{"group": "23.03","Доза 1": "15098","Доза 2": "2"},
{"group": "24.03","Доза 1": "18562","Доза 2": "2"},
{"group": "25.03","Доза 1": "18739","Доза 2": "2"},
{"group": "26.03","Доза 1": "17940","Доза 2": "2"},
{"group": "27.03","Доза 1": "4617","Доза 2": "2"},
{"group": "28.03","Доза 1": "1586","Доза 2": "2"},
{"group": "29.03","Доза 1": "14433","Доза 2": "3"},
{"group": "30.03","Доза 1": "18669","Доза 2": "2"},
{"group": "31.03","Доза 1": "17171","Доза 2": "2"},
{"group": "01.04","Доза 1": "19098","Доза 2": "2"},
{"group": "02.04","Доза 1": "18815","Доза 2": "2"},
{"group": "03.04","Доза 1": "3920","Доза 2": "2"},
{"group": "04.04","Доза 1": "1259","Доза 2": "2"},
{"group": "05.04","Доза 1": "12857","Доза 2": "2"},
{"group": "06.04","Доза 1": "15586","Доза 2": "2"},
{"group": "07.04","Доза 1": "14314","Доза 2": "2"},
{"group": "08.04","Доза 1": "18567","Доза 2": "5"},
{"group": "09.04","Доза 1": "19859","Доза 2": "2"},
{"group": "10.04","Доза 1": "4049","Доза 2": "2"},
{"group": "11.04","Доза 1": "1217","Доза 2": "2"},
{"group": "12.04","Доза 1": "10136","Доза 2": "2"},
{"group": "13.04","Доза 1": "15153","Доза 2": "2"},
{"group": "14.04","Доза 1": "15745","Доза 2": "2"},
{"group": "15.04","Доза 1": "13521","Доза 2": "2"},
{"group": "16.04","Доза 1": "13045","Доза 2": "2"},
{"group": "17.04","Доза 1": "3334","Доза 2": "2"},
{"group": "18.04","Доза 1": "1454","Доза 2": "2"},
{"group": "19.04","Доза 1": "12145","Доза 2": "2"},
{"group": "20.04","Доза 1": "15043","Доза 2": "2"},
{"group": "21.04","Доза 1": "14045","Доза 2": "2"},
{"group": "22.04","Доза 1": "16170","Доза 2": "2"},
{"group": "23.04","Доза 1": "14340","Доза 2": "2"},
{"group": "24.04","Доза 1": "4532","Доза 2": "2"},
{"group": "25.04","Доза 1": "1115","Доза 2": "2"},
{"group": "26.04","Доза 1": "11097","Доза 2": "6"},
{"group": "27.04","Доза 1": "19591","Доза 2": "2"},
{"group": "28.04","Доза 1": "70469","Доза 2": "3"},
{"group": "29.04","Доза 1": "73257","Доза 2": "122"},
{"group": "30.04","Доза 1": "49856","Доза 2": "132"},
{"group": "01.05","Доза 1": "2632","Доза 2": "32"},
{"group": "02.05","Доза 1": "178","Доза 2": "2"},
{"group": "03.05","Доза 1": "920","Доза 2": "2"},
{"group": "04.05","Доза 1": "3413","Доза 2": "15"},
{"group": "05.05","Доза 1": "24379","Доза 2": "118"},
{"group": "06.05","Доза 1": "37959","Доза 2": "11"},
{"group": "07.05","Доза 1": "36029","Доза 2": "20"},
{"group": "08.05","Доза 1": "4844","Доза 2": "2"},
{"group": "09.05","Доза 1": "1005","Доза 2": "2"},
{"group": "10.05","Доза 1": "1946","Доза 2": "251"},
{"group": "11.05","Доза 1": "17032","Доза 2": "1235"},
{"group": "12.05","Доза 1": "18487","Доза 2": "1902"},
{"group": "13.05","Доза 1": "17058","Доза 2": "4532"},
{"group": "14.05","Доза 1": "18336","Доза 2": "5305"},
{"group": "15.05","Доза 1": "2740","Доза 2": "3427"},
{"group": "16.05","Доза 1": "923","Доза 2": "1310"},
{"group": "17.05","Доза 1": "8173","Доза 2": "9062"},
{"group": "18.05","Доза 1": "8903","Доза 2": "10188"},
{"group": "19.05","Доза 1": "7400","Доза 2": "10546"},
{"group": "20.05","Доза 1": "6288","Доза 2": "12628"},
{"group": "21.05","Доза 1": "6092","Доза 2": "11494"},
{"group": "22.05","Доза 1": "1023","Доза 2": "2483"},
{"group": "23.05","Доза 1": "322","Доза 2": "1006"},
{"group": "24.05","Доза 1": "3619","Доза 2": "10440"},
{"group": "25.05","Доза 1": "5222","Доза 2": "11168"},
{"group": "26.05","Доза 1": "4999","Доза 2": "10135"},
{"group": "27.05","Доза 1": "6884","Доза 2": "9412"},
{"group": "28.05","Доза 1": "9786","Доза 2": "7032"},
{"group": "29.05","Доза 1": "7120","Доза 2": "1475"},
{"group": "30.05","Доза 1": "5829","Доза 2": "342"},
{"group": "31.05","Доза 1": "10233","Доза 2": "3707"},
{"group": "01.06","Доза 1": "15859","Доза 2": "3028"},
{"group": "02.06","Доза 1": "28900","Доза 2": "5584"},
{"group": "03.06","Доза 1": "46869","Доза 2": "3974"},
{"group": "04.06","Доза 1": "53711","Доза 2": "3732"},
{"group": "05.06","Доза 1": "39230","Доза 2": "874"},
{"group": "06.06","Доза 1": "24407","Доза 2": "456"},
{"group": "07.06","Доза 1": "43138","Доза 2": "5026"},
{"group": "08.06","Доза 1": "43926","Доза 2": "9238"},
{"group": "09.06","Доза 1": "36499","Доза 2": "19077"},
{"group": "10.06","Доза 1": "30745","Доза 2": "23587"},
{"group": "11.06","Доза 1": "35681","Доза 2": "26384"},
{"group": "12.06","Доза 1": "28385","Доза 2": "6488"},
{"group": "13.06","Доза 1": "20328","Доза 2": "1894"},
{"group": "14.06","Доза 1": "28101","Доза 2": "21959"},
{"group": "15.06","Доза 1": "35463","Доза 2": "27131"},
{"group": "16.06","Доза 1": "50821","Доза 2": "25720"},
{"group": "17.06","Доза 1": "57971","Доза 2": "23745"},
{"group": "18.06","Доза 1": "48657","Доза 2": "18447"},
{"group": "19.06","Доза 1": "21617","Доза 2": "3989"},
{"group": "20.06","Доза 1": "3716","Доза 2": "677"},
{"group": "21.06","Доза 1": "6572","Доза 2": "2397"},
{"group": "22.06","Доза 1": "22527","Доза 2": "31262"},
{"group": "23.06","Доза 1": "38863","Доза 2": "41061"},
{"group": "24.06","Доза 1": "40971","Доза 2": "55212"},
{"group": "25.06","Доза 1": "36541","Доза 2": "60592"},
{"group": "26.06","Доза 1": "22329","Доза 2": "21334"},
{"group": "27.06","Доза 1": "11042","Доза 2": "7592"},
{"group": "28.06","Доза 1": "7592","Доза 2": "9476"},
{"group": "29.06","Доза 1": "21476","Доза 2": "60164"},
{"group": "30.06","Доза 1": "31715","Доза 2": "61474"}
]
var supplies = [
{"State": "Міжнародні партнери","COVAX": 2137500,"ДП Медичні закупівлі України": 0,"Crown Agents": 0,"total": 2137500},
{"State": "Державний бюджет","COVAX": 0,"ДП Медичні закупівлі України": 1713316,"Crown Agents": 934070,"total": 2647386}
]
var vaccines_used = [
{"State": "Люди віком 60+","AstraZeneca": 361573,"Pfizer-BioNTech": 23819,"Sinovac Biotech": 145350,"total": 530742},
{"State": "Медики","AstraZeneca": 353954,"Pfizer-BioNTech": 151031,"Sinovac Biotech": 19325,"total": 524310},
{"State": "Вчителі","AstraZeneca": 59873,"Pfizer-BioNTech": 314234,"Sinovac Biotech": 31619,"total": 405726},
{"State": "Державна безпека","AstraZeneca": 63231,"Pfizer-BioNTech": 97049,"Sinovac Biotech": 162247,"total": 322527},
{"State": "Інші","AstraZeneca": 62425,"Pfizer-BioNTech": 32541,"Sinovac Biotech": 180328,"total": 275294},
{"State": "Соцпрацівник","AstraZeneca": 84704,"Pfizer-BioNTech": 43949,"Sinovac Biotech": 48922,"total": 177575},
{"State": "Люди з хворобами","AstraZeneca": 63770,"Pfizer-BioNTech": 10453,"Sinovac Biotech": 102334,"total": 176557},
{"State": "Військові","AstraZeneca": 101474,"Pfizer-BioNTech": 4787,"Sinovac Biotech": 23326,"total": 129587},
{"State": "Геріартричні пансіонати","AstraZeneca": 3527,"Pfizer-BioNTech": 54255,"Sinovac Biotech": 133,"total": 57915},
{"State": "Критична інфрастр.","AstraZeneca": 1951,"Pfizer-BioNTech": 9723,"Sinovac Biotech": 31639,"total": 43313},
{"State": "Публічні особи","AstraZeneca": 27287,"Pfizer-BioNTech": 4601,"Sinovac Biotech": 830,"total": 32718}
]

function stackedBar(w,data,id) {
    if (w < 600) {
        var start_width = w,
        left = 20;
    } else {
        var start_width = 600,
        left = 50
    } 

d3.select("#"+id).html('')
var margin = {top: 50, right: 30, bottom: 20, left: left},
    width = start_width - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#"+id)
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
    if (width > 500) {
        var fontSize = '18px'
    } else {
        var fontSize = '12px'
    }
    if (id == 'dynamic') {
        var title = 'Динаміка вакцинації'
        var subgroups = ['AstraZeneca','Pfizer-BioNTech','Sinovac Biotech']
        var colorPalette = ['#B07AA1','#72A3C9','#E74545']
    } else if (id =='doses') {
        var title = 'Розподілення за дозами'
        var subgroups = ['Доза 1','Доза 2']
        var colorPalette = ['#98D687','#24693E']
    }
svg.append("text")
        .attr("x", (width / 2) ) 
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", fontSize)
        .style("font-family", "Georgia")
        .text(title);  
  var color = d3.scaleOrdinal()
    .domain(subgroups)
    .range(colorPalette)
  
  var groups = d3.map(data, function(d){return(d.group)}).keys()
  var ticks = groups.map(function(d,i) {if (i % 7 == 1) {return d}})
  var ticks = ticks.filter(d => d != undefined)
  var legend = svg.append("g")
    .attr("font-family", "Georgia")
    .attr("font-size", 10)
    .selectAll("g")
    .data(subgroups)
    .enter().append("g")
    .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

legend.append("rect")
        .attr("x", 50)
        .attr("width", 19)
        .attr("height", 19)
        .attr("fill", color);

legend.append("text")
        .attr("x", 75)
        .attr("y", 9.5)
        .attr("dy", "0.32em")
        .text(function(d) { return d; });
var tooltipBee = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("z-index", "10")
        .style("visibility", "hidden")
        .style("padding", "14px")
        .style("background-color", "white")
        .style("border", "1px solid #f5f5f5")
        .style("color", "black")
        .style("border-radius", "6px")
        .style("border-color", "black")
        .style("font", "12px sans-serif")
        .text("tooltip");
  
  var x = d3.scaleBand()
      .domain(groups)
      .range([0, width])
      .padding([0.2])
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickSizeOuter(0).tickValues(ticks));
  
  var y = d3.scaleLinear()
    .domain([0, 90000])
    .range([ height, 0 ]);
  svg.append("g")
    .call(d3.axisLeft(y));

  var stackedData = d3.stack()
    .keys(subgroups)
    (data)

  // Show the bars
  svg.append("g")
    .selectAll("g")
    
    .data(stackedData)
    .enter().append("g")
      .attr("fill", function(d) { return color(d.key); })
      .selectAll("rect")
      
      .data(function(d) { return d; })
      .enter().append("rect")
        .attr("x", function(d) { return x(d.data.group); })
        .attr("y", function(d) { return y(d[1]); })
        .attr("height", function(d) { return y(d[0]) - y(d[1]); })
        .attr("width",x.bandwidth())
    .on("mouseover", function(d) {
            var html = '<h4>'+d.data.group+'</h4>'
            var total = 0
            subgroups.forEach(function(subgroup,i) {
                html += '<p>'+subgroup+': '+numberWithSpaces(d.data[subgroup])+'</p>'
                total += parseInt(d.data[subgroup])
            })
            html += '<p>Вакциновано за день: <b>'+numberWithSpaces(total)+'</b></p>'
            tooltipBee.html(html)
            tooltipBee.style("visibility", "visible")
            })
        .on("mousemove", function() {
            return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
        })
        .on("mouseout", function(d){
            return tooltipBee.style("visibility", "hidden");
        });
}
function horizontalBarChart(w,data,id) {
    if (w < 600) {
        var start_width = w,
        left = 20;
    } else {
        var start_width = 600,
        left = 50
    } 
    if (id == 'supplies') {
        var left = 140;
        start_height = 250
        var title = 'Закупівельники вакцин'
        var keys = ["COVAX","ДП Медичні закупівлі України","Crown Agents"]
        var colorPalette = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]
    } else if (id == 'vaccines_used'){
        start_height = 400
        var left = 130;
        var title = 'Які вакцини використовують'
        var keys = ["AstraZeneca","Pfizer-BioNTech","Sinovac Biotech"]
        var colorPalette = ['#B07AA1','#72A3C9','#E74545']
    }
    var vacKeys = ["Люди віком 60+","Медики","Вчителі","Державна безпека","Інші","Соцпрацівники","Люди з хворобами","Військові","Геріартричні пансіонати","Працівники критичної інфраструктури","Публічні особи"]
    d3.select("#"+id).html('')
    var margin = {top: 50, right: 30, bottom: 20, left: left},
        width = start_width - margin.left - margin.right,
        height = start_height - margin.top - margin.bottom;
    
    if (start_width > 500) {
        var fontSize = '18px'
    } else {
        var fontSize = '12px'
    }
    var svg = d3.select("#"+id)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
    svg.append("text")
        .attr("x", (width / 2) ) 
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", fontSize)
        .style("font-family", "Georgia")
        .text(title);  

    g = svg.append("g")
    var tooltipBee = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("z-index", "10")
        .style("visibility", "hidden")
        .style("padding", "14px")
        .style("background-color", "white")
        .style("border", "1px solid #f5f5f5")
        .style("color", "black")
        .style("border-radius", "6px")
        .style("border-color", "black")
        .style("font", "12px sans-serif")
        .text("tooltip");

    var y = d3.scaleBand()
        .rangeRound([0, height])
        .paddingInner(0.05)
        .align(0.1);

    var x = d3.scaleLinear()
        .range([0, width]);

    var z = d3.scaleOrdinal()
        .range(colorPalette);

    

    data.sort(function(a, b) { return b.total - a.total; });
    y.domain(data.map(function(d) { return d.State; }));
    x.domain([0, d3.max(data, function(d) { return d.total; })]).nice();
    var ticks = [0, 3000000]
    z.domain(keys);

    g.append("g")
        .selectAll("g")
        .data(d3.stack().keys(keys)(data))
        .enter().append("g")
        .attr("fill", function(d) { return z(d.key); })
        .selectAll("rect")
        .data(function(d) { return d; })
        .enter().append("rect")
        .attr("y", function(d) { return y(d.data.State); })
        .attr("x", function(d) { return x(d[0]); })
        .attr("width", function(d) { return x(d[1]) - x(d[0]); })
        .attr("height", y.bandwidth())
        .on("mouseover", function(d) {
            if (d[0] == 0 && d.data.State == 'Міжнародні партнери') {
                var key = 'COVAX'
            } else if (d.data.State == 'Державний бюджет' && d[0] == 0) {
                var key =  'ДП Медичні закупівлі України'
            } else if (d.data.State == 'Державний бюджет' && d[0] != 0) {
                var key = 'Crown Agents'
            } else if (vacKeys.includes(d.data.State)) {
                var key = d.data.State
            }
            if (d.data.State == 'Міжнародні партнери' || d.data.State == 'Державний бюджет') {
                var html = '<h4>'+key+'</h4><p>Поставлено '+numberWithSpaces(d.data[key])+' вакцин</p>'
            } else if (vacKeys.includes(d.data.State)) {
                var value = d[1] - d[0]
                var vacName = null
                keys.forEach(function(x,i) {
                    if(d.data[x] == value) {
                        vacName = x
                    }
                })
                var html = '<h4>'+key+'</h4><p>'+vacName+': '+numberWithSpaces(d.data[vacName])+'</p><p>Всего: '+numberWithSpaces(d.data.total)+'</p>'
            }
            tooltipBee.html(html)
            tooltipBee.style("visibility", "visible")
            })
        .on("mousemove", function() {
            return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
        })
        .on("mouseout", function(d){
            return tooltipBee.style("visibility", "hidden");
        });;

    g.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0,0)")
        .call(d3.axisLeft(y));
        
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).ticks(5))
        .selectAll("text")
        .style("text-anchor", "middle");
    if (id == 'supplies') {
        g.append("g")
            .selectAll("g")
            .data(d3.stack().keys(keys)(data))
            .enter()
            .selectAll("text")
            .data(function(d) { return d; })
            .enter().append("text")
            .text(function(d) {
                if (d[0] == 0 && d.data.State == 'Міжнародні партнери') {
                    return 'COVAX'
                } else if (d.data.State != 'Міжнародні партнери' && d[0] == 0) {
                    return 'ДП Медичні закупівлі України'
                } else if (d.data.State != 'Міжнародні партнери' && d[0] != 0) {
                    return 'Crown Agents'
                }
            })
            .attr("y", function(d) { return y(d.data.State) + 20; })
            .attr("x", function(d) { return x(d[0]) + 20; })
            .attr('fill','white')
    }
}
stackedBar(window.innerWidth,dynamic,'dynamic')
stackedBar(window.innerWidth,doses,'doses')
horizontalBarChart(window.innerWidth,supplies,'supplies')
horizontalBarChart(window.innerWidth,vaccines_used,'vaccines_used')
window.onresize = function(event) {
    stackedBar(window.innerWidth,dynamic,'dynamic')
    stackedBar(window.innerWidth,doses,'doses')
    horizontalBarChart(window.innerWidth,supplies,'supplies')
    horizontalBarChart(window.innerWidth,vaccines_used,'vaccines_used')
}