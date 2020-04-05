$(function() {
  // 判断是否有登录，没有登录需要去登录页面
  // 使用写在 common.js 中的判断方法
  needLogin();

  // console.log($("#inlineCheckbox1").attr('checked'))
  $("#create-post").click(() => {
    var checkbox1 = $("#inlineCheckbox1").prop('checked') ? true : false;
    var checkbox2 = $("#inlineCheckbox2").prop('checked') ? true : false;
    $.ajax({
      url: `/posts`,
      type: "post",
      data: {
        title: $("#form-title").val(),
        content: $("#form-content").val(),
        work: checkbox1,
        live: checkbox2
      },
      // 请求头中需要添加 
      headers: {
        Authorization: Cookies.get("token")
      },
      success: function(res) {
        // console.log(res)
        if (res.code === 0) {
          window.location.href = "./index.html";
        } else {
          console.log(res);
        }
      }
    });
  });
});
