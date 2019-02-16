var PouchDB = require('pouchdb');
var db = new PouchDB('my_database');
var uuidv4 = require('uuid/v4');

db.put({
    _id: uuidv4(),
    name: 'Rodolfo Bandeira',
    website: 'https://rodolfo.io'
}).then(function (response) {
  /*
   * Here we can handle the response. An example is:
   *
   * {
   *    ok: true,
   *    id: 'a916326e-83de-4c4d-aedb-d512f66f3014',
   *    rev: '1-638c20de8b49497d4185dcb7dd3bd25d'
   * }
   */
  console.log(response);
}).catch(function (err) {
  console.log(err);
});


