const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');



const kufurList = [ 
    "amına kodumun jedayı seni",
    "ebenin amı gibi kaşları da kara",
    "seni amında olimpiyat meşalesi yakıp 10 km kostuğumun yavşağı ",
    "senin amına mancınıkla patates atayım",
    "senin dalağını öyle bi sikerim ki ömür boyu hıçkırırsın",
    "amına bilardo topuyla rövaşata çekerim am dolması yarrak kafalı çin orospusu seni amına kodumun çin aslanı bilyesini gibtiğimin am düdüğü",
    "senin amını düdüklü tencerenin arasına alıp öttüre öttüre sikerim ulan ben",
    "amını keserim cebime koyarım sıkıldıkça sikerim",
    "amına sınav yapar 2 milyon kişiyi sokarım",
    "amına barut döker sürtünmeyle yakarım orospu evladı",
    "seni bi sikerim bluetooh un hata verir kapsama alanın genişler.",
    "o tuşlara basan ufacık parmaklarının arasına sokar felç edene kadar siker o felç olan parmaklarını kesip organ mafyasına satarım elde ettigim gelirin bi kısmını görme engelliler vakfına bağışlar kalan kısmıda çarçur eder babanın delirmesini sağlar ocağına incir ağacı diker ağacın gölgesinde ebeni dallı budaklı sikerim senin",
    "küfür etmek günah olum sen ne yaptıysan artık sana kızmış birisi affettir kendini beni de günaha sokçak orospu kertenkelesi",
    "küfür ederdim ama sikmek çok yordu",
    "öyle yan durup şekilli mekilli tişört giyme seni götünden siker Erol Taş gibi kiraz ağacından kamçı yapar döverim",
    "seni öyle bir sikerim ki einstein izafiyet teorsini kanitlarim amina kodumun evladi seni karadelige sokar uzay-zamanda paradoksunda sonsuza kadar sikerim seni oyle bir sikerim ki annenin fırına koydugu patates yemeği yanar amına kodumun derbeder piç evladı seni varya alırım boyle balyoz niyetine sağa sola heryere vura vura derbeder ederim amina kodumun yıkık piçi senin sevgilini bulurum boyle instadan yazar gozunun onunde sikerim amina kodumun çelimsiz pezevengi o parmaklarini alir tek tek gotune sokarim cifte telli oynarsin ammmmmmmmmmina kodumun dalyarragi sana bir sokarim migdendikeler kulagindan gelir amcık çorbası seni , seni yerçekimi kanunundan bagimsiz şekilde sikerek havalandırırım amına kodumun guguklu saati"
 

];

const preventedUsers = {
    "1193730158042021988": "Sen kimsin Oktaya Sövüyon yarrak!",
    "472112214258745364": "Dilara Kırmızı çizgimiz sg!",
    "kullanıcı_idsi_3": "Üzgünüm, bu kullanıcıya saygısızlık etmemelisiniz!"
    // Diğer kullanıcılar için istediğiniz özel cevapları buraya ekleyin
};


exports.run = async (client, msg) => {

 const mentionedUser = msg.mentions.users.first();

 if (mentionedUser && preventedUsers.hasOwnProperty(mentionedUser.id)) {
        // Özel cevabı al ve gönder
        const customResponse = preventedUsers[mentionedUser.id];
        msg.channel.send(customResponse);
    }
else {
    // Rastgele bir anime seçme
    const randomKufur = kufurList[Math.floor(Math.random() * kufurList.length)];


    // Rastgele animeyi mesaj olarak gönderme
    msg.channel.send(`${mentionedUser}, ${randomKufur}`);
}


};


exports.conf = {
    aliases: ['söv', 'sov', 'küfüret', 'küfür-et'],
    permLevel: 0,
    kategori: 'Eğlence'
};

exports.help = {
    name: 'söv',
    description: 'Söver.',
    usage: 'söv'
};