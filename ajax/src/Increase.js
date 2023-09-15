// function increase(number, callback) {
//     setTimeout(() => {
//         const result = number + 20;
//         if (callback) {
//             callback(result);
//         }
//     }, 1000);
// };
//
// increase(0, result => {
//     console.log(result);
// });

function increase(number) {
  const promise = new Promise((resolve, reject) => {
    // resolve 성공, reject 실패
    setTimeout(() => {
      const result = number + 10;
      if (result > 100) {
        // 100 보다 숫자가 높으면 에러 발생
        const e = new Error('Number To« Big');
        return reject(e);
      }
      resolve(result); // number 값에 +10 후 성공 처리
    }, 1000);
  });
  return promise;
}

increase(0)
  .then(number => {
    // promise에서 resolve 된 값은 .then으로 받아올수있음
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .catch(e => {
    // 에러 발생시 알리기
    console.log(e);
  });
