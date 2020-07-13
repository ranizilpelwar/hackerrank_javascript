export function climbingLeaderboard(scores, alice) {
  // const uniqScores = removeDups(scores);
  // //uniqScores.sort((a,b) => b-a);
  // const rankings = [];

  // alice.map((score) => {
  //   rankings.push(getRank(uniqScores, score));
  // });

  // return rankings;

  let rankings = [];

  alice.forEach(alicesScore => {
  //alice.map((alicesScore) => {
    let currentRank = 1;
    let priorBoardScore = 0;
    let foundRank = false;

    if(alicesScore < scores[scores.length -1]) {
      scores.forEach(boardScore => {
        if (priorBoardScore != 0 && boardScore < priorBoardScore) {
          currentRank++;
        }
        if(priorBoardScore != boardScore) {
          priorBoardScore = boardScore;
          
        }
        priorBoardScore = boardScore;
      });
      rankings.push(++currentRank);
      console.log("alice ranked last", currentRank);
      foundRank = true;
      return;
  }
    if(!foundRank) {
    scores.forEach(boardScore => {
      let scoresIndex = 0;
      if(!foundRank) {
      console.log(alicesScore, boardScore, priorBoardScore, currentRank);
      if (priorBoardScore != 0 && boardScore < priorBoardScore) {
        currentRank++;
        console.log("incremented rank to", currentRank);
      }
      if(alicesScore > boardScore) {
        foundRank = true;
        rankings.push(currentRank);
        console.log("aliceRanked", currentRank);
        return;
      }
      if(alicesScore === boardScore) {
        foundRank = true;
        console.log("aliceRanked", currentRank);
        rankings.push(currentRank);
        currentRank++;
        return;
      }
      if(priorBoardScore != boardScore) {
        priorBoardScore = boardScore;
        console.log("incremented priorBoardScore to ", priorBoardScore);
      }
      }
      scoresIndex++;
    });
  }
    if (!foundRank) {
      rankings.push(++currentRank);
      console.log("last place", currentRank);
      priorBoardScore = 0;
      foundRank = false;
    }
  });

  console.log(rankings);
  return rankings;
}

function getRank(uniqSortedScores, score) {
    uniqSortedScores.push(score);
    const uniqIncluded = removeDups(uniqSortedScores);
    uniqIncluded.sort((a,b) => b-a);
    const index = uniqIncluded.indexOf(score);
    return index + 1;
}

export function removeDups(array) {
  array.map((elem) => {
    array = array.filter((e) => e !== elem);
    array.push(elem);
  });
  return array;
}

