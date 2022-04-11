module.exports = (router) => {
    router.post('/signUp', async function (req, res) {
        const {id,pw} = req.body;
        let body = {
            success: true,
        }
        res.json(body);
    });
}