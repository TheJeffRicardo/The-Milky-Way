const express = require('express');
// route
const route = require('./controller');
// cors
const cors = require('cors');
// port 
const port = parseInt(process.env.PORT) || 2015;
// Express app
const app = express();
// Middleware
const {errorHandling} = require('./middleware/ErrorHandling');
//
const cookieParser = require('cookie-parser');
//connecting frontend and backend
app.use((req, res, next)=> {
        res.header('Access-Control-Allow-Origin', 'https://vuefrontend-4b346.web.app/')
        res.header("Access-Control-Allow-Credentials", "true")
        res.header("Access-Control-Allow-Methods", "*")
        res.header("Access-Control-Allow-Headers", "*")
        next();
});
app.use(route);
app.use(
    cors(),
    cookieParser(),
    express.json,
    express.urlencoded({extended: false})
)

// Server is running
app.listen(port, ()=> {
    console.log(`up and running at ${port}`)
});
// Handling all errors
app.use(errorHandling);