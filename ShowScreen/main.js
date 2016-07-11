/**
 * Created by plter on 7/11/16.
 */

(function () {

    var gui = require('nw.gui');
    gui.Screen.Init(); // you only need to call this once
    gui.Screen.chooseDesktopMedia(["window", "screen"],
        function (streamId) {
            var vid_constraint = {
                mandatory: {
                    chromeMediaSource: 'desktop',
                    chromeMediaSourceId: streamId,
                    maxWidth: 1920,
                    maxHeight: 1080
                },
                optional: []
            };
            navigator.webkitGetUserMedia({audio: false, video: vid_constraint}, function (stream) {
                document.getElementById("video").src = URL.createObjectURL(stream);
            }, function (error) {
                console.error(error);
            });
        }
    );

})();