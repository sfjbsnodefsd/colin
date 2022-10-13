const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    date_of_birth: String,
    pan: Number,
<<<<<<< HEAD
    aadhaar: Number,
=======
>>>>>>> 27a6bc9d1aa806f3794348842dd63081f9b9cb6f
    salary_earned: Number,
    allowences: Number,
    self_family_pension: String,
    bank_detail: {
        bank_name: String,
        account_number: Number,
        public_or_private: String
    },
});

module.exports = User = mongoose.model("pensioner", ProductSchema);