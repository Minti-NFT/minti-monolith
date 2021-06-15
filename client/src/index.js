import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import axios from "axios";

import "./comms/wallet/metamask";

import "./index.css";
import App from "./App";

Sentry.init({
	dsn:
		"https://e33daacb6c3448e4ba1f05e7b309330f@o805740.ingest.sentry.io/5803283",
	integrations: [new Integrations.BrowserTracing()],
	tracesSampleRate: 1.0,
});

const API_URL =
	"https://api.thegraph.com/subgraphs/name/endorsifybase/minti-marketplace";

const tokensQuery = `
  	query {
		nfts(first: 5) {
			id
			tokenId
			tokenURI
			mode
		}
		
		accounts(first: 5) {
			id
			address
			nfts {
				tokenId
				tokenURI
				mode
			}
		}
	}
`;

const client = new ApolloClient({
	uri: API_URL,
	cache: new InMemoryCache(),
});

client
	.query({
		query: gql(tokensQuery),
	})
	.then((data) => console.log("Subgraph data: ", data))
	.catch((err) => {
		console.log("Error fetching data: ", err);
	});

axios.defaults.headers.common["withCredentials"] = true;

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
