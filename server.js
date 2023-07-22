const express = require("express");
const fs = require("fs");
const app = express();

// Endpoint to save the Excel file
app.post("/api/save-excel", (req, res) => {
  const excelData = req.body;
  const fileName = "form_data.xlsx";

  fs.writeFile(fileName, Buffer.from(excelData), (err) => {
    if (err) {
      console.error("Error saving Excel file:", err);
      res.status(500).send("Error saving file.");
    } else {
      console.log("File saved successfully.");
      res.send("File saved successfully.");
    }
  });
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
