// Array of Discord Bot Activites
const activities_list = [
    "Despacito", 
    "Tom Clancy's Rainbow Six Siege",
    "Grand Theft Auto V", 
    "with your feelings"
    ];

// Wait for bot to be ready before reacting to Commands
module.exports = client => {
  console.log(`Logged in as ${client.user.tag}!`)
  
  // Change the bot's displayed activity (aka. "playing ...")
  // Generate a random number in bounds of activites_list to iterate
  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
    client.user.setActivity(activities_list[index]);
  }, 10000);
}