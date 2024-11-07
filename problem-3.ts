const countWordOccurrences = (sentence: string, checkWord: string) => {
  const words = sentence.split(" ");
  let count = 0;
  for (let word of words) {
    if (word == checkWord) count++;
  }
  return count;
};

console.log(countWordOccurrences("I love typescript ", "typescript"));
