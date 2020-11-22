const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu komutu kullanmak için yeterli yetkiniz yok!");
if(!args[0]) return message.channel.send("Bir sayı giriniz.");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`${args[0]} tane mesaj sildim`).then(msg => msg.delete(5000));
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};