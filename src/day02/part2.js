// Advent of Code - Day 2 - Part Two

export function part2(input) {
  const array = input.split('\r\n')

  let sum = 0;
  let puntajes = {
    'A X': 3,
    'A Y': 4,
    'A Z': 8,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C X': 2,
    'C Y': 6,
    'C Z': 7
  }

  for(let i = 0; i < array.length; i++) {
    sum += parseInt(puntajes[array[i]])
  }
  return sum
}
