"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let promises = new Promise((resolve, rejects) => {
    setTimeout(() => {
        rejects("washing is not done");
    }, 3000);
});
promises
    .then((value) => {
    console.log(value);
    console.log("soaking also be done");
})
    .catch((error) => {
    console.log(error);
    console.log("soaking is not done");
});
