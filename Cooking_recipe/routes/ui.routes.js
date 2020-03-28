const router= require('express').Router();

const RecipeRouter= require('../modules/recipe/recipe.routes.ui');
router.use("/", RecipeRouter);

module.exports = router;