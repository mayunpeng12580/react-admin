var {createProxyMiddleware}=require("http-proxy-middleware");
module.exports=function(app){
    
    app.use(createProxyMiddleware("/devApi", {
        target: "http://www.web-jshtml.cn/api/react",//配置你要请求的服务器地址
        // target: "http://w127.0.0.1/",//配置你要请求的服务器地址
        changeOrigin:true,
        pathRewrite: {
            "^/devApi": "",
        }
    }))
}