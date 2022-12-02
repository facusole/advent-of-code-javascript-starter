// Advent of Code - Day 2 - Part One

export function part1(input) {

  const array = input.split('\r\n')

  let sum = 0;
  let puntajes = {
    'A X': 4,
    'A Y': 8,
    'A Z': 3,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C X': 7,
    'C Y': 2,
    'C Z': 6,
  }

  for(let i = 0; i < array.length; i++) {
    sum += parseInt(puntajes[array[i]])
  }
  return sum
}
