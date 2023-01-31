const express = require("express");
const router = new express.Router();
const {getAllResult, getResult, deleteResult, createResult, updateResult} = require("../controllers/controller");
 
router.get("/", getAllResult);
router.get("/:name/:rollno", getResult);
router.delete("/:rollno", deleteResult);
router.put("/:rollno", updateResult);
router.post("/", createResult);



module.exports = router;