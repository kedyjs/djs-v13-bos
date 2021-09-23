const { MessageActionRow, MessageButton } = require("discord.js");
module.exports = {
	name: 'deneme',
	description: 'deneme',
	execute(message, args) {
		const button = new MessageButton()
			.setCustomID('1')
			.setLabel('Deneme Butonu')
			.setStyle('PRIMARY');
  
      message.reply({ content: 'Başarılı!',components: [[button]]});
	},
};