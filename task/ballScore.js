export const calculateRoundScore = (scoreList, roundNumber) => {
  if (scoreList[0] === 10) {
    return scoreList.reduce((pre, cur) => pre + cur);
  }
};
