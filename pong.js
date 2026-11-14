paddle1 = {"x":50, "y": 0, "xvel": 0};
paddle2 = {"x":50, "y": 0, "xvel": 0};
ball = {"x": 50, "y": 80, "xvel": 1, "yvel":-1};
let score1 = 0;
let score2 = 0;

let speed = 1;

document.getElementsByTagName("body")[0].addEventListener("keydown", handleKeyPress);
//document.getElementsByTagName("body")[0].addEventListener("keyup", handleKeyUp);

function gameloop()
{
	paddle1.x += paddle1.xvel;
	paddle2.x += paddle2.xvel;
	ball.x += ball.xvel * speed;
	ball.y += ball.yvel * speed;
	if (paddle1.x > 100) { paddle1.x = 100; };
	if (paddle1.x < 0) { paddle1.x = 0; };
	if (paddle2.x > 100) { paddle2.x = 100; };
	if (paddle2.x < 0) { paddle2.x = 0; };
	bounce_ball();

	document.getElementById("paddle-1").style.left = paddle1.x + "vw";
	document.getElementById("paddle-2").style.left = paddle2.x + "vw";
	document.getElementById("ball").style.left = ball.x + "vw";
	document.getElementById("ball").style.top = ball.y + "vh";
	UI();
};

function bounce_ball()
{
	if ((ball.x > 100) || (ball.x < 0)) { ball.xvel = ball.xvel * -1; };
	if ((100> (ball.y+2) && (ball.y+2) > 96)) { if (paddle2.x-4 <= ball.x && ball.x <= paddle2.x + 14) {
		ball.yvel = ball.yvel * -1;
	} console.log("paddle2y");} else { console.log(ball.y);};
	if ((2> ball.y > 0)) { if (paddle1.x-4 <= ball.x && ball.x <= paddle1.x + 14) {
		ball.yvel = ball.yvel * -1;
	}};
	
	if ((ball.y > 100) || (ball.y < 0)) { 
		console.log("ballx: " + ball.x + "y: " +ball.y + "paddle2x: " + paddle2.x);
		//ball.yvel = ball.yvel * -1; 
		if (ball.y > 100) { score1 += 1; } else { score2 += 1; };
		clearInterval(gameloopi)
	};
};

function restart()
{
	speed = 1;
	paddle1 = {"x":50, "y": 0, "xvel": 0};
	paddle2 = {"x":50, "y": 0, "xvel": 0};
	ball = {"x": 50, "y": 80, "xvel": 1, "yvel":-1};
	clearInterval(gameloopi);
	gameloopi = setInterval(gameloop, 34);
};

function handleKeyPress(event)
{
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
		case "r":
			restart();
			break;
	};
};

gameloopi = setInterval(gameloop, 34);

function UI()
{
	document.getElementById("score").innerHTML = `P1 Score: ${score1} <br> P2 Score: ${score2}`;

}
