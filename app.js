const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name:'pizza',
        img: 'images/pizza.png'
    },
        {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name:'pizza',
        img: 'images/pizza.png'
    }
]

console.log(cardArray)
<<<<<<< HEAD

const gridDisplay = document.querySelector('#grid')  // # = id

console.log(gridDisplay)

function createBoard() {
  for(let i = 0; i<10;i++) {
    const card = document.createElement('img');
    card.setAttribute('src','images/blank.png')
    card.setAttribute('data-id',i)
    gridDisplay.appendChild(card)
}
}

createBoard()
=======
>>>>>>> 3b7d0f39004ed7d57a4268731afff10fff133041
