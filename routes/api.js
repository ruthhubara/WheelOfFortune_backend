const router = require('express').Router();
const admin = require('../controllers/admin.controller');
// const checkAuthUser = require('../middleware/checkAuthUser')
const checkAuthAdmin = require('../middleware/checkAuthAdmin')

router.post('/createAdmin', admin.createAdmin);
router.post('/loginAdmin', admin.loginAdmin);
router.post('/:adminId/updateAdmin', checkAuthAdmin, admin.updateAdmin);



module.exports = router;