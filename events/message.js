// Import replyHelp from commands
const reply = require("../commands/replyHelp")

// Import ping from Commands
const ping = require("../commands/ping")

// Event listener for messages
module.exports = (client, message) => {
    switch (message.content) {
        case "help":
            return reply(message)
        case "ping":
            return ping(message)
    }
}