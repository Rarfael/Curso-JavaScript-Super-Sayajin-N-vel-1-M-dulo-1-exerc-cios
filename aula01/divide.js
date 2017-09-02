const inverse = (x) => x * -1

const add = (y) => (x) => x + y
const subtract = (y) => (x) => add(inverse(y))(x)

const divide = (y) => (x) => {

  const increment = add(y)
  let result = 0
  let count = 0;

  while ( result < x ){
    result = increment(result)
    count++
  }
  return count

}

console.log("966 / 23 = ", divide(23)(966))
