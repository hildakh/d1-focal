//The process.argv property returns an array containing the command line arguments passed when the Node.js process was launched. 
// slice(2) added to skip the first two lines 
//The first element will be process.execPath. See process.argv0 if access to the original value of argv[0] is needed. 
// The second element will be the path to the JavaScript file being executed. The remaining elements will be any additional
// command line arguments.

let args = process.argv.slice(2);
let reverse = function(argu) {
  let result = "";
  for(let i = 0; i < argu.length; i++) {  //looping through the arguments
    for(let j = argu[i].length-1; j >= 0; j--){  //looping through the letters of each argument
      result += argu[i][j];     //adding the letters in reverse to the result string
   }   
   result += "\n";      // starting the reversed argument on a new line
  } 
  return result;
  
}
console.log(reverse(args));
