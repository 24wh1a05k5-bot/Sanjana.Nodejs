const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use("/Frontend", express.static(path.join(__dirname, "Frontend")));
app.use("/pages", express.static(path.join(__dirname, "pages")));

// Serve root page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});