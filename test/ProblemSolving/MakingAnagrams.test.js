import { makeAnagram } from "app/ProblemSolving/MakingAnagrams";

describe("making anagrams", () => {
  it("sample case", () => {
    let first = "cde";
    let second = "dcf";

    var result = makeAnagram(first, second);

    expect(result).toEqual(2);
  });

  it("should return 0 when strings match", () => {
    let first = "cde";
    let second = "cde";

    var result = makeAnagram(first, second);

    expect(result).toEqual(0);
  });

  it("should return 6 when strings match", () => {
    let first = "cdecdecde";
    let second = "dcfdcfdcf";

    var result = makeAnagram(first, second);

    expect(result).toEqual(6);
  });
});