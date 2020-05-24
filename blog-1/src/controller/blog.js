/*
 * @Author: v_renjuyuan
 * @Date: 2020-05-24 08:58:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-24 16:17:55
 * @FilePath: \blog\blog-1\src\controller\blog.js
 * @Description: 
 */

 const getList = (author, keyword) => {
   // 先返回假数据 （格式是正确的）
   return [
     {
       id: 1,
       title: "标题A",
       content: "内容A",
       createTime: '***',
       author: 'zhangsan'

     },
     {
      id: 2,
      title: "标题B",
      content: "内容B",
      createTime: '***',
      author: 'lisi'

    }
   ]
 }

 const getDetail = id => {
  return {
    id: 1,
    title: "标题A",
    content: "内容A",
    createTime: '***',
    author: 'zhangsan'
  }
 }

 const newBlog = (blogData = {}) => {
   // blogData 是一个对象， 包含 title content 属性 
   console.log('blogData', blogData)
   return {
     id: 3 // 新建博客插入到数据表里的 id
   }
 }

 const updateBlog = (id, blogData = {}) => {
   // id 要更新的博客的id
  // blogData 是一个对象， 包含 title content 属性 
  console.log(id, blogData)
  return true
 }

 const delBlog = (id) => {
   return true
 }

 module.exports = {
   getList,
   getDetail,
   newBlog,
   updateBlog,
   delBlog
 }