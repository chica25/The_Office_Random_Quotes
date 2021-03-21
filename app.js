let quotes = [
    {
        "quoteArr": "I run a small fake ID company from my car with a laminating machine that I swiped from the Sheriff’s station.",
        "character": "Creed Bratton",
        "imageArr" : "./images/creed.jpg"
    },

    {
        "quoteArr": "The worst thing about prison was the dementors",
        "character": " Michael 'Prison Mike' Scott",
        "imageArr" : "./images/michael.jpg"
    },

    {
        "quoteArr": "How is it possible that in five years, I’ve had two engagements and only one chair?",
        "character": "Pam Beesley",
        "imageArr": "./images/pam.jpg"
    },

    {
        "quoteArr": "It's like I used to tell my wife. I do not apologize unless I think I’m wrong. And if you don’t like it you can leave. And I say the same thing to my current wife and I’ll say it to my next one, too.",
        "character": "Stanley Hudson",
        "imageArr": "./images/stanley.jpg"
    },

    {
        "quoteArr": "I love inside jokes. I hope to be a part of one someday.",
        "character": "Michael Scott",
        "imageArr": "./images/michael.jpg"
    },

    {
        "quoteArr": "For my new year's resolution, I gave up drinking... during the week.",
        "character": "Meredith Palmer",
        "imageArr": "./images/meredith.jpg"
    },

    {
        "quoteArr": "From time to time I send Dwight faxes. From himself. From the future.",
        "character": "Jim Halpert",
        "imageArr" : "./images/jim.png"
    },

    {
        "quoteArr": "If I had a gun with two bullets and I was in a room with Hitler, Bin Laden, and Toby, I would shoot Toby twice.",
        "character": "Michael Scott",
        "imageArr" : "./images/michael.jpg"
    },

    {
        "quoteArr": "Pam, come on. 'I like your food?' Come on, stir the pot, stir the melting pot, Pam! Let's do it, let's get ugly, let's get real",
        "character": "Michael Scott",
        "imageArr" : "./images/michael.jpg"
    },

    {
        "quoteArr": "One day Michael came in and complained about a speed bump on the highway. I wonder who he ran over then.",
        "character": "Jim Halpert",
        "imageArr" : "./images/jim.jpg"
    }
]


const button = document.querySelector('#btn');
const quoteArr = document.querySelector('#quote');
const char = document.querySelector('#character');
const images = document.querySelector('#img')


button.addEventListener('click', getCharacters);

function getCharacters(){
    let num = Math.floor(Math.random() * quotes.length)
    quote.innerHTML = '<span></span>' + quotes[num].quoteArr + '<span></span>';
    char.innerHTML = '<span></span>' + quotes[num].character;
    images.innerHTML = '<img src=./images/' + quotes[num].imageArr + '.jpg alt="character images">';
   

}



