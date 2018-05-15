
module.exports = function(mongoose){
    var NinjaSchema = new mongoose.Schema({
        activiy: { type: String },
        gold: { type: Number, default: 0 },
        }, { timestamps: true })
    mongoose.model('Ninja', NinjaSchema); 
}
