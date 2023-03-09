const words: string[] = ["Apple", "Beach", "Click", "Dance", "Error", "Fairy", "Grape", "Happy", "Image", "Juice", "Karma", "Lemon", "Magic", "Nurse", "Onion", "Pizza", "Queen", "Rhino", "Smart", "Tiger", "Uncle", "Vital", "World", "Xenon", "Youth", "Zebra"];
let usedWords: string[] = [];

function getRandomWord(): string {
  if (usedWords.length === words.length) {
    usedWords = []; // Reset usedWords if all words have been used
  }

  let randomIndex: number;
  let randomWord: string;

  do {
    randomIndex = Math.floor(Math.random() * words.length);
    randomWord = words[randomIndex];
  } while (usedWords.includes(randomWord)); // Loop until a word not in usedWords is found

  usedWords.push(randomWord); // Add word to usedWords

  return randomWord;
}

// Example usage:
console.log(getRandomWord());
console.log(getRandomWord());
console.log(getRandomWord());
console.log(getRandomWord());
