// window.fbAsyncInit = function () {
//     FB.init({
//         xfbml: true,
//         version: 'v3.3'
//     });
// };

// (function (d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) return;
//     js = d.createElement(s); js.id = id;
//     js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js#xfbml=1&version=v3.3&autoLogAppEvents=1';
//     fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));


window.fbAsyncInit = function () {
    FB.init({
        appId: '449532792515169',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v2.11'
    });
};
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

