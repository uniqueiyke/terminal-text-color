'use strict';
try {
    const ttc = require( './ttc/index');
    
    module.exports = ttc.default;
} catch (error) {
    throw Error(`${error.message}.\nBuild directory not found. You need to build the library for you to use it in your JS files cd to the root directory of the project and run the command 'npm run tscompile'`)
}



