// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

{
    // 
    
function countWordOccurrences(sentence: string, word: string): number {
    const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();
    const words = lowerCaseSentence.split(" ");

    let count= 0;
    for (const w of words) {
        if (w === lowerCaseWord) {
            count++;
        }
    }

    return count;
}

console.log(countWordOccurrences("I love typescript", "typescript" ));



    // 
}