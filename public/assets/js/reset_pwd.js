$(function() {

  // 需要登录
  needLogin()

  // 点击修改密码按钮
  $("#reset_pwd").click(function() {
    // 更改密码
    $.ajax({
      url: '/users/resetPwd',
      type: 'PUT',
      headers: {
        Authorization: Cookies.get("token")
      },
      data: {
        oldPwd: $("#oldPwd").val().trim(),
        newPwd: $("#newPwd").val().trim()
      },
      success: function(res) {
        alert(res.msg)
        if(res.code !== 0) {
          return
        }else{
          console.log(1111)
          // 清除 cookie
          Cookies.remove("token")
          window.location.href = "/login.html"
        }
      }
    })
  })
})