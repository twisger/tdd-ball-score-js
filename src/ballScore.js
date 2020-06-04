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

export const calculateTotalScore = (roundNumberList) => {
  const scoreEveryRound = roundNumberList.map((item, index) => {
    const scoreList = [...item];
    if (scoreList.length < 3 && index < 9) {
      scoreList.push(...roundNumberList[index + 1]);
    }

    if (scoreList.length < 3 && index < 8) {
      scoreList.push(...roundNumberList[index + 2]);
    }
    if (scoreList.length > 3) {
      scoreList.length = 3;
    }
    return calculateRoundScore(scoreList);
  });
  return scoreEveryRound.reduce((pre, cur) => pre + cur);
};
