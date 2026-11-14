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
	let circlestring = `<DIV class="circle" style="height:${circle.size}rem; width: ${circle.size}rem; border-radius: 100%; background-color: ${circle.colour}; position: fixed; top: ${circle.y}rem; left: ${circle.x}rem;"> </DIV>`;
	document.getElementById("circles").innerHTML += circlestring;
};
const colours = ["red", "green", "yellow", "purple"];
function randomCircles(count) 
{
	for (x = 5; x < 295; x+=13) {
		for (y = 5; y < 95; y+=13) {
			addCircle(5 + 2*Math.random() ,colours[Math.floor(Math.random() * colours.length)], x, y);
		};
	};
};

randomCircles(5);

	
