const ErrorResponse = require('../utils/errorResponse');

const errorHandeler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;
  //Log to console for dev
  //console.log(err.stack);
  console.log(err.name);

  if (err.name === 'CastError') {
    const message = `Bootcamp is not found with the id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server error'
  });
};

module.exports = errorHandeler;
