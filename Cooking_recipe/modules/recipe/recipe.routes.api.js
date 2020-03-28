const router = require("express").Router();
const RecipeController = require("./recipe.controller")
//list all recipes
router.get("/", async(req, res, next) => {
    let recipeList = await RecipeController.list()
        .then(d => res.json(d))
        .catch(error => next(error));
});

router.post("/", (req, res, next) => {
    //call the controller create function
    RecipeController.create(req.body)
    // show the return data from controller in JSON format
    .then(d => {
        res.redirect("/");
        res.json(d);
    })
    //incase of error catch that error(e) and throw it to the user
    .catch(e => next(e));
});

//get the specific recipe details
router.get("/:id", (req,res,next) =>{
    console.log(req.params.id);
    RecipeController.getById(req.params.id)
    .then(d => res.json(d))
    .catch(e => next(e));
});


//Update the existing recipe details
router.put("/:id", (req,res,next) =>{
    RecipeController.updateById(req.params.id, req.body)
    .then(d => res.json(d))
    .catch(e => next(e));
});

//Delete the recipe from inventory
router.delete("/:id", (req, res, next) => {
    RecipeController.remove(req.params.id)
        .then(d => res.json(d))
        .catch(e => next(e));
});

module.exports = router;