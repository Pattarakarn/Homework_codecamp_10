const db = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    const { code, username, password } = req.body;
    const targetUser = await db.User.findOne({ where: {username: username} });
    if (targetUser){
        res.status(400).send({ message: "Username already taken." });
    } else {
        const salt = bcryptjs.genSaltSync(12);
        const hashedPassword = bcryptjs.hashSync(password, salt);

        await db.User.create({
            username: username,
            password: hashedPassword,
            code: code
        });
    }
    res.status(201).send({ message: "User created" });
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const targetUser = await db.User.findOne({ where: { username: username } })
    if(!targetUser) {
        res.status(400).send({ message: "Username or password is wrong." });
    } else {
        const isCorrectPassword = bcryptjs.compareSync(password, targetUser.password);
        
        if(isCorrectPassword) {
            const payload = {
                name: targetUser.name,
                id: targetUser.id,
                code: targetUser.code,
            };
            const token = jwt.sign(payload, "pfrionjaelcpt", { expiresIn: 1800 });
            const code= targetUser.code;
            res.status(200).send({
                token: token,
                message: "Login successful.",
                department: code
            });
        } else {
            res.status(400).send({ message: "Username or password is wrong." });
        }
    }
    // res.send("login user");
};

module.exports = {
    registerUser,
    loginUser
};