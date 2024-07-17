<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

router.post("/items", itemController.createItem);
router.get("/items", itemController.getAllItems);
router.get("/items/:id", itemController.getItem);
router.put("/items/:id", itemController.updateItem);
router.delete("/items/:id", itemController.deleteItem);

module.exports = router;
=======
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.post('/items', itemController.createItem);
router.get('/items', itemController.getAllItems);

module.exports = router;
>>>>>>> d14b19b24b2a9a85253612ee02d220ce686e29a6
