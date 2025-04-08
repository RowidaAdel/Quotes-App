// ^ JavaScript
// * Task(2)
// & Array containing quotes and their authors
var quotes = [
    { text: "Be the change that you wish to see in the world.", author: "― Mahatma Gandhi" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "― Robert Frost" },
    { text: "A friend is someone who knows all about you and still loves you.", author: "― Elbert Hubbard" },
    { text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", author: "― Dr. Seuss" },
    { text: "A room without books is like a body without a soul.", author: "― Marcus Tullius Cicero" },
    { text: "So many books, so little time.", author: "― Frank Zappa" },
    { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "― Albert Einstein" },
    { text: "You only live once, but if you do it right, once is enough.", author: "― Mae West" },
    { text: "Always forgive your enemies; nothing annoys them so much.", author: "― Oscar Wilde" },
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "― Ralph Waldo Emerson" }
];
var lastIndex = -1;

// & Function to generate a new random quote
function generateQuote() {
    var randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex);
    lastIndex = randomIndex;
    var randomQuote = quotes[randomIndex];

    //? Display the new quote and author in the designated elements
    document.getElementById("quote-text").textContent = `"${randomQuote.text}"`;
    document.getElementById("author").textContent = `${randomQuote.author}`;
}

// & Event listener to generate a new quote when the button is clicked
document.getElementById("quote-btn").addEventListener("click", generateQuote);
