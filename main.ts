input.onButtonPressed(Button.A, function () {
    if (Operação == 1) {
        Global = Número1
        Número1 = 0
        Operação = 2
    }
    Número1 = Número1 - 1
    basic.showNumber(Número1)
})
input.onButtonPressed(Button.AB, function () {
    if (Operação == 0) {
        Operação = 1
    }
    if (Operação == 1) {
        Operador += 1
        if (Operador == 1) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # # # # #
                . . # . .
                . . # . .
                `)
            basic.pause(500)
            basic.clearScreen()
        } else {
            if (Operador == 2) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # # # # #
                    . . . . .
                    . . . . .
                    `)
                basic.pause(500)
                basic.clearScreen()
            } else {
                if (Operador == 3) {
                    basic.showLeds(`
                        # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
                        `)
                    basic.pause(500)
                    basic.clearScreen()
                } else {
                    if (Operador == 4) {
                        basic.showLeds(`
                            . . # . .
                            . . . . .
                            # # # # #
                            . . . . .
                            . . # . .
                            `)
                        basic.pause(500)
                        basic.clearScreen()
                    } else {
                        Operador = 1
                        basic.showLeds(`
                            . . # . .
                            . . # . .
                            # # # # #
                            . . # . .
                            . . # . .
                            `)
                        basic.pause(500)
                        basic.clearScreen()
                    }
                }
            }
        }
    }
    if (Operação == 2) {
        if (Operador == 1) {
            basic.showNumber(Global + Número1)
        } else {
            if (Operador == 2) {
                basic.showNumber(Global - Número1)
            } else {
                if (Operador == 3) {
                    basic.showNumber(Global * Número1)
                } else {
                    basic.showNumber(Global / Número1)
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (Operação == 1) {
        Global = Número1
        Número1 = 0
        Operação = 2
    }
    Número1 = Número1 + 1
    basic.showNumber(Número1)
})
let Global = 0
let Número1 = 0
let Operador = 0
let Operação = 0
Operação = 0
Operador = 0
Número1 = 0
Global = 0
