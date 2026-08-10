let promise = new Promise(function(resolve, reject) {

    console.log("Loading...");

    setTimeout(function() {
        resolve("Data Loaded Successfully");
    }, 3000);

});

promise.then(function(result) {
    console.log(result);
});

