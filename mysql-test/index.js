/*
 * @Author: v_renjuyuan
 * @Date: 2020-05-27 00:16:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-27 00:26:45
 * @FilePath: \blog\mysql-test\index.js
 * @Description: 
 */
 
 const mysql = require('mysql')

 // 创建连接对象
 const con = mysql.createConnection({
    host: 'localhost', // 域，线上用的话 写线上用的地址
    user: 'root',
    password: 'a123456',
    port: '3306',
    database: 'blog'
 })

 // 开始连接
 con.connect()

 // 执行 sql 语句
 const sql = 'select * from users;'
 con.query(sql, (err, result) => {
   if (err) {
     console.log(err)
     return
   }
   console.log(result)
 })

 // 关闭连接
 con.end( )