$("a[href$='.jpg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

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
        type: 'video',
        iframe: {
            patterns: {
                local: {
                    index: 'local/',
                    id: function(url) {
                        var idx = url.indexOf('assets/');
                        if (idx != -1)
                            return url[idx];
                        return null;
                    },
                    src: '%id%'
                }
            }
        }        
    });
});
