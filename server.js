let express = require('express');
let hbs = require('express-handlebars');

let handlebars = hbs.create({
    extname:'.hbs'
});

let app = express();

app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

app.use(express.urlencoded({extended: true}));
app.use('static', express.static('./static'));


app.get('/', (req, res) => {
    res.send('hi!');
})

app.listen(3000);
