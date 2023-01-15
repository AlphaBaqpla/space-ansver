//============-NewTickets BY Alpha-============
//===================-VAR`S-===================
const fs = require('fs')
const {Client} = require('discord.js');
const client = new Client({ intents: 32767 })
const Discord = require('discord.js')
const config = require('./config.json')
client.discord = Discord
client.config = config 
const token = config.token
//=============-DISCORD BOT LOGIN-=============
client.login(token)
//===================-EVENTS-==================
const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'))
for (const file of events){
    const event = require(`./events/${file}`)
    client.on(event.name, (...args) => event.execute(...args, client))
}