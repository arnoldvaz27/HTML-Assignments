

window.onload = function() {
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    //arc(x,y,r,sAngle,eAngle,counterclockwise);
    ctx.arc(95, 95, 90, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(40, 85);
    // ctx.arc(85, 85, 35, 0, Math.PI, false); // Mouth (clockwise)
    // ctx.moveTo(65, 65);
    // ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
    // ctx.moveTo(95, 65);
    // ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
    ctx.stroke();
    
}
