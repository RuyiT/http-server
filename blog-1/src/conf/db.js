/*
 * @Author: v_renjuyuan
 * @Date: 2020-05-27 00:34:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-28 01:19:51
 * @FilePath: \blog\blog-1\src\conf\db.js
 * @Description: 
 */

 const env = process.env.NODE_ENV // 环境参数  在package.json的 scrpit里

 // 配置
let MYSQL_CONF

if (env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost', // 域，线上用的话 写线上用的地址
    user: 'root',
    password: 'a123456',
    port: '3306',
    database: 'blog'
 }
}

if (env === 'production') {
  MYSQL_CONF = {
    host: 'localhost', // 域，线上用的话 写线上用的地址
    user: 'root',
    password: 'a123456',
    port: '3306',
    database: 'blog'
 }
}

module.exports = {
  MYSQL_CONF
}