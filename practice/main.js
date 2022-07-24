const dotenv = require('dotenv');
dotenv.config();
const key = process.env.API_KEY;

console.log(key);

function printMaxNums(...args) {
  console.log(args)
}

console.log(printMaxNums(10, 30, 40));