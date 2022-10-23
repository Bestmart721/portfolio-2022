module.exports = (req, res, next) => {
  if(!req.body || !req.body.title || !req.body.content) {
    return res.status(400).send({ error: 'Malformed comment json'});
  }
  next();
}
