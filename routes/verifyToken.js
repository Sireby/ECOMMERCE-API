const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;
const MASTER_KEY = process.env.MASTER_KEY;

const verifyUser = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) return res.status(400).send("access denied");
  
    try {
      const verifiedUser = jwt.verify(token, JWT_KEY);
      req.user = verifiedUser;
      next();
    } catch (err) {
      res.status(400).send("invalid token");
    }
};

const verifyAdmin = (req, res, next) => {
    const token = req.header("admin-token");
    if (!token) return res.status(400).send("access denied");
  
    try {
      const verifiedAdmin = jwt.verify(token, MASTER_KEY);
      req.admin = verifiedAdmin;
      next();
    } catch (err) {
      res.status(400).send("invalid token");
    }
};

module.exports = { verifyUser, verifyAdmin }






// const jwt = require("jsonwebtoken");

// const verifyToken = (req, res, next) => {
//   const authHeader = req.headers.token;
//   if (authHeader) {
//     const token = authHeader.split(" ")[1];
//     jwt.verify(token, process.env.JWT_SEC, (err, user) => {
//       if (err) res.status(403).json("Token is not valid!");
//       req.user = user;
//       next();
//     });
//   } else {
//     return res.status(401).json("You are not authenticated!");
//   }
// };

// const verifyTokenAndAuthorization = (req, res, next) => {
//   verifyToken(req, res, () => {
//     if (req.user.id === req.params.id || req.user.isAdmin) {
//       next();
//     } else {
//       res.status(403).json("You are not alowed to do that!");
//     }
//   });
// };

// const verifyTokenAndAdmin = (req, res, next) => {
//   verifyToken(req, res, () => {
//     if (req.user.isAdmin) {
//       next();
//     } else {
//       res.status(403).json("You are not alowed to do that!");
//     }
//   });
// };

// module.exports = {
//   verifyToken,
//   verifyTokenAndAuthorization,
//   verifyTokenAndAdmin,
// };