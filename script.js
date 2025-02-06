function stringChop(str, size) {
  // your code here
	let chunks = [];
    for (let i = 0; i < str.length; i += size) {
        chunks.push(str.substring(i, i + size)); // Extract chunks of 'size' length
    }
    return chunks;

}
// // Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));