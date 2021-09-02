const jwt = require('jsonwebtoken')

const checkAuthAdmin = (req, res, next) => {
    try {
        const token = req.headers.authorization
        console.log(token);
        jwt.verify(token, process.env.SECRET)
        next()
    }
    catch (err) {
        res.status(401).json({ error: "authorization failed!" })
    }
}
module.exports = checkAuthAdmin;