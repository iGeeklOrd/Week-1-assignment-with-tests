## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

var counter = 0;

function printAndIncreaseCount(){
    console.clear();
    console.log(counter);
    counter = counter + 1;

    setTimeout(printAndIncreaseCount, 1000)
}

setTimeout(printAndIncreaseCount, 1000)







































































(Hint: setTimeout)