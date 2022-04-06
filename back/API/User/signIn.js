module.exports = (router) => {
    router.post('/signIn', function (req, res) {
        const {id,pw} = req.body;
        console.log(req.body)
        let body = {
            success: id == 'test' && pw == 'test' ? true : false,
        }
        res.json(body);
    });
}