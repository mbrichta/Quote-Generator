var movieList = document.getElementById("movieList");
var bookList = document.getElementById("bookList");

document.getElementById('movies').addEventListener('click', function () {
  movieList.innerHTML = ''
  quotes.genQuote('movies')
})

document.getElementById('books').addEventListener('click', function () {
  bookList.innerHTML = ''
  quotes.genQuote('books')
})

document.getElementById('delete').addEventListener('click', function () {
  bookList.innerHTML = ''
  movieList.innerHTML = ''
})

var quotes = {

  books: {

    start: [
      "As long as you keep going, you'll keep getting better.",
      "Technology has forever changed the world we live in. We're online, in one way or another, all day long.",
      "At the end of the day, you are solely responsible for your success and your failure.",
      "Your personal life, your professional life, and your creative life are all intertwined. I went through a few very difficult years where I felt like a failure.",
      "Through a long and painful process,",
      "Sometimes we make the process more complicated than we need to.",
      "If you live long enough, you'll make mistakes. But if you learn from them, you'll be a better person.",
      "Whoever fights monsters should see to it that in the process he does not become a monster."
    ],

    mid: [
      "And as you get better, you gain more confidence.",
      "Our phones and computers have become reflections of our personalities, our interests, and our identities.",
      "And the sooner you realize that, you accept that, and integrate that into your work ethic, you will start being successful.",
      "But it was actually really important for me to go through that.",
      "I've learned that happiness is an inside job - not based on anything or anyone in the outer material world.",
      "We will never make a journey of a thousand miles by fretting about how long it will take or how hard it will be.",
      "It's how you handle adversity, not how it affects you.",
      "And if you gaze long enough into an abyss,"
    ],
    end: [
      "That alone is success.",
      "They hold much that is important to us.",
      "As long as you blame others for the reason you aren't where you want to be, you will always be a failure.",
      "Struggle, for me, is the most inspirational thing in the world at the end of the day - as long as you treat it that way.",
      "I've become a different and better person - not perfect, but still a work in progress.",
      "We make the journey by taking each day step by step and then repeating it again and again until we reach our destination.",
      "The main thing is never quit, never quit, never quit.",
      "the abyss will gaze back into you."
    ]
  },
  movies: {
    start: [
      "Don’t ever let somebody tell you you can’t do something, not even me. Alright?",
      "Just keep swimming. Just keep swimming.",
      "I know what I have to do now.",
      "Nobody is gonna hit as hard as life, but it ain’t how hard you can hit.",
      "Kid, there are heroes and there are legends."
    ],
    mid: [
      "You dream, you gotta protect it. People can’t do something themselves,",
      "Just keep swimming, swimming, swimming.",
      "I’ve got to keep breathing because tomorrow the sun will rise.",
      "It’s how hard you can get hit and keep moving forward.",
      "Heroes get remembered, but legends never die."
    ],
    end: [
      "they wanna tell you you can’t do it. If you want something, go get it. Period.",
      "What do we do? We swim, swim.",
      "Who knows what the tide could bring?",
      "It’s how much you can take, and keep moving forward. That’s how winning is done.",
      "Follow your heart, kid, and you’ll never go wrong."
    ],
  },
  randomIndx(type, part) {
    return Math.floor(Math.random() * this[type][part].length)
  },
  randomQuote: function (type) {
    let quote = ''
    Object.entries(this[type]).forEach(([part, value]) => {
      quote += ' ' + value[this.randomIndx(type, part)]
    })
    return quote.trimLeft()
  },

  genQuote: function (type) {
    var selector = document.getElementById("list").value;

    if (type == "movies") {
      for (var i = 0; i < selector; i++) {
        var li = document.createElement("li");
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(this.randomQuote(type)));
        movieList.appendChild(li)
      }
    }
    if (type == "books") {
      for (var i = 0; i < selector; i++) {
        var li = document.createElement("li");
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(this.randomQuote(type)));
        bookList.appendChild(li)
      }
    }
  },

  deleteQuotes: function () {
    movieList.innerHTML = "";
    bookList.innerHTML = "";
  }
}
