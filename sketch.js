let posX =25;
let posY =25;
let enemyPosX, enemyPosY;
let enemyWidth = 50, enemyHeight = 50
let myWidth = 50
let myHeight = 50
let myLeft, MyRight, myTop,myBottom
let enemyLeft, enemyRight, EnemyTop,EnemyBottom
let points = 0
// declare variables for graphics
let clefairy;
let togepi;
let backdrop;

function setup() {
    createCanvas(500,500);
    background(0);
    textSize(15)

    //rect mode
    imageMode(CENTER);
    // fill(0,0,255);
    // rect(25,25,50,50);

    enemyPosX = random(25,475);
    enemyPosY = random(100,475);

    clefairy = loadImage("clefairy.png");
    togepi = loadImage("togepi.png");
    backdrop = loadImage('Forest.png')
}




function draw() {
    background(0);
    image(backdrop,width / 2, height / 2);
    image(togepi, enemyPosX,enemyPosY,enemyWidth,enemyHeight);
    image(clefairy,posX,posY,myWidth,myHeight)
    // fill(0,0,255)
    // rect(posX,posY,50,50);
    // fill(255,0,0)
    // rect(enemyPosX, enemyPosY, enemyWidth,enemyHeight);
    
    
    if (keyIsDown(LEFT_ARROW)){
        posX -= 3;

    }
if (keyIsDown(RIGHT_ARROW)){
    posX +=3;
}

if(keyIsDown(UP_ARROW)){
    posY -=3
}

if (keyIsDown(DOWN_ARROW)){
    posY += 3
}

// restrict withhin canvas
if(posX <= 25){
    posx = 25;
}

if(posX > 475){
    posX = 475;
}
if (posY <=25){
    posY = 25;

}

if(posY >= 475){
    posY = 475
}

// know my edges
myLeft = posX - 25;
MyRight = posX + 25;
myTop = posY - 25;
myBottom = posY +25;

enemyLeft = enemyPosX -25;
enemyRight = enemyPosX+25;
enemyTop = enemyPosY -25;
EnemyBottom= enemyPosY + 25;

if(myLeft > enemyRight || MyRight< enemyRight|| myTop>EnemyBottom||myBottom<enemyTop){
    //do nothing
}
else {
    //There is collision
    console.log('colllision');

    //output text to user
    fill(random(255),random(255), random(255));
    text('im colliding with my enemy',255,480)

    
        // increase points by 1
        points++;
        
        enemyPosX = random(25, 475);
        enemyPosY = random(150, 450);
    
}

fill(255);
text("Enemies collected: " + points, 340, 25);


}
