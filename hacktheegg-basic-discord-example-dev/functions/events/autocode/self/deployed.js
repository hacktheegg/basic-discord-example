// authenticates you with the API standard library
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let guilds = await lib.discord.guilds['@0.0.6'].list({
  limit: 100
});

let channels = await lib.discord.guilds['@0.0.6'].channels.list({
  guild_id: guilds[0].id
});

let generalChannel = channels.find((channel) => {
  return channel.name === 'welcome';
});

if (generalChannel) {
  let botInfo = await lib.discord.users['@0.0.6'].me.list();
  await lib.discord.channels['@0.0.6'].messages.create({
    channel_id: generalChannel.id,
    content: [
      `Hey there! Thanks for installing this Autocode-powered Discord bot.`,
      `Try mentioning me in a message like this: <@!${botInfo.id}>`,
      '',
      `You can edit the code for the bot from your Autocode account, or read more about the app here:`,
      'https://autocode.com/app/discord/basic-discord-example/'
    ].join('\n')
  });
}