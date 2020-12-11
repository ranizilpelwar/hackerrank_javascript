import {countApplesAndOranges} from "app/ProblemSolving/AppleAndOrange";

fdescribe("AppleAndOrange", ()=> {
  it("example", ()=> {
    expect(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])).toEqual([1, 2]);
  });
});