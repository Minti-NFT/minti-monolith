require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cookieparser = require("cookie-parser");
const session = require("express-session");
const chalk = require("chalk");
const cookieSession = require("cookie-session");
const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");

const accountRouter = require("./routes/account");
const listingRouter = require("./routes/listing");

Sentry.init({
	dsn:
		"https://d3d8d0fe737a456f925cdd09f50ee449@o805740.ingest.sentry.io/5803279",
	tracesSampleRate: 1.0,
});

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cookieparser());
app.use(
	session({
		secret: "Session Secret!",
		saveUninitalized: true,
		resave: false,
		cookie: {
			httpOnly: true,
			maxAge: 24 * 3600 * 1000,
		},
	})
); // change session secret

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
app.use("/listing", listingRouter);

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
