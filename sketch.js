var hour, minute, second;
var hourAngle, minuteAngle, secondAngle; 

function setup(){
    createCanvas(400,400); 
    
    angleMode(DEGREES);   
}

function draw(){
    background(0);

    translate(200,200)
    rotate(-90)

    const d = new Date();
    hour = d.getHours();
    minute = d.getMinutes();
    second = d.getSeconds();

    stroke(255,0,255);
    point(0,0)
    strokeWeight(10);
    noFill();
    
    //second
    secondAngle = map(second, 0, 60, 0, 360);
    push();
    rotate(secondAngle);
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    pop();

    stroke(255,0,0);
    arc(0,0,300,300,0,secondAngle);

    //minute
    minuteAngle = map(minute,0,60,0,360);
    push();
    rotate(minuteAngle);
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,75,0);
    pop();

    stroke(0,255,0);
    arc(0,0,280,280,0,minuteAngle);

    //hour
    hourAngle = map(hour % 12,0,12,0,360);
    push();
    rotate(hourAngle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,50,0);
    pop();

    stroke(0,0,255);
    arc(0,0,260,260,0,hourAngle);
    
}

//false = clockwise; true(default) = anticlockwise; ----> arc
//arc(x,y,width,height,erased_part_value,clock_direction);