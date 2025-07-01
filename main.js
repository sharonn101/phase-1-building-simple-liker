// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const icon =document.getElementsByClassName("like-glyph");
icon.addEventListener("click",postLiker)
function postLiker(e) {
  mimicServerCall()
    .catch(function(error) {
      const err = document.getElementById("modal")
      err.classList.remove("hidden");
      setTimeout(function() {
        err.classList.add("hidden");
      }, 3000);
    })
    .then(function(response) {
      if (icon.innerHTML === EMPTY_HEART) {
        icon.innerHTML = FULL_HEART;
        icon.classList.add("activated-heart");
      } else {
        icon.innerHTML = EMPTY_HEART;
        icon.classList.remove("activated-heart");
      }
    });
}



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
