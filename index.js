// Code your solution in this file!
let blocks;
let feet;
let fare;



function distanceFromHqInBlocks(distance) {
    if (distance > 42) {
        let blocks = distance % 42;
        return blocks;
    } else {
        let blocks = 42 - distance;
        return blocks;
    }
}

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        let feet = ((destination - start) * 264)
        return feet
    } else {
        return (start - destination) * 264
    }
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance < 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return ((distance - 400) * .02);
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else if (distance > 2500) {
        return ('cannot travel that far');
    }
}