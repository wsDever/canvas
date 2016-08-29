var WINDOW_W = 0 ;
var WINDOW_H = 0;
var RADIUS = 5 ;
var MARGIN_TOP = 0 ;
var MARGIN_LEFT = 0 ;

var balls = [] ;
var colors = ["#FF69B4","#FF4500","#8968CD","#7FFF00","#5CACEE","#76EE00","#9400D3","#CD00CD","#E9967A","#EEC900"] ;

// const endTime = new Date(2015,2,28,00,00,00);
var curShowTimeSeconds = 0 ;

window.onload = function(){

    WINDOW_W = document.documentElement.clientWidth*0.9 ;
    WINDOW_H = document.documentElement.clientHeight*0.9 ;

    MARGIN_LEFT = Math.round(WINDOW_W/5) ;
    RADIUS = Math.round(WINDOW_W*3 / 5 / 108) - 1 ;

    MARGIN_TOP = Math.round(WINDOW_H / 10) ;
    
     drawTitle();

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    canvas.width = WINDOW_W ;
    canvas.height = WINDOW_H ;

    curShowTimeSeconds = getCurShowTimeSeconds();

   

    setInterval(function(){
        render(context);    
        update();
    },50)
    
};
function getCurShowTimeSeconds(){
    // var curTime = new Date();
    // var ret = endTime.getTime() - curTime.getTime();
    // ret = Math.round(ret / 1000);
    // return ret >=0 ? ret : 0 ;
     var curTime = new Date();
    var ret = curTime.getHours() * 3600 + curTime.getMinutes() * 60 + curTime.getSeconds();

    return ret;
}
function update(){

    var nextShowTimeSeconds = getCurShowTimeSeconds();

    var nextHour = parseInt(nextShowTimeSeconds / 3600) ;
    var nextMinutes = parseInt(nextShowTimeSeconds / 60 - nextHour * 60 ) ;
    var nextSeconds = parseInt(nextShowTimeSeconds % 60 ) ;

    var curHour = parseInt(curShowTimeSeconds / 3600) ;
    var curMinutes = parseInt(curShowTimeSeconds / 60 - curHour * 60 ) ;
    var curSeconds = parseInt(curShowTimeSeconds % 60 ) ;

    if(nextSeconds != curSeconds)
    {    
        if(parseInt(curHour/10) != parseInt(nextHour/10))
            addBalls(MARGIN_LEFT + 0, MARGIN_TOP,parseInt(curHour/10));
        if(parseInt(curHour%10) != parseInt(nextHour%10))
            addBalls(MARGIN_LEFT + 15*(RADIUS + 1 ), MARGIN_TOP,parseInt(curHour%10));

        if(parseInt(curMinutes/10) != parseInt(nextMinutes/10))
            addBalls(MARGIN_LEFT + 39*(RADIUS + 1), MARGIN_TOP,parseInt(curMinutes/10));
        if(parseInt(curMinutes%10) != parseInt(nextMinutes%10))
            addBalls(MARGIN_LEFT + 54*(RADIUS + 1 ), MARGIN_TOP,parseInt(curMinutes%10));

        if(parseInt(curSeconds/10) != parseInt(nextSeconds/10))
            addBalls(MARGIN_LEFT + 78*(RADIUS + 1), MARGIN_TOP,parseInt(curSeconds/10));
        if(parseInt(curSeconds%10) != parseInt(nextSeconds%10))
            addBalls(MARGIN_LEFT + 93*(RADIUS + 1 ), MARGIN_TOP,parseInt(curSeconds%10));

        curShowTimeSeconds = nextShowTimeSeconds ;

    }

    updateBalls();
     console.log( balls.length)
}
function updateBalls(){
    for(var i=0;i<balls.length;i++)
    {
        balls[i].x += balls[i].vx ;
        balls[i].y += balls[i].vy ;
        balls[i].vy += balls[i].g ;

        if(balls[i].y >= WINDOW_H - RADIUS)
        {
            balls[i].y = WINDOW_H - RADIUS ;
            balls[i].vy = - balls[i].vy*0.75 ;
        }
    }

    var cnt = 0 ;
    for(var j = 0 ; j < balls.length ; j++)
        if(balls[j].x + RADIUS > 0 && balls[j].x - RADIUS < WINDOW_W )
            balls[cnt++] = balls[j] ;

    cnt = Math.min(cnt,300);
    while(balls.length > cnt)
    {
        balls.pop();
    }
}
function addBalls(x,y,num){
    for(var i=0;i<digit[num].length;i++)
    {
        for(var j=0;j<digit[num][i].length;j++)
        {
            if(digit[num][i][j] == 1 )
            {
                var aBall = {
                    x : x+j*2*(RADIUS + 1) + (RADIUS +1) ,
                    y : y+i*2*(RADIUS + 1) + (RADIUS +1) ,
                    g : 1.5 + Math.random() ,
                    vx : Math.pow(-1,Math.ceil(Math.random()*1000))*4 ,
                    vy : -5 ,
                    color : colors[Math.floor(Math.random()*colors.length)]
                }
                balls.push(aBall);
            }
        }
    }
}
function render(ctx){

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    var hour = parseInt(curShowTimeSeconds / 3600) ;
    var minutes = parseInt(curShowTimeSeconds / 60 - hour * 60 ) ;
    var seconds = parseInt(curShowTimeSeconds % 60 ) ;

    renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(hour/10),ctx);
    renderDigit(MARGIN_LEFT + 15*(RADIUS+1),MARGIN_TOP,parseInt(hour%10),ctx);

    renderDigit(MARGIN_LEFT + 30*(RADIUS+1),MARGIN_TOP,10,ctx);
    
    renderDigit(MARGIN_LEFT + 39*(RADIUS+1),MARGIN_TOP,parseInt(minutes/10),ctx);
    renderDigit(MARGIN_LEFT + 54*(RADIUS+1),MARGIN_TOP,parseInt(minutes%10),ctx);

    renderDigit(MARGIN_LEFT + 69*(RADIUS+1),MARGIN_TOP,10,ctx);

    renderDigit(MARGIN_LEFT + 78*(RADIUS+1),MARGIN_TOP,parseInt(seconds/10),ctx);
    renderDigit(MARGIN_LEFT + 94*(RADIUS+1),MARGIN_TOP,parseInt(seconds%10),ctx);

    for(var i=0;i<balls.length; i++)
    {
        ctx.fillStyle = balls[i].color ;
        ctx.beginPath();
        ctx.arc(balls[i].x , balls[i].y , RADIUS ,0 ,2*Math.PI, true );
        ctx.closePath();
        ctx.fill();
    }
}
function renderDigit(x,y,num,ctx){
   
   ctx.fillStyle = "rgb(0,102,150)";

    for(var i=0;i<digit[num].length;i++)
    {
        for(var j=0;j<digit[num][i].length;j++)
        {
            if(digit[num][i][j]==1)
            {
                ctx.beginPath();
                
                var centerx = x+j*2*(RADIUS+1)+(RADIUS+1);
                var centery = y+i*2*(RADIUS+1)+(RADIUS+1);

                ctx.arc(centerx,centery,RADIUS,0,2*Math.PI);
                ctx.closePath();

                ctx.fill()
            }
        }
    }
}

function drawTitle()
{
    var tcanvas = document.getElementById("title");
 
    var ctx = tcanvas.getContext("2d");
    ctx.font="40px Verdana";
    var line = ctx.createLinearGradient(0,0,ctx.canvas.width,MARGIN_TOP+10*2*(RADIUS+1));
    line.addColorStop(0,'red');
    line.addColorStop(1,'blue');
    ctx.strokeStyle = line ;
    var txt = 'Html5-Canvas基础学习之'
    ctx.strokeText(txt,60,35);
    txt = '绚丽的时钟效果';
    ctx.strokeText(txt,60,85);

    ctx.font="15px Verdana";
    txt = '2015-03-36 by wsun';
    ctx.strokeText(txt,60,120);
}