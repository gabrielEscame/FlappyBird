let frames = 0
let gameOver = false

const sprites = new Image()
sprites.src = "../public/sprites.png"

const view = document.querySelector("#view")
const ctx = view.getContext("2d")

const buildings = new ViewElement(ctx, sprites, 110, 370, 552, 204, 0, view.height - 204)
const floor = new Floor(ctx, sprites, 0, 610, 448, 112, 0, view.height - 112)
const pipes = new Pipes(ctx, sprites, 0, 169, 52, 400, 220, 0)
const menu = new ViewElement(ctx, sprites, 134, 0, 174, 152, ((view.width / 2) - (174 / 2)), 50)
const player = new Bird(ctx, sprites, 0, 0, 33, 24, 10, 50)
let playerCollision = {
  up: player.posY,
  down: player.posY + player.height,
  front: player.posX + player.width
}

const screens = {
  start: {
    draw: () => {
      ctx.fillStyle = "#70c5ce"
      ctx.fillRect(0, 0, view.width, view.height)
      buildings.draw()
      floor.draw()
      player.draw()
      menu.draw()
    },
    update: () => {
      player.posY = 50
      player.posX = 10
      pipes.pipesList = []
      frames = 0
      gameOver = false
    },
    click: () => {
      window.addEventListener("click", () => {
        changeScreen(screens.game)
      })
    }
  },
  game: {
    draw: () => {
      ctx.fillStyle = "#70c5ce"
      ctx.fillRect(0, 0, view.width, view.height)
      buildings.draw()
      pipes.draw()
      floor.draw()
      player.draw()
    },
    update: () => {
      pipes.update()
      floor.update()
      player.update()
      player.jump()
      playerCollision = {
        up: player.posY,
        down: player.posY + player.height,
        front: player.posX + player.width
      }
    },
    click: () => {
    }
  }
}

let currentScreen = screens.start
const changeScreen = (selectedScreen) => {
  currentScreen = selectedScreen
}


const isGameOver = () => {
  if(gameOver) {
    changeScreen(screens.start)
  }
}

const setUp = () => {
  isGameOver()
  currentScreen.update()
  currentScreen.draw()
  currentScreen.click()
  frames += 1
}

const engine = () => {
  setUp()
  requestAnimationFrame(engine)
}

engine()