const Discord = require('discord.js');

exports.run = async(client, msg) => {

let devbadge = new Discord.EmbedBuilder()
.setAuthor({ name: 'Developer Badge Almak için', iconURL: 'https://preview.redd.it/say-hello-to-the-new-active-developer-badge-v0-tswry4vw56z91.png?auto=webp&s=40bd51e3e008ed4737a64fbaa1f3e629352848be', url: 'https://discord.com/developers/active-developer' })
.setColor('#D2EE07')  
.setFooter({ text: `Bu komutu kullanan kullanıcı ${msg.author.tag}` , iconURL: `${msg.author.displayAvatarURL()}` });

     msg.channel.send({embeds : [devbadge]});

}; 

module.exports.conf = {
aliases: ['devbadge'],
permLevel: 4, 
kategori: 'Sahip'
};

module.exports.help = {
    name: 'devbadge',
    description: 'Active Developer Badge.',
    usage: 'devbadge'
};

