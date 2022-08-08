const isDark = window.matchMedia('(prefers-color-scheme: dark)');
  $("body").addClass( isDark ? "dark-vertion" : "white-vertion" )
$(document).ready(function(){
  let my_birthday = new Date('13 june, 2005 11:00:00').getFullYear()
  let now = new Date().getFullYear()
  let age = now - my_birthday
  let p_age = document.getElementById('myage')
  let year = document.getElementById('now_year')
  
  /* change-theme */
  $(".change-theme img").on("click", function(){
    $(this).toggleClass("active")
    console.log("clicked");
    $("body").toggleClass("white-vertion")
    $("body").toggleClass("dark-vertion")
  })
  p_age.innerHTML = age
  year.innerHTML = "© " + now


  $(".section-loader").fadeOut("slow")
            
})