"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (app) {
    app.get("/", function (req, res) {
        res.json({
            state: true,
            msg: "available",
        });
    });
    console.log("APIs ready");
});
//# sourceMappingURL=initAPI.js.map