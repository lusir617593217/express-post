$(function() {
  // 点击注册
  $("#register-btn").click(function() {
    $.ajax({
      url: '/register',
      type: 'POST',
      data: {
        email: $("#inputEmail").val(),
        password: $("#inputPassword").val()
      },
      success: function(res) {
       alert(res.msg);
       if(res.code === 0) {
         window.location.href = "/login.html"
       }
      }
    })
  })
})