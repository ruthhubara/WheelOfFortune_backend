const jwt = require('jsonwebtoken')

const checkAuthUser = (req, res, next) => {
    try {
        const token = req.headers.authorization
        jwt.verify(token, process.env.SECRET)
        next()
    }
    catch (err) {
        res.status(401).json({ error: "authorization failed!" })
    }
}
module.exports = checkAuthUser;