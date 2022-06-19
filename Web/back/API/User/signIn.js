const Users = require('../../services/dataObject/Users');

module.exports = (router) => {
    router.post('/signIn', async function (req, res) {
        const {ID, PW} = req.body;
        let body = {};
        //로그인 시도
        //
        if (ID == "" && PW == ""){
            //Users.addUser(ID, req.session);
            body = {
                success: true,
            }
        }else{
            body = {
                success: false,
            }
        }
        res.json(body);
    });
}