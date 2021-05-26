require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const chalk = require("chalk");

const accountRouter = require("./routes/account");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
	.connect("mongodb://localhost:27017/minti", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log(chalk.green("Mongodb Live"));
	})
	.catch(() => {
		console.log(chalk.red("Mongodb Down"));
	});

app.use("/account", accountRouter);

app.listen(8080, () => {
	console.log(chalk.green("Server running on port 8080"));
});

//const { graphqlHTTP } = require("express-graphql");
//const { buildSchema } = require("graphql");

/*var schema = buildSchema(`
    type Query {
        hello: String
    }
`);

var root = {
	hello: () => {
		return "Hello!";
	},
};

var app = express();
app.use(
	"/graphql",
	graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true,
	})
);

app.use("/graphql", (req, res) => {
	res.send("unified graphql endpoint for internal usage");
});

app.use("/api", (req, res) => {
	res.send("restful api endpoints for public usage");
});

app.use("/", (req, res) => {
	res.send("Currently Under Development");
});*/
