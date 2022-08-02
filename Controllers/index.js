const thoughtRoutes = require("./thought.routes")
const userRoutes = require("./user.routes")
const router = require("express").Router()

router.use("/api/thought", thoughtRoutes)
router.use("/api/user", userRoutes)

router.use((req, res) => {
    return res.send('Wrong route!');
  });
  

  module.exports = router