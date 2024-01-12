## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

const fs = require('fs');

function clean(data){
    var cleanData = data.split(" ")
    var answerArray = [];

    for(var i=0; i<cleanData.length; i++){
        if(cleanData[i] == 0){

        }

        else{
            answerArray.push(cleanData[i]);
        }

        var answerString = answerArray.join(" ");

    }
    return answerString;

}

fs.readFile("a.txt", "utf-8", function(err, data){
    if(err){
        console.error("File not found.")
    }

    let cleanedData = clean(data);
    fs.writeFile("a.txt", cleanedData, "utf-8", function(err){
        if(err){
            console.log("Failed to clean the data.")
        }
    })

})