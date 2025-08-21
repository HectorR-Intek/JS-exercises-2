"use strict";

function shift(str) {
  return str.replace(/[A-Za-z0-9]/g, ch => {
    const code = ch.charCodeAt(0);
    if (code >= 65 && code <= 90) {           // A-Z
      return String.fromCharCode(((code - 65 + 1) % 26) + 65);
    }
    if (code >= 97 && code <= 122) {          // a-z
      return String.fromCharCode(((code - 97 + 1) % 26) + 97);
    }
    // 0-9
    return String.fromCharCode(((code - 48 + 1) % 10) + 48);
  });
}

console.log(shift("aBc"));   // bCd
console.log(shift("xyz"));   // yza
console.log(shift("aK89"));  // bL90


// Section B: keyword replaced by hashtag.

function hashtag() {
    const textInput = document.getElementById("text");        
    const keywordInput = document.getElementById("keyword");  
    const button = document.getElementById("button");         

    button.addEventListener("click", event => {
        event.preventDefault();

        const keyword = keywordInput.value.trim();
        const text = textInput.innerHTML;

        if (!keyword) return;

        const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
        const replacedText = text.replace(regex, match => {
            return `<a href="https://twitter.com/hashtag/${match}">#${match}</a>`;
        });

        textInput.innerHTML = replacedText;
    });
}

// Section C: After doing some research I found that regular expressions
// cannot be used to find palindromes that are not specified by length, since these
// would require and undetermined amount of steps.

hashtag();  