/**
* Profesor.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	id: {type: 'string', size: 6, primaryKey: true},

    apellidos : { type: 'string',  size: 19, required: true },

    nombre : { type: 'string',  size: 19, required: true },

    email : { type: 'string' , size: 100},

    MateriaMatricula3: {
    	collection: 'MateriaMatriculada',
    	via: 'profesor'
    }
    
  }
};

