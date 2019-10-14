/* eslint-disable */
$(function () {
    $('#loading-screen').delay(500).fadeOut('slow');
    $('.onload').addClass('loaded');

    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }

    $('.cookie-content__buttons--agree').on('click', function (e) {
        e.preventDefault();

        $.ajax({
            type: 'GET',
            url: $(this).attr('href'),
            success: function (data) {
                if (data.success) {
                    $('.cookie-warning').fadeOut('slow');
                }
            },
            error: function (request, status, error) {

            },
        });
    });

    // console.log(getCookie('cookies_consent'));


    // Retrieve colors from DB and set to socials
    // $('.footer__socials a').each(function () {
    //     var color = $(this).data('color');
    //     $(this).find('i').css({ 'color': color });
    //     $(this).find('div').css({ 'background-color': color });
    // });

    // function getRandomInt(max) {
    //     return Math.floor(Math.random() * Math.floor(max));
    // }

    // $('.photo-wrapper').each(function () {
    //     $(this).attr('data-aos-delay', getRandomInt(1000));
    //     $(this).attr('data-aos-duration', getRandomInt(1000));
    // });
});
