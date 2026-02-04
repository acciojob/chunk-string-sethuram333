function stringChop(str, size) {
  // your code here
	if(str.length===0){
		return []
	}
	size =Number(size)
	let result =[]
	for(let i=0;i<str.length;i+=5){
		result.push(str.slice(i,i+n))
	}
	return result
}

// Do not change the code below
const str = prompt("Enter String");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
