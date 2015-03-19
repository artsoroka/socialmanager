var app = require('./app/app.js'); 

app.listen(app.get('config').port); 

console.log('app listening on port ' + app.get('config').port); 
