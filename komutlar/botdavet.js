const Discord = require('discord.js');

exports.run = async(client, msg) => {

let botdavet = new Discord.EmbedBuilder()
.setAuthor({ name: 'Beni Davet etmek için yazıya tıkla', iconURL: 'https://cdn.discordapp.com/avatars/1226773465499959307/621f17318f86e9373f2d6b511295ee28.webp?size=96', url: 'https://discord.com/oauth2/authorize?client_id=1226773465499959307&scope=bot&permissions=27648860222' })
.setColor('#D2EE07')  
.setFooter({ text: `Bu komutu kullanan kullanıcı ${msg.author.tag}` , iconURL: `${msg.author.displayAvatarURL()}` });

     msg.channel.send({embeds : [botdavet]});

}; 

module.exports.conf = {
aliases: ['botdavet','bd','bot'],
permLevel: 0, 
kategori: 'Moderasyon'
};

module.exports.help = {
    name: 'botdavet',
    description: 'Bot davet linki atar.',
    usage: 'botdavet'
};

