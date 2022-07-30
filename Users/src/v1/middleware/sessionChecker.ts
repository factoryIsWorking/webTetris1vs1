module.exports = function (req, res, next): void {
	if (!req.session) {
		console.log("no session!");
	} else {
		console.log("has session!");
	}
};
