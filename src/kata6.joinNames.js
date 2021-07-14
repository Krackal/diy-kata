const joinNames = namesObj => {
    let array = namesObj.map(a => a.name);
    let array2 = array.slice(0, array.length - 1)
    .join(', ');
    let newWord = array.slice(array.length - 1, array.length);
    return array2 + ' & ' + newWord;
    
};

module.exports = joinNames;
