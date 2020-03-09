const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;
    let début = Date.now();
    await message.channel.send('pong').then

};

module.exports.help = {
    name: "ping"
}

/*{
        embed : {
            color : 0xc1db8,
            title: `Ping de **${membre.user.username}**`,
        },
        fields: [
            {
                name: `Ping : ${Date.now() - début } ms`
                
            }
        ]
    }

    */