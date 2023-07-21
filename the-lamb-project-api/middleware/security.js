const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const { UnauthorizedError } = require("../utils/errors");

const jwtForm = ({ headers }) => {
  if (headers?.authorization) {
    const [scheme, token] = headers.authorization.split(" ");
    if (scheme.trim() === "Bearer") {
      console.log("cleaning token", scheme, token);
      return token;
    }
  }
  return undefined;
};

const extractUserFromJwt = (req, res, next) => {
  try {
    const token = jwtForm(req);
    console.log("token", token);
    if (token) {
      res.locals.user = jwt.verify(token, SECRET_KEY);
      console.log("res.local", res.locals.user);
    }
  } catch (err) {
    return next(err);
  }
};

const requireAuthenticationUser = (req, res, next) => {
  try {
    console.log(res.locals);
    const { user } = res.locals;
    console.log("User in req auth user", user);
    if (!user?.email) throw new UnauthorizedError();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  extractUserFromJwt,
  requireAuthenticationUser,
  jwtForm,
};
