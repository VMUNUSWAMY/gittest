class Info{
    name="Abinaya"
    age=23
    job_role="QA Analyst"


    details(){
        console.log("My name is",this.name, "My age is",this.age, "My job_role is",this.job_role)
    }


    details2(){
        console.log("My name is",this.name)
    }

}

let print=new Info  //We are creating a Object. Here object name is "Print"

console.log(print.name)
print.details()

let abi= new Info
abi.details()

let abii=new Info
abii.details2()


class Movie{
        constructor(name,language,price,time){
            this.name=name
            this.language=language
            this.price=price
            this.time=time
        }

print(){

    
    console.log("Movie name is", this.name)
    console.log(`language of moive is ${this.language}`) //This function name is JQuery(${Value})
    console.log("ticket price is", this.price)
    console.log("Movie timing is",this.time)
    }

}

let elven =new Movie("Elven","Tamil",300,"06PM")
elven.print()
let kaithi =new Movie("Kaithai","Tamil",300,"07pm")
kaithi.print()
