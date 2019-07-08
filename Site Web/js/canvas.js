var canvasContenair = document.getElementById('signature');
var resaBtn = document.getElementById("resaBtn");

resaBtn.addEventListener("click",()=>
    {
        canvasContenair.style.opacity = "1";
    });


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var radius = 3;
var dragging = false;

ctx.lineWidth = radius*2;

var putPoint = function(e)
	{
	if(dragging)
		{
			ctx.lineTo(e.offsetX, e.offsetY);
			ctx.stroke ();
			ctx.beginPath();
			ctx.arc(e.offsetX, e.offsetY, radius, 0, Math.PI*2);
			ctx.fill();
			ctx.beginPath();
			ctx.moveTo(e.offsetX, e.offsetY);
		}
	}

var engage = function(e)
	{
		dragging = true;
		putPoint(e);
	}

var disengage = function()
	{
		dragging = false;
	}

canvas.addEventListener("mousedown", engage);
canvas.addEventListener("mousemove", putPoint);
canvas.addEventListener("mouseup", disengage);