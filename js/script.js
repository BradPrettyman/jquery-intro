jQuery(document).ready(function() {
  // jQuery("h1").click(function() {
  //   alert("This is a heading.");
  //   alert("I told you, THIS IS A HEADING!");
  // });

  // jQuery("p").click(function() {
  //   alert("This is a paragraph.");
  // });

  // jQuery("img").click(function() {
  //   alert("This is an image.");
  // });
});

$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $('.walrus-facts button').on('click', function () {
    $('.effect-fadein').fadeIn();
    $('.effect-fadeout').fadeOut();
    $('.effect-fadetoggle').fadeToggle();
    $('.effect-slideup').slideUp();
    $('.effect-slidedown').slideDown();
    $('.effect-slidetoggle').slideToggle();
  })
});