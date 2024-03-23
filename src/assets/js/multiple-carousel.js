var carouselWidth = $(".carousel-inner-2")[0].scrollWidth;
var cardWidth = $(".carousel-item-2").width();
var scrollPosition = 0;

$(".carousel-control-next-2").on("click", function () {
   if(scrollPosition > 632.7825){
    scrollPosition = 632.7825;
   }
});

$(".carousel-control-next-2").on("click", function () {

  if (scrollPosition < (carouselWidth - cardWidth * 3)) { 
    scrollPosition += cardWidth*1.05;  
    $(".carousel-inner-2").animate({ scrollLeft: scrollPosition },600);
  }
});

$(".carousel-control-prev-2").on("click", function () {
  if (scrollPosition > 0) {
    scrollPosition -= cardWidth*1.05;
    $(".carousel-inner-2").animate(
      { scrollLeft: scrollPosition },
      600
    );
  }
});