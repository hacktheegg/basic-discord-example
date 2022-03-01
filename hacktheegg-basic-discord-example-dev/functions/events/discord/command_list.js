const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.2.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": `the /help section`,
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `Help Menu`,
      "description": `bot commands and keywords`,
      "color": 0x00FFFF,
      "fields": [
        {
          "name": `/rickroll`,
          "value": `rickrolls server`
        },
        {
          "name": `!ttt (opponent)`,
          "value": `Starts tic tac toe with your opponent. (Can be yourself)`
        },
        {
          "name": `/ping`,
          "value": `Figures out the servers ping to find out the exact location that the server is being hosted`
        },
        {
          "name": `/rules`,
          "value": `displays the rules`
        },
        {
          "name": `/timetable`,
          "value": `gives a link for when certain people check links`
        },
        {
          "name": `!copyme`,
          "value": `copys your message anonymously`
        },
        {
          "name": `hello there`,
          "value": `responds with 'hello there'`
        }
      ]
    }
  ]
});