function kangaroo(x1, v1, x2, v2) {
   let jumpFirst = x1 === 0 ? v1 : x1;
3	   let jumpSecond = x2;
4	   let verify = 'NO';
5	      
6	      if(v1 <= v2) return verify = 'NO';
7	    
8	    while ( jumpFirst <= jumpSecond){
9	        if(jumpFirst === jumpSecond){
10	           return verify = 'YES';
11	    }
12	    jumpFirst = jumpFirst + v1;
13	    jumpSecond = jumpSecond + v2;
14	}
15	    return verify
}

module.exports = { kangaroo };

// https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true

// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

// The first kangaroo starts at location  and moves at a rate of  meters per jump.
// The second kangaroo starts at location  and moves at a rate of  meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

// Example

// After one jump, they are both at , (, ), so the answer is YES.

// Function Description

// Complete the function kangaroo in the editor below.

// kangaroo has the following parameter(s):

// int x1, int v1: starting position and jump distance for kangaroo 1
// int x2, int v2: starting position and jump distance for kangaroo 2
// Returns

// string: either YES or NO
// Input Format

// A single line of four space-separated integers denoting the respective values of , , , and .

// Constraints

// Sample Input

// 0 3 4 2

// Sample Output

// YES
