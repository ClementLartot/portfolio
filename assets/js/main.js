$("a[href$='.jpg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("video-popup");

$("a[href$='.mp4']").addClass('video-popup');

$(document).ready(function () {
    $('.image-popup').magnificPopup({
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
        },
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
    
    $('video-popup').magnificPopup({
        items: {
            type: 'inline',
            src: '<div class="mfp-video"><video controls autoplay name="Simulation océan"><source src="https://clementlartot.github.io/portfolio/assets/videos/OceanSimulation.mp4" type="video/mp4"></video></div>',
            removalDelay: 300,
            mainClass: 'mfp-fade'
        }
    });
});
