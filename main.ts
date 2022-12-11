input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Umbrella)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    basic.showIcon(IconNames.Umbrella)
})
basic.showIcon(IconNames.Umbrella)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
