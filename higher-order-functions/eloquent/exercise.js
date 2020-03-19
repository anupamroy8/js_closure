// Challenge 1. Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

let res = arrays.reduce((acc, elem) => acc.concat([...elem]));
// Your code here.
// → [1, 2, 3, 4, 5, 6]

// Challenge 2. Your own loop
// Your code here.

var loop = function(num, condition, operation, output) {
  for(let i = num; condition(i); operation(i)) {
    output(i);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// Challenge 3. Everything
function every(array, test) {
  return array.reduce((acc, el) => {
  	if(!test(el))
      acc = false;
    return acc;
  }, true);
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// Challenge 4. Dominant writing direction
function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({direction}) => direction == "none");

  let total = scripts.reduce((n, {count}) => n + count, 0); 
  if (total == 0) return "No scripts found.";

  console.log(script.maps({direction,count}, n =>
    (count / total)).reduce((a,b) => {
      let dir = (a < b ? b : a);
      return text[dir].direction;
    }));
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
