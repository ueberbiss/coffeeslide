// The CoffeSlide Magic!

$(function() {
  var $navLeft, $navRight, $navWrap, $slider, $sliderPanels, currPanel, slidePanel;
  slidePanel = function(newPanel, direction) {
    var currPos, hideLeft, hideRight, nextPos, offsetLeft;
    offsetLeft = $slider.offset().left;
    hideLeft = -1 * (offsetLeft + $slider.width());
    hideRight = $(window).width() - offsetLeft;
    if (direction === "left") {
      currPos = hideLeft;
      nextPos = hideRight;
    } else {
      currPos = hideRight;
      nextPos = hideLeft;
    }
    $slider.children(".slide-panel.active").animate({
      left: currPos
    }, 500, function() {
      return $(this).removeClass("active");
    });
    return $($sliderPanels[newPanel]).css("left", nextPos).addClass("active").animate({
      left: 0
    }, 500);
  };
  $slider = $("#full-slider");
  $sliderPanels = $slider.children(".slide-panel");
  $navWrap = $("<div id=\"full-slider-nav\"></div>").appendTo($slider);
  $navLeft = $("<div id=\"full-slider-nav-left\"></div>").appendTo($navWrap);
  $navRight = $("<div id=\"full-slider-nav-right\"></div>").appendTo($navWrap);
  currPanel = 0;
  $navLeft.click(function() {
    currPanel--;
    if (currPanel < 0) {
      currPanel = $sliderPanels.length - 1;
    }
    return slidePanel(currPanel, "right");
  });
  return $navRight.click(function() {
    currPanel++;
    if (currPanel >= $sliderPanels.length) {
      currPanel = 0;
    }
    return slidePanel(currPanel, "left");
  });
});
