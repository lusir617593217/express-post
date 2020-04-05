$(function() {
  // 需要登录
  needLogin();

  // 获取id
  let herfId = getHerfId(window.location.href);

  // 数据回填
  $.ajax({
    url: `/posts/${herfId}`,
    type: "get",
    success: function(res) {
      $("#form-title").val(res.data.title);
      $("#form-content").val(res.data.content);
      $("#inlineCheckbox1").prop("checked", res.data.work)
      $("#inlineCheckbox2").prop("checked", res.data.live)
    }
  });

  $("#update-post").click(() => {
    $.ajax({
      url: `/posts/${herfId}`,
      type: "put",
      dataType: "json",
      contentType: "application/json;charset=utf-8",
      data: JSON.stringify({
        title: $("#form-title").prop("value"),
        content: $("#form-content").val(),
        work: $("#inlineCheckbox1").prop("checked"),
        live: $("#inlineCheckbox2").prop("checked")
      }),
      headers: {
        Authorization: Cookies.get("token")
      },
      success: function(res) {
        // console.log(res)
        if (res.code === 0) {
          alert("更新成功");
          window.location.href = "./index.html";
        } else {
          console.log(res);
        }
      }
    });
  });
});
