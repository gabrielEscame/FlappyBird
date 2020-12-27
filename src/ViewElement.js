class ViewElement {
  constructor(ctx, img, spriteX, spriteY, width, height, posX, posY) {
    this.ctx = ctx
    this.img = img
    this.spriteX = spriteX
    this.spriteY = spriteY
    this.width = width
    this.height = height
    this.posX = posX
    this.posY = posY
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.spriteX, this.spriteY,
      this.width, this.height,
      this.posX, this.posY,
      this.width, this.height
    )
  }
}