function getScrollTopElement() {
  return ($('.body-wrapper').hasClass('IE') || $('.body-wrapper').hasClass('Firefox')) ? 'html' : 'body'; // IE needs html, the rest need body
}

function addScrollEventListeners() {
  // This will add the click event listener to any element with the willScroll class and get the
  // data attr that will tell it where to scroll.
  $('.willScroll').each(function(elem) {

    var scrollTopElement = getScrollTopElement();
    var destination = $(this).data('scroll2');
    var okay2scroll = true;

    $(this).on('click', function() {

      // Check to see if the item it's supposed to scroll to isn't on the page
      // becuase it was hidden. Can't check for display: none; because if an element is set
      // to display none and is a lining.js target, the DOM will be scrambled.
      if ($(destination).parents().hasClass('hide-for-lining') && $(window).width() <= 992) {
        okay2scroll = false;
      }
      if (okay2scroll) {
        $(scrollTopElement).animate({
          scrollTop: $(destination).offset().top
        }, 'slow', 'swing', function() {});
      }
    });
  });
}
