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

//   mouse enter event 
  $('#enterBtn').on('mouseenter',function(){
    $(this).css('background-color','salmon')
    $(this).css('color','white')
    $(this).css('transition','0.3s')
  });

  //   mouse leave event 

  $('#enterBtn').on('mouseleave',function(){
    $(this).css('background-color','white')
    $(this).css('color','salmon')
    $(this).css('transition','0.3s')
  });


   //   keyboard event 'keypress' 'keydown' almost same 
  $('body').on('keypress',function(){
    $('#color-plate').css('height','50px');
    $('#color-plate').css('background-color','purple');
    $('#color-plate').css('border-radius','10px');
  });
 
   //   keyboard event 'keyup' 
  $('body').on('keyup',function(){
    $('#circle').css('height','60px');
    $('#circle').css('width','60px');
    $('#circle').css('background-color','red');
    $('#circle').css('border-radius','50%');
  });
 
});
