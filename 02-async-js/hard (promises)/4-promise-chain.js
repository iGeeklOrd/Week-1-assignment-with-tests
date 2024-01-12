/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("1 second passed.");
        }, 1000);
    });
}

function waitTwoSecond() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("2 seconds passed.");
        }, 2000);
    });
}

function waitThreeSecond() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("3 seconds passed.");
        }, 3000);
    });
}

function calculateTime() {
    var start = new Date();

    waitOneSecond().then(function(result1){
        console.log(result1);
        return waitTwoSecond();
    }).then(function(result2){
        console.log(result2);
        return waitThreeSecond();
    }).then(function(result3){
        console.log(result3);
        
        var end = new Date();

        var totalTime = ((end - start)/1000)
        console.log("Entire operation completed in " + totalTime + "seconds.");
        }).catch(function (error) {
            console.error("An error occurred.", error);
        });
}

// Example usage
calculateTime();
