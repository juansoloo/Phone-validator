const userInput = document.getElementById('user-input');
const result = document.getElementById('results-div');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');

// check if phone number is valid 

checkBtn.addEventListener('click', function() {
  const validateNum = userInput.value
  if (validateNum === '') {
    alert("Please provide a phone number");
    return;
  }
 
  const validRegex = /^1?[\s.-]?(?:\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
  const validNum = [validRegex];
  
  const isValid = (msg) => validNum.some((regex) => regex.test(msg));

  result.textContent = isValid(userInput.value)
    ? `Valid US number: ${userInput.value}`
    : `Invalid US number: ${userInput.value}`;
  
  userInput.value = "";
  
})


// clear the screen 

clearBtn.addEventListener('click', function() {
  result.textContent = ''
})