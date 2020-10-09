const { Map } = require("immutable");
const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = map1.set("b", 50);
console.log(map1.get("b") === map2.get("b"));

const { List } = require("immutable");

const list1 = List([1, 2, 3]);

const list2 = list1;

const list3 = list2.push(5);

console.log(list1);
console.log(list3);
console.log(list2);

const { Seq } = require("immutable");
const myObject = { a: 1, b: 2, c: 3 };
console.log(
  Seq(myObject)
    .map((x) => x * x)
    .toObject()
);
