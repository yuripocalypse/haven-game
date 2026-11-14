let circles = [];

function Circle(size, x, y, colour) {
	this.size = size;
	this.x = x;
	this.y = y;
	this.colour = colour;
};

function addCircle(size, colour, x, y) {
	circles[circles.length] = new Circle(size, x, y, colour);
	drawCircle(circles[circles.length - 1]);
	return 1;
};

function drawCircle(circle) {
	let circlestring = `<DIV class="circle" style="height:${circle.size}rem; width: ${circle.size}rem; border-radius: 100%; background-color: ${circle.colour}"> </DIV>`;
	document.getElementById("circles").innerHTML += circlestring;
};

addCircle(5, "green", 1, 1);
	
