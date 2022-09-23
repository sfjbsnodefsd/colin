const ex = require("express")
const Course = require("../models/course");
const router = ex.Router();



router.get("/allcourses", async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (err) {
        res.json(err);
    }
})

router.post("/", async(req, res) => {
    try {
        const course= await Course.create(req.body);
        res.json(course);
    } catch (err) {
        res.json(err);
    }
})

module.exports = router;

