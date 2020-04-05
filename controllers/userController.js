const UserModel = require("../models/userModel");
const path = require("path");
const fs = require("fs");
const bcryptjs = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");

// 用户注册
exports.register = async (req, res) => {
  // 获取 email
  const { email } = req.body;
  // 判断是否已经注册过，做一个查询操作，能查找到说明注册过了，查找不到说明没有注册
  const data = await UserModel.findOne({ email });
  // console.log(data);
  if (data) {
    // 存在，不允许再注册
    res.send({ code: -1, msg: "用户已经注册了" });
  } else {
    // 不存在，允许注册
    await UserModel.create(req.body);
    res.send({ code: 0, msg: "注册成功" });
  }
};

// 用户登录
exports.login = async (req, res) => {
  // 获取前端传递过来的 email 与 password
  const { email, password } = req.body;

  // 根据 email 去查询数据库
  const data = await UserModel.findOne({ email });

  // 判断 data 是否有值
  if (!data) {
    res.send({ code: -1, msg: "用户邮箱不正确" });
    return;
  }

  // 校验密码是否正确 bcryptjs
  if (!data.comparePassword(password)) {
    // 校验不通过
    res.send({ code: -1, msg: "密码不正确" });
    return;
  }

  // 用户可以登录

  /**
   * 生成token
   */
  const token = jsonwebtoken.sign(
    {
      // 思考将那些信息写入到token中，一般是用户角色信息、用户Id信息、用户的一些不敏感的信息
      // 不要写入太多的数据进去。

      userId: data._id,
      nickname: data.nickname
    },
    "MYGOD",
    {
      expiresIn: "2h"
    }
  );

  res.send({ code: 0, msg: "登录成功", token });
};

// 查询数据详情
exports.getInfo = async (req, res) => {
  // 1. 获取用户 id，通过 req.auth
  const { userId } = req.auth;
  // 2. 查询数据库即可
  // { passwod: 0 } 是讲 password 字段在返回中剔除掉
  const data = await UserModel.findOne({ _id: userId }, { password: 0 });
  // 3. 响应
  res.send({
    code: 0,
    msg: "OK",
    data
  });
};

// 修改头像
exports.update = async (req, res) => {
  // 1. 获取用户Id
  const { userId } = req.auth;
  // 定义一个后续有来修改的对象
  let updateData = {};
  // 2. 判断是否有传递头像过来
  if (req.file.path) {
    // 2.1 定义 newFilename 与 newFilepath
    const newFilename = `${req.file.filename}-${req.file.originalname}`;
    const newFilepath = path.resolve(__dirname, "../public", newFilename);

    // 2.2 读文件
    const fileData = fs.readFileSync(req.file.path);

    // 2.3 写文件
    fs.writeFileSync(newFilepath, fileData);

    // 2.4 给 updateData 中设置 avatar
    updateData.avatar = `${process.env.BASEURL}/${newFilename}`;
  }
  // 3. 修改数据库
  await UserModel.updateOne({ _id: userId }, updateData);
  const data = await UserModel.findOne({ _id: userId }, { password: 0 });
  // 4. 删除上传的无用文件
  fs.unlinkSync(req.file.path)
  // 5. 响应给前端
  res.send({
    code: 0,
    msg: "修改成功",
    data
  });
};

// 修改密码
exports.resetPwd = async (req, res) => {
  // 1. 获取用户Id
  const { userId } = req.auth;
  // 获取用户传递来的密码
  let { oldPwd, newPwd } = req.body;
  // 根据 id 去查询数据库
  const user = await UserModel.findOne({ _id: userId });

  if(user) { // 用户存在
    if(user.comparePassword(oldPwd)){ // 验证原来的密码是否正确
      if(user.comparePassword(newPwd)){ // 验证新密码是否与原密码相同
        res.send({
          code: -1,
          msg: '新密码不能与原密码相同！'
        })
        return
      }
      newPwd = bcryptjs.hashSync(newPwd, 10);  // 新密码进行加密
      await UserModel.updateOne({ _id: userId }, { password: newPwd });
      res.send({
        code: 0,
        msg: "修改成功"
      })
    }else { // 原密码输入错误
      res.send({
        code: -1,
        msg: "你输入的密码有误"
      })
    }
  }else { // 没有该用户
    res.send({
      code: -1,
      msg: "用户信息有误"
    })
  }

}
