'use strict';
try {
    const colors = require( './ttc/defined-colors');
    const ttcColorApi = require('./ttc/ansi');
    const ttcModifiers = require('./ttc/basics');
    
    const ttc = {
        ...colors.default, 
        ...ttcColorApi.default, 
        ...ttcModifiers.default
    };
    
    module.exports = ttc;
} catch (error) {
    throw Error(`${error.message}.\nBuild directory not found. You need to build the library for you to use it in your JS files cd to the root directory of the project and run the command 'npm run tscompile'`)
}



