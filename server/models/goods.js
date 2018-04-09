let mongoose = require('mongoose')
// 表模型
let Schema = mongoose.Schema
let produtSchema = new Schema({
  'productId': {type: String},
  'productName': String,
  'salePrice': Number,
  'checked': String,
  'productNum': Number,
  'productImage': String
})

module.exports = mongoose.model('Good', produtSchema)
