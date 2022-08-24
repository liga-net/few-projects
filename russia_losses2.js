if(document.createStyleSheet) {
    document.createStyleSheet('https://cdn.jsdelivr.net/gh/liga-net/few-projects/russia_losses.css');
   }
   else {
    var styles = "@import url('https://cdn.jsdelivr.net/gh/liga-net/few-projects/russia_losses.css');";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
}
var dead_russians = [{'date': '26.02.2022', 'value': 2700},
 {'date': '27.02.2022', 'value': 1000},
 {'date': '28.02.2022', 'value': 800},
 {'date': '01.03.2022', 'value': 410},
 {'date': '02.03.2022', 'value': 130},
 {'date': '03.03.2022', 'value': 3160},
 {'date': '04.03.2022', 'value': 166},
 {'date': '05.03.2022', 'value': 834},
 {'date': '06.03.2022', 'value': 1000},
 {'date': '07.03.2022', 'value': 300},
 {'date': '08.03.2022', 'value': 800},
 {'date': '09.03.2022', 'value': 200},
 {'date': '10.03.2022', 'value': 200},
 {'date': '11.03.2022', 'value': 226},
 {'date': '12.03.2022', 'value': 174},
 {'date': '15.03.2022', 'value': 600},
 {'date': '16.03.2022', 'value': 300},
 {'date': '17.03.2022', 'value': 200},
 {'date': '18.03.2022', 'value': 200},
 {'date': '19.03.2022', 'value': 200},
 {'date': '20.03.2022', 'value': 300},
 {'date': '21.03.2022', 'value': 300},
 {'date': '22.03.2022', 'value': 300},
 {'date': '23.03.2022', 'value': 300},
 {'date': '24.03.2022', 'value': 200},
 {'date': '25.03.2022', 'value': 300},
 {'date': '26.03.2022', 'value': 300},
 {'date': '27.03.2022', 'value': 200},
 {'date': '28.03.2022', 'value': 400},
 {'date': '29.03.2022', 'value': 200},
 {'date': '30.03.2022', 'value': 100},
 {'date': '31.03.2022', 'value': 200},
 {'date': '01.04.2022', 'value': 200},
 {'date': '02.04.2022', 'value': 100},
 {'date': '03.04.2022', 'value': 200},
 {'date': '04.04.2022', 'value': 300},
 {'date': '05.04.2022', 'value': 200},
 {'date': '06.04.2022', 'value': 100},
 {'date': '07.04.2022', 'value': 300},
 {'date': '08.04.2022', 'value': 100},
 {'date': '09.04.2022', 'value': 100},
 {'date': '10.04.2022', 'value': 200},
 {'date': '11.04.2022', 'value': 200},
 {'date': '12.04.2022', 'value': 100},
 {'date': '13.04.2022', 'value': 200},
 {'date': '14.04.2022', 'value': 100},
 {'date': '15.04.2022', 'value': 100},
 {'date': '16.04.2022', 'value': 100},
 {'date': '17.04.2022', 'value': 200},
 {'date': '18.04.2022', 'value': 300},
 {'date': '19.04.2022', 'value': 200},
 {'date': '20.04.2022', 'value': 100},
 {'date': '21.04.2022', 'value': 100},
 {'date': '22.04.2022', 'value': 200},
 {'date': '23.04.2022', 'value': 400},
 {'date': '24.04.2022', 'value': 200},
 {'date': '25.04.2022', 'value': 100},
 {'date': '26.04.2022', 'value': 200},
 {'date': '27.04.2022', 'value': 300},
 {'date': '28.04.2022', 'value': 400},
 {'date': '29.04.2022', 'value': 200},
 {'date': '30.04.2022', 'value': 200},
 {'date': '01.05.2022', 'value': 300},
 {'date': '02.05.2022', 'value': 300},
 {'date': '03.05.2022', 'value': 400},
 {'date': '04.05.2022', 'value': 300},
 {'date': '05.05.2022', 'value': 200},
 {'date': '06.05.2022', 'value': 200},
 {'date': '07.05.2022', 'value': 200},
 {'date': '08.05.2022', 'value': 400},
 {'date': '09.05.2022', 'value': 150},
 {'date': '10.05.2022', 'value': 350},
 {'date': '11.05.2022', 'value': 350},
 {'date': '12.05.2022', 'value': 300},
 {'date': '13.05.2022', 'value': 250},
 {'date': '14.05.2022', 'value': 300},
 {'date': '15.05.2022', 'value': 200},
 {'date': '16.05.2022', 'value': 300},
 {'date': '17.05.2022', 'value': 200},
 {'date': '18.05.2022', 'value': 400},
 {'date': '19.05.2022', 'value': 200},
 {'date': '20.05.2022', 'value': 200},
 {'date': '21.05.2022', 'value': 150},
 {'date': '22.05.2022', 'value': 200},
 {'date': '23.05.2022', 'value': 150},
 {'date': '24.05.2022', 'value': 150},
 {'date': '25.05.2022', 'value': 100},
 {'date': '26.05.2022', 'value': 150},
 {'date': '27.05.2022', 'value': 150},
 {'date': '28.05.2022', 'value': 250},
 {'date': '29.05.2022', 'value': 150},
 {'date': '30.05.2022', 'value': 200},
 {'date': '31.05.2022', 'value': 150},
 {'date': '01.06.2022', 'value': 200},
 {'date': '02.06.2022', 'value': 150},
 {'date': '03.06.2022', 'value': 100},
 {'date': '04.06.2022', 'value': 100},
 {'date': '05.06.2022', 'value': 100},
 {'date': '06.06.2022', 'value': 100},
 {'date': '07.06.2022', 'value': 110},
 {'date': '08.06.2022', 'value': 140},
 {'date': '09.06.2022', 'value': 200},
 {'date': '10.06.2022', 'value': 200},
 {'date': '11.06.2022', 'value': 150},
 {'date': '12.06.2022', 'value': 100},
 {'date': '13.06.2022', 'value': 150},
 {'date': '14.06.2022', 'value': 200},
 {'date': '15.06.2022', 'value': 250},
 {'date': '16.06.2022', 'value': 200},
 {'date': '17.06.2022', 'value': 200},
 {'date': '18.06.2022', 'value': 200},
 {'date': '19.06.2022', 'value': 250},
 {'date': '20.06.2022', 'value': 200},
 {'date': '21.06.2022', 'value': 300},
 {'date': '22.06.2022', 'value': 130},
 {'date': '23.06.2022', 'value': 200},
 {'date': '24.06.2022', 'value': 100},
 {'date': '25.06.2022', 'value': 170},
 {'date': '26.06.2022', 'value': 150},
 {'date': '27.06.2022', 'value': 150},
 {'date': '28.06.2022', 'value': 250},
 {'date': '29.06.2022', 'value': 200},
 {'date': '30.06.2022', 'value': 150},
 {'date': '01.07.2022', 'value': 150},
 {'date': '02.07.2022', 'value': 120},
 {'date': '03.07.2022', 'value': 100},
 {'date': '04.07.2022', 'value': 230},
 {'date': '05.07.2022', 'value': 150},
 {'date': '06.07.2022', 'value': 150},
 {'date': '07.07.2022', 'value': 150},
 {'date': '08.07.2022', 'value': 250},
 {'date': '09.07.2022', 'value': 300},
 {'date': '10.07.2022', 'value': 100},
 {'date': '11.07.2022', 'value': 100},
 {'date': '12.07.2022', 'value': 70},
 {'date': '13.07.2022', 'value': 100},
 {'date': '14.07.2022', 'value': 300},
 {'date': '15.07.2022', 'value': 130},
 {'date': '16.07.2022', 'value': 140},
 {'date': '17.07.2022', 'value': 160},
 {'date': '18.07.2022', 'value': 150},
 {'date': '19.07.2022', 'value': 100},
 {'date': '20.07.2022', 'value': 200},
 {'date': '21.07.2022', 'value': 100},
 {'date': '22.07.2022', 'value': 150},
 {'date': '23.07.2022', 'value': 240},
 {'date': '24.07.2022', 'value': 280},
 {'date': '25.07.2022', 'value': 180},
 {'date': '26.07.2022', 'value': 170},
 {'date': '27.07.2022', 'value': 200},
 {'date': '28.07.2022', 'value': 160},
 {'date': '29.07.2022', 'value': 270},
 {'date': '30.07.2022', 'value': 170},
 {'date': '31.07.2022', 'value': 160},
 {'date': '01.08.2022', 'value': 200},
 {'date': '02.08.2022', 'value': 140},
 {'date': '03.08.2022', 'value': 180},
 {'date': '04.08.2022', 'value': 150},
 {'date': '05.08.2022', 'value': 150},
 {'date': '06.08.2022', 'value': 250},
 {'date': '07.08.2022', 'value': 300},
 {'date': '08.08.2022', 'value': 140},
 {'date': '09.08.2022', 'value': 300},
 {'date': '10.08.2022', 'value': 160},
 {'date': '11.08.2022', 'value': 200},
 {'date': '12.08.2022', 'value': 200},
 {'date': '13.08.2022', 'value': 200},
 {'date': '14.08.2022', 'value': 150},
 {'date': '15.08.2022', 'value': 200},
 {'date': '16.08.2022', 'value': 150},
 {'date': '17.08.2022', 'value': 200},
 {'date': '18.08.2022', 'value': 200},
 {'date': '19.08.2022', 'value': 400},
 {'date': '20.08.2022', 'value': 200},
 {'date': '21.08.2022', 'value': 300},
 {'date': '22.08.2022', 'value': 200}]
        
        var bbm = [{'date': '26.02.2022', 'value': 406},
 {'date': '27.02.2022', 'value': 164},
 {'date': '28.02.2022', 'value': 116},
 {'date': '01.03.2022', 'value': 30},
 {'date': '02.03.2022', 'value': 16},
 {'date': '03.03.2022', 'value': 38},
 {'date': '04.03.2022', 'value': 39},
 {'date': '05.03.2022', 'value': 6},
 {'date': '06.03.2022', 'value': 40},
 {'date': '07.03.2022', 'value': 14},
 {'date': '08.03.2022', 'value': 37},
 {'date': '09.03.2022', 'value': 34},
 {'date': '10.03.2022', 'value': 35},
 {'date': '11.03.2022', 'value': 60},
 {'date': '12.03.2022', 'value': 40},
 {'date': '13.03.2022', 'value': 21},
 {'date': '14.03.2022', 'value': 23},
 {'date': '15.03.2022', 'value': 30},
 {'date': '16.03.2022', 'value': 96},
 {'date': '17.03.2022', 'value': 60},
 {'date': '18.03.2022', 'value': 13},
 {'date': '19.03.2022', 'value': 22},
 {'date': '20.03.2022', 'value': 17},
 {'date': '21.03.2022', 'value': 48},
 {'date': '22.03.2022', 'value': 21},
 {'date': '23.03.2022', 'value': 22},
 {'date': '24.03.2022', 'value': 19},
 {'date': '25.03.2022', 'value': 28},
 {'date': '26.03.2022', 'value': 15},
 {'date': '27.03.2022', 'value': 24},
 {'date': '28.03.2022', 'value': 30},
 {'date': '29.03.2022', 'value': 16},
 {'date': '30.03.2022', 'value': 13},
 {'date': '31.03.2022', 'value': 12},
 {'date': '01.04.2022', 'value': 16},
 {'date': '02.04.2022', 'value': 25},
 {'date': '03.04.2022', 'value': 54},
 {'date': '04.04.2022', 'value': 14},
 {'date': '05.04.2022', 'value': 14},
 {'date': '06.04.2022', 'value': 3},
 {'date': '07.04.2022', 'value': 30},
 {'date': '09.04.2022', 'value': 4},
 {'date': '10.04.2022', 'value': 16},
 {'date': '11.04.2022', 'value': 12},
 {'date': '12.04.2022', 'value': 23},
 {'date': '13.04.2022', 'value': 18},
 {'date': '14.04.2022', 'value': 4},
 {'date': '15.04.2022', 'value': 8},
 {'date': '16.04.2022', 'value': 6},
 {'date': '17.04.2022', 'value': 20},
 {'date': '18.04.2022', 'value': 39},
 {'date': '19.04.2022', 'value': 22},
 {'date': '20.04.2022', 'value': 24},
 {'date': '21.04.2022', 'value': 31},
 {'date': '22.04.2022', 'value': 44},
 {'date': '23.04.2022', 'value': 43},
 {'date': '24.04.2022', 'value': 33},
 {'date': '25.04.2022', 'value': 20},
 {'date': '26.04.2022', 'value': 50},
 {'date': '27.04.2022', 'value': 34},
 {'date': '28.04.2022', 'value': 47},
 {'date': '29.04.2022', 'value': 29},
 {'date': '30.04.2022', 'value': 27},
 {'date': '01.05.2022', 'value': 26},
 {'date': '02.05.2022', 'value': 48},
 {'date': '03.05.2022', 'value': 48},
 {'date': '04.05.2022', 'value': 43},
 {'date': '05.05.2022', 'value': 41},
 {'date': '06.05.2022', 'value': 35},
 {'date': '07.05.2022', 'value': 27},
 {'date': '08.05.2022', 'value': 28},
 {'date': '09.05.2022', 'value': 23},
 {'date': '10.05.2022', 'value': 44},
 {'date': '11.05.2022', 'value': 48},
 {'date': '12.05.2022', 'value': 17},
 {'date': '13.05.2022', 'value': 27},
 {'date': '14.05.2022', 'value': 34},
 {'date': '15.05.2022', 'value': 24},
 {'date': '16.05.2022', 'value': 16},
 {'date': '17.05.2022', 'value': 35},
 {'date': '18.05.2022', 'value': 34},
 {'date': '19.05.2022', 'value': 20},
 {'date': '20.05.2022', 'value': 27},
 {'date': '21.05.2022', 'value': 26},
 {'date': '22.05.2022', 'value': 25},
 {'date': '23.05.2022', 'value': 25},
 {'date': '24.05.2022', 'value': 28},
 {'date': '25.05.2022', 'value': 19},
 {'date': '26.05.2022', 'value': 22},
 {'date': '27.05.2022', 'value': 12},
 {'date': '28.05.2022', 'value': 11},
 {'date': '29.05.2022', 'value': 12},
 {'date': '30.05.2022', 'value': 12},
 {'date': '31.05.2022', 'value': 20},
 {'date': '01.06.2022', 'value': 41},
 {'date': '02.06.2022', 'value': 11},
 {'date': '03.06.2022', 'value': 12},
 {'date': '04.06.2022', 'value': 13},
 {'date': '05.06.2022', 'value': 87},
 {'date': '06.06.2022', 'value': 108},
 {'date': '07.06.2022', 'value': 16},
 {'date': '08.06.2022', 'value': 13},
 {'date': '09.06.2022', 'value': 9},
 {'date': '10.06.2022', 'value': 12},
 {'date': '11.06.2022', 'value': 16},
 {'date': '12.06.2022', 'value': 18},
 {'date': '13.06.2022', 'value': 8},
 {'date': '14.06.2022', 'value': 11},
 {'date': '15.06.2022', 'value': 25},
 {'date': '16.06.2022', 'value': 17},
 {'date': '17.06.2022', 'value': 18},
 {'date': '18.06.2022', 'value': 10},
 {'date': '19.06.2022', 'value': 4},
 {'date': '20.06.2022', 'value': 11},
 {'date': '21.06.2022', 'value': 18},
 {'date': '22.06.2022', 'value': 8},
 {'date': '23.06.2022', 'value': 18},
 {'date': '24.06.2022', 'value': 5},
 {'date': '25.06.2022', 'value': 8},
 {'date': '26.06.2022', 'value': 14},
 {'date': '27.06.2022', 'value': 28},
 {'date': '28.06.2022', 'value': 17},
 {'date': '29.06.2022', 'value': 16},
 {'date': '30.06.2022', 'value': 6},
 {'date': '01.07.2022', 'value': 10},
 {'date': '02.07.2022', 'value': 1},
 {'date': '03.07.2022', 'value': 7},
 {'date': '04.07.2022', 'value': 10},
 {'date': '05.07.2022', 'value': 18},
 {'date': '06.07.2022', 'value': 17},
 {'date': '07.07.2022', 'value': 8},
 {'date': '08.07.2022', 'value': 14},
 {'date': '09.07.2022', 'value': 4},
 {'date': '10.07.2022', 'value': 8},
 {'date': '11.07.2022', 'value': 5},
 {'date': '12.07.2022', 'value': 1},
 {'date': '13.07.2022', 'value': 3},
 {'date': '14.07.2022', 'value': 20},
 {'date': '15.07.2022', 'value': 14},
 {'date': '16.07.2022', 'value': 8},
 {'date': '17.07.2022', 'value': 5},
 {'date': '18.07.2022', 'value': 7},
 {'date': '19.07.2022', 'value': 6},
 {'date': '20.07.2022', 'value': 13},
 {'date': '21.07.2022', 'value': 7},
 {'date': '22.07.2022', 'value': 8},
 {'date': '23.07.2022', 'value': 9},
 {'date': '24.07.2022', 'value': 13},
 {'date': '25.07.2022', 'value': 8},
 {'date': '26.07.2022', 'value': 9},
 {'date': '27.07.2022', 'value': 12},
 {'date': '28.07.2022', 'value': 8},
 {'date': '29.07.2022', 'value': 8},
 {'date': '30.07.2022', 'value': 8},
 {'date': '31.07.2022', 'value': 9},
 {'date': '01.08.2022', 'value': 7},
 {'date': '02.08.2022', 'value': 3},
 {'date': '03.08.2022', 'value': 8},
 {'date': '04.08.2022', 'value': 4},
 {'date': '05.08.2022', 'value': 6},
 {'date': '06.08.2022', 'value': 19},
 {'date': '07.08.2022', 'value': 4},
 {'date': '08.08.2022', 'value': 15},
 {'date': '09.08.2022', 'value': 6},
 {'date': '10.08.2022', 'value': 10},
 {'date': '11.08.2022', 'value': 14},
 {'date': '12.08.2022', 'value': 8},
 {'date': '13.08.2022', 'value': 7},
 {'date': '14.08.2022', 'value': 11},
 {'date': '15.08.2022', 'value': 15},
 {'date': '16.08.2022', 'value': 11},
 {'date': '17.08.2022', 'value': 10},
 {'date': '18.08.2022', 'value': 17},
 {'date': '19.08.2022', 'value': 16},
 {'date': '20.08.2022', 'value': 17},
 {'date': '21.08.2022', 'value': 12},
 {'date': '22.08.2022', 'value': 6},
 {'date': '23.08.2022', 'value': 8},
 {'date': '24.08.2022', 'value': 5}]
        
        var jet = [{'date': '26.02.2022', 'value': 7},
 {'date': '27.02.2022', 'value': 13},
 {'date': '28.02.2022', 'value': 2},
 {'date': '02.03.2022', 'value': 1},
 {'date': '04.03.2022', 'value': 3},
 {'date': '05.03.2022', 'value': 6},
 {'date': '06.03.2022', 'value': 5},
 {'date': '07.03.2022', 'value': 2},
 {'date': '08.03.2022', 'value': 2},
 {'date': '09.03.2022', 'value': 1},
 {'date': '11.03.2022', 'value': 8},
 {'date': '12.03.2022', 'value': 1},
 {'date': '13.03.2022', 'value': 16},
 {'date': '14.03.2022', 'value': 3},
 {'date': '15.03.2022', 'value': 4},
 {'date': '16.03.2022', 'value': 3},
 {'date': '17.03.2022', 'value': 2},
 {'date': '18.03.2022', 'value': 7},
 {'date': '19.03.2022', 'value': 2},
 {'date': '20.03.2022', 'value': 1},
 {'date': '21.03.2022', 'value': 1},
 {'date': '22.03.2022', 'value': 2},
 {'date': '23.03.2022', 'value': 2},
 {'date': '24.03.2022', 'value': 7},
 {'date': '25.03.2022', 'value': 7},
 {'date': '26.03.2022', 'value': 2},
 {'date': '27.03.2022', 'value': 4},
 {'date': '28.03.2022', 'value': 2},
 {'date': '29.03.2022', 'value': 4},
 {'date': '30.03.2022', 'value': 4},
 {'date': '31.03.2022', 'value': 4},
 {'date': '01.04.2022', 'value': 8},
 {'date': '04.04.2022', 'value': 4},
 {'date': '05.04.2022', 'value': 3},
 {'date': '09.04.2022', 'value': 1},
 {'date': '10.04.2022', 'value': 1},
 {'date': '11.04.2022', 'value': 2},
 {'date': '12.04.2022', 'value': 3},
 {'date': '13.04.2022', 'value': 1},
 {'date': '14.04.2022', 'value': 2},
 {'date': '15.04.2022', 'value': 3},
 {'date': '17.04.2022', 'value': 2},
 {'date': '18.04.2022', 'value': 2},
 {'date': '19.04.2022', 'value': 2},
 {'date': '20.04.2022', 'value': 2},
 {'date': '21.04.2022', 'value': 1},
 {'date': '22.04.2022', 'value': 4},
 {'date': '23.04.2022', 'value': 1},
 {'date': '24.04.2022', 'value': 2},
 {'date': '25.04.2022', 'value': 2},
 {'date': '26.04.2022', 'value': 3},
 {'date': '27.04.2022', 'value': 1},
 {'date': '28.04.2022', 'value': 2},
 {'date': '29.04.2022', 'value': 2},
 {'date': '30.04.2022', 'value': 1},
 {'date': '01.05.2022', 'value': 2},
 {'date': '02.05.2022', 'value': 2},
 {'date': '05.05.2022', 'value': 2},
 {'date': '06.05.2022', 'value': 3},
 {'date': '13.05.2022', 'value': 1},
 {'date': '17.05.2022', 'value': 1},
 {'date': '18.05.2022', 'value': 1},
 {'date': '19.05.2022', 'value': 1},
 {'date': '20.05.2022', 'value': 1},
 {'date': '24.05.2022', 'value': 1},
 {'date': '25.05.2022', 'value': 1},
 {'date': '28.05.2022', 'value': 1},
 {'date': '31.05.2022', 'value': 1},
 {'date': '02.06.2022', 'value': 2},
 {'date': '06.06.2022', 'value': 1},
 {'date': '07.06.2022', 'value': 1},
 {'date': '13.06.2022', 'value': 1},
 {'date': '17.06.2022', 'value': 2},
 {'date': '18.06.2022', 'value': 1},
 {'date': '25.06.2022', 'value': 1},
 {'date': '14.07.2022', 'value': 2},
 {'date': '15.07.2022', 'value': 1},
 {'date': '20.07.2022', 'value': 1},
 {'date': '25.07.2022', 'value': 1},
 {'date': '31.07.2022', 'value': 1},
 {'date': '10.08.2022', 'value': 9},
 {'date': '12.08.2022', 'value': 1},
 {'date': '14.08.2022', 'value': 1}]
 

 var helicopter = [{'date': '26.02.2022', 'value': 2},
 {'date': '27.02.2022', 'value': 18},
 {'date': '28.02.2022', 'value': 3},
 {'date': '02.03.2022', 'value': 2},
 {'date': '04.03.2022', 'value': 6},
 {'date': '05.03.2022', 'value': 3},
 {'date': '06.03.2022', 'value': 8},
 {'date': '07.03.2022', 'value': 20},
 {'date': '08.03.2022', 'value': 12},
 {'date': '09.03.2022', 'value': 1},
 {'date': '11.03.2022', 'value': 2},
 {'date': '13.03.2022', 'value': 3},
 {'date': '14.03.2022', 'value': 4},
 {'date': '15.03.2022', 'value': 5},
 {'date': '16.03.2022', 'value': 13},
 {'date': '18.03.2022', 'value': 4},
 {'date': '19.03.2022', 'value': 3},
 {'date': '20.03.2022', 'value': 3},
 {'date': '21.03.2022', 'value': 3},
 {'date': '22.03.2022', 'value': 2},
 {'date': '23.03.2022', 'value': 1},
 {'date': '25.03.2022', 'value': 1},
 {'date': '26.03.2022', 'value': 2},
 {'date': '29.03.2022', 'value': 2},
 {'date': '30.03.2022', 'value': 2},
 {'date': '02.04.2022', 'value': 3},
 {'date': '06.04.2022', 'value': 1},
 {'date': '09.04.2022', 'value': 1},
 {'date': '10.04.2022', 'value': 1},
 {'date': '12.04.2022', 'value': 3},
 {'date': '13.04.2022', 'value': 3},
 {'date': '14.04.2022', 'value': 1},
 {'date': '16.04.2022', 'value': 1},
 {'date': '17.04.2022', 'value': 1},
 {'date': '18.04.2022', 'value': 1},
 {'date': '19.04.2022', 'value': 3},
 {'date': '21.04.2022', 'value': 1},
 {'date': '22.04.2022', 'value': 2},
 {'date': '23.04.2022', 'value': 1},
 {'date': '27.04.2022', 'value': 1},
 {'date': '08.05.2022', 'value': 1},
 {'date': '09.05.2022', 'value': 2},
 {'date': '11.05.2022', 'value': 2},
 {'date': '12.05.2022', 'value': 1},
 {'date': '13.05.2022', 'value': 1},
 {'date': '14.05.2022', 'value': 1},
 {'date': '15.05.2022', 'value': 1},
 {'date': '16.05.2022', 'value': 1},
 {'date': '17.05.2022', 'value': 2},
 {'date': '20.05.2022', 'value': 1},
 {'date': '21.05.2022', 'value': 1},
 {'date': '22.05.2022', 'value': 1},
 {'date': '28.05.2022', 'value': 4},
 {'date': '01.06.2022', 'value': 1},
 {'date': '06.06.2022', 'value': 1},
 {'date': '07.06.2022', 'value': 1},
 {'date': '08.06.2022', 'value': 1},
 {'date': '14.06.2022', 'value': 1},
 {'date': '17.06.2022', 'value': 1},
 {'date': '19.06.2022', 'value': 1},
 {'date': '22.06.2022', 'value': 1},
 {'date': '23.06.2022', 'value': 1},
 {'date': '25.06.2022', 'value': 1},
 {'date': '28.06.2022', 'value': 1},
 {'date': '01.07.2022', 'value': 1},
 {'date': '02.07.2022', 'value': 1},
 {'date': '10.07.2022', 'value': 1},
 {'date': '26.07.2022', 'value': 1},
 {'date': '27.07.2022', 'value': 1},
 {'date': '02.08.2022', 'value': 1},
 {'date': '08.08.2022', 'value': 1},
 {'date': '09.08.2022', 'value': 1},
 {'date': '14.08.2022', 'value': 1},
 {'date': '15.08.2022', 'value': 1},
 {'date': '16.08.2022', 'value': 1},
 {'date': '18.08.2022', 'value': 1},
 {'date': '22.08.2022', 'value': 1},
 {'date': '24.08.2022', 'value': 1}]

 var tanks = [{'date': '26.02.2022', 'value': 72},
 {'date': '27.02.2022', 'value': 48},
 {'date': '28.02.2022', 'value': 41},
 {'date': '01.03.2022', 'value': 7},
 {'date': '02.03.2022', 'value': 13},
 {'date': '03.03.2022', 'value': 6},
 {'date': '04.03.2022', 'value': 34},
 {'date': '05.03.2022', 'value': 18},
 {'date': '06.03.2022', 'value': 16},
 {'date': '07.03.2022', 'value': 5},
 {'date': '08.03.2022', 'value': 13},
 {'date': '09.03.2022', 'value': 14},
 {'date': '10.03.2022', 'value': 18},
 {'date': '11.03.2022', 'value': 18},
 {'date': '12.03.2022', 'value': 9},
 {'date': '13.03.2022', 'value': 12},
 {'date': '14.03.2022', 'value': 15},
 {'date': '15.03.2022', 'value': 15},
 {'date': '16.03.2022', 'value': 26},
 {'date': '17.03.2022', 'value': 14},
 {'date': '18.03.2022', 'value': 6},
 {'date': '19.03.2022', 'value': 16},
 {'date': '20.03.2022', 'value': 10},
 {'date': '21.03.2022', 'value': 22},
 {'date': '22.03.2022', 'value': 11},
 {'date': '23.03.2022', 'value': 8},
 {'date': '24.03.2022', 'value': 13},
 {'date': '25.03.2022', 'value': 31},
 {'date': '26.03.2022', 'value': 14},
 {'date': '27.03.2022', 'value': 7},
 {'date': '28.03.2022', 'value': 4},
 {'date': '29.03.2022', 'value': 11},
 {'date': '30.03.2022', 'value': 8},
 {'date': '31.03.2022', 'value': 9},
 {'date': '01.04.2022', 'value': 11},
 {'date': '02.04.2022', 'value': 6},
 {'date': '03.04.2022', 'value': 13},
 {'date': '04.04.2022', 'value': 3},
 {'date': '05.04.2022', 'value': 29},
 {'date': '06.04.2022', 'value': 8},
 {'date': '07.04.2022', 'value': 14},
 {'date': '08.04.2022', 'value': 2},
 {'date': '09.04.2022', 'value': 5},
 {'date': '10.04.2022', 'value': 17},
 {'date': '11.04.2022', 'value': 3},
 {'date': '12.04.2022', 'value': 7},
 {'date': '13.04.2022', 'value': 7},
 {'date': '14.04.2022', 'value': 14},
 {'date': '15.04.2022', 'value': 3},
 {'date': '16.04.2022', 'value': 6},
 {'date': '17.04.2022', 'value': 11},
 {'date': '18.04.2022', 'value': 17},
 {'date': '19.04.2022', 'value': 12},
 {'date': '20.04.2022', 'value': 13},
 {'date': '21.04.2022', 'value': 14},
 {'date': '22.04.2022', 'value': 9},
 {'date': '23.04.2022', 'value': 16},
 {'date': '24.04.2022', 'value': 19},
 {'date': '25.04.2022', 'value': 11},
 {'date': '26.04.2022', 'value': 34},
 {'date': '27.04.2022', 'value': 21},
 {'date': '28.04.2022', 'value': 31},
 {'date': '29.04.2022', 'value': 16},
 {'date': '30.04.2022', 'value': 22},
 {'date': '01.05.2022', 'value': 18},
 {'date': '02.05.2022', 'value': 22},
 {'date': '03.05.2022', 'value': 14},
 {'date': '04.05.2022', 'value': 15},
 {'date': '05.05.2022', 'value': 15},
 {'date': '06.05.2022', 'value': 18},
 {'date': '07.05.2022', 'value': 12},
 {'date': '08.05.2022', 'value': 8},
 {'date': '09.05.2022', 'value': 15},
 {'date': '10.05.2022', 'value': 25},
 {'date': '11.05.2022', 'value': 17},
 {'date': '12.05.2022', 'value': 8},
 {'date': '13.05.2022', 'value': 10},
 {'date': '14.05.2022', 'value': 13},
 {'date': '15.05.2022', 'value': 2},
 {'date': '16.05.2022', 'value': 8},
 {'date': '17.05.2022', 'value': 7},
 {'date': '18.05.2022', 'value': 16},
 {'date': '19.05.2022', 'value': 3},
 {'date': '20.05.2022', 'value': 9},
 {'date': '21.05.2022', 'value': 15},
 {'date': '22.05.2022', 'value': 7},
 {'date': '23.05.2022', 'value': 8},
 {'date': '24.05.2022', 'value': 9},
 {'date': '25.05.2022', 'value': 3},
 {'date': '26.05.2022', 'value': 10},
 {'date': '27.05.2022', 'value': 7},
 {'date': '28.05.2022', 'value': 8},
 {'date': '29.05.2022', 'value': 8},
 {'date': '30.05.2022', 'value': 11},
 {'date': '31.05.2022', 'value': 9},
 {'date': '01.06.2022', 'value': 3},
 {'date': '02.06.2022', 'value': 2},
 {'date': '03.06.2022', 'value': 4},
 {'date': '04.06.2022', 'value': 9},
 {'date': '05.06.2022', 'value': 5},
 {'date': '06.06.2022', 'value': 5},
 {'date': '07.06.2022', 'value': 4},
 {'date': '08.06.2022', 'value': 3},
 {'date': '09.06.2022', 'value': 5},
 {'date': '10.06.2022', 'value': 11},
 {'date': '11.06.2022', 'value': 10},
 {'date': '12.06.2022', 'value': 11},
 {'date': '13.06.2022', 'value': 2},
 {'date': '14.06.2022', 'value': 2},
 {'date': '15.06.2022', 'value': 6},
 {'date': '16.06.2022', 'value': 9},
 {'date': '17.06.2022', 'value': 7},
 {'date': '18.06.2022', 'value': 9},
 {'date': '19.06.2022', 'value': 3},
 {'date': '20.06.2022', 'value': 9},
 {'date': '21.06.2022', 'value': 19},
 {'date': '23.06.2022', 'value': 8},
 {'date': '24.06.2022', 'value': 3},
 {'date': '25.06.2022', 'value': 4},
 {'date': '26.06.2022', 'value': 21},
 {'date': '27.06.2022', 'value': 20},
 {'date': '28.06.2022', 'value': 15},
 {'date': '29.06.2022', 'value': 5},
 {'date': '30.06.2022', 'value': 1},
 {'date': '01.07.2022', 'value': 4},
 {'date': '02.07.2022', 'value': 5},
 {'date': '03.07.2022', 'value': 2},
 {'date': '04.07.2022', 'value': 5},
 {'date': '05.07.2022', 'value': 5},
 {'date': '06.07.2022', 'value': 6},
 {'date': '07.07.2022', 'value': 2},
 {'date': '08.07.2022', 'value': 35},
 {'date': '09.07.2022', 'value': 1},
 {'date': '10.07.2022', 'value': 3},
 {'date': '11.07.2022', 'value': 4},
 {'date': '12.07.2022', 'value': 4},
 {'date': '14.07.2022', 'value': 18},
 {'date': '15.07.2022', 'value': 5},
 {'date': '16.07.2022', 'value': 5},
 {'date': '17.07.2022', 'value': 7},
 {'date': '18.07.2022', 'value': 3},
 {'date': '19.07.2022', 'value': 4},
 {'date': '20.07.2022', 'value': 9},
 {'date': '21.07.2022', 'value': 4},
 {'date': '23.07.2022', 'value': 4},
 {'date': '24.07.2022', 'value': 14},
 {'date': '25.07.2022', 'value': 8},
 {'date': '26.07.2022', 'value': 7},
 {'date': '27.07.2022', 'value': 1},
 {'date': '28.07.2022', 'value': 4},
 {'date': '29.07.2022', 'value': 7},
 {'date': '30.07.2022', 'value': 10},
 {'date': '31.07.2022', 'value': 4},
 {'date': '01.08.2022', 'value': 5},
 {'date': '03.08.2022', 'value': 6},
 {'date': '04.08.2022', 'value': 15},
 {'date': '05.08.2022', 'value': 3},
 {'date': '06.08.2022', 'value': 10},
 {'date': '07.08.2022', 'value': 3},
 {'date': '08.08.2022', 'value': 6},
 {'date': '09.08.2022', 'value': 6},
 {'date': '10.08.2022', 'value': 15},
 {'date': '11.08.2022', 'value': 14},
 {'date': '12.08.2022', 'value': 3},
 {'date': '13.08.2022', 'value': 7},
 {'date': '14.08.2022', 'value': 8},
 {'date': '15.08.2022', 'value': 12},
 {'date': '16.08.2022', 'value': 4},
 {'date': '17.08.2022', 'value': 6},
 {'date': '18.08.2022', 'value': 3},
 {'date': '19.08.2022', 'value': 10},
 {'date': '20.08.2022', 'value': 8},
 {'date': '21.08.2022', 'value': 5},
 {'date': '22.08.2022', 'value': 7},
 {'date': '23.08.2022', 'value': 2},
 {'date': '24.08.2022', 'value': 3}]

 var artillery = [{'date': '26.02.2022', 'value': 8},
 {'date': '27.02.2022', 'value': 35},
 {'date': '28.02.2022', 'value': 24},
 {'date': '01.03.2022', 'value': 3},
 {'date': '02.03.2022', 'value': 8},
 {'date': '03.03.2022', 'value': 5},
 {'date': '04.03.2022', 'value': 15},
 {'date': '06.03.2022', 'value': 4},
 {'date': '07.03.2022', 'value': 8},
 {'date': '08.03.2022', 'value': 3},
 {'date': '10.03.2022', 'value': 3},
 {'date': '11.03.2022', 'value': 2},
 {'date': '12.03.2022', 'value': 10},
 {'date': '13.03.2022', 'value': 5},
 {'date': '14.03.2022', 'value': 10},
 {'date': '16.03.2022', 'value': 40},
 {'date': '17.03.2022', 'value': 11},
 {'date': '18.03.2022', 'value': 4},
 {'date': '19.03.2022', 'value': 8},
 {'date': '20.03.2022', 'value': 17},
 {'date': '21.03.2022', 'value': 10},
 {'date': '22.03.2022', 'value': 12},
 {'date': '23.03.2022', 'value': 15},
 {'date': '24.03.2022', 'value': 13},
 {'date': '25.03.2022', 'value': 11},
 {'date': '26.03.2022', 'value': 2},
 {'date': '27.03.2022', 'value': 1},
 {'date': '28.03.2022', 'value': 8},
 {'date': '29.03.2022', 'value': 1},
 {'date': '30.03.2022', 'value': 2},
 {'date': '31.03.2022', 'value': 6},
 {'date': '01.04.2022', 'value': 5},
 {'date': '02.04.2022', 'value': 1},
 {'date': '03.04.2022', 'value': 8},
 {'date': '04.04.2022', 'value': 5},
 {'date': '05.04.2022', 'value': 2},
 {'date': '08.04.2022', 'value': 1},
 {'date': '09.04.2022', 'value': 2},
 {'date': '10.04.2022', 'value': 7},
 {'date': '11.04.2022', 'value': 5},
 {'date': '12.04.2022', 'value': 2},
 {'date': '13.04.2022', 'value': 9},
 {'date': '14.04.2022', 'value': 8},
 {'date': '16.04.2022', 'value': 5},
 {'date': '17.04.2022', 'value': 5},
 {'date': '18.04.2022', 'value': 5},
 {'date': '19.04.2022', 'value': 5},
 {'date': '20.04.2022', 'value': 5},
 {'date': '21.04.2022', 'value': 2},
 {'date': '22.04.2022', 'value': 4},
 {'date': '23.04.2022', 'value': 6},
 {'date': '24.04.2022', 'value': 5},
 {'date': '25.04.2022', 'value': 3},
 {'date': '26.04.2022', 'value': 5},
 {'date': '27.04.2022', 'value': 5},
 {'date': '28.04.2022', 'value': 10},
 {'date': '29.04.2022', 'value': 4},
 {'date': '30.04.2022', 'value': 1},
 {'date': '01.05.2022', 'value': 15},
 {'date': '02.05.2022', 'value': 8},
 {'date': '03.05.2022', 'value': 16},
 {'date': '04.05.2022', 'value': 16},
 {'date': '05.05.2022', 'value': 8},
 {'date': '06.05.2022', 'value': 3},
 {'date': '07.05.2022', 'value': 7},
 {'date': '09.05.2022', 'value': 4},
 {'date': '10.05.2022', 'value': 6},
 {'date': '11.05.2022', 'value': 9},
 {'date': '12.05.2022', 'value': 6},
 {'date': '13.05.2022', 'value': 8},
 {'date': '14.05.2022', 'value': 9},
 {'date': '15.05.2022', 'value': 4},
 {'date': '16.05.2022', 'value': 22},
 {'date': '17.05.2022', 'value': 1},
 {'date': '18.05.2022', 'value': 8},
 {'date': '19.05.2022', 'value': 9},
 {'date': '20.05.2022', 'value': 1},
 {'date': '22.05.2022', 'value': 3},
 {'date': '23.05.2022', 'value': 5},
 {'date': '24.05.2022', 'value': 2},
 {'date': '26.05.2022', 'value': 11},
 {'date': '27.05.2022', 'value': 6},
 {'date': '28.05.2022', 'value': 5},
 {'date': '29.05.2022', 'value': 3},
 {'date': '30.05.2022', 'value': 12},
 {'date': '31.05.2022', 'value': 6},
 {'date': '01.06.2022', 'value': 10},
 {'date': '02.06.2022', 'value': 2},
 {'date': '03.06.2022', 'value': 14},
 {'date': '04.06.2022', 'value': 5},
 {'date': '05.06.2022', 'value': 6},
 {'date': '06.06.2022', 'value': 4},
 {'date': '07.06.2022', 'value': 4},
 {'date': '08.06.2022', 'value': 9},
 {'date': '09.06.2022', 'value': 8},
 {'date': '10.06.2022', 'value': 1},
 {'date': '12.06.2022', 'value': 3},
 {'date': '13.06.2022', 'value': 3},
 {'date': '14.06.2022', 'value': 3},
 {'date': '15.06.2022', 'value': 1},
 {'date': '16.06.2022', 'value': 7},
 {'date': '17.06.2022', 'value': 5},
 {'date': '18.06.2022', 'value': 5},
 {'date': '19.06.2022', 'value': 6},
 {'date': '20.06.2022', 'value': 4},
 {'date': '21.06.2022', 'value': 3},
 {'date': '23.06.2022', 'value': 4},
 {'date': '24.06.2022', 'value': 3},
 {'date': '25.06.2022', 'value': 5},
 {'date': '27.06.2022', 'value': 7},
 {'date': '28.06.2022', 'value': 7},
 {'date': '29.06.2022', 'value': 3},
 {'date': '30.06.2022', 'value': 9},
 {'date': '01.07.2022', 'value': 6},
 {'date': '02.07.2022', 'value': 4},
 {'date': '03.07.2022', 'value': 1},
 {'date': '04.07.2022', 'value': 3},
 {'date': '05.07.2022', 'value': 2},
 {'date': '06.07.2022', 'value': 6},
 {'date': '07.07.2022', 'value': 3},
 {'date': '08.07.2022', 'value': 13},
 {'date': '09.07.2022', 'value': 4},
 {'date': '10.07.2022', 'value': 2},
 {'date': '11.07.2022', 'value': 4},
 {'date': '13.07.2022', 'value': 1},
 {'date': '14.07.2022', 'value': 1},
 {'date': '15.07.2022', 'value': 2},
 {'date': '16.07.2022', 'value': 4},
 {'date': '18.07.2022', 'value': 3},
 {'date': '19.07.2022', 'value': 2},
 {'date': '20.07.2022', 'value': 5},
 {'date': '21.07.2022', 'value': 3},
 {'date': '22.07.2022', 'value': 4},
 {'date': '23.07.2022', 'value': 1},
 {'date': '24.07.2022', 'value': 5},
 {'date': '25.07.2022', 'value': 7},
 {'date': '26.07.2022', 'value': 4},
 {'date': '27.07.2022', 'value': 3},
 {'date': '28.07.2022', 'value': 11},
 {'date': '29.07.2022', 'value': 6},
 {'date': '30.07.2022', 'value': 6},
 {'date': '31.07.2022', 'value': 10},
 {'date': '01.08.2022', 'value': 16},
 {'date': '02.08.2022', 'value': 4},
 {'date': '03.08.2022', 'value': 3},
 {'date': '04.08.2022', 'value': 7},
 {'date': '05.08.2022', 'value': 4},
 {'date': '06.08.2022', 'value': 5},
 {'date': '07.08.2022', 'value': 3},
 {'date': '08.08.2022', 'value': 2},
 {'date': '09.08.2022', 'value': 4},
 {'date': '10.08.2022', 'value': 7},
 {'date': '11.08.2022', 'value': 3},
 {'date': '12.08.2022', 'value': 1},
 {'date': '13.08.2022', 'value': 3},
 {'date': '14.08.2022', 'value': 2},
 {'date': '15.08.2022', 'value': 5},
 {'date': '16.08.2022', 'value': 4},
 {'date': '17.08.2022', 'value': 4},
 {'date': '18.08.2022', 'value': 17},
 {'date': '19.08.2022', 'value': 6},
 {'date': '20.08.2022', 'value': 2},
 {'date': '21.08.2022', 'value': 10},
 {'date': '22.08.2022', 'value': 4},
 {'date': '23.08.2022', 'value': 1},
 {'date': '24.08.2022', 'value': 3}]

    function makeAreaChart(id,data,w) {
        if (id == 'dead_russians') {
            var title = 'Вбиті російські військові'
            var subtitle = ""
            var tooltip = ' вбитих'
        } else if (id == 'bbm') {
            var title = 'Знищені ББМ'
            var subtitle = ""
            var tooltip = ' знищених ББМ'
        }else if (id == 'tanks') {
            var title = 'Знищені танки'
            var subtitle = ""
            var tooltip = ' знищених танків'
        }else if (id == 'artillery') {
            var title = 'Знищена артилерія'
            var subtitle = ""
            var tooltip = ' знищеної артилерії'
        }else if (id == 'jet') {
            var title = 'Знищені літаки'
            var subtitle = "Дані: Генштаб ЗСУ"
            var tooltip = ' знищених літаків'
        }else if (id == 'helicopter') {
            var title = 'Знищені гелікоптери'
            var subtitle = ""
            var tooltip = ' знищених гелікоптерів'
        }
        if (w < 600) {
            var widthW = w
        } else {
            var widthW = 290
        }
        var margin = {top: 60, right:25, bottom: 50, left: 45},
            width = widthW - margin.left - margin.right,
            height = 250 - margin.top - margin.bottom;
        
        d3.select("#"+id).html('')
        var svg = d3.select("#"+id)
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var locale = d3.timeFormatLocale({
            "dateTime": "%A, %e %B %Y г. %X",
            "date": "%d.%m.%Y",
            "time": "%H:%M:%S",
            "periods": ["AM", "PM"],
            "days": ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
            "shortDays": ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
            "months": ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
            "shortMonths": ["січ", "лют", "бер", "квіт", "трав", "черв", "лип", "серп", "сен", "окт", "ноя", "дек"]
        });
        function multiFormat(date) {
            return (d3.timeSecond(date) < date ? formatMillisecond
                : d3.timeMinute(date) < date ? formatSecond
                : d3.timeHour(date) < date ? formatMinute
                : d3.timeDay(date) < date ? formatHour
                : d3.timeMonth(date) < date ? (d3.timeWeek(date) < date ? formatDay : formatWeek)
                : d3.timeYear(date) < date ? formatMonth
                : formatYear)(date);
        }
        var formatMillisecond = locale.format(".%L"),
            formatSecond = locale.format(":%S"),
            formatMinute = locale.format("%I:%M"),
            formatHour = locale.format("%I %p"),
            formatDay = locale.format("%a %d"),
            formatWeek = locale.format("%d %b"),
            formatMonth = locale.format("%b"),
            formatYear = locale.format("%Y");
        if (width > 500) {
            var fontSize = '18px'
            var textSize = '12px'
            var xBand = 22
        } else {
            var fontSize = '12px'
            var textSize = '10px'
            var xBand = 12
        }
        svg.append("text")
            .attr("x", (width / 2) - 10) 
            .attr("y", -5 - (margin.top / 2))
            .attr("text-anchor", "middle")  
            .style("font-size", fontSize)
            .style("font-family", "Georgia")
            .text(title);
            svg.append("text")
                .attr("x", 0) 
                .attr("y", height + margin.bottom-10)
                .attr("text-anchor", "left")  
                .style("font-size", "12px")
                .style("font-family", "sans-serif")
                .attr("fill", "#9e9e9e")
                .text(subtitle)
        var parseDate = d3.timeParse("%d.%m.%Y")
    
        var data = data.map(function(d) {
            return {date: parseDate(d.date), value: parseFloat(d.value)};
        });
            // Add X axis --> it is a date format
        var x = d3.scaleTime()
          .domain(d3.extent(data, function(d) { return d.date; }))
          .range([ 0, width ]);

        svg.append("g")
          .attr("transform", "translate(0," + (height+5) + ")")
          .call(d3.axisBottom(x).ticks(5).tickFormat(multiFormat).tickSizeOuter(0));
    
        // Add Y axis
        var y = d3.scaleLinear()
          .domain( d3.extent(data, function(d) { return d.value; }) )
          .range([ height, 0 ]);
        svg.append("g")
          .attr("transform", "translate(-5,0)")
          .call(d3.axisLeft(y).ticks(5).tickSizeOuter(0));
        
        // Add the area
        svg.append("path")
          .datum(data)
          .attr("fill", "#B07AA1")
          .attr("fill-opacity", .3)
          .attr("stroke", "none")
          .attr("d", d3.area()
            .x(function(d) { return x(d.date) })
            .y0( height )
            .y1(function(d) { return y(d.value) })
            )
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
        // Add the line
        svg.append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", "#c62828")
          .attr("stroke-width", 3)
          .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return y(d.value) })
            )
        
        var parseDM = d3.timeFormat("%d.%m")
        svg.selectAll("myCircles")
          .data(data)
          .enter()
          .append("circle")
            .attr("fill", "#b71c1c")
            .attr("stroke", "none")
            .attr("cx", function(d) { return x(d.date) })
            .attr("cy", function(d) { return y(d.value) })
            .attr("r", 0.1)
            .on("mouseover", function(d) {
                tooltipBee.html('<p><b>'+parseDM(d['date'])+': </b>'+d.value+tooltip+'</p>')
                tooltipBee.style("visibility", "visible")
                })
            .on("mousemove", function() {
                return tooltipBee.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
            })
            .on("mouseout", function(d){
                return tooltipBee.style("visibility", "hidden");
            });
        
        svg.selectAll("myCircles")
            .data(data)
            .enter()
            .append("text")
            .text(function(d,i){
                if (i > 0 && (d.value - data[i-1].value) > 600 ) {
                    return d.value
                }
            })
            .attr("y", function(d,i) { 
                if (i > 0 && (d.value - data[i-1].value) > 600) {
                    return y(d.value)-10
                } 
            })
            .attr("x", function(d,i) {
                if (i > 0 && (d.value - data[i-1].value) > 600) {
                     return x(d.date); 
                }
            })
            .attr("text-anchor","middle")
            .attr('font-family','Circe')
            .attr('fill','black')
            .attr('font-size',textSize)
    
    
    } 
    function heatmap(w) {
  if (w < 600) {
    var widthW = w
    var heightH = 600
    var fontSize = '16px'
    var subtitleFontSize = "11px"
    var textLeft = -70
  } else {
    var widthW = 600
    var heightH = 600
    var fontSize = '22px'
    var subtitleFontSize = "14px"
    var textLeft = 0
  }   
    // set the dimensions and margins of the graph
    var margin = {top: 80, right: 25, bottom: 30, left: 135},
      width = widthW - margin.left - margin.right,
      height = heightH - margin.top - margin.bottom;
    
    d3.select("#my_dataviz").html('')
    var svg = d3.select("#my_dataviz")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
    
    //Read the data
    d3.csv("https://cdn.jsdelivr.net/gh/liga-net/few-projects/dangerous_time.csv", function(data) {
    
      // Labels of row and columns -> unique identifier of the column called 'group' and 'variable'
      var myGroups = d3.map(data, function(d){return d.group;}).keys()
      var myVars = d3.map(data, function(d){return d.variable.replace(' область','').replace('Місто ','');}).keys()
    var tickGroup = myGroups.filter(function(d,i) { if (i % 240 == 0) {return d}})
    
      // Build X scales and axis:
      var x = d3.scaleBand()
        .range([ 0, width ])
        .domain(myGroups)
        .padding(0.05);
      svg.append("g")
        .style("font-size", 15)
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickValues(tickGroup))
        .select(".domain").remove()
    
      // Build Y scales and axis:
      var y = d3.scaleBand()
        .range([ height, 0 ])
        .domain(myVars)
        .padding(0.05);
      svg.append("g")
        .style("font-size", 15)
        .call(d3.axisLeft(y).tickSize(0))
        .select(".domain").remove()
    
      // Build color scale
      var myColor = d3.scaleSequential()
        .interpolator(d3.interpolateInferno)
        .domain([1,61])
    
      // create a tooltip
      var tooltip = d3.select("#my_dataviz")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "5px")
    
      // Three function that change the tooltip when user hover / move / leave a cell
      var mouseover = function(d) {
        tooltip
          .style("opacity", 1)
        d3.select(this)
          .style("stroke", "black")
          .style("opacity", 1)
      }
      var mousemove = function(d) {
        tooltip
          .html("<h3>"+d.group+"</h3><p>" + d.value+' тривог</p>')
          .style("left", (d3.event.pageX+10) + "px")
          .style("top", (d3.event.pageY-10) + "px")
      }
      var mouseleave = function(d) {
        tooltip
          .style("opacity", 0)
        d3.select(this)
          .style("stroke", "none")
          .style("opacity", 0.8)
      }
    
      // add the squares
      svg.selectAll()
        .data(data, function(d) {return d.group+':'+d.variable.replace(' область','').replace('Місто ','');})
        .enter()
        .append("rect")
          .attr("x", function(d) { return x(d.group) })
          .attr("y", function(d) { return y(d.variable.replace(' область','').replace('Місто ','')) })
          .attr("rx", 4)
          .attr("ry", 4)
          .attr("width", x.bandwidth() )
          .attr("height", y.bandwidth() )
          .style("fill", function(d) { return myColor(d.value)} )
          .style("stroke-width", 4)
          .style("stroke", "none")
          .style("opacity", 0.8)
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave)


        const range = (start, stop, step = 1) =>
          Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)
        function makeDomain(min, max, step) {
            return range(min, max, step)
        }
      var array = makeDomain(1,62)
      var data = []
      for (var d in array) {
        data.push( {'color':myColor(d), 'value': parseInt(d)})
      }
      var extent = d3.extent(data, d => d.value);
      
      var padding = 9;
      var widthLegend = 300;
      var innerWidth = widthLegend - (padding * 2);
      var barHeight = 8;
      var heightLegend = 28;

      var xScale = d3.scaleLinear()
          .range([0, innerWidth])
          .domain(extent);

      var xTicks = data.filter(f => f.value % 10 === 0).map(d => d.value);

      var xAxis = d3.axisBottom(xScale)
          .tickSize(barHeight * 2)
          .tickValues(xTicks);

      var svgLegend = d3.select('#dataviz_legend').append("svg").attr("width", widthLegend).attr("height", heightLegend);
      var gLegend = svgLegend.append("g").attr("transform", "translate(" + padding + ", 0)");

      var defs = svgLegend.append("defs");
      var linearGradient = defs.append("linearGradient").attr("id", "myGradient");
      linearGradient.selectAll("stop")
          .data(data)
        .enter().append("stop")
          .attr("offset", d => ((d.value - extent[0]) / (extent[1] - extent[0]) * 100) + "%")
          .attr("stop-color", d => d.color);

        gLegend.append("rect")
          .attr("width", innerWidth)
          .attr("height", barHeight)
          .style("fill", "url(#myGradient)");

        gLegend.append("g")
          .call(xAxis)
        .select(".domain").remove();

    })
    
    // Add title to graph
    svg.append("text")
            .attr("x", textLeft)
            .attr("y", -50)
            .attr("text-anchor", "left")
            .style("font-size", fontSize)
            .text("Найбільш небезпечний час");
    
    // Add subtitle to graph
    svg.append("text")
            .attr("x", textLeft)
            .attr("y", -20)
            .attr("text-anchor", "left")
            .style("font-size", subtitleFontSize)
            .style("fill", "grey")
            .style("max-width", 400)
            .text("Коли найчастіше звучать сирени, по областях");
    
      
          }
          

    makeAreaChart('dead_russians',dead_russians,window.innerWidth)
    makeAreaChart('bbm',bbm,window.innerWidth)
    makeAreaChart('tanks',tanks,window.innerWidth)
    makeAreaChart('artillery',artillery,window.innerWidth)
    makeAreaChart('jet',jet,window.innerWidth)
    makeAreaChart('helicopter',helicopter,window.innerWidth)
    heatmap(window.innerWidth)
    window.onresize = function(event) {
        makeAreaChart('dead_russians',dead_russians,window.innerWidth)
        makeAreaChart('bbm',bbm,window.innerWidth)
        makeAreaChart('tanks',tanks,window.innerWidth)
        makeAreaChart('artillery',artillery,window.innerWidth)
        makeAreaChart('jet',jet,window.innerWidth)
        makeAreaChart('helicopter',helicopter,window.innerWidth)
        heatmap(window.innerWidth)
    }