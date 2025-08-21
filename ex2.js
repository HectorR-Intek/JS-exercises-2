//Exercise 2
/* Write regular expressions that match the input*/

//const regexA= /\w*\s\d{2},\s\d{4}$/gi;
const regexA = /^(?:January|February|March|April|May|June|July|August|September|October|November|December) \d{2}, \d{4}$/gi;
const matchA1 = "July 15, 1994";
const matchA2 = "February 11, 2525";
console.log(matchA1.match(regexA));
console.log(matchA2.match(regexA));

//const regexB = /\w\d*|\d*\w/g;
const regexB = /\b[a-z0-9]*(?:[a-z]\d|\d[a-z])[a-z0-9]*\b/gi;
const matchB = "A56";
const matchB2 = "27x";
console.log(matchB.match(regexB));
console.log(matchB2.match(regexB));

//const regexC = /\w*\.(java|cpp|txt)/g;
const regexC = /^[a-z]+\.(?:txt|java|cpp)$/gi;
const matchC1 = "Test.java";
const matchC2 = "harmless.txt.exe";
console.log(matchC1.match(regexC));
console.log(matchC2.match(regexC));

const regexD = /^(.)(.).?\2\1$/g;
const matchD = "abcba";
const matchD2 = "AngnA";
console.log(matchD.match(regexD)); 
console.log(matchD2.match(regexD));

const regexE = /\b[b-y]+\b/gi;
const matchE = "Bee zapp Crow Eagle Zorro  mouse Ape  you";
console.log(matchE.match(regexE));

const regexF = /<([a-zA-Z]+)>((?:(?!<\/\1>).)*?)<\/\1>/g;
const matchF = "Is <b>4 < -1/12</b> true? The <b>answer</b> will <em>surprise</em> you."
console.log(matchF.match(regexF));
