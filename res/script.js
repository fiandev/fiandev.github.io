var counter_slider_project = 0;
var a = 0;
const skills_div = document.querySelector("#skils");
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
   console.log(e);
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


$(document).ready(function(){
 document.querySelectorAll(".my-hastag a").forEach((e) => {
   let h = e.innerHTML || e.innerText;
   e.href=`//google.com/search?q=${h}`;
 })
})

var counter = 0;
let e = document.querySelectorAll("#slide-container img");
let f = document.querySelector("#slide-container .first");
function slideNext() {
  if (counter >= e.length - 1) {
    f.style.marginLeft=`0%`;
    counter = 0;
  } else {
    counter++;
    f.style.marginLeft=`-${counter}00%`;
    
  }
}
function slidePrevious() {
  if (counter <= 0) {
    f.style.marginLeft=`-${e.length - 1}00%`;
    counter = e.length
  } else {
    counter--;
    f.style.marginLeft=`-${counter}00%`;
  }
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbx76eAMvYuSwGjzG15OMNxbmnin53QObUqrs6dc-961V4MhZZntuQhp5d_dYVzGtSvZ-w/exec'
const form = document.forms['contact']
const btnSend = document.querySelector(".btn-send")
const btnLoading = document.querySelector(".btn-loading")
const alertForm = document.querySelector(".alert-form")
form.addEventListener('submit', e => {
  e.preventDefault()
  btnSend.classList.toggle("d-none")
  btnLoading.classList.toggle("d-none")
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      btnSend.classList.toggle("d-none")
      btnLoading.classList.toggle("d-none")
      alertForm.classList.toggle("d-none")
      form.reset();
      console.log('Success!', response)
     })
    .catch(error => console.error('Error!', error.message))
})


let urlProject = [
  "//fiandev.github.io/kimia/kalkulator-stoikiometri/",
  "//fiandev.github.io/game/shooter-ball",
  "//fiandev.github.io/tools/morse-konverter/",
  "//fiandev.github.io/base-coc/",
  "//fiandev.github.io/kimia/kalkulator-massa_unsur/",
  "//fiandev.github.io/tetris/"
]; // data from server if using php
let nama_projects = [
  "kalkulator stoikiometri",
  "shooter ball", 
  "morse konverter",
  "base coc",
  "kalkulator massa unsur",
  "tetris"
  ];
nama_projects.forEach((n, i) => {
  if (i == 0) {
    $("#slide-container").append(`<img class="lazy-image first" src="/img/project${i + 1}.jpg" />`);
  } else {
    $("#slide-container").append(`<img class="lazy-image" src="/img/project${i + 1}.jpg" />`);
  }
  document.querySelector("#list-projects").insertAdjacentHTML("beforeend",`
  <div class="accordion-content">
      <a href="${urlProject[i]}">
        <p>${n}</p>
      </a>
  </div>`);
})
document.querySelectorAll(".progress .progress-bar").forEach((e) => {
  let w = e.getAttribute("aria-valuenow");
  e.style.width=`${w}%`;
 })
document.querySelectorAll(".progress-bar").forEach((e) => {
    e.style.backgroundColor=`hsl(${Math.random() * 360 }, 50%, 50%)`;
    e.style.animation="progress 2s linear";
 })