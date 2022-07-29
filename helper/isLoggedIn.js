// etc
const jwt = require("jsonwebtoken")
require("dotenv").config();

module.exports = (req, res, next) => {
    var token = "";

    var authToken = req.header("Authorization")
    console.log("Token:", authToken);

    if(authToken){
        authToken = authToken.replace("Bearer ", "")
        console.log(authToken);
        token = authToken
    }

    if (!token) {
        return res.json({"message": "You do not have the necessary permissions to view this."}).status(401);
    }

    try {
        const decodedToken = jwt.verify(token, process.env.SECRET)

        req.user = decodedToken.user;
        next();
    }
    catch(error){
        console.log(error)
        return res.json({"message": "Your token is invalid."}).status(401)
    }
}