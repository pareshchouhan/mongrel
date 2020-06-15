/* Slapbots update logic: comments: pretty neat */
const axios = require('axios');
const broadcastUrl = 'https://gist.github.com/SlapBot/4b093f88d97522e22205ae9c9d0dea02/raw/'

function getUpdates(url) {
    return axios.get(url)
}

// getUpdates(broadcastUrl)
//     .then(response => FancyWriteDataToFileFunction(JSON.stringify(response.data, null, 4), 'public/update.json'))
//     .catch(error => console.log(error))
//     .then(_ => console.log('Done!'))
