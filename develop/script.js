// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
 // console.log("This work!");
 // return "Generated Password";
 // Prompt the user for password;
  var userInfo = prompt("Pick a number between 8 & 128 to generate password?")

  var wordLength = parseInt(userInfo)

  if (isNaN(wordLength)) {
    alert("Uh-oh, thats not a number!")
    return
  } else {
    alert("Great, you picked a valid number!")
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
