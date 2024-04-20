const moment = require("moment");
const Discord = require("discord.js");

module.exports = {
  run: async (client, message, args) => {
    try {
      const confirmation = await message.channel.send(
        "Botun yeniden başlatılmasına onay vermek için ✅, iptal etmek için ❌'ı tıklayın."
      );

      const filter = (reaction, user) =>
        ["✅", "❌"].includes(reaction.emoji.name) && user.id === message.author.id;

      const collector = confirmation.createReactionCollector(filter, {
        time: 30000,
      });

      await confirmation.react("✅");
      await confirmation.react("❌");

      collector.on("collect", (reaction, user) => {
        if (reaction.emoji.name === "✅") {
          confirmation.edit("**Bot yeniden başlatılıyor...**");
          console.log(
            `[${moment().format("YYYY-MM-DD HH:mm:ss")}] Bot yeniden başlatılıyor...`
          );
          message.channel.send("Bot yeniden başlatılıyor...");
          const countdown = setInterval(() => {
            if (countdownValue > 0) {
              message.channel.send(`Bot yeniden başlatılıyor (${countdownValue}...)`);
              countdownValue--;
            } else {
              clearInterval(countdown);
              message.channel.send("Bot yeniden başlatılıyor(0..)");
              message.channel.send("Mataneeeeee <a:1925yellowhyperjump:1147212043619930164> ");
              setTimeout(() => {
                process.exit(0); // 0 normal çıkış, 1 hata çıkışı
              }, 1000);
            }
          }, 1000);
          let countdownValue = 5;
        } else if (reaction.emoji.name === "❌") {
          confirmation.edit("İşlem iptal edildi.");
          collector.stop();
        }
      });

      collector.on("end", (collected, reason) => {
        if (reason === "time") {
          confirmation.edit("İşlem süresi doldu, iptal edildi.");
        }
      });

      process.on("exit", () => {
        message.channel.send("Bot yeniden başlatıldı! (Yeniden başlatma tamamlandı ✅)");
      });
    } catch (error) {
      console.error(error);
      message.channel.send("Bir hata oluştu, bot yeniden başlatılamadı.");
    }
  },
  conf: {
    enabled: true,
    guildOnly: false,
    aliases: ["reboot"],
    permLevel: 4, 
    kategori: "Sahip",
  },
  help: {
    name: "reboot",
    description: "[Admin Komutu]",
    usage: "reboot",
  },
};