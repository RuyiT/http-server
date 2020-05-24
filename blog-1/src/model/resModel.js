/*
 * @Author: v_renjuyuan
 * @Date: 2020-05-24 08:46:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-24 08:56:01
 * @FilePath: \blog\blog-1\src\model\resModel.js
 * @Description: 
 * 
 */

class BaseModel {
  constructor(data, message) {
    if (typeof data === 'string') {
      this.message = data
      data = null
      message = null
    }
    if (data ) {
      this.data = data
    }
    if (message) {
      this.message = message
    }
  }
}

 class SuccessModel extends BaseModel {
   constructor(data, message) {
     super(data, message)
     this.error = 0
   }
 }

 class ErrorModel extends BaseModel {
   constructor(data, message) {
     super(data, message) 
     this.error = -1
   }
 }

 module.exports = {
   SuccessModel,
   ErrorModel
 }