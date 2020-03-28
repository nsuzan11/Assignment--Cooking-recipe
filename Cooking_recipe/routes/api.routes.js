const router= require('express').Router();

const recipeRouter= require('../modules/recipe/recipe.routes.api');
router.use('/recipe', recipeRouter);

module.exports = router;