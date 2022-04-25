// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const domLoaded = () => {
  document.addEventListener('DOMContentLoaded', 
  () => { 
    hideError()
    likeHandler()})
}

function likeHandler() {
  const likeElements = document.querySelectorAll('.like')
  console.log(likeElements)
  for (like of likeElements) {
    like.addEventListener('click', (e) => {
      e.preventDefault()
      //console.log(e.path)
      const likedArticle = e.path[4].id
      console.log(likedArticle)
      const heart = document.getElementById(likedArticle).querySelector('ul').querySelector('span')
      console.log(heart)
      mimicServerCall().then(res => {
        console.log(res)
        if (res === 'Pretend remote server notified of action!') {
          if (heart.className === 'like-glyph') {
            heart.className = 'activated-heart'
          }
          else {
            heart.className = 'like-glyph'
          }
        } else {
          res => {
            showError()
          }
          }
        }
      )
    })
  }}

  const hideError = () => {
      const modal = document.querySelector('#modal')
      modal.className = 'hidden'
  }

  const showError = () => {
    const modal = document.querySelector('#modal')
    console.log(modal.className)
    modal.className=''
    console.log(modal.className)
}

domLoaded()



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
