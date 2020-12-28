let frames = 0

const sprites = new Image()
sprites.src =  "../public/sprites.png"

const view = document.querySelector("#view")
const ctx = view.getContext("2d")

const buildings = new ViewElement(ctx, sprites, 110, 370, 552, 204, 0, view.height - 204)
const floor = new Floor(ctx, sprites, 0, 610, 448, 112, 0, view.height - 112)
const pipes = new Pipes(ctx, sprites, 0, 169, 52, 400, 220, 0)
const player = new Bird(ctx, sprites, 0, 0, 33, 24, 10, 50)

const setUp = () => {
  ctx.fillStyle = "#70c5ce"
  ctx.fillRect(0, 0, view.width, view.height)
  buildings.draw()
  pipes.update()
  pipes.draw()
  floor.update()
  floor.draw()
  // player.update()
  player.draw()
  player.jump()
  frames += 1
}

const engine = () => {
  setUp()
  requestAnimationFrame(engine)
}

engine()