"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consumers_1 = require("stream/consumers");
function callcama(name) {
    console.log("my name is !" + consumers_1.text);
}
function calldapa(name1, callMama) {
    return callMama(name1);
}
calldapa("taha" + consumers_1.text, callcama);
