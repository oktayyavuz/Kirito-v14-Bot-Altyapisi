const Discord = require('discord.js');

exports.run = async (client, msg) => {

    let target = msg.mentions.users.first() || msg.author;

    let targetMember = msg.guild.members.cache.get(target.id);

    if (!targetMember) {
        return msg.reply('bu kullanıcı sunucuda yok.');
    }

    let permissions = [
        'ADMINISTRATOR',
        'KICK_MEMBERS',
        'BAN_MEMBERS',
        'MANAGE_CHANNELS',
        'MANAGE_GUILD',
        'MENTION_EVERYONE',
        'MANAGE_NICKNAMES',
        'MANAGE_ROLES',
        'MANAGE_WEBHOOKS',
        'MANAGE_EMOJIS_AND_STICKERS'
    ];

    let targetPermissions = [];

    permissions.forEach(perm => {
        if (targetMember.permissions.has(perm)) {
            targetPermissions.push(`\`+ ${perm}\``);
        } else {
            targetPermissions.push(`\`- ${perm}\``);
        }
    });

    let embed = new Discord.MessageEmbed()
        .setAuthor('İzin Kontrol', 'https://cdn.discordapp.com/icons/1158395326915432499/56c3f261a210de2410d2a07e8809656f.webp?size=96', 'https://discord.gg/mondstadt')
        .setDescription(`**${target.tag} için İzinler** \n${targetPermissions.join('\n')}`)
        .setColor('#D2EE07')
        .setFooter(`Bu komutu kullanan kullanıcı ${msg.author.tag}`, msg.author.displayAvatarURL());

    msg.channel.send({ embeds: [embed] });

};

module.exports.conf = {
    aliases: ['izinler', 'perm', 'yetkilerim'],
    permLevel: 0,
    kategori: 'Moderasyon'
};

module.exports.help = {
    name: 'yetkilerim',
    description: 'Belirtilen kullanıcının izinlerini kontrol eder.',
    usage: 'yetkilerim [kullanıcı]'
};
