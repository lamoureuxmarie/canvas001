let canvas = document.querySelector('canvas')
let context = canvas.getContext('2d')
// console.log(context)

context.fillStyle = '#DFFE72'
// This is not a fucntion but a property. A property stores a value, like a variable
context.fillRect(100, 100, 400, 400)
// This function takes 4 parameters: x, y, (space around the rect) width and height (space inside the rect)
// fillRect is actually doing 3 things:
// creating a new shape, drawing a rectangle and filling color
// If we want to make a more complex shape, we need to give more isntructions
// context.lineWidth = 1
// context.beginPath()
// context.arc(300, 300, 100, 0, 2 * Math.PI)
// // x, y, radius, starting angle and ending angle
// context.stroke()

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    let width = 70
    let height = 70
    let gap = 20
    let x = 100 + (width + gap) * i
    let y = 100 + (height + gap) * j
    context.lineWidth = 2
    context.beginPath()
    context.rect(x, y, width, height)
    context.stroke()
  }
}
