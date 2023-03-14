// Code your solution in this file!
const returnFirstTwoDrivers =function(drivers){
    return drivers.slice(0,2);
}
 const returnLastTwoDrivers =function(drivers){
    return drivers.slice(-2)
 }

const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(givenValue){
    return function(fare){
        return fare*givenValue;

    }
}
function fareDoubler(fare){
    return fare+fare
}
function fareTripler(fare){
    return fare*3
}
function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}
