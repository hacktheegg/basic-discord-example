const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let result = await lib.discord.channels['@0.3.0'].messages.bulkDelete({
  channel_id: '${context.params.event.channel_id}',
  messages: [
    `100`
  ]
});