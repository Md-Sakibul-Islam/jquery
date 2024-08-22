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

// focus event 
  $('#fname, #lname').on('focus',function(){
    $('#fname,#lname').css('outline','2px solid salmon');
    $('#fname, #lname' ).css('border-radius','10px');
    $('#fname, #lname').css('padding','10px 13px');
    $('#fname, #lname').css('border','1px solid transparent');
    $('#lname,#fname').css('background-color','salmon');

  });

// blur event 
  $('#lname').on('blur',function(){

    $('#lname').css('background-color','red');

  });

  $('#lname').on('select',function(){

    $('#lname').css('background-color','green');

  });

  $('#desh').on('change',function(){
    var desh = $('#desh').val();
    $('#country').html(desh);
    $('#country').css('margin-top','10px');
    $('#country').css('color','salmon');
   

  });

//   submit event 
  $('#submit').on('submit',function(){

   $('#message').html('Thanks For Submission');
   $("#message").css("background-color", "salmon");
   $("#message").css("padding", "10px");
   $("#message").css("color", "white");
   $("#message").css("text-align", "center");
   $("#message").css("border-radius", "10px");
   $("#message").css("transition", "0.3s");

  });
 
});
