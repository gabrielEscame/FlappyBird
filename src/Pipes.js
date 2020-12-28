class Pipes extends ViewElement {
  constructor(ctx, img, spriteX, spriteY, width, height, posX, posY) {
    super(ctx, img, spriteX, spriteY, width, height, posX, posY)
    this.bottomPipe = {
      spriteX, spriteY
    }
    this.upperPipe = {
      spriteX: spriteX + 52, spriteY
    }
    this.pipesGap = height + 90
    this.randomPosition =  -150
  }


  draw() {
    this.ctx.drawImage(
      this.img,
      this.upperPipe.spriteX, this.upperPipe.spriteY,
      this.width, this.height,
      this.posX , this.posY + this.randomPosition,
      this.width, this.height
    )
    this.ctx.drawImage(
      this.img,
      this.bottomPipe.spriteX, this.bottomPipe.spriteY,
      this.width, this.height,
      this.posX, this.pipesGap + this.posY + this.randomPosition,
      this.width, this.height
    )
  }
}