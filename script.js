
//Pyramid Variables
function displayPyramid(){
const character = document.getElementById('character').value || "*";
const count = parseInt(document.getElementById('count').value) || 5;
const inverted = document.getElementById('inverted').checked;

const result = generatePyramid(character, count, inverted); document.getElementById('output').textContent = result;
}

function generatePyramid(character, count, inverted) {
  const rows = [];

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
  return result;
}
