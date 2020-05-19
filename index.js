const Discord = require("discord.js")
const client = new Discord.Client()
const { Client, MessageEmbed } = require('discord.js');
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Pong!")
  }
})
client.on('typingStart', (channel, user) => {
  channel.send(`Sprich Deutsch du Hurensohn!`);
})
client.on('voiceStateUpdate', (oldMember, newMember) => {
  let pc = client.channels.fetch(`712014015861096592`);
  console.log(pc);
  pc.then(channel => newMember.setChannel(channel, "RUTSCHEN")).catch();
})
client.login("NzEyMDczNjc4NTU2NDk1OTQy.XsMQeA.m_uOt7yRep0fiAQ_QkHN1GuFBAI")