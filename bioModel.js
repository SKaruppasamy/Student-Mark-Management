var mongoose = require('mongoose');

//schema
var bioSchema = mongoose.Schema({
    StudentName: {
        type: String,
        required: true
    },
    RollNo: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
        required: true
    },
    Mark1: {
        type: String,
        required: true
    },
    Mark2: {
        type: String,
        required: true
    },
    Mark3: {
        type: String,
        required: true
    },
    Total: {
        type: String,
        required: true
    },
    Average: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Export Bio Model
var Bio = module.exports = mongoose.model('bio', bioSchema);

module.exports.get = function (callback, limit) {
   Bio.find(callback).limit(limit); 
}