// Import replyHelp from commands
const replyHelp = require("../commands/replyHelp")

// Import ping from Commands
const ping = require("../commands/ping")

// Import replyHilfe from commands
const replyHilfe = require("../commands/replyHilfe")

// Import schmetterschlag from Commands
const schmetterschlag = require("../commands/schmetterschlag")

// Event listener for messages
module.exports = (client, message) => {
    switch (message.content.toLowerCase()) {
        case "help":
            return replyHelp(message)
        case "ping":
            return ping(message)
        case "hilfe":
            return replyHilfe(message)
        case "schmetterschlag":
            return schmetterschlag(message)
    }
}