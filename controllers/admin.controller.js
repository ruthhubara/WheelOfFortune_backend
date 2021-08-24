const Admin = require('../models/admin.model');
const repository = require('../repository/repository')
const jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');

const createAdmin = async (req, res) => {
    try {

        // const { } = 
        const { name, password, email } = req.body;
        const admin = await repository.findObject(Admin, { password: password, email: email })
        if (admin === null) {
            const newAdmin = new Admin({
                name, password, email,
            })
            console.log(newAdmin);
            let admin = await repository.createObject(Admin, newAdmin)
            await repository.saveObject(admin)
            console.log("aaaaaa");
            const token = jwt.sign({ password: password, email: email }, process.env.SECRET)
            console.log("xcdfvghj");
            res.status(200).send({ message: "save admin", newAdmin: newAdmin, token: token });
            sendEmail(email)

        }
        else {
            res.status(200).send('admin is alredy ')

        }

    }
    catch (err) {
        res.status(500).json({ error: err })
    }
}
const sendEmail = (email) => {
    return new Promise((resolve, reject) => {
        console.log(email);

        console.log('mail!')
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'wheeloffortunerpojectp@gmail.com',
                pass: 'wheeloffortunerpojectp123'
            }
        });

        const mailOptions = {
            from: 'wheeloffortunerpojectp@gmail.com',
            to: email,
            subject: 'אתר גלגל המזלות',
            text: 'הרשמתך לאתר בוצעה בהצלחה!!!!!!!!!!'
        };


        transporter.sendMail(mailOptions, function (error, info) {
            console.log('mail here!!', mailOptions)
            if (error) {
                reject(error)
            } else {
                resolve(console.log('Email sent: ' + info.response));
            }
        });
    })

}
const loginAdmin = async (req, res) => {
    try {
        const { password, email, } = req.body;
        console.log(password, email);
        const admin = await repository.findObject(Admin, { password: password, email: email })
        console.log(admin);
        if (admin == null) {
            res.status(200).send('this admin is not found,try again');
        }
        else {
            const token = jwt.sign({ password: password, email: email }, process.env.SECRET)
            res.status(200).json({ admin: admin, token: token })
        }
    }
    catch (err) {
        res.status(500).json({ error: err })
    }
}
const updateAdmin = async (req, res) => {
    try {
        console.log("hiiiiii");
        const admin = await repository.findObjectById(Admin, req.params.adminId)
        console.log(admin);
        if (admin) {
            const NewAdmin = await repository.findObjectByIdAndUpdate(Admin, req.params.adminId, req.body);
            console.log(NewAdmin);
            res.status(200).json({ massage: "update admin", admin: NewAdmin })
        }
        res.status(200).send('admin not found!! ')


    }
    catch (err) {
        res.status(500).json({ error: err })
    }
}
// const delateAdmin = async (req, res) => {
//     try {
//         const admin = await repository.findObjectById(Admin, req.params.adminId)
//         if (admin) {
//             let admin = await repository.findObjectByIdAndUpdate(Admin, { $pull: { users: user._id } })
//             console.log(admin);
//             await Weather.deleteMany({ userId: user._id });
//             const weathers = await Weather.find({ userId: user._id })
//             console.log(weathers);
//             await User.findOneAndDelete(req.params.userId);
//             array.forEach(element => {

//             });
//             res.status(200).json({ massage: "succ delate" })

//         }
//         res.status(404).send("user not found")
//     }




//     catch (err) {
//         res.status(500).json({ error: err })
//     }

// }
module.exports = {
    createAdmin,
    loginAdmin,
    updateAdmin
};