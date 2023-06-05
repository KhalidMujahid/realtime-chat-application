function pageNotFound(req, res, next) {
  const error = new Error(`${req.originalUrl} page not found!`);
  res.status(404);
  next(error.message);
}

// eslint-disable-next-line no-unused-vars
function generalHandler(error, req, res, next) {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.send(error);
}

module.exports = {
  pageNotFound,
  generalHandler,
};
