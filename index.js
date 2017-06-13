var express = require('express');
var request = require('request');
var bodyparser = require("body-parser");

var app = express();
app.use(bodyparser.urlencoded({extended: true}));

var webhook = process.env.DISCORD_discordapp;

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.post('/webhook', (req, res) => {
	request({
		method: 'POST',
		uri: webhook,
		json: {
			"content": req.body.msg,
			"username": "Welcome to Liberals mothafucka!"
		}
	});

	res.redirect('/');
});


app.listen(80, () => {
	console.log("Server started!");
});