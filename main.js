$(document).ready(function(){
  
  $('.popup-btn').on('click', function(){
    $('.video-popup').fadeIn('fast');
    return false;
  });
  
  $('.popup-bg').on('click', function(){
    $('.video-popup').fadeOut('fast');
    return false;
  });
  
   $('.close-btn').on('click', function(){
     $('.video-popup').fadeOut('fast');
      return false;
   });
  
});
$(function() {
  var img1 = $(".notes"),
      img2 = $(".otherNotes"),
      screenWidth = $(window).width(),
      speed = 0.5,
      duration = screenWidth / speed;

  function animateNote() {
      var randomTop = Math.random() * 90;
      img1.css({
        "left": 0,
        "top": randomTop + "%",
        "opacity": 0
      }).animate({
          "left": screenWidth
      }, {
          duration: duration,
          step: function(now, fx) {
              if (fx.prop === "left") {
                  var opacity = 1 - Math.abs(now - screenWidth / 2) / (screenWidth / 2);
                  if (now < img1.width() || now > screenWidth - img1.width()) {
                      opacity = 0;
                  }
                  $(this).css("opacity", opacity);
              }
          },
          complete: function() {
              var randomDelay = Math.random() * 5000;
              setTimeout(animateNote, randomDelay);
          }
      });
  }

  function animateOtherNote() {
      var randomTop = Math.random() * 90;
      img2.css({
        "right": 0,
        "top": randomTop + "%",
        "opacity": 0
      }).animate({
          "right": screenWidth
      }, {
          duration: duration,
          step: function(now, fx) {
              if (fx.prop === "right") {
                  var opacity = 1 - Math.abs(now - screenWidth / 2) / (screenWidth / 2);
                  if (now < img2.width() || now > screenWidth - img2.width()) {
                      opacity = 0;
                  }
                  $(this).css("opacity", opacity);
              }
          },
          complete: function() {
              var randomDelay = Math.random() * 5000;
              setTimeout(animateOtherNote, randomDelay);
          }
      });
  }

  var randomDelay = Math.random() * 5000;
  setTimeout(animateNote, randomDelay);
  var randomDelay = Math.random() * 5000;
  setTimeout(animateOtherNote, randomDelay);
});