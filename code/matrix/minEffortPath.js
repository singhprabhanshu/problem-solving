/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    const m = heights.length;
    const n = heights[0].length;
    if (m === 1 && n === 1) {
        return heights[m][n];
    }
    const hashMap = new Map();
    hashMap.set('00', true);
    
    let travelVertex = '00';
    let ri = 0;
    let ci = 0;
    let absMax = 0;
    while(travelVertex !== `${m-1}${n-1}`) {
        let newHashMap = new Map();
        let arr = [];
        if (ri > 0) {
            if (!hashMap.has(`${ri - 1}${ci}`)) {
                
                newHashMap.set(Math.abs(heights[ri][ci] - heights[ri - 1][ci]), `${ri - 1}${ci}` );
                arr.push(Math.abs(heights[ri][ci] - heights[ri - 1][ci]));
            };
        }
        if (ri >= 0 && ri < m - 1) {
            
            if (!hashMap.has(`${ri + 1}${ci}`)) {
                newHashMap.set( Math.abs(heights[ri][ci] - heights[ri + 1][ci]), `${ri + 1}${ci}` );
                arr.push(Math.abs(heights[ri][ci] - heights[ri + 1][ci]));
            };
        }
       
        if (ci > 0) {
           if (!hashMap.has(`${ri}${ci -1}`)) {
                newHashMap.set(Math.abs(heights[ri][ci] - heights[ri][ci -1]), `${ri}${ci - 1}` );
                arr.push(Math.abs(heights[ri][ci] - heights[ri][ci - 1]));
            };
            
        }
        if (ci >= 0 && ci < n - 1) {
            
            if (!hashMap.has(`${ri}${ci + 1}`)) {
                newHashMap.set(Math.abs(heights[ri][ci] - heights[ri][ci +1]), `${ri}${ci +1 }` );
                arr.push(Math.abs(heights[ri][ci] - heights[ri][ci + 1]));
            }; 
        }
        
            
        
        let min = Math.min(...arr);
        absMax = Math.max(absMax, min);
        let minVertex = newHashMap.get(min);
        travelVertex = minVertex;
        
        
        ri = parseInt(minVertex.charAt(0));
        ci = parseInt(minVertex.charAt(1));
        hashMap.set(travelVertex, true);
        console.log(newHashMap, ri, ci, arr, travelVertex, m, n, hashMap);
        
        // if (count === 5) {
        //     break;
        // }
        // count ++;
        
    };

    return absMax;
    
    
    
};


console.log(minimumEffortPath([[1,2,2],[3,8,2],[5,3,5]]));