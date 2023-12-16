var intervalid = 0;
var change = 100;

function picMove() {
    var image = document.getElementById("ImageMove");
    intervalid = setInterval(function() {
        image.style.left = change + "px";
        image.style.top = change + "px";
        change += 5;
        document.getElementById("msg").innerHTML = "x = " + image.style.left + ", y = " + image.style.top;
    }, 500);
}

function Halt() {
    function intervalid()
    {clearInterval(intervalid)};
}