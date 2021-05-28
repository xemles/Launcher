const fetch = require('node-fetch')
/**
 * Retrieves the status of a minecraft server.
 *
 * @param {string} address The server address.
 * @param {number} port Optional. The port of the server. Defaults to 25565.
 * @returns {Promise.<Object>} A promise which resolves to an object containing
 * status information.
 */
exports.getStatus = (address, port = 25565) => {


    return new Promise(async (resolve) => {
        const response = await fetch('https://api.mcsrvstat.us/2/' + address + ':' + port)
        const data = await response.json()


        if (data != null && data != '') {
            resolve({
                online: true,
                version: data.version,
                motd: null,
                onlinePlayers: data.players.online,
                maxPlayers: data.players.max
            })
        } else {
            resolve({
                online: false
            })

        }
    })
}