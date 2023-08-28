/***************************************************************************
 *  																	                                     *
 *  Hello! Thank you for stopping by!	    							                   *
 *  Don't forget to follow me on: 										                     *
 *	LinkedIn: https://www.linkedin.com/in/funmilola-ereyomi-a88026268/   *
 *  Cheers, funmilola! 										 			                             *
 * 																		                                     *
***************************************************************************/

function signUp() {
    let element = document.getElementById("container_SignIn");
    element.classList.add("myStyle");
}

function signIn() {
    let element = document.getElementById("container_SignIn");
    element.classList.remove("myStyle");
}



// JavaScript code for validation and sign-up
const emailInputSignIn = document.getElementById('emailInputSignIn');
const emailErrorSignIn = document.getElementById('emailErrorSignIn');
const passwordInputSignIn = document.getElementById('passwordInputSignIn');
const passwordErrorSignIn = document.getElementById('passwordErrorSignIn');

const emailInputSignUp = document.getElementById('emailInputSignUp');
const emailErrorSignUp = document.getElementById('emailErrorSignUp');

emailInputSignIn.addEventListener('input', function () {
  const emailValue = emailInputSignIn.value.trim();
  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === '' || emailFormat.test(emailValue)) {
    emailErrorSignIn.textContent = '';
  } else {
    emailErrorSignIn.textContent = 'Please enter a valid email address';
  }
});

emailInputSignUp.addEventListener('input', function () {
  const emailValue = emailInputSignUp.value.trim();
  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === '' || emailFormat.test(emailValue)) {
    emailErrorSignUp.textContent = '';
  } else {
    emailErrorSignUp.textContent = 'Please enter a valid email address';
  }
});

passwordInputSignIn.addEventListener('input', function () {
  const passwordValue = passwordInputSignIn.value;

  if (passwordValue === '') {
    passwordErrorSignIn.textContent = '';
  } else {
    // Replace 'correctpassword' with the actual correct password
    const correctPassword = 'correctpassword';
    if (passwordValue !== correctPassword) {
      passwordErrorSignIn.textContent = 'Incorrect password';
    } else {
      passwordErrorSignIn.textContent = '';
    }
  }
});

// Simulating successful registration and redirecting to "Thank You" page
function performSignUp() {
  const emailInput = document.getElementById('emailInputSignUp');
  const userEmail = emailInput.value.trim();

  // Perform your sign-up logic here

  // Assuming successful registration
  // Redirect to the "Thank You" page with the user's email in the URL parameter
  window.location.href = `thank_you.html?email=${userEmail}`;
}

function submitSignUpForm() {
    const userEmail = document.getElementById('emailInputSignUp').value;
    window.location.href = 'thankyou.html?email=' + encodeURIComponent(userEmail);
    return false;
  }


  function signIn() {
    const emailInput = document.getElementById('emailInputSignIn');
  
    // Open the "Welcome Back" popup
    openWelcomeBackPopup(emailInput.value);
}

function openWelcomeBackPopup(userEmail) {
    const popupUrl = `welcome_back.html?email=${encodeURIComponent(userEmail)}`;
    window.location.href = popupUrl;
}
