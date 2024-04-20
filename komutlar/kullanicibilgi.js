const Discord = require('discord.js');

exports.run = async(client, msg, args) => {

    let member = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]) || msg.member;
    let user = member.user;
    let memberRoles = member.roles.cache.map(r => r.name).join(", ");
    let roles = memberRoles.length > 1000? "Çok Fazla Rol" : memberRoles;

    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1? " gün" : " gün") + " önce";
    };

    let userInfo = new Discord.EmbedBuilder()
       .setAuthor({ name: 'Kullanıcı Bilgi', iconURL: user.displayAvatarURL() })
       .setDescription(`**Kullanıcı Bilgileri** \nKullanıcı İsmi: **${user.username}#${user.discriminator}** \nKullanıcı ID: **${user.id}** \nÜye Oluşturulma Tarihi: **${checkDays(user.createdAt)}** \nSunucuya Katılma Tarihi: **${checkDays(member.joinedAt)}** \nRoller: **${roles}**`)
       .setColor('#D2EE07')
       .setFooter({ text: `Bu komutu kullanan kullanıcı ${msg.author.tag}`, iconURL: `${msg.author.displayAvatarURL()}` });

    msg.channel.send({embeds : [userInfo]});

};

module.exports.conf = {
    aliases: ['kullanici','kb','user'],
    permLevel: 0, 
    kategori: 'Kullanıcı'
};

module.exports.help = {
    name: 'kullanici-bilgi',
    description: 'Belirtilen kullanıcı hakkında bilgi verir.',
    usage: 'kullanici-bilgi [kullanıcı etiketi]'
};