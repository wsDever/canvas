var WIN_W = 1024 ;
var WIN_H = 768 ;

var num = 50 ;
window.onload = function() 
{
    var canvas = document.getElementById("canvas");

    WIN_H = document.documentElement.clientHeight;
    WIN_W = document.documentElement.clientWidth ;
    
    canvas.height = WIN_H * 0.99;
    canvas.width = WIN_W * 0.995 ;

    var ctx = canvas.getContext("2d");

    var skyStyle = ctx.createRadialGradient(canvas.width/2,canvas.height,0,canvas.width/2,canvas.height,canvas.height*1.2);
    skyStyle.addColorStop(0,'#035');
    skyStyle.addColorStop(1,'black');

    ctx.fillStyle = skyStyle ;
    ctx.fillRect(0,0,WIN_W,WIN_H);

    DrawMoon(ctx,Math.random() + 0.8,canvas.width*0.75,canvas.height*0.2,50,30);
    DrawLand(ctx);
    BeginDrawStars(ctx);

}
function BeginDrawStars(cnt)
{
    for(var i=0;i<num;i++)
    {
        var R = Math.random()*4+ 4 ;
        var X = Math.random() * cnt.canvas.width ;
        var Y = Math.random() * cnt.canvas.height*0.45;
        var A = Math.random() * 360 ;
        // DrawStars(cnt,R/2.0,R,X,Y,A,2,'red','yellow');    

        DrawStar(cnt,X,Y,R,A);
    }
    
}