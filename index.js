const config = require("./Config");
console.clear()
async function bot(Token) {
    console.log("By  6x.g ");
    const Discord = require("discord.js-selfbot-v13");
    const client = new Discord.Client({
        intents: [Discord.Intents.FLAGS.GUILDS],
        checkUpdate: false,
    });
    client.on('ready', async () => {
        console.log(`${client.user.username} Is Ready - By 6x.g`);
        console.log("By 6x.g");
    })
    const { userAccount } = require("sphinx-run");
    new userAccount(client, Discord).leveling({
        channel: config.ChannelID,
        randomLetters: false,
        time: 1000,
        type: config.Type
    });
    client.login(config.Token); 
    console.log("By  6x.g ");
}

bot(config.Token)

// Express

const express = require("express");
const app = express();

app.listen(() =>
    console.log("Express Is Ready ")
);

app.use('/', (req, res) => { 
    res.send(new Date());
});

// Return

setInterval(() => {
    return bot(config.Token);
}, 30000)
