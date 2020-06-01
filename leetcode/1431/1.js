var kidsWithCandies = function(candies, extraCandies) {
    const maxCandies = [];
    const max = Math.max(...candies);
    for(candy of candies) 
        (candy + extraCandies >= max) ? maxCandies.push(true) : maxCandies.push(false);
    return maxCandies
};

console.log(kidsWithCandies([2,3,5,1,3]
    ,3));