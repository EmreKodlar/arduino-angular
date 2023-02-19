const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/client-angular')); // package.json'da "name": "client-angular" yazan yerden aldık
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/client-angular/index.html'));});
app.listen(process.env.PORT || 8080);