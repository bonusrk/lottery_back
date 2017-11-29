const Ticket = require('../models/ticket')

exports.get = async (ctx, next) => {
  ctx.body = await Ticket.find({})
}

exports.post = async (ctx, next) => {
  const body = ctx.request.body
  console.log(ctx.request)
  try {
    ctx.body = await Ticket.create(body)
  } catch (error) {
    console.log(error)
    if (error.errors) ctx.body = error.errors
  }
}