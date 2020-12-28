const sprites = new Image()
sprites.src =  "../public/sprites.png"

const view = document.querySelector("#view")
const ctx = view.getContext("2d")

const buildings = new ViewElement(ctx, sprites, 110, 370, 552, 204, 0, view.height - 204)
const floor = new ViewElement(ctx, sprites, 0, 610, 448, 112, 0, view.height - 112)
const player = new ViewElement(ctx, sprites, 0, 0, 33, 24, 10, 50)

const setUp = () => {
  buildings.draw()
  floor.draw()
  player.draw()
}

const engine = () => {
  setUp()
  requestAnimationFrame(engine)
}

engine()