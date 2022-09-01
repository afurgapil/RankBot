const Discord = require("discord.js"); //import discordjs

const client = new Discord.Client(); //new client

const token = ""; //YOUR TOKEN HERE
client.login(token); //activate the bot
client.on("ready", () => {
  client.user.setActivity(`!rank, !message`);
  console.log(`${client.user.tag} is on ready!!`);
});
const userData = {};

client.on("message", (message) => {
  console.log(
    "Author=" + message.author.username + " Message=" + message.content
  );
  const userId = message.author.id;
  if (!userData[userId])
    userData[userId] = {
      messageCount: 0,
    };

  if (message.content === "!message") {
    message.reply("You sent " + userData[userId].messageCount + " messages.");
  }

  if (
    userData[userId].messageCount < 100 &&
    userData[userId].messageCount >= 0
  ) {
    rank = "Level 1";
  } else if (
    userData[userId].messageCount > 100 &&
    userData[userId].messageCount <= 250
  ) {
    rank = "Level 2";
  } else if (
    userData[userId].messageCount > 250 &&
    userData[userId].messageCount <= 500
  ) {
    rank = "Level 3";
  } else {
    return;
  }
  if (message.content === "!rank") message.reply(rank);
});
