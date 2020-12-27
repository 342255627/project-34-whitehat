//Create variables here
var database, food, foodStock,dogImg, happyDogImg,happyDog;

function preload()
{
  //load images here
  happyDogImg = loadImage("images/dogImg.png");
  dogImg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  var dog = createSprite(400,400);
  dog.addImage(dogImg);
  var happyDog = createSprite();
  database = firebase.database();
  food=10;
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  dog.scale=0.1;
}

function draw() {  
  if (keyWentDown(UP_ARROW)){
    writeStock(food);
    
   
  }
  
  drawSprites();
  

  fill("green");
  text("Press up arrow to feed the dog",100,50);
  text("Food remaining "+food,200,200);
  //add styles here

}
function readStock(data){
  
  
  food=data.val();
console.log(food);
}

function writeStock(x){
if(x<=0){
  x=0;
  }else{
  x=x-1;
  }
database.ref('/').update({
food:x

})
}
