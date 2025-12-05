/* console.log("first");
setTimeout(()=> {
    console.log("this run after");
    
},2000)
console.log("end"); */

/* setTimeout(() => {
    console.log("made tea");
    
    setTimeout(()=> {
        console.log("toasted bread");

        setTimeout(() => {
            console.log("fried egg");
            
        },5000);
        
    },5000);
},5000); */

/* let iceCreamPromise = new Promise((resolve,reject)=> {
    let iceCreamReady = false;

    if(iceCreamReady) {
        resolve("ice cream ready!");
    } else {
        reject("no ice cream today")
    }
});
iceCreamPromise
.then((message)=> {
    console.log("yayy!!"+message);
    
})
.catch((error)=>{
    console.log("Oops!!"+error);
    
}); */