// Send the client down a slide upon entry of specific channel
// Map for storing nickname along with time spent sliding
var map = new Map();
// Variable to store client's name
var name

const slideCategoryName = 'rutsche'
const scoreboardChannelName = 'scoreboard'

module.exports = (client, oldVoiceState, newVoiceState) => {
    if (newVoiceState == null || newVoiceState.channel == null) {
        return
    }

    // Get category name after ${slideCategoryName}
    const slideCategory = client.channels.cache
        .find(ch => (ch.name.toLowerCase() === slideCategoryName) && (ch.type === 'category'))

    // Check if slide category was successfully found
    if (typeof slideCategory == "undefined" || slideCategory == null) {
        console.error("Can't find slide category")
        return
    }

    // Get all voice channels and sort them by ascending their position
    const slideChannels = Array
        .from(slideCategory.children
            .filter((channel) => channel.type === 'voice')
            .values())
        .sort((a, b) => a.position - b.position)

    // Channels are sorted therefore the first element is at index 0 and last at array.length - 1
    if (slideChannels[0].id == newVoiceState.channelID) {
        name = newVoiceState.member.displayName
        const startTime = Date.now();

        // Save start time of user. If not saved in global variable the time difference between finish and start will be 2ms
        map.set(name, startTime);
        console.log(`Start channel: ${slideChannels[0].name}`)
        console.log(`User ${name} is sliding`)

        for (let i = 1; i < slideChannels.length; i++) {
            newVoiceState.setChannel(slideChannels[i], 'Sliding')
        }
    } else if (slideChannels[slideChannels.length - 1].id == newVoiceState.channelID) {
        const finishTime = Date.now()
        const startTime = map.get(name)
        let scoreboardChannel = client.channels.cache.find(ch => (ch.name.toLowerCase() === scoreboardChannelName) && (ch.type === "text"))

        // Check if slide category was successfully found
        if (typeof scoreboardChannel == "undefined" || scoreboardChannel == null) {
            console.error("Can't find scoreboard channel")
        } else {
            scoreboardChannel
                .send(`Du hast ${((finishTime - startTime) / 1000)
                    .toString()
                    .replace('.', ',')} s zum Rutschen gebraucht, ${name}!`)
                .catch(err => console.log(err))
        }
    }
}