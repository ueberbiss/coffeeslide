$ ->
  slidePanel = (newPanel, direction) ->
    
    offsetLeft = $slider.offset().left
    hideLeft = -1 * (offsetLeft + $slider.width())
    hideRight = $(window).width() - offsetLeft
    
    if direction is "left"
      currPos = hideLeft
      nextPos = hideRight
    else
      currPos = hideRight
      nextPos = hideLeft
    
    $slider.children(".slide-panel.active").animate
      left: currPos
    , 500, ->
      $(this).removeClass "active"

    $($sliderPanels[newPanel]).css("left", nextPos).addClass("active").animate
      left: 0
    , 500
  $slider = $("#full-slider")
  $sliderPanels = $slider.children(".slide-panel")
  $navWrap = $("<div id=\"full-slider-nav\"></div>").appendTo($slider)
  $navLeft = $("<div id=\"full-slider-nav-left\"></div>").appendTo($navWrap)
  $navRight = $("<div id=\"full-slider-nav-right\"></div>").appendTo($navWrap)
  currPanel = 0
  $navLeft.click ->
    currPanel--
    currPanel = $sliderPanels.length - 1  if currPanel < 0
    slidePanel currPanel, "right"

  $navRight.click ->
    currPanel++
    currPanel = 0  if currPanel >= $sliderPanels.length
    slidePanel currPanel, "left"