let circles = [];
let player = {"x": 5, "y": 5, "height": 2, "xvel": 0};


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
	let circlestring = `<DIV class="circle" style="height:${circle.size}rem; width: ${circle.size}rem; border-radius: 100%; background-color: ${circle.colour}; position: fixed; top: ${circle.y}rem; left: ${circle.x}rem; border-style: solid;"> </DIV>`;
	document.getElementById("circles").innerHTML += circlestring;
};

const colours = ["red", "green", "yellow", "purple"];

function randomCircles(count) 
{
	for (x = 5; x < 150; x+=13) {
		for (y = 5; y < 95; y+=13) {
			addCircle(5 + 2*Math.random()
				,colours[Math.floor(Math.random() *
					colours.length)], x, y);
		};
	};
};

randomCircles(5);

function distance(point1, point2)
{
	return math.sqrt((point1.x-point2.x)**2+(point1.y-point2.y)**2);
};

function findClosestCircle(player)
{
	let s_d = 124124; let s_d_i = -1;
	for (i = 0; i < circles.length; i++) {
		let temp = distance(circles[i], player);
		if (temp < s_d) {
			s_d_i = i;
			s_d = temp;
		};
	};
	return s_d_i;
};

function pointTowardsCircle(player, circle)
{
	};

function movePlayer()
{
	document.getElementById("player").style.top = player.y;
	document.getElementById("player").style.left = player.x;
};
function gameloop()
{
	movePlayer()
};
	
setInterval(gameloop, 34);

document.getElementsByTagName("body")[0].addEventListener("keydown", handleKeyPress);

function handleKeyPress(event)
{
	switch(event.key) {
		case "ArrowLeft":
			xvel = -1;
			break;
		case "ArrowRight":
			xvel = 1;
			break;
	};
};

