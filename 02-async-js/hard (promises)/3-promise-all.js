/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond(resolves, reject) {
    setTimeout(function(){
        resolves("1 second passed.");
    }, 1000)

}

function waitTwoSecond(resolves, reject) {
    setTimeout(function(){
        resolves("2 second passed.");
    }, 2000)
}

function waitThreeSecond(resolves, reject) {
    setTimeout(function(){
        resolves("3 second passed.");
    }, 3000)

}

function calculateTime() {
    var startTime = new Date();

    return Promise.all([
        new Promise(waitOneSecond),
        new Promise(waitTwoSecond),
        new Promise(waitThreeSecond)
    ]).then(function(results){
        var endTime = new Date();

        var totalTime = ((endTime - startTime)/1000);

        console.log(results);
        console.log("Total time taken to resolve all promises:" + totalTime + " " + "seconds");
    }).catch(function(error){
        console.error("An error occurred:", error);
    })
}

calculateTime();