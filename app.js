document.addEventListener("DOMContentLoaded", getQuote);
const quote = document.querySelector('.message');

function getQuote(){
    fetch('https://talaikis.com/api/quotes/random/')
    .then(res => res.json())
    .then(data => {
        quote.innerHTML = data.quote;
    });
}

