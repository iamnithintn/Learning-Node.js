const EmpModel = require('../models/empdetailsmodel')


class EmpService{
    static async newEmployee(empID, empName,empEmail, empPhone){
        try{
            const createEmp = new EmpModel({empID, empName,empEmail, empPhone});
        return await createEmp.save();
        // return await createEmp.

        }catch(error){
            throw error;
    }
}

    static async checkID(empID){ 
        try{
            return await EmpModel.findOne({empID});
        }catch(error){
            throw error;
        }
    }
}

module.exports = EmpService;