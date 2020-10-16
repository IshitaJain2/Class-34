var rball,database,position;

function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(500,500);
    rball = createSprite(250,250,10,10);
    rball.shapeColor = "red";

    var rballPosition = database.ref('ball/position');
    rballPosition.on("value",readposition,showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set({
        'x':position.x+x,
'y':position.y+y
    })
}

function readposition(data){
    position = data.val();
    console.log(position.x);
    rball.x = position.x;
    rball.y = position.y;
}

function showerror(){
    console.log("error");
}