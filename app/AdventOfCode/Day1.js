//https://adventofcode.com/2020/day/1#part2

function readInput(file) {
  let data;
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && (rawFile.status === 200 || rawFile.status == 0)) {
      var allText = rawFile.responseText.split(/\s/);
      data = allText;
    }
  }
  rawFile.send();
  return data ? data : "not found";
}

function getArrayOfNumbers() {
  return readInput("app/AdventOfCode/input.txt");
}

export default function getSumFor2020() {
  console.log("getting input...");
  var data = getArrayOfNumbers();
  let currentNumber;
  let match;
  for (let index = 0; index < data.length; index++) {
    const number = parseInt(data[index]);
    const diff = 2020 - number;
    for (let matchIndex = index+1; matchIndex < data.length; matchIndex++) {
      const possibleMatch = data[matchIndex];
      if (diff == possibleMatch) {
          match = parseInt(possibleMatch);
          break;
      }
    }
    if (match) {
      currentNumber = number;
      break;
    }
  }
  return currentNumber * match;
}