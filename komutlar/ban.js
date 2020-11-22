const Discord = require('discord.js');
const client = new Discord.Client();
const db = require("quick.db")

exports.run = async (client, message, args) => {
let banlanacak = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(!banlanacak) return message.reply("kimi banlıcam?");
banlanacak.ban({reason: "DENEME BAN KOMUTU"});
  message.channel.send("siktir git")
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2,
  kategori: "mod"
};
exports.help = { 
	name: 'ban', 
	description: 'Belirttiğiniz kişiyi sunucudan banlarsınız.', 
	usage: 'ban' 
}