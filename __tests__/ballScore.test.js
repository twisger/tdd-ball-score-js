import {
  calculateRoundScore, calculateTotalScore, showRoundMessage,
} from '../src/ballScore';

test('should score be 25 when throw ball given first ball 10, second ball 10, third ball 5', () => {
  expect(calculateRoundScore([10, 10, 5])).toBe(25);
  expect(showRoundMessage([10, 10, 5])).toBe('X');
});

test('should score be 20 when throw ball given first ball 5, second ball 5, third ball 10', () => {
  expect(calculateRoundScore([5, 5, 10])).toBe(20);
  expect(showRoundMessage([5, 5, 10])).toBe('/');
});

test('should score be 8 when throw ball given first ball 5, second ball 3, third ball 10', () => {
  expect(calculateRoundScore([5, 3, 10])).toBe(8);
  expect(showRoundMessage([5, 3, 10])).toBeUndefined();
});

test('should score be sum value when calculate total score given every round score', () => {
  expect(calculateTotalScore([30, 30, 30, 30, 30, 30, 30, 30, 30, 30])).toBe(300);
});

test('should score be 100 when calculate total score given number of bottles poured every round and last round not strike or spare', () => {
  const bottleNumberList = [
    [10],
    [4, 6],
    [3, 2],
    [5, 5],
    [2, 3],
    [5, 4],
    [10],
    [3, 2],
    [5, 2],
    [5, 4],
  ];
  expect(calculateTotalScore(bottleNumberList)).toBe(100);
});

test('should score be 300 when calculate total score given given number of bottles poured every round and every round strike', () => {
  const bottleNumberList = [
    [10],
    [10],
    [10],
    [10],
    [10],
    [10],
    [10],
    [10],
    [10],
    [10, 10, 10],
  ];
  expect(calculateTotalScore(bottleNumberList)).toBe(300);
});
