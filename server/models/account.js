const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { ListingSchema } = require("./listing");
const { PostSchema } = require("./post");

const SocialSchema = new Schema({
	platform: { type: String, required: true },
	heading: { type: String, required: true },
});

const AccountSchema = new Schema({
	address: { type: String, required: true, unique: true },
	listings: { type: [ListingSchema], default: [] },
	description: { type: String, default: "" },
	username: { type: String, required: false },
	socials: { type: [SocialSchema], default: [] },
	drafts: { type: [mongoose.Types.ObjectId], default: [] },
});

const AccountModel = mongoose.model("accounts", AccountSchema);

module.exports = {
	AccountSchema,
	AccountModel,
};
