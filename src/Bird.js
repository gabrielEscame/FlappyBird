class Bird extends ViewElement {
  constructor(ctx, img, spriteX, spriteY, width, height, posX, posY) {
    super(ctx, img, spriteX, spriteY, width, height, posX, posY)
    this.velocity = 0
    this.gravity = 0.25
    this.jumpForce = 4.75
    this.currentFrame = 0
    this.keyframes = [
      {
        spriteX, spriteY
      },
      {
        spriteX, spriteY: 26
      },
      {
        spriteX, spriteY: 52
      }
    ]
  }
  draw() {
    const keyframeUpdate = frames % 10 === 0

    if (keyframeUpdate) {
      this.currentFrame = frames % 3
    }
    const { spriteX, spriteY } = this.keyframes[this.currentFrame]
    this.ctx.drawImage(
      this.img,
      spriteX, spriteY,
      this.width, this.height,
      this.posX, this.posY,
      this.width, this.height
    )
  }
  update() {
    const birdPosition = this.posY + this.height
    const floorPosition = view.height - 112
    const isBirdAtFloor = birdPosition >= floorPosition
    
    if (isBirdAtFloor) {
      gameOver = true
      return
    }

    this.velocity = this.velocity + this.gravity
    this.posY = this.posY + this.velocity
  }
  jump() {
    const jumpAction = () => {
      const playerNextJump = playerCollision.up + this.jumpForce
      const isJumpingOverScreen = playerNextJump > 0
      if(isJumpingOverScreen) {
        this.velocity = - this.jumpForce
      }
    }
    
    window.addEventListener("click", () => {
      jumpAction()
    })
  }
}