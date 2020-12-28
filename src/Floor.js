class Floor extends ViewElement {
  constructor(ctx, img, spriteX, spriteY, width, height, posX, posY) {
    super(ctx, img, spriteX, spriteY, width, height, posX, posY)
  }

  update() {
    const repeatFloor = this.width / 4
    const floorMoviment = this.posX - 1
    this.posX = floorMoviment % repeatFloor
  }
}