var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

/* ---Drawing Rectangle Line and Arc on a Canvas---
//Rectangle x, y, width, height
c.fillStyle = "rgba(255, 0, 0, 0.5"; //50% transparent red
c.fillRect(100, 100, 100, 100);
c.fillStyle = "rgba(0, 0, 255, 1"; //Blue
c.fillRect(400, 100, 100, 100);
c.fillStyle = "rgba(0, 255, 0, 0.5"; //50% transparent green
c.fillRect(300, 300, 100, 100);
console.log(canvas)

//Line
c.beginPath();
c.moveTo(50, 300); //Starting point x, y,
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "black";
c.stroke();


//Arc
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false); //arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): 
c.strokeStyle = "yellow";
c.stroke();
*/

/* ---Function for random hex color---
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
*/

/* ---Generating a loop---
for (var i = 0; i < 5; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = getRandomColor();
    c.lineWidth = 5;
    c.stroke();
}
*/

/* ---Source Code---
var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = (Math.random() - 0.5) * 8;
var dy = (Math.random() - 0.5) * 8;
var radius = 30;
*/

var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 40;
//  var minRadius = 2;

var colorArray = [
    "#2c3e50",
    "#e74c3c",
    "#ecf0f1",
    "#3498db",
    "#298089",
];

window.addEventListener("mousemove", 
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    })

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
});

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.lineWidth = 5;
        c.fill();
    }

    this.update = function () {
        //bounces back on canvas innerWidth
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        //bounces back on canvas innerHeight
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        // Mouse interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.radius < maxRadius) {
                this.radius += 1;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
    }
}

var circleArray = [];

function init() {
    
    circleArray = [];
    
    for (var i = 0; i < 50; i++) {                                      // Amount
        var radius = Math.random() * 50 + 5;                            // Size
        var x = Math.random() * (innerWidth - radius * 2) + radius;     // X Cords
        var y = innerHeight / 2;                                        // Y Cords
        var dx = (Math.random() - 0.5) * 10;                            // X Speed
        var dy = 0;                                                     // Y Speed
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}

console.log(circleArray);

function animate() {
    //loops the function forever when we call animate()
    requestAnimationFrame(animate);
    
    //makes sure we don't repeat our drawing
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

init();

animate();