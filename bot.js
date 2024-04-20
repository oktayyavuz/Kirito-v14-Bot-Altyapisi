const { Client, GatewayIntentBits, Partials } = require("discord.js");
const ayarlar = require("./ayarlar.json");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.GuildMember,
    Partials.Reaction,
  ],
});

client.on('messageCreate', msg => { 
  if (msg.content === 'sa') {
    msg.reply('as cnm la naber 😋 ');
  }

  if (msg.content === 'yardım') {
    msg.reply('k.yardım ı kullan ');
  }
  if (msg.content === 'naber') {
    msg.reply('iyi senden naber 😃 ');
  }
  if (msg.content === 'Sa') {
    msg.reply('as cnm la naber 😋 ');
  }
  if (msg.content === 'SA') {
    msg.reply('as cnm la naber 😋 ');
  }
  if (msg.content === 'göt') {
    msg.reply('Sensin göt obvosbnuçocuu 🤬 ');
  }
  if (msg.content === '31') {
    msg.reply('https://www.youtube.com/watch?v=OTJEQ8W_T1U ');
  }
  if (msg.content === '69') {
    msg.reply('https://www.pedalla.com/wp-content/uploads/2019/06/bayburt_giris.jpg ');
  }
  if (msg.content === 'sex') {
    msg.reply('Günah oç 🕋 ');
  }
  if (msg.content === 'w cash') {
    const channel = msg.guild.channels.cache.find(channel => channel.name === '🧩・owo-bot'); 
    if (channel) { 
      msg.reply(`sg ${channel} kanalına`); 
    } else { 
      msg.reply("Kanal bulunamadı.");
    }
  }
  if (msg.content === 'Sea') {
    msg.reply('as cnm la naber 😋');
  }
  if (msg.content === 'sea') {
    msg.reply('as cnm la naber 😋');
  }
  if (msg.content === 'owo cash') {
    const channel = msg.guild.channels.cache.find(channel => channel.name === '🧩・owo-bot'); 
    if (channel) { 
      msg.reply(`sg ${channel} kanalına`); 
    } else { 
      msg.reply("Kanal bulunamadı.");
    }
  }

});


module.exports = client;


require("./events/message.js");
require("./events/ready.js");


const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);

client.login(process.env.TOKEN || ayarlar.token);
