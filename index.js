// Import environment variable "Bot Token" to hide from public
require("dotenv").config()

// Import the discord.js module
const Discord = require("discord.js")

// Import File System module
const fs = require("fs")

// Create an instance of a Discord client
const client = new Discord.Client()

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

// Log in bot using token hidden in dotenv
client.login(process.env.BOT_TOKEN)