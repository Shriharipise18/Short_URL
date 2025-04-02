// const express =require("express");
// const {handleGenerateNewShortURL}=require("../controllers/url")
// const router =express.Router();


// router.post("/",handleGenerateNewShortURL)
// module.exports=router;
const express = require("express");
const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortURL);

router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;