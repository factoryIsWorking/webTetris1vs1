module.exports = (app,name) => {
    app.get(name, function (req, res) {
        res.sendFile(global.CONFIG.viewPath);
    });
}