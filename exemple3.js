const text = "privet_kak_dela_4URKI"


function mySplit(str, separator) {
  let massive = [];
  let string = "";
  for (i = 0; i < str.length; i++) {
    if (str[i] === separator) {
      massive.push(string)
      string = ""
    } else {
      string = string + str[i]
    }
  }
  massive.push(string)
 return massive;
}

const list = mySplit(text, '__');
console.log(list)


// писать_каждое букву в слова