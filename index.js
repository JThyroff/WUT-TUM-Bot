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

client.on('voiceStateUpdate', (oldVoiceState, newVoiceState) => {
  let pc = client.channels.fetch(`712014015861096592`);
  console.log(newVoiceState.channelID);
  //console.log(pc)
  if(712014015861096592 == newVoiceState.channelID){
    console.log("Rutschen!")
    newVoiceState.setChannel("712014066671026286","Rutschen");
  }
})
client.login("NzEyMDczNjc4NTU2NDk1OTQy.XsMQeA.m_uOt7yRep0fiAQ_QkHN1GuFBAI")