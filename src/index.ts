import express from "express";

type StudentResult = any;

export async function getResults(studentId: string): Promise<StudentResult> {
  return
}

const app = express();

app.get("/get-results", (req, res, next) => {
  const studentId = req.query.studentId;

  if (typeof studentId === "string") {
    res.send(getResults(studentId));
  }
});

// app.listen(3000, () => {
//   console.log("Listening to port 3000")
// });
