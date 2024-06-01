(function ($) {
    $.fn.timeline = function () {
        var selectors = {
            id: $(this),
            item: $(this).find(".timeline-item"),
            activeClass: "timeline-item--active",
            img: ".timeline__img",
        };
        selectors.item.eq(0).addClass(selectors.activeClass);
        selectors.id.css(
            "background-image",
            "url(" +
            selectors.item.first().find(selectors.img).attr("src") +
            ")"
        );
        var itemLength = selectors.item.length;

        $(window).scroll(function () {
            var max, min;
            var windowHeight = $(window).height();
            var pos = $(this).scrollTop() + windowHeight / 2;

            selectors.item.each(function (i) {

                min = $(this).offset().top;
                max = min + $(this).height();

                if (pos >= min && pos <= max) {
                    selectors.id.css(
                        "background-image",
                        "url(" + $(this).find(selectors.img).attr("src") + ")"
                    );
                    selectors.item.removeClass(selectors.activeClass);
                    $(this).addClass(selectors.activeClass);
                }
            });
        });
    };
})(jQuery);

$("#timeline-1").timeline();