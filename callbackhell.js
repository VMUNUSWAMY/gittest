function one(a){
    setTimeout(() => {
        console.log("One")
        a()
    }, 2000);
}
function two(b){
    setTimeout(() => {
        console.log("Two")
        b()
    }, 500);

}
function three(c){
    setTimeout(() => {
        console.log("Three")
        c()
    }, 500);

}
function four(d){
    setTimeout(() => {
        console.log("Four")
        d()
    }, 500);

}
function five(){
    setTimeout(() => {
        console.log("five")
       
    }, 500);

}

one(()=>{
    two(()=>{
        three(()=>{
            four(five)
        })
    })
})