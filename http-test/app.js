/*
 * @Author: v_renjuyuan
 * @Date: 2020-05-14 23:59:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-15 00:38:56
 * @FilePath: \blog\http-test\app.js
 * @Description: 
 */
const http = require('http')
const querystring = require('querystring')

// 创建服务 GET
// const server = http.createServer((req, res) => {
//   console.log('method' ,req.method)
//   const url = req.url
//   console.log('url', url)
//   req.query = querystring.parse(url.split('?')[1])
//   console.log('query', req.query)
//   res.end(
//     JSON.stringify(req.query)
//   )
// })

// POST
// const server = http.createServer((req, res) =>{
//   if (req.method === 'POST') {
//     // headers post请求的数据格式
//     console.log('req content-type: ', req.headers['content-type'])
//     // 接收数据
//     let postData = ''
//     req.on('data', chunk => {
//       // chunk 二进制的格式
//       postData += chunk.toString() // tostring转换为字符串格式
//     })
//     req.on('end', () => {
//       console.log('postData:', postData)
//       res.end('hello world')
//     })
//   }
// })

// 综合
const server = http.createServer((req, res) =>{
  const method = req.method
  const url = req.url
  const path = url.split('?')[0] 
  const query = querystring.parse(url.split('?')[1])

  // 设置返回格式为 JSON
  res.setHeader('Content-type', 'application/json')

  // 返回的数据
  const resData = {
    method,
    url,
    path,
    query
  }
  // 返回
  if (method === 'GET') {
    res.end(
      JSON.stringify(resData)
    )
  }
  if (method === 'POST') {
    let postData = ''
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      resData.postData = postData
      // 返回
      res.end(
        JSON.stringify(resData)
      )
    })
  }
})


server.listen(3000)
console.log('ok')