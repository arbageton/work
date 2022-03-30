const str = "privet_kak_dela_4URKI";


function mySplit(separator) {
  let tempString = '';
  const tempList = [];
  
  const text = this.toString();
 
  for(var i = 0; i < text.length; i++) {
    const char = text[i];

    if (char === separator) {
      tempList.push(tempString);
      tempString = '';
    } else {
      tempString = tempString + char;
    }
  }

  tempList.push(tempString);

  return tempList;
}

String.prototype.mySplit = mySplit;


const originSplitResult = str.split('_');  
const customSplitResult = str.mySplit('_');


console.log(originSplitResult)

console.log(customSplitResult)


