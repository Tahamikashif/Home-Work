"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function washing(callback) {
    console.log("washing is started");
    setTimeout(() => {
        console.log("washing is done");
        callback();
    }, 3000);
}
;
function soaking(callback) {
    console.log("soaking is started");
    setTimeout(() => {
        console.log("soaking is done");
        callback();
    }, 2000);
}
;
function drying() {
    console.log("drying istarted");
    setTimeout(() => {
        console.log("drying is done");
    }, 1000);
}
;
console.log("i am making biryani");
washing(() => {
    soaking(() => {
        drying();
    });
});
