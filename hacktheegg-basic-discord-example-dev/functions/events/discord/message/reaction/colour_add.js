// authenticates you with the API standard library
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let validMessage = '930051903214215188'; //Change this to match the message ID you want to track
let no = '864306095208005662';//the users id that you want to stop
let validRoles = {
  '🟦': '929687191490289714', //turquoise
  '🟢': '930028882801856592', //green
  '🔵': '930029018655363092', //blue
  '🟣': '930029025244643330', //purple
  '🔴': '930029028847546369', //red
  '🟡': '930029032744054846', //yellow
  '📴': '930029035759730708', //orange (lighter)
  '🟠': '930029038905479229', //orange (darker)
  '⚪': '930029041602408498', //grey (lighter)
  '⚫': '930029044337094656'  //grey (darker)
  /*'🧙‍♂️': 'ROLE_ID_2',
  'customEmojiName': 'ROLE_ID_3'*/
};
let validRole = validRoles[context.params.event.emoji.name];
if (no !== context.params.event.user_id) {
  if (context.params.event.message_id === validMessage && validRole) {
    await lib.discord.guilds['@0.1.0'].members.roles.update({
      role_id: `${validRole}`,
      user_id: `${context.params.event.user_id}`,
      guild_id: `${context.params.event.guild_id}`
    });
  }
}



if (validRole == 929687191490289714) {
  channelColour = 'turquoise';
} else if (validRole == 930028882801856592) {
  channelColour = 'green';
} else if (validRole == 930029018655363092) {
  channelColour = 'blue';
} else if (validRole == 930029025244643330) {
  channelColour = 'purple';
} else if (validRole == 930029028847546369) {
  channelColour = 'red';
} else if (validRole == 930029032744054846) {
  channelColour = 'yellow';
} else if (validRole == 930029035759730708) {
  channelColour = 'orange lighter';
} else if (validRole == 930029038905479229) {
  channelColour = 'orange darker';
} else if (validRole == 930029041602408498) {
  channelColour = 'grey lighter';
} else if (validRole == 930029044337094656) {
  channelColour = 'grey darker';
}