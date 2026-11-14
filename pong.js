paddle1 = {"x": 0, "y": 0, "xvel": 0};
paddle2 = {"x": 0, "y": 0, "xvel": 0};
ball = {"x": 50, "y": 50, "xvel": 1, "yvel": 1};

document.getElementsByTagName("body")[0].addEventListener("keydown", handleKeyPress);
//document.getElementsByTagName("body")[0].addEventListener("keyup", handleKeyUp);

function gameloop()
{
	paddle1.x += paddle1.xvel;
	paddle2.x += paddle2.xvel;
	ball.x += ball.xvel;
	ball.y += ball.yvel;
	if (paddle1.x > 100) { paddle1.x = 100; };
	if (paddle1.x < 0) { paddle1.x = 0; };
	if (paddle2.x > 100) { paddle2.x = 100; };
	if (paddle2.x < 0) { paddle2.x = 0; };
	bounce_ball();
	document.getElementById("paddle-1").style.left = paddle1.x + "vw";
	document.getElementById("paddle-2").style.left = paddle2.x + "vw";
	document.getElementById("ball").style.left = ball.x + "vw";
	document.getElementById("ball").style.top = ball.y + "vh";
};

function bounce_ball()
{
	if ((ball.x > 100) || (ball.x < 0)) { ball.xvel = ball.xvel * -1; };
	if ((100> ball.y > 98)) { if (paddle.x-2 >ball.x > paddle.x + 12) {
		ball.yvel = ball.yvel * -1;
		console.log("bounce");
	}};
	
	if ((ball.y > 100) || (ball.y < 0)) { ball.yvel = ball.yvel * -1; };
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
