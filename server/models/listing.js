const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HistorySchema = new Schema({
	description: { type: String, required: true },
	value: { type: Schema.Types.Mixed, required: true },
	actor: { type: Schema.Types.ObjectId, required: true },
});

const PropertySchema = new Schema({
	name: { type: String, required: true },
	value: { type: mongoose.Types.Mixed, required: true },
});

const ListingSchema = new Schema({
	current_owner: { type: Schema.Types.ObjectId, required: true },
	token_address: { type: String, required: true },
	token_id: { type: String, required: true },
	price: { type: Number, required: true },
	listed_at: { type: Date, default: Date.now },
	listing_type: { type: String, required: true },
	event_log: { type: [HistorySchema], default: [] },
	properties: { type: [PropertySchema], default: [] },
});

const ListingModel = mongoose.model("listings", ListingSchema);

module.exports = {
	ListingSchema,
	ListingModel,
};
