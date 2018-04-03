let checkLogin = function () {
  return new Promise(function (resolve, reject) {
    let flag = document.cookie.indexOf('userId') > -1 ? true : false
    if (flag === true) {
      // 成功回调
      resolve({
        status: 0,
        result: true
      })
    } else {
      // 失败回调
      reject('error')
    }
  })
}

let getUserInfo = () => {
  return new Promise((resolve, reject) => {
    let userInfo = {
      userId: '101'
    }
    resolve(userInfo)
  })
}

// 返回promise
checkLogin()
  .then((res) => {
    if (res.status === 0) {
      console.log('login success')
      return getUserInfo()
    }
  })
  .catch((error) => {
    console.log(`errors:${error}`)
  })
  .then((res2) => {
    console.log(`userId:${res2.userId}`)
  })

// Promise.all 同时调用多个接口和请求
Promise.all([checkLogin(), getUserInfo()]).then(([res1, res2]) => {
  console.log(`result1:${res1.result},result2:${res2.userId}`)
})
