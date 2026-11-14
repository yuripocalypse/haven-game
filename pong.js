paddle1 = {"x": 0, "y": 0, "xvel": 0};
paddle2 = {"x": 0, "y": 0, "xvel": 0};

document.getElementsByTagName("body")[0].addEventListener("keydown", handleKeyPress);
//document.getElementsByTagName("body")[0].addEventListener("keyup", handleKeyUp);

function gameloop()
{
	paddle1.x += paddle1.xvel;
	paddle2.x += paddle2.xvel;
	if (paddle1.x > 100) { paddle1.x = 100; };
	if (paddle1.x < 0) { paddle1.x = 0; };
	if (paddle2.x > 100) { paddle2.x = 100; };
	if (paddle2.x < 0) { paddle2.x = 0; };
	document.getElementById("paddle-1").style.left = paddle1.x + "vw";
	document.getElementById("paddle-2").style.left = paddle2.x + "vw";
};

function handleKeyPress(event)
{
	console.log(event);
	switch(event.key) {
		case "a":
			paddle1.xvel = -1;
			break;
		case "d":
			paddle1.xvel = 1;
			break;
		case "ArrowLeft":
			paddle2.xvel = -1;
			break;
		case "ArrowRight":
			paddle2.xvel = 1;
			break;
	};
};

setInterval(gameloop, 34);
