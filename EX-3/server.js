import e from "express";
import logger from "./logger.js";
import validateQuery from "./validateQuery.js";
import courses from "./course.js";
import auth from "./auth.js";

const app = e();

app.use(logger);
app.use(auth);

app.get("/departments/:dept/courses", validateQuery, (req, res) => {
  const { dept } = req.params;
  const { level, minCredits, maxCredits, semester, instructor } = req.query;

  let filtered = courses.filter((course) => {
    if (course.department === dept) {
      if (level && level !== course.level) return false;
      if (minCredits && course.credits < minCredits) return false;
      if (maxCredits && course.credits > maxCredits) return false;
      if (semester && semester !== course.semester) return false;
      if (
        instructor &&
        !course.instructor.toLowerCase().includes(instructor.toLowerCase())
      )
        return false;
      return true;
    } else return false;
  });
  res.json(filtered);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000 ");
});
