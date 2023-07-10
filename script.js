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
makeButtons(buttons);


const cardButtons = document.querySelectorAll('.card')
cardButtons.forEach(button => {
    button.addEventListener('click', () => {
  
      if (button.classList.contains('hidden')){
        button.classList.remove('hidden')
      }
      else {
        button.classList.add('hidden')
      }
    })
  })