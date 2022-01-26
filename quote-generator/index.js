const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteButton = document.getElementById('new-quote');

//show new quote
function newQuote(){
    const quote = apiQuotes[Math.floor(Math.random()* apiQuotes.length)]
    authorText.textContent = quote.author;
    quoteText.textContent = quote.text;
    //check if authore field is blank and replace it with 'unknown'
    if(quote.authore){
        authorText.textContent = 'Unknown';
    }else{
        authorText.textContent = quote.author;
    }

    //check quote length to determine styling
    if (quote.text.length > 50){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote')
    }
}


// get quotes api

async function getQuotes(){
    const apiUrl = "https://type.fit/api/quotes";
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();

    } catch(error){
        alert(error)
        //catch error here
    }
}
//Tweet Quote
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl,'_blank');
}

//Event Listeners

twitterBtn.addEventListener('click', tweetQuote);
newQuoteButton.addEventListener('click', newQuote)
 

//On load


getQuotes();