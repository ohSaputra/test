function secondLargestNumber(arr = []) {
  if (arr.length < 2) { return -1 }
  let largest = -Infinity
  let secondLargest = -Infinity
  arr.map(stringNumber => {
    const number = Number(stringNumber)
    if (largest < number) {
      secondLargest = largest
      largest = number
    } else if (secondLargest < number && number !== largest) {
      secondLargest = number
    }
  })
  return secondLargest === -Infinity ? -1 : secondLargest
}

const test1 = secondLargestNumber(["3", "-2"])
const test2 = secondLargestNumber(["5", "5", "4", "2"])
const test3 = secondLargestNumber(["4", "4", "4"])
const test4 = secondLargestNumber([])

console.table([test1, test2, test3, test4])