var acc = document.getElementsByClassName("q");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      $('html, body').animate({scrollTop: '-='+panel.style.maxHeight+"px"}, 700);
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      $('html, body').animate({scrollTop: '+='+panel.style.maxHeight+"px"}, 700);
      // panel.style.display = "block";
    }
  });
}

$(window).scroll(function(){
            if ($(this).scrollTop() > 800) {
                navigation.style.transform="translateY(0)";
            } else {
                navigation.style.transform="translateY(-100px)";
            }
});

$('.sendy').click(function(){
    $('#pop-up').fadeIn(500);
});

$(window).mouseup(function(e) {
    var container = $("#pop-up");
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
        container.hide();
    }
});

$('.out').click(function(){
    $('#pop-up').fadeOut(100);
    $('#pop-up2').fadeIn(500);
});

$('.close').click(function(){
    $('#pop-up').fadeOut(100);
    $('#pop-up2').fadeOut(100);
});

$(window).mouseup(function(e) {
    var container = $("#pop-up2");
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
        container.hide();
    }
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
    if ($('#begin').isInViewport()) {
        begin.style.opacity = 1;
        begin.style.transform = "translateY(0)";
        begin.style.transform = "skewY(0deg)";
    } else {
          begin.style.opacity = 0;
          begin.style.transform = "translateY(200px)";
          begin.style.transform = "skewY(-4.5deg)";
        }
});

$(window).on('resize scroll', function() {
    if ($('#target').isInViewport()) {
        target.style.opacity = 1;
        target.style.transform = "translateY(0)";
        target.style.transform = "skewY(0deg)";
    } else {
          target.style.opacity = 0;
          target.style.transform = "translateY(200px)";
          target.style.transform = "skewY(-4.5deg)";
        }
});

$(window).on('resize scroll', function() {
    if ($('#arrows').isInViewport()) {
        arrows.style.opacity = 1;
        arrows.style.transform = "translateY(0)";
        arrows.style.transform = "skewY(0deg)";
    } else {
          arrows.style.opacity = 0;
          arrows.style.transform = "translateY(-200px)";
          arrows.style.transform = "skewY(-4.5deg)";
        }
});

$(window).on('resize scroll', function() {
    if ($('#salons').isInViewport()) {
        salons.style.opacity = 1;
        salons.style.transform = "translateY(0)";
        salons.style.transform = "skewY(0deg)";
    } else {
          salons.style.opacity = 0;
          salons.style.transform = "translateY(300px)";
          salons.style.transform = "skewY(-4.5deg)";
        }
});

$(window).on('resize scroll', function() {
    if ($('#faq').isInViewport()) {
        faq.style.opacity = 1;
        faq.style.transform = "translateY(0)";
        faq.style.transform = "skewY(0deg)";
    } else {
          faq.style.opacity = 0;
          faq.style.transform = "translateY(100px)";
          faq.style.transform = "skewY(-4.5deg)";
        }
});

$(window).on('resize scroll', function() {
    if ($('#best').isInViewport()) {
      best.style.opacity = 1;
      best.style.transform = "translateY(0)";
      best.style.transform = "skewY(0deg)";
    } else {
      best.style.opacity = 0;
      best.style.transform = "translateY(200px)";
      best.style.transform = "skewY(-4.5deg)";
    }
});

$(window).on('resize scroll', function() {
    if ($('#send').isInViewport()) {
      send.style.opacity = 1;
      send.style.transform = "translateY(0)";
      send.style.transform = "skewY(0deg)";
    } else {
      send.style.opacity = 0;
      send.style.transform = "translateY(200px)";
      send.style.transform = "skewY(-4.5deg)";
    }
});
