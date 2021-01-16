class Stone
{
	constructor(x,y)
	{
		this.x = x;
		this.y = y;
		this.Width=50;
		this.Height=50;
		
		
		this.image=loadImage("images/stone.png")
		this.stone=Bodies.rectangle(this.x, this.y, this.Width, this.Height, {isStatic:true})
		World.add(world, this.stone)

	}
	
	display()
	{
			var posBottom=this.stone.position;
			push()
			translate(posBottom.x, posBottom.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.Height/2,this.Width, this.Height)
			pop()
			
	}

}