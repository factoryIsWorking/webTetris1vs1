module.exports = (app)=>{
    require('./view')(app,'/');
    //require('./Game/router')(app,'/game');
    require('./User/router')(app,'/user');
    console.log('controllers ready');
};