var counter_slider_project = 0;
var a = 0;
function slider_project(){
  try {
    let items = document.querySelectorAll("#slide-container img");
    if (counter_slider_project > items.length) {
      counter_slider_project = 0;
      a = 0;
      items[0].style.margin=`0%`;
    }
      counter_slider_project++;
      a += 100;
      items[0].style.marginLeft=`-${a}%`;
  } catch (e) {
   alert(e)
  }
}
$(".burger").on("click", function(){
  
  $("#profile nav").css("transform","translateX(0)");
  $("body").append(`<div class="anu" onclick="hide_sideNav()" style="position: fixed; top: 0;bottom:0;left:0;right:0; background-color:#000; z-index:1;opacity:.6;"></div>`);
  $("#profile nav ul a").on("click",function(){
    hide_sideNav();
  })
})

$("#profile nav ul li a").on("click",function(){
  $("#profile nav ul li a").removeClass("active");
  $(this).addClass("active");
})
$(document).ready(function()
{
    $(window).scroll(function()
    {
        var div = $(this);
        if (div.scrollTop() == 0)
        {
          // alert("Reached the bottom!");
         // $(".burger").css("position","static");
          $(".header-mobile").css("background-color","#03baff");
          $(".header-mobile h1").css("display","none");
          $(".logo-text-mobile").css("opacity",1);
          $(".logo-text-mobile").css("transform","translateY(0%)");
        }
        else
        {
          //$(".burger").css("position","fixed");
          $(".header-mobile").css("background-color","#006dea");
          $(".header-mobile h1").css("display","block");
         // $(".logo-text-mobile").css("transform","translateX(120%)");
          $(".logo-text-mobile").css("transform","translateY(-200%)");
          $(".logo-text-mobile").css("opacity",0)
         $(".lazy-image").css("display","block");
          setTimeout(() => {
            $(".lazy-image").css("opacity","1");
          },100)
        // $(".header-mobile").css("position","fixed");
        }
    });
});

function hide_sideNav(){
  $(".anu").remove();
  $("#profile nav").css("transform","translateX(-200%)");
}
/*
var x = setInterval(slider_project,1000);
setTimeout(function() {
  clearInterval(x)
}, 4000);
*/



$("#form-contact").attr("action","http://localhost:8080/api/login.php");
$("#form-contact").append(`<input type="hidden" name="urlSender" value="${window.location.href}" />`)



