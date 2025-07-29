// conditional stattement 

//if 

let a=10

if(a===10 && a>5){/// If value is true, then only we will get the output. or else noting will get,even error message

        console.log("true")
}



//else - This function will work, when If condition is false

    let A=10
    let B="10"

    if (A===B){

            console.log("Both datatype and value are same")
    }

    else{
            console.log("only values are same")

    }


    //else if -  This function will work, when we have multiple condition in the single statement

    let num=3
    if(num==1){

        console.log('The number is 1')

    }

    else if(num==2){
        console.log('The number is 2')
    }

    else if(num==3){

        console.log('The number is 3')
    }

    else {

        console.log('Not Identified')
    }



    //Switch

    let z=3

    switch(z){
        case 1:
            console.log('The number is 1')
            break

        case 2:
            console.log('The number is 2')
            break
        
            case 3:
            console.log('the number is 3')
            break

            default:
                console.log("not a number") 

    }