function pageNotFound(req, res, next) {
  const error = new Error(`${req.originalUrl} page not found!`);
  res.status(404);
  next(error.message);
}

function generalHandler(error, req, res, next) {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.send(error);
}

module.exports = {
  pageNotFound,
  generalHandler,
};
