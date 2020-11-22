const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
var p = ayarlar.prefix

exports.run = async (client, message, args) => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return console.log("Bu Sistem DM'de Kullanilamaz")


    if(message.member.hasPermission("ADMINISTRATOR")) {
      let erk = db.fetch(`erk_${message.guild.id}`)
        let kayıtsız = db.fetch(`kayitsiz_${message.guild.id}`)
        let member = message.mentions.members.first();
        let isim = args.slice(1,2).join("");
        
        
        const embed2 = new Discord.MessageEmbed()
        .setAuthor(`Hatalı Komut`, client.user.displayAvatarURL())
        .setDescription(`Hatali kullanıyorsun`)

        if (!member) return message.channel.send(embed2);

     

        member.setNickname(`${isim}`);
       
      member.roles.remove(kayıtsız)
        member.roles.add(erk) //Bunu Alt Alta Koyarak İstediğiniz Kadar Rol Verebilirsiniz Kayıt Yaparken
        message.channel.send(`kaydettim`)
      
   
    }else{
          
          message.author.send("Bu Komutu Sadece **Yönetici** Yetkisi Olanlar Erişebilir!")
        }


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıt'],
  permLevel: 0,

};

exports.help = {
  name: 'kayit',
  description: '',
  usage: '',
 
};