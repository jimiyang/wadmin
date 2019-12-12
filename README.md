##    运营后台管理UI



#### 按钮权限控制
 全局函数
 hasAuthority('功能编码,功能编码2') 多个用,号隔开  
 ```html
 <Button v-show="hasAuthority('systemUserCreate')" type="primary">
 ```

#### 初始化安装
```bush
// install dependencies
npm install
```
#### 修改配置(/src/config/index.js)
```
  /**
   *  发布目录
   */
 publicPath: {
    dev: '/',      //  本地环境发布目录
    pro: '/'  //  生产环境发布目录
  },
  /**
   *  api请求基础路径
   */
  apiUrl: {
    dev: 'http://localhost:8888', //  本地环境接口请求地址
    pro: 'http://api.openc.top'  //  生产环境接口请求地址
  },
```
#### 本地运行
```bush
npm run dev
```
#### 打包部署
```bush
npm run build
```
#### 功能预览

