// server.js
import express from "express";
import courses from "./course.js";
const app = express();
const PORT = 3000;

// Route: GET /departments/:dept/courses
app.get("/departments/:dept/courses", (req, res) => {
  const { dept } = req.params;
  const { level, minCredits, maxCredits, semester, instructor } = req.query;
  // Implementing the filter logic
  // Hint: Use the filter method to filter the courses array based on the provided criteria

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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
