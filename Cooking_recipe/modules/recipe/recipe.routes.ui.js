const router = require("express").Router();

const RecipeController = require("./recipe.controller");
    router.get("/", async (req, res, next) => {
        let recipeList = await RecipeController.list();
        res.render("recipe/index", {                // views/recipe/index
            title: "Recipe List",
            bookList
    });
});

module.exports = router;