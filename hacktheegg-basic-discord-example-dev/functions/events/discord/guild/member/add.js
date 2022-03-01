const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});


const username = `${context.params.event.user.username}`;
await lib.discord.channels['@0.2.0'].messages.create({
  "channel_id": `914148310716145685`,
  "content": `<@${context.params.event.user.id}>, hello there\n\n${username}`,
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `welcome to the server`,
      "description": `check the rules in <#853945871934291968> and then give yourself a touch of colour in <#906844854603091980>`,
      "color": 0x00FFFF,
      "image": {
        "url": `https://c.tenor.com/RPwxJcdJM0gAAAAM/panda-adorable.gif`,
        "height": 220,
        "width": 220
      }
    }
  ]
});

/*await lib.discord.channels['@0.2.0'].messages.create({
  "channel_id": `914148310716145685`,
  "content": `hello there <@${context.params.event.user.id}>`,
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `welcome to server!`,
      "description": "check the rules area <#914148310716145685> and then verify yourself in <#906844854603091980>",
      "color": 0x00FFFF
    }
  ]
});*/