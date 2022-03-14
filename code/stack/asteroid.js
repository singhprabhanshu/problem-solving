/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

/**
 * We are given an array asteroids of integers representing asteroids in a row.

    For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

    Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.
 *
    Example 1:

    Input: asteroids = [5,10,-5]
    Output: [5,10]
    Explanation: The 10 and -5 collide resulting in 10.  The 5 and 10 never collide.
    Example 2:

    Input: asteroids = [8,-8]
    Output: []
    Explanation: The 8 and -8 collide exploding each other.
    Example 3:

    Input: asteroids = [10,2,-5]
    Output: [10]
    Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
    Example 4:
    Input: asteroids = [-2,-1,1,2]
    Output: [-2,-1,1,2]
    Explanation: The -2 and -1 are moving left, while the 1 and 2 are moving right. Asteroids moving the same direction never meet, so no asteroids will meet each other.


    Algorithm and solutions:
        1. we will use stack for storing the numbers
        2. we will use recurrsion for checking collides
        3. If we encounter negative number, we will check the stack latest element.
            a. If latest element is -ve then push the present element in stack and continue
            b. If latest element is +ve then collide recurrsivly. 
            c. Recursive function will check the conditions and call its self if necessary.
        4. If we encounter positive number , we will pust the element in stack.

    TimeComplexity: O(nlogn) SpaceComplexity: O(n)
 
 */

const collide = (as, num) => {
	
	const asNum = as[as.length -1];
	const colNum = Math.abs(num);
	
	if (asNum > colNum) {
		return ;
	} else if (asNum === colNum) {
		as.pop();
		return;
	} else {
        as.pop();
        // if stack is empty return or check the stack latest number.
		if (as.length === 0 || as[as.length -1 ] < 0) {
			as.push(num);
			return;
		} else {
			return collide(as, num);
		}
	}
}
var asteroidCollision = function(asteroids) {
    const n = asteroids.length;
	if (n === 0) {
		return [];
	}
	const asteroidStack = [];
	for (let i = 0; i < n; i++) {
		if (asteroids[i] < 0) {
			if (i === 0) {
				asteroidStack.push(asteroids[i]);
				continue;
			} else {
				if (asteroidStack[asteroidStack.length - 1] < 0) {
					asteroidStack.push(asteroids[i]);
					continue;
				} else {
					collide(asteroidStack, asteroids[i]);
					continue;
				}
			}
			
		} else {
            asteroidStack.push(asteroids[i]);
        }
	};
	return asteroidStack;
};

const check = asteroidCollision([5,  -5]);
console.log(check);