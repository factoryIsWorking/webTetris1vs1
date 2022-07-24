module.exports = function (req, res, next) {
    if (!req.session) {
        console.log("no session!");
    }
    else {
        console.log("has session!");
    }
};
//# sourceMappingURL=sessionChecker.js.map