const button = document.querySelector("#js-new-quote");
button.addEventListener('click', getQuote);

//const answerButton = document.querySelector("#js-tweet");
//answerButton.addEventListener('click, showAnswer');

const endpoint = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

async function getQuote(){
    //console.log("It works");
    try{
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText)
        }
        const json = await response.json();
        //console.log(json.question);
        displayQuote(json.question);
        showAnswer(json.answer);
        

        const answerButton = document.querySelector("#js-tweet");
        answerButton.addEventListener('click', showAnswer(json.answer));

    }
    catch (err) {
        console.log(err);
        alert('Failed to fetch new trivia');
    }
}

function displayQuote(quote){
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}

function showAnswer(quote){
    const quoteText = document.querySelector("#js-answer-text");
    quoteText.textContent = quote;
}

getQuote();