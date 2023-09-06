function stopWatch(){
    let count = 0;
    return function(){
        count ++;
        return count;

    }
}
const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock1());

//jodi ami kono ekta function theke arekta function k call kori tahole sheta ekta close environment create kore fele. vitorer j function ta ke return kore ba call kore . she jodi tar bairer kono variable k access korete pare .tokhn shetake use korbo tokhn clock tar nijessho value rakhbe and jeno bujha jay tara nijeder close ekta environment create kore felse.