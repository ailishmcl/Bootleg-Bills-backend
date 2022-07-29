const jwt = require("jsonwebtoken");

const User = require("../models/User");

const bcrypt = require("bcrypt");
const salt = 10;


// POST New User on Signup

exports.auth_signup_post = (req, res) => {
    let user = new User(req.body);

    console.log("Password (as entered):", req.body.password);
    
    let hashedPass = bcrypt.hashSync(req.body.password, salt);
    console.log("Password (after hash):", hashedPass);

    user.password = hashedPass;

    user.save()
    .then(() => {
        res.json({"message": "User created successfully!"})
    })
    .catch((err) => {
        console.log(err);
        res.json({"message": "Failed to register user; try again later."})
    })
}

// POST Existing user login

exports.auth_login_post = async (req, res) => {
    let {emailAddress, password} = req.body;
    console.log(emailAddress)
    try {
        let user = await User.findOne({emailAddress})
        console.log(user)

        if (!user) {
            return res.json({"message": "User not found."}).status(400);
        }

        console.log(password)
        console.log(user.password)
        const isMatch = await bcrypt.compareSync(password, user.password)

        if (!isMatch) {
            return res.json({"message": "Password does not match."}).status(400);
        }

        const payload = {
            user: {
                id: user._id,
                name: user.firstName,
                role: user.userType
            }
        }

        jwt.sign(
            payload,
            process.env.SECRET,
            {expiresIn: "1h"},
            (err, token) => {
                if (err) throw err;
                res.json({token}).status(200)
            }
        )
    }
    catch(error) {
        console.log(error);
        res.json({"message": "You are not logged in."}).status(400);
    }
}

// User GET - get all registered users
exports.auth_user_get = (req, res) => {
    console.log(req.body)

    User.find()
    .then(user => {
        res.json({user})
    })
    .catch((err) => {
        console.log(err);
        res.send("???")
    })
}

// User GET - get one user by ID

exports.user_detail_get = (req, res) => {
    console.log("Req ID:", req.query.id)
    User.findById(req.query.id)
    .then(user => {
        res.json({user})
    })
    .catch((err) => {
        console.log(err)
    })
}