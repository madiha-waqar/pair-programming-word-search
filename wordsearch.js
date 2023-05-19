// Pair programming collaboration between SabaO7, nahcg and myself( madiha-waqar ). Gloria was driver and Saba and I were navigators. Basically took the code from last pair programming activity to traspose the vertical array and rest was straight forward.


const wordSearch = (letters, word) => { 
    if (!word || word.length === 0) {
        return false;
    }

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }

    const verticalJoin = [];
    for (let i = 0; i < letters[0].length; i++) {
    let verticalString = '';
    for (let j = 0; j < letters.length; j++) {
      verticalString += letters[j][i];
    }
    verticalJoin.push(verticalString);
  }

    for (v of verticalJoin) {
        if (v.includes(word)) {
            return true;
        }
    }    
    return false;
}


module.exports = wordSearch



// in collaboration with SabaO7, nahcg, madiha-waqar
  