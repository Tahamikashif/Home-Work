let friendsName:string[] = ["taha",'ahmed','noman'];
let message:string = "how are you gys";
let age:number = 123;



for(let i=0 ; i < friendsName.length;i++){

console.log( message, + age, + [i] )



}
function restPrams(firstName:string, ...secondName:string[]){

    return firstName + " "+ secondName.join(" ")

}

const namesS = restPrams("anum","taha","saman","zubair")

console.log(namesS)
let names:string[] = ["anum","tiham","samad"]
for(let i=0; i < names.length; i++){

console.log("names"+ i)



}









