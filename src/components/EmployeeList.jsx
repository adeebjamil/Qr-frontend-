import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeCard from './EmployeeCard';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/employees`);
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  const handleUpdate = (updatedEmployee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee._id === updatedEmployee._id ? updatedEmployee : employee
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Employee List</h1>
      <p className="text-lg mb-4">Total Employees: {employees.length}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees.map((employee) => (
          <EmployeeCard key={employee._id} employee={employee} onUpdate={handleUpdate} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;