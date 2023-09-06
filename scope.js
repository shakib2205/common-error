// function sum( first, second){
//     let result = first + second;
//     console.log(result); // kono kichu vitore declare korle shetar area thakbe oi function er moddhe.

//     return result;
// }

// const output = sum (3, 7);
// console.log(output);//one way 



let bonus = 20;
function sum( first, second){
    let result = first + second + bonus;
    // console.log(bonus); 
    if(result > 9){ // this is called 'If' block
        const mood = "happy";
        console.log(mood); // jodi kono kichu { } er vitore declare kori sheta { } er baire theke dekhte caile shetake pawya jabe na.
    }
    //console.log(mood);// {} er baire theke dekhte hole shekhetre 'var' diye veriable k declare korte hobe. let ba const use kora jabe na.

    //what is whesting ?? that is kono ekta scope er vitore 'var' diye kono veriable k declare korle shetake whesting bole 
    return result;
}

const output = sum (3, 7);
// console.log(bonus);
// console.log(output);