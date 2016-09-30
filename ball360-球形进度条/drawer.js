
window.onload = function() 
{
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();

    ctx.arc(250, 250, 100, 0, Math.PI * 2, false);
    ctx.strokeStyle = '#fff';  
    ctx.lineWidth = "10";
    ctx.stroke(); 
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(250, 250, 100, 0, Math.PI * 2, false);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();

    // drawBaser(100,5);
    // var n = 0 ;
    // for(var i=0;i < 5 ;i++)
    // {
    //     drawBaser(100,i);
    // }
    var i= 0 ;
    var stop = setInterval(function(){
        i += 0.5 ;
        if(i<=8)        
            drawBaser(100,i);
        else
            clearInterval(stop)
    },1000/17)
}

function drawBaser(r,n){
    var ac =  (r - n * (2*r/10)) / r ;

    var ang1 = Math.asin(ac)  ;
    var ang2 = Math.PI - ang1 ;
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(250, 250, 100, ang1, ang2 , false);

    var bx = 250 -  r * Math.cos(ang1)  ;
    var by = 250 +  r * Math.sin(ang1)  ;
    var ex = 250 +  r * Math.cos(ang1)  ;

    
    ctx.moveTo(bx ,by);
    var cx1 = (250 - bx ) / 2 + bx ;
    var rn = Math.random() ;
    var cx2 = ( ex - 250 ) / 2 + 250  ;

    var cy1 = by +  n * (2*r/10) * rn ;
    var cy2 = by - n * (2*r/10) * rn ;

    if(n > 5){
        cy1 = by + (2*r - n * (2*r/10)) * rn ;
        cy2 = by - (2*r - n * (2*r/10)) * rn ;
    }
    ctx.bezierCurveTo(cx1,cy1,cx2,cy2,ex,by);

    ctx.fillStyle = "green";
    ctx.lineWidth = "0";
    var landStyle = ctx.createLinearGradient(250 ,250 + 1.2*r ,250,250 - 1.2*r);
    landStyle.addColorStop(0,"#580");
    landStyle.addColorStop(1,"#030");
    ctx.fillStyle = landStyle;

    ctx.fill();
    // ctx.stroke()
    
    ctx.closePath();

    ctx.beginPath();
    txt =  n * 10 + '%';
    ctx.font="30px Verdana";
    ctx.lineWidth = "1";

    ctx.clearRect(250 - 0.35*r , 250 + 1.5 * r - 30, 100, 40);
    ctx.fillStyle = "#fff" ;
    ctx.fillText(txt,250 - 0.35*r , 250 + 1.5*r);
}