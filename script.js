$(document).ready(function () {
    $("#ads").show(5000);
});
window.onload = function () {
    $(".loader_icon").click(function () {
        $(".loader_icon").fadeOut(500, function () {
            $(".left-slide22,.right-slide22").animate({
                "width": "0%"
            }, 500, function () {
                $(".loader_container").fadeOut();
            });
        });
    });

};

function PlaySound() {
    var sound = document.getElementById("audioplay");
    sound.play()
}


function updateTimer() {
    future = Date.parse("Jan 1, 2024 00:00:00");
    now = new Date();
    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("timer")
        .innerHTML =
        '<div>' + d + '<span>days</span></div>' +
        '<div>' + h + '<span>hours</span></div>' +
        '<div>' + m + '<span>minutes</span></div>' +
        '<div>' + s + '<span>seconds</span></div>';

    if (diff <= 0) {
        document.getElementById("timer").style.display = "none";
    }
}
setInterval('updateTimer()', 1000);