function appendValue(val) {
  var display = document.getElementById('display');
  display.value = display.value + val;
}

function clearDisplay() {
  var display = document.getElementById('display');
  display.value = '';
}

function deleteLast() {
  var display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculate() {
  var display = document.getElementById('display');
  if (display.value !== '') {
    try {
      display.value = Function('"use strict"; return (' + display.value + ')')();
    } catch (e) {
      display.value = 'Error';
      setTimeout(clearDisplay, 1200);
    }
  }
}