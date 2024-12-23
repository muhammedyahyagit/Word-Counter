var sentence = prompt("Enter your sentence");
sentence = sentence.trim().replace(/\s+/g, ' ');

var wordCount = 0;

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ' && i > 0 && sentence[i - 1] !== ' ') {
        wordCount++;
    }
}

wordCount++;

alert("Total number of words:" + wordCount);

