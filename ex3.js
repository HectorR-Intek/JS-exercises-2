//Exercise 3:
// Section A: shifting letter cyclically.

function shiftLetters(str){
    const alphabets = ["abcdefghijlkmnopqrstuvwxyz",
                       "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                       "0123456789"];
    return function(str){
        let reference;
        let solution = "";
        for(let i = 0; i<str.length; i++){
            for(let alphabet of alphabets){
                if(alphabet.includes(str[i])){
                    reference = alphabet;
                    break;
                }
            }
            let position = reference.indexOf(str[i]);
            let newPosition = (position+1) % reference.length;
            solution += reference[newPosition];
        }
        return solution;
    }
}

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

const shifter = shiftLetters();
console.log(shifter("ABD"));
hashtag();  