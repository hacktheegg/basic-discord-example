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
     content: suggestion,
    });
  }
}*/

//context.params.event.content.split