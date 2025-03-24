const express=require('express');
const { addcontact, getcontact, getidcontact, updatecontact, deletecontact } = require('../controller/controller');

const router=express.Router();

router.route('/addcontact').post(addcontact);
router.route('/getcontact').get(getcontact);
router.route('/getidcontact/:id').get(getidcontact);
router.route('/updatecontact/:id').put(updatecontact);
router.route('/delcontact/:id').delete(deletecontact);

module.exports=router;