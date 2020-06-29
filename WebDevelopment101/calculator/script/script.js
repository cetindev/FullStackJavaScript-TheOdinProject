//Script will be written here
// Check if first time typing
let firstInput = true
// To check if decimal can be places
let decimalAllowed = true
// Track how many brackets have been opened
let openedBrackets = 0
// Error message for division by zero
const errorMessage = "I'm sorry Dave"

// Create a list of sign operators for use in function comparisons
//domdaki 0 dan 9 a kadar olan buton veya elementleri alıyor ve signOperators dizisine atılıyor
const signOperators = [...document.querySelectorAll(".signOperator")].map(signOperator => signOperator.value)
// Create a list of operator for use in function comparisons 
//Burda da ara işlemler için  kullanılan parantez  clear silme butonlarını operators dizisine attık
const operators = [...document.querySelectorAll(".operator")].map(operator => operator.value)
// Create a list of operands for use in function comparisons  
//Burda daaynı işaretleri operands dizisine gönderdik
const operands = [...document.querySelectorAll(".operand")].map(operand => operand.value)
//Çıktı ekranı yani sonuşların gösterildiği en üsteki boş yer veya entera basıldığında çıkan sonuç yeri
let prevOutputID = document.getElementById("previousOutput") // Previous Output handle
prevOutputID.textContent = ""
//butonlara basıldığında sayıların gözüktüğü yer direckt 0 sıfır old. için sıfır gönderdik 
let outputID = document.getElementById("displayOutput") // Output handle
outputID.textContent = "0"
//Bütün tuşlar keyboardContainer e attı
let keyboardContainer = document.querySelectorAll("#keyboard input")
//Burdaki bütün button veya  sayı veya  tuşları keyboardContainer a ttı ve bütün tuşları click olduğunda dinleyecek 
keyboardContainer.forEach(keyboard => {
  keyboard.addEventListener("click", e => {
    key = e.target.value
    if (signOperators.indexOf(key) > -1) appendSignOperator(key)
    else if (operators.indexOf(key) > -1) appendOperator(key)
    else if (operands.indexOf(key) > -1) appendOperand(key)
    else return
    if (key != "⇤" && key != "Clear") firstInput = false
  })
})
// Keyboard event handler
window.addEventListener("keydown", checkKey, false)

// Parses keystrokes against a regex pattern. Makes appropriate substitutions and calls the appropriate method.
function checkKey(e) {
  let key = e.key
  let regexPattern = /[0-9\.\+\-\*\x\/\=\(\)\c]|Enter|Backspace|Delete/g;
  if (regexPattern.test(key)) {
    if (key == "Enter") key = "="
    if (key.toLowerCase() == "x" || key == "*") key = "x"
    if (key == "/") key = "÷"
    if (key.toLowerCase() == "c") key = "Clear"
    if (key == "Backspace" || key == "Delete") key = "⇤"

    if (signOperators.indexOf(key) > -1) appendSignOperator(key)
    else if (operators.indexOf(key) > -1) appendOperator(key)
    else if (operands.indexOf(key) > -1) appendOperand(key)
    else return
    if (key != "⇤" && key != "Clear") firstInput = false
  }
}

function appendOperand(operand) {
  if (operand == "." && !decimalAllowed) return animateError()
  if (operand == "0" && firstInput) return animateError()

  // If previous character is 0 and preceding character is a sign operator or empty space, do not accept any more zeros. Prevents scenarios like 1+002
  if (matchNthChar(-1, "0") &&
    (matchNthChar(-2, signOperators) || matchNthChar(-2, ""))) {
    if (operand == "0") return animateError()
    if (operand == ".") decimalAllowed = false
    else outputID.textContent = outputID.textContent.slice(0, -1)
    outputID.textContent += operand
  }
  else {
    if (operand == ".") decimalAllowed = false
    if (firstInput) outputID.textContent = operand
    else outputID.textContent += operand
  }
}

function appendSignOperator(operator) {
  switch (operator) {
    case "=":
      // Get expression as string from output text box
      const exp = outputID.textContent
      // Calc value based off string
      let expCalc = operate(exp)
      // Round value to 3 decimal places if needed
      let expCalcRounded = roundToN(expCalc, 3)

      // If divided by zero, send message to user
      if (!isFinite(expCalcRounded)) {
        outputID.textContent = errorMessage
        firstInput = true
        return animateError()
      }

      //If result is zero, treat result as first input
      if (expCalcRounded == "0") firstInput = true

      // If result contains decimal, prevent another decimal placement.
      if (expCalcRounded.toString().includes(".")) decimalAllowed = false
      else decimalAllowed = true

      // Write result to output
      outputID.textContent = expCalcRounded

      // Add line break in previous output div, then add expression. Update screen.
      prevOutputID.innerHTML += "&#10;"
      prevOutputID.textContent += exp
      updateScroll()
      break

    case "-":
      // Allow minus sign to function as negative sign if last characters are not already sign operators
      if (matchNthChar(-1, "-") ||
        (matchNthChar(-2, signOperators) && matchNthChar(-1, signOperators))) {
        return animateError()
      }
      if (firstInput) outputID.textContent = operator
      else outputID.textContent += operator
      decimalAllowed = true
      break

    default:
      // If previous character is open bracket or sign operator, then do not accept sign input. Prevents scenarios such as 27(*5) and 8*/2
      if (matchNthChar(-1, "(") ||
        matchNthChar(-1, signOperators) ||
        (firstInput && outputID.textContent == errorMessage)) {
        return animateError()
      }
      outputID.textContent += operator
      decimalAllowed = true
      break
  }
}


function appendOperator(operator) {
  switch (operator) {
    case "⇤":
      back()
      break

    case "Clear":
      clear()
      break

    case "(":
      // If open bracket, increment bracket counter
      if (firstInput) outputID.textContent = operator
      else outputID.textContent += operator
      openedBrackets++
      break

    case ")":
      // If close bracket, make sure open bracket, sign operator or open bracket/decimal does not immediately preceed it. Avoids scenarios like "()", "45+(2+)", and "(.)"          
      if (!openedBrackets ||
        matchNthChar(-1, "(") ||
        matchNthChar(-1, signOperators) ||
        (matchNthChar(-2, "(") && matchNthChar(-1, "."))) {
        return animateError()
      }

      outputID.textContent += operator
      openedBrackets--
      break

    default:
      break
  }
}

// Evaluate arithmetic string and return value
function operate(str) {
  return Function(`"use strict"; return (${regexParse(str)})`)()
}

// Rounds num to n decimal places only if needed. e.g. 4/2=2 2/4=0.5, 5/3=1.667
function roundToN(num, n) {
  return (Math.round(num * 10 ** n) / 10 ** n)
}

// Get's nth char of string. Works with postive and negative values
function getNthChar(n) {
  const str = outputID.textContent
  if (n >= 0) return str.charAt(n)
  else return str.charAt(str.length + n)
}

// Checks if string at char position matches symbol.
function matchNthChar(n, match) {
  return match.indexOf(getNthChar(n)) > -1
}

// Pass arithmetic expression as string to calc result. Using Regex to find/replace necessary terms. Could have used event handler logic, but wanted to practice some Regex black magic
function regexParse(str) {
  // Finds and replaces "x" multiply symbol with "*"
  const regexMultiplySign = /x/g
  // Finds and replaces "÷" multiply symbol with "/"
  const regexDivideSign = /÷/g
  // Finds opening brackets preceded by a numeric or decimal in order to replace with "*(" e.g. 56(10) -> 56*(10)
  const regexOpeningBracket = /(?<=[0-9\.\)])\(/g
  // Finds closing brackets succeeded by a numeric or decimal in order to replace with ")*" e.g. (10).1 -> (10)*.1
  const regexClosingBracket = /\)(?=[0-9\.\(])/g

  // Replace necessary "x", "(", ")" symbols with "*", "*(", ")*" symbols respectivly
  return strRegex = str
    .replace(regexMultiplySign, "*")
    .replace(regexDivideSign, "/")
    .replace(regexOpeningBracket, "*(")
    .replace(regexClosingBracket, ")*")
}

// removes last character from output
function back() {
  // Keeps track of opened brackets if there are any. Keeps track of decimals. 
  if (matchNthChar(-1, ")")) openedBrackets++
  if (matchNthChar(-1, "(")) openedBrackets--
  if (matchNthChar(-1, ".")) decimalAllowed = true
  // Remove last element from output
  outputID.textContent = outputID.textContent.slice(0, -1)
  // If result of backspace still includes "." prevent decimal
  if (outputID.textContent.includes(".")) decimalAllowed = false

  if (outputID.textContent == "") {
    // When backspacing see if previous output is not empty
    if (prevOutputID.textContent != "") {
      // Split previous expressions on newline, pop last expression, then rejoin. Display last expression in current output.
      let lastPrevOutputArray = prevOutputID.textContent.split("\n")
      let lastExp = lastPrevOutputArray.pop()
      prevOutputID.textContent = lastPrevOutputArray.join("\n")
      outputID.textContent = lastExp
      updateScroll()
    }
    else {
      outputID.textContent = "0"
      firstInput = true
    }
  }
}

// erase display and reset calculator.
function clear() {
  outputID.textContent = "0"
  prevOutputID.textContent = ""
  firstInput = true
  decimalAllowed = true
  openedBrackets = 0
}

// Updates scroll wheel in previous output to always be at bottom.
function updateScroll() {
  prevOutputID.scrollTop = prevOutputID.scrollHeight;
}

// In the event of any error (primarily from operate() function), call the error animation handler.
window.onerror = () => animateError()

// Adds an error animation class to the display. Works by initially removing the error class, triggering a reflow by taking a measurement of the offset height, then re-adding the error class.
function animateError() {
  let outputElem = document.querySelectorAll(".output")
  outputElem.forEach(elem => {
    elem.classList.remove("error")
    elem.offsetHeight; /* trigger reflow */
    elem.classList.add("error")
  })
}