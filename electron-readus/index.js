'use strict';

var pg = require('pg');

var connString = "tcp://postgres:postgres@localhost:5432/postgres";

var html = ""

html = html + "io.js: " + process.version + "<br/>"
html = html + "Electron: " + process.versions['electron'] + "<br/>"
html = html + "Chrome: " + process.versions['chrome'] + "<br/>"

pg.connect(connString, function(err, conn) {
  html = html + "<h1>Hello, PostgreSQL</h1>";

  html = html + "connString: " + connString + "<br/><br/>";

  conn.query("SELECT version();", function(err, rs) {
    console.log("rs length:" + rs.rows.length);

    var i;
    for(i = 0 ; i < rs.rows.length ; i++) {
      html = html + "version: " + rs.rows[i].version + "<br/>";
    }
    document.getElementById("body").innerHTML = html;
  });
});
