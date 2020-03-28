const mongoose = require("mongoose"); //every file must include this  

const RecipeSchema = mongoose.Schema(
    {
        //define properties
        name: { type:String },
        food_name: { type:String },
        cuisine: { type:String },
        link: String,
        food_recipe: { type:String }
    },
    {
        collection: "recipe", //collection name
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        },
        toObject:{
            virtuals: true
        },
        toJSON: {
            virtuals:true
        }
    }
);
module.exports = mongoose.model("Recipe", RecipeSchema);