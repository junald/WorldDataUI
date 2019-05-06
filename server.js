var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 9191;
var hostname = '159.65.128.26';

app.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
 });