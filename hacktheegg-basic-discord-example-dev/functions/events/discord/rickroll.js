const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});


await lib.discord.channels['@0.2.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "never gonna give you up, never gonna let you down, never gonna run around and desert you.",
  "tts": true,
});