'use strict';

    let leftPoly = function () {
        let leftCanvas = $('leftCanvas');

           if (leftCanvas.getContext) {

            //Sets left canvas size
            var lcWidth = document.getElementById("lcwidth").value;
            var lcHeight = document.getElementById("lcheight").value;
            leftCanvas.width = lcWidth;
            leftCanvas.height = lcHeight;

            //Setup canvas
            var lctx = leftCanvas.getContext('2d');

            //executes lctx code after clicking on the right canvas (Figure how to make this shape of right canvas)
            rightCanvas.addEventListener("click", function () {

            //Triangle
            lctx.beginPath();        // new path
            lctx.moveTo(50, 200);    // goto coordinate in canvas
            lctx.lineTo(150, 50);    // line to coordinate
            lctx.lineTo(180, 150);   // another line to coord
            //lctx.lineTo(50, 200);  // --NEW-- One type of solution
            lctx.closePath();        // --NEW-- creates a path form the current point back to starting point

            lctx.fillStyle = 'green';
            lctx.strokeStyle = 'black';
            lctx.lineWidth = 10;
            lctx.fill();             // fills poly
            lctx.stroke();           // draws lines    

            //Circle
            //lctx.beginPath();
            //lctx.arc(100, 300, 40, 0, Math.PI * 1, false); //x, y, radius, start angle radian, end angle radian, clock/counterclockwise
            //lctx.closePath();

            //lctx.fillStyle = 'red';
            //lctx.strokeStyle = 'black';
            //lctx.lineWidth = 2;
            //lctx.fill();             // fills poly
            //lctx.stroke();           // draws lines 
            
            });   
            
        }
    }


    let rightPoly = function () {
        let rightCanvas = $('rightCanvas');
        if (rightCanvas.getContext) {
            var rctx = rightCanvas.getContext('2d');

            rctx.beginPath();        // new path
            rctx.moveTo(50, 200);    // goto coordinate in canvas
            rctx.lineTo(150, 50);    // line to coordinate
            rctx.lineTo(180, 150);   // another line to coord
            //rctx.lineTo(50, 200);  // --NEW-- One type of solution
            rctx.closePath();        // --NEW-- creates a path form the current point back to starting point
            rctx.fillStyle = 'silver';
            rctx.strokeStyle = 'black';
            rctx.lineWidth = 10;
            rctx.fill();             // fills poly
            rctx.stroke();           // draws lines             
        }
    }

window.addEventListener('load', leftPoly);
window.addEventListener('load', rightPoly);

