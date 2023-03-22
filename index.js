function setup() {
	const width = windowWidth
    const height = windowHeight
	
	createCanvas(width, height);
	background(100);
	
}

function draw() {
	stroke(255)
	translate(width/2, height)
	branch(250)
}

function branch(len) {
	
	line(0, 0, 0, -len)
	translate(0, -len)
		
    if ( len > 4) {
        push()
        rotate(PI/6)
        branch(len * 0.67)
        pop()
        push()
        rotate(-PI/5)
        branch(len * 0.67) 
        pop() 
    }
   
	
}