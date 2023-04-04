const express = require("express");
const { json } = require("body-parser");
const empRouter = require("./routes/empRouter");

const app = express();

//middleware 
app.use(json());

//root router
app.use('/', empRouter);

// Default route handler
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

module.exports = app;




















// const express = require("express");
// const {json } = require("body-parser");
// const empRouter = require("./routes/empRouter");

// const app = express();
// app.use(json());
// app.use('/', empRouter);
// module.exports = app;
