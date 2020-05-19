const Discord = require("discord.js")
const client = new Discord.Client()
const { Client, MessageEmbed } = require('discord.js');
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Sprich Deutsch du Hurensohn!")
  }
})

client.on('voiceStateUpdate', (oldMember, newMember) => {
  let pc = client.channels.fetch(`712014015861096592`);
  pc.then(channel => console.log(channel)).catch();
  newMember.setChannel(channel)
})
client.login("NzEyMDczNjc4NTU2NDk1OTQy.XsMQeA.m_uOt7yRep0fiAQ_QkHN1GuFBAI")