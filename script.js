const buttons = ['1','2','3','4','5','6', '7', '8','9','10','11','12'];
const classes = ['red', 'red', 'purple', 'purple', 'white', 'white', 'green', 'green', 'orange', 'orange', 'blue', 'blue']
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
shuffle(classes)

function makeButtons(c) {
  for (var i = 0; i < c.length; i++) {
    const card = document.createElement('button')
    card.className = 'card ' + classes[i]
    card.classList.add('hidden')
    document.getElementById("container").appendChild(card)
  }
}

class Game{
  constructor (board, buttons, p1, p2, turns){
    this.board = board
    this.buttons = buttons
    this.flipped1 = ''
    this.flipped2 = ''
    this.turn = 1
    this.score1 = 0
    this.score2 = 0
    this.p1 = p1
    this.p2 = p2
    this.turns = turns
  }
  updateDisplay(){
    const d1 = 'Player 1: '
    const d2 = "Player 2: "
    const t = 'Turn: '
    this.p1.innerHTML = d1 + this.score1
    this.p2.innerHTML = d2 + this.score2
    this.turns.innerHTML = t + this.turn
  }
  hide(){
    const cardButtons = document.querySelectorAll('.card')
    cardButtons.forEach(button => {
      if (! button.classList.contains('hidden')){
        button.classList.add('hidden')
      }
    })}
  
  
  flip(){
  let flips = 0
  const cardButtons = document.querySelectorAll('.card')
  cardButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.classList.contains('hidden')){
        flips += 1
        button.classList.remove('hidden')
        if (this.flipped1===''){
          this.flipped1=button
        }
        else if (this.flipped2===''){
          this.flipped2=button
        }
      }
      if (flips > 2){
        this.hide()
        flips = 0
        if (this.flipped1.classList[1]==this.flipped2.classList[1]){
          this.flipped1.classList.add('matched')
          this.flipped2.classList.add('matched')
          if (this.turn%2==1){
            this.score1 +=1
          }
          else {
            this.score2 += 1
          }
        }
        else {
          this.turn += 1
        }
        this.flipped1=''
        this.flipped2=''
        this.updateDisplay()
      }
    })
  })
}
    
  }


makeButtons(buttons);
const cardButtons = document.querySelectorAll('.card')
const cardContainer = document.querySelector('.cards-contaoner')
const player1 = document.querySelector('.score-1')
const player2 = document.querySelector('.score-2')
const turnCounter = document.querySelector('.turns')
const myGame = new Game (cardContainer, cardButtons, player1, player2, turnCounter)
myGame.flip()
myGame.updateDisplay()