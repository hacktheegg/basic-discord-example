

//${context.params.event.content}

/*const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

// make API request
let result = await lib.discord.guilds['@0.2.2'].members.update({
  user_id: `${context.params.event.user_id}`,
  guild_id: `${context.params.event.guild_id}`,
  nick: `${context.params.event.content}`
});*/

/*const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
let event = context.params.event;
if (event.content.startsWith(`!copyme`)) {
  let text = event.content.split(` `);
  let suggestion = text.slice(1).join(` `);
  if (!suggestion) {
    await lib.discord.channels['@0.1.0'].messages.create({
      channel_id: event.channel_id,
      content: `I need you to say something. Then only will I be able to copy you.`,
    });
  } else {
    await lib.discord.channels['@0.1.0'].messages.destroy({
      channel_id: event.channel_id,
      message_id: event.id,
    });
    let suggest = await lib.discord.channels['@0.1.0'].messages.create({
      channel_id: context.params.event.channel_id,
      content: ``,
      embed: {
        title: `anonymous made me copy him/her!`,
        type: 'rich',
        color: 0x00ff00, //bright green (i love this color). You can change it to anything you want.
        footer: {
          text: `theegg | Devoloped By hacktheegg`, //replace this with your bot name and your name...
        },
        description: suggestion,
      },
    });
  }
}*/