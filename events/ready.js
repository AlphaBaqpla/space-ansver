//===============READY EVENT================
module.exports = {
    name: 'ready',
    async execute(client){
        console.log(client.user.username + " started!")
    }
}