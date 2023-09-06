//strongly typed language
/*
int a = 5;
string = ' amar nam shakibur rahman'
bool c = true;
object student = {name : shakib, age: 24, student: swe}
int []  numbers = [12, 34, 67]
string []  friends = [ shakib, hasib, ridu, deep, rudro]

*/

//javaScripts is a dynamic type language 

//these are primitive type 
const a = 5;
const b = 'samsu ekhn ar kupay na';
const d = true;


//these are non primitive type
const age = [45, 65]
const student = { id: 23, clss: 7}


// console.log(typeof a, typeof b, typeof d, typeof age, typeof student);


let x = 5;
let y = x;
console.log(x, y);
y = 7; // value re assign
console.log(x, y);

let p = {job: 'web developer'}
let q = p;
q = {job: 'backend end'}
console.log(p , q);