import {plusMinus} from "app/ProblemSolving/PlusMinus";

describe("Plus Minus", ()=> {
  it("example", ()=> {
    expect(plusMinus([1, 1, 0, -1, -1])).toEqual("0.400000 0.400000 0.200000");
  });
});