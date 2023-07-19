function roll() {
  let sides = parseInt(document.getElementById("sides").value);
  console.log(sides);
  var randomNumber = Math.floor(Math.random() * sides) + 1;
  return randomNumber;
}

//Prints dice roll to the page

function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

var button = document.getElementById("button");

button.onclick = function () {
  var result = roll();
  printNumber(result);
};
