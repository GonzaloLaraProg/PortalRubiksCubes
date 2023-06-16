$(document).ready(function(){
    // Activate the carousel
    $("#myCarousel").carousel();
  
    // Enable carousel control buttons
    $(".carousel-control-prev").click(function(){
      $("#myCarousel").carousel("prev");
    });
    $(".carousel-control-next").click(function(){
      $("#myCarousel").carousel("next");
    });
  
    // Enable carousel indicators
    $(".carousel-indicators li").click(function(){
      $("#myCarousel").carousel(parseInt($(this).attr("data-slide-to")));
    });
  });