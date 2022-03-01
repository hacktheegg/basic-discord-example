const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});


await lib.discord.channels['@0.2.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `The Rules!`,
      "description": `This is something you need to look at.`,
      "color": 0x00FFFF,
      "fields": [
        {
          "name": `Rule 1`,
          "value": `No Swearing\n\nAny bad words will be auto-moderated by the @MEE6 bot and if you try to bypass this to fight with someone, a manual moderator will mute for 5-10 mins if only an outburst./n/Inprovised swearing will be punished if used agressively.`
        },
        {
          "name": `Rule 2`,
          "value": `no inappropriate photos/videos\n\nSending a photo/video/link bypasses the auto-moderator. If you are a repeat offender you will be stripped of your embed perms and can me temp-muted leading up to the change.`
        },
        {
          "name": `Important!`,
          "value": `If you get 50 warnings in a year you will be banned. 2 in a 30 min period is a 5 min temp-mute, 4 within an hour is a perma-mute.\n\nThis is something worth reading for the trouble-makers.`
        }
      ]
    }
  ]
});