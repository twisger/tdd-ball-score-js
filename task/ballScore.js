export const calculateRoundScore = (scoreList) => {
  if (scoreList[0] === 10) {
    return scoreList.reduce((pre, cur) => pre + cur);
  }
  if (scoreList[0] < 10 && scoreList[0] + scoreList[1] === 10) {
    return scoreList.reduce((pre, cur) => pre + cur);
  }
  if (scoreList[0] < 10 && scoreList[0] + scoreList[1] < 10) {
    return scoreList[0] + scoreList[1];
  }
};
