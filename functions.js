const jsonOutput = './json/output.json';
const jsonfile = require('jsonfile');

function createListObj(arrayMettings){
    listObjMeetings = []
    arrayMettings.forEach(element => {
        listMeetingsTime = [];
        element.meetings_hour.forEach(timeElement => {
            listMeetingsTime.push(timeElement);
        });
        listObjMeetings.push({name: element.name, listMeetings: listMeetingsTime})
    });
    return listObjMeetings;
}

function generateListTime(timeStrt, timeEnd, startLunch, endLunch){ 
    let listTime = [];
    let timeStart = timeStrt;
    let lunchTime = startLunch;
    while(timeStart.hour < timeEnd.hour){ 
        while(timeStart.hour < lunchTime.hour){ 
            listTime.push({time: timeStart.toString(), persons: [], count: 0});
            timeStart.addTime();
        }
        timeStart = endLunch;
        lunchTime = timeEnd;
    }
    return listTime;
}

function getAvailableTimeList(listObjMeetings, listTime) {
    for(let i = 0; i < listTime.length; i++){
        listObjMeetings.forEach(element => {
            if(!element.listMeetings.includes(listTime[i].time)){
                listTime[i].persons.push(element.name);
                listTime[i].count++;
            }
        });
    }
    return listTime;
}

function generateJsonList(listTime){
    listTime.forEach(element => {
        if(element.count >= 3){
            jsonfile.writeFile(jsonOutput, element, {flag: 'a'}, function(err){});
        }
    });
}

exports.createListObj = createListObj;
exports.generateListTime = generateListTime;
exports.getAvailableTimeList = getAvailableTimeList;
exports.generateJsonList = generateJsonList;
 


