/* All Programming languages come with a set of operators. The following are basic math operators. */

/*This is the addition and subtraction operators at work */

var addOne = 38;
var addTwo = 12;
var addFinal = addOne + addTwo;

document.write('<br>' + addFinal);

var subOne = 89;
var subTwo = 43;
var subFinal = subOne - subTwo;

document.write('<br>' + subFinal);

/* This is the multiplication and division operators at work. */

var mulOne = 14;
var mulTwo = 30;
var mulFinal = mulTwo * mulOne;

document.write('<br>' + mulFinal);

var divOne = 31050;
var divTwo = 450;
var divFinal = divOne / divTwo;

document.write('<br>' + divFinal);


/* Modulus, also known as 'Remainder' in Javascript, is a mth operation that returns or gives you the remainder of division operation. Modulus is often used to determine if a set of numbers is equal to something. */
var modOne = 16;
var modTwo = 5;
var modFinal = modOne % modTwo

document.write('<br>' + modFinal);

var modThree = 9;
var modFour = 5;
var modFinal = modThree % modFour

document.write('<br>' + modFinal);

/* In programming languages, you should never divide by zero. This will result in an error, that can oftentimes break your program and sometimes even crash your browser or your computer. */

/* Increment and Decrementers are used to add one or subtract one from a value. These are most often used in loops. */
var incA = 3;
document.write('<br>StartingNumber:' + incA);
incA++; // Adds one to incA
document.write('<br>Incremented:' + incA);

/* The Incrementer is replacing the += 1. Which adds 1 to the above variable. */

var decA = 6;
document.write('<br>StartingNumber:' + decA);
decA--; // Subtract one from the decA
document.write('<br>Decremented:' + decA);
/* The decrementer replacing -= 1. Which subtracts from the above variable. */

/* The most commonly used operator in programming, is the assignment operator. It is denoted with an equal sign (=). The assignment operator assigns a value to an object. */
var assignThis = 'This string is assigned to the assignThis variable';
document.write('<br>' + assignThis);

/* Advanced Operators or Logic Operators are used to test for logic in your programs. These operators are interested in evaluating somthing to either true or false. */

/* The == operator is the comparison operator. It determines if two pieces of sata share the same value. */ 
var a = 4;
var b = 4;
if (a == b)	{
	// Do something.
	document.write('<br> They\'re equal!')
}

/* The === operator is the strict or absolute comparison operator. It determines if two pieces of data share the same value and type. */
var c = '78';
var d = '78';
if (c === d) {
	// Do something.
	document.write('<br> The variables are equal in type as well as value');
}

/* The != and the !== operators are used to determine if two values are NOT equal. != only evaluates the value. !== evaluates the value and the type. */
var e = 'Happy';
var f = 'Sad';
if (e != f) {
	// Do something
	document.write('<br> These values are not the same');
}

var g = 'Hungry';
var h = 'Starved';
if (g !== h) {
	// Do something
	document.write('<br> These values and types are not the same');
}

/* Less than (<) and greater than (>) operators. These test to determine if one value is less than or greater then the other. */
var i = 3;
var j = 9; 
if (i > j) {
	document.write('<br> i is less than j');
}

/* The less than or equal to (<=) and geater then or equal to (>=) operators are also used to determine values. This time, they take into consideration if the vlaues are equal to one another. */

var k = 89;
var l = 56; 
if (k >= l) {
	document.write('<br> The k value is greater than or equal to l')
}


/* The && 'and' operator ties two elements together. */
var m = 45;
var n = 45;
var o = 45; 
if (m == n && m == o) {
	document.write('<br> m is equal to both n and o.');
}

/* The || 'or' operator compares two elements to each other. It accepts a true evlaution if one or the other is not false. */
var p = 89;
var q = 77;
var r = 89;
if (p == q || p == r) {
	document.write('<br> ps is either equal to q or equal to r.');
}

/* Prompt() is a Javascript method run on the Window Object that asks a user for input. */
var yourName = prompt('Please enter your name', 'ex. JohnSmith');

/* Te code below evaluates if the user inputs 'James Bond' into the yourName vairable. If they do, then 007 is welcomed. If they don't put in 'James Bond', then the code greets them by name. */
if (yourName == 'James Bond') {
	document.write('<br> Welcome, 007.');
} else {
	document.write('<br> Oh, Hello. :) ' + yourName);
}


var yourNumber = prompt('Write a score from 1-100', '67');
if (yourNumber <= 49) {
	document.write('<br> WRONG!!!');
} else {
	document.write('<br> CORRECT!!!');
}