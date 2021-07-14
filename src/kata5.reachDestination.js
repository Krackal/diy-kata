const reachDestination = (distance, speed) => {
    let timeOfArrival = Math.round((distance/speed)*2)/2;
    return `I should be there in ${timeOfArrival} hours.`;
};

module.exports = reachDestination;
