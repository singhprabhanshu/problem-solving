const removeVowels = (s) => {
    const v = new Set('aeiou');
    
    let s1 = '';
    let s2 = s.toLowerCase();
    
    for (let i of s2) {
        
        if (!v.has(i)) {
            s1 += i;
        }
    };
  
    return s1;
};


const check = removeVowels('prAaebhainshu');
console.log(check);