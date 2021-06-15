const oauth = (redirect_uri, state) =>
	`https://www.facebook.com/v10.0/dialog/oauth?client_id=${process.env.FACEBOOK_CLIENT_ID}&redirect_uri=${redirect_uri}&state=${state}`;

module.exports = oauth;
