/*
 * @Author: v_renjuyuan
 * @Date: 2020-05-24 16:17:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-24 16:45:45
 * @FilePath: \blog\blog-1\src\controller\user.js
 * @Description: 
 */

 const loginCheck = (username, password) => {
   // 先使用假数据
   if (username === 'zhangsan' && password === '123') {
     return true
   }
   return false
 }

 module.exports = {
  loginCheck
  }