const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

if (context.params.event.content.match(/hello there/))  {
  await lib.discord.channels['@0.2.0'].messages.create({
    "channel_id": `${context.params.event.channel_id}`,
    "content": "hello there",
  });
}
if (context.params.event.content.match(/Hello there/))  {
  await lib.discord.channels['@0.2.0'].messages.create({
    "channel_id": `${context.params.event.channel_id}`,
    "content": "Hello there",
  });
}