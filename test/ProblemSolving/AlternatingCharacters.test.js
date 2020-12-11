import {alternatingCharacters} from "app/ProblemSolving/AlternatingCharacters";

describe("alternating characters", () => {
  ["A",
   "AB"
  ].map((subject) => {
    it("should return 0 when there are no dups", () => {
      expect(alternatingCharacters(subject)).toEqual(0);
    });
  });

  it("should return 1 when there is 1 dup", () => {
    expect(alternatingCharacters("AA")).toEqual(1);
  });

  it("sample case", () => {
    expect(alternatingCharacters("AAABBB")).toEqual(4);
  });
});