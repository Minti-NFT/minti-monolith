const getAuthorizeUrl = (oauth_token) =>
	"https://api.twitter.com/oauth/authorize?oauth_token=" + oauth_token;

module.exports = getAuthorizeUrl;
