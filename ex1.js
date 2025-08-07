/* Exercise 1
Write a string for each case that would satisfy
at least one match for the following regular expressions:
*/
"use strict";
const regexA = /.abc/g;
const matchA = "habc";
console.log(matchA.match(regexA));

const regexB = /a+b?!!1{4}/g;
const matchB = "aaab!!1111";
console.log(matchB.match(regexB));

const regexC = /.{3}a\.b/g;
const matchC = "/heca.b/"
console.log(matchC.match(regexC));

const regexD = /\w/g;
const matchD = "M";
console.log(matchD.match(regexD));

const regexE = /\s/g;
const matchE = " ";
console.log(matchE.match(regexE));

const regexF = /\d/g;
const matchF = "7";
console.log(matchF.match(regexF));

const regexG = /./g;
const matchG =  "9";
console.log(matchG.match(regexG));

const regexH = /[abc]/g;
const matchH = "b";

const regexI = /(abc)/g;
const matchI = "habcf";
console.log(matchI.match(regexI));

const regexJ = /[a-zA-Z_\$\.]+[A-Za-z_\$0-9\.]*@[a-zA-Z_\$\.]+[a-zA-Z_\$0-9\.]*\.(com|net|org){1}/g;
const matchJ = "the.admin@funny.videos.com";
console.log(matchJ.match(regexJ));

const regexK = /\([0oOn]{1}(_|\s)[0oOn]{1}\)/g;
const matchK = "(O_o)";
console.log(matchK.match(regexK));