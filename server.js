const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/front-end/tutorial-canciones'));

app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+'/front-end/tutorial-canciones/index.html'));
});

app.listen(process.env.PORT || 5000);
