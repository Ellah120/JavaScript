const lists = [
  {
    id: 1,
    name: "Ella",
    age: 20
  },
  {
    id: 2,
    name: "Ben",
    age: 18
  },
  {
    id: 3,
    name: "Shalom",
    age: 17
  }
]
const newList = lists.filter(list => list.id == 1)
console.log(newList);
const newList2 = lists.filter(x => x.name == "Ben")
console.log(newList2);
const newList3 = lists.filter(x => x.age >= 18)
console.log(newList3);

const numbers = [2, 7, 9, 16, 28]
const newNums = numbers.map(number => number * 2)
console.log(newNums);