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
  let page = parseInt(req.param('page'))
  let pageSize = parseInt(req.param('pageSize'))
  // let priceLevel = req.param('priceLevel')
  // param: 获取前端传来的参数
  let sort = req.param('sort')
  // 默认跳过几条数据, skip 是个索引值
  let skip = (page - 1) * pageSize
  let params = {}
  // find: 返回一个模型
  // limit: 第一页多少条
  let goodsModel = Goods.find(params)
    .skip(skip)
    .limit(pageSize)
  // 排序
  goodsModel.sort({salePrice: sort})
  // exec: 执行方法
  goodsModel.exec({}, function (err, doc) {
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
