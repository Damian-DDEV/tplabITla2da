const Router = require('express');
const router = Router();

const {index, create, edit, show, store, destroy, update} = require('../controllers/frutas.controller.js');

router.get("/", index);

router.get("/create", create);

router.get("/show/:id", show);

router.get("/edit/:id", edit);


router.post("/store", store);

router.patch("/:id", update);

router.delete("/:id", destroy);

module.exports = router;