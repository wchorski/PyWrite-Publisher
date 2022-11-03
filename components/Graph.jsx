import React, {useEffect, useRef} from 'react'
import * as PIXI from 'pixi.js' 
// export { Container, Sprite, TilingSprite, PixiComponent, ParticleContainer, Stage} from '@inlet/react-pixi'
// import { Sprite, Stage } from "react-pixi-fiber";
import spriteFrog from '../public/frog.png'


// const Frog = (props) => {
//   return <Sprite texture={PIXI.Texture.from(spriteFrog)} {...props} />;
// }


export const Graph = () => {

  const pixiCanvas = useRef(null);

  const pixiApp = new PIXI.Application({
    width: 300,
    height: 300,
    backgroundColor: 0xAAAAAA,
    antialias: true,
  });
  const renderGraph = () => {
    const canvas = pixiCanvas.current
    canvas.appendChild(pixiApp.view)
  }

  const graphics = new PIXI.Graphics()

  const drawNode = (x, y) => {

    if(x === undefined || y === undefined) x = pixiApp.view.width /2; y = pixiApp.view.height /2;

    const node = new PIXI.Graphics()
    // Circle + line style 1
    node.lineStyle(2, 0x283223, 1);
    node.beginFill(0xCCFAB2, 1);
    node.drawCircle(x, y, 10);
    node.endFill();

    node.interactive = true;
    node.buttonMode = true;
    // node.anchor.set(0.5);

    node
      .on('pointerdown', onDragStart)
      .on('pointerup', onDragEnd)
      .on('pointerupoutside', onDragEnd)
      .on('pointermove', onDragMove)
      .on("pointerover", onHoverOver)
      .on("pointerout", onHoverOut)
      
    node.x = x;
    node.y = y;

    pixiApp.stage.addChild(node);
  }

  const drawRectangle = (x,y) => {
    const rect = new PIXI.Graphics()
    // Rectangle
    rect.beginFill(0xDE3249);
    rect.drawRect(x, y, 4, 100);
    rect.endFill();

    rect.interactive = true;
    rect.buttonMode = true;
    // node.anchor.set(0.5);

    rect
      .on('pointerdown', onDragStart)
      .on('pointerup', onDragEnd)
      .on('pointerupoutside', onDragEnd)
      .on('pointermove', onDragMove)
      .on("pointerover", onHoverOver)
      .on("pointerout", onHoverOut)
      
    // rect.x = x;
    // rect.y = y;

    pixiApp.stage.addChild(rect);
  }

  // * Drag events ----------------------------------
  function onDragStart(event) {
    // store a reference to the data
    // the reason for this is because of multitouch
    // we want to track the movement of this particular touch
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
  }
  function onDragEnd() {
    this.alpha = 1;
    this.dragging = false;
    // set the interaction data to null
    this.data = null;
  }
  function onDragMove() {
    if (this.dragging) {
      const newPosition = this.data.getLocalPosition(this.parent);
      this.x = newPosition.x;
      this.y = newPosition.y;
    }
  }
  function onHoverOver(){
    this.alpha =  0.5
  }
  function onHoverOut(){
    this.alpha =  1
  }
  // * Drag events ----------------------------------

  const loadTexture = (x, y) => {

    if(x === undefined || y === undefined) x = pixiApp.view.width /2; y = pixiApp.view.height /2;

    const texture = PIXI.Texture.from('/frog.png');
    texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

    const sprite = new PIXI.Sprite.from(texture)
    sprite.anchor.set(0.5);
    // sprite.x = pixiApp.view.width /2
    // sprite.y = pixiApp.view.height /2

    sprite.interactive = true;
    sprite.buttonMode = true;

    sprite
      .on('pointerdown', onDragStart)
      .on('pointerup', onDragEnd)
      .on('pointerupoutside', onDragEnd)
      .on('pointermove', onDragMove)
      .on("pointerover", onHoverOver)
      .on("pointerout", onHoverOut)
      
    sprite.x = x;
    sprite.y = y;
    
    pixiApp.stage.addChild(sprite)
  }


  useEffect(() => {

    renderGraph()
    loadTexture(50, 50)
    drawNode(100, 100)
    drawNode(10, 30)
    drawRectangle(200, 200)
  
    // return () => {
    //   second
    // }
  }, [])
  

  return (
    <section>
      <button onClick={loadTexture}>Frog</button>
      <button onClick={drawNode}>Node</button>
      <div ref={pixiCanvas}></div>

    </section>
  )
}
