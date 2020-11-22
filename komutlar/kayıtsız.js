const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async(client, message, args) => { 


  if(message.author.bot) return;
  if(message.channel.type === "dm") return console.log("Bu Sistem DM'de Kullanilamaz yaw ")


    if(message.member.hasPermission("ADMINISTRATOR")) {

        let is4 = message.mentions.roles.first()
        if(!is4) return message.reply("Bir Rol Belirtmen Gerekli!")       
      
            db.set(`kayitsiz_${message.guild.id}`, is4.id)
            message.channel.send("Kayitsiz Rolü Ayarlandı:  <@&" + is4 + ">" )
          }else{
            message.reply("Yetkin yook karrşim").then(msg => {
              msg.delete({ timeout: 10000 })
            })
        }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ekr'],
  permLevel: 0,

};

exports.help = {
  name: 'kayıtsızrol',
  description: '',
  usage: '',
 
};