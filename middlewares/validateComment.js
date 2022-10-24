// Very naaive approach to input sanitization
//
// mostly worried about users injecting malicious html tags into public
// comments rather than any specific database query injection issues (I would
// hope mongoose can avoid those)

const CONTAINS_INVALID_CHARS = new RegExp('[<>{}\'\"]', 'g');

function stringIsInvalid(input) {
  return !input ||
         typeof input !== 'string' ||
         CONTAINS_INVALID_CHARS.test(input);
}

module.exports = (req, res, next) => {
  if(!req.body ||
     stringIsInvalid(req.body.title) ||
     stringIsInvalid(req.body.content)
   ) {
    return res.status(400).send({ error: 'Malformed comment'});
  }
  if(req.user.posted) {
    return res.status(403).send({ error: 'Duplicate posting is disallowed'});
  }
  next();
}
