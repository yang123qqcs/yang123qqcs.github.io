function ckform()
{
    if($("#sq_title").val() == "" || $("#sq_title").val() == null)
    {
        alert("请输入标题！");
        $("#sq_title").focus();
        return false;
    }
    else if($("#sq_content").val() == "" || $("#sq_content").val() == null)
    {
        alert("请输入内容！");
        $("#sq_content").focus();
        return false;
    }
    else if($("#sq_realname").val() == "" || $("#sq_realname").val() == null){

        alert("请输入姓名！");
        $("#sq_realname").focus();
        return false;
    }
	else if($("#sq_card_id").val() == "" || $("#sq_card_id").val() == null){

        alert("请输入身份证号！");
        $("#sq_card_id").focus();
        return false;
    }
    else if($("#sq_address").val() == "" || $("#sq_address").val() == null)
    {
        alert("请输入联系地址！");
        $("#sq_address").focus();
        return false;
    }
    else if($("#sq_phone").val() == "" || $("#sq_phone").val() == null)
    {
        alert("请输入联系电话！");
        $("#sq_phone").focus();
        return false;
    }
    else if($("#sq_email").val() == "" || $("#sq_email").val() == null)
    {
        alert("请输入电子邮件！");
        $("#sq_email").focus();
        return false;
    }
	 else if($("#auth_code").val() == "" || $("#auth_code").val() == null)
    {
        alert("请输入验证码！");
        $("#auth_code").focus();
        return false;
    }
    else {
        return true;
    }

}