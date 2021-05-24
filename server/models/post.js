const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
	post_to: { type: [String], enum: ["INSTAGRAM", "TWITTER"] },
	text: { type: String },
	asset_address: { type: String }, // on chain reference
	asset_id: { type: Schema.Types.ObjectId }, // asset reference id
	created_at: { type: Date, default: Date.now },
	last_saved: { type: Date, default: Date.now },
});

const PostModel = mongoose.model("draft", PostSchema);

module.exports = {
	PostSchema,
	PostModel,
};
