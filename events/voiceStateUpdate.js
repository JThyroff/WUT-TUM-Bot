// Send the client down a slide upon entry of specific channel
// Map for storing nickname along with time spent sliding
var map = new Map();
// Store the channelID to return client back to after successful slide
var returnChannel
// Variable to store client's name
var name
module.exports = (client, oldVoiceState, newVoiceState) => {
    // Starting channelID of slide
    if (712014015861096592 == newVoiceState.channelID) {
        name = newVoiceState.member.nickname
        returnChannel = oldVoiceState.channelID
        let time = Date.now();
        console.log("User: " + name + " rutscht!")
        map.set(name, time);
        newVoiceState.setChannel("712014066671026286","Rutschen")
        newVoiceState.setChannel("712013990170984608","Rutschen")
        newVoiceState.setChannel("712014759049822230","Rutschen")
        newVoiceState.setChannel("712016182953115798","Rutschen")
        newVoiceState.setChannel("712016207338930299","Rutschen")
        newVoiceState.setChannel("712016252557852672","Rutschen")
        newVoiceState.setChannel("712016273168400395","Rutschen")
        newVoiceState.setChannel("712117279256739930","Rutschen")
        newVoiceState.setChannel("712117548736577618","Rutschen")
        newVoiceState.setChannel("712118114703376474","Rutschen")
        newVoiceState.setChannel("712118274082734110","Rutschen")
    } 
    // End channelID of slide
    else if (712118274082734110  == newVoiceState.channelID){
        let timeDiff = Date.now() - map.get(name)
        client.channels.cache.get("712124171991384155").send("Du hast " + timeDiff + " ms zum Rutschen gebraucht, " + name + " !")
        newVoiceState.setChannel(returnChannel)
        console.log("Moved " + name + " back to channel " + returnChannel)
    }
    // Sliding done!
}