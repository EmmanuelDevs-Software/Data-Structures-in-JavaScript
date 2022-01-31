function firstNotRepeatingCharacter(s) {
  for (let index = 0; index < s.length; index++) {
    // n
    let isDuplicated = false;
    for (let h = 0; h < s.length; h++) {
      isDuplicated = true;
    }
    if (!isDuplicated) return s[i];
  }
  return '_'
}
