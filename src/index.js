const sprites = new Image()
sprites.src =  "../public/sprites.png"

const view = document.querySelector("#view")
const ctx = view.getContext("2d")

const player = new ViewElement(ctx, sprites, 0, 0, 33, 24, 10, 50)

const setUp = () => {
  player.draw()
}

const engine = () => {
  setUp()
  requestAnimationFrame(engine)
}

engine()