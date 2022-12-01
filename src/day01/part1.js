// Advent of Code - Day 1 - Part One

export function part1(input) {

  const arrayInput = input.split('\r\n')
  let sum = 0;
  let res = 0;

  for( let i=0; i < arrayInput.length; i++) {
    if (arrayInput[i] === '') {
      if (sum > res) {
        res = sum
      }
      sum = 0
    }
    else {
      sum += parseInt(arrayInput[i])
    }
  }
  return res

}
