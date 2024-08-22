$(document).ready(function () {
  // mouse click event
  $("#alertBtn").on("click", function () {
    alert("This is Alert message !");
  });

  // mouse double click event
  $("#dblBtn").on("dblclick", function () {
    $("#dblText").css("background-color", "salmon");
    $("#dblText").css("padding", "10px");
    $("#dblText").css("color", "white");
    $("#dblText").css("text-align", "center");
    $("#dblText").css("border-radius", "10px");
    $("#dblText").css("transition", "0.3s");
  });

  // mouse contextmenu right click event

  $("#contextBtn").on("contextmenu", function () {
    $("#conText").hide();

    $("#showConText").html("Wow You Change The Context !");
  });


  $('#enterBtn').on('mouseenter',function(){
    $(this).css('background-color','salmon')
    $(this).css('color','white')
    $(this).css('transition','0.3s')
  });


  $('#enterBtn').on('mouseleave',function(){
    $(this).css('background-color','white')
    $(this).css('color','salmon')
    $(this).css('transition','0.3s')
  });
 
});
