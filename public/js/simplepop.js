
'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})
/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here

  $(".title_clicked").click(function(){
    //add your Woopra tracking code for version A's like button click event
    woopra.track("title_clicked")
  })

  $(".map_nav_clicked").click(function(){
    //add your Woopra tracking code for version A's like button click event
    woopra.track("map_nav_clicked")
  })

  $(".map_img_clicked").click(function(){
    //add your Woopra tracking code for version A's like button click event
    woopra.track("map_img_clicked")
  })

  $(".map_text_clicked").click(function(){
    //add your Woopra tracking code for version A's like button click event
    woopra.track("map_text_clicked")
  })

  $(".stories_nav_clicked").click(function(){
    //add your Woopra tracking code for version A's like button click event
    woopra.track("stories_nav_clicked")
  })

$(".stories_img_clicked").click(function(){
    //add your Woopra tracking code for version A's like button click event
    woopra.track("stories_img_clicked")
  })

$(".stories_text_clicked").click(function(){
    //add your Woopra tracking code for version A's like button click event
    woopra.track("stories_text_clicked")
  })

}


$(function() {
  $('header a').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });
  var $navTop = $('#js-nav').offset().top;
  $(window).scroll(function() {
    if ($(this).scrollTop() > $navTop) {
      $('#js-nav').addClass('fixed');
    } else {
      $('#js-nav').removeClass('fixed');
    }
  });
  var form = document.getElementById('js-form');
  var mail = document.getElementById('js-mail');
  var button = document.getElementById('js-button');
  if (!Modernizr.input.required) {}
  button.addEventListener('click', function() {
    if (mail.value.length <= 0) {
      mail.style.outlineColor = "#ff0000";
      mail.style.color = "#ff0000";
    }
  });
  $('form').submit(function(e) {
    $('input').hide();
    $('button').addClass('button-full').html('Thank you!').attr({'value': 'Thank you!', 'disabled': true});
    $('.sec-about').find('button').hide();
    e.preventDefault();
  });
});


