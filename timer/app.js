console.log('Timer of 10 Seconds');


let count = 0;
const timer = setInterval(() => {
    count++
    console.log(`${count} second (s)`);
    if (count == 10){
        clearInterval(timer)
        console.log('Complete');
        
    }
}, 1000);

