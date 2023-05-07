// const express = require("express");
// const routes = require("./routes");
// const sequelize = require("./config/connection");

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(routes);

// // Force false so data doesn't get dropped on every sync
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
// });


// //Require Dependencies
// const express = require("express");
// const fs = require("fs");
// const path = require('path');

// // Initialize express app
// const app = express();
// const PORT = process.env.PORT || 3000;

// // Setup data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static(__dirname));

// //Require routes file
// require("./routes/htmlRoutes/htmlRoutes")(app);
// require("./routes/apiRoutes/apiRoutes")(app);

// // Setup listener
// app.listen(PORT, function() {
//     console.log("App listening on PORT: " + PORT);
// });  


 

 

// Require Dependencies
const express = require("express");
const fs = require("fs");
const path = require('path');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Setup data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

//Require routes file
require('./routes/routes')(app);

// Setup listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  