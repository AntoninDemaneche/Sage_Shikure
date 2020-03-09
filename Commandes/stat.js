const Discord = require('discord.js');
const moment = require('moment');


module.exports.run = async(client, message, args) => {
    
    const membre = message.mentions.members.first() || message.member;
    //if(!meember) return message.channel.send(`Veuillez donnez un utilisateur !`)

    message.channel.send({
        embed: {
            color : 0xc1db8,
            title: `Statistiques du l'Utilisateur **${membre.user.username}**`,
            thumbnail: {
                url: membre.user.displayAvatarURL
            },
            fields: [
                {
                    name:'Crée le :',
                    value: moment.utc(membre.user.createdAt).format('LL')
                },
                {
                    name: "Jeu en cour :",
                    value: "Faire du rp Ninja "
                },
                {
                    name: "Rejoin le :",
                    value: moment.utc(membre.joinedAt).format("LL")
                }
            ],
            footer: {
                text: `Informations de l'utilisateur ${membre.user.username}`
            }
        }
    })

};

module.exports.help = {
    name : "stat"
}