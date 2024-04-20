const Discord = require('discord.js');

exports.run = async(client, msg, args) => {
    if (args.length < 2) {
        return msg.reply('En az iki kişi etiketlemelisin!');
    }

    const mentionedUsers = msg.mentions.users;
    if (mentionedUsers.size < 2) {
        return msg.reply('En az iki kişi etiketlenmeli!');
    }

    const names = mentionedUsers.map(user => user.username);
    const lovePercentage = Math.floor(Math.random() * 101); // Generates a random percentage

    let loveHearts = '💗💗💗💗💗';
    if (lovePercentage < 25) {
        var yorum = 'Bu iş olmaz sen bunu unut.'
        loveHearts = '💔💔💔💔💔';
    } else if (lovePercentage < 50) {
        loveHearts = '💔💗💔💗💔';
        var yorum = 'Azıcıkta olsa bir şeyler hissediyor sana :)'
    } else if (lovePercentage < 75) {
        loveHearts = '💗💔💗💔💗';
        var yorum = 'Biraz daha uğraşırsan bu iş olacak gibi :)'
    } else if (lovePercentage > 75) {
        loveHearts = '💗💗💗💗💗';
        var yorum = `Sizi evlendirelim <3`
    }

    const loveMeterEmbed = new Discord.EmbedBuilder()
        .setAuthor({ name: 'Aşk Ölçer', iconURL: client.user.displayAvatarURL() })
        .setDescription(`${names[0]} ile ${names[1]} arasındaki aşk oranı: ${lovePercentage}% ${loveHearts}\n\n${yorum}`)
        .setColor('#D2EE07')
        .setFooter({ text: `Bu komutu kullanan kullanıcı: ${msg.author.tag}`, iconURL: msg.author.displayAvatarURL() });

    msg.channel.send({ embeds: [loveMeterEmbed], content: `${mentionedUsers.map(user => `<@${user.id}>`).join(' ')}` });
};

module.exports.conf = {
    aliases: ['aşk-ölç', 'love-meter','aşkölçer'],
    permLevel: 0,
    kategori: 'Eğlence'
};

module.exports.help = {
    name: 'aşk-ölçer',
    description: 'Belirtilen kişiler arasındaki aşk oranını hesaplar.',
    usage: 'aşk-ölçer <kişi1> <kişi2>'
};