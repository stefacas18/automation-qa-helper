'use strict'

let testData = require('./testData.json');
let api = require('bodhi-driver-superagent');
let Client = api.Client;
let Basic = api.BasicCredential;
let client;

class CreateNamspaceQA {

    createNamespace(namespace, organization) {
        console.log('--- Begin running script to create a namespace',namespace,'---');
        return new Promise(function(resolve, reject) {
            if(typeof(namespace) !== 'string' || typeof(organization) !== 'string') {
                console.error('The parameters you send are not a String values:',namespace,'-',organization);
                reject(Error('The parameters you send are not a String values:',namespace,'-',organization));
                return;
            }
            let objectCreationNS =  {
                    "namespace" : namespace,
                    "organization" : organization,
                    "platforms":[]
            };

            client = new Client({
                uri          : testData.api_url,
                credentials  : new Basic(testData.system_username, testData.system_password)
            });
            client.post('system/controllers/vertx/resources/namespaceauthority/create',objectCreationNS,
                function(err, data, ctx){
                    if(err){
                        if (err.status == 409) {
                            console.log("namespace",namespace,"already exist");
                            resolve("The Namespace already exist");
                        } else {
                            console.error(err);
                            reject(Error("Failed try to create a namespace"));
                        }
                    } else {
                        client = new Client({
                            uri          : testData.api_url,
                            credentials  : new Basic(testData.system_username, testData.system_password)
                        });

                        client.get('system/namespaces/' + namespace,
                        function(err, json){
                            if(err){
                                console.error(err);
                                reject(Error("Failed getting the namespace"));
                            } else {
                                console.log('Created ' + namespace + ' namespace');
                                resolve("The new namespace can be request in the API");
                            }
                        });
                    }
                });
        });
    }
}

module.exports = CreateNamspaceQA;

