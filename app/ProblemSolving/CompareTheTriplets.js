function compare(skills1, skills2, accumulator1, accumulator2) {
  if(skills1.length === 0 || skills2.length === 0) {
    return [accumulator1, accumulator2];
  }

  const [skill1, ...skills1Tail] = skills1;
  const [skill2, ...skills2Tail] = skills2;

  if(skill1 > skill2) {
    accumulator1++;
  }

  if(skill1 < skill2) {
    accumulator2++;
  }

  return compare(skills1Tail, skills2Tail, accumulator1, accumulator2);
}

export const compareTriplets = (a, b) => {
  return compare(a, b, 0, 0);
};