app.set('view engine', 'ejs');
app.use(expressLayouts);
//app.locals.layout = "main";
var bodyParser=require("body-parser");
const session= require ('client-sessions http://localhost:3000/   ')
app.use('/', require('./routes/index'));
app.get('/actors', function(req, res) {
    res.render('actors', {
        title: 'Actors',
        actors: actors
    });
});

app.get('/singers', function(req, res) {
    res.render('singers', {
        title: 'Singers',
        singers: singers
    });
});

app.get('/bands', function(req, res) {
    res.render('bands', {
        title: 'Bands',
        bands: bands
    });
});

app.get('/public-figures', function(req, res) {
    res.render('public-figures', {
        title: 'Public Figures',
        publicFigures: publicFigures
    });
});