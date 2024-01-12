/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    var start = new Date().getTime();
    var stop = 0;

    while(stop<seconds){
        stop = new Date().getTime() - start;
    }
}

console.log("Before sleep");
sleep(3000);
console.log("After sleep");