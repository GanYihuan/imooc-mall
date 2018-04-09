let express = require('express')
let router = express.Router()
let mongoose = require('mongoose')
let Goods = require('../models/goods')

// 连接MongoDB数据库
mongoose.connect('mongodb://127.0.0.1:27017/db_demo')
mongoose.connection.on('connected', function () {
  console.log('MongoDB connected success.')
})
mongoose.connection.on('error', function () {
  console.log('MongoDB connected fail.')
})
mongoose.connection.on('disconnected', function () {
  console.log('MongoDB connected disconnected.')
})

router.get('/', function (req, res, next) {
  Goods.find({}, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      res.json({
        status: '0',
        msg: '',
        result: {
          count: doc.length,
          list: doc
        }
      })
    }
  })
})

module.exports = router
