//===============MessageCreate EVENT================
module.exports = {
    name: 'messageCreate',
    async execute(msg,client){
        const {MessageEmbed, MessageActionRow, MessageButton} = require('discord.js')
        if(!msg.author.bot && -1 != msg.content.indexOf('ticket')){
            const ticEmbed = new MessageEmbed()
            .setColor('#00ffe1')
            .setAuthor({name: client.config.ansAuthor,})
                .setDescription('**'+client.config.ansText+'**')
                .setThumbnail(client.config.thumbImage)
                .setFooter({text: client.config.thumbText})
            const ticBtn = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setURL(client.config.btnURL)
                .setLabel(client.config.btnLabel)
                .setEmoji('🎟️')
                .setStyle('LINK')
            )
            msg.reply({
                embeds: [ticEmbed],
                components: [ticBtn],
                ephemeral: true
            })
        }
    }
}