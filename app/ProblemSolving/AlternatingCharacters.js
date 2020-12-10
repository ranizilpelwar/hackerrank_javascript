export function alternatingCharacters(s) {
  let currentIndex = 0;
  let compareToIndex = 1;
  let countOfDeletions = 0;

  while(compareToIndex < s.length) {
    let currentChar = s.charAt(currentIndex);
    let comparisonChar = s.charAt(compareToIndex);
    if (currentChar === comparisonChar) {
      countOfDeletions++;
      compareToIndex++;
    }
    else {
      currentIndex = compareToIndex;
      compareToIndex = currentIndex + 1;
    }
  }
  return countOfDeletions;
}