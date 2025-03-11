// let button = document.getElementById("clickMe");
//
// button.addEventListener("click", clickFunction);
//
// function clickFunction() {
//     console.log("click");
// }

// Canvas project
let canvas = document.getElementById("myCanvas");

let clickPoints = [];
let lines = canvas.getContext("2d");
let drawLine = document.getElementById("draw");
let resetCanvas = document.getElementById("reset");

canvas.addEventListener("click", function (event) {

    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    clickPoints.push({x: x, y: y});
});

drawLine.addEventListener("click", function (event) {

    lines.beginPath();
    lines.moveTo(clickPoints[0].x, clickPoints[0].y);

    for (const click in clickPoints) {
        if (click === 0) {
            continue;
        }
        lines.lineTo(clickPoints[click].x, clickPoints[click].y);
    }

    lines.stroke();

    clickPoints = [];
});

resetCanvas.addEventListener("click", function () {
    lines.clearRect(0, 0, canvas.width, canvas.height);
    clickPoints = [];
});