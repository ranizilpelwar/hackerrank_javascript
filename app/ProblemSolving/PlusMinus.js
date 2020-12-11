export function plusMinus(arr) {
  const total = arr.length;
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  for(let i = 0; i < total; i++) {
    const element = arr[i];
    if (element === 0) {
      zeroCount++; 
    }
    else if (element > 0) {
      positiveCount++; 
    }
    else {
      negativeCount++; 
    }
  }  

  const positiveRatio = positiveCount / total;
  const negativeRatio = negativeCount / total;
  const zeroRatio = zeroCount / total;

  return `${positiveRatio.toFixed(6)} ${negativeRatio.toFixed(6)} ${zeroRatio.toFixed(6)}`;
}