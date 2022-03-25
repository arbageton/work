const base = {};
const text = "artem:city=Cheboksary;street=Yarmarochnaya;house=7k1;place=33,matvey:city=Cheboksary;street=Yarmarochnaya;house=5;place=27,alex:city=Cheboksary;street=Parhomenko;house=74;place=1";

const listUsers = text.split(',');  

listUsers.forEach((str) => {
  const userData = str.split(':');
  const userId = userData[0];
  const streetStr =  userData[1];

  base[userId] = {};

  const listData = streetStr.split(';')

  listData.forEach((item) => {
    const data = item.split('=');
    const key = data[0];
    const value = data[1];
    base[userId][key] = value;
  })
});

console.log(base) // print
