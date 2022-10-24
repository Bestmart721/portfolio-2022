module.exports = (req, res, next) => {
  // This endpoint doesn't exist... shhh...
  console.log(process.env.NODE_ENV);
  if(process.env.NODE_ENV === 'production') {
    return res.status(403).send({error: 'Development only endpoint'});
  }
  next();
}
