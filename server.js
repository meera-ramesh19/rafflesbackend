const express = require('express');
const app = express();
const port = 3010;

app.get('/', (req, res) => {
  res.send('Welcome to raffles backend');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
