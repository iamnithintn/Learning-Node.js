const EmpService = require("../services/empServices");
const EmpModel = require("../models/empdetailsmodel");



// Create a new employee
exports.register = async (req, res) => {
  const { empID, empName, empEmail, empPhone } = req.body;

  if (!empID || !empName || !empEmail || !empPhone) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    await EmpService.newEmployee(empID, empName, empEmail, empPhone);
    res.status(201).json({ success: true, message: "Employee registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};



// Get all employees
exports.allEmp = async (req, res) => {
  try {
    const emps = await EmpModel.find();
    res.status(200).json(emps);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};



// Get a single employee by ID
exports.getSingleEmp = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    const emp = await EmpModel.findById(id);

    if (!emp) {
      return res.status(404).json({ message: `Employee with ID ${id} not found` });
    }

    res.status(200).json(emp);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};



// Update an employee by ID
exports.updateEmp = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    const updatedEmp = await EmpModel.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedEmp) {
      return res.status(404).json({ message: `Employee with ID ${id} not found` });
    }

    res.status(200).json(updatedEmp);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};



// Delete an employee by ID
exports.deletingEmp = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    const deletedEmp = await EmpModel.findByIdAndDelete(id);

    if (!deletedEmp) {
      return res.status(404).json({ message: `Employee with ID ${id} not found` });
    }

    res.status(200).json(deletedEmp);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

















// //posting data
// exports.register = async (req, res, next) => {
//   try {
//     const { empID, empName, empEmail, empPhone } = req.body;

//     const regSucess = await EmpService.newEmployee(
//       empID,
//       empName,
//       empEmail,
//       empPhone
//     );

//     res.json({ status: true, regSucess: "Emp Registered Sucessfully" });
//   } catch (error) {
//     throw error;
//   }
// };


// //receiving all the stored data
// exports.allEmp = async (req, res, next) => {
//   try {
//     const emps = await EmpModel.find();
//     res.status(200).json(emps);
//   } catch (error) {
//     res.status(500).json({ message: "Server Error" });
//   }
// };



// //receiving a single data
// exports.getSingleEmp = async (req, res, next) => {
//   try {
//     const { id } = req.params;

//     if (!id) {
//       return res.status(400).json({ message: " Invalid ID" });
//     }

//     const emp = await EmpModel.findById(id);

//     if (!emp) {
//       return res.status(404).json({ message: `Emp with ID ${id} not found` });
//     }

//     res.status(200).json(emp);
//   } catch (error) {
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// //updating data by ID
// exports.updateEmp = async (req, res, next) => {
//   try {
//     const { id } = req.params;

//     if (!id) {
//       return res.status(400).json({ message: " Invalid ID" });
//     }

//     const updatedEmp = await EmpModel.findByIdAndUpdate(id, req.body, {new: true});

//     if (!updatedEmp) {
//       return res.status(404).json({ message: `Emp with ID ${id} not found` });
//     }

//     res.status(200).json(updatedEmp);

//   } catch (error) {
//     res.status(500).json({ message: "Server Error" });
//   }
// };



// //deleting emp by Id
// exports.deletingEmp = async (req, res, next)=>{
//   try {
    
//     const { id } = req.params;

//     if (!id) {
//       return res.status(400).json({ message: " Invalid ID" });
//     }

//     const deletedEmp = await EmpModel.findByIdAndDelete(id);

//     if (!deletedEmp) {
//       return res.status(404).json({ message: `Emp with ID ${id} not found` });
//     }

//     res.status(200).json(deletedEmp);


//   } catch (error) {
    
//   }
// }
