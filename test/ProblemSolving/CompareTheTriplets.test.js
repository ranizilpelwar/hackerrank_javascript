import { compareTriplets} from "app/ProblemSolving/CompareTheTriplets";

describe("Compare the Triplets", () => {
  describe("when there is a tie", () => {
    it("should give Alice and Bob zero points", () => {
      const alice = [0];
      const bob = [0];

      const result = compareTriplets(alice, bob);

      expect(result).toEqual([0, 0]);
    });
  });

  describe("when Alice is better at clarity", () => {
    it("should give Alice a point", () => {
      const alice = [1];
      const bob = [0];

      const result = compareTriplets(alice, bob);

      expect(result).toEqual([1, 0]);
    });
  });

  describe("when Bob is better at clarity", () => {
    it("should give Bob a point", () => {
      const alice = [1];
      const bob = [2];

      const result = compareTriplets(alice, bob);

      expect(result).toEqual([0, 1]);
    });
  });

  describe("when Bob is better at some and Alice is better at others", () => {
    it("should calculate points for each skill", () => {
      const alice = [1, 2, 3];
      const bob = [3, 2, 1];

      const result = compareTriplets(alice, bob);

      expect(result).toEqual([1, 1]);
    });
  });
});