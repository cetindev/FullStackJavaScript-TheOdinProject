const keyTypes = {
  NUMBER: 'number',
  OPERATOR: 'operator',
  BACKSPACE: 'backspace',
  ACTION: 'action',
  EQUALS: 'equals',
};

const state = {
  numbers: [],
  result: 0,
  currentOperator: null,
  previousKeyType: keyTypes.NUMBER,
}

let currentKey = {
  value: null,
  type: null,
};

const nodeTypes = {
  NUMBER: 'number',
  OPERATOR: 'operator',
}

const nodes = {
  numbers: [],
  currentOperator: null,
  result: 0,
}

getCurrentKeyType = (keyValue) => {
  let keyType;
  switch (keyValue) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
    case '.':
      keyType = keyTypes.NUMBER;
      break;
    case '÷':
    case '×':
    case '+':
    case '-':
    case '%':
      keyType = keyTypes.OPERATOR;
      break;
    case '=':
      keyType = keyTypes.EQUALS;
      break;
    case 'CE':
    case 'C':
    case '⌫':
      keyType = keyTypes.ACTION;
      break;
    default:
      break;
  }
  return keyType;
}

createNode = (node) => {
  let operations = document.querySelector('.operations');
  let element = document.createElement('span');
  element.classList.add(node);
  operations.appendChild(element);
  return element;
}

generateResult = (operator) => {
  let currentIndex = state.numbers.length - 1;
  let currentNumber = state.numbers[currentIndex];

  if (state.numbers.length > 1) {
    switch (operator) {
      case '+':
        state.result = parseFloat(state.result) + parseFloat(currentNumber);
        break;
      case '-':
        state.result = parseFloat(state.result) - parseFloat(currentNumber);
        break;
      case '÷':
        state.result = parseFloat(state.result) / parseFloat(currentNumber);
        break;
      case '×':
        state.result = parseFloat(state.result) * parseFloat(currentNumber);
        break;
      case '%':
        state.result = (parseFloat(state.result) / 100) * parseFloat(currentNumber);
        break;
      default:
        break;
    }
  } else {
    state.result = currentNumber;
  }

  changeResultText();
}

changeResultText = () => {
  const { result } = state;

  let resultNode = document.querySelector('.result');
  let resultLength = result.toString().length;
  if (resultLength > 10 && resultLength <= 15) {
    resultNode.style.fontSize = '2rem';
  } else if (resultLength >= 15) {
    resultNode.style.fontSize = '1.5rem';
  } else {
    resultNode.style.fontSize = '3rem';
  }
  resultNode.innerText = result.toString();
}

numberKeyPressed = () => {
  if (!state.numbers.length && !nodes.numbers.length) {
    state.numbers.push(0);
    nodes.numbers.push(createNode(nodeTypes.NUMBER));
  }

  let currentIndex = state.numbers.length - 1;

  if (state.numbers[currentIndex] === 0 && currentKey.value !== '.') {
    if (currentKey.value !== '0') {
      state.numbers[currentIndex] = currentKey.value;
    }
  } else {
    state.numbers[currentIndex] = state.numbers[currentIndex] + '' + currentKey.value;
  }

  nodes.numbers[currentIndex].innerText = state.numbers[currentIndex];
}

operatorKeyPressed = () => {
  if (state.previousKeyType !== keyTypes.OPERATOR) {
    generateResult(state.currentOperator);

    nodes.currentOperator = createNode(nodeTypes.OPERATOR);
    state.numbers.push(0);
    nodes.numbers.push(createNode(nodeTypes.NUMBER));
  }

  state.currentOperator = currentKey.value;
  nodes.currentOperator.innerText = currentKey.value;
}

equalsKeyPressed = () => {
  let currentIndex = state.numbers.length - 1;
  generateResult(state.currentOperator);

  setDefault();

  let operationsNode = document.querySelector('.operations');
  operationsNode.innerHTML = '';

  console.log(state.result, state.numbers[currentIndex], state.currentOperator);
}

actionKeyPressed = () => {
  switch (currentKey.value) {
    case 'CE':
      clearEntryKeyPressed();
      break;
    case 'C':
      clearKeyPressed();
      break;
    case '⌫':
      backspaceKeyPressed();
      break;
    default:
      break;
  }
}

backspaceKeyPressed = () => {
  if (state.previousKeyType === keyTypes.OPERATOR) {
    return;
  }

  let currentIndex = state.numbers.length - 1;
  let lastNumber = state.numbers[currentIndex];
  let resultWithoutLastChar;

  if (!lastNumber) {
    return;
  }

  if (lastNumber.toString().length == 1) {
    resultWithoutLastChar = '0';
  } else {
    resultWithoutLastChar = lastNumber.toString().substring(0, lastNumber.toString().length - 1);
  }

  state.numbers[currentIndex] = parseFloat(resultWithoutLastChar);
  nodes.numbers[currentIndex].innerText = resultWithoutLastChar;

  console.log(`backspace pressed ${lastNumber} => ${resultWithoutLastChar}`);
}

setDefault = () => {
  state.numbers = [];
  state.result = 0;
  state.currentOperator = null;
  state.previousKeyType = keyTypes.NUMBER;

  currentKey.type = null;
  currentKey.value = null;

  nodes.numbers = [];
  nodes.currentOperator = null;
  nodes.result = 0;
}

clearKeyPressed = () => {
  setDefault();

  let resultNode = document.querySelector('.result');
  resultNode.innerText = '0';

  let operationsNode = document.querySelector('.operations');
  operationsNode.innerHTML = '';
}

clearEntryKeyPressed = () => {
  let currentIndex = state.numbers.length - 1;
  let numberNodes = document.querySelectorAll('.operations span.number');

  if (numberNodes.length < 1) {
    return;
  }

  state.numbers[currentIndex] = 0;
  numberNodes[currentIndex].innerHTML = '';
}

keyPressed = (key) => {
  const pressedKey = key.target.dataset.key;
  currentKey.value = pressedKey;
  currentKey.type = getCurrentKeyType(pressedKey);

  if (currentKey.type === keyTypes.NUMBER) {
    numberKeyPressed();
  } else if (currentKey.type === keyTypes.OPERATOR) {
    operatorKeyPressed();
  } else if (currentKey.type === keyTypes.EQUALS) {
    equalsKeyPressed();
  } else if (currentKey.type === keyTypes.ACTION) {
    actionKeyPressed();
  }

  state.previousKeyType = getCurrentKeyType(currentKey.value);
  console.log(currentKey);
}

let wrapper = document.querySelector('.wrapper');
wrapper.addEventListener('click', keyPressed);