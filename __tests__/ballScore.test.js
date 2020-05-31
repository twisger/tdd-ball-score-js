import { calculateRoundScore } from '../task/ballScore';

test('should score be 25 when throw ball given first ball 10, second ball 10, third ball 5 in first round', () => {
  expect(calculateRoundScore([10, 10, 5], 1)).toBe(25);
});

test('should score be 20 when throw ball given first ball 5, second ball 5, third ball 10 in second round', () => {
  expect(calculateRoundScore([5, 5, 10], 2)).toBe(20);
});

test('should score be 8 when throw ball given first ball 5, second ball 3, third ball 10 in second round', () => {
  expect(calculateRoundScore([5, 3, 10], 2)).toBe(8);
});

test('should score be 30 then throw ball given first ball 10, second ball 10, third ball 10 in ten round', () => {
  expect(calculateRoundScore([10, 10, 10], 10)).toBe(30);
});

test('should score be 18 then throw ball given first ball 5, second ball 5, third ball 8 in ten round', () => {
  expect(calculateRoundScore([5, 5, 8], 10)).toBe(18);
});

test('should score be 7 then throw ball given first ball 5, second ball 2 in ten round', () => {
  expect(calculateRoundScore([5, 2], 10)).toBe(7);
});
