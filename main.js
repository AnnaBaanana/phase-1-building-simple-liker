// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const domLoaded = () => {
  document.addEventListener('DOMContentLoaded', 
  () => { 
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
            heart.textContent= FULL_HEART
            heart.className = 'activated-heart'
          }
          else {
            heart.textContent = EMPTY_HEART
            heart.className = 'like-glyph'
          }
        }}).catch(error => {
          console.log(error)
          const modal = document.querySelector('#modal')
          modal.className=''
          console.log(modal.className)
          modal.textContent = `${error}`
          setTimeout(()=>
          modal.className='hidden',3000)
        })
    })
  }}

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
