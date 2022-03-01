const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let users = [/*Platnium_'273983284709687297',*/ /*hacktheegg*/'694319724925812876', /*panda1*/'914323316897108028', /*Genderless_strawbrry*/'882160898150633473', /*no.*/'659271861015937025', /*DaFroggy*/'744835844568776734', /*Delirriumanity*/'752830847396085810', /*Demon😈*/'889534270937387048', /*Dripnn_BL00D*/'739742987013324820', /*Endermayne*/'655669435616460800', /*error_*/'585711315109150730', /*Midnighter'728811951034990623',*/ /*Monkey Tactics*/'604581508828758017', /*MyRatIsInTheBath*/'716136093711466536', /*Nogamer'864306095208005662',*/ /*Strngee*/'797307308773212180', /*Wonder_Secret*/'578137588909604864', /*kej*/'934934483222794270'];
//let users = ['694319724925812876', '914323316897108028'];
let target = users[Math.floor(Math.random() * users.length)]
let target1 = [694319724925812876]
let result = await lib.discord.users['@0.2.0'].dms.create({
  recipient_id: target,
  content: `Hello there. You are the lucky user of this weeks randomised message recipient. If you want to unsubscribe go to this server and reacact to a pinned message in #general`
});
let result1 = await lib.discord.users['@0.2.0'].dms.create({
  recipient_id: target,
  content: `https://discord.gg/pptHVrURbs`
});

/*let users = ['694319724925812876', '914323316897108028'];
let target = users[Math.floor(Math.random() * users.length)]
let result = await lib.discord.users['@0.2.0'].dms.create({
  recipient_id: target,
  content: `time for your midnight snack`
});*/



if (target == 273983284709687297) {
  //Platnium_ = 273983284709687297
  let result2 = await lib.discord.channels['@0.3.0'].messages.create({
    content: 'Platnium_',
    channel_id: `914146717740437554`
  });
} else if (target == 694319724925812876) {
  //hacktheegg = 694319724925812876
  let result3 = await lib.discord.channels['@0.3.0'].messages.create({
    content: 'hacktheegg',
    channel_id: `914146717740437554`
  });
} else if (target == 914323316897108028) {
  //panda1 = 914323316897108028
  let result4 = await lib.discord.channels['@0.3.0'].messages.create({
    content: 'panda1',
    channel_id: `914146717740437554`
  });
} else if (target == 882160898150633473) {
  //Genderless_strawbrry = 882160898150633473
  let result5 = await lib.discord.channels['@0.3.0'].messages.create({
    content: 'Genderless_strawbrry',
    channel_id: `914146717740437554`
  });
} else if (target == 659271861015937025) {
  //no. = 659271861015937025
  let result6 = await lib.discord.channels['@0.3.0'].messages.create({
    content: 'no.',
    channel_id: `914146717740437554`
  });
} else if (target == 744835844568776734) {
  //DaFroggy = 744835844568776734
  let result7 = await lib.discord.channels['@0.3.0'].messages.create({
    content: 'DaFroggy',
    channel_id: `914146717740437554`
  });
} else if (target == 752830847396085810) {
  //Delirriumanity = 752830847396085810
  let result8 = await lib.discord.channels['@0.3.0'].messages.create({
    content: 'Delirriumanity',
    channel_id: `914146717740437554`
  });
} else if (target == 889534270937387048) {
  //Demon😈 = 889534270937387048
  let result9 = await lib.discord.channels['@0.3.0'].messages.create({
    content: 'Demon😈',
    channel_id: `914146717740437554`
  });
} else if (target == 739742987013324820) {
  //Dripnn_BL00D = 739742987013324820
  let result10 = await lib.discord.channels['@0.3.0'].messages.create({
    content: 'Dripnn_BL00D',
    channel_id: `914146717740437554`
  });
} else if (target == 655669435616460800) {
  //Endermayne = 655669435616460800
  let result11 = await lib.discord.channels['@0.3.0'].messages.create({
    content: 'Endermayne',
    channel_id: `914146717740437554`
  });
} else if (target == 585711315109150730) {
  //error_ = 585711315109150730
  let result12 = await lib.discord.channels['@0.3.0'].messages.create({
    content: 'error_',
    channel_id: `914146717740437554`
  });
} else if (target == 728811951034990623) {
  //Midnighter = 728811951034990623
  let result13 = await lib.discord.channels['@0.3.0'].messages.create({
    content: 'Midnighter',
    channel_id: `914146717740437554`
  });
} else if (target == 604581508828758017) {
  //Monkey Tactics = 604581508828758017
  let result14 = await lib.discord.channels['@0.3.0'].messages.create({
    content: 'Monkey Tactics',
    channel_id: `914146717740437554`
  });
} else if (target == 716136093711466536) {
  //MyRatIsInTheBath = 716136093711466536
  let result15 = await lib.discord.channels['@0.3.0'].messages.create({
    content: 'MyRatIsInTheBath',
    channel_id: `914146717740437554`
  });
} else if (target == 864306095208005662) {
  //Nogamer = 864306095208005662
  let result16 = await lib.discord.channels['@0.3.0'].messages.create({
    content: 'Nogamer',
    channel_id: `914146717740437554`
  });
} else if (target == 797307308773212180) {
  //Strngee = 797307308773212180
  let result17 = await lib.discord.channels['@0.3.0'].messages.create({
    content: 'Strngee',
    channel_id: `914146717740437554`
  });
} else if (target == 578137588909604864) {
  //Wonder_Secret = 578137588909604864
  let result18 = await lib.discord.channels['@0.3.0'].messages.create({
    content: 'Wonder_Secret',
    channel_id: `914146717740437554`
  });
} else if (target == 934934483222794270) {
  //kej = 934934483222794270
  let result19 = await lib.discord.channels['@0.3.0'].messages.create({
    content: 'kej',
    channel_id: `914146717740437554`
  });
} else {
  let result20 = await lib.discord.channels['@0.3.0'].messages.create({
    content: 'unknown user',
    channel_id: `914146717740437554`
  });
}
let result21 = await lib.discord.channels['@0.3.0'].messages.create({
  content: target,
  channel_id: `914146717740437554`
});

/**/
//, '934934483222794270'
////Platnium_ = 273983284709687297
////hacktheegg = 694319724925812876
////panda1 = 914323316897108028
////Genderless_strawbrry = 882160898150633473
////no. = 659271861015937025
////DaFroggy = 744835844568776734
////Delirriumanity = 752830847396085810
////Demon😈 = 889534270937387048
////Dripnn_BL00D = 739742987013324820
////Endermayne = 655669435616460800
////error_ = 585711315109150730
////Midnighter = 728811951034990623
////Monkey Tactics = 604581508828758017
////MyRatIsInTheBath = 716136093711466536
////Nogamer = 864306095208005662
//SK = 223748248869797888
////Strngee = 797307308773212180
////Wonder_Secret = 578137588909604864
////kej = 934934483222794270



/*let items = ['Yes', 'No', 'Maybe', 'Perhaps', 'Indecisive', "It's better if you don't know", 'Of course', 'Definitely not', 'Obviously not', 'Probably not'];
let random = items[Math.floor(Math.random() * items.length)]
if (context.params.event.content.startsWith('-8ball')) {
  await lib.discord.channels['@0.1.1'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: random
  });
}*/