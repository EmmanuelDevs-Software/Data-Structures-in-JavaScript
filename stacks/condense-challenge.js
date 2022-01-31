function randomSequence(n){
  let sequence = [];
  for (var i = 0; i < n; i++) {
    let num =  Math.floor(Math.random() * 10)
    sequence.push(num)
  }
  return sequence.join('')
}


function ineficienteCondense(sequence){
  // assume the suquence is dirty to bigin with and requires at least condense
  // iteation to check for numbers next to each other that should be condensed
  let isDirty = true
  while(isDirty){
    //assume this will be a clean unchanged iteration with no condenses
    //until we see two numbers next to each other that are a match
    isDirty = false
    let nextSequence  = ""

    for (var i = 0; i < sequence.length - 1; i++) {
      let c1 = sequence.charAt(i)
      let c2 = sequence.charAt(i + 1)
      if(c1 !== c2){
        nextSequence +=  c1
      }else{
        isDirty = true
        i++
      }
    }

    //account for the last character
    if(sequence.charAt(sequence.length - 2) !== sequence.charAt(sequence.length - 1)){
      nextSequence +=  sequence.charAt(sequence.length - 1)
    }
    sequence = nextSequence
  }

  return sequence
}


function condense(sequence){
  //conver the sequence of numbers into an stack-like array
  sequence = sequence.split("");

  //create secound stack andd add one thing from the sequence to this stack
  let stack = [sequence.pop]

  while(sequence.length > 0){
    let left = sequence.pop();
    let right = stack.pop()

    if(left !== right){
      stack.push(right)
      stack.push(left)
    }
  }
  // pop everything one-by-one off the new stack back onto
  // the first stack to undo the reversed order
  while (stack.length > 0) {
    sequence.push(stack.pop())
  }

  return sequence.join("")
}

//let sequence = randomSequence(10000)
let sequence = randomSequence(10000000)
let condensed = condense(sequence)
console.log(sequence)
console.log(condensed)
