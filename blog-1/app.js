/*
 * @Author: v_renjuyuan
 * @Date: 2020-05-15 01:18:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-28 01:22:14
 * @FilePath: \blog\blog-1\app.js
 * @Description: 
 */

 //系统基本设置逻辑

 
const queryString = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

// 用于处理post data
const getPostData = req => {
  const promise = new Promise((resolve, reject) => {
    if (req.method !== 'POST') {
      console.log('method', req.method)
      resolve({})
      return
    }
    if (req.headers['content-type'] !== 'application/json') {
      resolve({})
      return
    }
    let postData = ''
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      if (!postData) {
        resolve({})
        return
      }
      resolve(
        JSON.parse(postData)
      )
      // resData.postData = postData
      // // 返回
      // res.end(
      //   JSON.stringify(resData)
      // )
    })
  })
  return promise
}

const serverHandle = (req, res) => {
  // 设置返回格式 JSON
  res.setHeader('Content-type', 'application.jsson')

  // 获取 path
  const url = req.url
  req.path = url.split('?')[0]


  // 解析query
  req.query = queryString.parse(url.split('?')[1])
  // 处理post data
  getPostData(req).then( postData => {
    req.body = postData
    // 处理 blog 路由
    const blogResult = handleBlogRouter(req, res)
    if (blogResult) {
      blogResult.then(blogData => {
        console.log('blogdata',blogData)
        res.end(
          JSON.stringify(blogData)
        )
        console.log('666',JSON.stringify(blogData))
      }).catch(err => {
        console.log(err)
      }) 
      return
    }
    // const blogData = handleBlogRouter(req, res)
    // if (blogData) {
    //   res.end(
    //     JSON.stringify(blogData)
    //   )
    //   return
    // }

    // 处理 user 路由
    const userData = handleUserRouter(req, res)
    if (userData) {
      res.end(
        JSON.stringify(userData)
      )
      return 
    }

    // 未命中路由， 返回 404
    res.writeHead(404, {'Content-type': 'text/plain'}) // 设置纯文本的返回格式
    res.write('404 Not Found\n')
    res.end()
  })

  // 处理 blog 路由
  // const blogData = handleBlogRouter(req, res)
  // if (blogData) {
  //   res.end(
  //     JSON.stringify(blogData)
  //   )
  //   return
  // }

  // // 处理 user 路由
  // const userData = handleUserRouter(req, res)
  // if (userData) {
  //   res.end(
  //     JSON.stringify(userData)
  //   )
  //   return 
  // }

  // // 未命中路由， 返回 404
  // res.writeHead(404, {'Content-type': 'text/plain'}) // 设置纯文本的返回格式
  // res.write('404 Not Found\n')
  // res.end()

 }
 module.exports = serverHandle

 // process.env.NODE_ENV