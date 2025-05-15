function auth(req, res, next) {
  const token = req.query.token;

  if ((token && token !== "xyz123") || !token)
    return res.status(401).send({ error: "401 Unauthorized." });

  next();
}
export default auth;
