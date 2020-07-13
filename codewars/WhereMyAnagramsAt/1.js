function anagrams(word, words) {
    let arr = [];
    let sortedWord = word.split('').sort().join('');
    for(let itemWord of words) {
        if(itemWord.split('').sort().join('') === sortedWord)
            arr.push(itemWord)
    }
    return arr;
}

console.log(anagrams('abba', 'baabc')) 
