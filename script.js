// Rhaj Calculator Relapse

const display = document.getElementById("display");
display.value = '0';

const validOperators = ['+', '-', '*', '/'];

// para gumana rin ang calculator gamit ang keyboard
document.addEventListener('keydown', (event) => {
  if (isBusy) return;
  const key = event.key;
  if (key >= '0' && key <= '9')  {
    displayInput(key);
  } else if (key === '.') {
    addDot();
  } else if (validOperators.includes(key)) {
    addOperator(key);
  } else if (key === 'Backspace') {
    backSpace();
  } else if (key === 'Escape') {
    clearDisplay();
  } else if (key === 'Enter' || key === '=') {

      
    const audio = document.getElementById("myAudio");
    audio.play();
  

    display.value = "";
    calculate();
  }
});

// para sa pag input ng numbers
function displayInput(val) {
  /*if(display.value.charAt(0) === '0') display.value = display.value.slice(0, -1);
  display.value += input;*/
  if (isBusy) return;
    
  if (["0", "Error", "NaN", "Infinity"].includes(display.value)) {

    display.value = val;

  } else if (!["Error", "NaN", "Infinity"].includes(display.value)) {

    display.value += val;
  }
    
}
// para sa pag add ng dot
function addDot() {
  if (isBusy) return;
  const dot = '.';

  if (["Error", "NaN", "Infinity"].includes(display.value)) {
    return;
  }

  // hahatiin ang element kapag nag add ng operator
  const parts = display.value.split(/[\+\-\*\/]/);
  const currentNumber = parts[parts.length - 1]; // get last element in the array


  if (currentNumber.includes('.')) {
  return;
  }

  display.value += '.';
}

// para sa pag add ng operator
function addOperator(val) {
  if (isBusy) return;
  if (["Error", "NaN", "Infinity"].includes(display.value)) {
    return;
  }

  const lastChar = display.value.slice(-1); // get last element in the array

  if (validOperators.includes(val) && validOperators.includes(lastChar)) {
    display.value = display.value.slice(0,-1) + val; 
  return;
  }

  display.value += val;
}

// para sa pag delete ng current character sa display
function backSpace() { 
  if (isBusy) return;
  if (["Error", "NaN", "Infinity"].includes(display.value) || display.value.length === 1) { 

    display.value = "0";

  } else {

    display.value = display.value.slice(0, -1); // get everything exept the last element in the array
    
  }
}

// para sa pag clear display
function clearDisplay() {
  if (isBusy) return;
  display.value = "0";
}


let isBusy = false;


function calculate() {
  isBusy = true;
  
  display.value = "Miss You:("
  setTimeout(() => {
    isBusy = false;
    display.value = "0";
  }, 28000);
}