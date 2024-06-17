
//Selection Variables 
var subCharactersElement = document.querySelector("#characters");
var subSizesElement = document.querySelector("#sizes");
var subDirectionsElement = document.querySelector("#directions");
//.result is not connected. Try to hook up as pyramid.
var result = document.querySelector(".result");
var subCharacters = "dollar-sign";
var subSizes = "small";
var subDirections = "false";

//Pyramid Variables
const character = "";
const count = "";
const rows = [];
let inverted = false;

//Selection JS
subCharactersElement.addEventListener("change", function (e) {
  subCharacters = e.target.value;
  //console.log(subCharacters);
  updateSelectionDiv();
});

subSizesElement.addEventListener("change", function (e) {
  subSizes = (e.target.value);
  //console.log(subSizes;
  updateSelectionDiv();
});

subDirectionsElement.addEventListener("change", function (e) {
  subDirections = (e.target.value);
  //console.log(subDirections);
  updateSelectionDiv();
});

var updateCharactersDiv = function () {
  var pyramidCharacters = "$";
  if(subCharacters === "asterisk") {
     prymidCharacters= "*";
  } else if (subCharacters === "hashtag") {
    prymidCharacters = "#";
  }
}

count = pyramidSizes;
var updateSizesDiv = function () {
  var pyramidSizes = 5;
  if (subSizes === "medium") {
    pyramidSizes = 10;
  } else if (subSizes === "large") {
    prymidSizes = 15;
  } 
};

//I believe I need a boolean statementrather than an if statement here.
var updateDirectionsDiv = function () {
  var pyramidDirections = "Right side up";
  if (subDirections === "true") {
    pyramidDirections = "Upside down";
  }
};

return (result);

//Pyramid JS
function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
  }
  
  for (let i = 1; i <= count; i++) {
    if (inverted) {
      rows.unshift(padRow(i, count));
    } else {
      rows.push(padRow(i, count));
    }
  }
  
  let result = ""
  
  for (const row of rows) {
    result = result + "\n" + row;
  }