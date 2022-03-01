const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.2.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "timetable=https://docs.google.com/spreadsheets/d/1x_JLEHLgWWUndOeDl7ZZKfmvLyK8h_L6Qo9uTfWr9bs/edit?usp=sharing",
});
