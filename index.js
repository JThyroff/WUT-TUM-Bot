// Import the discord.js module
const Discord = require("discord.js")

// Create an instance of a Discord client
const client = new Discord.Client()

const { Client, MessageEmbed } = require('discord.js');

// Log in bot using token
client.login("NzEyMDczNjc4NTU2NDk1OTQy.XsMQeA.m_uOt7yRep0fiAQ_QkHN1GuFBAI")

// Wait for bot to be ready before reacting to Commands
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

// Event listener for messages
client.on("message", msg => {
  if (msg.content === "help") {
    msg.reply("Sprich Deutsch du Hurensohn!")
  }
})

// Send the client down a slide upon entry of specific channel
client.on('voiceStateUpdate', (oldVoiceState, newVoiceState) => {
  if(712014015861096592 == newVoiceState.channelID){
    console.log("Rutschen!")
    let d = Date.now();
    newVoiceState.setChannel("712014066671026286","Rutschen");
    newVoiceState.setChannel("712013990170984608","Rutschen");
    newVoiceState.setChannel("712014759049822230","Rutschen");
    newVoiceState.setChannel("712016182953115798","Rutschen");
    newVoiceState.setChannel("712016207338930299","Rutschen");
    newVoiceState.setChannel("712016252557852672","Rutschen");
    newVoiceState.setChannel("712016273168400395","Rutschen");
    newVoiceState.setChannel("712117279256739930","Rutschen");
    newVoiceState.setChannel("712117548736577618","Rutschen");
    newVoiceState.setChannel("712118114703376474","Rutschen");

    let diff = Date.now() - d;
    let n = newVoiceState.member.nickname;
    client.channels.cache.get("712124171991384155").send("Du hast "+diff+" ms zum Rutschen gebraucht, "+n+" !");
  }else(712118114703376474  == newVoiceState.channelID){
      console.log("nsertadiu");
  }
})