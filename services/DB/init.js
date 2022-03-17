const mongoose = require('mongoose');
const config = {
    DBurl : 'mongodb+srv://webp2:tetris@tetris-cluster.lgfsy.mongodb.net/data',
    options : {
        useUnifiedTopology: true,
        //useNewUrlParser: true,
        //useCreateIndex: true    
    },
}

module.exports = async()=>{
    try{
        mongoose.connect(config.DBurl, config.options).then();  
    }catch(e){
        console.error(e);
    }
    return;
};