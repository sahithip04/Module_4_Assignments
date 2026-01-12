import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  if (req.method === "POST" || req.method === "PUT") {
    express.json()(req, res, next);
  } else {
    next();
  }
});


const readData = () => {
  const data = fs.readFileSync("db.json", "utf-8");
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
};


app.get("/students", (req, res) => {
  const data = readData();
  res.status(200).json(data.students);
});

app.post("/students", (req, res) => {
  const { name, course, year } = req.body;

  if (!name || !course || !year) {
    return res.status(400).json({
      message: "name, course and year are required"
    });
  }

  const data = readData();

  const newStudent = {
    id: Date.now(),
    name,
    course,
    year
  };

  data.students.push(newStudent);
  writeData(data);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent
  });
}
)

app.put("/students", (req, res) => {
  const { id } = req.query;
  const { name, course, year } = req.body;

  if (!id) {
    return res.status(400).json({
      message: "Student id is required"
    });
  }

  const data = readData();
  const index = data.students.findIndex(
    (student) => student.id == id
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  data.students[index] = {
    ...data.students[index],
    name: name ?? data.students[index].name,
    course: course ?? data.students[index].course,
    year: year ?? data.students[index].year
  };

  writeData(data);

  res.status(200).json({
    message: "Student updated successfully",
    student: data.students[index]
  });
});


app.delete("/students/:id", (req, res) => {
  const { id } = req.params;

  const data = readData();
  const filteredStudents = data.students.filter(
    (student) => student.id != id
  );

  if (filteredStudents.length === data.students.length) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  data.students = filteredStudents;
  writeData(data);

  res.status(200).json({
    message: "Student deleted successfully"
  });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
