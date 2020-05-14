/*
 * @Author: v_renjuyuan
 * @Date: 2020-05-15 01:20:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-15 01:53:34
 * @FilePath: \blog\blog-1\src\router\blog.js
 * @Description: 
 */
// router 分不同的模块管理接口

const handleBlogRouter = ((req, res) => {
  const method = req.method

  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    return {
      msg: '这是获取博客列表的接口'
    }
  }
  
  // 获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    return {
      msg: '这是获取博客详情的接口'
    }
  }
  
  // 新建一篇博客
  if (method === 'POST' && req.path === '/api/blog/new') {
    return {
      msg: '这是新建博客的接口2'
    }
  }
  
  // 更新一篇博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    return {
      msg: '这是更新一篇博客的接口'
    }
  }
  
  // 删除一篇博客
  if (method === 'POST' && path === '/api/blog/update') {
    return {
      msg: '这是删除一篇博客的接口'
    }
  }
})

module.exports = handleBlogRouter