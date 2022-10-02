const express = require('express');
const hbs = require('hbs');
const path = require('path');
const bodyParser = require('body-parser');
//routes
const indexRoute = require('./routes/routes.index');
const addRoute = require('./routes/routes.add');
const deleteRoute = require('./routes/routers.delete');
const editRoute = require('./routes/routes.edit');
const PORT = 5000;

const app = express();
//add this middleware to read post request body
app.use(express.json());
app.use(express.text());
app.use( bodyParser({ extended: false }) )


hbs.registerPartials(path.join(__dirname, 'views/partials'), (err) => { });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
//middleware  to LOG
app.use((req, res, next) => {
    console.log(`[Method:${req.method} - URL: ${req.originalUrl} - ${new Date().toLocaleString()}]`);
    next();
})
//public files
app.use('/site', express.static(path.join(__dirname, 'public')));
app.use('/add',addRoute);
app.use('/delete',deleteRoute);
app.use('/edit',editRoute);
app.use('/',indexRoute);
/** Error handling */
app.use((req,res,next)=>{
    res.render('error',{
        message:'404 Not Found'
    })
})
//
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
module.exports = app;