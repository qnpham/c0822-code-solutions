const path = require('path');
const express = require('express');
const app = express();
const customPath = path.join(__dirname, 'public');
const files = express.static(customPath);
app.use(files);
app.listen(3000, () => {
  console.log('listening on 3000!');
});
