const express = require('express'),
    app = express(),
    mustacheExpress = require('mustache-express'),
    port = process.env.PORT || 8000;

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

const monsters = require('./controllers/monsters');
app.use('/monsters', monsters);


app.get('/', (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
