const classT = require('./time.js');
const jsonListMeetings = require("./json/input.json");
const funcion = require('./functions.js');
const startTime = new classT.Time("8:00 AM");
const endTime = new classT.Time("5:00 PM");
const startLunch = new classT.Time("12:00 PM");
const endLunch = new classT.Time("1:00 PM");

const main = () => {
    let listObjMeetings = funcion.createListObj(jsonListMeetings.list);
    let listTime = funcion.generateListTime(startTime, endTime, startLunch, endLunch);
    listTime = funcion.getAvailableTimeList(listObjMeetings, listTime);
    funcion.generateJsonList(listTime);
}
main();