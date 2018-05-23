# imooc-mall

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 2-1: node enviroment
_✨_
##### node install
```
npm install -g npm
cnpm install -g cnpm
cnpm list
cnpm install vue --save
```


## 2-2: vue-cli SPA
_✨_
```
npm install -g vue-cli
vue init webpack demo
```


## 2-3, 2-4: vue webpack config
_✨✨✨✨_


## 2-5: vue basic grammar
_✨✨✨_


## 3-1: vue route introduce
_✨_
##### advantage: more fast
##### disadvantages
1. SEO bad, 
2. use browser back, forward will request, 
3. can't remenber roll position


## 3-2: Dynamic routing
_✨✨✨_


## 3-3
##### (GoodsList.vue)
##### 嵌套路由


## 3-4
##### (GoodsList.vue)
##### 编程式路由


## 3-5
##### (GoodsList.vue)
##### 命名路由和命名视图


## 4-1
##### vue-resource


## 4-3
##### axios


## 5-1
##### es6 介绍


## 5-2
##### es6语法


## 5-3
##### 宽展参数 ...


## 5-4
##### promise


## 5-5
##### es6模块化开发讲解import


## 5-6
##### AMD、CMD、CommonJS和ES6差异


## 6-1
##### 组件拆分
##### (NavBread.vue) (NavHeader.vue) (NavFooter.vue)


## 6-2
##### 模拟mock数据
##### 后端获取静态json数据渲染到界面


## 6-3
##### 图片懒加载


## 7-1
##### 安装linux


## 7-2
##### Node, 起一个 http server


## 7-3
##### node server ?


## 7-4
##### express 框架创建和生成
```
express server
```
##### open in browser
```
http://localhost:3000
``` 


## 8-2
##### linux平台下的搭建 ?


## 8-3
##### 给mogodb创建用户 ?


## 8-4
##### mogodb基本语法 ?


## 8-5
##### mongo表数据设计和插入
##### 导入数据表到mongodb里面,  另外起一个终端
```
mongoimport -d db_demo -c users --file /Users/ganyihuan/Documents/Code/Web/Vue/imooc-mall/resource/dumall-users
mongoimport -d db_demo -c goods --file /Users/ganyihuan/Documents/Code/Web/Vue/imooc-mall/resource/dumall-goods
```


## 9-1
##### 启动调试node
```
node server/bin/www
```
##### webstorm 配置启动node
##### pm2 配置启动node
```
安装:
npm install pm2 -g
启动:
pm2 start server/bin/www
停止全部:
pm2 stop all
查看项目:
pm2 list
查看日志:
pm2 log
```


## 9-2
##### 获取数据库里的数据
##### (config/index.js) 代理


## 9-3
##### 数据分类排序
##### 浏览展示mongodb 数据
```
http://localhost:3000/goods?page=1&pageSize=8&sort=1
http://localhost:3000/goods?page=2&pageSize=8&sort=1
```


## 9-4
##### 价格升序降序
##### 延时加载


## 9-5
##### 产品分类展示
##### 浏览展示mongodb 数据, 增加了priceLevel值
```
http://localhost:3000/goods?page=1&pageSize=8&sort=1&priceLevel=2
```


## 9-6
##### 购物车数据库


## 10-1
##### 登录功能


## 10-2
##### 登出功能
##### 避免重复启动node 
supervisor


## 10-3
##### 登录拦截
##### 用户信息校验, 拿用户信息


## 10-4
##### 实现全局模块框


## 11-1
##### 购物车界面


## 11-2
##### 购物车功能: 删除购物车里面的商品


## 11-3
##### 购物车功能: 修改数量


## 11-4
##### 购物车功能: 全选, 金额计算


## 12-1
##### 地址列表界面


## 12-2
##### 地址列表: 基本内容


## 12-3
##### 地址列表: 展开功能, 切换功能


## 12-4
##### 地址列表: 地址设置默认功能实现


## 12-5
##### 地址列表: 地址删除功能实现
##### 给路由传递参数


## 13-1
##### 订单界面: 基本内容


## 13-2
##### 订单界面: 提交订单
##### 正则表达式弱点


## 14-1
##### 订单成功界面


## 15-1
##### vuex 介绍


## 15-2
##### vuex 基础语法


## 15-3
##### vuex 控制登录和购物车数量


## 15-4
##### vuex 使用


## fix bug


## 16-1
##### webpack 介绍
1. html-webpack-plugin
> 生成界面
2. extract-text-webpack-plugin
> 把文件当成文本抽取出来
3. UglifyJsPlugin/new webpack.optimize.UglifyJsPlugin()
> 对js合并压缩
4. CommonsChunkPlugin/new webpack.optimize.CommonsChunkPlugin()
> 抽取公共模块
5. clean-webpack-plugin
> 打包之前删除文件
6. copy-webpack-plugin
> 文件的复制
##### 解析js文件, 并输出
##### 解析css文件, css-loader
##### 解析sass, less, scss, stylus文件 sass-loader/less-loader/node-sass
##### 解析图片(png, jpg, svg, gif) file-loader/url-loader
##### 给css添加前缀 postcss-loader/autoprefixer


## 16-2
##### 编写自己的npm组件 vue-toast, 静态界面
