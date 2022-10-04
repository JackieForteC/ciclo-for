let velocidad = 0
basic.forever(function () {
    velocidad = 200
    for (let index = 0; index < 3; index++) {
        for (let X = 0; X <= 4; X++) {
            for (let Y = 0; Y <= 4; Y++) {
                led.plot(X, Y)
                basic.pause(velocidad)
                basic.clearScreen()
            }
        }
        basic.showIcon(IconNames.Ghost)
        basic.clearScreen()
        velocidad += -80
    }
})
