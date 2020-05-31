import { calculateRoundScore } from '../task/ballScore';

test('should score be 25 when throw ball given first ball 10, second ball 10, third ball 5 in first round', () => {
  expect(calculateRoundScore([10, 10, 5], 1)).toBe(25);
});
