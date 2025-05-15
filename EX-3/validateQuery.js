function validateQuery(req, res, next) {
  const { minCredits, maxCredits } = req.query;
  if (minCredits && isNaN(minCredits)) {
    return res
      .status(400)
      .send({ error: "minCredit's value is not a valid integer." });
  }

  if (maxCredits && isNaN(maxCredits)) {
    return res
      .status(400)
      .send({ error: "maxCredit's value is not a valid integer." });
  }

  if (Number(minCredits) > Number(maxCredits)) {
    return res
      .status(400)
      .send({ error: "minCredits can't be greater than maxCredits" });
  }

  next();
}

export default validateQuery;
