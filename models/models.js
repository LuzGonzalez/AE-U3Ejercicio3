const mongoose = require('mongoose');
const _ = require('underscore');

module.exports = (wagner) => {
    //Conexión a la base de datos
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/u3', { useNewUrlParser: true });

    wagner.factory('db', ()=> mongoose);

    const Brand = require('./brand.model');
   

    const models = {
        Brand
    }
    _.each(models, (v, k)=> {
        wagner.factory(k, ()=>v);
    });
}