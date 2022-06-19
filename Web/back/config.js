const path = require('path');
const config = {
    viewPath :path.join(__dirname,'/index.html'),
    basePath :path.join(__dirname,'/'),
    publicPath : path.join(__dirname,'/public'),
    port:4001,
}
module.exports = config;