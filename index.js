'use strict';

// Import environment variable "Bot Token" to hide from public
require("dotenv").config()

// Import the discord.js module
const Discord = require("discord.js")
// const { MessageEmbed } = require('discord.js');

// Import File System module
const fs = require("fs")

// Create an instance of a Discord client
const client = new Discord.Client()

client.on('ready', () => {
  console.log('Bot is ready!');
});

// Read all files in the ./events folder
fs.readdir("./events/", (err, files) => {
  files.forEach(file => {
    // Require each eventhandler using fileName
    const eventHandler = require(`./events/${file}`)
    // Remove file extensions (such as ".js")
    const eventName = file.split(".")[0]
    // Listen to events and add associated eventHandler, pass Array of args
    client.on(eventName, (...args) => eventHandler(client, ...args))
  });
})

// client.on('message', message => {
//   // If the message is "how to embed"
//   if (message.content === 'how to embed') {
//     // We can create embeds using the MessageEmbed constructor
//     // Read more about all that you can do with the constructor
//     // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
//     const embed = new MessageEmbed()
//       // Set the title of the field
//       .setTitle('A slick little embed')
//       // Set the color of the embed
//       .setColor(0xff0000)
//       // Set the main content of the embed
//       .setDescription('Hello, this is a slick embed!');
//     // Send the embed to the same channel as the message
//     message.channel.send(embed);
//   }
// });

// Log in bot using token hidden in dotenv
client.login(process.env.BOT_TOKEN)