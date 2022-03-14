const findMinArrowShots = (points) => {
    const sp = points.sort(([a, b], [c, d]) => c - a || d -b);
    // const sp = points.sort((a, b) => b[0] - a[0]);
    const len = points.length;
    let i = 0;
    let res = 0;
    while (i < len) {
        let left = sp[i][0], right = sp[i][1];
        i++;
        while(i<len && sp[i][0] <= right && sp[i][1] >= left) {
            left = Math.max(left, sp[i][0]);
            right = Math.min(right, sp[i][1]);
            i++;
        };
        res++
    };
    return res;
};

const points = [[10, 16], [2, 8], [1, 6], [7, 12]];
const check = findMinArrowShots(points);
console.log(check);