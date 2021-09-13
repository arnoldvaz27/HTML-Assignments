
window.onload = function () {
    var c = document.getElementById("myCanvas");
    var img = document.getElementById("myImage");

    //canvas must be squared and take the bigger size width or height
    var cnvsSize;
    if (img.width > img.height) {
        cnvsSize = img.width;
        isHorizontal = true;
    }
    else {
        cnvsSize = img.height;
        isHorizontal = false;
    }
    c.width = cnvsSize;
    c.height = cnvsSize;

    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);

    //go to the center of the canvas and rotate
    ctx.translate(c.width / 2, c.height / 2);
    ctx.rotate(90 * Math.PI / 180);

    //default x and y to draw
    var Y = -cnvsSize / 2;
    var X = -cnvsSize / 2;

    //calculate the x and y for the image to be drawn
    if (isHorizontal) {
        Y = (- img.height) / 2;
    }
    else {
        X = (- img.width) / 2;
    }

    ctx.drawImage(img, X, Y);

    //a temporary squared image
    var imgSquared = new Image();

    //take the data of the squared image
    imgSquared.src = c.toDataURL("image/jpg");


    imgSquared.onload = function () {

        //resize the canvas to the oposite to the original image
        c.width = img.height;
        c.height = img.width;

        //source is my squared image
        if (isHorizontal) {
            var sourceX = (cnvsSize - c.width) / 2;
            var sourceY = 0;
        }
        else {
            var sourceX = 0;
            var sourceY = (cnvsSize - c.height) / 2;
        }

        var sourceWidth = c.width;
        var sourceHeight = c.height;

        //destination is canvas resized
        var destX = 0;
        var destY = 0;
        var destWidth = c.width;
        var destHeight = c.height;

        ctx.clearRect(0, 0, c.width, c.height);

        ctx.drawImage(imgSquared, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);

        imgSquared = null;
    };
}