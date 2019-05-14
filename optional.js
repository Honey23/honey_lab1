const port = 3000;
var connect = require('connect');
var app = connect();
app.listen(port);

app.use('/r/:subreddit', (req, res)
=> {
    console.log("Hit");
    res.send('lab1');
});

console.log('server is running on http://localhost:${port}');