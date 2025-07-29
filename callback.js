function orderfood(param){
    setTimeout(() => {
        console.log("i ordered the food")
        param()
    }, 2000);

}

function eatfood(){
    console.log("I am going to eat")

}

orderfood(eatfood)

