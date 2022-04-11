const Users = require('../../services/dataObject/Users');

module.exports = (router) => {
    router.post('/getSessionInfo', async function (req, res) {
        console.log(req.rid)
    });
}