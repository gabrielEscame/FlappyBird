class Pipes extends ViewElement {
  constructor(ctx, img, spriteX, spriteY, width, height) {
    super(ctx, img, spriteX, spriteY, width, height)
    this.bottomPipe = {
      spriteX, spriteY
    }
    this.upperPipe = {
      spriteX: spriteX + 52, spriteY
    }
    this.pipesGap = height + 90
    this.randomPosition = -200
    this.pipesList = []
  }


  draw() {
    this.pipesList.forEach(pipe => {
      const bottomPositionYBottom = pipe.posY + this.pipesGap
      this.ctx.drawImage(
        this.img,
        this.upperPipe.spriteX, this.upperPipe.spriteY,
        this.width, this.height,
        pipe.posX, pipe.posY,
        this.width, this.height
      )
      this.ctx.drawImage(
        this.img,
        this.bottomPipe.spriteX, this.bottomPipe.spriteY,
        this.width, this.height,
        pipe.posX, bottomPositionYBottom,
        this.width, this.height
      )
    })
  }

  update() {
    const hundredFrames = frames % 100 === 0

    if (hundredFrames) {
      this.pipesList.push(
        {
          posX: view.width,
          posY: -150 * (Math.random() + 1),
        }
      )
    }

    this.pipesList.forEach(pipe => {
      const pipePosition = pipe.posX + this.width
      const isPipeOutScreen = pipePosition <= 0
      if (isPipeOutScreen) {
        this.pipesList.shift()
        console.log(this.pipesList)
      }
      pipe.posX = pipe.posX - 2
    })
  }
}