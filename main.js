// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  const hearts = document.querySelectorAll('.like-glyph');
  hearts.forEach(heart => {
    heart.addEventListener('click', handlesHeartClick);
  });
});

// Function that handles heart clicks
function handleHeartClick(event) {
  const heart = event.target;

  // Check if the heart is empty or full
  if (heart.innerText === EMPTY_HEART) {
    mimicServerCall()
      .then(() => {
        heart.innerText = FULL_HEART;
        heart.classList.add('activated-heart');
      })
      .catch(error => {
        displayError(error);
      });
  } else {
    heart.innerText = EMPTY_HEART;
    heart.classList.remove('activated-heart');
  }
}

// Function to display error modal
function displayError(error) {
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modal-message');
  
  modalMessage.innerText = error;
  modal.classList.remove('hidden');
  
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 3000);
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
