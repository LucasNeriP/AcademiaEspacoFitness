$(document).ready(function(){
    $("#banners ul").bxSlider({
        auto: true,
        mode: 'fade',
        speed: 500,
        pause: 5000,
        controls: false,
        pager: true,
    });
    
    $('.vid01').each(function(i) {
        var self = this;
        $(this).on('click', function() {
            (self.paused) ? self.play(): self.pause();
        });
        $(this).on('ended', function() {
            bx.goToNextSlide();
        });
    });
});

