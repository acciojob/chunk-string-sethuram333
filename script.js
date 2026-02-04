function stringChop(str, size) {
  // handle null input
  if (str === null) {
    return [];
  }

  size = Number(size); // convert chunk size to number
  let result = [];

  for (let i = 0; i < str.length; i += size) {
    let chunk = '';
    for (let j = i; j < i + size && j < str.length; j++) {
      chunk += str[j];
    }
    result.push(chunk);
  }

  return result;
}

// Do not change the code belo
const str = prompt("Enter String");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
