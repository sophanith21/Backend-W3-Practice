function logger(req, res, next) {
  console.log("HTTP Method: ", req.method);
  console.log("Request Path: ", req.path);
  console.log("Query Param: ", JSON.stringify(req.query));
  console.log("Timestamp: ", new Date().toISOString());
  next();
}

export default logger;
