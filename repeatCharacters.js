const myString = "HelloWorld!";

const splitMyString = myString.split("");

console.table(splitMyString);

const mapSplitMyString = splitMyString.map((c) => c + c);

console.table(mapSplitMyString);

const joined = mapSplitMyString.join("");

console.log("join ", joined);

const myNumbers = [1, 2, 3, 4, 5, 6, 3];
