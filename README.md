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


## 2-3, 2-4
### 项目目录详细讲解


## 2-5
### vue基础语法


## 3-1
### vue路由介绍


## 3-2
### vue动态路由


## 3-3
### (GoodsList.vue)
### 嵌套路由


## 3-4
### (GoodsList.vue)
### 编程式路由


## 3-5
### (GoodsList.vue)
### 命名路由和命名视图


## 4-1
### vue-resource


## 4-3
### axios


## 5-1
### es6 介绍


## 5-2
### es6语法


## 5-3
### 宽展参数 ...


## 5-4
### promise


## 5-5
### es6模块化开发讲解import


## 5-6
### AMD、CMD、CommonJS和ES6差异


## 6-1
### 组件拆分
### (NavBread.vue) (NavHeader.vue) (NavFooter.vue)


## 6-2
### 模拟mock数据
### 后端获取静态json数据渲染到界面


## 6-3
### 图片懒加载


## 7-1
### 安装linux


## 7-2
### Node, 起一个 http server


## 7-3
### node server ?


## 7-4
### express 框架创建和生成
```
express server
```
### open in browser
```
http://localhost:3000
``` 


## 8-2
### linux平台下的搭建 ?


## 8-3
### 给mogodb创建用户 ?


## 8-4
### mogodb基本语法 ?


## 8-5
### mongo表数据设计和插入
### 导入数据表到mongodb里面,  另外起一个终端
```
mongoimport -d db_demo -c users --file /Users/ganyihuan/Documents/Code/Web/Vue/imooc-mall/resource/dumall-users
mongoimport -d db_demo -c goods --file /Users/ganyihuan/Documents/Code/Web/Vue/imooc-mall/resource/dumall-goods
```


## 9-1
### 启动调试node
```
node server/bin/www
```
### webstorm 配置启动node
### pm2 配置启动node
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
### 获取数据库里的数据
### (config/index.js) 代理


## 9-3
### 数据分类排序
### 浏览展示mongodb 数据
```
http://localhost:3000/goods?page=1&pageSize=8&sort=1
http://localhost:3000/goods?page=2&pageSize=8&sort=1
```


## 9-4
### 价格升序降序
### 延时加载


## 9-5
### 产品分类展示
### 浏览展示mongodb 数据, 增加了priceLevel值
```
http://localhost:3000/goods?page=1&pageSize=8&sort=1&priceLevel=2
```


## 9-6
### 购物车数据库


## 10-1
### 登录功能


## 10-2
### 登出功能
### 避免重复启动node 
supervisor


## 10-3
### 登录拦截
