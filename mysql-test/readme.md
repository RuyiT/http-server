<!--
 * @Author: v_renjuyuan
 * @Date: 2020-05-24 17:07:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-27 00:05:42
 * @FilePath: \blog\mysql-test\readme.md
 * @Description: 
 -->

一: mysql 介绍，安装和使用
root  a123456

1.建库
查看连接下有几个数据库：  先选择连接->导航栏上面的工具->命令列界面，此时会弹出一个命令窗口-> 输入：show databases;(注意后面一定要带分号)
新建数据库：create database xxx ; 或 在该连接下右击选择新建数据库。注意：在创建的时候如果没有自己选者字符集，系统就会默认安装时候的字符集（utf8），现在字符集一般都是选者utf8.

查看该数据库下面有多少张表：show tables；

查看表的结构：desc 表名

删除一个数据库：drop database 数据库名

新建一个数据库:create database 数据库名 

https://www.cnblogs.com/neuedu/p/5876874.html

2.建表
show databasses; 查看连接下数据库

3.表操作
建表 -> 命令行 use blog; 用数据库 -> show tables; 显示表 
增.   insert into users (username,`password`,realname) values ('zhangsan', '123', '张三            ');
      insert into blogs (title,content,creatTime,author) values ('标题A','内容A',1590427134576, 'zhangsan');
删.   delete from users where username='wangwu'; 删除，一般不这样删除，而是update里更        改state字段
改.   update users set realname='李四2' where username='lisi'; 更新后面一般都带wher条       件
      update users set realname='张三3',password='456' where username='zhangsan'; 改多个字段
      update users set state='0' where username='lisi'; 把state状态改为零，一般把这个操作当作删除，软删除

查.   select * from users; 查询所有
      select version();
      select * from users where state='1'; 正常查询
      select * from users where state<>'0'; 查询state不等于0的
      select id,username from users; 查询id和username两列
      select * from users where username='xixi'; 查询username指定的列
      select * from users where username='xixi' and password='123'; 查并集
      select * from users where username='xixi' or realname='张三'; 满足一个就出来，会执行后面那个条件
      select * from users where username like '%zhang%'; 模糊查询
      select * from users where username like '%i%' order by id; 'order by id' 根据id排序
      select * from users where username like '%i%' order by id desc; 'desc'倒序查询 

二: nodejs 连接 mysql

三: api 连接mysql
