const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//CRUD

//create
app.post("", (req, res) => {
  console.log("Hello");
  if (err) {
    return res.status(500).json({ error: err.message });
  }
});

//read

app.get("", (req, res) => {
  console.log("Hello");
  if (err) {
    return res.status(500).json({ error: err.message });
  }
});

app.put("", (req, res) => {
  console.log("Hello");
  if (err) {
    return res.status(500).json({ error: err.message });
  }
});

app.delete("", (req, res) => {
  console.log("Hello");
  if (err) {
    return res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
