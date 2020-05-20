$("#submit-form").click(function(){
  var email = $("#email").val();
  var name = $("#name").val();
  var message = $("#message").val();
  var company = $("#company").val();
  var error = false;
  if(!email || !validateEmail(email)){
    $("#email").addClass("input-error");
    error = true;
  } else {
    $("#email").removeClass("input-error");
  }
  if(!name){
    $("#name").addClass("input-error");
    error = true;
  } else {
    $("#name").removeClass("input-error");
  }
  if(!message){
    $("#message").addClass("input-error");
    error = true;
  } else {
    $("#message").removeClass("input-error");
  }
  if(!company){
    $("#company").addClass("input-error");
    error = true;
  } else {
    $("#company").removeClass("input-error");
  }
  if(!error){
    $("#preloader").fadeIn();
    jQuery.ajax({
      url: "send.php",
      data: "name="+name+"&email="+email+"&comment="+message+"&company="+company,
      type: "POST",
      success: function(resp){
		  resp = $.parseJSON(resp);
        if(resp.success){
		$("#name").val("");
        $("#email").val("");
        $("#message").val("");
        $("#company").val("");
		}
        $("#preloader").delay(500).fadeOut('slow', function () {
          alert(resp.error ? resp.error : resp.success);
        });
		
      },
      error: function(resp) {
        $("#preloader").delay(500).fadeOut('slow', function () {
          alert(resp);
        });
      }
    });
  }

});