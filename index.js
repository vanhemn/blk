'use strict'

/*
  This is the entry point for Webpack to build the bundle from.
  We use the same example code as the html browser example,
  but we inject the Node.js modules of OrbitDB and IPFS into
  the example. 

  In the html example, IPFS and OrbitDB are loaded from the
  minified distribution builds (in '../lib')
 */

// Import IPFS module
const IPFS = require('ipfs')

// Import OrbitDB module from 'orbit-db', eg. directory to its package.json
const OrbitDB = require('orbit-db')

// When 'orbit-db' was installed from npm, use with:
// import OrbitDB from 'orbit-db' 

// Example main code
const main = require('./src/main.js')


// Call the start function and pass in the 
// IPFS and OrbitDB modules
main.init(IPFS, OrbitDB)

module.exports = require('./src/main.js')