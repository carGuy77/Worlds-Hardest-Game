var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//car
var car = createSprite(40,30,50,20);
car.shapeColor = "blue";
//walls
var moveWall1 = createSprite(190, 80, 60, 20);
moveWall1.velocityX = 10;
var moveWall2 = createSprite(190, 140, 60, 20);
moveWall2.velocityX = -10;
var moveWall3 = createSprite(190, 200, 60, 20);
moveWall3.velocityX = 10;
var moveWall4 = createSprite(190, 260, 60, 20);
moveWall4.velocityX = -10;
var moveWall5 = createSprite(190, 320, 60, 20);
moveWall5.velocityX = 10;
function draw() {
  background ("green");
  drawSprites();
  //bounce off's
  createEdgeSprites();
  car.bounceOff(topEdge);
  car.bounceOff(leftEdge);
  car.bounceOff(rightEdge);
  moveWall1.bounceOff(edges);
  moveWall2.bounceOff(edges);
  moveWall3.bounceOff(edges);
  moveWall4.bounceOff(edges);
  moveWall5.bounceOff(edges);
  //if statements
  if (keyDown("up"))  {
    car.velocityY = -5;
  }
  if (keyDown("down"))  {
    car.velocityY = 5;
  }
  if (keyDown("right"))  {
    car.velocityX = 5;
  }
  if (keyDown("left"))  {
    car.velocityX = -5;
  }
  if (keyDown("space"))  {
    car.x = 40;
    car.y = 30;
    moveWall1.setVelocity(10, 0);
    moveWall2.setVelocity(-10, 0);
    moveWall3.setVelocity(10, 0);
    moveWall4.setVelocity(-10, 0);
    moveWall5.setVelocity(10, 0);
  }
  
  //if statements for losing
 if (car.isTouching(moveWall1)) {
   car.setVelocity(0, 0);
   moveWall1.setVelocity(0, 0);
   moveWall2.setVelocity(0, 0);
   moveWall3.setVelocity(0, 0);
   moveWall4.setVelocity(0, 0);
   moveWall5.setVelocity(0, 0);
   fill ("white");
   textSize ("25");
   text ("You Lose ! Press Space to Reset", 10, 190);
 }
 if (car.isTouching(moveWall2)) {
   car.setVelocity(0, 0);
   moveWall1.setVelocity(0, 0);
   moveWall2.setVelocity(0, 0);
   moveWall3.setVelocity(0, 0);
   moveWall4.setVelocity(0, 0);
   moveWall5.setVelocity(0, 0);
   fill ("white");
   textSize ("25");
   text ("You Lose ! Press Space to Reset", 10, 190);
 }
 if (car.isTouching(moveWall3)) {
   car.setVelocity(0, 0);
   moveWall1.setVelocity(0, 0);
   moveWall2.setVelocity(0, 0);
   moveWall3.setVelocity(0, 0);
   moveWall4.setVelocity(0, 0);
   moveWall5.setVelocity(0, 0);
   fill ("white");
   textSize ("25");
   text ("You Lose ! Press Space to Reset", 10, 190);
   
 }
 if (car.isTouching(moveWall4)) {
   car.setVelocity(0, 0);
   moveWall1.setVelocity(0, 0);
   moveWall2.setVelocity(0, 0);
   moveWall3.setVelocity(0, 0);
   moveWall4.setVelocity(0, 0);
   moveWall5.setVelocity(0, 0);
   fill ("white");
   textSize ("25");
   text ("You Lose ! Press Space to Reset", 10, 190);
   
 }
 if (car.isTouching(moveWall5)) {
   car.setVelocity(0, 0);
   moveWall1.setVelocity(0, 0);
   moveWall2.setVelocity(0, 0);
   moveWall3.setVelocity(0, 0);
   moveWall4.setVelocity(0, 0);
   moveWall5.setVelocity(0, 0);
   fill ("white");
   textSize ("25");
   text ("You Lose ! Press Space to Reset", 10, 190);
   
 }
 //if statements for winning
 if (car.isTouching(bottomEdge)) {
   car.setVelocity(0, 0);
   moveWall1.setVelocity(0, 0);
   moveWall2.setVelocity(0, 0);
   moveWall3.setVelocity(0, 0);
   moveWall4.setVelocity(0, 0);
   moveWall5.setVelocity(0, 0);
   fill ("Yellow");
   textSize ("25");
   text ("You Win !Press Space to Reset", 10, 190);
 }
 
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
