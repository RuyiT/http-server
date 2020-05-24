/*
 * @Author: v_renjuyuan
 * @Date: 2020-05-15 01:20:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-24 16:38:37
 * @FilePath: \blog\blog-1\src\router\blog.js
 * @Description: 
 */
// router 分不同的模块管理接口

const { 
  getList, 
  getDetail,
  newBlog,
  updateBlog,
  delBlog
} = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = ((req, res) => {
  const method = req.method
  const id = req.query.id

  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    const listData = getList(author, keyword)

    return new SuccessModel(listData)

    // return {
    //   msg: '这是获取博客列表的接口'
    // }
  }
  
  // 获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const data = getDetail(id)
    return new SuccessModel(data)
    // return {
    //   msg: '这是获取博客详情的接口'
    // }
  }
  
  // 新建一篇博客
  if (method === 'POST' && req.path === '/api/blog/new') {
    const blogData = req.body
    const data = newBlog(blogData)
    return new SuccessModel(data)
    // return {
    //   msg: '这是新建博客的接口2'
    // }
  }
  
  // 更新一篇博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    const result = updateBlog(id, req.body)
    if (result) {
      return new SuccessModel()
    } else {
      return new ErrorModel('更新博客失败')
    }
    // return {
    //   msg: '这是更新一篇博客的接口'
    // }
  }
  
  // 删除一篇博客
  if (method === 'POST' && req.path === '/api/blog/del') {
    const result = delBlog(id)
    if (result) {
      return new SuccessModel()
    } else {
      return new ErrorModel('更新博客失败')
    }
    // return {
    //   msg: '这是删除一篇博客的接口'
    // }
  }
})

module.exports = handleBlogRouter