const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { ListingSchema } = require("./listing");
const { DraftSchema } = require("./draft");

const SocialSchema = new Schema({
	platform: { type: String, required: true },
	heading: { type: String, required: true },
});

const AccountSchema = new Schema({
	address: { type: String, required: true, unique: true },
	listings: { type: [ListingSchema], default: [] },
	description: { type: String, default: "" },
	username: { type: String, required: true },
	socials: { type: [SocialSchema], default: [] },
	drafts: { type: [DraftSchema], default: [] },
});

const AccountModel = mongoose.model("accounts", AccountSchema);

module.exports = {
	AccountSchema,
	AccountModel,
};
