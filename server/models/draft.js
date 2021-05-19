const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DraftSchema = new Schema({
	post_to: { type: [String], enum: ["INSTAGRAM", "TWITTER"] },
	text: { type: String },
	asset_address: { type: String },
	asset_id: { type: Schema.Types.ObjectId },
	created_at: { type: Date, default: Date.now },
	last_saved: { type: Date, default: Date.now },
});

const DraftModel = mongoose.model("draft", DraftSchema);

module.exports = {
	DraftSchema,
	DraftModel,
};
