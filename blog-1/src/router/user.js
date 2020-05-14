/*
 * @Author: v_renjuyuan
 * @Date: 2020-05-15 01:22:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-15 01:44:49
 * @FilePath: \blog\blog-1\src\router\user.js
 * @Description: 
 */
// router 分不同的模块管理接口

const handleUserRouter = ((req, res) => {
  const method = req.method

  // 登陆
  if (method === 'POST' && req.path === '/api/user/login') {
    return {
      msg: '这是登陆的接口'
    }
  }
})

module.exports = handleUserRouter