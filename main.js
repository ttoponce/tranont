// open navbar dropdown menu on hover instead of on click
$(function(){
  $('.dropdown').hover(function() {
      $(this).addClass('open');
  },
  function() {
      $(this).removeClass('open');
  });
});
// FAQ accordion functionality
$(document).ready(function() {
    var parentDivs = $('#nestedAccordion div'),
    childDivs = $('#nestedAccordion h3').siblings('div');

    $('#nestedAccordion h2').click(function(){
        parentDivs.slideUp();
        if($(this).next().is(':hidden')){
            $(this).next().slideDown();
        }else{
            $(this).next().slideUp();
        }
    });
    $('#nestedAccordion h3').click(function(){
        childDivs.slideUp();
        if($(this).next().is(':hidden')){
            $(this).next().slideDown();
        }else{
            $(this).next().slideUp();
        }
    });
});
// color toggle for page buttons
$(".merchant-button").hover(function() {
  $(".merchant-title").toggleClass("merchant-title-color");
});
$(".tv-button").hover(function() {
  $(".tv-title").toggleClass("tv-title-color");
});
$(".protection-button").hover(function() {
  $(".protection-title").toggleClass("protection-title-color");
});
$(".telephones-button").hover(function() {
  $(".telephones-title").toggleClass("telephones-title-color");
});
$(".legal-button").hover(function() {
  $(".legal-title").toggleClass("legal-title-color");
});
$(".background-button").hover(function() {
  $(".background-title").toggleClass("background-title-color");
});
$(".security-button").hover(function() {
  $(".security-title").toggleClass("security-title-color");
});
$(".solar-button").hover(function() {
  $(".solar-title").toggleClass("solar-title-color");
});
$(".residual-button").hover(function() {
  $(".residual-title").toggleClass("residual-title-color");
});
$(".team-button").hover(function() {
  $(".team-title").toggleClass("team-title-color");
});
$(".car-button").hover(function() {
  $(".car-title").toggleClass("car-title-color");
});
$(".pools-button").hover(function() {
  $(".pools-title").toggleClass("pools-title-color");
});
$(".life-button").hover(function() {
  $(".life-title").toggleClass("life-title-color");
});
$(".commissions-button").hover(function() {
  $(".commissions-title").toggleClass("commissions-title-color");
});
$(".promotional-button").hover(function() {
  $(".promotional-title").toggleClass("promotional-title-color");
});
$(".plan-button").hover(function() {
  $(".plan-title").toggleClass("plan-title-color");
});
$(".monthly-button").hover(function() {
  $(".monthly-title").toggleClass("monthly-title-color");
});
$(".vacation-button").hover(function() {
  $(".vacation-title").toggleClass("vacation-title-color");
});
$(".ceo-button").hover(function() {
  $(".ceo-title").toggleClass("ceo-title-color");
});
// change the direction of the Font Awesome caret when panel expand and collapse
$('.button').click(function(){
  $(this).find('span').toggleClass('glyphicon-triangle-right').toggleClass('glyphicon-triangle-bottom');
});
$('.collapse').on('show.bs.collapse', function() {
  $(this).parent().find(".glyphicon-triangle-right").removeClass("glyphicon-triangle-right").addClass("glyphicon-triangle-bottom");
}).on('hide.bs.collapse', function() {
  $(this).parent().find(".glyphicon-triangle-bottom").removeClass("glyphicon-triangle-bottom").addClass("glyphicon-triangle-right");
});
// toggle class depending on browser width
$(function(){
  var $window = $(window),
      $img = $('.exec-img');

  $window.resize(function resize() {
    if ($window.width() < 535) {
      $img.removeClass('col-xs-4');
      return $img.addClass('col-xs-12');
    }
    $img.removeClass('col-xs-12');
    $img.addClass('col-xs-4');
  }).trigger('resize');
});

$(function(){
  var $window = $(window),
      $text = $('.exec-bio');

  $window.resize(function resize() {
    if ($window.width() < 535) {
      $text.removeClass('col-xs-8');
      return $text.addClass('col-xs-12');
    }
    $text.removeClass('col-xs-12');
    $text.addClass('col-xs-8');
  }).trigger('resize');
});
// script to load index.html video onclick
$('#video-button').click(function(){
  $('.top-row').fadeOut('slow');
  $('.top-row-video').css('display', 'block');
});
$('#video-button').click(function() {
  $('.top-section-video-play').after('<video class="top-video" autoplay controls><source src="https://s3-us-west-2.amazonaws.com/tranontmedia/Tranont_Intro.webm" type="video/webm"><source src="https://s3-us-west-2.amazonaws.com/tranontmedia/Tranont_Intro.mp4" type="video/mp4"> Your browser does not support playing this video.</video>')
});
