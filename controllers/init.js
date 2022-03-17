module.exports = (app)=>{
    require('./View/router')(app,'/');
    //require('./Game/router')(app,'/game');
    require('./User/router')(app,'/user');
    console.log('controllers ready');
};