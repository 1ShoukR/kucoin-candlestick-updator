const express = require('express');
const router = express.Router();




router.get("/testRoute", async (req, res) =>{
    res.status(200)
    res.json({
        message: "Route is working"
    })
})


















module.exports = router