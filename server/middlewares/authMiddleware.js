const admin = require("../firebase/index");

exports.authCheck = async (req, res, next) => {
  // console.log(req.headers); //token
  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);
    // console.log("FIREBASE USER  IN AUTH CHECK", firebaseUser);
    req.user = firebaseUser;
    next();
  } catch (error) {
    console.log(error),
      res.status(401).json({
        error: "Invalid or expired token",
      });
  }
};
