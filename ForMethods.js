//for in

let obj={
    name:"Javascript",
    dob:1995
}

for(let print in obj){
    console.log(obj[print])

}

//for of

let arr=[10,20,30,40]

for(let print of arr){
    console.log(print);}

//For each
arr.forEach((cv,iv)=>{
    console.log(cv,iv)
})



//MRF Method

//Map

let num=[1,2,3,4,5,6,7,8,9]
console.log(num)
let sum=num.map((el)=>el*5)
console.log(sum)


//Filter

let great=num.filter((el=>el>5))
console.log(great)

//Reduce
let red=num.reduce((acc,cv)=>acc+cv,1000)
console.log(red)



let name=["Venu","Ben","Abi","Murali","Yoga"]
console.log(name)
let nmfl=name.filter((el)=>el.length>3)
console.log(nmfl)


let nmfl2=name.map((ele)=>ele.toUpperCase())
console.log(nmfl2)


