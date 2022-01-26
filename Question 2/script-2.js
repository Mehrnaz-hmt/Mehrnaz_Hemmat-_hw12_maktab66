function timeoutPromiseResolve(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("successful");
    }, interval);
  });
}

function timeoutPromiseReject(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      reject("error");
    }, interval);
  });
}
function timeTest() {
  timeoutPromiseResolve(5000);
  timeoutPromiseReject(2000);
  timeoutPromiseResolve(3000);
}

let startTime = Date.now();
timeTest()
  .then(() => {})
  .catch((e) => {
    console.log(e);
    let finishTime = Date.now();

    let timeTaken = finishTime - startTime;
    alert("Time taken in milliseconds: " + timeTaken);
  });
