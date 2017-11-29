const app = require('../app');
const rp = require('request-promise').defaults({
  encoding: null,
  simple: false,
  resolveWithFullResponse: true,
  json: true
});

let server;
const Ticket = require('../models/ticket');


describe('Ticket tests', () => {
  const defaultTicket = {
    ticketNumber: 123
  }

  before(done => {
    server = app.listen(3000, done);
  });

  after(done => {
    server.close(done);
  });

  describe('Test database operations', () => {
    before(async () => {
      await Ticket.remove({})
      try {
        let user = await Ticket.create(defaultTicket)
      } catch (error) {
        console.log(error)
      }
    })

    after(async () => {
      await Ticket.remove({})
    })
    context('DB ticket tests', () => {
      it('should return single ticket', async () => {
        const ticket = await Ticket.findOne(defaultTicket)
        ticket.ticketNumber.should.be.eql(defaultTicket.ticketNumber)
      })
    })
  })
})