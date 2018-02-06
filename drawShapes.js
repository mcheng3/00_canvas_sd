var drawCircle = true;
var canvas = document.getElementById("drawarea");
var ctx = canvas.getContext("2d");


var clear = function(){
    ctx.clearRect(0, 0, 500, 500);
};

var toggle = function(){
    drawCircle = !drawCircle;
};

var drawShape = function(e){
	if(drawCircle){
		console.log("x: " + e.clientX + "  y: " + e.clientY);
		ctx.fillStyle="#A7414A";
		ctx.lineTo(e.offsetX, e.offsetY);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(e.offsetX, e.offsetY, 10, 0, 2*Math.PI);
		ctx.stroke();
		ctx.fill();
		ctx.beginPath();
		ctx.moveTo(e.offsetX, e.offsetY);	
		
	}
	/*else{
		ctx.fillStyle="#282726";
		ctx.beginPath();
		ctx.rect(e.offsetX, e.offsetY, 20, 20);
		//ctx.stroke();
		ctx.fill();
	}*/
}    

document.getElementById("clear").addEventListener("click", clear);
//document.getElementById("toggle").addEventListener("click", toggle);
document.getElementById("drawarea").addEventListener("click", drawShape);
