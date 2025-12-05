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
/* 
let iceCreamPromise = new Promise((resolve,reject)=> {
    let iceCreamReady = false;

    if(iceCreamReady) {
        resolve("ice cream ready!🤩");
    } else {
        reject("no ice cream today🥲")
    }
});
async function getIceCream() {
    try{
        let message = await iceCreamPromise;
        console.log("yay!"+message);
        
    } catch(error) {
        console.log("Oops!!"+error);
        
    }
}
getIceCream(); */

/* const [a,b,c] = [10,30,50];
console.log(a);
console.log(b);
console.log(c);
 */

/* const[A, ...rest] = [2,4,6,8,10];
console.log(A);
console.log(rest); */

/* const my = {name:"Akira", age:"19"};
const {name, age} = my;
console.log(name);
console.log(age);
 */

/* function greet({name, age}) {
    console.log(`hello ${name},you are ${age}years old`);
    
}
greet({
    name: "Akira",
    age:19
}); */

// DOM


