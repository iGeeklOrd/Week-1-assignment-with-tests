/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
function go(resolves, reject, n){

    setTimeout(function(){
        resolves("Done")
    }, n * 1000)
}


function wait(n) {
    return new Promise(function(resolves, reject){
        go(resolves, reject, n)
    });
}

var seconds = 7;

wait(seconds).then(function (message) {
        console.log(message);
    }).catch(function (error) {
        console.error(error);
    });
