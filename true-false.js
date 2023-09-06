/*
Truthy:
1. any number (+ve, -ve) will be truthy accept 0
2. any string  other than empty string
3.'0', 'false'
4. empty object is a truthy value {}
5. [] is also 


falsy:
1. variable is false 
2. if the value is 0 then it's false by side
3. '' (empty string)
4.any of undefined staff is a falsy value
5.null

*/
const x = 4 ;
if(x){
    console.log(' value of x is truth');
}
else{
    console.log(' value of x is false');
} 

// optional
// check falsy
// not sign(!)
const y = null;
if(!y){
    console.log(' this is falsy value');
}

// check truthy
// double (!!) is truthy value
const z = ' ';
if(!!z){
    console.log('this is truthy');
} 