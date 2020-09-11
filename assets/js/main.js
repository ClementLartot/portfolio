$("a[href$='StarcheapTrailer.mp4']").attr('id', 'starcheap-video');

$("a[href$='.jpg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

$("a[href$='OceanSimulation.mp4']").attr('id', 'ocean');

$("a[href$='OceanSimulationWireframe.mp4']").attr('id', 'ocean-wireframe');

$(document).ready(function () {
    $('#starcheap-video').magnificPopup({
        items: {
            type: 'inline',
            src: '<div class="mfp-video"><video controls autoplay name="Starcheap trailer"><source src="https://clementlartot.github.io/portfolio/assets/videos/StarcheapTrailer.mp4" type="video/mp4"></video></div>',
            removalDelay: 300,
            mainClass: 'mfp-fade'
        }
    });
    
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
    
    $('#ocean').magnificPopup({
        items: {
            type: 'inline',
            src: '<div class="mfp-video"><video controls autoplay name="Simulation océan"><source src="https://clementlartot.github.io/portfolio/assets/videos/OceanSimulation.mp4" type="video/mp4"></video></div>',
            removalDelay: 300,
            mainClass: 'mfp-fade'
        }
    });
    
    $('#ocean-wireframe').magnificPopup({
        items: {
            type: 'inline',
            src: '<div class="mfp-video"><video controls autoplay name="Simulation océan wireframe"><source src="https://clementlartot.github.io/portfolio/assets/videos/OceanSimulationWireframe.mp4" type="video/mp4"></video></div>',
            removalDelay: 300,
            mainClass: 'mfp-fade'
        }
    });
});
