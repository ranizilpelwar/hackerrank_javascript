import {climbingLeaderboard, removeDups} from "app/ProblemSolving/ClimbingTheLeaderboard";

describe("Climbing The Leaderboard:", () => {
  describe("when Alice scores highest", () => {
    it("should rank her 1st", () => {
      const scores = [100];
      const alice = [105];

      const result = climbingLeaderboard(scores, alice);

      expect(result).toEqual([1]);
    });
  });

  describe("when Alice scores lower", () => {
    it("should rank her 2nd", () => {
      const scores = [100];
      const alice = [95];

      const result = climbingLeaderboard(scores, alice);

      expect(result).toEqual([2]);
    });
  });

  describe("when there are two scores on the leaderboard", () => {
    it("should rank her based on her scoring", () => {
      const scores = [100, 80];
      const alice = [70];

      const result = climbingLeaderboard(scores, alice);

      expect(result).toEqual([3]);
    });
  });

  describe("sample input 1", () => {
    it("should rank her based on her scoring", () => {
      const scores = [100, 100, 50, 40, 40, 20, 10];
      const alice = [5, 25, 50, 120];

      const result = climbingLeaderboard(scores, alice);

      console.log(result);
      expect(result).toEqual([6, 4, 2, 1]);
    });
  });

  describe("sample input 2", () => {
    it("should rank her based on her scoring", () => {
      const scores = [100, 90, 90, 80, 75, 60];
      const alice = [50, 65, 77, 90, 102];

      const result = climbingLeaderboard(scores, alice);

      console.log(result);
      expect(result).toEqual([6, 5, 4, 2, 1]);
    });
  });

  xdescribe("removeDups", () => {
    it("should remove dups", () => {
      const result = removeDups([100, 40, 40, 30, 100, 50]);

      expect(result).toEqual([40, 30, 100, 50]);
    });

    it("should handle 100K records", () => {
      const data = [];

      for (let index = 0; index < 50000; index++) {
        const element = 100;
        data.push(element);
      }
      for (let index = 0; index < 50000; index++) {
        const element = 200;
        data.push(element);
      }
      const result = removeDups(data);

      expect(result).toEqual([100, 200]);
    });
  });
});