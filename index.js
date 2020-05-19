// Import the discord.js module
const Discord = require("discord.js")

// Create an instance of a Discord client
const client = new Discord.Client()

const { Client, MessageEmbed } = require('discord.js');

// Wait for bot to be ready before reacting to Commands
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

// Event listener for messages
client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Sprich Deutsch du Hurensohn!")
  }
})

// Send the client down a slide upon entry of specific channel
client.on('voiceStateUpdate', (oldVoiceState, newVoiceState) => {
  let pc = client.channels.fetch(`712014015861096592`);
  console.log(newVoiceState.channelID);
  //console.log(pc)
  if(712014015861096592 == newVoiceState.channelID){
    console.log("Rutschen!")
    newVoiceState.setChannel("712014066671026286","Rutschen");
  }
})

// Log in bot using token
client.login("NzEyMDczNjc4NTU2NDk1OTQy.XsMQeA.m_uOt7yRep0fiAQ_QkHN1GuFBAI")