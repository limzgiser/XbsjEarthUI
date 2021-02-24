$(document).ready(function() {
  $.cookie("token", null, { path: "/" });

  var isCheckpsd =
    $.cookie("ischeckpsd") == "null" ? false : $.cookie("ischeckpsd");

  if (isCheckpsd) {
    $("#input_account").val(
      $.cookie("user") == "null" || !$.cookie("user") ? "" : $.cookie("user")
    );
    $("#input_password").val(
      $.cookie("psw") == "null" || !$.cookie("psw") ? "" : $.cookie("psw")
    );
    $("#checkbox-password")[0].style.backgroundPositionX = "-18px";
  } else {
    $("#checkbox-password")[0].style.backgroundPositionX = "0px";
    $.cookie("token", null, { path: "/" });
  }

  $("#checkpsd").click(function() {
    isCheckpsd = $.cookie("ischeckpsd");
    if (!isCheckpsd || isCheckpsd == "null") {
      isCheckpsd = true;
      $("#checkbox-password")[0].style.backgroundPositionX = "-18px";
      $.cookie("ischeckpsd", true, { expires: 7, path: "/" });
    } else {
      isCheckpsd = false;
      $("#checkbox-password")[0].style.backgroundPositionX = "0px";
      $.cookie("ischeckpsd", null, { path: "/" });
      $.cookie("token", null, { path: "/" });
    }
  });

  $("#submit").click(function() {
    var input_account = $.trim($("#input_account").val());
    var input_password = $.trim($("#input_password").val());
    if (input_account === "") {
      $("#form-message").text("用户名不能为空！");
      return;
    }
    if (input_password === "") {
      $("#form-message").text("密码不能为空！");
      return;
    }
   
    $.ajax({
      type: "post",
      processData: false,  
      url: login,
      contentType: "application/json",
      data: JSON.stringify({
        userName: input_account,
        password: input_password,
        accountType: 0,
        platform: 0,
        verifyCode: {
          id: "",
          code: "",
        },
      }),
      success: function(res) {
        if (res.code == 1) {
          var accessToken = res.data.accessToken;
          localStorage.setItem("nm-token", accessToken);
          var params = window.location.href.split("?scene=");
          if (params.length > 1) {
            var url = "./index.html?scene=" + params[1];
            window.location.href = url;
          } else {
            window.location.href = "./index.html";
          }
        } else {
          $("#form-message").text("账号密码错误!");
        }
      },
    });
  });

  $(document).keypress(function(e) {
    if (e.keyCode == 13) {
      $("#submit").click();
    }
  });
});
