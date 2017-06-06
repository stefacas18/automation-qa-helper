'use strict'

let CreateNamespaceClass = require('./createNamespaceQA.js');

const args = process.argv.slice(2);

//args[0] - namespace
//args[1] - organization

let createNSClass = new CreateNamespaceClass();
    createNSClass.createNamespace(args[0], args[1]).then((result) => {
        console.log('----- END -----',result);
    },(err) => {
        console.error('----- END WITH ERRORS -----',err);
    });
