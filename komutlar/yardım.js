const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;

//GENEL KOMUTU
    if(args[0] === "Genel" || args[0] === "genel" || args[0] === "General" || args[0] === "general") {
              let Genel = new Discord.EmbedBuilder()
              .setAuthor({ name: 'Genel', iconURL: `${message.author.displayAvatarURL()}`, url: 'https://discord.gg/mondstadt' })
              .setColor('#2667FF')
              .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Genel').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
             .setFooter({ text: `Bu komutu kullanan kullanıcı ${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });
        return message.channel.send({embeds : [Genel]});
         
       
       return;
    }
    //SUNUCU KOMUTU
      if(args[0] === "Sunucu" || args[0] === "sunucu") {
              let Sunucu = new Discord.EmbedBuilder()
              .setAuthor({ name: 'Sunucu', iconURL: `${message.author.displayAvatarURL()}`, url: 'https://discord.gg/mondstadt' })
              .setColor('#2667FF')
              .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Sunucu').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
             .setFooter({ text: `Bu komutu kullanan kullanıcı ${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });
                   return message.channel.send({embeds : [Sunucu]});
         
      

       return;
    }
//EĞLENCE KOMUTU
  if(args[0] === "Eğlence" || args[0] === "eğlence" || args[0] === "Fun" || args[0] === "fun") {
   let Eğlence = new Discord.EmbedBuilder()
   .setAuthor({ name: 'Eğlence', iconURL: `${message.author.displayAvatarURL()}`, url: 'https://discord.gg/mondstadt' })
   .setColor('#2667FF')
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Eğlence').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
  .setFooter({ text: `Bu komutu kullanan kullanıcı ${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });
        return message.channel.send({embeds : [Eğlence]});
  
      
           return;
  }
  //MODERASYON KOMUTU
  if(args[0] === "Moderasyon" || args[0] === "moderasyon" || args[0] === "moderation" || args[0] === "Moderation") {
   let Moderasyon = new Discord.EmbedBuilder()
   .setAuthor({ name: 'Moderasyon', iconURL: `${message.author.displayAvatarURL()}`, url: 'https://discord.gg/mondstadt' })
   .setColor('#2667FF')
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Moderasyon').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
  .setFooter({ text: `Bu komutu kullanan kullanıcı ${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });
       return message.channel.send({embeds : [Moderasyon]});
             
       
               return;
  }
     //SAHİP KOMUTU
  if(args[0] === "Sahip" || args[0] === "sahip" ) {
    let Sahip = new Discord.EmbedBuilder()
    .setAuthor({ name: 'Sahip', iconURL: `${message.author.displayAvatarURL()}`, url: 'https://discord.gg/mondstadt' })
    .setColor('#2667FF')
    .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Sahip').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
   .setFooter({ text: `Bu komutu kullanan kullanıcı ${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });

         return message.channel.send({embeds : [Sahip]});

        
                return;
   }

     //SAHİP KOMUTU
  if(args[0] === "TümKomutlar" || args[0] === "tümkomutlar" ) {
    let TümKomutlar = new Discord.EmbedBuilder()
    .setAuthor({ name: 'Tüm Komutlar', iconURL: `${message.author.displayAvatarURL()}`, url: 'https://discord.gg/mondstadt' })
    .setColor('#2667FF')
    .setDescription(
            `**Genel Komutlar:**\n${client.commands.filter(cmd => cmd.conf.kategori === 'Genel').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n")}\n\n` +
            `**Eğlence Komutları:**\n${client.commands.filter(cmd => cmd.conf.kategori === 'Eğlence').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n")}\n\n` +
            `**Moderasyon Komutları:**\n${client.commands.filter(cmd => cmd.conf.kategori === 'Moderasyon').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n")}\n\n` +
            `**Sunucu Komutları:**\n${client.commands.filter(cmd => cmd.conf.kategori === 'Sunucu').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n")}\n\n` +
            `**Sahip Komutları:**\n${client.commands.filter(cmd => cmd.conf.kategori === 'Sahip').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n")}`
        )
   .setFooter({ text: `Bu komutu kullanan kullanıcı ${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });

         return message.channel.send({embeds : [TümKomutlar]});

        
                return;
   }


//YARDIM KOMUTU
  
  let embed = new Discord.EmbedBuilder()
  .setAuthor({ name: 'Yardım', iconURL: `${message.author.displayAvatarURL()}`, url: 'https://discord.gg/mondstadt' })
  .setColor('#FFFB05')
  .setDescription(`**Örnek Kullanım:** \`${prefix}yardım Kategori\` \n **Örnek:** \`${prefix}yardım Eğlence\``)
	.addFields(
		{ name: 'Kategoriler', value:'Tüm kategoriler'},
		{ name: `${prefix}yardım Genel`, value: 'Genel komutlar', inline: true },
		{ name: `${prefix}yardım Eğlence`, value: 'Eğlence komutları', inline: true },
    { name: `${prefix}yardım Moderasyon`, value: 'Moderasyon komutları', inline: true },
		{ name: `${prefix}yardım Sunucu`, value: 'Sunucu komutları', inline: true },
		{ name: `${prefix}yardım Sahip`, value: 'Sahip komutları', inline: true },
    { name: `${prefix}yardım Tüm Komutlar`, value: 'Tüm Komutlar', inline: true },

	)

  .setFooter({ text: `Bu komutu kullanan kullanıcı ${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });

  return message.channel.send({embeds : [embed]});

  
}
    


  exports.conf = {
    aliases: ['help', 'cmds', 'komutlar','y'], 
    permLevel: 0,
    kategori: "Genel" 
  };

  exports.help = {
    name: 'yardım',  
    description: 'Komutlar hakkında bilgi verir.', 
    usage: 'yardım', 
  };

 