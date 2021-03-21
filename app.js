let quotes = [
    {
        "quoteArr": '"I run a small fake ID company from my car with a laminating machine that I swiped from the Sheriff’s station."',
        "character": "Creed Bratton",
        "imageArr" : "creed.jpg"
    },

    {
        "quoteArr": '"How is it possible that in five years, I’ve had two engagements and only one chair?"',
        "character": "Pam Beesley",
        "imageArr": "pam.jpg"
    },

    {
        "quoteArr": '"Actually"',
        "character": "Oscar Martinez",
        "imageArr": "oscar.jpg"
    },

    {
        "quoteArr": '"Who is Justice Beaver?"',
        "character": "Dwight Schrute",
        "imageArr" : "dwight.jpg"
    },

    {
        "quoteArr": "'It's like I used to tell my wife. I do not apologize unless I think I’m wrong. And if you don’t like it you can leave. And I say the same thing to my current wife and I’ll say it to my next one, too.'",
        "character": "Stanley Hudson",
        "imageArr": "stanley.jpg"
    },

    {
        "quoteArr": '"I hooked up with her on February 13th."',
        "character": "Ryan Howard",
        "imageArr": "ryan.png"
    },

    {
        "quoteArr": '"Dinkin Flicka."',
        "character": "Darryl Philbin",
        "imageArr" : "darryl.jpg"
    },

    {
        "quoteArr": "'For my new year's resolution, I gave up drinking... during the week.'",
        "character": "Meredith Palmer",
        "imageArr": "meredith.jpg"
    },

    {
        "quoteArr": '"From time to time I send Dwight faxes. From himself. From the future."',
        "character": "Jim Halpert",
        "imageArr" : "jim.png"
    },

    {
        "quoteArr": '"If I had a gun with two bullets and I was in a room with Hitler, Bin Laden, and Toby, I would shoot Toby twice."',
        "character": "Michael Scott",
        "imageArr" : "michael.jpg"
    },

    {
        "quoteArr": "'I can't control what I say to people. I spend the whole day talking.'",
        "character": "Kelly Kapoor",
        "imageArr" : "kelly.jpg"
    },

    {
        "quoteArr": "'I don't think Michael intended to punish me by putting Ryan back here with Kelly. But if he did intend that- Wow. Genius.'",
        "character": "Toby Flenderson",
        "imageArr" : "toby.jpg"
    }
]


const button = document.querySelector('#btn');
const quoteArr = document.querySelector('#quote');
const char = document.querySelector('#character');
const images = document.querySelector('#img')


button.addEventListener('click', getCharacters);

function getCharacters(){
    let num = Math.floor(Math.random() * quotes.length)
    quote.innerHTML = `${quotes[num].quoteArr}`;
    char.innerHTML = `–– ${quotes[num].character}`;
    images.src=`./images/${quotes[num].imageArr}`;
   

}



