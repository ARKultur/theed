const o = require('ospec')

const jsdom = require('jsdom')

var dom = new jsdom.JSDOM("", {
    pretendToBeVisual: true,
})

global.window = dom.window
global.document = dom.window.document
global.requestAnimationFrame = dom.window.requestAnimationFrame

const m = require('mithril')

o.after(function() {
    dom.window.close()
})