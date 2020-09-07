$("a[href$='.jpg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

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
});