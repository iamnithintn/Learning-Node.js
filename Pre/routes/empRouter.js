const router = require('express').Router();
const EmpController = require('../controller/empController')


//send data router
router.post('/createEmp',EmpController.register);
//get all data router
router.get('/getAllEmp',EmpController.allEmp );
//getting a single emp data
router.get('/getSingleEmp/:id', EmpController.getSingleEmp);
//updating a single emp data
router.put('/updateEmp/:id', EmpController.updateEmp);
//deleting a single data
router.delete('/deleteEmp/:id', EmpController.deletingEmp);

module.exports = router;