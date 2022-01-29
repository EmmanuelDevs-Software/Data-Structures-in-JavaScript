function peek(stack) {
  return stack[stack.length - 1]
}

function isBalanced(str) {
  let opening = "({[";
  let closing = ")}]";
  let stack = [];

  // iterate through every lleter of the string
  for (var i = 0; i < str.length; i++) {
    let letter = str.charAt(i)
    if (opening.includes(letter)) {
      stack.push(letter)
    } else if (closing.includes(letter)) {
      if (stack.length === 0) {
        // easch closing character must have a match an opening character
        return false
      } else {
        let top = peek(stack);
        // if(top === '(' && letter === ')'||
        //     top === '{' && letter === '}'||
        //     top === '[' && letter === ']')
        if (opening.indexOf(top) === closing.indexOf(letter)) {
          stack.pop()
        } else {
          return false
        }
      }
    }
  }
  return stack.length === 0
}
console.log('TRUE CASES')
console.log(isBalanced('()'))
console.log(isBalanced('foo(aa[i], {bar: [0,12]})'))
console.log('TRUE FALSE')
console.log(isBalanced('(((()))'))
console.log(isBalanced('('))
console.log(isBalanced(')'))
console.log(isBalanced(')('))
console.log(isBalanced(')()'))
console.log(isBalanced('foo((((1+4) /2)*3'))
