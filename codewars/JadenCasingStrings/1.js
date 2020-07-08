const toJadenCase = function (str) {
    return str.split(' ').map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ');
};

console.log(toJadenCase('ni bu ghj ids kdfs'))