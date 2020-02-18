// Increament:

// Post Increament:

var x = 10;
console.log(x)				//Result: 10

var x = 10;
console.log(x++)			//Result: 10

var x = 10;
console.log(x++ + x)		//Its a post increament it increase if there is any other place to move
		   //10	+ //11		//otherwise its just hold the previous number.  
		   //Result: 21
							//x++ + x (10 comes inside in first x++ when x++ moves to next x its 
							//value becomes 11)


// Pre Increament:

var x = 10;
console.log(x)				//Result: 10

var x = 10;
console.log(++x)			//Result: 11

var x = 10;
console.log(++x + x)		//Its a pre increament it increase first and then move to the next place.
		   //11	+ //11		//if there is no other place to move its just hold a new increamented number.  
		   //Result: 22
							//x++ + x (11 comes inside in first ++x beacuse its a pre increament when 
							//++x moves to next x its value becomes 11)

// Post Decreament:

var x = 10;
console.log(x)				//Result: 10

var x = 10;
console.log(x--)			//Result: 10

var x = 10;
console.log(x-- + x)		//Its a post decreament it decreases if there is any other place to move
		   //10	+ //9		//otherwise its just hold the previous number.  
		   //Result: 19
							//x-- + x (10 comes inside in first x-- when x-- moves to next x its 
							//value becomes 9)


// Pre Decreament:

var x = 10;
console.log(x)				//Result: 10

var x = 10;
console.log(--x)			//Result: 9

var x = 10;
console.log(--x + x)		//Its a pre decreament it decreases first and then move to the next place.
		   //9	+ //9		//if there is no other place to move its just hold a new decreamented number.  
		   //Result: 18
							//--x + x (9 comes inside in first --x beacuse its a pre decreament when 
							//--x moves to next x its value becomes 9)


// All at Ones (Post Pre Increament and Decreament):

var x = 10;
console.log(x++ + --x + ++x + x-- + x++);
		   //10  //10  //11  //11  //10
		   //10 + 10 + 11 + 11 +10
		   //Result: 52