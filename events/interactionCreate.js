module.exports = {
    name: 'interactionCreate',
    execute(interaction, client) {
        if (!interaction.isCommand()) return
        if (interaction.commandName === 'ping') {
            return interaction.reply({ content: "Pong!" })
        }
    }

}