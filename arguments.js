/*
function sum(a, b, c){
    console.log(arguments);
    const result = (a+ b + c);
    return result;
}
const total = sum (23, 65, 78, 45, 87, 99);
console.log(total);
*/

// javaScripts arguments
// arguments can't use outside the function

//[Arguments] { '0': 23, '1': 65, '2': 78, '3': 45, '4': 87, '5': 99 } this output called Array like object (Arguments object).


// array like object 
function sum(a, b, c){
    const args = [...arguments];
    console.log(args);
    const result = a+ b+ c;
    return result;
}
const total = sum (23, 65, 78, 45, 87, 99);
// kono ekta funtion er pore jdi .length dei shekhetre bujha jabe j kono ekta function e koyta parameter use kora hoiche
 