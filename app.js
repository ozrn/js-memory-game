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

  //create board to put all images into a div
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/js-badge.svg')
      card.setAttribute('data-id', i)
      card.setAttribute('width', "135px")
      card.setAttribute('heigth', "150px")
      grid.appendChild(card)
    }
  }

  createBoard()
