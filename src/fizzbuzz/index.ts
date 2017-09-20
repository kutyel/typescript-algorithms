export const isFizz = (x: number) => x % 3 === 0
export const isBuzz = (x: number) => x % 5 === 0

export default (length = 100) => {
  let result = []
  for (let index = 1; index <= length; index++) {
    result.push(
      isFizz(index) && isBuzz(index)
        ? 'FizzBuzz'
        : isFizz(index) ? 'Fizz' : isBuzz(index) ? 'Buzz' : index
    )
  }
  return result
}
