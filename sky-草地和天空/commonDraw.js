//  画五角星
// 参数：ctx，内圆半径r , 外圆半径R，偏移X , 偏移Y , (偏移角度，线宽，线颜色，填充颜色,链线样式)
// 后五个参数为可选
function DrawStars(ctx,r,R,x,y,rot,line_width,line_color,fill_color,join_style){
    ctx.beginPath();  
    rot = rot == undefined ? 0 : rot ;
    for(var i = 0 ; i < 5 ; i++ )
    {
       ctx.lineTo( Math.cos((18 + i*72 - rot )/180 *Math.PI) * R + x , - Math.sin((18 + i*72 - rot )/180 *Math.PI) * R + y ) ;
       ctx.lineTo( Math.cos((54 + i*72 - rot )/180 *Math.PI) * r + x , - Math.sin((54 + i*72 - rot )/180 *Math.PI) * r + y ) ;     
    }
    
    ctx.closePath();
    ctx.lineWidth = line_width == undefined ? 5 : line_width ;
    ctx.strokeStyle = line_color == undefined ? '' : line_color ;
    if(fill_color)
    {
        ctx.fillStyle = fill_color ;
        ctx.fill()
    }
    ctx.lineJoin = join_style == undefined ? 'round' : join_style ;
    ctx.stroke();
}

// 画图形
// 
function DrawStar(ctx,x,y,R,rot){

    ctx.save();

    ctx.translate(x,y);
    ctx.rotate( rot/180 * Math.PI );   
    ctx.scale(R,R);

    DrawAStar(ctx);
    ctx.fillStyle = "#fb3";
    // ctx.strokeStyle = "#fb5";
    // ctx.lineWidth = 3 ;
    // ctx.lineJoin = "round";

    ctx.fill();
    // ctx.stroke();

    ctx.restore();
}

function DrawAStar(ctx){
    ctx.beginPath();
    for(var i = 0 ; i < 5 ; i++ )
    {
       ctx.lineTo( Math.cos((18 + i*72 )/180 *Math.PI)  , - Math.sin((18 + i*72 )/180 *Math.PI)  ) ;
       ctx.lineTo( Math.cos((54 + i*72 )/180 *Math.PI) * 0.5 , - Math.sin((54 + i*72 )/180 *Math.PI) * 0.5 ) ;     
    }
    ctx.closePath();
}
// 画月亮
function DrawMoon(ctx,d,x,y,R,rot,fillColor)
{
    ctx.save();

    ctx.translate(x,y);
    ctx.rotate(rot*Math.PI / 180 );
    ctx.scale(R,R);

    DrawAMoon(ctx,d);
    ctx.fillStyle = fillColor == undefined ? "#fb5" :fillColor ;
    ctx.fill();

    ctx.restore();
}
function DrawAMoon(ctx , d)
{
    ctx.beginPath();
    ctx.arc(0,0,1,0.5*Math.PI,1.5*Math.PI,true);
    ctx.moveTo(0,-1);
    ctx.arcTo(d,0,0,1,dis(0,-1,d,0)/d);
    ctx.closePath();
}
function dis(x1,y1,x2,y2)
{
    return Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
}

// 画草地
function DrawLand(ctx)
{
    ctx.save();
    ctx.beginPath();

    ctx.moveTo(0,ctx.canvas.height*0.7);
    ctx.bezierCurveTo(ctx.canvas.width*0.4, ctx.canvas.height*0.5, ctx.canvas.width*0.5, ctx.canvas.height*0.9, ctx.canvas.width, ctx.canvas.height*0.7);
    ctx.lineTo(ctx.canvas.width,ctx.canvas.height);
    ctx.lineTo(0,ctx.canvas.height)
    ctx.closePath();

    var landStyle = ctx.createLinearGradient(0,ctx.canvas.height,0,0);
    landStyle.addColorStop(0,"#030");
    landStyle.addColorStop(1,"#580");
    ctx.fillStyle = landStyle;
    ctx.fill();

    ctx.restore();
}