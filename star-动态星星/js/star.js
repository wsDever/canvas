var starObj = function(){
	this.x ;
	this.y ;

	this.picN ;
	this.timer ;

	this.vx ;
	this.vy ;
}
starObj.prototype.init = function(){
	this.x = Math.random()*(WIN_W-2*GRIL_L) + MARGIN_L + GRIL_L  ;
	this.y = Math.random()*(WIN_H-2*GRIL_T) + MARGIN_T + GRIL_T  ;
	
	this.vx = Math.pow(-1,Math.ceil(Math.random()*1000))*2*Math.random() ;
	this.vy = Math.pow(-1,Math.ceil(Math.random()*1000))*2*Math.random() ;

	this.picN = Math.floor(Math.random()*7) ;
	this.timer = 0 ;
}
starObj.prototype.draw = function(){
	// save()
	ctx.save();
	ctx.globalAlpha = starAlpha ;
	// drawImage(img,sx,sy,sw,sh,x,y,w,h)
	ctx.drawImage(star,this.picN*7,0,7,7,this.x,this.y,7,7);

	// restore()
	ctx.restore();
}
starObj.prototype.update = function(){
	
	this.x += this.vx * diffTime *0.0025;
	this.y += this.vy * diffTime *0.0025;

	if(this.x > (MARGIN_L + WIN_W - GRIL_L - Error_W ) || this.x < (MARGIN_L + GRIL_L ))
	{
		this.init();
		return ;
	}
	if(this.y > (MARGIN_T+WIN_H - GRIL_T - Error_W ) || this.y < (MARGIN_T + GRIL_T))
	{
		this.init();
		return ;
	}
	this.timer += diffTime ;
	if(this.timer > 80 )
	{
		this.picN += 1 ;
		this.picN %= 7 ;	
		this.timer = 0 ;
	}
	
}
function drawStars()
{
	for(var i=0;i<star_num;i++)
	{
		stars[i].update();
		stars[i].draw();
	}
}

function aliveStar()
{
	if(switchy) // in img
	{
		starAlpha += 0.03 * diffTime * 0.05 ;
		if(starAlpha > 1)
			starAlpha = 1;
	}
	else{ // out img
		starAlpha -= 0.03 * diffTime * 0.05 ;
		if(starAlpha < 0)
			starAlpha = 0;
	}
}