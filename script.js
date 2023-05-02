const welcomePhrase = 'Hello! And welcome to the Perpetual Eight-Ball!';
const rulesPhrase = 'Please, think about a question you want the Permetual Magic Eight-Ball to answer and reload the page!';
const eightBallAnswers = ['Absolutely yes!', 'Sorry but not at all', 'Perhaps yes', 'Maybe no', 'There\'s a small chance!', 'Not big chances but...', 'Ask another one!'];
let getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}
let answerNum = getRandomInt(eightBallAnswers.length);

console.log(welcomePhrase);
console.log(rulesPhrase);

console.log(`Magic Eight-Ball's answer to your question is:
${eightBallAnswers[answerNum]}`);

