/*
 * @Author: v_renjuyuan
 * @Date: 2020-05-24 09:33:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-24 10:38:02
 * @FilePath: \blog\promise-test\index.js
 * @Description: 
 */

// nodejs 读取文件模块
const fs = require('fs')
// nodejs 读取文件路径
const path = require('path')

// resolve 拼接文件路径， __dirname： 当前目录
// const fullFileName = path.resolve(__dirname, 'files', 'a.json')
// // readFile 异步读取文件, data是二进制的
// fs.readFile(fullFileName, (err, data) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log(data.toString())
// })


// callback的方式获取一个文件内容
// function getFileContent(fileName, callback) {
//   const fullFileName = path.resolve(__dirname, 'files', fileName)
//   // readFile 异步读取文件, data是二进制的
//   fs.readFile(fullFileName, (err, data) => {
//     if (err) {
//       console.log(err)
//       return
//     }
//     callback(
//       JSON.parse(data.toString())
//     )
//   })
// }
// // 测试
// getFileContent('a.json', aData => {
//   console.log('aData', aData)
//   getFileContent(aData.next, bData => {
//     console.log('bData', bData)
//     getFileContent(bData.next, cData => {
//       console.log('cData', cData)
//       // getFileContent(cData.next, dData => {
//       //   console.log('dData', dData)
//       // })
//     })
//   })
// })

// 用promise 获取文件内容
function getFileContent(fileName) {
  const promise = new Promise((resolve, reject) => {
    const fullFileName = path.resolve(__dirname, 'files', fileName)
    fs.readFile(fullFileName, (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(
        JSON.parse(data.toString())
      )
    })
  })
  return promise
}
getFileContent('a.json').then(aData => {
  console.log('aData', aData)
  return getFileContent(aData.next)
}).then(bData => {
  console.log('bdata', bData)
  return getFileContent(bData.next)
}).then(cData => {
  console.log('cData', cData)
  return getFileContent(cData.next)
}).then(res=> {
  console.log('res', res)
}).catch(err => {
  console.log('err', err)
})

// async await