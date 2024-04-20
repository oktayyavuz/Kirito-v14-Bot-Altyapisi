exports.run = async (client, message, args) => {
    const deleteCount = parseInt(args[0], 10);

    if (!deleteCount || deleteCount < 1 || deleteCount > 100) {
        return message.reply("Lütfen 1 ile 100 arasında bir sayı belirtin.");
    }

    const twoWeeksAgo = new Date(Date.now() - 1209600000); // 14 gün önce
    const fetchedMessages = await message.channel.messages.fetch({ limit: deleteCount });
    const oldMessages = fetchedMessages.filter(msg => msg.createdTimestamp < twoWeeksAgo);

    if (oldMessages.size > 0) {
        const newMessages = fetchedMessages.filter(msg => msg.createdTimestamp >= twoWeeksAgo);

        if (newMessages.size > 0) {
            message.channel.bulkDelete(newMessages)
                .then(messages => {
                    message.channel.send(`14 günden daha eski mesajlar hariç, başarıyla ${messages.size} mesaj silindi.`)
                        .then(msg => msg.send({ timeout: 5000 })); // 5 saniye sonra sil
                })
                .catch(error => {
                    console.error('Yeni mesajlar silinirken bir hata oluştu:', error);
                    message.reply('Yeni mesajları silerken bir hata oluştu.');
                });
        }

        return message.reply("14 günden daha eski mesajlar silinemedi. Diğer mesajlar başarıyla silindi.");
    }

    message.channel.bulkDelete(deleteCount)
        .then(messages => {
            message.channel.send(`Başarıyla ${messages.size} mesaj silindi.`)
                .then(msg => msg.send()); 
        })
        .catch(error => {
            console.error('Mesajlar silinirken bir hata oluştu:', error);
            message.reply('Mesajları silerken bir hata oluştu.');
        });
};

exports.conf = {
    aliases: ['temizle','sil'],
    permLevel: 2, 
    kategori: 'Moderasyon'
};

exports.help = {
    name: 'sil',
    description: 'Belirtilen sayıda mesajı siler.',
    usage: 'sil <mesaj sayısı>'
};
