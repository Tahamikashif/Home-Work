"use strict";
let friendsName = ["taha", 'ahmed', 'noman'];
let message = "how are you gys";
let age = 123;
for (let i = 0; i < friendsName.length; i++) {
    console.log(message, +age, +[i]);
}
function restPrams(firstName, ...secondName) {
    return firstName + " " + secondName.join(" ");
}
const namesS = restPrams("anum", "taha", "saman", "zubair");
console.log(namesS);
let names = ["anum", "tiham", "samad"];
for (let i = 0; i < names.length; i++) {
    console.log("names" + i);
}
