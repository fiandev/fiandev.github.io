function show(self){
  var i = $(self).html().toLowerCase();
  var c = 0;
  $("#root .base-card").remove();
  $.getJSON(`https://fiandev.github.io/tools/base-coc/data/${i}.json`,function(data){
    data.title.forEach((d,i) => {
      let title = d;
      let thumbnail = data.thumbnail[i];
      let link = data.link[i];
      let newlink = link.split("https").join("http");
      $("#root").append(`<div class="base-card clearfix">
              <h5 class="my-1 title">${title}</h5>
              <a href="${thumbnail}">
              <img class="img-fluid" src="${thumbnail}" alt="${title}" />
              </a>
              <a href="${newlink}">
              <button class="float-end btn btn-outline-primary bg-primary text-light my-1" type="button">download</button>
              </a>
            </div>`)
    })
  })
}
let w = $("#first").innerWidth();
$(".fuck-nav").css("height",`${w}`);
$(".fuck-nav").css("width",`${w}`);
