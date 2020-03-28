const RecipeModel = require("./recipe.model");

class Recipe{
    constructor(){}
    list(){
        return RecipeModel.find();
    }
    create(payload){
        return RecipeModel.create(payload);
    }
    updateById(id,payload){
        return RecipeModel.findOneAndUpdate(
            {_id:id},
            { set:{ name:payload.name, food_name:payload.food_name, cuisine:payload.cuisine, link:payload.link, food_recipe:payload.food_recipe }}
            );
    }
    async getById(id){
         return await RecipeModel.findOne({_id:id});
    }
    remove(id){
        return RecipeModel.findOneAndDelete({_id:id});
    }    
}

module.exports=new Recipe();