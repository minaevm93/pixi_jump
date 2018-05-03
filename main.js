let type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
  type = "canvas"
}
//Aliases
let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Texture = PIXI.Texture,
    Rectangle = PIXI.Rectangle,
    Container = PIXI.Container,
    Sprite = PIXI.Sprite;

//Create a Pixi Application
let app = new Application({
  width: 512,
  height: 512,
  antialias: true,    // default: false
  transparent: false, // default: false
  resolution: 1       // default: 1
});

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

// app.renderer.backgroundColor = 0x061639;
// app.renderer.view.style.position = "absolute";
app.renderer.view.style.padding = "0";
app.renderer.view.style.margin = "auto";
app.renderer.view.style.display = "block";
// app.renderer.view.style.display = "auto";
// app.renderer.autoResize = true;
// app.renderer.resize(window.innerWidth, window.innerHeight);
// app.renderer.view.style.align = "center";

loader
  .add("images/alient_data/data.json")
  .load(setup);

//Define variables that might be used in more
//than one function
let alien, state;
let walkAnim;
let jumpAnim;
let alienStop, alienW1, alienW2, id;
let animationDist;


function setup() {
  jumpFrames = [];
  jumpFrames.push(Texture.fromFrame('alienBeige.png'))
  jumpFrames.push(Texture.fromFrame('alienBeige_swim1.png'))
  jumpFrames.push(Texture.fromFrame('alienBeige_jump.png'))
  jumpAnim = new PIXI.extras.AnimatedSprite(jumpFrames);
  jumpAnim.x = 0;
  jumpAnim.y = app.renderer.height - jumpAnim.height;

  jumpAnim.vx = 0;
  jumpAnim.vy = 0;
  jumpAnim.animationSpeed = 0.05;
  jumpAnim.play();
  app.stage.addChild(jumpAnim);

  //Start the game loop
  state = play;

  app.ticker.add(delta => gameLoop(delta));
}

//Set the game state
let direction = 'right';
let changeAnimation = true;
function gameLoop(delta){
  state(delta);
}

function play(delta) {

}
