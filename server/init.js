require("dotenv").config();

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

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
);*/

app.use("/graphql", (req, res) => {
	res.send("unified graphql endpoint for internal usage");
});

app.use("/api", (req, res) => {
	res.send("restful api endpoints for public usage");
});

app.use("/", (req, res) => {
	res.send("Currently Under Development");
});

app.listen(3001);
