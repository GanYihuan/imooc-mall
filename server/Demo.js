let user = require('./User')

console.log(`userName: ${user.userName}`)
console.log(`I am: ${user.userName}, I say ${user.sayHello()}`)

let http = require('http')
let url = require('url')
let util = require('util')

let server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  console.log('url:' + req.url) // demo.html?a=123
  console.log('parse:' + url.parse(req.url)) // [object]
  console.log('inspect:' + util.inspect(url.parse(req.url)))
  // parse: 转换为对象
  // inspect: 调试用
  res.end(util.inspect(url.parse(req.url)))
})

server.listen(3000, '127.0.0.1', () => {
  console.log('服务器运行了, 打开http://127.0.0.1:3000')
})
