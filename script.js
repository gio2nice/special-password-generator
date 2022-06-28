// Assignment Code
var generateBtn = document.querySelector("#generate");

var numList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ]
var symList = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"]
var lowercaseList = ["a", "b", "c" , "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseList = []

var optionsBasket = []


function randInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var random = Math.random()
  return Math.floor(min*(1 - random) + random*max)
}



function randomSelect(list) {
  return list[randInt(list.length)]
}

function generatePassword() {
 // console.log("This work!");
 // return "Generated Password";
 // Prompt the user for password;
  var userInfo = prompt("Enter how long you want your password to be. (numbers only)")

  var wordLength = parseInt(userInfo)

  if (isNaN(wordLength)) {
    alert("Uh-oh, thats not a number!")
    return null
  }

  if (wordLength < 8 || wordLength > 128) {
    alert("Length of password must be between 8 & 128 characters")
    return 
  }
  
  var userNum = confirm("Shall we include numbers in your password?") 
  var userUppercase = confirm("Shall we include uppercase letters in your password?") 
  var userSymbols = confirm("Shall we include symbols in your password?") 
  var userLowercase = confirm("Shall we include lowercase in your password?") 



  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }

  if (userNum === true) {
    optionsBasket.push(numList)
  }

  if (userUppercase === true) {
    optionsBasket.push(uppercaseList)
  }

  if (userSymbols === true) {
    optionsBasket.push(symList)
  }

  if (userLowercase === true) {
    optionsBasket.push(lowercaseList)
  }

  if (optionsBasket.length === 0) {
    optionsBasket.push(lowercaseList)
  }

  //console.log(optionsBasket)

  var generatedCode = ""
  
  for (var i = 0; i < wordLength; i++) {
    var specialList = randomSelect(optionsBasket)
    var specialChar = randomSelect(specialList)
    generatedCode += specialChar
  }

  //console.log(generatedCode)
  return generatedCode 


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);
