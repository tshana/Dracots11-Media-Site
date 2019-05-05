$(document).ready(function(){
// Fixed Navigation 
  $('.js--aboutSection').waypoint(function(direction){
    if(direction == "down"){$("nav").addClass('sticky fadeIn')}
    else{ $("nav").removeClass('sticky')}
  },{offset: '50px'});

// var waypoints = $('#handler-first').waypoint(function(direction) {})

/* Smooth Scrolling JQuery */
  // Selects all links with hashes
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
  // On-page links
  if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')  &&  location.hostname == this.hostname){
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({ scrollTop: target.offset().top - 40}, 1000);}
    }
  });

$('.js--wp-1').waypoint(function(){
  $('.js--wp-1').addClass('animated fadeIn');
},{offset:'450px'});


$('.js--icon').click(function(){
  var nav = $('.navigator')
  var icon = $('.js--icon i')
  nav.slideToggle(200)
  // ion-close
  if(icon.hasClass('ion-navicon')){
    icon.addClass('ion-close')
    icon.removeClass('ion-navicon')
  }else{
    icon.removeClass('ion-close')
    icon.addClass('ion-navicon')
  }


})

})