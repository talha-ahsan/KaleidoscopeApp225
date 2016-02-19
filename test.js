$(function() {
    var canvas = $('#kaleidoscope')
    console.log(canvas)
    var g = canvas[0].getContext('2d')

    g.moveTo(10, 10)
    g.lineTo(12, 40)
    g.lineTo(21, 53)
    g.stroke()


    g.beginPath();
    g.arc(95, 50, 40, 0, 2 * Math.PI);
    g.stroke();

    //g.beginPath();
    //g.arc(95, 50, 40, 0, 2 * Math.PI);
    //g.stroke();

    var grd = g.createLinearGradient(100, 0, 200, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "blue");

    //grd.addColorStop(0.7, 'rgba(255,255,255,100)');

    g.fillStyle = grd;
    g.fillRect(80, 60, 75, 50);


    g.translate(0, 100);
    g.scale(1, -1);

    g.fillStyle = grd;
    g.fillRect(80, 45, 75, 50);


    g.moveTo(10, 10)
    g.lineTo(12, 40)
    g.lineTo(21, 53)
    g.stroke()

    //var img = "k.jpg";//new Image();
    //img.src = "k.jpg";

    //g.translate(0, 100);
    //g.scale(1, -1);
    //g.drawImage('k.jpg', 0, 0, 200, 100);

    //g.translate(0,0);
    //g.rect(0, 0, 100, 100);
   // g.fill();

    var img = new Image();
    img.src = "k.jpg"
    img.onload = function() {
        g.translate(0, 100);
        g.scale(1, -1);
        g.rotate(0.5)
        g.drawImage(img, 0, 0, 200, 100);
    }
});
    //var img = new Image();




