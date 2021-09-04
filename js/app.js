function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    // console.log('got 3 pin number & again 4', pin);
    return getPin();
  }
}

function generatePin() {
  const pin = getPin();
  document.getElementById("display-input").value = pin;
}

document.getElementById("key-pad").addEventListener("click", function (event) {
  // console.log(event.target.innerText);
  const number = event.target.innerText;
  const calcInput = document.getElementById("type-numbers");
  if (isNaN(number)) {
    if (number == "C") {
      calcInput.value = "";
    }
    // console.log(number);
  } else {
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
  }
});

function veryfyPin() {
  const pin = document.getElementById("display-input").value;
  const typedNumbers = document.getElementById("type-numbers").value;

  const successMassage = document.getElementById("notify-success");
  const failErr = document.getElementById("notify-fail");
  if (pin == typedNumbers) {
    successMassage.style.display = "block";
    failErr.style.display = "none";
  } else {
    successMassage.style.display = "none";
    failErr.style.display = "block";
  }
}
