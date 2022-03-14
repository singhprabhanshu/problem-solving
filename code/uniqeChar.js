// this will give char in string with no repeatation
const uniqueChar = (str) => {
    const distinct = [];
    for (let i = 0; i < str.length; i++ ) {
        
        if (!distinct.includes(str.charAt(i))) {
            distinct.push(str.charAt(i));
        }
    };
    console.log(distinct.join(''));
    return distinct.join(',');
};

// distinct char solution
// const distinctchar = (str) => {
//     let newStr = "";
//     for (let i = 0; i < str.length; i++) {
//       if (!newStr.includes(str.charAt(i))) {
//         newStr += str.charAt(i);
//       }
//     }
//     return newStr;
//   };

// take unique char of word only;
const getdistinctchar = (str) => {
    let distinct = {};
    for (let i = 0; i < str.length; i++ ) {
        if (distinct[str.charAt(i)]) {
            distinct[str.charAt(i)] += 1;

        } else {
            distinct[str.charAt(i)] = 1;
        }
    };
    console.log(distinct);
    let result = '';
    for (let j of Object.keys(distinct)) {
        if (distinct[j] === 1) {
            result += j;
        }
    };
    console.log(result);
    return result;
}


// uniqueChar('Geeks for Geeks');
getdistinctchar('Geeks for Geeks');


/// unique char

// const uniqueCharOnly = (str) => {
//     const strHashMap = new Map();
//     for (let i = 0; i < str.length; i++) {
//       if (strHashMap.has(str.charAt(i))) {
//         strHashMap.set(str.charAt(i), strHashMap.get(str.charAt(i)) + 1);
//       } else {
//         strHashMap.set(str.charAt(i), 1);
//       }
//     }
    
//     let uniqueStr = '';
//     const keysArr = strHashMap.keys();
    
//     for (let i = 0; i < strHashMap.size; i++) {
//       const selectedKey = keysArr.next().value;
//       if (strHashMap.get(selectedKey) === 1) {
        
//         uniqueStr += selectedKey;
//       }
//     }
//     return uniqueStr;
//   };
  
//   const response = uniqueCharOnly("geeks for geeks");
//   console.log(response); // for