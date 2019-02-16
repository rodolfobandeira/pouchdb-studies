var PouchDB = require('pouchdb');
var db = new PouchDB('my_database');

db.get('a916326e-83de-4c4d-aedb-d512f66f3014').then(function(doc) {
  /*
   * node retrieve_data.js
   *
   * Rodolfo Bandeira                                                                                                                             │
   * https://rodolfo.io
   */
  console.log(doc.name);
  console.log(doc.website);
}).catch(function(err) {
    console.log(err);
});

