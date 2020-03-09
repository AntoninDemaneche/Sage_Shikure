const Discord = require('discord.js')
const client = new Discord.Client();
const fs = require('fs');
 

client.login('NjY2OTM5OTgwNTQyNzcxMjEw.Xh7feg.Xq7Z309KvsgurjBMueBC-bN5YMk');

client.command = new Discord.Collection();



client.on('message', msg => {

    
    
    /*=============================================================
                        Anti Injures
  ============================================================= */

    if (msg.content === 'pd') {
        return msg.reply('Voyons pas de ça ici ! Restez courtois !')
    }



    /*=============================================================
                        Ninjutsu
  ============================================================= */

    if (msg.content === 'katon') {
        return msg.channel.send(':fire::fire::fire:')
    }

    if (msg.content === 'Katon') {
        return msg.channel.send(':fire::fire::fire:')
    }

    if (msg.content === 'IM FOL XUL') {
        return msg.channel.send(':fire::fire::fire:')
    }

    if (msg.content === 'raiton') {
        return msg.channel.send(':zap::zap::zap:')
    }

    if (msg.content === 'futon') {
        return msg.channel.send(':dash::dash::dash:')
    }

    if (msg.content === 'suiton') {
        return msg.channel.send(':ocean::ocean::ocean:')
    }

    if (msg.content === 'doton') {
        return msg.channel.send(`${msg.author.toString()} le meilleur élement du monde <3`)
    }

    /*=============================================================
                        Anti Oui 
  ============================================================= */

    Newmsg = msg.content.replace(/\*/g, '')

    if( Newmsg.substr(Newmsg.length-3).toLocaleLowerCase() == ("oui") ){
        return msg.channel.send(`${msg.author.toString()} Stiti.`)
    }

    if( Newmsg.substr(Newmsg.length-2).toLocaleLowerCase() == ("ui") ){
        return msg.channel.send(`${msg.author.toString()} Stiti.`)
    }

    if( Newmsg.substr(Newmsg.length-4).toLocaleLowerCase() == ("ouai") ){
        return msg.channel.send(`${msg.author.toString()} Stern`)
    }

    if( Newmsg.substr(Newmsg.length-5).toLocaleLowerCase() == ("ouais") ){
        return msg.channel.send(`${msg.author.toString()} Stern.`)
    }

    if( Newmsg.substr(Newmsg.length-4).toLocaleLowerCase() == ("quoi") ){
        return msg.channel.send(`${msg.author.toString()} Feur.`)
    }

    if( Newmsg.substr(Newmsg.length-3).toLocaleLowerCase() == ("non") ){
        return msg.channel.send(`${msg.author.toString()} Bril.`)
    }
    
    if( Newmsg.substr(Newmsg.length-2).toLocaleLowerCase() == ("nn") ){
        return msg.channel.send(`${msg.author.toString()} Bril.`)
    }   














});



  


/*=============================================================
                    Truc à Pas toucher             
  ============================================================= */


fs.readdir('./Commandes/',(error, f) =>{
    if(error) console.log(error)

    let commandes = f.filter(f => f.split('.').pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune commande trouvée");

    commandes.forEach((f) => {
        let commande = require(`./Commandes/${f}`);
        console.log(`${f} commande chargée !`);
    

        client.command.set(commande.help.name, commande);
    });
});

fs.readdir("./Events/",(error, f) => {
    if(error) console.log(error);
    console.log(`${f.length} event en chargement`);

    f.forEach((f) =>{
        const events = require(`./Events/${f}`);
        const event = f.split(".")[0];

        client.on(event, events.bind(null, client));
        
    });
});