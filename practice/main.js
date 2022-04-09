async function myAsyncFun() {
  throw "asyncError!";
}

function myPromiseFun() {
  return new Promise((resolve, reject) => {
    reject("promiseError");
  });
}

const result = myAsyncFun().catch((e) => console.log(e));
const result2 = myPromiseFun().catch((e) => console.log(e));
