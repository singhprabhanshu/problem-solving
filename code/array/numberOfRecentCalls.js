
var RecentCounter = function() {
    this.request = [];
    this.output = [null];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    
    
     const range = [t - 3000, t];
        this.request.push(t);
        for (let i = 0; i < this.request.length; i++) {
            if (this.request[i] >= range[0]) {
                this.request.splice(0, i);
                const count = this.request.length;
                this.output.push(count);
                break;
            }
        
        };   
    
    
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */


 const obj = new RecentCounter();
 obj.ping(1);
 obj.ping(100);
 obj.ping(200);
 obj.ping(3010);
 obj.ping(3200);
 obj.ping(3201);
 console.log(obj.output);