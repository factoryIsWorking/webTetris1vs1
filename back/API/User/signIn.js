module.exports = (router) => {
    router.post('/signIn', function (req, res) {
        const {id,pw} = req.body;
        res.json({
            success:true,
        });
    });
}