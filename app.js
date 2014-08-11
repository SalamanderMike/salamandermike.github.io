var express = require('express'),
	  routes = require('./routes/routes'),
	  app = express();
  
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");
app.use(routes);

// PORT **************************************
app.listen(process.env.PORT || 3000, function(){
  console.log("NODEMON IS LISTENING... localhost:3000");
});

// EXPORT ************************************
module.exports = app;
