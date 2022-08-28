const cardArray = [{
    name: "aurelia",
    img: "images/aurelia.svg"
  },

  {
    name: "backbone",
    img: "images/backbone.svg"
  },

  {
    name: "ember",
    img: "images/ember.svg"
  },

  {
    name: "node.js",
    img: "images/nodejs.svg"
  },

  {
    name: "react",
    img: "images/react.svg"

  },

  {
    name: "vue",
    img: "images/vue.svg"
  },

  {
    name: "aurelia",
    img: "images/aurelia.svg"
  },

  {
    name: "backbone",
    img: "images/backbone.svg"
  },

  {
    name: "ember",
    img: "images/ember.svg"
  },

  {
    name: "node.js",
    img: "images/nodejs.svg"
  },

  {
    name: "react",
    img: "images/react.svg"

  },

  {
    name: "vue",
    img: "images/vue.svg"
  }
]

  const grid = document.querySelector('.grid')
  let cardsChosen = []
  let cardsChosenId = []

  //create board to put all images into a div
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/js-badge.svg')
      card.setAttribute('data-id', i)
      card.setAttribute('width', "135px")
      card.setAttribute('heigth', "150px")
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check the two clicked cards if they are matched
    function checkMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      console.log(optionOneId)
      const optionTwoId = cardsChosenId[1]
      console.log(optionTwoId)
      console.log(cards)

      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/js-badge.svg')
        cards[optionTwoId].setAttribute('src', 'images/js-badge.svg')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', 'images/smiley.png')
        cards[optionTwoId].setAttribute('src', 'images/smiley.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
      } else {
        cards[optionOneId].setAttribute('src', 'images/js-badge.svg')
        cards[optionTwoId].setAttribute('src', 'images/js-badge.svg')
      }
      cardsChosen = []
      cardsChosenId = []
    }


  //flip the card when clicked
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2 ) {
          setTimeout(checkMatch, 500)
        }
    }


  createBoard()
