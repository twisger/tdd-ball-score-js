export const showRoundMessage = (scoreList) => {
  if (scoreList[0] === 10) {
    return 'X';
  }
  if (scoreList[0] < 10 && scoreList[0] + scoreList[1] === 10) {
    return '/';
  }
};

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

export const calculateTotalScore = roundScoreList => roundScoreList.reduce((pre, cur) => pre + cur);
