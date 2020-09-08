const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
var request = require('request');
const { response } = require('express');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.json());
app.use(cors());

const apiKey = "c5783123";

app.get('/test', function(req, res) {
    res.send('hello world')
});


app.post('/api/search', (req,res) => {
    var title = req.body.searchTitle;
    var url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`;
    request(url, function(error,response,body) {
        console.log(body);
        let searchJson = JSON.parse(body);
        if(searchJson.cod != "404") {
            let searchInfo = {
                search: searchJson.Search,
                totalResults: searchJson.totalResults,
                response: searchJson.Response
            };
            res.send(searchInfo)
        }
    });
})

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);