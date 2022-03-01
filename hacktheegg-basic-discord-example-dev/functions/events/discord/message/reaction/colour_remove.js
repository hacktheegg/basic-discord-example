const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let validMessage = '930053934788268053'; //Change this to match the message ID you want to track
let no = '864306095208005662';
let validRoles = {
  '🟦': '929687191490289714', // These need to be the role IDs from your server
  '🟢': '930028882801856592',
  '🔵': '930029018655363092',
  '🟣': '930029025244643330',
  '🔴': '930029028847546369',
  '🟡': '930029032744054846',
  '📴': '930029035759730708',
  '🟠': '930029038905479229',
  '⚪': '930029041602408498',
  '⚫': '930029044337094656'
  /*'🧙‍♂️': 'ROLE_ID_2',
  'customEmojiName': 'ROLE_ID_3'*/

};

let validRole = validRoles[context.params.event.emoji.name];

if (no !== context.params.event.user_id) {
  await lib.discord.guilds['@0.1.0'].members.roles.destroy({
    role_id: `${validRole}`,
    user_id: `${context.params.event.user_id}`,
    guild_id: `${context.params.event.guild_id}`
  });
}