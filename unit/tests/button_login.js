const mq = require('mithril-query')
const o = require('ospec')
const m = require('mithril')

const ModalCloseButtonComponent = {
    view: () =>
    m('.flex.justify-end.mb-6', [
        m('button',
          {
              onclick() {
                  m.route.set('/') },
          },
          m('span.mr-2', "Close"),
          m('span.i.fa.fa-times')),
    ]),
};

o.spec("MyComponent", function() {
    o("things are working", function() {
        var out = mq(ModalCloseButtonComponent)
        out.should.have('span.mr-2')
        out.should.contain('Close');
        out.should.not.contain('Open')
    })
})