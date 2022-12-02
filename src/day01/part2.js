// Advent of Code - Day 1 - Part Two

export function part2(input) {

  const arrayInput = input.split('\r\n')
  let sum = 0;
  let res = [0, 0, 0];

  for (let i = 0; i < arrayInput.length; i++) {

    if (arrayInput[i] === '') {
      for (let j = 0; j < res.length; j++) {
        if (res[j] < sum) {
          if (res[j] != 0) {
            if (res[j+2]) res[j+2] = res[j+1]
            if (res[j+1]) res[j+1] = res[j]
          }
          res[j] = sum
          sum = 0
        }
      }
      sum = 0
    }
    else {
      sum += parseInt(arrayInput[i])
    }
  }

  for (let j = 0; j < res.length; j++) {
    if (res[j] < sum) {
      if (res[j] != 0) {
        if(res[j+2])  res[j+2] = res[j+1]
        if(res[j+1])  res[j+1] = res[j]
      }
      res[j] = sum
      sum = 0
    }
  }
  return res.reduce((prev, curr) => {return prev + curr}, 0)
}