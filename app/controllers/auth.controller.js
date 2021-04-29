
const db = require("../models");
const User = db.users;

exports.signin = (req, res) => {
    User.findOne({
        email: req.body.email
    })
        .exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }

            if (!user.password) {
                return res.status(401).send({
                    message: "Invalid Password!"
                });
            }

            res.status(200).send({
                id: user._id,
                username: user.name,
                email: user.email
            });
        });
};