const jwt = require("jsonwebtoken");

function authTokenMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  // BEARER TOKEN
  const atoken = authHeader?.split(" ")[1] ?? null;
  if (atoken === null) {
    res.status(401).json({ ok: false, status: "no header" });
  }
  jwt.verify(atoken, "secret", (err, user) => {
    if (err) {
      res.status(403).json({ ok: false, status: "auth failed" });
      return;
    }
    // console.log(user);
    req.user = user;
    next();
  });
}

module.exports = authTokenMiddleware;
