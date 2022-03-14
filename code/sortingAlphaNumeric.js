const sortingAlphaNumeric = (a, b) => {
    const rea = /[^a-zA-Z]/g;
    const ren = /[^0-9]/g;
  
    const aA = a.replace(rea, '');
    const aB = b.replace(rea, '');
    if ( aA === aB) {
      const nA = parseInt(a.replace(ren, ''), 10);
      const nB = parseInt(b.replace(ren, ''), 10);
      return nA === nB ? 0: nA > nB ? 1: -1;
  
  
    } else {
      return aA > aB ?  1 : -1;
    }
  
  };
  
  const response = ['a10', 'a', 'ab', 'abb', 'a13'].sort(sortingAlphaNumeric);
  console.log(response);