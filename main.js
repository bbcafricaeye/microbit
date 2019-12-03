function countDown() {
    basic.pause(1000)
    music.playTone(523, music.beat(BeatFraction.Sixteenth))
    basic.showLeds(`
        . # . # #
        . # . # #
        . # . # #
        . # . # #
        . # . # #
        `, 1000)
    music.playTone(494, music.beat(BeatFraction.Sixteenth))
    basic.showLeds(`
        . . . # #
        . . . # #
        . . . # #
        . . . . #
        . . . # #
        `, 1000)
    music.playTone(466, music.beat(BeatFraction.Sixteenth))
    basic.showLeds(`
        . . . # #
        . . . # #
        . . . . .
        . . . # #
        . . . # #
        `, 1000)
    music.playTone(440, music.beat(BeatFraction.Sixteenth))
    basic.showLeds(`
        . . . # #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `, 1000)
    music.playTone(415, music.beat(BeatFraction.Sixteenth))
    basic.showLeds(`
        . . . # #
        . . . # .
        . . . # #
        . . . # #
        . . . # #
        `, 1000)
    music.playTone(392, music.beat(BeatFraction.Sixteenth))
    basic.showLeds(`
        . . . # #
        . . . # .
        . . . # #
        . . . . #
        . . . # #
        `, 1000)
    music.playTone(370, music.beat(BeatFraction.Sixteenth))
    basic.showLeds(`
        . . . # .
        . . . # .
        . . . # #
        . . . . #
        . . . . #
        `, 1000)
    music.playTone(349, music.beat(BeatFraction.Sixteenth))
    basic.showLeds(`
        . . . # #
        . . . . #
        . . . # #
        . . . . #
        . . . # #
        `, 1000)
    music.playTone(330, music.beat(BeatFraction.Sixteenth))
    basic.showLeds(`
        . . . # #
        . . . . #
        . . . # #
        . . . # .
        . . . # #
        `, 1000)
    music.playTone(311, music.beat(BeatFraction.Sixteenth))
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `, 1000)
    music.playTone(294, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `, 2000)
    basic.clearScreen()
}
input.onGesture(Gesture.Shake, function () {
    blinkEye()
    basic.showString(" NOTHING STAYS HIDDEN FOREVER > BBC AFRICA EYE ", 100)
})
function blinkEye() {
    basic.showLeds(`
        . . . . .
        . # # # .
        # . # . #
        . # # # .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        # . # . #
        . # # # .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(50)
    basic.showLeds(`
        . . . . .
        . # # # .
        # . # . #
        . # # # .
        . . . . .
        `, 400)
    basic.showLeds(`
        . . . . .
        . # # # .
        # . . # #
        . # # # .
        . . . . .
        `, 400)
    basic.showLeds(`
        . . . . .
        . # # # .
        # . # . #
        . # # # .
        . . . . .
        `, 200)
    basic.showLeds(`
        . . . . .
        . # # # .
        # # . . #
        . # # # .
        . . . . .
        `, 400)
    basic.showLeds(`
        . . . . .
        . # # # .
        # . # . #
        . # # # .
        . . . . .
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `, 100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `, 100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `, 100)
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    basic.showString(" " + goneAbove.length + " " + pluralise(goneAbove.length, 'EVENT'), 100)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString(" RUNNING FOR " + parseTime(input.runningTime()), 100)
})
input.onButtonPressed(Button.B, function () {
    if (goneAbove.length == 0) {
        basic.showString("NO EVENTS", 100)
    } else {
        for (let index = 0; index <= goneAbove.length - 1; index++) {
            timeFrom = input.runningTime() - goneAbove[index]
            let timeFromStr = parseTime(timeFrom)
            basic.showString(ordinal(index + 1) + ": " + timeFromStr + " AGO / ", 100)
            basic.clearScreen()
        }
    }
})
let numLightReadings = 0
let timeFrom = 0
let goneAbove: number[] = []
let timerInterval = 0
let avgLightReading = 0
function ordinal(i: number) {
    let j = i % 10
    let k = i % 100
    if (j == 1 && k != 11) {
        return i + "ST"
    }
    if (j == 2 && k != 12) {
        return i + "ND"
    }
    if (j == 3 && k != 13) {
        return i + "RD"
    }
    return i + "TH"
}
function pluralise(num: number, str: string) {
    if (num == 1) return str
    else return str + 'S'
}
function parseTime(s: number) {
    let ms = s % 1000
    s = (s - ms) / 1000
    let secs = s % 60
    s = (s - secs) / 60
    let mins = s % 60
    let hrs = (s - mins) / 60
    let ret = pad(mins) + "m " + pad(secs) + "s"
    if (hrs > 0) ret = pad(hrs) + "h " + ret
    return ret
}
function pad(n: number) {
    return ('00' + n).slice(-2)
}
blinkEye()
countDown()
basic.forever(function () {
    while (input.runningTime() >= 20000 && input.runningTime() <= 35000) {
        serial.writeString("" + input.lightLevel())
        basic.pause(100)
        numLightReadings = numLightReadings + 1
        avgLightReading = avgLightReading + (input.lightLevel() - avgLightReading) / numLightReadings
        // serial.writeValue("Timestamp", input.runningTime())
        // serial.writeValue(" Readings", numLightReadings)
        // serial.writeValue("Avg Light", avgLightReading)
        // serial.writeValue("    Light", input.lightLevel())
        basic.pause(900)
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
    }
    if (input.runningTime() > 20000) { // has been running for more than 20 seconds
        if (input.lightLevel() >= avgLightReading * 1.1) {
            goneAbove.push(input.runningTime())
            basic.pause(300000) // wait 5 minutes before adding to events
        }
    }
})
