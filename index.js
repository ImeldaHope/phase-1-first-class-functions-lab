// Code your solution in this file!

//Creates first function that passes an anonymous function as an argument

const returnFirstTwoDrivers= arr =>{
    const myArr = [arr[0],arr[1]];
    return myArr;
}

returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const returnLastTwoDrivers = arrX => {
    const myArrX = [arrX[arrX.length-2], arrX[arrX.length-1]];
    return myArrX;
}

returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = multiplier => {
    return function(fare){
        return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrDrivers,newDrivers) =>{
    return newDrivers(arrDrivers);
}

