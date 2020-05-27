/*
 * @Author: v_renjuyuan
 * @Date: 2020-05-24 08:58:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-27 02:14:50
 * @FilePath: \blog\blog-1\src\controller\blog.js
 * @Description: 
 */
const {
  exec
} = require('../db/mysql')

const getList = (author, keyword) => {
  // 后面一定要加 1=1 不然后面没有接其他条件（author, keyword）
  // 的时候报错, 起占位作用
  // const sql = `select id, title, content, creatTiem, author from blogs where 1=1 `
  let sql = `select * from blogs;`
  // if (author) {
  //   sql += `and author='${author}'`
  // }
  // if (keyword) {
  //   sql += `and title like '%${keyword}%'`
  // }
  // sql += `order by creatTime desc;`
  console.log('mysql', sql)
  // 返回的是  promise
  return exec(sql)

  //  // 先返回假数据 （格式是正确的）
  //  return [
  //    {
  //      id: 1,
  //      title: "标题A",
  //      content: "内容A",
  //      createTime: '***',
  //      author: 'zhangsan'

  //    },
  //    {
  //     id: 2,
  //     title: "标题B",
  //     content: "内容B",
  //     createTime: '***',
  //     author: 'lisi'

  //   }
  //  ]
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