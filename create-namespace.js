'use strict'

require("dotenv").config();
const client = require("supertest");
const auth = require('test-platform-auth');

const api_url = `https://api.${process.env.DOMAIN}`;
const GOD_USER = process.env.GOD_USER;
const GOD_PASSWORD = process.env.GOD_PASSWORD;
const NAMESPACE = process.argv.slice(2)[0];

const ns_obj = {
    "name": `${NAMESPACE}`,
    "organization": 'DELETE ME'
};

(async ()=> {
    let apiAgent = client.agent(api_url);
    let cookies = await auth.authenticate(GOD_USER, GOD_PASSWORD, apiAgent);
    let response = await apiAgent.post('/system/namespaces').send(ns_obj);
    response.ok ? console.log(`Namespace "${NAMESPACE}" created...`) : console.log(`Something went wrong: Status Code ${response.statusCode}`);
})();