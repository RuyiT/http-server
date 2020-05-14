/*
 * @Author: v_renjuyuan
 * @Date: 2020-05-15 01:15:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-15 01:51:07
 * @FilePath: \blog\blog-1\bin\www.js
 * @Description: 
 */
const http = require('http')

const PORT = 3000
const serverHandle = require('../app')

const server = http.createServer(serverHandle)
server.listen(PORT)