const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
    message.delete();
    return message.channel.send(`**${mesaj}**`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle','yaz'],
  permLevel: 1,
  kategori: 'Eğlence'
};


exports.help = {
  name: 'yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};