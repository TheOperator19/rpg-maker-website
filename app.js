var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('database.db');
//db.run("CREATE TABLE lorem (something TEXT)");
let value = 'pikachu';
db.run("INSERT INTO lorem (something) VALUES (\"" + value + "\")")
