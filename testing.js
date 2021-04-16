var rnboLinks = {
    'timelineVax':'https://health-security.rnbo.gov.ua/api/vaccination/process/chart?vaccines=&dose=1&distributionBy=vaccine&regionId=',
    'regions_vax':'https://health-security.rnbo.gov.ua/api/vaccination/process/map?distributionBy=vaccine&vaccines=&dose=1&date=',
    'covid_timeline':"https://api-covid19.rnbo.gov.ua/charts/main-data?mode=ukraine",
    'hosp_timeline':'https://health-security.rnbo.gov.ua/api/beds/hospitalization/chart?bedType=hospitalized&regionId=&hospitalType=',
    'vax_age':'https://health-security.rnbo.gov.ua/api/vaccination/process/chart?vaccines=&dose=1&distributionBy=age&regionId=',
    'vax_group':'https://health-security.rnbo.gov.ua/api/vaccination/process/chart?vaccines=&dose=1&distributionBy=target&regionId=',
    'timeline':'https://spreadsheets.google.com/feeds/list/1QW29NJur6VARvcDsEH7W7LOoO_gpAQ49s0fT-RW2d14/2/public/values?alt=json',
    'reserves':'https://health-security.rnbo.gov.ua/api/vaccination/distribution//ranking?aggregateBy=regions&indicator=balance&warehouseLevel=regional&vaccine=total&regionId=&communityId=&date='
}
function getData(id){
    var today = new Date()
    if (today.getHours() >= 0 && today.getHours() < 9 && id.includes('date')) {
        var yesterday = addDays(today, - 1);
        var value = $.ajax({ 
            url: id+todayDateFormat(yesterday), 
            async: false
        }).responseJSON;
        return value;
    } else if (id.includes('date') && today.getHours() >= 9){
        var value = $.ajax({ 
            url: id+todayDateFormat(today), 
            async: false
        }).responseJSON;
        return value;
    } else {
        var value = $.ajax({ 
            url: id, 
            async: false
        }).responseJSON;
        return value;
    }   
}
var hosp_timeline= getData(rnboLinks.hosp_timeline);
var covid_timeline= getData(rnboLinks.covid_timeline);
var timelineVaxData = getData(rnboLinks.timelineVax);
var vax_age = getData(rnboLinks.vax_age);
var vax_group = getData(rnboLinks.vax_group);
var regionsVaxData = getData(rnboLinks.regions_vax);
var reserves = getData(rnboLinks.reserves);
console.log(hosp_timeline)
console.log(covid_timeline)
console.log(timelineVaxData)
console.log(vax_age)
console.log(regionsVaxData)
console.log(reserves)