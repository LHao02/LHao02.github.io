// aHR0cHM6Ly9naXRodWIuY29tL2x1b3N0MjYvYWNhZGVtaWMtaG9tZXBhZ2U=
$(function () {
    var lazyLoadOptions = {
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 300,
        placeholder: "",
        onError: function(element) {
            console.log('[lazyload] Error loading ' + element.data('src'));
        },
        afterLoad: function(element) {
            if (element.is('img')) {
                // remove background-image style
                element.css('background-image', 'none');
                element.css('min-height', '0');
            } else if (element.is('div')) {
                // set the style to background-size: cover; 
                element.css('background-size', 'cover');
                element.css('background-position', 'center');
            }
        }
    }

    $('img.lazy:not(.always-load), div.lazy:not(.always-load)').Lazy({visibleOnly: true, ...lazyLoadOptions});
    $('img.lazy.always-load, div.lazy.always-load').Lazy({visibleOnly: false, ...lazyLoadOptions});

    $(document).on('shown.bs.modal', function (event) {
        $(event.target).find('img.lazy[data-src]').each(function () {
            var element = $(this);
            if (element.attr('src') !== element.data('src')) {
                element.attr('src', element.data('src'));
            }
        });
    });

    $('[data-toggle="tooltip"]').tooltip()

    var $grid = $('.grid').masonry({
        "percentPosition": true,
        "itemSelector": ".grid-item",
        "columnWidth": ".grid-sizer"
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });

    $("img.lazy").on("load", function () {
        $(this).css('background-image', 'none');
        $(this).css('min-height', '0');
    });

    $(".lazy").on("load", function () {
        $grid.masonry('layout');
    });
})
