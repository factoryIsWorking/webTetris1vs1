module.exports = (router) => {
    router.post('/signUp', function (req, res) {
        const {id,pw} = req.body;
        let body = {
            success: true,
        }
        res.json(body);
    });
}