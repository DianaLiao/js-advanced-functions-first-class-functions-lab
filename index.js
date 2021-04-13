// Code your solution in this file!
const returnFirstTwoDrivers = arr => arr.slice(0,2)

const returnLastTwoDrivers = arr => {
  return arr.slice(arr.length-2)
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(multiplier){
  return num => num*multiplier
}

const fareDoubler = fare => createFareMultiplier(2)(fare)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, func) {
  return func(drivers)
}