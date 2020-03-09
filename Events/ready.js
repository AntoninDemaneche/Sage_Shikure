module.exports = async(client) => {

    client.user.setPresence({
        game:{
            name: "Gérer les Ouins Ouins"
        }
    })
};