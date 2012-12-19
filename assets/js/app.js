$('#device-container').isotope({
    itemSelector : '.device',
    layoutMode : 'masonry',
    animationEngine : 'jquery'
});

$('#url').keyup(function() {
    clearTimeout($.data(this, 'timer'));
    $('#url').popover('hide');
    var wait = setTimeout(displayPopover, 500);
    $(this).data('timer', wait);
});

function displayPopover(){
    $('#url').popover('show');
    $('.device').hover(
        function () {
            $('.device a').fadeIn(50);
            $('#url').popover('hide');
          },
          function () {
            $('.device a').fadeOut(50);
          }
    );
}