const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
	post_to: { type: String, enum: ["", "INSTAGRAM", "TWITTER"], default: "" },
	text: { type: String },
	asset_address: { type: String }, // on chain reference
	token_id: { type: String }, // token id for chain ref
	created_at: { type: Date, default: Date.now },
	last_saved: { type: Date, default: Date.now },
});

const PostModel = mongoose.model("drafts", PostSchema);

module.exports = {
	PostSchema,
	PostModel,
};
