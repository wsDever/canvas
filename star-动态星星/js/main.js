var WIN_W = 1024 ;
var WIN_H = 768 ;

var MARGIN_L = 0 ;
var MARGIN_T = 0 ;

var GRIL_L = 100 ;
var GRIL_T = 150 ;

var ctx ;
var star_num = 100 ;
var stars = [] ;

var gril = new Image();
var star = new Image();

var lastTime ;
var diffTime ;

var Error_W = 8 ;

var switchy = false ;
var starAlpha = 0 ;


window.onresize = function (){
	WIN_W = document.documentElement.clientWidth ;
    WIN_H = document.documentElement.clientHeight *0.99 ;

    canvas.width = WIN_W ;
    canvas.height = WIN_H ;

    GRIL_L = WIN_W * 0.1 ;
    GRIL_T = WIN_H * 0.1 ;

	init();
}
window.onload = function(){

	var canvas = document.getElementById("canvas");
	WIN_W = document.documentElement.clientWidth ;
    WIN_H = document.documentElement.clientHeight *0.99 ;

	ctx = canvas.getContext("2d");
	document.addEventListener("mousemove",mousemove,false);
	
	canvas.width = WIN_W ;
    canvas.height = WIN_H ;

    GRIL_L = WIN_W * 0.1 ;
    GRIL_T = WIN_H * 0.1 ;

	init();
}
function init()
{
	gril.src = "src/girl.jpg" ;
	star.src = "src/star.png" ;

	for(var i=0;i<star_num;i++)
	{
		var obj = new starObj();
		stars.push(obj) ;
		stars[i].init() ;
	}
	lastTime = Date.now();
	
	// ctx.rect(100,150,600,300);
	drawBackground();	
	gameloop();	
}

function gameloop()
{
	window.requestAnimFrame(gameloop);
	
	var nowTime = Date.now();
	diffTime = nowTime - lastTime ;
	lastTime = nowTime ;

	drawGril();
	// if(switchy)
	// {
		drawStars();
	// }

	aliveStar();
}

function drawBackground()
{
	ctx.save();
	ctx.globalAlpha = "0.5";
	ctx.fillStyle = "#440458";
	ctx.fillRect(MARGIN_L, MARGIN_T, WIN_W, WIN_H) ;
	ctx.restore()
}
function drawGril()
{
	// drawImage(img,sx,sy,sw,sh,x,y,w,h)
	ctx.drawImage(gril,GRIL_L+MARGIN_L,GRIL_T+MARGIN_T,WIN_W - 2*GRIL_L ,WIN_H - 2*GRIL_T)
}
function mousemove(e)
{
	if(e.offsetX || e.layerX)
	{
		var mx = e.offsetX == undefined ? e.layerX:e.offsetX ;
		var my = e.offsetY == undefined ? e.layerY:e.offsetY ;
		
		// if(ctx.isPointInPath(mx,my))
		if(mx>(MARGIN_L+GRIL_L) && mx <(WIN_W - GRIL_L ) && my >(MARGIN_T+GRIL_T) && my <(WIN_H - GRIL_T))
		 	switchy = true ;
		else 
			switchy = false ;
	}
}