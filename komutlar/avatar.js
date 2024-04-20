const Discord = require('discord.js');

exports.run = async(client, msg) => {

    let user = msg.mentions.users.first() || msg.author;
    let avatar = user.displayAvatarURL({ dynamic: true });

    const embed = new Discord.EmbedBuilder()
        .setAuthor({ name: 'Avatar', iconURL: avatar })
        .setImage(avatar)
        .setColor('#D2EE07')
        .setFooter({ text: ` ${msg.author.tag} kullandı`, iconURL: `${msg.author.displayAvatarURL()}` });

    msg.channel.send({ embeds: [embed] });

};

module.exports.conf = {
    aliases: ['avatar', 'pp'],
    permLevel: 0,
    kategori: 'Genel'
};

module.exports.help = {
    name: 'avatar',
    description: 'Kullanıcının avatarını gösterir.',
    usage: 'avatar'
};