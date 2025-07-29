// function declaration


function fruit(){

    let a="Apple",b="Orange"
    console.log(a," and",b," is good for health")
}

fruit()


function info(name,age){
    console.log("My name is ",name," and my age is", age)

}

info("Venu",25)
info("Murali",25)
info("Yoga",25)



//function expression

let veg=function(a,b){

    console.log(a," and",b,"are good for heanlth")
}

veg("Tomoto","Onion")


//arrow funcution = Fit Arrow or Thin Arrow

let movie=(ticket,snaks,parking,petrol)=>{
console.log("Ticket Price is "+(ticket+snaks+parking+petrol))

}
movie(200,200,50,100)



//IIFE(Immediately Invoked function Expression)

(function(a){
console.log("hello",a)

})("kitty")


console.log("Immediately invoked \t function expression")


console.log("Immediately invoked \n function expression")

console.log(`Immediately 
    invoked
    function
    expression`)