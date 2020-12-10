export function makeAnagram(a, b) {
  let first = a;
  let second = b;
  let countOfDeletions = 0;
  while (first.length > 0) {
    const char = first.charAt(0);
    console.log(char);
    const matchIndex = second.indexOf(char);
    console.log("match at ", matchIndex);
    first = first.substring(1);
    console.log("new first", first);
    if (matchIndex === -1) {
      countOfDeletions++;
      console.log("no match");
    }
    if (matchIndex !== -1 && matchIndex === 0) {
      second = second.substring(1);
      console.log("at start", second);
    }
    if (matchIndex !== -1 && matchIndex > 0) {
      second = second.substring(0, matchIndex) + second.substring(matchIndex + 1, second.length);
      console.log("in middle or end", second);
    }
  }
  countOfDeletions = countOfDeletions + second.length;
  return countOfDeletions;
}