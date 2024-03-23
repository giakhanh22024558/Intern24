var carouselWidth = $(".carousel-inner-2")[0].scrollWidth;
var cardWidth = $(".carousel-item-2").width();
var scrollPosition = 0;

$(".carousel-control-next-2").on("click", function () {
  if (scrollPosition < (carouselWidth - cardWidth * 4)) { //check if you can go any further
    scrollPosition += cardWidth ;  //update scroll position
    $(".carousel-inner-2").animate({ scrollLeft: scrollPosition },600); //scroll left
  }
});

$(".carousel-control-prev-2").on("click", function () {
  if (scrollPosition > 0) {
    scrollPosition -= cardWidth + 16;
    $(".carousel-inner-2").animate(
      { scrollLeft: scrollPosition },
      600
    );
  }
});